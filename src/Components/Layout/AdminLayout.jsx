import { Outlet } from "react-router-dom";


const AdminLayout = () => {
     return (
          <div className="flex h-screen">
               <div className="bg-green-500 flex-[1]">
                    <h1>Sideber</h1>
               </div>
               <div className="bg-red-500 flex-[5]">
                    <Outlet></Outlet>
               </div>
          </div>
     );
};

export default AdminLayout;