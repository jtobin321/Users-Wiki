import React, { Component } from 'react'

import { Card, Image } from 'semantic-ui-react'

export default class UserProfileCard extends Component {

    render() {
        return(
            <div>
                <Card>
                    <Image src={this.props.img} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{this.props.name}</Card.Header>
                        <Card.Meta><span className='date'>{this.props.email}</span></Card.Meta>
                        <Card.Description>{this.props.description}</Card.Description>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}