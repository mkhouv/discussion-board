import React, { Component } from 'react';
import Thread from './Thread.jsx';

// FeedItem should consist of an image (src contained in the data from the AJAX request)
class Post extends Component {

  render() {
    console.log(this.props.post)
    return (
      <div>
        <p>{this.props.post.title}</p>
      </div>
    );
  }
};

module.exports = Post;