import React from 'react';
import Contact from './components/Contact';

function App() {
  const users = [
    {
      name : 'Merlin',
      avatar: 'https://www.moyenagepassion.com/wp-content/uploads/2016/02/Merlin_enchanteur_kaamelott_serie_culte_roi_arthur_moyen-age_passion.jpg',
      online : true
    },
    {
      name : 'Kadoc',
      avatar: 'https://vignette.wikia.nocookie.net/kaamelott-officiel/images/9/9d/Kadoc.jpg/revision/latest/top-crop/width/360/height/450?cb=20151113170204&path-prefix=fr',
      online : false
    },
    {
      name : 'Gauvain',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrOdH8aUuB7IE_QslUMw2avRoQkIAFuLeu6KMk_a3CZDQG6eLQ',
      online : true
    }
   
  ];
  const listUsers = users.map((user) => {
    return <Contact {...user}/> 
  });

  return (
    <div className="App">
      {listUsers}
    </div>
  );
}

export default App;
