export const FETCH_POSTS = "FETCH_POSTS";
export const DELETE_POST = "DELETE_POST";
export const CREATE_POST = "CREATE_POST"

export function fetchPosts() {
  return {
    type: FETCH_POSTS
  };
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    payload: id
  }
}

export function createPost(values){
  const post = Object.assign({}, values)
  return{
    type: CREATE_POST,
    payload: post
  }
}