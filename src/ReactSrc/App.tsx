import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './Redux/Store'
import { Provider } from 'react-redux'
import Routes from './Routes';
//all lazy imports

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

