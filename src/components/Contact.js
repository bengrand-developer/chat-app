import  React from 'react';
import './Contact.css';



function Contact() {
    return (
      <div className="Contact">
        <img className="avatar" src='https://randomuser.me/api/portraits/women/49.jpg' alt="Joann Chambers"/>
        <div className="name">Joann Chambers
                <div className="status">
                    <div className="status-online"></div>
                        <div className="status-text"><p>Online</p>
                
                            </div>
                        </div>
                    </div>
      </div>
    );
  }

  export default Contact;