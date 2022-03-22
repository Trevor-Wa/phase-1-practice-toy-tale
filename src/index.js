let addToyPic = false

document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('new-toy-btn')
  const formToyContainer = document.querySelector('.container')

  addBtn.addEventListener('click', () => {
    addToyPic = !addToyPic

    if (addToyPic) {
      formToyContainer.style.display = "block"
    }

    else {
      formToyContainer.style.display = "none"
    }
  })

  formToyContainer.addEventListener('submit', e => {
    e.preventDefault()
    postToyData(e.target.name.value, e.target.image.value)
  })
})
  toyData()

  function toyData() {
    fetch('http://localhost:3000/toys')
      .then(res => res.json())
      .then((data) => {
        data.map(t => toyImage(t))
        
      })
  }

  function toyImage(toy) {
    let toyCard = `<div class="card">
  <h2>${toy.name}</h2>
  <img src=${toy.image} class="toy-avatar" />
  <p>${toy.likes}</p>
  <button class="like-btn" id="[toy_id]">Like ❤️</button>
</div>`

    let collection = document.getElementById('toy-collection')
    collection.innerHTML += toyCard

  }

  function postToyData() {
    fetch('http://localhost:3000/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept : "application/json"
      },
      body: JSON.stringify({
        'name': name,
        'image': URL,
        'likes': 0
      })
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        return toyImage(data)

      })
  }