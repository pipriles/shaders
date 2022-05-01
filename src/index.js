import * as THREE from 'three';
import FRAGMENT_SHADER from './shaders/fragment_04.frag';
import VERTEX_SHADER from './shaders/vertex.frag';

let camera, scene, renderer, clock;
let uniforms;

init();
animate();

function init() {
  const root = document.getElementById( 'root' );

  camera = new THREE.Camera();
  camera.position.z = 1;

  scene = new THREE.Scene();
  clock = new THREE.Clock();

  let geometry = new THREE.PlaneBufferGeometry( 2, 2 );

  uniforms = {
    u_time: { type: "f", value: 1.0 },
    u_resolution: { type: "v2", value: new THREE.Vector2() },
    u_mouse: { type: "v2", value: new THREE.Vector2() }
  };

  let material = new THREE.ShaderMaterial( {
    uniforms: uniforms,
    vertexShader: VERTEX_SHADER,
    fragmentShader: FRAGMENT_SHADER
  } );

  let mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );

  root.appendChild( renderer.domElement );

  onWindowResize();
  window.addEventListener( 'resize', onWindowResize, false );

  document.onmousemove = function(e){
    uniforms.u_mouse.value.x = e.pageX
    uniforms.u_mouse.value.y = renderer.domElement.height - e.pageY
  }
}

function onWindowResize( _event ) {
  renderer.setSize( window.innerWidth, window.innerHeight );
  uniforms.u_resolution.value.x = renderer.domElement.width;
  uniforms.u_resolution.value.y = renderer.domElement.height;
}

function animate() {
  requestAnimationFrame( animate );
  render();
}

function render() {
  uniforms.u_time.value += clock.getDelta();
  renderer.render( scene, camera );
}
