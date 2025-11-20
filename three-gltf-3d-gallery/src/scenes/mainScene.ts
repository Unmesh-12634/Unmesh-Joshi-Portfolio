class MainScene {
    constructor(scene, camera, renderer) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.models = [];
    }

    init() {
        this.loadModels();
        this.setupScene();
    }

    loadModels() {
        // Load models using the ModelViewer component
        const modelViewer = new ModelViewer();
        modelViewer.loadModel('models/satellite.gltf').then(model => {
            this.models.push(model);
            this.scene.add(model);
        });

        modelViewer.loadModel('models/submarine.gltf').then(model => {
            this.models.push(model);
            this.scene.add(model);
        });

        modelViewer.loadModel('models/cube.glb').then(model => {
            this.models.push(model);
            this.scene.add(model);
        });
    }

    setupScene() {
        // Additional scene setup can be done here
    }

    update() {
        // Update logic for the scene can be added here
        this.models.forEach(model => {
            model.rotation.y += 0.01; // Example rotation
        });
    }
}

export default MainScene;