import React from "react";
import { selectSong } from "../actions";
import SongList from "./SongList";
import {connect} from react-redux

const App = () => {
  return (
    <div>
      <SongList />
    </div>
  );
};

export default connect()(SongList)
