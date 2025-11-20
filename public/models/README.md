Place your 3D model files (GLB/GLTF) in this folder.

Recommended filenames used by the site:
- satellite.glb
- submarine.glb
- cube.glb

Example usage in code:
  setOpenModel('/models/satellite.glb')

Notes:
- Use binary .glb for smaller bundles and easier hosting.
- Keep models below a few MB for a fast dev/test experience.
- If you use textures or external files, prefer embedded GLB or host the textures alongside the model and update the path.
