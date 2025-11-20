import * as THREE from 'three';
import { MainScene } from './scenes/mainScene';
import { setupLighting } from './scenes/lighting';
import { ModelViewer } from './components/ModelViewer';
import { HUD } from './components/HUD';
import { Controls } from './components/Controls';

class App {
    private scene: MainScene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private modelViewer: ModelViewer;
    private hud: HUD;
    private controls: Controls;

    constructor() {
        this.init();
    }

    private init() {
        this.scene = new MainScene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        setupLighting(this.scene);

        this.modelViewer = new ModelViewer(this.scene);
        this.hud = new HUD();
        this.controls = new Controls(this.camera, this.renderer.domElement);

        this.animate();
    }

    private animate = () => {
        requestAnimationFrame(this.animate);
        this.controls.update();
        this.renderer.render(this.scene.getScene(), this.camera);
    }
}

const app = new App();