import { useEffect, useRef } from 'react';
import { getXYPosition } from '../../misc/canvas-utils';

export default function DrawingCanvasFunctional() {

    // create the reference
    const canvasRef = useRef(null);

    let mounted = false;

    useEffect(() => {
        mounted = true;
        const context = canvasRef.current.getContext('2d');
        context.strokeStyle = 'black';
    })

    function recordPenDown(e) {
        const context = canvasRef.current.getContext('2d');
        context.beginPath();
        const pos = getXYPosition(canvasRef.current, e);
        context.moveTo(pos.x, pos.y);
    }

    function recordPenUp(e) {
        const context = canvasRef.current.getContext('2d');
        const pos = getXYPosition(canvasRef.current, e);
        context.lineTo(pos.x, pos.y);
        context.stroke();
    }


    function logPenLocation(e) {
        console.log(e.clientX, e.clientY, e.target);
    }


    return (
        <>
            <h1>Functional Canvas!</h1>
            <canvas 
                style={{border: '1px solid blue'}} 
                width="300px" 
                height="400px" 
                onMouseDown={recordPenDown}
                onMouseUp={recordPenUp}
                onMouseMove={logPenLocation}
                ref={canvasRef}>
            </canvas>
        </>
    );
}