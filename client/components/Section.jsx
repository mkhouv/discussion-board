import React, { Component } from 'react';
import Thread from './Thread.jsx';

// FeedItem should consist of an image (src contained in the data from the AJAX request)
class Section extends Component {
  
  componentDidMount() {
    console.log(this.props.section.id)
    let url = 'api/forums/' + this.props.section.id;
    // $.getJSON(url)
    //   .then(response => {
    //     console.log(response)
    //     this.setState({
    //       threads: response,
    //     })
    //   });
  }

  render() {
    // put render logic here
    // let sectionsArray = this.props.section.threads.map((thread, index) => {
    //   return <Thread thread={thread} key={index} />
    // });
    let getUrl = 'api/forums/' + this.props.section.id;
    let threadUrl = 'thread/' + this.props.section.id;
    return (
      <div>
        <a href={threadUrl} getUrl={getUrl}>{this.props.section.title}</a>
      </div>
    );
  }
};

module.exports = Section;