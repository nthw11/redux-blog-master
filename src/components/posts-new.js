import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {createPost } from '../actions'
import _ from 'lodash'

const PostsNew = (props) => {
  const [title, setTitle] = useState('')
  const [categories, setCategories] = useState('')
  const [content, setContent] = useState('')
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch()

  const validFields = (input) => {
    const errorMessages = _.reduce(input, function(acc, field, key) {
      if(!field){
        acc[key] = {message: `The ${key} field is required`}
      }
      if(key === 'title' && field.length > 121) {
        acc[key] = {message: `The ${key} field must not be longer than 120 characters`}
      }
      return acc;
    }, {})

    setErrors(errorMessages)

    return _.isEmpty(errorMessages)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(validFields({title,categories, content})){

      
      dispatch(createPost({
        title,
        categories: categories.split(' '),
        content
      }, () => {
        props.history.push('/')
      }
      ));
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label>Title for Post</label>
        <input
          className="form-control"
          value={title}
          onChange={(e)=> setTitle(e.target.value)}></input>
        <p>{errors.title?.message}</p>
      </div>
      
      <div className="form-group">
        <label>Categories</label>
        <input
          className="form-control"
          value={categories}
          onChange={(e)=> setCategories(e.target.value)}></input>
        <p>{errors.categories?.message}</p>
      </div>
      <div className="form-group">
        <label>Post Content</label>
        <textarea
          className="form-control"
          value={content}
          onChange={(e)=> setContent(e.target.value)}></textarea>
        <p>{errors.content?.message}</p>
      </div>
      <button className='btn btn-primary' type='submit' >Submit</button>

    </form>
  )
}

export default PostsNew