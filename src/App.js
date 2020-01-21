import React, { Component } from 'react';
import Article from './Article';

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: true,
      paragraph: ''
    };
    this.toggleArticle = this.toggleArticle.bind(this);
  }

  toggleArticle() {
    console.log(this.state.display)
    this.setState({
      display: false,
    },
      this.turnOn
    );

  }
  
  turnOn(){
    console.log('ran')
    this.setState({
      display: true,
    });
  }

  render() {
    return (
      <div>
        <button style={{  'background-color': '#4CAF50',
                'border': 'none',
                'color': 'white',
                'padding': '15px 32px',
                'text-align': 'center',
                'text-decoration': 'none',
                'display': 'inline-block',
                'font-size': '16px'}}
         onClick={this.toggleArticle}>Refresh Article & Ad</button>
        {this.state.display && <Article />}
      </div>
    );
  }
}

export default App;
