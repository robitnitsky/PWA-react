import React, {useState} from 'react';
import { Speedometer } from '../Speedometer/Speedometer';
import { Button } from '../Button/Button'

export const Dashboard = () => {
    const [isLightsOn, setIsLightsOn] = useState(false);

    const switchLights = () => {
        setIsLightsOn(!isLightsOn);
    }

    return <div className="dashboard">
        <Speedometer isOn={isLightsOn} />
        <Button onClick={switchLights} isOn={isLightsOn}/>
    </div>
}