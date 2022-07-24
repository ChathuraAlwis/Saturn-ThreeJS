function saturnGlobe(Radius, mapFile, bmpMapFile){

    //globe
    const geometry = new THREE.SphereGeometry( Radius, 128, 64 );
    var texture = new THREE.TextureLoader().load(mapFile);
    var bmptexture = new THREE.TextureLoader().load(bmpMapFile);
    const material = new THREE.MeshStandardMaterial( { map: texture, bumpMap: bmptexture} );
    const saturn = new THREE.Mesh( geometry, material );
    saturn.castShadow = true;
    saturn.receiveShadow = true;
    scene.add( saturn );

    function animate() {
        requestAnimationFrame( animate );
        saturn.rotation.y += 0.002;
        renderer.render( scene, camera );
    };

    animate();
}

function saturnRings(startAt, mapFile, bmpMapFile, y){

    //rings
    const geometry = new THREE.RingGeometry( startAt, startAt + 10, 1280, phiSegments = 300 );
    var texture = new THREE.TextureLoader().load(mapFile);
    var bmptexture = new THREE.TextureLoader().load(bmpMapFile);
    const material = new THREE.MeshStandardMaterial( { map: texture, bumpMap: bmptexture, side: THREE.DoubleSide, transparent: true } );
    const rings = new THREE.Mesh( geometry, material );
    rings.rotation.x = -1.4;
    rings.rotation.y = 0.1;
    rings.position.y = y;
    // rings.castShadow = true;
    rings.receiveShadow = true;
    scene.add(rings);
    
    function animate() {
        requestAnimationFrame( animate );
        rings.rotation.z += 0.002;
        renderer.render( scene, camera );
    };

    animate();
}

function createMoons(endAt, mapFile, bmpMapFile){

    var texture = new THREE.TextureLoader().load(mapFile);
    // var bmptexture = new THREE.TextureLoader().load(bmpMapFile);
    const material = new THREE.MeshPhongMaterial( { map: texture} );

    //for titan
    const titanmaterial = new THREE.MeshPhongMaterial( { map: texture, color:0xffa500} );
    Moon([endAt/2, 0, endAt/2], 0.8, 0.01, 0.004, titanmaterial, true);

    //for other random 10 moons
    for (var i = 0; i < 10; i++){
        var x = THREE.MathUtils.randFloatSpread(endAt);
        var y = THREE.MathUtils.randFloatSpread(15);
        var z = THREE.MathUtils.randFloatSpread(endAt);
        var pos = [x, y, z];
        var size = THREE.MathUtils.randFloat(0.1, 0.5);
        var rotation = THREE.MathUtils.randFloat(0.001, 0.1);
        var orbit = THREE.MathUtils.randFloat(0.0005, 0.001);
        Moon(pos, size, rotation, orbit, material)
    }

}

function Moon(pos, size, rotationSpeed, orbitSpeed, material, shadowCast=false){

    var geometry = new THREE.SphereGeometry( size, 32, 16 );
    var moon = new THREE.Mesh( geometry, material );
    var moonObj = new THREE.Object3D();
    moonObj.add(moon);
    scene.add(moonObj);

    moon.position.x = pos[0];
    moon.position.y = pos[1];
    moon.position.z = pos[2];

    moon.receiveShadow = true;
    moon.castShadow = shadowCast;
        
    function animate() {
        requestAnimationFrame( animate );
        moon.rotateY(rotationSpeed);
        moonObj.rotateY(orbitSpeed);
        renderer.render( scene, camera );
    };

    animate()
}
    
