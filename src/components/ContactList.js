import React from "react";
import Contact from './Contact';

const users = [
    {
      name: 'Karadoc',
      avatar: 'https://www.jokeme.fr/images/Karadoc.jpg',
      online: false
    },
    {
      name: 'Guetenoc',
      avatar: 'https://i.skyrock.net/8783/63028783/pics/2538626204_1.jpg',
      online: true
    },
    {
      name: 'Roparzh',
      avatar: 'https://pbs.twimg.com/ext_tw_video_thumb/938045344029474816/pu/img/rsjr1v_raamb6nHi.jpg',
      online: true
    },
    {
      name: 'Leodagan',
      avatar: 'https://vignette.wikia.nocookie.net/kaamelott-officiel/images/5/54/L%C3%A9odagan.jpg/revision/latest/top-crop/width/360/height/450?cb=20130413074307&path-prefix=fr',
      online: false
    },
    {
      name: 'Guenièvre',
      avatar: 'https://i2.wp.com/groot.fr/cdg/wp-content/uploads/2016/02/guenievre3-1.jpg?resize=205%2C254',
      online: true
    }
  ];

  const ContactList = () => (
      <div>
          {users.map(user => (
              <Contact name= {user.name} avatar = {user.avatar} online = {user.online} />
          ))}
      </div>
  );

export default ContactList;