import React from 'react';
import SOCIALS from '../data/socialProfiles'

const SocialProfile  = (props)=>{
    const {link, image} = props.socialProfile;
    return (
            <span>
                <a href={link}><img src={image} alt='social-profile' style={{width:35, height:35, margin:10}}/></a>
            </span>
        );
}

const Socials =()=>(
        <div>
            <h2>Connect with me!</h2>
                <div>{
                    SOCIALS.map(SOCIAL => (
                        <SocialProfile key={SOCIAL.id} socialProfile={SOCIAL}/>
                    ))}
                </div>
        </div>
)
export default Socials;