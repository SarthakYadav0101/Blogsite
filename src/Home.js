import React from 'react';
import BlogList from './BlogList';

const Home = ({ blogs, onBlogSelect }) => {
  return (
    <div className="home">
      <BlogList 
        blogs={blogs} 
        title="All Blogs!" 
        onBlogSelect={onBlogSelect}
      />
    </div>
  );
};

export default Home;