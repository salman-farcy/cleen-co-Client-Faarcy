
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({children}) => {
     const {user, isloading} = useAuth();
     const location = useLocation();


     if(isloading){
          return <span className="loading loading-infinity loading-lg"></span>
     }

     if(!user?.email){
          return <Navigate state={location.pathname} to="/login" replace/>
     }

      

     return children;
};

export default PrivateRoute;