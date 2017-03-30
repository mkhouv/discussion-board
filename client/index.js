import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Forum from './components/Forum.jsx';

const url = 'api/forums';

class App extends Component {

  render() {
    return (
      <div>
        <Forum forumUrl={url}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));