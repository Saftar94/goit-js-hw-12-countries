import { debounce } from 'lodash'
import countryCardTpl from '../templates/country-cards.hbs'
import countroneCardTpl from '../templates/one-country.hbs'
import refs from '../js/refs'
import { onWarning, onError } from '../js/notifi'
import { fetchCountry } from '../js/fetchcountry'

refs.serchCountry.addEventListener('input', debounce(onSerch, 500))

function onSerch(event) {
  const filter = event.target.value.toLowerCase()
  if (filter === '') {
    return (refs.countryList.innerHTML = '')
  }
  refs.countryList.innerHTML = ''

  fetchCountry(filter).then((country) => {
    if (country.length > 10) {
      return onWarning()
    } else if (country.length > 2 && country.length < 10) {
      createListCountry(countroneCardTpl, country)
    } else if (country.length === 1) {
      createListCountry(countryCardTpl, country)
    } else if (country.status === 404) {
      return onError()
    }
  })
}

function createListCountry(template, data) {
  refs.countryList.insertAdjacentHTML('beforeend', template(data))
}
