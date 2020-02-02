import React from 'react';
import FacebookIcon from '../assets/icons/social/facebook.png';
import LinkedInIcon from '../assets/icons/social/linkedin.png';
import YouTubeIcon from '../assets/icons/social/youtube.png';
import SlideShareIcon from '../assets/icons/social/slideshare.png';
import InstagramIcon from '../assets/icons/social/instagram.png';

const socialIcons = [
    {_id: "1", name: "Facebook", link: "#", icon: FacebookIcon},
    {_id: "2", name: "LinkedIn", link: "#", icon: LinkedInIcon},
    {_id: "3", name: "YouTube", link: "#", icon: YouTubeIcon},
    {_id: "4", name: "SlideShare", link: "#", icon: SlideShareIcon},
    {_id: "5", name: "Instagram", link: "#", icon: InstagramIcon}
];

const Footer = () => {
    return ( 
        <div>
            {socialIcons.map(socialIcon => (
                <a key={socialIcon._id} href={socialIcon.link}>
                    <img src={socialIcon.icon} alt={socialIcon.name} />
                </a>
            ))}
        </div>
    );
}
 
export default Footer;