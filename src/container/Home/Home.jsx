import React, { Component } from 'react';
import YoutubeComponent from '../../components/Youtube/YoutubeComponent';

class Home extends Component {
  render() {
    return (
      <div>
        <div style={{ padding: "10px" }}>
          <strong>Starting a Dinamic components w/ props</strong>
          <hr />
        </div>
        <YoutubeComponent 
          time="12.00"
          title="React JS Tutorial"
          desc="This is a simple React JS tutorial" />
        <YoutubeComponent 
          time="1.30.05"
          title="Lets move on to Next JS"
          desc="Dev Next JS" />
        <YoutubeComponent 
        time="4.23"
        title="Server-side rendering"
        desc="Web Programming Unpas" />
        <YoutubeComponent />
      </div>
    );
  }
}

export default Home;
