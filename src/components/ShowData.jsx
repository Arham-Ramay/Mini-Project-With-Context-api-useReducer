import React, { useContext } from "react";
import { BioDataContext } from "./Contextpart";
import SearchBar from "./SearchBar";

function ShowData() {
  const { state,removePost} = useContext(BioDataContext);
  // const {mydata}=useContext(BioDataContext)
  //remove post
  const handleDelete=(postId)=>{
    removePost(postId)
    // console.log("deleting post",postId)
  }

  if (state.loading) {
    return <div>loading...</div>;
  }

  if (state.error) {
    return <div>Error: {state.error}</div>;
  }
  

  return (
    <div>
      <h1>Mini Project</h1>
      <div className="search-bar d-flex align-items-center justify-content-center mt-2">
      <SearchBar/>
      </div>
     
      <div className="container">
        <div className="row mt-3">
          {state.mydata &&
            state.mydata.map((user) => {
              return (
                // <li key={user.id}>{user.name}</li>
                <div className="col-lg-3 p-3" key={user.id}>
                  <div className=" ">
                    <div className="card ">
                      <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">
                          {user.address.city}
                        </h6>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <button onClick={()=>handleDelete(user.id)}  href="#" className="btn btn-primary w-100">
                          Remove Card
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ShowData;
