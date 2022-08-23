import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePost} from '../actions'

const PostsShow = (props) => {
  const dispatch = useDispatch();

  const post = useSelector(({ posts }) => {
    return posts.find((post, i) => {
      return i === parseInt(props.match.params.id);
    });
  });

  if(!post){
    return<div>Not Found</div>
  }

  const renderCategories = () => {
    return post.categories.map((category,i)=> {
      if((post.categories.length - 1) === i){
        return <span key={i}>{category}</span>
      } else {
        return <span key={i}>{category}, </span>
      }
    })
  }

  const onDeleteClick = () =>{
    dispatch(deletePost(parseInt(props.match.params.id)))
    props.history.push('/')
  }

  return (
    <div>
      <Link to="/">Back To Index</Link>
      <br></br>
      <br></br>
      <button
        className="btn btn-danger pull-xs-right"
        onClick={onDeleteClick}
      >
        Delete Post
      </button>
      <br></br>
      <br></br>
      <h3>{post.title}</h3>
      <h6><strong>Categories:</strong> {renderCategories()}</h6>
      <p>{post.content}</p>
    </div>
  );
};

export default PostsShow;