import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import apiRouter from './routes/api.js';
// import mockBooks from './mock/books';

const connect = mongoose.connect;
const connection = mongoose.connection;

const app = express();
const port = 9000; // default port to listen

const corsOptions = {
  origin: '*', /* todo: use actual url */
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(helmet({
  hsts: false,
}));
app.use('/api', apiRouter)

app.get('/v0/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send('[{"Title": "Hallo"}]');
});

app.post('/v0/hello/:name', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(`{"1": "Hallo ${req.params.name} you sent ${req.body.message}"}`);
});

const connectWithRetry = () => {
  console.log("connectWithRetry() called ...");
  // mongodb is the service name from docker-compose, which works in a docker setup according to
  // https://stackoverflow.com/questions/51011552/mongodb-on-with-docker-failed-to-connect-to-server-localhost27017-on-first-c
  // It must be changed anyway for a cloud deployment enviromenment.
  return connect('mongodb://mongodb:27017/books', {
    // This is the minimum needed to connect the books database running locally on the default port (27017).
    // but what exactly does "the books database running locally" mean
    // "You only need to define a subpath for the URL to define a specific database.
    // If the database doesn't exist yet, MongoDB will create one for you."
    // but if all of this is true, where is the fucking problem?
    // mongodb | "ctx":"listener","msg":"Listening on","attr":{"address":"0.0.0.0"}}
    // mongodb | "ctx":"listener","msg":"Waiting for connections","attr":{"port":27017,"ssl":"off"}}
    // server_app | Connection Error MongooseServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017
    // server_app | at NativeConnection.Connection.openUri (/usr/src/app/node_modules/mongoose/lib/connection.js:846:32)

    // (connection fails with or without using unifiedTopology)
    useUnifiedTopology: true,
    useNewUrlParser: true

  }).then(
    async () => {
      /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
      console.log("we seem to be connected, then...");
      const db = connection;
      db.on('error', console.error.bind(console, 'Connection Error'));
      const booksCollection = db.collection('books');
      const query = { isbn: '9780061808128' };
      const cursor = booksCollection.find(query, {});
      if ((await cursor.count()) === 0) {
        const mockData = [{
          'isbn': '9780061808128',
          'title': 'To Kill a Mockingbird',
          'author': 'Harper Lee'
        }];
        console.log('insert mock data');
        booksCollection.insertMany(mockData);
      } else {
        console.log('mock data already existed.');
      }

      app.listen(port, () => {
        console.log(`server listing on port ${port}`);
      })
    },
    err => {
      console.error('handle initial connection error in mongoose.connect using unified topology, err:', err);
      setTimeout(connectWithRetry, 1000);
    }
  );
}

connectWithRetry();


