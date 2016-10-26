$(() => {

  const $cookieAmountText = $('.cookie-amount')
  const $cookie = $('.cookie')
  const $morePerClickUpgrade = $('.more-per-click')
  const $morePerClickPrice = $('.more-per-click-price')
  const $amountPerClick = $('.amount-per-click')
  const $slowClickerPrice = $('.slow-clicker-price')
  const $slowClickerUpgrade = $('.slow-clicker')
  const $cookiesPerSecond = $('.cookies-per-second')
  let morePerClickPrice = 30
  let amountOfCookies = 0
  let amountPerClick = 1
  let slowClickPrice = 5
  let cookiesPerSec = 0


  const updateAmount = (() => {
    console.log('update firing')
    $cookieAmountText.text(amountOfCookies)
  })

  $cookie.click(() => {
    amountOfCookies += amountPerClick
    $cookieAmountText.text(amountOfCookies)
    animateCookie()
  })

  const animateCookie = (() => {
    console.log('firing')
    $cookie.css('transform', 'scale(1.01)')
    setTimeout(() => {
      $cookie.css('transform', 'scale(1.00)')
    },50)
  })


  $morePerClickUpgrade.click(() => {
    if (amountOfCookies >= morePerClickPrice) {
      amountOfCookies -= morePerClickPrice
      updateAmount()
      amountPerClick += 1
      morePerClickPrice = Math.floor(morePerClickPrice *= 1.3)
      $morePerClickPrice.text(morePerClickPrice)
      $amountPerClick.text(amountPerClick)
    }
  })

  const cookiesPerSecond = (() => {
    setInterval(() => {
      amountOfCookies += (Math.floor(cookiesPerSec) * 5)
      updateAmount()
    },1000)
  })

  $slowClickerUpgrade.click(() => {
    if (amountOfCookies >= slowClickPrice) {
      amountOfCookies -= slowClickPrice
      updateAmount()
      cookiesPerSec += 0.2
      $cookiesPerSecond.text(cookiesPerSec)

    }
  })


})
