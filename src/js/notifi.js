import swal from 'sweetalert'

export function onError() {
  swal({
    title: `I can't find`,
    text: 'Nothing is found',
    button: false,
    className: 'error',
    timer: 2000,
  })
}

export function onWarning() {
  swal({
    title: 'Many Found',
    text: 'Too many matches found. Please enter a more specific query',
    button: false,
    timer: 3000,
  })
}
