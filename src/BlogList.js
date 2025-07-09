import React from 'react';

const BlogList = ({ blogs, title, onBlogSelect }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        blogs.map(blog => (
          <div key={blog.id} className="blog-preview">
            <h3 onClick={() => onBlogSelect(blog)}>{blog.title}</h3>
            <p>{blog.body.substring(0, 100)}...</p>
            <div className="blog-meta">
              <span>Written by {blog.author}</span>
              <span>{blog.date}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;