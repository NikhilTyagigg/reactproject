// Team.jsx
import React from 'react';
import styles from './Team.module.css';

const Team = () => {
  console.log('Team component rendered');
  return (
    <div className={styles.teamContainer}>
      <h2>Meet Our Team</h2>

      {teamMembers.map((member, index) => (
        <div key={index} className={styles.teamMember}>
          <img src="team-member-4.jpg" alt="Nikhil" className={styles.memberPhoto} />
          <h3>Nikhil Tyagi</h3>
          <p>Front End Developer</p>
          <p>Ok OK</p>
        </div>
      ))}


    </div>
  );
}

export default Team;