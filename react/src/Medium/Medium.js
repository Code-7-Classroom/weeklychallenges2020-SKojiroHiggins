import React, { Component } from 'react';

// medium challenge
class Medium extends Component {
    render() {
        return (
            <div>
                <h1>Name: {this.props.name}</h1>
                <p>Age: {this.props.age}</p>
                <p>Num: {this.props.num}</p>
            </div>
            
        )
    }
}

export default Medium;