import React, { useRef, useState } from 'react';

import {AboutSection, ProfileImageContainer } from './styles'

import DoodleBG from '../../svg/DoodleBG';


const Profile = ({ theme }) => {
  const [ loading, setLoading ]  = useState(true);
  const myRef = useRef(null);

  return (
    <AboutSection id="about" ref={myRef}>
      <ProfileImageContainer>
        <img src="/assets/imgs/me4.svg"  onLoad={()=>{setLoading(false)}}/>
      </ProfileImageContainer>
    </AboutSection>
  );
};

export default Profile;
