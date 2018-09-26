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
  constructor(){ 
    super();
    this.state = {topic:{
      topic:'',
      description: '',
      posts: []
      }
    }
  }
  componentDidMount() {
    console.log("these are the props", this.props)
    this.props.viewTopic(this.props.match.params.topicId).then(topic => this.setState({topic}));
  }

//   onDeleteClick = (id) => {
//     this.props.deleteTopic(id)

//   }
    render() {
        // console.log(this.props.topic)
        const {posts} = this.props.topic
        return(
            <Container>
            <h1> Posts  <PostModal /></h1>
            
            <ListGroup >
            {posts.map(({_id, post, description, topic_id}) => 
              <ListGroupItem key={_id}>
                {/* <Button 
                className='remove-btn'
                color="danger"
                size='sm'
                onClick={ this.onDeleteClick.bind(this, _id)}
                >&times;</Button> */}
                <NavLink href={"topics/"+topic_id}>
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
  const mapDispatchToProps = () => dispatch => ({
    viewTopic: (id) => dispatch(viewTopic(id)) 
  })
  export default connect(mapStateToProps,  mapDispatchToProps )(PostList)
    
