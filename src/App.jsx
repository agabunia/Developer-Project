import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import router from './routers/router';

function App() {
  return (
    <div className='app'>
      <RouterProvider router={createBrowserRouter(router)} />
    </div>
  );
}

export default App;
