import Main from './components/Main';
import Home from './components/Home';
import Courses from './components/Courses';
import Blog from './components/Blog';
import Faq from './components/Faq';
import Login from './components/Login';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useContext } from 'react';
import { LDContext } from './contexts/ThemeContext';
import Register from './components/Register';

const routes = createBrowserRouter(
  [{
    path: '/',
    element: <Main></Main>,
    children:
      [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'courses',
          element: <Courses></Courses>
        },
        {
          path: 'faq',
          element: <Faq></Faq>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: '*',
          element: <div className='text-center'><h1>Error 404</h1><h4>Page not found!!!</h4><p>Make sure you have entered correct url.</p></div>
        }
      ]
  }]
)
function App() {
  const { theme } = useContext(LDContext)
  return (
    <div className="" id={theme} >
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
