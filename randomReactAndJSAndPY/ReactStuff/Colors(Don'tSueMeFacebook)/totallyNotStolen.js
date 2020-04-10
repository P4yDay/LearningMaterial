import React from 'react';
import ReactDOM from 'react-dom';
import {colorStyle} from './facebookStyle';

let divStyle = {
  backgroundColor: colorStyle.darkBlue,
  color: colorStyle.white
};

export class Wow extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        Wow, I stole these colors from Facebook!
      </div>
    );
  }
}

ReactDOM.render(
	<Wow />, 
	document.getElementById('app')
);