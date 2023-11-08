import { NavLink } from "react-router-dom";


const Sidebar = () => {
     return (
          <div className="drawer-side">
               <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
               <ul className="menu  w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
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
               </ul>
          </div>
     );
};

export default Sidebar;