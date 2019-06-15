import React, { Component } from 'react';
import { Button, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import App from './App';
import './SideBarGlobal.scss';

export default class SideBarGlobal extends Component {
  state = { visible: false }

  handleSidebarHide = () => this.setState({ visible: false })

  handleSidebarState = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state

    return (
      <div>
          <Button disabled={visible} onClick={this.handleSidebarState}>
            <Icon name="sidebar"/>
          </Button>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <App />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
