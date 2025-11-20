# Three GLTF 3D Gallery

This project is a 3D model viewer built using Three.js and GLTF format. It allows users to interact with various 3D models, including floating satellites, submarines, and cubes.

## Project Structure

- **public/index.html**: Main HTML entry point for the application.
- **src/index.ts**: Main entry point for the TypeScript application.
- **src/app.ts**: Sets up the main application logic, including the scene, camera, and renderer.
- **src/scenes/mainScene.ts**: Manages the main 3D scene, adding models and handling updates.
- **src/scenes/lighting.ts**: Configures the lighting for the 3D scene.
- **src/components/ModelViewer.ts**: Handles loading and displaying GLTF models.
- **src/components/HUD.ts**: Manages the heads-up display for user interactions.
- **src/components/Controls.ts**: Manages user input for navigating the 3D scene.
- **src/loaders/gltfLoader.ts**: Loads GLTF models for use in the scene.
- **src/integrations/spline.ts**: Integrates Spline for enhanced model interactions and animations.
- **src/models/**: Contains the GLTF and GLB model data for the satellite, submarine, and cube.
- **src/utils/math.ts**: Utility functions for mathematical operations.
- **src/styles/main.css**: CSS styles for the application.
- **src/types/index.d.ts**: TypeScript type definitions.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd three-gltf-3d-gallery
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.

## Features

- Interactive 3D model viewing
- Support for GLTF and GLB formats
- User-friendly controls for navigation
- Customizable lighting and scene settings

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.