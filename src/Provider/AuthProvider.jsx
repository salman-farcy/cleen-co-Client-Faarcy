import PropTypes from 'prop-types'; // ES6
import { createContext, useEffect, useState } from "react";
import auth from "../Config/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContxt = createContext();




const AuthProvider = ({ children }) => {

     const [user, setUser] = useState(null);
     const [isloading, setIsloading] = useState(true);

     //* User create ---> Register form a
     const creatUser = (email, password) => {
          setIsloading(true)
          return createUserWithEmailAndPassword(auth, email, password)
     }

     //* login user
     const login = (email, password) => {
          setIsloading(true)
          return signInWithEmailAndPassword(auth, email, password)
     }

     //*logOut user
     const logOut = () => {
          setIsloading(true)
          return signOut(auth);
     }


     //* state change user
     useEffect(() => {
          const subscribe = onAuthStateChanged(auth, (crrentUser) => {
               setUser(crrentUser)
               setIsloading(false)
          });

          //!This should be done to avoid memory leaks
          return () => {
               return subscribe();
          }
     }, []);


     const valus = {
          user,
          isloading,
          creatUser,
          login,
          logOut
     };


     return (
          <AuthContxt.Provider value={valus}>
               {children}
          </AuthContxt.Provider>
     );
};


AuthProvider.propTypes = {
     children: PropTypes.node,
}

export default AuthProvider;