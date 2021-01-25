import React from 'react';


class SearchBar extends React.Component{
    //Convert from uncontrolled input to controlled input.
    state = {term: ''};

    onInputChange = (e) =>{
        const  value = e.target.value;
        this.setState({term: value});
    };

    onFormSubmit = (event) =>{
        event.preventDefault();
        // Todo: Make sure to call callback on the app.
        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="vid_search">Video Search</label>
                        <input id="vid_search" type="text" value={this.state.term} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>)

    }
}

export default SearchBar;