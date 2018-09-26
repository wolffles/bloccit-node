import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTopic } from '../actions/topicActions';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';



class TopicModal extends Component{ 
    state = {
        modal: false,
        topic: '',
        description: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newTopic = {
            topic: this.state.topic,
            description: this.state.description
        }
         
        //add topic via addTopic action
        this.props.addTopic(newTopic);

        this.toggle();
    }

    render(){
        return(
            <div>
                <Button 
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                > Add Topic
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader>
                        Add To Topics List
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="topic">Topic</Label>
                                <Input
                                    type="text"
                                    name="topic"
                                    id="topic"
                                    placeholder="Enter topic"
                                    //when you have an input you usually have a function in this case its onChange
                                    onChange={this.onChange}
                                >
                                </Input>
                                <Input
                                    type="textarea"
                                    name="description"
                                    id="topic"
                                    placeholder="Enter description"
                                    //when you have an input you usually have a function in this case its onChange
                                    onChange={this.onChange}
                                >
                                </Input>
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Submit
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    topic: state.topic
})

export default connect(mapStateToProps, {addTopic})(TopicModal);