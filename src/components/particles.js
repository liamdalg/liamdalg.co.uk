import React from 'react';
import 'particles.js';

export default class Particles extends React.Component {
  componentDidMount() {
    const bytes = new TextEncoder().encode(JSON.stringify(this.props.config));
    const blob = new Blob([bytes], {
      type: 'application/json;charset=utf-8',
    });
    window.particlesJS.load('particles-js', URL.createObjectURL(blob), () =>
      console.log('loaded')
    );
  }

  render() {
    return <div id="particles-js" className="particles" />;
  }
}
