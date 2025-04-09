import * as THREE from "three";

const geometry = new THREE.PlaneGeometry(200, 100);

const loader = new THREE.TextureLoader();
const texture = loader.load("./bg.png");
texture.colorSpace = THREE.SRGBColorSpace;


const material = new THREE.MeshBasicMaterial({
  map: texture
})
const mesh = new THREE.Mesh(geometry, material);

export default mesh;

