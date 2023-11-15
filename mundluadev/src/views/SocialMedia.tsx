import React from 'react';
import { SocialMediaViewModel } from '../viewModels/SocialMediaViewModel';


const socialMediaVM = new SocialMediaViewModel();

const SocialMedia: React.FC = () => {
  return (
    <div className="flex gap-2">
      {socialMediaVM.socialMediaLinks.map((link) => (
        <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;