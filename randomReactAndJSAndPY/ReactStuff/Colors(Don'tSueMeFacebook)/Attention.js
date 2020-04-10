import React from 'react';
import {styles} from './styles'

const h1Style = {
  color: styles.color,
  fontSize: styles.fontSize,
  fontFamily: styles.fontFamily,
  padding: styles.padding,
  margin: 0
};

export class AttentionGrabber extends React.Component {
	render() {
		return <h3 style={h1Style}>Didn't steal anything lololol!</h3>;
	}
}