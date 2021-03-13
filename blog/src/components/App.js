import React from "react";
import PostList from "./PostList";
import { connect } from "react-redux";

const App = () => {
  return (
    <div className="ui container">
      <PostList />
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return state;
}

export default connect(mapStateToProps)(App);
