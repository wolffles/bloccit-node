import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import PostModal from './PostModal';
const postlist = [
    {
        post: "this is post 1",
        description: "explains post",
        topic: "5ba076158b627c049820487b"
    },
    {
        post: "this is post 2",
        description: "explains post2",
        topic: "5ba076158b627c049820487b"
    }
]


class Post extends Component{
    render() {
        return(
            <div>
                <h1>hello</h1>
            </div>
        )
    }
}

export default Post;
