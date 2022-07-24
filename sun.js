function sun(Radius, mapFile, bmpMapFile){
    //globe
    const geometry = new THREE.SphereGeometry( Radius, 128, 64 );
    var texture = new THREE.TextureLoader().load(mapFile);
    var bmptexture = new THREE.TextureLoader().load(bmpMapFile);
    const material = new THREE.MeshBasicMaterial( { map: texture, bumpMap: bmptexture} );
    const sun = new THREE.Mesh( geometry, material );

    sun.position.set(1500, 0, 100 );
    scene.add( sun );
    sunAsSpotLight();
    // sunAsPointLight();
}


function sunAsSpotLight(){
    const spotLight = new THREE.SpotLight( 0xffffff );
    spotLight.position.set( 1500, 0, 100 );

    spotLight.castShadow = true;

    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;

    spotLight.shadow.camera.near = 0.1;
    spotLight.shadow.camera.far = 3000;
    spotLight.shadow.camera.fov = 30;

    scene.add( spotLight );

    const helper = new THREE.CameraHelper( spotLight.shadow.camera );
    // scene.add( helper );
}


function sunAsPointLight(){
    const light = new THREE.PointLight( 0xffffff, 1, 100 );
    light.position.set( 1000, 10, 100 );
    scene.add( light );
}