/* script.js */
function getArticleList(data, articleType) {
    console.log(data)
    // Check to see if the OpenWeather API returned an error
    if (data.cod == '404' || data.cod == '401' || articleType.trim() == '') {
        // show the initially hidden div
        articleContent.style.display = 'block'
        articleContent.innerHTML = 'Please enter a valid Zip Code'
        return // exit
    }

    const cards = document.querySelector('#articles')
    cards.innerHTML = '' // clear out prior articles
    data.results.forEach((card) => {
        cards.append(createCard(card))
    })

}

function createCard(card) {
    let div = document.createElement('div')
    div.classList.add('card')
    div.classList.add('shadow')

    let image = document.createElement('img')
    image.setAttribute('src', card.multimedia[0].url)
    image.setAttribute('alt', card.multimedia[0].subtype)
    image.classList.add('card-img-top')
    div.appendChild(image)

    let innerDiv = document.createElement('div')
    innerDiv.classList.add('card-body')
    div.appendChild(innerDiv)

    let a = document.createElement('a')
    a.setAttribute('href', card.url)
    a.innerText = card.title

    let h5 = document.createElement('h5')
    h5.appendChild(a)
    innerDiv.appendChild(h5)

    let p = document.createElement('p')
    p.classList.add('card-text')
    p.innerText = card.abstract
    innerDiv.appendChild(p)

    let p2 = document.createElement('p')
    let nytDate = card.published_date
    let formattedDate = new Date(nytDate.substring(0, 10))
    formattedDate = formattedDate.toLocaleDateString('en-us')
    p2.classList.add('card-text')
    p2.innerText = formattedDate
    innerDiv.appendChild(p2)

    return div
}

// Declare Variables
const articleContent = document.querySelector('#getArticles')
const api_key = 'imNlqZk4Hb0NhPKCLyTyMQg2USVbQyWb'

document.querySelector('#getArticles').addEventListener('click', function () {
    let articleSelect = document.getElementById('article-select')
    let articleType = articleSelect.value
    let url = `https://api.nytimes.com/svc/topstories/v2/${articleType}.json?api-key=${api_key}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Call getArticles function
            getArticleList(data, articleType)
        }).catch((e) => {
            console.log(`This error occurred: ${e}`)
        })
})
