import { Scene } from 'three';

export class HUD {
    private scene: Scene;

    constructor(scene: Scene) {
        this.scene = scene;
        this.initHUD();
    }

    private initHUD(): void {
        // Initialize HUD elements here
    }

    public updateHUD(info: any): void {
        // Update HUD with new information
    }

    public render(): void {
        // Render the HUD elements
    }
}