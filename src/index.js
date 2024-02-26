import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Layout from './Layout';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,NavLink,RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import { TheComponent } from './components/TheComponent';
import {Home} from './pages/Home'


const router = createBrowserRouter([
  {
  path:'/',
  element:<div className='page'>
            <Layout/>
            <div className='home-page'>
              <Home/>
            </div>
          </div>
  },
  {
    path:'*',
    element:<div>404 NOT FOUND, you are lost, get back to the <NavLink to="/">home page</NavLink></div>
  },
  {
    path:'/:id',
    element:<div className='page'>
              <div>
                <Layout/>
              </div>
              <TheComponent/>
            </div>
  }

  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
