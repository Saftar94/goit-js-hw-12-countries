export function fetchCountry(countryName) {
  return fetch(`https://restcountries.com/v2/name/${countryName}`)
    .then((response) => {
      if (response.status !== 404) {
        return response.json()
      }
    })
    .catch((error) => alert(error))
}
