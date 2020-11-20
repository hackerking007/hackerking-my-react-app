import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard><CommentDetail author = "Sam" time = "Today at 4:00 PM" content="Nice Blog" avatar = { faker.image.avatar() }/></ApprovalCard>
            <ApprovalCard><CommentDetail author = "Alex" time = "Today at 2:00 AM" content = "Great Work" avatar = { faker.image.avatar() }/></ApprovalCard>
            <ApprovalCard><CommentDetail author = "Jane" time="Yesterday at 7:30 PM" content = "I like your blog" avatar = { faker.image.avatar() }/></ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
