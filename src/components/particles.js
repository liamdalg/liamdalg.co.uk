import 'particles.js';

// TODO: find a way to make this a reusable React component
// or: find a better component!
const loadParticles = (id, config) => {
  const bytes = new TextEncoder().encode(JSON.stringify(config));
  const blob = new Blob([bytes], {
    type: 'application/json;charset=utf-8',
  });
  window.particlesJS.load(id, URL.createObjectURL(blob), () =>
    console.log('loaded')
  );
};

export default loadParticles;
