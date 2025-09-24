window.addEventListener('load', function () {
    console.log('page is loaded');


    // ~ GENERATE A PITCH ~ //

    // grab generate button html
    let button = document.getElementById('generate__button');

    // add click event to button
    button.addEventListener("click", function () {
        // testing button works
        console.log("button was clicked");

        // ~ FETCH API ~ //
        // when button is clicked, reponse is sought out from API
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