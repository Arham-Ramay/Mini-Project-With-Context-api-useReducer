const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        loading: false,
        mydata: action.payload,
        error: "",
      };

    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        mydata: [],
        error: "something went wrong",
      };

      case "REMOVE_POST":
        return {
            ...state,
            loading:false,
            mydata:state.mydata.filter((post)=>post.id!==action.payload),
            error:"",
             
        }

        case "SEARCH-POST":
            return {
              ...state,
              query: action.query,
              mydata: state.mydata.filter((post) =>
                post.name.toLowerCase().includes(action.query.toLowerCase())
              ),
              error: "",
            };

    default:
      return state;
  }
};
export default reducer;

