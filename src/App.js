import Cloud1 from './Cloud1';
import Favorites from './Favorites';
import SearchScreen from './components/SearchScreen';
import './App.css';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'

  const router = createBrowserRouter([{
    path: '/',
    element: <SearchScreen />
  },
{
  path: '/favourite',
  element: <Favorites />
},
{
  path: '/weather',
  element: <Cloud1 />
}
])

function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
