import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Lensflare } from 'three/addons/objects/Lensflare.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);


// THE SUN

const sunMaterial = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load('sun.jpg'),
});

const sunGeometry = new THREE.SphereGeometry(6, 32, 32);
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

    // VENUS

    const venusMaterial = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load('venus.jpg'),
  });
  
  const venusGeometry = new THREE.SphereGeometry(2, 32, 32);
  const venus = new THREE.Mesh(venusGeometry, venusMaterial);
  scene.add(venus);

  //MERCURY

  const mercuryMaterial = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load('mercury.jpg'),
  });
  
  const mercuryGeometry = new THREE.SphereGeometry(2, 32, 32);
  const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
  scene.add(mercury);

  //EARTH

const earthMaterial = new THREE.MeshPhongMaterial({
  map: new THREE.TextureLoader().load('earth.jpg'),
});

const earthGeometry = new THREE.SphereGeometry(2, 32, 32);
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);
earth.position.x = 5;

    //MARS

const marsMaterial = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load('mars.jpg'),
  });
  
  const marsGeometry = new THREE.SphereGeometry(2, 32, 32);
  const mars = new THREE.Mesh(marsGeometry, marsMaterial);
  scene.add(mars);

  //JUPITER

  const jupiterMaterial = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load('jupiter.jpg'),
  });
  
  const jupiterGeometry = new THREE.SphereGeometry(4, 32, 32);
  const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
  scene.add(jupiter);

  //SATURN

  const saturnMaterial = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load('saturn.jpg'),
  });
  
  const saturnGeometry = new THREE.SphereGeometry(1.5, 32, 32);
  const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
  scene.add(saturn);
  const ringGeometry = new THREE.RingGeometry(1.5, 2.5, 32);
  const ringMaterial = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load('ring.jpg'),
  });
  const ring = new THREE.Mesh(ringGeometry, ringMaterial);
  ring.position.set(0, 0, 0);
  ring.rotation.x = Math.PI / 4;
  saturn.add(ring);

  //URANUS

  const uranusMaterial = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load('uranus.jpg'),
  });
  
  const uranusGeometry = new THREE.SphereGeometry(1.5, 32, 32);
  const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
  scene.add(uranus);

  //NEPTUNE

  const neptuneMaterial = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load('neptune.jpg'),
  });
  
  const neptuneGeometry = new THREE.SphereGeometry(1.5, 32, 32);
  const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
  scene.add(neptune);
 
  //LIGHTING

const ambientLight = new THREE.AmbientLight(0x404040);
ambientLight.intensity = 50;
scene.add(ambientLight);

const texture = new THREE.TextureLoader().load('background.jpg');
scene.background = texture;



const controls = new OrbitControls(camera, renderer.domElement);

const animate = () => {
  requestAnimationFrame(animate);
  mercury.rotation.y += 0.004;
  mercury.position.x = 10 * Math.cos(performance.now() * 0.0051);
  mercury.position.z = 10 * Math.sin(performance.now() * 0.0051);
  venus.rotation.y += 0.004;
  venus.position.x = 15 * Math.cos(performance.now() * 0.004);
  venus.position.z = 15 * Math.sin(performance.now() * 0.004);
  earth.rotation.y += 0.002;
  earth.position.x = 20 * Math.cos(performance.now() * 0.0007);
  earth.position.z = 20 * Math.sin(performance.now() * 0.0007);
  mars.rotation.y += 0.004;
  mars.position.x = 25 * Math.cos(performance.now() * 0.0054);
  mars.position.z = 25 * Math.sin(performance.now() * 0.0054);
  jupiter.rotation.y += 0.004;
  jupiter.position.x = 30 * Math.cos(performance.now() * 0.001);
  jupiter.position.z = 30 * Math.sin(performance.now() * 0.001);
  saturn.rotation.y += 0.004;
  saturn.position.x = 35 * Math.cos(performance.now() * 0.0009);
  saturn.position.z = 35 * Math.sin(performance.now() * 0.0009);
  uranus.rotation.y += 0.004;
  uranus.position.x = 40 * Math.cos(performance.now() * 0.0005);
  uranus.position.z = 40 * Math.sin(performance.now() * 0.0005);
  neptune.rotation.y += 0.004;
  neptune.position.x = 45 * Math.cos(performance.now() * 0.0004);
  neptune.position.z = 45 * Math.sin(performance.now() * 0.0004);


  

  controls.update();

  renderer.render(scene, camera);
};

camera.position.z = 60;

const closeButton = document.getElementById('close-popup');
function closePopup() {
  popup.style.display = 'none';
}
closeButton.addEventListener('click', closePopup);

const body = document.getElementById('container')

body.addEventListener('click', function() {

})

animate();
