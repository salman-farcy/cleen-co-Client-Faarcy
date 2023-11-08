
import PropTypes from 'prop-types'; // ES6
import Navbar from './Navbar';
import Sidebar from './Sidebar';




const MainLayout = ({ children }) => {

     return (
          <div className="drawer">
               <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
               <div className="drawer-content  flex flex-col">
                    {/* Navbar full */}
                    <Navbar></Navbar>

                    {/* Page content here */}
                    {children}
               </div>

               {/* this is a sidebar */}
               <Sidebar></Sidebar>
          </div>
     );
};


MainLayout.propTypes = {
     children: PropTypes.node,
}

export default MainLayout;