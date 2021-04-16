import * as __SNOWPACK_ENV__ from './_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;


          import './_snowpack/pkg/@prefresh.snowpack.runtime.v3.1.2.js';
          import { flushUpdates } from './_snowpack/pkg/@prefresh.snowpack.utils.v3.1.2.js';

          const prevRefreshReg = self.$RefreshReg$ || (() => {});
          const prevRefreshSig = self.$RefreshSig$ || (() => (type) => type);

          self.$RefreshSig$ = () => {
            let status = 'begin';
            let savedType;
            return (type, key, forceReset, getCustomHooks) => {
              if (!savedType) savedType = type;
              status = self.__PREFRESH__.sign(type || savedType, key, forceReset, getCustomHooks, status);
              return type;
            };
          };

          self.$RefreshReg$ = (type, id) => {
            self.__PREFRESH__.register(type, "./App.js" + " " + id);
          };

          import { h } from "./_snowpack/pkg/preact.v10.5.13.js";
import { Router } from "./_snowpack/pkg/preact-router.v3.2.1.js";
import Header from "./components/header/index.js";
import Home from "./routes/home/index.js";
import Profile from "./routes/profile/index.js";

const App = () => /* @__PURE__ */h("div", {
  id: "app"
}, /* @__PURE__ */h(Header, null), /* @__PURE__ */h(Router, null, /* @__PURE__ */h(Home, {
  path: "/"
}), /* @__PURE__ */h(Profile, {
  path: "/profile/",
  user: "me"
}), /* @__PURE__ */h(Profile, {
  path: "/profile/:user"
})), /* @__PURE__ */h("div", {
  class: "wrapper\n            | h-full\n            | p-8 lg:p-20\n            | bg-gradient-to-br from-red-700 to-green-700\n            |  "
}, /* @__PURE__ */h("div", {
  class: "box\n          | px-8 py-4 p\n          | shadow-md lg:shadow-2xl\n          | border border-green-700 border-solid\n          | bg-green-500 text-green-50\n          | max-w-xs lg:max-w-xl mx-auto\n          | transform rotate-6\n          | rounded md:rounded-2xl"
}, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda eaque id maxime optio quidem quo? Alias doloribus facilis fugiat quaerat? Aliquam delectus dolore in libero, modi molestias qui tempore?")));

_c = App;
export default App;

var _c;

$RefreshReg$(_c, "App");

          self.$RefreshSig$ = prevRefreshSig;
          self.$RefreshReg$ = prevRefreshReg;

          
          if (undefined /* [snowpack] import.meta.hot */ ) {
            undefined /* [snowpack] import.meta.hot */ .accept(({ module }) => {
              try {
                flushUpdates();
              } catch(e) {
                undefined /* [snowpack] import.meta.hot */ .invalidate();
              }
            });
          }
          

        