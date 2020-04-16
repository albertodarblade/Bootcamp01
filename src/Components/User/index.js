import React, { useContext } from 'react';
import propTypes from 'prop-types';
import './styles.css'

function User({ name, avatar, email, teams }) {

  return (
    <section className={`userCmpt`}>
      <img src={avatar} alt="user" />
      <div className="information">
        <div>{name}</div>
        <div>{email}</div>
         <div>Teams: {teams.length}</div>
      </div>

    </section>
  )
}

User.propTypes = {
  name: propTypes.string,
  avatar: propTypes.string,
  email: propTypes.string,
  teams: propTypes.arrayOf(propTypes.string),
};

User.defaultProps = {
  teams: [],
  avatar: 'https://image.shutterstock.com/image-vector/profile-placeholder-image-gray-silhouette-260nw-1153673752.jpg'
}

export default User;
