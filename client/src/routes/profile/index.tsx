/** @jsx h */
import { h, FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';
import fetchRetry from '../../util/fetchRetry.js';

const API_ORIGIN = 'http://localhost:9000';

// Note: `user` comes from the URL, courtesy of our router
// so it is actually only a string containing a name, not a user object,
// based on the example created by preact cli default.

const Profile: FunctionComponent<{ user?: string }> = ({ user }) => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(10);

  const loadItems = () => {
    fetchRetry(`${API_ORIGIN}/v0/`)
      .then(items => setItems(items))
      .catch((err) => {
        console.log(`failed to fetch (catching fetchRetry.catch) err: ${err}`);
      });
  }

  return (
    <div>
      <h1>Profile: {user}</h1>
      <p>This is the user profile for a user named {user}.</p>

      <p>
        <button
          onClick={() => loadItems()}
          class="bg-blue-900"
        >
          query backend server
        </button>
      </p>

      <h2>Items</h2>
      <p>
        {items}
      </p>

      <p>
        <button onClick={() => setCount((count) => count + 1)}>Click Me</button>{' '}
        Clicked {count} times.
      </p>
    </div>
  );
};

export default Profile;
