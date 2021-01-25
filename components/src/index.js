
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import ApprovalCard from "./ApprovalCard";


const App = () => {
    return (
    <div className="ui container comments">

        <ApprovalCard>
            <div>
                <h2>Are you sure?</h2>
                <p>You want to do this.</p>
            </div>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail
                author="Sam"
                imgCategory="animal"
                timeAgo="Today at 4:45pm"
                commentText="What post is this?"
            />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail
                author="Jane"
                imgCategory="building"
                timeAgo="Today at 2:00am"
                commentText="Terrific!!!"
            />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail
                author="Sone"
                imgCategory="water"
                timeAgo="Yesterday at 5:00pm"
                commentText="I saw a movie about this a few months ago."
            />
        </ApprovalCard>
    </div>
    );
};



ReactDOM.render(<App />, document.getElementById('root'));