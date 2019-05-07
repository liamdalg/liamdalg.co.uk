import React from 'react';
import 'particles.js';

interface ParticlesProps {
  config: object;
}

export default class Particles extends React.Component<ParticlesProps, {}> {
  public componentDidMount() {
    const bytes = new TextEncoder().encode(JSON.stringify(this.props.config));
    const blob = new Blob([bytes], {
      type: 'application/json;charset=utf-8',
    });
    particlesJS.load('particles-js', URL.createObjectURL(blob), () =>
      console.log('loaded')
    );
  }

  public render() {
    return <div id="particles-js" />;
  }
}
