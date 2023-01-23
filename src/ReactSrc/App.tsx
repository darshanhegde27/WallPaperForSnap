import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './Redux/Store'
import { Provider } from 'react-redux'
//all lazy imports
const Home = React.lazy(() => import('./Components/Home/Home'))

const Routes = createBrowserRouter([
  {
    path: '/main_window',
    element: <Home />
  }
])

export default function App() {

  return (
    <div>
      <Provider store={store}>
        <React.Suspense>
          <RouterProvider router={Routes}></RouterProvider>
        </React.Suspense>
      </Provider>
    </div>
  );
}

