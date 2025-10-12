import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Camera, Scene, Renderer } from '../app';

export class Controls {
    private controls: OrbitControls;

    constructor(camera: Camera, renderer: Renderer, domElement: HTMLElement) {
        this.controls = new OrbitControls(camera, domElement);
        this.controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
        this.controls.dampingFactor = 0.25;
        this.controls.screenSpacePanning = false;
        this.controls.maxPolarAngle = Math.PI / 2; // limit vertical rotation
    }

    update() {
        this.controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
    }

    dispose() {
        this.controls.dispose();
    }
}