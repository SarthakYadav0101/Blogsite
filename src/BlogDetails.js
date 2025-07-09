import React from 'react';

const BlogDetails = ({ blog, onDelete, onBack }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      onDelete(blog.id);
    }
  };

  return (
    <div className="blog-details">
      <button onClick={onBack} className="back-btn">← Back to blogs</button>
      
      <div className="blog-content">
        <div className="blog-header">
          <h1>{blog.title}</h1>
          <div className="blog-meta">
            <span>Written by {blog.author}</span>
            <span>{blog.date}</span>
          </div>
          <button onClick={handleDelete} className="delete-btn">Delete</button>
        </div>
        
        <div className="blog-body">
          <p>{blog.body}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;