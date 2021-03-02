import React from 'react';
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


class App extends React.Component{
    state = {videos: [], selectedVideo: null};

    componentDidMount(){
        this.onTermSubmit('buildings');
    }


    onTermSubmit = async (term) => {
        console.log(`searching ${term}`);
        const results = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        console.log(results);
        this.setState({
            videos: results.data.items,
            selectedVideo: results.data.items[0]});
    };

    onVideoSelect = (video) => {
        console.log(video);
        this.setState({selectedVideo: video});
    };

    render(){
        return (
            <div className="ui container">

                <SearchBar onFormSubmit={this.onTermSubmit}/>

                <div className="ui grid">
                    <div className="ui row">
                        {/*<div className="four wide column">*/}
                        {/*    <img src={"/fb_pic.jpg"} style={{width: "100%"}}/>*/}
                        {/*</div>*/}
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;