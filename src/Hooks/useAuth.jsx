import { useContext } from "react";
import { AuthContxt } from "../Provider/AuthProvider";


const useAuth = () => {
     const authUtils = useContext(AuthContxt);

     return authUtils;
};

export default useAuth;