import React from 'react';
import Lights from "../Lights/Lights";
import dashboardBg from '../../dashboard.jpeg'

interface DashboardState {
    isLightsOn?: boolean;
}

class Dashboard extends React.Component<{}, DashboardState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            isLightsOn: false,
        }
    }

    style() {
        return {
            backgroundImage: `url(${dashboardBg})`
        };
    };

    setLights = (state:boolean) => {
        this.setState({isLightsOn: state});
    };

    render() {
        return (
            <div className="dashboard"
                 style={this.style()}>
                <Lights clicked={this.state.isLightsOn} onClick={this.setLights} />
            </div>
        );
    }
}

export default Dashboard;