import React from 'react';
import { Redirect } from 'react-router-dom';

const Profile = ({user}) => {
  console.log(user);
  return (
    <div>
      {user && (
        <h1 style={{marginBottom:"40px"}}>{user.name}'s Profile :)</h1>
      )}
      {!user && (
        <Redirect from="/profile" exact to="/login"/>
      )}
    </div>
  );
}
 
export default Profile;