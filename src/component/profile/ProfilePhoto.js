import React from 'react';
import ima from './picture.gif';
const ProfilPicture = () => {
   return (
      <div>
         <p>
    <h3 className="main">here's my picture</h3>
        <img src={ima} alt="profil image" />
</p>
      </div>
   )
}
export default ProfilPicture;