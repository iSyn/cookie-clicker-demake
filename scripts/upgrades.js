$(() => {
  console.log('upgrades.js is linked')

  let currentAmount = 0

  const $cookie = $('.cookie')

  const updateCookies = () => {
    $('.current-amount').text(currentAmount)
  }

  $cookie.click(() => {
    currentAmount += 1
    updateCookies()
  })


})
