import React from "react";
import "./App.css";
// import SearchBar from "./components/SearchBar";
import ShowData from "./components/ShowData";
import Contextpart from "./components/Contextpart";

function App() {
  return (
    <>
      <Contextpart>
        {/* <SearchBar/> */}
        <ShowData />
      </Contextpart>
    </>
  );
}

export default App;
