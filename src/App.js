import React from 'react';

import './App.css';
import ReactGlobe from 'react-globe';

class App extends React.Component {

  componentDidMount() {

  }
  render() {
    return (
      <React.Fragment>
        <div style={{ width: '100vw', height: '100vh' }}>
          <ReactGlobe
            globeOptions={{
              texture: 'https://raw.githubusercontent.com/sirakc/serhantmap/master/public/serhant_earth.jpg'
            }}
            lightOptions={{
              pointLightColor: 'white',
              pointLightIntensity: 0,
              pointLightPositionRadiusScales: [2, 1, -1],
            }}
          />
        </div>
      </React.Fragment >);
  }
}

export default App;


