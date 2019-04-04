import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
import styled from "styled-components";

const Button = styled.button`
  background-color: rgb(151, 75, 110) !important;

  :hover {
    background-color: rgb(213, 128, 168) !important;
  }
`;
const StyledItem = styled.div`
  border-bottom: solid 2px rgb(151, 75, 110) !important;
  box-sizing: border !important;
  margin-bottom: 5px !important;
  :last-child {
    padding-bottom: 0.21428571em !important;
  }
`;

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <StyledItem className="item" key={song.title}>
          <div className="right floated content">
            <Button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </Button>
          </div>
          <div className="content">{song.title}</div>
        </StyledItem>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}
const mapStateToProps = state => ({
  songs: state.songs
});

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
