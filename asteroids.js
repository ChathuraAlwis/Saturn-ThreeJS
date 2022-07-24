function otherFloatingObjects(size, after, filepath){

    var vertices = [];

    for (var i = 0; i < 10; i++){
        var x = THREE.MathUtils.randFloatSpread(2000);
        var y = THREE.MathUtils.randFloatSpread(2000);
        var z = THREE.MathUtils.randFloatSpread(2000);
        var speed = THREE.MathUtils.randFloat(0.5, 2);

        //choose only far asteroids
        if (!(x<after && x>-after) || !(y<after && y>-after) || !(z<after && z>-after)) vertices.push(x, y, z);
    }

    var geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    var texture = new THREE.TextureLoader().load(filepath);
    var material = new THREE.PointsMaterial({size: size, map: texture, transparent: true});
    var asteroids = new THREE.Points(geometry, material);
    asteroids.rotateX(10);
    scene.add(asteroids);

    function animate() {
        requestAnimationFrame( animate );
        asteroids.position.z += speed;
        renderer.render( scene, camera );
    };

    animate();

}