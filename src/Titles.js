import React, {Component} from 'react';

const titles = [
    'a Front end Developer',
    'a Software Engineer',
    'an enthusiastic learner',
    'a Music lover',
    'an excellent cook',
    'a Henna Artist'
];

class Title extends Component {
    state = {
        titleIndex : 0,
    };

    componentDidMount(){
        console.log("mounted");
        this.animateTitle();
    }

    animateTitle = () => {
        setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % (titles.length);
            console.log("titleIndex",titleIndex);
            this.setState({titleIndex : titleIndex});
        }, 4000);
    }
    changeTitle = function(){
        
    }
    render(){
        const title = titles[this.state.titleIndex];
        return <p>I am {title}.</p>
    }

}

export default Title;