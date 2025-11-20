import { Spline } from '@splinetool/runtime';

export function initializeSpline(containerId: string) {
    const spline = new Spline(containerId);
    spline.load('path/to/your/spline/model.spline'); // Update with your Spline model path
    return spline;
}

export function animateSpline(spline: Spline) {
    const animate = () => {
        spline.update();
        requestAnimationFrame(animate);
    };
    animate();
}

export function setSplineVisibility(spline: Spline, visible: boolean) {
    spline.visible = visible;
}