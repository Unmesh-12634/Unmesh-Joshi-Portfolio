export function degToRad(degrees: number): number {
    return degrees * (Math.PI / 180);
}

export function radToDeg(radians: number): number {
    return radians * (180 / Math.PI);
}

export function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
}

export function lerp(start: number, end: number, t: number): number {
    return start + (end - start) * t;
}

export function distance(pointA: { x: number; y: number; z: number }, pointB: { x: number; y: number; z: number }): number {
    return Math.sqrt(
        Math.pow(pointB.x - pointA.x, 2) +
        Math.pow(pointB.y - pointA.y, 2) +
        Math.pow(pointB.z - pointA.z, 2)
    );
}