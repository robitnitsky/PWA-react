interface ICoordinates {
    x: number;
    y: number;
}

const getCoordinatesOnCircle = (radius:number, angle:number):ICoordinates => {
    return {
        x: radius * Math.cos(angle * Math.PI / 180),
        y: radius * Math.sin(angle * Math.PI / 180),
    };
}

export default getCoordinatesOnCircle;