import * as TWEEN from 'es6-tween';
import * as THREE from 'three'
    ;
function random(scaleFactor) {
    return Math.random() > 0.5
        ? scaleFactor * Math.random()
        : -scaleFactor * Math.random();
}

const MARKER_COLOR = '#150F73';
const MARKER_COMPANION_COLOR = '#141414';

export default function markerRenderer(marker) {

    const size = Math.max(marker.value / 20, 1);
    const geometry = new THREE.SphereGeometry(size, 32, 32);
    //const geometry = new THREE.TorusGeometry(size, 0.1, 30, 200, 6.3);
    //const geometry = new THREE.CylinderGeometry(27, 27, 5, 64, 1, false, 1, 6.3);
    const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(MARKER_COLOR),
    });

    // add light
    const mesh = new THREE.Mesh(geometry, material);
    const light = new THREE.PointLight(MARKER_COLOR, 1, 0, 0);
    mesh.children = [];
    mesh.add(light);

    // add companion markers based on size
    const companions = [];
    for (let i = 0; i < 4; i++) {
        const companionGeometry = new THREE.TorusGeometry(size, 0.1, 30, 200, 6.3);
        //const companionGeometry = new THREE.SphereGeometry(Math.min((size * Math.random()) / 2, 1), 10, 10);
        const companionMaterial = new THREE.MeshBasicMaterial({
            color: new THREE.Color(MARKER_COMPANION_COLOR),
        });
        const companion = new THREE.Mesh(companionGeometry, companionMaterial);
        companion.lookAt(new THREE.Vector3(0, 0, 0));
        companions.push(companion);
        mesh.add(companion);
    }


    companions.forEach((companion, i) => {
        function animate() {
            const from = {
                opacity: 1,
                position: companion.position.clone().toArray(),
                scale: 0.1,
            };
            const to = {
                opacity: 0.1,
                position: companion.position.clone().toArray(),
                scale: Math.max(3, Math.random()),
            };
            const tween = new TWEEN.Tween(from)
                .to(to, 4000)
                .easing(TWEEN.Easing.Quadratic.Out)
                .delay(i * 500);
            tween
                .on('update', () => {
                    const [x, y, z] = from.position;
                    const companionMaterial = companion.material;
                    const intensityChange = random(0.05);
                    if (light.intensity + intensityChange > 0 &&
                        light.intensity + intensityChange < 1.5) {
                        light.intensity += intensityChange;
                    }
                    companionMaterial.opacity = from.opacity;
                    companion.scale.x = from.scale;
                    companion.scale.y = from.scale;
                    companion.scale.z = from.scale;
                    companion.position.set(x, y, z);
                })
                .on('complete', animate)
                .start();
        }
        animate();
    });


    return mesh;
}
