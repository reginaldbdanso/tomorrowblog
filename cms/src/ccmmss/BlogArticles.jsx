import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import Header from './Header';
import Sidebar from './Sidebar';
import Section from './Section';
import Files from '../pages/Files';
import Users from '../pages/Users';

function BlogArticles() {
  const { user } = useAuthContext()


  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <BrowserRouter>
        <Header />
        <main className="w-full max-w-[1403px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <Sidebar />
            <div className="pages">
              <Routes>
                <Route path="/" exact element={!user ? <Section /> : <Navigate to="/login" />} />
                <Route path="/files" exact element={!user ? <Files /> : <Navigate to="/files" />} />
                <Route path="/users" exact element={!user ? <Users /> : <Navigate to="/users" />} />
                {/* <Route path="/about" exact element={user ? <About /> : <Navigate to="/login" />} /> */}
                <Route path="/login" exact element={user ? <Login /> : <Navigate to="/" />} />
                <Route path="/signup" exact element={!user ? <Signup /> : <Navigate to="/" />} />
              </Routes>
            </div>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default BlogArticles;
