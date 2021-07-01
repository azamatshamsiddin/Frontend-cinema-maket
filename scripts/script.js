var findEl = (className) => document.querySelector(className)
var createEl = (el) => document.createElement(el)


let searchForm = findEl('.search__form')
let searchInput = findEl('.search__input')
let filterForm = findEl('.filter__form')
let genreSelect = findEl('.filter__select')

var filmList = findEl('.films-list')


function createFilmBox(film) {
   var newLi = createEl('LI')
   var filmImg = createEl('IMG')
   var filmName = createEl('H3')
   // var filmDescription = createEl('P')
   var genresBox = createEl('UL')

   newLi.className = 'films-list__item film'
   filmImg.src = film.poster
   filmImg.className = 'film__img'
   filmName.textContent = film.title
   filmName.className = 'film__name'
   genresBox.className = 'genres-box'
   // filmDescription.textContent = film.overview
   // filmDescription.className= 'film__description'

   film.genres.forEach(genre => {

      var genresLi = createEl('LI')
      genresLi.className = 'film__genres film__genres--action'
      genresLi.textContent = genre
      genresBox.appendChild(genresLi)
   })

   // newLi.appendChild(filmDescription)
   newLi.appendChild(filmImg)
   newLi.appendChild(filmName)
   newLi.appendChild(genresBox)
   filmList.appendChild(newLi)
}


function showFilms(filmsArray) {
   filmsArray.forEach(film => {
      createFilmBox(film)
   })
}
showFilms(films)


function searchFilm(evt) {
   evt.preventDefault()
   filmList.innerHTML = ''

   let searchInputValue = searchInput.value
   let regExpValue = new RegExp(searchInputValue, 'gi')
   let findMovies = films.filter(cinema => cinema.title.match(regExpValue))

   showFilms(findMovies)
}
searchForm.addEventListener('submit', searchFilm)



function getGenres(films) {
   let genres = []
   films.forEach(film => {
      film.genres.forEach(genre => {

         if (!genres.includes(genre)) {
            let genreOption = createEl('OPTION')
            genreOption.className = 'filter__option'
            genreOption.textContent = genre
            genreOption.value = genre
            genreSelect.appendChild(genreOption)
            genres.push(genre)
         }
      })
   })
}
getGenres(films)

function filterFilms(evt) {
   evt.preventDefault()
   filmList.innerHTML = ''
   let selectValue = genreSelect.value

   let filterResult = films.filter(cinema => {
      if (cinema.genres.includes(selectValue)) {
         return cinema
      }
      if (selectValue === 'All') {
         return cinema
      }
   })
   showFilms(filterResult)
}

filterForm.addEventListener('change', filterFilms)
