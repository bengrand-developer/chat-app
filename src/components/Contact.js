import  React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';



function Contact(user) {
    return(

    <div className="Contact">
        <img className="avatar" src={user.avatar} alt= {user.name}/>
        <div>
            <h6 className="name"> {user.name} </h6>
            <div className="status">             
                {user.online? <p className = 'status-online'> </p> : <p className = 'status-offline'></p>}
                {user.online? <p className = 'status-text'>online</p> : <p className = 'status-text'>offline</p>}
            </div>
        </div>
    </div>
    );
  }
  
  Contact.propTypes = {
    name: PropTypes.objectOf(PropTypes.user).isRequired,
    avatar: PropTypes.objectOf(PropTypes.user).isRequired,
    online: PropTypes.objectOf(PropTypes.user).isRequired,
  };
 
  

  export default Contact;