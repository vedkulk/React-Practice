import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Layout from './Layout';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import Home from './components/Home/Home';
import About from './components/About/About';
import User from './components/User/User.jsx';
import Github from './components/Github/Github';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/> {/* "index" is shorthand for path="/" */}
      <Route path="about" element={<About/>}/>
      <Route path="user" element={<User/>}>
        <Route path=":userid" element={<User/>}/> {/* Nested dynamic route */}
      </Route>
      <Route path="github" element={<Github/>}/>
      <Route path="*" element={<div>Not Found</div>}/>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
