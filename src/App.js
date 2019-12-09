import React, { Component } from 'react';
import { Grid, Container, Menu, Icon, Input } from 'semantic-ui-react'

import UserProfileCard from './components/UserProfileCard'
import './styles/app.css'

export default class extends Component {
  state = {
    users: [],
    hasErrors: false
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(res => this.setState({ users: res }))
    .catch(() => this.setState({ hasErrors: true }))
    }


  render() {
    return (
      <div>
        <Menu attached='top' borderless inverted>
          <Menu.Item>
            <img src='https://api.adorable.io/avatars/1' />
          </Menu.Item>
          <Menu.Item header>Users Wiki</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input className='icon' icon='search' placeholder='Search Users...' />
            </Menu.Item>
            <Menu.Item position="right" href="https://github.com/jtobin321/Users-Wiki" target="_blank">
              <Icon name='github' size='big' link hover />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Container>
        <Grid columns={4} padded stackable>
              {this.state.users.map(user => {
                return (
                  <Grid.Column>
                    <Grid.Row>
                      <UserProfileCard
                        name={user.name}
                        img={"https://api.adorable.io/avatars/300/" + user.id}
                        email={user.email}
                        description={user.company.catchPhrase}
                      />
                    </Grid.Row>
                  </Grid.Column>
                )
              })}
        </Grid>
        </Container>
      </div>
    )
  }
}
