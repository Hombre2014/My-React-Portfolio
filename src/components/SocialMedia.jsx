import React from 'react';
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';
// import { SocialIcon } from 'react-social-icons';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/Chamkoriyski" target="_blank" rel="noopener noreferrer"><BsTwitter /> </a>
    </div>
    <div>
      <a href="https://twitter.com/Chamkoriyski" target="_blank" rel="noopener noreferrer"><BsLinkedin /> </a>
    </div>
    <div>
      <a href="https://github.com/Hombre2014" target="_blank" rel="noopener noreferrer"><BsGithub /> </a>
    </div>
  </div>
);

export default SocialMedia;
