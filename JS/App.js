/*supertechpath@gmail.com*/
var heroi, vilao, onAir = false, paredeMet11, paredeMet12, paredeMet13, paredeMet21, paredeMet22, paredeMet23, paredeMet31, paredeMet32, paredeMet33, paredeMet41, paredeMet42, paredeMet43, G0, G2, mat, mat1, ma2, met, met1, met2, met3, XSpeed = 1.0, scene, renderer, direction = "stop", min = -2, max = 2, camera360, came36, apoio = 0, ax, ay, az, test = render, t360 = false;
var bullets = [];
var par1, par2, par3, par4, planoMaterial;
function criarCenario() {
    const dynamicSubjects = [];
    scene = new THREE.Scene();
    came1();

    //came3();
    /*var heroiG = new naveHeroi();
    var vilaoG = naveVilao();


    artista.position.z = 120;
    artista.position.y = -30;
    bandido.position.z = -250;*/
    Cenario();
    //luzDirecionada();

}
//Luz Direcionado
function luzDirecionada() {
    var directionalLight = new THREE.DirectionalLight(0xffffff, 5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
}
//Cálculo de Iluminação
function CalculoIlum() {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    scene.add(directionalLight);

}
function Holofote1() {
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const c1 = new THREE.Mesh(new THREE.ConeGeometry(1, 3, 32), material);
    c1.position.set(20.0, 20.0, 20.0);
    const c2 = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16), material);
    c2.position.set(19.5, 19.5, 19.5);
    c3 = new THREE.Object3D();
    c3.add(c1);
    c3.add(c2);
    c3.position.set(0.0, 0.0, 0.0);

    scene.add(c3);
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(100, 1000, 100);

    spotLight.castShadow = true;

    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;

    spotLight.shadow.camera.near = 500;
    spotLight.shadow.camera.far = 4000;
    spotLight.shadow.camera.fov = 30;

    scene.add(spotLight);
}
function Holofote2() {
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const c1 = new THREE.Mesh(new THREE.ConeGeometry(1, 3, 32), material);
    c1.position.set(20.0, 20.0, 20.0);
    const c2 = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16), material);
    c2.position.set(19.5, 19.5, 19.5);
    c3 = new THREE.Object3D();
    c3.add(c1);
    c3.add(c2);
    c3.position.set(0.0, 0.0, 0.0);

    scene.add(c3);
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(750, 800, 750);

    spotLight.castShadow = true;

    spotLight.shadow.mapSize.width = 924;
    spotLight.shadow.mapSize.height = 924;

    spotLight.shadow.camera.near = 400;
    spotLight.shadow.camera.far = 3000;
    spotLight.shadow.camera.fov = 60;

    scene.add(spotLight);
}
function Holofote3() {
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const c1 = new THREE.Mesh(new THREE.ConeGeometry(1, 3, 32), material);
    c1.position.set(20.0, 20.0, 20.0);
    const c2 = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16), material);
    c2.position.set(19.5, 19.5, 19.5);
    c3 = new THREE.Object3D();
    c3.add(c1);
    c3.add(c2);
    c3.position.set(0.0, 0.0, 0.0);

    scene.add(c3);
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(800, 950, 800);

    spotLight.castShadow = true;

    spotLight.shadow.mapSize.width = 824;
    spotLight.shadow.mapSize.height = 824;

    spotLight.shadow.camera.near = 500;
    spotLight.shadow.camera.far = 3000;
    spotLight.shadow.camera.fov = 40;

    scene.add(spotLight);
}
function Holofote4() {
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const c1 = new THREE.Mesh(new THREE.ConeGeometry(1, 3, 32), material);
    c1.position.set(20.0, 20.0, 20.0);
    const c2 = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16), material);
    c2.position.set(19.5, 19.5, 19.5);
    c3 = new THREE.Object3D();
    c3.add(c1);
    c3.add(c2);
    c3.position.set(0.0, 0.0, 0.0);

    scene.add(c3);
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(900, 900, 900);

    spotLight.castShadow = true;

    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;

    spotLight.shadow.camera.near = 600;
    spotLight.shadow.camera.far = 6000;
    spotLight.shadow.camera.fov = 60;

    scene.add(spotLight);
}

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}
const stats = Stats()
document.body.appendChild(stats.dom)
const gui = new GUI()
gui.add(material, 'bumpScale', 0, 1, 0.01)

function Cenario() {
    var planoGeometrico = new THREE.PlaneGeometry(40, 60);
    planoMaterial = new THREE.MeshBasicMaterial({ wireframe: false });
    const texture = new THREE.TextureLoader().load('img/worldColour.5400x2700.jpg')
    planoMaterial.map = texture
    const bumpTexture = new THREE.TextureLoader().load('img/earth_bumpmap.jpg')
    planoMaterial.bumpMap = bumpTexture
    planoMaterial.bumpScale = 0.015
    var plano = new THREE.Mesh(planoGeometrico, planoMaterial);
    plano.position.set(0, 0, -4);



    //Parede Esquerda Mona
    var paredeGeo1 = new THREE.PlaneGeometry(20, 60);
    paredeMet11 = new THREE.MeshBasicMaterial({ wireframe: false });
    paredeMet12 = new THREE.MeshLambertMaterial({ wireframe: false });
    paredeMet13 = new THREE.MeshPhongMaterial({ wireframe: false });
    const text = new THREE.TextureLoader().load('https://pt.wikipedia.org/wiki/Mona_Lisa#/media/Ficheiro:Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg')
    paredeMet13.map = text
    var parede1 = new THREE.Mesh(paredeGeo1, paredeMet13);
    parede1.position.set(-20, 0, 0);
    parede1.rotation.y = Math.PI / 2;

    //Parede Direita Grito
    var paredeGeo2 = new THREE.PlaneGeometry(20, 60);
    paredeMet21 = new THREE.MeshBasicMaterial({  wireframe: false });
    paredeMet22 = new THREE.MeshLambertMaterial({  wireframe: false });
    paredeMet23 = new THREE.MeshPhongMaterial({wireframe: false });
    const text1 = new THREE.TextureLoader().load('https://pt.wikipedia.org/wiki/O_Grito#/media/Ficheiro:Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpg')
    paredeMet21.map = text1
    var parede2 = new THREE.Mesh(paredeGeo2, paredeMet21);
    parede2.position.set(20, 0, 0);
    parede2.rotation.y = Math.PI / 2;

    //Parede Cima
    var paredeGeo3 = new THREE.PlaneGeometry(40, 20);
    paredeMet31 = new THREE.MeshBasicMaterial({ wireframe: false });
    paredeMet32 = new THREE.MeshLambertMaterial({ wireframe: false });
    paredeMet33 = new THREE.MeshPhongMaterial({ wireframe: false });
    var parede3 = new THREE.Mesh(paredeGeo3, paredeMet31);
    parede3.position.set(0, 30, 0);
    parede3.rotation.x = Math.PI / 2;

    //Parede Baixo
    var paredeGeo4 = new THREE.PlaneGeometry(40, 20);
    paredeMet41 = new THREE.MeshBasicMaterial({ wireframe: false });
    paredeMet42 = new THREE.MeshLambertMaterial({ wireframe: false });
    paredeMet43 = new THREE.MeshPhongMaterial({ wireframe: false });
    var parede4 = new THREE.Mesh(paredeGeo4, paredeMet41);
    parede4.position.set(0, -30, 0);
    parede4.rotation.x = Math.PI / 2;


    scene.add(plano);
    scene.add(parede1);
    scene.add(parede2);
    scene.add(parede3);
    scene.add(parede4);

    var heroiG = new naveHeroi();
    var vilaoG1 = new naveVilao();

    heroi = heroiG;
    vilao = vilaoG1;
    par1 = parede1;
    par2 = parede2;
    par3 = parede3;
    par4 = parede4;

    /*var ambientLight = new THREE.AmbientLight('#ffffff', 1.5);
    scene.add(ambientLight);
*/

    placeEnemies(scene);
    checkCollisions();

}
function Phong() {
    var mate;
    mate = new THREE.MeshPhongMaterial({ wireframe: false, shininess: 30 });
    return mate;
}
function Lamb() {
    var mate;
    mate = new THREE.MeshLambertMaterial({  wireframe: false, shading: THREE.FlatShading });
    return mate;
}


function init() {
    //document.addEventListener("keydown",onDocumentKeyDown,false);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0xFFFFFF, 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);




    criarCenario();
    came1();
    render();
    window.addEventListener("keydown", onDocumentKeyDown);
}
function naveHeroi() {
    var g0, g1, g2, g3, p1, p2, p3, p4, p5;
    mat = new THREE.MeshBasicMaterial({ wireframe: false });
    mat1 = new THREE.MeshLambertMaterial({ wireframe: false });
    p5 = new THREE.Mesh(new THREE.ConeGeometry(2, 6, 3), mat1);
    p5.rotation.y = Math.PI;

    p4 = new THREE.Mesh(new THREE.ConeGeometry(3, 6, 2), mat1);
    p4.position.set(0.0, 0.0, 0.5);
    p4.rotation.y = Math.PI / 2;

    g3 = new THREE.Object3D();
    g3.add(p5);
    g3.add(p4);
    g3.position.set(0.0, -25.0, 0.0);

    p3 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 2, 32), mat1)
    p3.position.set(0.0, -22, 0.0);

    g2 = new THREE.Object3D();
    g2.add(p3);
    g2.add(g3);
    g2.position.set(0.0, 0.0, 0.0);

    p2 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 2, 32), mat1)
    p2.position.set(-2.0, -25, 0.0);

    g1 = new THREE.Object3D();
    g1.add(p2);
    g1.add(g2);
    g1.position.set(0.0, 0.0, 0.0);


    p1 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 2, 32), mat1)
    p1.position.set(2.0, -25, 0.0);

    G0 = new THREE.Object3D();
    G0.add(p1);
    G0.add(g1);
    G0.position.set(0.0, 0.0, 0.0);

    this.update = function () {
        if (this.model)
            this.model.position.y += 1;
    }
    scene.add(G0);
}

function naveVilao(Scene, x, y) {
    var p1, p2, p3, p4, g1, g2, g3;
    met = new THREE.MeshBasicMaterial({ color: 0x7777ff, wireframe: false })
    met1 = new THREE.MeshLambertMaterial({  wireframe: false, shading: THREE.FlatShading });
    met2 = new THREE.MeshPhongMaterial({ ambient: 0x050505, color: 0x7777ff, specular: 0x111111, shininess: 30 });
    p4 = new THREE.Mesh(new THREE.SphereGeometry(2, 20, 20), met1);
    p3 = new THREE.Mesh(new THREE.RingGeometry(1, 3, 30), met1);
    g3 = new THREE.Object3D();
    g3.add(p4);
    g3.add(p3);
    g3.position.set(0.0, 25.0, 0.0);

    p2 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 2, 32), met1);
    p2.position.set(0.0, 23, 0.0);
    G2 = new THREE.Object3D();
    G2.add(p2);
    G2.add(g3);
    G2.Scene;
    G2.position.set(x, y, 0.0);
    if ((G2.position.x != -17 || G2.position.x != 17) && (G2.position.y != 0 || G2.position.y != -50)) {
        window.setInterval(() => { x: G2.position.x += Math.random() * (max - min) + min; }, 300);
        window.setInterval(() => { y: G2.position.y += Math.random() * (max - min) + min; }, 300);
    }
    //G2.scale.set(0.2, 0.2, 0.2);
    scene.add(G2);

    this.destroy = function () {
        scene.remove(G2);
    }

    //scene.add(G2);
    
}

var ligarH1 = false, ligarE = false, ligarD = false, phong = false, material00, ligarDir = false

function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 80) {
        //Cartaz Esquerda
        if (!ligarE) {
            const light = new THREE.PointLight(0xffffff, 2)
            light.position.set(-20, 0, 0)
            scene.add(light)
            ligarE = true
        }

    }
    else if (keyCode == 68) {
        if (!ligarD) {
            const light = new THREE.PointLight(0xffffff, 2)
            light.position.set(20, 0, 0)
            scene.add(light)
            ligarD = true;
        }
    }
    else if (keyCode == 48) {
        if (!ligarH1) {
            Holofote1();
            ligarH1 = true;
        }
    }
    else if (keyCode == 54) {
        if (!ligarH1) {
            Holofote2();
            ligarH1 = true;
        }
    }
    else if (keyCode == 55) {
        if (!ligarH1) {
            Holofote3();
            ligarH1 = true;
        }
    }
    else if (keyCode == 56) {
        if (!ligarH1) {
            Holofote4();
            ligarH1 = true;
        }
    } else if (keyCode == 78) {
        planoMateria.wireframe = !planoMateria.wireframe;
        paredeMet11.wireframe = paredeMet11.wireframe
        paredeMet12.wireframe = paredeMet12.wireframe
        paredeMet13.wireframe = paredeMet13.wireframe
        paredeMet21.wireframe = paredeMet21.wireframe
        paredeMet22.wireframe = paredeMet22.wireframe
        paredeMet23.wireframe = paredeMet23.wireframe
        paredeMet31.wireframe = paredeMet31.wireframe
        paredeMet32.wireframe = !paredeMet32.wireframe
        paredeMet33.wireframe = !paredeMet33.wireframe
        mat.wireframe = !mat.wireframe;
        met.wireframe = !met.wireframe;
    }
    else if (keyCode == 57) {
        if (!phong) {
            material00 = Phong();
            phong = true;
        } else {
            material00 = Lamb()
            phong = false;
        }
    } else if (keyCode == 59) {
        if (!ligarDir) {
            luzDirecionada();
        }
    }
    else if (keyCode == 37 && G0.position.x != -17) {
        G0.position.x -= XSpeed;
        //G0.position.x -= XSpeed;
        /* if(direction == "left"){
           direction = "stop";
       }else if(keyCode == "stop"){
           direction = "right";
       }  */
    } else if (keyCode == 39 && G0.position.x != 17) {
        G0.position.x += XSpeed;
        /*  if(direction == "right"){
            direction = "stop";
        }else if(keyCode == "stop"){
            direction = "left";
        }  */
    }/*else if(keyCode == 40 && G2.position.y != 0){
        G2.position.y += XSpeed;
    }else if(keyCode == 38 && G2.position.y != -50){
        G2.position.y -= XSpeed;
    }*/

    else if (keyCode == 52) {
        test = render;
        mat.wireframe = !mat.wireframe;
        met.wireframe = !met.wireframe;
        //Holofote1();
    } else if (keyCode == 50) {
        test = render;
        came2();
        //Holofote2();
    } else if (keyCode == 49) {
        test = render;
        came1();
        //Holofote3();
    } else if (keyCode == 51) {
        test = render;
        came3();
        //Holofote4();
    } else if (keyCode == 53) {
        t360 = true;
        test = animate;
    }/* else if (keyCode == 69) {
        p4 = new THREE.Mesh(new THREE.SphereGeometry(2, 20, 20), met3);
        p3 = new THREE.Mesh(new THREE.RingGeometry(1, 3, 30), met3);
        p2 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 2, 32), met3);
    } else if (keyCode == 81) {
        luzDirecionada();
    } else if (keyCode == 87) {
        CalculoIlum();
    }*/
    //  dispara
    else if (keyCode == 32) {
        Dispara();
        test = animate;
    }  // Seleciona arma a esquerda
    else if (keyCode == 81) {
        selecionado = "e";
    }
    // Seleciona arma do centro
    else if (keyCode == 87) {
        selecionado = "c";
    }
    // Seleciona arma a direita
    else if (keyCode == 69) {
        selecionado = "d";
    }
}


function render() {
    'use strict'
    requestAnimationFrame(test);
    /*if(direction == "right"  && cubeHeroi.position.z != -11 ){
        G0.position.x -= XSpeed;
    }else if(direction == "left" && cubeHeroi.position.z != 13 ){
        G0.position.x += XSpeed;
    }*/
    /*if(sphere.position.x != -12 && sphere.position.z != 13){
        sphere.position.x -= XSpeed;
        sphere.position.z += XSpeed;	
    }else if(sphere.position.x == -12)
        sphere.position.x += XSpeed;*/
    renderer.render(scene, camera);
}

function came1() {
    camera1 = new THREE.OrthographicCamera(window.innerWidth / -2,
        window.innerWidth / 2,
        window.innerHeight / 2,
        window.innerHeight / -2, 55, 10000);
    /*camera3 =  new THREE.OrthographicCamera( 
            window.innerWidth / -2,
            window.innerWidth / 2, 
            window.innerHeight / 2, 
            window.innerHeight / -2, 1, 1000);
         camera3.position.set(0, 500 , 50);
         camera3.lookAt( 0, 0, 0 ); */

    camera1.position.set(5, 5, 60);
    camera1.lookAt(0, 0, 0);
    //Lateral
    camera = camera1;
}

function came2() {
    camera2 = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera2.position.set(0, -50, 60);
    //Frontal
    //camera2.position.set(-50,10,0);
    camera2.up = new THREE.Vector3(0, 0, 5);
    camera2.lookAt(0, 0, 0);
    //Topo
    camera = camera2;
}

function came3() {
    camera3 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera3.position.set(30, 0, 30);
    camera3.up = new THREE.Vector3(0, 0, 1);
    camera3.lookAt(0, 0, 0);
    camera = camera3;
}
function came360(x, y, z) {
    camera360 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera360.position.set(x, y, z);
    camera360.up = new THREE.Vector3(0, 0, 1);
    camera360.lookAt(0, 0, 0);
    camera = camera360;
}

function animate() {
    'use strict';

    if (t360) {
        apoio += 0.03;
        ay = 5 * Math.sin(apoio);
        ax = 5 * (Math.cos(apoio));
        az = 60;
        came360(ax, ay, az);

    }
    bulletControl();
    gunControl();
    render();
    stats.update()
}

//  Velocidade da bala
var volBala = 5

// Decrementar a velocidade da bala a cada segundo
function BulletSpeedControl() {
    setInterval(() => {
        if (volBala > 0)
            volBala -= 1
        if (volBala < 2)
            volBala = 5
    }, 1000);
}

// Controla o comportamento da bala a cada frame. Simula o disparo
function bulletControl() {
    if (bala != null) {
        bala.position.y += volBala
        if (bala.position.y > 35) {
            scene.remove(bala)
            onAir = false
        } else {
            onAir = true
        }
    }
}
var posicao, selecionado = "c";
// Determina a arma selecionada
function gunControl() {
    if (selecionado == "c")
        posicao = { x: G0.position.x, y: G0.position.y - 22, z: G0.position.z }
    if (selecionado == "e")
        posicao = { x: G0.position.x - 2, y: G0.position.y - 25, z: G0.position.z };
    if (selecionado == "d")
        posicao = { x: G0.position.x + 2, y: G0.position.y - 25, z: G0.position.z };
}

// A bala
var bala;
// A posicao inicial da bala

// Cria uma nova bala a cada vez que o user prime a tecla de disparo
function Dispara() {
    if (!onAir) {
        material = new THREE.MeshBasicMaterial({ color: "black", wireframe: false });
        geometry = new THREE.SphereGeometry(0.9, 20, 20);
        bala = new THREE.Mesh(geometry, material);
        bala.position.set(posicao.x, posicao.y, posicao.z)
        scene.add(bala)
        BulletSpeedControl()
    }
}

//Colisão

function checkCollisions() {
    var i = heroi.length;
    while (i--) {
        if (isCollision(par1, heroi[i])) {
            scene.remove(heroi[i].model);
            heroi.splice(i, 1);
        }
    }

    var i = vilao.length;
    while (i--) {
        if (isCollision(heroi, vilao[i])) {
            scene.remove(vilao[i].model);
            vilao.splice(i, 1);
        }

        var j = bala.length;
        while (j--) {
            if (isCollision(bala[j], vilao[i])) {
                scene.remove(vilao[i].model);
                vilao.splice(i, 1);
                scene.remove(bala[j].model);
                bala.splice(j, 1);
            }
        }
    }

}
function isCollision(m1, m2) {

    if (m1.model && m2.model) {
        minX1 = m1.model.position.x - (m1.width / 2);
        maxX1 = m1.model.position.x + (m1.width / 2);
        minY1 = m1.model.position.y - (m1.height / 2);
        maxY1 = m1.model.position.y + (m1.height / 2);

        minX2 = m2.model.position.x - (m2.width / 2);
        maxX2 = m2.model.position.x + (m2.width / 2);
        minY2 = m2.model.position.y - (m2.height / 2);
        maxY2 = m2.model.position.y + (m2.height / 2);

        if (minX1 <= maxX2 && maxX1 >= minX2 && minY1 <= maxY2 && maxY1 >= minY2)
            return true;
        else
            return false;
    }
    else
        return false;

}


function placeEnemies(scene) {

    const theEnemies = [];

    [...Array(5).keys()].map(y => {

        getRandomPositions().map(x => {
            const e = new naveVilao(scene, 3 * (x - 7), 0.5 * (y + 1));
            theEnemies.push(e);
        });
    });

    return theEnemies;

    function getRandomPositions() {

        var noEnemies = Math.floor((Math.random() * 2));

        var arr = [...Array(9).keys()];

        for (let i = 7 - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * i);
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

        return arr.slice(0, noEnemies);
    }


}
