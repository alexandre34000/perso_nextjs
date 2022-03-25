import * as THREE from 'three';
import styles from './Map-monde.module.css';
import { useEffect } from 'react';

const MapMonde = () => {

    let scene, renderer, camera, earthMesh;
    const coordonate = [
        {
            town: "Paris",
            lat: 48.856614,
            long: 2.3522219
        },
        {
            town: "NewYork",
            lat: 40.712784,
            long: -74.005941
        },
        {
            town: "Shangai",
            lat: 31.224361,
            long: 121.469170
        }
    ];

    const createEarth = () => {
        const loader = new THREE.TextureLoader();
        var geometry = new THREE.SphereGeometry(8, 128, 128);//(rayon, segment largeur, segment hauteur)
        var material = new THREE.MeshPhongMaterial({
            map: loader.load('/images/map/earthmap1k.jpg'),
            bumpMap: loader.load('/images/map/earthbump1k.png'),
            bumpScale: 1,
            specularMap: loader.load('/images/map/earthspec1k.jpg'),
            specular: new THREE.Color('grey'),
            shininess: 15
        });
        return new THREE.Mesh(geometry, material);
    }

    const resize = () => {
        var width = renderer.domElement.clientWidth;
        var height = renderer.domElement.clientHeight;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }

    const addObject = () => {
        let geometry = new THREE.SphereBufferGeometry(0.15, 20, 20);
        let material = new THREE.MeshBasicMaterial({ color: 0xc01125 });
        return new THREE.Mesh(geometry, material);
    }

    const convertLatLongToCartesian = (p) => {
        let radius = 8
        let phi = ((p.lat) * (Math.PI / 180));
        let theta = (-(p.long) * (Math.PI / 180));
        let x = radius * Math.cos(theta) * Math.cos(phi);
        let z = radius * Math.sin(theta) * Math.cos(phi);
        let y = radius * Math.sin(phi);
        return { x, y, z }
    }

    const init = () => {
        renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#canvasmain'), alpha: true, antialias: true });//alpha: true
        renderer.shadowMap.enabled = true;

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(70, 1, 1, 1000);
        camera.position.set(0, 0, 18);

        var lightAmb = new THREE.AmbientLight(0x888888, 0.8);
        scene.add(lightAmb);

        var light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(5, 5, 5);
        scene.add(light);

        light.castShadow = true;
        light.shadow.camera.near = 0.01;
        light.shadow.camera.far = 15;
        light.shadow.camera.fov = 45;

        light.shadow.camera.left = -1;
        light.shadow.camera.right = 1;
        light.shadow.camera.top = 1;
        light.shadow.camera.bottom = -1;
        light.shadow.bias = 0.001;
        light.shadow.darkness = 0.01;

        light.shadow.mapSize.width = 1024;
        light.shadow.mapSize.height = 1024;

        earthMesh = createEarth();
        earthMesh.receiveShadow = true;
        earthMesh.castShadow = true;
        earthMesh.rotation.x += 0.5;
        scene.add(earthMesh);

        coordonate.forEach((el) => {
            let dotMesh = addObject();
            let cartesian = convertLatLongToCartesian(el);
            dotMesh.position.set(cartesian.x, cartesian.y, cartesian.z);
            earthMesh.add(dotMesh);
        })
    }

    const animate = () => {
        resize();
        earthMesh.rotation.y += 0.001;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    useEffect(() => {
        init();
        animate();
    }, [])

    return (
        <div className={styles["main-container"]}>
            <canvas className={styles["canvas"]} id="canvasmain" width="350" height="450"></canvas>
        </div>
    )
}

export default MapMonde;