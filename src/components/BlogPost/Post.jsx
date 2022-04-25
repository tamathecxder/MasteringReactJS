import React from 'react';

const Post = (props) => {
  return (
    <>
      <div className="col">
        <div className="card shadow-sm">
          <img className="img-fluid" src="https://placeimg.com/200/150/tech" height={255} alt="dummy_image" />

          <div className="card-body">
            <h4 className="fw-bold">{props.title}</h4>
            <p className="fw-normal text-muted">Post by:<a href="#" className="text-decoration-none text-dark"> {props.author}</a></p>
            <p className="card-text">{props.desc}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Post.defaultProps = {
  title: 'Example Title With Default Props',
  author: 'John Doe',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
}

export default Post;