import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
import styled from "styled-components";

const Container = styled.div`
  backgroundcolor: rgb(31, 11, 47);
  margin: 30px !important;
`;

const App = () => {
  return (
    <Container className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </Container>
  );
};

export default App;

// tab + rsc
