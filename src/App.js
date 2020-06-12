import React from 'react';
import './style.css';
import './App.css';
import ReactGlobe from 'react-globe';
import markerRenderer from './markerRenderer';
import markers from './markers';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rotateCheck: true

    };
  }
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
              pointLightIntensity: 0.15,
              pointLightPositionRadiusScales: [0, 0, 1],
            }}
            markers={markers}
            markerOptions={{ renderer: markerRenderer }}
            cameraOptions={{
              rotateSpeed: 0.3,
              autoRotateSpeed: 0.5,
              enableAutoRotate: this.state.rotateCheck
            }}

          />
          <div style={{ position: "absolute", top: 0, left: 0 }}>

            <label className="switch">
              <input type="checkbox" checked={this.state.rotateCheck} onChange={() => {
                this.setState({ rotateCheck: !this.state.rotateCheck });

              }} />
              <span className="slider round"></span>
            </label>
            <br />
            <label htmlFor="switch">Rotation</label>

          </div>
        </div>
      </React.Fragment >);
  }
}

export default App;


