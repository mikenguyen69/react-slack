import React, { Component } from 'react';
import {Menu, Icon, Modal, Form, Input, Button} from 'semantic-ui-react';

class Channels extends Component {

    state = {
        channels: [],
        channelName: '',
        channelDetails: '',
        modal: false
    };

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value });
    }

    closeModal = () => this.setState({modal: false});

    openModal = () => this.setState({modal: true});

    render() {

        return(
            <React.Fragment>
                <Menu.Menu style={{paddingBottom: '2em'}}> 
                    <Menu.Item>
                        <span>
                            <Icon name="exchange" /> CHANNELS 
                        </span>{' '}
                        ({ this.state.channels.length})  <Icon name='add' onClick={this.openModal}/>
                    </Menu.Item>
                </Menu.Menu>

                <Modal basic open={this.state.modal} onClose={this.closeModal}> 
                    <Modal.Header>Add a channel</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field>
                                <Input fluid label="Name of Channel"
                                    name="channelName" 
                                    onChange={this.handleChange}
                                />
                            </Form.Field>
                            
                            <Form.Field>
                                <Input fluid label="About the Channel"
                                    name="channelDetail" 
                                    onChange={this.handleChange} 
                                />
                            </Form.Field>
                        </Form>
                    </Modal.Content>

                    <Modal.Actions>
                        <Button color="green" inverted>
                            <Icon name="checkmark" /> Add
                        </Button>

                        <Button color="red" inverted onClick={this.closeModal}>
                            <Icon name="remove" /> Cancel
                        </Button>
                    </Modal.Actions>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Channels;