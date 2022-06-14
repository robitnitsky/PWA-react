import React from 'react';
import getCoordinatesOnCircle from '../../utils/math';
import logo from '../../logo.png';

interface SpeedometerProps {
    isOn: any;
}

export const Speedometer = (props:SpeedometerProps) => {
    const divisionsValues = () => {
        const values = [
            {val: 10, angle: 233, shift: [0, 0]},
            {val: 20, angle: 253, shift: [0, 0]},
            {val: 30, angle: 275, shift: [0, 0]},
            {val: 40, angle: 298, shift: [0, 0]},
            {val: 50, angle: 318, shift: [0, 0]},
            {val: 60, angle: 340, shift: [0, 0]},
            {val: 70, angle: 0, shift: [0, 0]},
            {val: 80, angle: 20, shift: [0, 0]},
            {val: 90, angle: 40, shift: [0, 0]},
            {val: 100, angle: 60, shift: [-3, 2]},
            {val: 110, angle: 91, shift: [-4, 4]},
            {val: 120, angle: 113, shift: [-6, 5]},
            {val: 130, angle: 130, shift: [-10, 4]}];
        return values.map((value, index) => <li className="speedometer__divisions-values__unit" style={divisionsValuesUnitStyle(index, value.shift)}>
            <span className="speedometer__divisions-values__unit__value" style={divisionsValuesUnitValueStyle(value.angle)}>{value.val}</span>
        </li>)
    }

    const divisionsValuesUnitStyle = (number:number, shift:any) => {
        const radius = 70;
        const startAngle = 150;
        const angle = startAngle + number * 20;
        const shiftX = shift[0];
        const shiftY = shift[1];
        return {
            transform: `translate(${getCoordinatesOnCircle(radius, angle).x + shiftX}px, ${getCoordinatesOnCircle(radius, angle).y + shiftY}px)`,
        }
    }

    const divisionsValuesUnitValueStyle = (angle:number) => {
        return {
            transform: `rotate(${angle}deg)`,
        }
    }

    const divisionsUnits = () => {
        const units = [];
        for (let i = 1; i <= 130; i++) {
            units.push(i);
        }
        return units.map(number => <li className="speedometer__divisions__unit"
                                       data-number={number}
                                       style={divisionsUnitStyle(number)}>
            <span className="speedometer__divisions__unit__symbol" style={divisionsUnitSymbolStyle(number)}/>
        </li>)
    }

    const divisionsUnitStyle = (number:number) => {
        const radius = 85;
        const startAngle = 137;
        const angle = startAngle + number * 2;
        return {
            transform: `translate(${getCoordinatesOnCircle(radius, angle).x}px, ${getCoordinatesOnCircle(radius, angle).y}px)`,
        };
    }

    const divisionsUnitSymbolStyle = (number:number) => {
        const rotate = 42 + number * 2.06;

        return {
            transform: `rotate(${rotate}deg)`,
        };
    }

    return <div className="speedometer-shadow">
            <div className={`speedometer ${props.isOn ? 'speedometer--on' : ''}`}>
            <img src={logo} alt="mustang" className="speedometer__logo"/>
            <ul className="speedometer__divisions">{divisionsUnits()}</ul>
            <ul className="speedometer__divisions-values">{divisionsValues()}</ul>
            <div className="speedometer__arrow-axis"></div>
            <div className="speedometer__arrow"></div>
            <div className="odometer"></div>
        </div>
    </div>
}