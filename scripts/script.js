var querySel = (className) => document.querySelector(className)
var createEl = (el) => document.createElement(el)

var filmList = querySel('.films-list')

for (var film of films) {


  var newLi = createEl('LI')
  var filmImg = createEl('IMG')
  var filmName = createEl('H3')
  var filmDescription = createEl('P')
  var filmGenres1 = createEl('A')
  var filmGenres2 = createEl('A')
  var filmGenres3 = createEl('A')
  var genresBox = createEl('DIV')

  newLi.className = 'films-list__item film'
  filmImg.src = film.poster
  filmImg.className = 'film__img'
  filmName.textContent = film.title
  filmName.className = 'film__name'
  genresBox.className = 'genres-box'
  // filmDescription.textContent = film.overview
  // filmDescription.className= 'film__description'
  filmGenres1.textContent = film.genres[0]
  filmGenres1.className = 'film__genres film__genres--action'
  filmGenres2.textContent = film.genres[1]
  filmGenres2.className = 'film__genres film__genres--horror'
  filmGenres3.textContent = film.genres[3]
  filmGenres3.className = 'film__genres film__genres--anime'


  newLi.appendChild(filmImg)
  newLi.appendChild(filmName)
  // newLi.appendChild(filmDescription)
  genresBox.appendChild(filmGenres1)
  genresBox.appendChild(filmGenres2)
  genresBox.appendChild(filmGenres3)
  newLi.appendChild(genresBox)

  filmList.appendChild(newLi)
}

