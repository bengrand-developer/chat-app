import React from "react";
import "./Contact.css";
import PropTypes from 'prop-types';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online : false
    }
  };

  changeStatus() {
    const newStatus = !this.state.online
    this.setState({online: newStatus})
    console.log("passe");
}

    render(){
    return(
      <div className="Contact">
      <img className="avatar" src={this.props.avatar} alt={this.props.name}/>
      <div>
        <h4 className="name">{this.props.name}</h4>
        <div className="status">   
        <div onClick={this.changeStatus.bind(this)} className={this.state.online? 'status-online' : 'status-offline'}></div>
        <p className='status-text'>{this.state.online? 'online' : 'offline'}</p>       
        </div>
      </div>
    </div>
      
    )
  }
}



Contact.propTypes = {
  name: PropTypes.objectOf(PropTypes.props).isRequired,
  avatar: PropTypes.objectOf(PropTypes.props).isRequired,
  online: PropTypes.objectOf(PropTypes.props).isRequired,
};



export default Contact;



