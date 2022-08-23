const header = (props) => {
  return (
    <div>
      <div className='jumbotron text-center'>
        <div className="container">
          <h1 className="jumbotron-heading">Redux Blog</h1>
        </div>
      </div>
      <div className='container'>
        {props.children}
      </div>
    </div>
  )
};

export default header;