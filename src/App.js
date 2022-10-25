import Main from './components/Main';
import Home from './components/Home';
import Courses from './components/Courses';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
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
        }
      ]
  }]
)
function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
