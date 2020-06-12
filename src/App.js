import React from 'react';

import './App.css';
import ReactGlobe from 'react-globe';
import markerRenderer from './markerRenderer';
import markers from './markers';
class App extends React.Component {

  componentDidMount() {

  }
  render() {
    return (
      <React.Fragment>
        <div style={{ width: '100vw', height: '100vh' }}>
          <ReactGlobe
            globeOptions={{
              texture: 'https://raw.githubusercontent.com/sirakc/serhantmap/master/src/images/serhant_earth.png',
              enableClouds: true,
              enableBackground: false,
              cloudsOpacity: 0.4,
              cloudsTexture: "https://raw.githubusercontent.com/chrisrzhou/react-globe/master/textures/clouds.png"
            }}
            lightOptions={{
              pointLightColor: 'white',
              pointLightIntensity: 0.1,
              pointLightPositionRadiusScales: [2, 1, -1],
            }}
            markers={markers}
            markerOptions={{ renderer: markerRenderer }}
            cameraOptions={{
              rotateSpeed: 0.3
            }}
          />
        </div>
      </React.Fragment >);
  }
}

export default App;


