import React from 'react'
import ReactDOM from 'react-dom/client'
import '@unocss/reset/normalize.css'
import './index.css'
import 'virtual:uno.css'
import { RouterProvider} from "react-router-dom";
import router  from '@/routes'


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);
