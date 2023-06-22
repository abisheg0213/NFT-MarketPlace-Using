import React from "react";
import { getdata } from "./hweb3";
function App() {
  function sumbit() {
    getdata()
      .then((result) => {
        console.log(result);
      })
      .catch((er) => {
        console.log("error");
      });
  }
  return (
    <div>
      <p></p>
      <button onClick={sumbit}>Click</button>
    </div>
  );
}
export default App;
