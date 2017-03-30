import React, { Component } from 'react';
import Section from './Section.jsx';
import Moment from 'moment';

class Forum extends Component {

  constructor() {
    super();

    this.state = {
      threads: [],
    };
  }

  componentDidMount() {
    $.getJSON(this.props.forumUrl)
      .then(response => {
        this.setState({
          threads: response,
        })
      });
  }

  render() {
    let threadsArray = this.state.threads.map((thread, index) => {
      let getUrl = 'api/forums/' + thread.id;
      let threadUrl = 'thread/' + thread.id;
      let date = Moment(thread.createdAt).format("MMM DD, YYYY hh:mm:ss:A");
      console.log(date);
      return <tr><td><a href={threadUrl} getUrl={getUrl}>{thread.title}</a></td><td><span>{date}</span></td></tr>
    });
    threadsArray.reverse();
    return (
      <div id='threads'>
        <table className="table">
          <tbody>
            <tr><td><h2>Topics</h2></td><td><span>Created At</span></td></tr>
          {threadsArray}
          </tbody>
        </table>
        
      </div>
    );
  }
}

/*render() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Codesmith Discussion Board</h1>
    </div>);
}
}*/

module.exports = Forum;