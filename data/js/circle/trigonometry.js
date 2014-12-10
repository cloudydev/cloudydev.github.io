$(function(){ 
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer({canvas : document.getElementById("canvas-circle-0")});

    var geometry = new THREE.Geometry();
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

    geometry.vertices.push(
      new THREE.Vector3(-10, 0, 0),
      new THREE.Vector3(0, 10, 0),
      new THREE.Vector3(10, 0, 0),
      new THREE.Vector3(0, -10, 0)
    );
    
    var line = new THREE.Line(geometry, material);
    scene.add(line);
    camera.position.z = 20;

    var render = function () {
        requestAnimationFrame( render );
        renderer.render(scene, camera);
    };

    render();
});
