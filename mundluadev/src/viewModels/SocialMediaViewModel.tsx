import { SocialMediaLink } from '../models/SocialMediaModel';
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export class SocialMediaViewModel {
  public socialMediaLinks: SocialMediaLink[] = [
    { name: 'Instagram', url: 'https://github.com', icon: <FaInstagram />},
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: <FaLinkedin />  },
  ];
}

