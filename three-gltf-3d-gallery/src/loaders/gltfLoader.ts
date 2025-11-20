import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Scene, Object3D } from 'three';

export function loadGLTF(url: string, scene: Scene): Promise<Object3D> {
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();
        loader.load(
            url,
            (gltf) => {
                scene.add(gltf.scene);
                resolve(gltf.scene);
            },
            undefined,
            (error) => {
                reject(error);
            }
        );
    });
}