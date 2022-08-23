import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../actions";
import _ from 'lodash'

const PostsIndex = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchPosts]);

  console.log(posts)

  function renderPosts() {
    if (_.isEmpty) {
      return posts.order.map((postId) => (
        <li className="list-group-item" key={postId}>
          <Link to={`/posts/${postId}`}>{posts.entries[postId].title}</Link>
        </li>
      ));
    }
    return <div>No posts to show</div>;
  }

  return (
    <div>
      <div className="text-xs-right">
        <Link className="btn btn-primary" to="/posts/new">
          Add a Post
        </Link>
      </div>
      <br />
      <h3>Posts</h3>
      <ul className="list-group">{renderPosts()}</ul>
    </div>
  );
};

export default PostsIndex;