import React from "react";
import "./Contact.css";
import PropTypes from 'prop-types';


function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt={props.name}/>
      <div>
        <h4 className="name">{props.name}</h4>
        <div className="status">
            {props.online ? <p className="status-online"></p> : <p className="status-offline"></p>}
            {props.online ? <p className="status-text">online</p> : <p className="status-text">offline</p>}        
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.objectOf(PropTypes.props).isRequired,
  avatar: PropTypes.objectOf(PropTypes.props).isRequired,
  online: PropTypes.objectOf(PropTypes.props).isRequired,
};

export default Contact;



