import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
//all lazy imports
const Home = React.lazy(() => import('./Components/Home/Home'))
const paths = [{
    path: '/main_window',
    element: <Home />
}]
const Routes = createBrowserRouter(paths)
export default Routes;