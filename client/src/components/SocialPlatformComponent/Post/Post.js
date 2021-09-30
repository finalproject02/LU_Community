import React from 'react';
import PostBox from '../PostBox/PostBox';
import PostCard from '../PostCard/PostCard';

const Post = ({posts}) => {
    return (
        <div>
            <PostBox />
            <PostCard posts={posts}/>
        </div>
    );
};

export default Post;