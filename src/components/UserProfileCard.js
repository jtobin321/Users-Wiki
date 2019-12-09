import React, { Component } from 'react'

import '../styles/UserProfileCard.css'

export default class UserProfileCard extends Component {

    render() {
        return(
            <div>
                <div class="ui card">
                    <div class="image"><img src={this.props.img}/></div>
                    <div class="content">
                        <a class="header">{this.props.name}</a>
                        <div class="meta"><span class="date">{this.props.email}</span></div>
                        <div class="description">{this.props.description}</div>
                    </div>
                </div>  
            </div>
        )
    }
}