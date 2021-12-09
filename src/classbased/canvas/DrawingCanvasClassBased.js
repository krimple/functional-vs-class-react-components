import React, {Component} from 'react';
import { getXYPosition } from '../../misc/canvas-utils';

export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export default class DrawingCanvasClassBased extends Component {

    mounted = false;

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.contextRef = React.createRef();
    }

    componentDidMount() {
        this.mounted = true;
        const context = this.canvasRef.current.getContext('2d'); 
        context.strokeStyle = 'black';
    }

    recordPenDown = (e) => {
        const context = this.canvasRef.current.getContext('2d');
        context.beginPath();
        const pos = getXYPosition(this.canvasRef.current, e);
        context.moveTo(pos.x, pos.y);
        console.log(e);
        e.preventDefault();
    }

    recordPenUp = (e) => {
        const context = this.canvasRef.current.getContext('2d');
        const pos = getXYPosition(this.canvasRef.current, e);
        context.lineTo(pos.x, pos.y);
        context.stroke();
        console.log(e);
        e.preventDefault();
    }

    logPenLocation = (e) => {
        console.log(e.clientX, e.clientY, e.target);
    }

    render() {
        return (
            <>
                <h1>Class-based Canvas!</h1>
                <canvas 
                    style={{border: '1px solid blue'}} 
                    width="300px" 
                    height="400px" 
                    onMouseDown={this.recordPenDown}
                    onMouseUp={this.recordPenUp}
                    onMouseMove={this.logPenLocation}
                    ref={this.canvasRef}>
                </canvas>
            </>
        );
    }
}