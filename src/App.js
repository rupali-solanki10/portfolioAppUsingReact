import React, { Component } from 'react';
import Projects from './Projects';
import Socials from './Socials';
import profilePic from './assets/rupali_profile_pic.JPG';

class App extends Component {
    constructor(){
        super();
        this.state = {
            displayBio : false,
        };
    }

    toggleReadState =  ()=>{
        this.setState({
            displayBio: !this.state.displayBio,
        });
    };

    render() {
      return(
          <div>
          <div>
              <img src={profilePic} alt='profile pic' className='profile'/>
              <h1>Hello!</h1>
              <p>My name is Rupali. I'm a software engineer.</p>
              <p>I'm always looking forward to working on meaningful projects.</p>
          </div>
          {
              this.state.displayBio ?
              (<div>
              <p>I live in San Jose and I code every day.</p>
              <p>Java script and GO are my favorite coding languages.</p>
              <p>Apart from coding I like cooking, dancing and spending time with my lovely family.</p>
              <button onClick={this.toggleReadState}>Show Less</button>
          </div>) : (<button onClick={this.toggleReadState}>Read More</button>)
          }
          <hr/>
          <Projects />
          <Socials/>
          </div>
          
      )
    }
}

export default App;