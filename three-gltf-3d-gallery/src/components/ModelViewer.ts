import * as THREE from 'three';
import { GLTFLoader } from '../loaders/gltfLoader';

export class ModelViewer {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private model: THREE.Group | null = null;

    constructor(container: HTMLElement) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);
        this.camera.position.z = 5;
    }

    public loadModel(url: string): void {
        const loader = new GLTFLoader();
        loader.load(url, (gltf) => {
            this.model = gltf.scene;
            this.scene.add(this.model);
            this.render();
        });
    }

    public render(): void {
        requestAnimationFrame(() => this.render());
        if (this.model) {
            this.model.rotation.y += 0.01; // Rotate the model for some interaction
        }
        this.renderer.render(this.scene, this.camera);
    }

    public resize(container: HTMLElement): void {
        this.camera.aspect = container.clientWidth / container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(container.clientWidth, container.clientHeight);
    }
}