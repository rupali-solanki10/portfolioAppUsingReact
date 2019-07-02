import React, {Component} from 'react';
import SOCIALS from './data/socialProfiles'

class SocialProfile extends Component{
    
    render(){
        const {link, image} = this.props.socialProfile;
        return (
            <span>
                <a href={link}><img src={image} alt='social-profile' style={{width:35, height:35, margin:10}}/></a>
            </span>
        );
    }
}

class Socials extends Component{
    render(){
        return(
                <div>
                    <h2>Connect with me!</h2>
                    <div>{
                        SOCIALS.map(SOCIAL => {
                            return <SocialProfile key={SOCIAL.id} socialProfile={SOCIAL}/>
                        })
                    }</div>
                </div>
            );
            
    }
}
export default Socials;