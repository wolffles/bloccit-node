import React, {Component} from 'react';
import {getTopics, deleteTopic} from '../actions/topicActions';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types';

import TopicModal from './TopicModal'


class TopicList extends Component {

  componentDidMount() {
    this.props.getTopics();
  }

  onDeleteClick = (id) => {
    this.props.deleteTopic(id)

  }

  render() {
    const { topics } = this.props.topic;
    return(
        <Container>
          <h1> TOPIC PAGE  <TopicModal /></h1>
          
          <ListGroup >
          {topics.map(({_id, topic, description}) => 
            <ListGroupItem key={_id}>
              <Button 
              className='remove-btn'
              color="danger"
              size='sm'
              onClick={ this.onDeleteClick.bind(this, _id)}
              >&times;</Button>
              <h3>{topic}</h3> {description}
            </ListGroupItem>
          )}
          </ListGroup>
        </Container>
    )
  }
}

TopicList.proptypes = {
  getTopics: PropTypes.func.isRequired, // when you bring in an action from redux, it's stored as a prop
  topic: PropTypes.object.isrequired
}

const mapStateToProps = (state) => ({
  topic: state.topic // called topic because thats what we called it in reducer/index.js
})

export default connect(mapStateToProps, { getTopics, deleteTopic })(TopicList)
  