import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Headline = styled.h3`
  color: white;
`;

const SongDetail = ({ song }) => {
  if (!song) {
    return <Headline>Select a song</Headline>;
  }

  return (
    <div>
      <Headline>Details for: </Headline>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};
const mapStateToProps = state => ({
  song: state.selectedSong
});

export default connect(mapStateToProps)(SongDetail);
