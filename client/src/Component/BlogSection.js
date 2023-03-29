import React from 'react'

const BlogSection = () => {
  return (
    <div className="blog-section">
    <div className="container">
        <div className="heading-blog">
            <h5>BUILDING THE FUTURE</h5>
            <h2>Latest From the <mark className="banner-con work-mark">Blog</mark></h2>
        </div>
        <div className="row blog-d">
            <div className="blog-a">
                <img src={require("../images/blog.png")} alt="" />
                <ul className="blog-date">
                <li><a href="#">AI Layouts</a></li>
                <li><i className="fa fa-circle" aria-hidden="true"></i></li>
                <li><a href="#">Nov 24, 2022</a></li>
            </ul>
                <h3>Lorem ispum is a simple dummy text used for print media..</h3>
                <a href="#">Read More <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className="blog-a">
                <img src={require("../images/blog.png")} alt="" />
                <ul className="blog-date">
                <li><a href="#">AI Layouts</a></li>
                <li><i className="fa fa-circle" aria-hidden="true"></i></li>
                <li><a href="#">Nov 24, 2022</a></li>
            </ul>
                <h3>Lorem ispum is a simple dummy text used for print media..</h3>
                <a href="#">Read More <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className="blog-a">
                <img src={require("../images/blog.png")} alt="" />
                <ul className="blog-date">
                <li><a href="#">AI Layouts</a></li>
                <li><i className="fa fa-circle" aria-hidden="true"></i></li>
                <li><a href="#">Nov 24, 2022</a></li>
            </ul>
                <h3>Lorem ispum is a simple dummy text used for print media..</h3>
                <a href="#">Read More <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>
    </div>
  </div>  
  )
}

export default BlogSection