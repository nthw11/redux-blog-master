import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../actions';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const postSchema = Yup.object().shape({
  title: Yup.string().required().max(30),
  categories: Yup.array()
  .transform(function (value, originalValue) {
    if(this.isType(value) && value !== null){
      return value
    }
    return originalValue ? originalValue.split(/[\s,]+/): [];
  }).required().min(1).max(5),
  content: Yup.string().required().min(120)
});

const PostsNew = (props) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(postSchema)
  });

  const dispatch = useDispatch();

  const handleFormSubmit = (data) => {
    
    dispatch(
      createPost(data, () => {
        props.history.push("/");
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className='form-group'>
        <label>Title for Post</label>
        <input
          className='form-control'
          name='title' ref={register({ required: true })}></input>
          {errors.title?.message}
      </div>

      <div className="form-group">
        <label>Categories</label>
        <input 
          className="form-control"
          name='categories' ref={register}></input>

      </div>

      <div className="form-group">
        <label>Post Content</label>
        <textarea type='text-area' 
          className="form-control"
          name='content' ref={register}></textarea>
          {errors.content?.message}
      </div>

      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
};

export default PostsNew;