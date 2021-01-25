import React  from 'react';
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";


class App extends React.Component {

    state = {images: []};

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term}
        });
        this.setState({images: response.data.results});
    };

    encodeImageFileAsUrl = (event) => {
        console.log(event.target.files[0]);
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = function (){
            console.log('RESULT', reader.result);
        }
        reader.readAsDataURL(file);
    };

    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                {/*<input type="file" onChange={this.encodeImageFileAsUrl} />*/}
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    };
}

export default App;