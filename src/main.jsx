import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import io from 'socket.io-client'
import App from './App.jsx'
import Chat from './components/Chat.jsx'
import Login from './components/Login.jsx'
import NASA from './components/NASA.jsx'
import TestSocket from './components/TestSocket.jsx'
import './index.css'

const socket = io.connect('http://localhost:3000');

const router = createBrowserRouter([
  {
    path: '/',
    element: <App socket = {socket}/>
  },
  {
    path: '/exapmle',
    element: (<><div>Hola, soy un elemento</div></>)
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/chat",
    element: <Chat />
  },
  {
    path: "/nasa",
    element: <NASA />
  },
  {
    path: "/socket",
    element: <TestSocket socket = {socket}/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
