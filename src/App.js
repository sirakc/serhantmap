import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <React.Fragment>
        <button onClick={() => {
          // var before = null;
          // requestAnimationFrame(function animate(now) {
          // var c = earth.getPosition();
          // var elapsed = before ? now - before : 0;
          //before = now;
          // earth.setCenter([c[0], c[1] + 0.1 * (elapsed / 30)]);
          //requestAnimationFrame(animate);
          //});
        }}> Enable Zoomie</button>
      </React.Fragment >);
  }
}

export default App;


