import { combineReducers } from "redux";
const songsReducers = () => {
  return [
    { title: "The only thing they fear is you", duration: "7:42" },
    { title: "BFG 10000", duration: "3:47" },
    { title: "Cultist base", duration: "2:54" },
    { title: "Mastermind", duration: "2:52" },
  ];
};

const selectedSongReducers = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducers,
  selectedSong: selectedSongReducers,
});
