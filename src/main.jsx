import { createHashRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import routes from './assets/routes/index.jsx'
import './index.css'

const router = createHashRouter(routes);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
