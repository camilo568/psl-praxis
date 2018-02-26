import React, { Component } from 'react';
import './EnemieOverview.css';

class EnemieOverview extends Component {
    render() {
        return (<div className='enemie-overview-container'>

            <img src={this.props.image} alt={this.props.name} />
            <a href={this.props.link}><h1>{this.props.name}</h1></a>
            <p className='enemie-overview-text'>{this.props.overview}</p>
            <a href={this.props.link}>More info..</a>

        </div>);
    }
}

export default EnemieOverview;