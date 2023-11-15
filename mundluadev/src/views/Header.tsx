import React from 'react';
import SocialMedia from './SocialMedia';
import { HeaderViewModel } from '../viewModels/HeaderViewModel';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const headerVM = new HeaderViewModel();

const Header: React.FC = () => {
  return (
    <header className="bg-dark-purple text-light-green">
      <SocialMedia />
    </header>
  );
};

export default Header;