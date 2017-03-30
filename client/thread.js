import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Thread from './components/Thread.jsx';

let id = window.location.pathname.slice(8);
const url = 'api/forums/' + id;

class App extends Component {

  render() {
    return (
      <div>
        <Thread threadUrl={url} forumId={id}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('thread'));