import React, { Component } from 'react';
import { Segment, Header, Input, Icon } from 'semantic-ui-react';

class MessagesHeader extends Component {
    render() {
        return(
            <Segment clearing>
                <Header fluid="true" as="h2" floated="left" style={{marginBottom: 0}}>
                    <span>Channel
                        <Icon name="star outline" color="black" />
                    </span>

                    <Header.Subheader>2 Users</Header.Subheader>
                </Header>
                

                {/* Channel Search Input */}
                <Header floated="right">
                    <Input 
                        size="mini" 
                        icon="search"
                        name="saerchTerm" 
                        placeholder="Search Messages"
                    />
                </Header>
            </Segment>
        );
    }
}

export default MessagesHeader;