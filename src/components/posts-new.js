import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {createPost } from '../actions'

const PostsNew = (props) => {
  const [title, setTitle] = useState('')
  const [categories, setCategories] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost({
      title,
      categories: categories.split(' '),
      content
    }));
    props.history.push('/')
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label>Title for Post</label>
        <input
          className="form-control"
          value={title}
          onChange={(e)=> setTitle(e.target.value)}></input>
      </div>
      
      <div className="form-group">
        <label>Categories</label>
        <input
          className="form-control"
          value={categories}
          onChange={(e)=> setCategories(e.target.value)}></input>
      </div>
      <div className="form-group">
        <label>Post Content</label>
        <textarea
          className="form-control"
          value={content}
          onChange={(e)=> setContent(e.target.value)}></textarea>
      </div>
      <button className='btn btn-primary' type='submit' >Submit</button>

    </form>
  )
}

export default PostsNew