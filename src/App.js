import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import './App.css';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "My First Blog",
      body: "Welcome to my first blog post! This is where I'll be sharing my thoughts and experiences as I learn React and web development.",
      author: "mario",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Web Dev Top Tips",
      body: "Here are some essential tips for web development: Always write clean code, use semantic HTML, keep learning new technologies, and practice regularly.",
      author: "yoshi",
      date: "2024-01-20"
    },
    {
      id: 3,
      title: "Why I Love React",
      body: "React has completely changed how I think about building user interfaces. The component-based architecture makes code much more maintainable.",
      author: "mario",
      date: "2024-01-25"
    }
  ]);
  const [currentBlog, setCurrentBlog] = useState(null);

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const handleBlogSelect = (blog) => {
    setCurrentBlog(blog);
    setCurrentView('details');
  };

  const handleBlogDelete = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
    setCurrentView('home');
  };

  const handleBlogAdd = (newBlog) => {
    setBlogs([...blogs, { ...newBlog, id: Date.now() }]);
    setCurrentView('home');
  };

  return (
    <div className="app">
      <Navbar 
        currentView={currentView} 
        onViewChange={handleViewChange} 
      />
      
      {currentView === 'home' && (
        <Home 
          blogs={blogs} 
          onBlogSelect={handleBlogSelect}
        />
      )}
      
      {currentView === 'create' && (
        <Create 
          onBlogAdd={handleBlogAdd}
          onCancel={() => setCurrentView('home')}
        />
      )}
      
      {currentView === 'details' && currentBlog && (
        <BlogDetails 
          blog={currentBlog}
          onDelete={handleBlogDelete}
          onBack={() => setCurrentView('home')}
        />
      )}
    </div>
  );
};

export default App;