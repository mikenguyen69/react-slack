import React from 'react';
import {connect} from 'react-redux';
import {Grid} from 'semantic-ui-react';
import './App.css';

import ColorPanel from './ColorPanel/ColorPanel';
import MetalPanel from './MetalPanel/MetaPanel';
import Messages from './Messages/Messages';
import SidePanel from './SidePanel/SidePanel';

const App = ({currentUser}) => (
  <Grid columns="equal" className="app" style={{background: '#eee'}}>
    <ColorPanel />
    <SidePanel currentUser={currentUser} />
    <Grid.Column style={{marginLeft: 320}}>
      <Messages />
    </Grid.Column>
    <Grid.Column width={4}>
    <MetalPanel />
    </Grid.Column>
    
  </Grid>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(App);
