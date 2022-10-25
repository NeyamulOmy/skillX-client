import Main from './components/Main';
import Home from './components/Home';
import Courses from './components/Courses';
import Blog from './components/Blog';
import Faq from './components/Faq';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useContext } from 'react';
import { LDContext } from './contexts/ThemeContext';

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
          path: '/courses',
          element: <Courses></Courses>
        },
        {
          path: '/faq',
          element: <Faq></Faq>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
  }]
)
function App() {
  const { theme } = useContext(LDContext)
  return (
    <div className="App" id={theme} >
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
