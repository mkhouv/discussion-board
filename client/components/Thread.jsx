import React, { Component } from 'react';
import Post from './Post.jsx';
import Moment from 'moment';

// FeedItem should consist of an image (src contained in the data from the AJAX request)
class Thread extends Component {

  constructor() {
    super();

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    let url = this.props.threadUrl;
    $.getJSON('../' + this.props.threadUrl)
      .then(response => {
        this.setState({
          posts: response.threads,
        })
      });
    $('#submit').click(function() {
        console.log(url)
        let thread = $('#threadField').val();
        $.post('../' + url + '/threads', { title: thread})
      });
  }
  render() {
      let postsArray = this.state.posts.map((post, index) => {
        let date = Moment(post.createdAt).format("MMM DD, YYYY hh:mm:ss:A");
        return <tr><td><span>{post.title}</span></td><td><span>{date}</span></td></tr>
      });

      return (
        <div>
          <table className="table">
            <tbody>
              <tr><td><h2>Post</h2></td><td><span>Created At</span></td></tr>
            {postsArray}
            </tbody>
          </table>
        </div>
      );
    }
}

const styles = {
  container: {
    border: '1px solid black',
    height: 100,
    width: '100%',
    flex: 1,
  },
};

module.exports = Thread;