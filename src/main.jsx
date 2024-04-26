import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './pages/routes';
import Layout from './components/layout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  </React.StrictMode>,
)
