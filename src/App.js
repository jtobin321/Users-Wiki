import React, { Component } from 'react';
import { Grid, Container, Menu, Icon, Input, Header } from 'semantic-ui-react'

import UserProfileCard from './components/UserProfileCard'
import './styles/app.css'

export default class extends Component {
  state = {
    users: [],
    hasErrors: false,
    searchField: ""
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(res => this.setState({ users: res }))
    .catch(() => this.setState({ hasErrors: true }))
    }


  render() {
    const { users, searchField } = this.state
    const filteredUsers = users.filter(user => 
      user.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div>
        <Menu borderless inverted fixed='top'>
          <Menu.Item>
            <img src='https://api.adorable.io/avatars/1' />
          </Menu.Item>
          <Menu.Item header>Users Wiki</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input 
                className='icon' 
                icon='search' 
                placeholder='Search Users...' 
                onChange={e => {
                  this.setState({
                    searchField: e.target.value
                  })
                }}/>
            </Menu.Item>
            <Menu.Item position="right" href="https://github.com/jtobin321/Users-Wiki" target="_blank">
              <Icon name='github' size='big' link hover />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Container style={{marginTop: '65px'}}>
          <Header as='h1' icon textAlign='center' style={{color: 'white'}}>
        <Icon name='users' />
        <Header.Content>Users</Header.Content>
      </Header>
        <Grid columns={4} padded stackable>
              {filteredUsers.map(user => {
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
