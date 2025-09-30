import * as THREE from 'three';


window.addEventListener('load', function () {
    console.log('page is loaded');

    // ~ LOAD THREE.JS ELEMENTS ~ //

    // canvas
    let canvas = document.getElementById('canvas');

    // scene
    let scene = new THREE.Scene();

    // object
    let geometry = new THREE.BoxGeometry(1, 1, 1);
    let material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    let box = new THREE.Mesh(geometry, material);
    scene.add(box);

    // size 
    let sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    // update sizes
    window.addEventListener('resize', function() {
        
        // update window sizes
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        // update camera
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        // update renderer
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    })

    // camera
    let camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    // move camera backwards
    camera.position.z = 3;
    scene.add(camera);

    // renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true
    })
    renderer.setSize(sizes.width, sizes.height);
    // call renderer to display scene
    // renderer.render(scene, camera);

    /// ~ ANIMATE ~ //
    // clock
    let clock = new THREE.Clock();

    function tick () {
       
        // get elapsed time
        let elapsedTime = clock.getElapsedTime();

        // update box position (move in circle)
        box.position.y = Math.sin(elapsedTime);
        box.position.x = Math.cos(elapsedTime);

         // call renderer
        renderer.render(scene, camera);

        // execute function each drame
        window.requestAnimationFrame(tick);


    }

    tick();

    // ~ GENERATE A PITCH ~ //

    // grab 'generate' button html
    let button = document.getElementById('generate__button');

    // add click event to 'generate' button
    button.addEventListener("click", function () {
        // testing button works
        console.log("button was clicked");

        // ~ FETCH API ~ //
        // when 'generate' button is clicked, reponse is sought out from API
        fetch("https://corsproxy.io/?https://itsthisforthat.com/api.php?json")
            .then(response => response.json())
            .then(data => {
                // see the retrieved data in console
                console.log(data);

                // // grab HTML element where pitch will be displayed on screen
                let displayedPitch = document.getElementById('displayed__pitch');

                // update it's text content with API data
                displayedPitch.textContent = `${data.this}` + " for " + `${data.that}`;

                // show the text on screen
                displayedPitch.style.visibility = 'visible';


            })


    })


    // ~ SCROLL PAGE ~ //
    // grab scroll icon
    let scrollPage = document.getElementById('scroll__page');

    // grab 'main' page
    let scrollHere = document.getElementById('main');

    // when icon is clicked, scroll to 'main' page
    scrollPage.addEventListener("click", function() {
        scrollHere.scrollIntoView({
            behavior: "smooth",
            block: "end"
        })
    })

})