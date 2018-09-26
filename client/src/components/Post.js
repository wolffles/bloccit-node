import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {viewTopic} from '../actions/topicActions'
import { Container, ListGroup, ListGroupItem, Button, NavLink } from 'reactstrap';

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


class PostList extends Component{

  componentDidMount() {
    this.props.viewTopic();
  }

//   onDeleteClick = (id) => {
//     this.props.deleteTopic(id)

//   }
    render() {
        const {posts} = this.props.topic
        return(
            <Container>
            <h1> Posts  <PostModal /></h1>
            {console.log(posts)}
            <ListGroup >
            {posts.map(({_id, post, description}) => 
              <ListGroupItem key={_id}>
                {/* <Button 
                className='remove-btn'
                color="danger"
                size='sm'
                onClick={ this.onDeleteClick.bind(this, _id)}
                >&times;</Button> */}
                <NavLink href="/topics/"_id>
                  <h3>{post}</h3> {description}
                </NavLink>
              </ListGroupItem>
            )}
            </ListGroup>
          </Container>
        )
    }
}

PostList.proptypes = {
    viewTopic: PropTypes.func.isRequired, // when you bring in an action from redux, it's stored as a prop
    topic: PropTypes.object.isrequired
  }
  
  const mapStateToProps = (state) => ({
    topic: state.topic // called topic because thats what we called it in reducer/index.js
  })
  
  export default connect(mapStateToProps, { viewTopic })(PostList)
    
