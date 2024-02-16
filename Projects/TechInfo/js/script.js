// The displayQuotesPanel function is used to display a random quote from the array in the HTML element that has the ID of 'quotesPanel'
function displayQuotesPanel() {
    // Call the clear() function with 'quotesPanel' as a paremeter 
    clear('quotesPanel')

    const quotesPanel = document.querySelector('#quotesPanel')

    const quotes = [
        "We're the leading source for technological information", "You'd be a fool not to read our databases"
    ]

    // Generate random number to randomly select an element from the quotes array
    let random = 0
    while (currentQuote == random) {
        random = Math.floor(Math.random() * quotes.length)
    }
    // Set the innerHTML of the quotesPanel to the quote and also include <p> tags around it
    quotesPanel.innerHTML = "<p>" + quotes[random] + "</p>"
    currentQuote = random
}

// The displayinfoPanel() function is used to populate content in the HTML element with the ID of 'infoPanel'
function displayinfoPanel() {
    let InfoItems = document.querySelector('#infoPanel')

    const info = [
        ['May 22, 2020', 'Computer', 'A computer is a machine or device that performs processes, calculations and operations based on instructions provided by a software or hardware program. It has the ability to accept data (input), process it, and then produce outputs.'],
        ['May 30, 2021', 'Mouse', 'The mouse is a hand-held device that transmits your commands to the computer by controlling the movement of the cursor/pointer on the computer screen. As you move the mouse, the pointer on the screen moves in the same direction.'],
        ['June 14, 2019', 'Keyboard', 'A computer keyboard is an input device that allows a person to enter letters, numbers, and other symbols (together, these are called characters) into a computer. It is one of the most used input devices for computers. Using a keyboard is often called typing.'],
        ['July 2, 2018', 'TV', 'TV is a machine with a screen. TVs receive broadcasting signals and change them into pictures and sound.TV stands for telegram television.']
    ]

    // Create a variable named 'randomTechnology' and assign it a random number. This number will be used to index into the featuredTechnologies array
    let randomInfo = 0
    while (currentInfo == randomInfo) {
        randomInfo = Math.floor(Math.random() * info.length)
    }
    currentInfo = randomInfo

    clear(infoPanel)
    // Loop through the info array of arrays to display the info, starting at a random item.
    var InfoIndex = randomInfo
    for (i = 0; i < info.length; i++) {
        element = info[InfoIndex]
        // add elements to the page (DOM) to make the info array items appear on the page
        // Create the h2
        let h2 = document.createElement('h2')
        h2.innerText = element[1] + " - " + element[0]
        h2.setAttribute('class', "mt-3")
        InfoItems.appendChild(h2)

        // Create the module description
        let p = document.createElement('p')
        p.innerText = element[2]
        InfoItems.appendChild(p)

        // Increment to the next array index, and wrap-around to zero if already at the end of the array.
        InfoIndex = InfoIndex + 1
        if (InfoIndex == info.length) {
            InfoIndex = 0
        }
    }
}

function displaySocialMediaPanel() {
    // Create a variable named 'socialMediaPanel' that is a handle to the element with the ID of 'socialMediaPanel'
    let socialMediaPanel = document.querySelector('#socialMediaPanel')

    const socialMedia = [
        ['#4267B2', 'bi bi-facebook', 'M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z'],
        ['#8a3ab9', 'bi bi-instagram', 'M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z'],
        ['#1DA1F2', 'bi bi-twitter', 'M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z']
    ]

    let randomSocialMedia = 0
    while (currentSocialmedia == randomSocialMedia) {
        randomSocialMedia = Math.floor(Math.random() * socialMedia.length)
    }
    currentSocialMedia = randomSocialMedia

    clear(socialMediaPanel)
    // Loop through the info array of arrays. No need for nested loops.
    var SocialMediaIndex = randomSocialMedia
    //for (i = 0; i < socialMedia.length; i++) {
    element = socialMedia[SocialMediaIndex]

    let socialmediaImg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    socialmediaImg.setAttribute('width', '48')
    socialmediaImg.setAttribute('height', '48')
    socialmediaImg.setAttribute('fill', socialMedia[randomSocialMedia][0])
    socialmediaImg.setAttribute('class', socialMedia[randomSocialMedia][1])
    socialmediaImg.setAttribute('viewBox', '0 0 16 16')

    let path = document.createElementNS("http://www.w3.org/2000/svg", "path")
    path.setAttribute("d", socialMedia[randomSocialMedia][2])

    socialmediaImg.appendChild(path)

    socialMediaPanel.appendChild(socialmediaImg)
}

// The displayFeaturedTechnologyPanel() function is used to populate content in the HTML element with the ID of 'featuredTechnologyPanel'
function displayFeaturedTechnologyPanel() {
    const featuredTechnology = document.querySelector('#featuredTechnologyPanel')

    clear(featuredTechnologyPanel)

    const featuredTechnologies = [
        ['Computer', 'img/computer.jpg'],
        ['Tablet', 'img/tablet.jpg'],
        ['Keyboard', 'img/keyboard.jpg'],
        ['TV', 'img/tv.jpg'],
        ['Mouse', 'img/mouse.jpg'],
    ]

    let randomTechnology = 0
    while (currentTechnology == randomTechnology) {
        randomTechnology = Math.floor(Math.random() * featuredTechnologies.length)
    }
    currentTechnology = randomTechnology

    let imgName = document.createElement('h2')
    imgName.innerText = featuredTechnologies[randomTechnology][0]
    imgName.setAttribute('class', "technologypic")
    featuredTechnology.appendChild(imgName)

    let technologyImg = document.createElement('img')
    technologyImg.setAttribute('class', "technologypic rounded mx-auto d-block")
    technologyImg.setAttribute('src', featuredTechnologies[randomTechnology][1])
    featuredTechnology.appendChild(technologyImg)
}

// The displayFeaturedTechnologyPanel2() function is used to populate content in the HTML element with the ID of 'featuredTechnologyPanel'
function displayFeaturedTechnologyPanel2() {
    const featuredTechnology = document.querySelector('#featuredTechnologyPanel2')

    clear(featuredTechnologyPanel2)

    const featuredTechnologies = [
        ['Computer', 'img/computer.jpg'],
        ['Tablet', 'img/tablet.jpg'],
        ['Keyboard', 'img/keyboard.jpg'],
        ['TV', 'img/tv.jpg'],
        ['Mouse', 'img/mouse.jpg'],
    ]

    let randomTechnology = 0
    while (currentTechnology2 == randomTechnology) {
        randomTechnology = Math.floor(Math.random() * featuredTechnologies.length)
    }
    currentTechnology2 = randomTechnology

    // add elements to the page (DOM) to make the featured technology appear on the page
    let imgName = document.createElement('h2')
    imgName.innerText = featuredTechnologies[randomTechnology][0]
    imgName.setAttribute('class', "technologypic")
    featuredTechnology.appendChild(imgName)

    let border = document.createElement('p')
    imgName.setAttribute('id', "line")
    featuredTechnology.appendChild(border)

    let technologyImg = document.createElement('img')
    technologyImg.setAttribute('class', "technologypic rounded mx-auto d-block")
    technologyImg.setAttribute('src', featuredTechnologies[randomTechnology][1])
    featuredTechnology.appendChild(technologyImg)
}

// This function clears out the innerHTML of the element passed in as a parameter
function clear(panelID) {
    panelID.innerHTML = ''
}

// This function takes five parameters that are handles to timers
function stopIntervals(timer1, timer2, timer3, timer4, timer5) {
    console.log('Stopping intervals...')
    clearInterval(timer1)
    clearInterval(timer2)
    clearInterval(timer3)
    clearInterval(timer4)
    clearInterval(timer5)

    console.log('All intervals have been stopped')
}

// Used to remember what quote is currently being displayed.
let currentQuote = 0

// Used to remember what info item is currently being displayed.
let currentInfo = 0

// Used to remember what technology is currently being displayed.
let currentTechnology = 0
let currentTechnology2 = 0

// Used to remember what social media logo is currently being displayed.
let currentSocialmedia = 0

// Start the entire process here
displayQuotesPanel()
displayinfoPanel()
displayFeaturedTechnologyPanel()
displayFeaturedTechnologyPanel2()
displaySocialMediaPanel()

// Create a new timer using setInterval and assign it to the variable 'quotesTimer'. Have the timer fire off every 10 seconds
const quotesTimer = setInterval(displayQuotesPanel, 5000)

// Create a new timer using setInterval and assign it to the variable 'featuredTechnologyTimer'. Have the timer fire off every 20 seconds
const featuredTechnologyTimer = setInterval(displayFeaturedTechnologyPanel, 10000)

// Create a new timer using setInterval and assign it to the variable 'featuredTechnologyTimer2'. Have the timer fire off every 15 seconds
const featuredTechnologyTimer2 = setInterval(displayFeaturedTechnologyPanel2, 7500)

// Create a new timer using setInterval and assign it to the variable 'infoTimer'. Have the timer fire off every 5 seconds
const infoTimer = setInterval(displayinfoPanel, 2500)

// Create a new timer using setInterval and assign it to the variable 'socialMediaTimer'. Have the timer fire off every 5 seconds
const socialMediaTimer = setInterval(displaySocialMediaPanel, 2500)

// Get a handle to the logo element with the ID of 'theLogo'
const theLogo = document.querySelector('#theLogo')

// Bind an event listener to the click event of 'theLogo'
theLogo.addEventListener('click', function () {
    stopIntervals(quotesTimer, featuredTechnologyTimer, featuredTechnologyTimer2, infoTimer, socialMediaTimer);
})

