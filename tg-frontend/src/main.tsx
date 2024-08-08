import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './reset.css'
import 'normalize.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FormPage from './pages/FormPage.tsx'
import ProductListPage from './pages/ProductListPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "form",
        element: <FormPage />,
      },
      {
        path: "product-list",
        element: <ProductListPage />,
      },
    ],
  },


]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
