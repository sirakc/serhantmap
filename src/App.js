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
              texture: 'https://serving.photos.photobox.com/048522852493b7e952dfa462698c61315fc4bc71c601fb06d362635f0914453f0b23947c.jpg'
            }}
          />
        </div>
      </React.Fragment >);
  }
}

export default App;


