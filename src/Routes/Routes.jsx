
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Contact from '../Page/Contact';
import Login from '../Page/Login';
import Register from '../Page/Register';
import AdminLayout from '../Components/Layout/AdminLayout';
import AddServices from '../Page/AddServices';
import Home from '../Page/Home';
import PrivateRoute from './PrivateRoute';
import About from '../Page/About';


const myRoutes = createBrowserRouter([
     {
          path: '/',
          element: <App></App>,
          children: [
               {
                    index: true,
                    element: <Home></Home>
               },
               {
                    path: 'about',
                    element:  <PrivateRoute><About></About></PrivateRoute>  
               },
               {
                    path: 'contact',
                    element: <Contact></Contact>
               }
          ]
     },

     {
          path: '/login',
          element: <Login></Login>
     },
     {
          path: '/register',
          element: <Register></Register>
     },


     //! ata  ni vlo vabe kz korbo 
     {
          path: '/admin',
          element: <AdminLayout></AdminLayout>,
          children: [
               {
                    path: 'addservices',
                    element: <AddServices></AddServices>
               }
          ]
     }

])
export default myRoutes;