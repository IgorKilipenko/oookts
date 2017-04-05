import React, {Component} from 'react'


export default class MouseCoordinates extends Component {
    constructor(props){
        super(props);
    }

    render() {
        
        return (
            <div>
                coords: X={this.props.coords.x} Y={this.props.coords.y}
            </div>
        )
    }
}