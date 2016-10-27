$(() => {
  console.log('upgrades.js is linked')

  let currentAmount = 0
  let cookiesPerClick = 1
  const $cookie = $('.cookie')

  let upgradeOneLocked = true;
  let upgradeTwoLocked = true;
  let upgradeThreeLocked = true;
  let upgradeFourLocked = true;
  let upgradeFiveLocked = true;
  let upgradeSixLocked = true;

  const updateUpgradeButtons = () => {
    console.log('updateUpgradeButtons firing')
    if (upgradeOneLocked === true) {
      if (currentAmount >= 10) {
        upgradeOneLocked = false
        $('.upgrade1-name').text('Cursor')

      }
    } else if (upgradeTwoLocked === true) {
      if (currentAmount >= 100) {
        upgradeTwoLocked = false
        $('.upgrade2-name').text('Grandma')
      }
    } else if (upgradeThreeLocked === true) {
      if (currentAmount >= 1000) {
        upgradeThreeLocked = false
        $('.upgrade3-name').text('Farm')
      }
    }
  }

  const updateCookies = () => {
    $('.current-amount').text(currentAmount)
  }

  $cookie.click(() => {
    currentAmount += 1
    updateCookies()
    updateUpgradeButtons()
  })


})
