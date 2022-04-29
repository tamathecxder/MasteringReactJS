import React, { Component } from "react";
import './BlogPost.css';
import Footer from "../../components/BlogPost/Footer";
import Header from "../../components/BlogPost/Header";
import Post from "../../components/BlogPost/Post";
import axios from 'axios';

class BlogPost extends Component {
  state = {
    posts: [],
    blogPostForm: {
      userId: 1,
      id: ``,
      title: ``,
      author: `John Doe`,
      body: ``
    }
  }

  blogPostFormHandler = (e) => {
    let newBlogPostForm = { ...this.state.blogPostForm };
    let timestamps = new Date().getTime();

    newBlogPostForm.id = timestamps;
    newBlogPostForm[e.target.name] = e.target.value;

    this.setState({
      blogPostForm: newBlogPostForm
    }, () => {
      // console.log('The object value/state : ', this.state.blogPostForm);
    });
  }

  getPostAPI = () => {
    axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
      .then((res) => {
        this.setState({
          posts: res.data
        })
      });
  }

  submitDataHandler = (e) => {
    e.preventDefault();
    let data = this.state.blogPostForm;

    console.log(this.state.blogPostForm);
    axios.post('http://localhost:3004/posts', data)
      .then((res, err) => {
        console.log(res);

        if (res.status == 201) {
          alert('Your post has been successfully created!');
        } else {
          alert('Your post has an error!');
        }

        this.getPostAPI();
      })
  }

  removeDataHandler = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`)
      .then((res) => {
        console.log(res);
        this.getPostAPI();
      })
  }

  updateDataHandler = (data) => {
    let updatedData = this.state.blogPostForm;

    this.setState({
      blogPostForm: data
    }, () => {
      console.log(data);
    })
    // axios.put(`http://localhost:3004/posts/${data}`, updatedData)
    //   .then((res) => {
    //     console.log(res);
    //     this.getPostAPI();
    //   }) 
  }

  componentDidMount() {
    this.getPostAPI();
  }

  render() {
    return (
      <>
        <Header />

        <main>
          <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Simple Personal Blog</h1>
                <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                <p>
                  <button type="button" className="btn btn-primary my-2 me-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Make a simple post here
                  </button>
                  <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                </p>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Your posts</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-mb-6 text-start">
                            <form>
                              <div className="mb-3">
                                <label htmlFor="title" className="form-label">Post title</label>
                                <input type="text" onChange={this.blogPostFormHandler} className="form-control" name="title" id="title" aria-describedby="title" placeholder="Input your post title here" />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="body" className="form-label">Description</label>
                                <textarea onChange={this.blogPostFormHandler} className="form-control" name="body" id="desc" rows="3" placeholder="Input your litle describe about your post here"></textarea>
                              </div>
                              <button type="submit" onClick={this.submitDataHandler} className="btn btn-primary">Submit</button>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="album py-5 bg-light">
            <div className="container">

              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {
                  this.state.posts.map((post) => {
                    return (
                      <Post
                        key={post.id}
                        data={post}
                        removeData={this.removeDataHandler}
                        updateData={this.updateDataHandler}
                      />
                    )
                  })
                }
              </div>
            </div>
          </div>

        </main>
        <Footer />
      </>
    )
  }
}

export default BlogPost;