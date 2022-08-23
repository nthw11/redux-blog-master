import { DELETE_POST, FETCH_POSTS, CREATE_POST } from "../actions";

const defaultState = 
  [
      { "title": "Starting 2021 Right", 
        "categories": ["health"], 
        "content": "I'm stating 2021 off the right way!"
      },
      { "title": "Learn to Code", 
        "categories": ["career", "butts"], 
        "content": "I'm learning to code!"
      },
      { "title": "Get Rich Quick!", 
        "categories": ["finances"], 
        "content": "Save your money!"
      }
    ]



const postsReducer = function(state = defaultState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return state;
    case DELETE_POST:
      return state.filter((post, i) => i !== action.payload);
    case CREATE_POST:
      return [action.payload, ...state];
    default:
      return state;
  }
}

export default postsReducer