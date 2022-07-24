function spaceStation(){
    var loader = new THREE.GLTFLoader();
    loader.load('assets/space_station/scene.gltf', function(gltf){
        scene.add(gltf.scene);
        gltf.scene.position.set(10, 0, 20);
        gltf.scene.scale.set(0.5, 0.5 , 0.5);
        gltf.scene.castSahdow = true;
    }, undefined, function(error){
        console.log(error);
    });
}