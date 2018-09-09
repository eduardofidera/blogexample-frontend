import React from 'react';

const Post = (props) => (
    <div className="post">
        <h1>{props.post.title}</h1>
    </div>
);

export default Post;