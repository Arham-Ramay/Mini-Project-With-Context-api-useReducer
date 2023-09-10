import React, { useReducer, useEffect, createContext} from "react";
import axios from "axios";
import reducer from "./reducer";

let initialState = {
  loading: true,
  mydata: [],
  query:"name",
  error: "",
};

const BioDataContext = createContext();

function Contextpart({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch({ type: "FETCH_DATA", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: "Something went wrong" });
      });
  }, []);
  
 //removepost
 const removePost=(postId)=>{
  dispatch({
    type:"REMOVE_POST",
    payload:postId,
  })
 }

 //dcss
 const searchPost=(search)=>{
  dispatch({type:"SEARCH-POST",query:search})}

  return (
    <BioDataContext.Provider value={{state,removePost,searchPost}}>{children}</BioDataContext.Provider>
  );
}

export default Contextpart;
export { BioDataContext };