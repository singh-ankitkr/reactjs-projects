export const songsReducer = () => {
    return [
        {'title': 'No Scrubs', duration: '4:05'},
        {'title': 'Macarena', duration: '2:30'},
        {'title': 'All Star', duration: '3:15'},
        {'title': 'Behne de', duration: '1:45'}
    ];
};


export const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};