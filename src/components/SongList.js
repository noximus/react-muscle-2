import React, { Component } from 'react';
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        Song List
      </div>
    );
  }
}
const mapStateToProps = state => ({
  songs: state.songs
})

// const mapDispatchToProps = {
  
// }

export default connect(mapStateToProps)(SongList);