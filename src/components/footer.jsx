import React from 'react';
import FacebookIcon from '../assets/icons/social/facebook.png';
import LinkedInIcon from '../assets/icons/social/linkedin.png';
import YouTubeIcon from '../assets/icons/social/youtube.png';
import SlideShareIcon from '../assets/icons/social/slideshare.png';
import InstagramIcon from '../assets/icons/social/instagram.png';
import '../styles/footer.css';

const socialIcons = [
    {_id: "1", name: "Facebook", link: "#", icon: FacebookIcon},
    {_id: "2", name: "LinkedIn", link: "#", icon: LinkedInIcon},
    {_id: "3", name: "YouTube", link: "#", icon: YouTubeIcon},
    {_id: "4", name: "SlideShare", link: "#", icon: SlideShareIcon},
    {_id: "5", name: "Instagram", link: "#", icon: InstagramIcon}
];

const Footer = () => {
    return ( 
        <div className="footerSection">
            <div className="socialIconsSection">
                {socialIcons.map(socialIcon => (
                    <a key={socialIcon._id} href={socialIcon.link} className="socialIconLink">
                        <img className="socialIcon" src={socialIcon.icon} alt={socialIcon.name} />
                    </a>
                ))}
            </div>
        </div>
    );
}
 
export default Footer;