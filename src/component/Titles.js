import React, {Component} from 'react';

const TITLES = [
    'a Front end Developer',
    'a Software Engineer',
    'an enthusiastic learner',
    'a Music lover',
    'an excellent cook',
    'a Henna Artist'
];

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true };

    componentDidMount() {
        this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
    
        this.animateTitles();
      }
    
      componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
      }
    
      animateTitles = () => {
        this.titleInterval = setInterval(() => {
          const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
    
          this.setState({ titleIndex, fadeIn: true });
    
          this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        }, 4000);
      }
    
    render(){
        const { fadeIn, titleIndex } = this.state;
        const title = TITLES[titleIndex];

        return (
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
        )
    }
}

export default Title;