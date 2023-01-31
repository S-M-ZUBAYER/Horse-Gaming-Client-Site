import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import ErrorElement from './components/ErrorElement/ErrorElement';
import Home1 from './components/HomePage/Home/Home1';
import Home3 from './components/HomePage/Home/Home3';
function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
          path: '/',
          element: <Home1></Home1>
        },
        {
          path: '/',
          // element: <home1></home1>
        },
        {
          path: '/',
          element: <Home3></Home3>
        },
        {
          path: '/',
          // element: <home1></home1>
        },
        {
          path: '/',
          // element: <home1></home1>
        },
        {
          path: '/',
          // element: <home1></home1>
        },
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={routes}>

      </RouterProvider>

    </div >
  );
}

export default App;
