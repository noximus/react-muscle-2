const songReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All star', duration: '3:25' },
    { title: 'I Want It That Way', duration: '1:45' },
  ]
}
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
}

// export default (state = songReducer, { type, payload }) => {
//   switch (type) {

//   case typeName:
//     return { ...state, ...payload }

//   default:
//     return state
//   }
// }
