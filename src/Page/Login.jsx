import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";



const Login = () => {
     const { user, login } = useAuth();
     

     //* state control component
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     //* react huks
     const navigate = useNavigate();
     const location = useLocation();
     
     
     //* Login user async await
     const handleLoginUser = async(e) => {
          e.preventDefault();

          const toastId = toast.loading('Loding ...');

          try{
              await login(email, password);
              toast.success('Logged in...',{id : toastId});
              console.log(user);
              navigate(location?.state ? location.state : '/');
              
          }
          catch(err) {
               toast.error(err.message, {id : toastId});
          }
     }



     return (
          <div className="hero min-h-screen bg-base-200">
               <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                         <form onSubmit={handleLoginUser} className="card-body">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input onBlur={(e) => setPassword(e.target.value)} type="email" name="email" placeholder="email" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Password</span>
                                   </label>
                                   <input onBlur={(e) => setEmail(e.target.value)} type="password" name="password" placeholder="password" className="input input-bordered" required />
                                   <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                   </label>
                              </div>
                              <div className="form-control mt-6">
                                   <button type="submit" className="btn btn-primary">Login</button>
                              </div>
                              <div className="">
                                   <p>You have an Account <Link to="/register">Register</Link></p>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Login;