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
          desc="This is a simple React JS tutorial"
          watch="16"
          date="5 hari lalu" />
        <YoutubeComponent 
          time="1.30.05"
          title="Lets move on to Next JS"
          desc="Dev Next JS"
          watch="16"
          date="14 jam lalu" />
        <YoutubeComponent 
          time="4.23"
          title="Server-side rendering"
          desc="Web Programming Unpas"
          watch="29 rb"
          date="1 tahun lalu" />
        <YoutubeComponent />
      </div>
    );
  }
}

export default Home;
