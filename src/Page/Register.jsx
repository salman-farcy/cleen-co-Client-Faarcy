import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";


const Register = () => {
     const { user, creatUser } = useAuth();
     console.log(user);

     //* state control component
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     
     //* create user async await
     const handleCreateUser = async(e) => {
          e.preventDefault();

          try{
              await creatUser(email, password);
              console.log('Created');
          }
          catch(err) {
               console.log(err);
          }
     }



     return (
          <div className="hero min-h-screen bg-base-200">
               <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                         <form onSubmit={handleCreateUser} className="card-body">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Name</span>
                                   </label>
                                   <input  type="name" name="name" placeholder="name" className="input input-bordered" required />
                              </div>
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
                                   <button type="submit" className="btn btn-primary">Register</button>
                              </div>
                              <div className="">
                                   <p>You have an Account <Link to="/login">Login</Link></p>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Register;