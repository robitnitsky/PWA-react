import React from 'react';
import lightsBg from '../../lights-btn.png'

interface LightsProps {
    clicked: any;
    onClick(param:boolean): any;
}

class Lights extends React.Component<LightsProps> {
    constructor(props: LightsProps) {
        super(props);
    }

    style() {
        return {
            backgroundImage: `url(${lightsBg})`
        }
    };

    class() {
        return this.props.clicked ? 'lights lights--on' : 'lights'
    }

    render() {
        return (
            <button className={this.class()}
                    style={this.style()}
                    onClick={() => this.props.onClick(!this.props.clicked)} />
        );
    }
}

export default Lights;