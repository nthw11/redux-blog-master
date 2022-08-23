import { normalize, schema } from 'normalizr';
import { FETCH_POSTS, FETCH_POST, DELETE_POST, CREATE_POST } from "../actions";
import _ from 'lodash';

const postsSchema = new schema.Entity('posts', undefined, {
  idAttribute: (value) => value._id
});

const DEFAULT_STATE = {
  entries: {},
  order: []
};

const postsReducer = function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      const normalizedPosts = normalize(action.payload.data, [postsSchema])

      return {
        entries: normalizedPosts.entities.posts,
        order: normalizedPosts.result
      }
    case FETCH_POST:
      return {
        entries: { ...state.entries, [action.payload.data._id]: action.payload.data },
        order: _.union([...state.order], [action.payload.data._id])
      };
    case DELETE_POST:
      return {
      entries: _.omit(state.entries, action.payload.data),
      order: state.order.filter(id => id !== action.payload.data)
    }
    case CREATE_POST:
      return {
        entries: { ...state.entries, [action.payload.data._id]: action.payload.data },
        order: _.union([...state.order], [action.payload.data._id])
      };
    default:
      return state;
  }
};

export default postsReducer;