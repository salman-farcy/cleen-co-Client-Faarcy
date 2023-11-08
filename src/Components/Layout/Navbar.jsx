import { NavLink } from "react-router-dom";
import Container from "../Ui/Container";

const Navbar = () => {
     return (
          <div className=" bg-base-300">
               <Container>
                    <div className="w-full navbar px-0 ">
                         <div className="flex-none lg:hidden">
                              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square  btn-ghost">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                              </label>
                         </div>
                         <div className="flex-1 font-bold text-xl text-green-500"> <span className="text-[#333C4D] text-2xl font-extrabold">C</span>leen co</div>
                         <div className="flex-none hidden lg:block">
                              <div className="flex gap-6">
                                   {/* Navbar menu content here */}
                                   <NavLink to="/" className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-green-500 font-bold" : "text-[#333C4D] font-bold"
                                   } >Home</NavLink>

                                   <NavLink to="/about" className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-green-500 font-bold" : "text-[#333C4D] font-bold"
                                   } >About</NavLink>

                                   <NavLink to="/contact" className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-green-500 font-bold" : "text-[#333C4D] font-bold"
                                   }>Contact</NavLink>

                                   <NavLink to="/login" className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-green-500 font-bold" : "text-[#333C4D] font-bold"
                                   }>Login</NavLink>
                              </div>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default Navbar;