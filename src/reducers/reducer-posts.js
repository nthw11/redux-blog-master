import { act } from "react-dom/test-utils";
import { FETCH_POSTS, FETCH_POST, DELETE_POST, CREATE_POST } from "../actions";

const postsReducer = function (state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload.data.map(function (p) {
        return {
          title: p.title || "",
          categories: p.categories || [],
          content: p.content || "",
          _id: p._id || "",
        };
      });
    case FETCH_POST:
      if(state.length > 0){
        return state.map(function (p){
          if(p._id === action.payload.data._id){
            return action.payload.data;
          } else {
            return p;
          }
        })
      } else {
        return [action.payload.data, ...state];
      }
    case DELETE_POST:
      return state.filter(post => post._id === action.payload.data)
    case CREATE_POST:
      return [action.payload.data, ...state];
    default:
      return state;
  }
};

export default postsReducer;