import React, { useState } from 'react';

const Create = ({ onBlogAdd, onCancel }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title || !body) {
      alert('Please fill in all fields');
      return;
    }
    
    setIsPending(true);

    const newBlog = {
      title,
      body,
      author,
      date: new Date().toISOString().split('T')[0]
    };

    // Simulate API call
    setTimeout(() => {
      onBlogAdd(newBlog);
      setIsPending(false);
    }, 1000);
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      
      <form onSubmit={handleSubmit} className="create-form">
        <div className="form-group">
          <label>Blog title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title..."
          />
        </div>
        
        <div className="form-group">
          <label>Blog body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write your blog content here..."
            rows="10"
          />
        </div>
        
        <div className="form-group">
          <label>Blog author:</label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
        </div>
        
        <div className="form-actions">
          <button type="button" onClick={onCancel} className="cancel-btn">
            Cancel
          </button>
          <button type="submit" disabled={isPending} className="submit-btn">
            {isPending ? 'Adding Blog...' : 'Add Blog'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;