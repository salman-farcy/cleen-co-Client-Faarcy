import PropTypes from 'prop-types'; // ES6

const Container = ({ children }) => {
     return (
          <div className="container mx-auto px-4">
               {children}
          </div>
     );
};

Container.propTypes = {
     children: PropTypes.node,
}

export default Container;