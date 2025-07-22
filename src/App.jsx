import React, { lazy, Suspense, useState } from "react";
//import User from "./User";
const User = lazy(() => import("./User.jsx"));
const App = () => {
  const [load, setLoad] = useState(false);
  return (
    <div>
      {load ? (
        <Suspense fallback={<h3>Loading...</h3>}>
          <User />
        </Suspense>
      ) : null}
      <h1 className="text-xl">Lazy Loader</h1>
      <button className="btn" onClick={() => setLoad(true)}>
        Load User
      </button>
    </div>
  );
};

export default App;
