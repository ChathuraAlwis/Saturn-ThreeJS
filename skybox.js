function loadSkybox(index){
    var filename = 'assets/skyboxes/skybox' + index.toString();

    let materialArray = [];
    const loader = new THREE.TextureLoader();

    materialArray.push(new THREE.MeshBasicMaterial({ map: loader.load(filename + '/right.png')}))
    materialArray.push(new THREE.MeshBasicMaterial({ map: loader.load(filename + '/left.png')}))
    materialArray.push(new THREE.MeshBasicMaterial({ map: loader.load(filename + '/top.png')}))
    materialArray.push(new THREE.MeshBasicMaterial({ map: loader.load(filename + '/bottom.png')}))
    materialArray.push(new THREE.MeshBasicMaterial({ map: loader.load(filename + '/front.png')}))
    materialArray.push(new THREE.MeshBasicMaterial({ map: loader.load(filename + '/back.png')}))

    for (let i = 0; i < 6; i++){ materialArray[i].side = THREE.BackSide; }
    let geometry = new THREE.BoxGeometry(5000, 5000, 5000);
    let skybox = new THREE.Mesh(geometry, materialArray);
    scene.add(skybox);
}