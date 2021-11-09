import React from 'react';
import PostBox from '../PostBox/PostBox';
import PostCard from '../PostCard/PostCard';

const Post = ({posts, details}) => {
    return (
        <div>
            <PostBox details={details}/>
            <PostCard posts={posts}/>
        </div>
    );
};

export default Post;