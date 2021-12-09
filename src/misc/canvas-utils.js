export function getXYPosition(canvas, event) {
    const boundingRectangle = canvas.getBoundingClientRect();
    return {
        x: event.clientX - boundingRectangle.left,
        y: event.clientY - boundingRectangle.top
    };
}