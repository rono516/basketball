let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function addHomeByOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
    checkLeading()
}

function addHomeByTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    checkLeading()
}

function addHomeByThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
    checkLeading()
}
function addGuestByOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
    checkLeading()
}

function addGuestByTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
    checkLeading()
}

function addGuestByThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
    checkLeading()
}

let homeScoreLeadingEl = document.getElementById("home-leading")
let guestScoreLeadingEl = document.getElementById("guest-leading")

function checkLeading() {
    if (homeScore > guestScore) {

        homeScoreLeadingEl.innerText = "- Leading"
        guestScoreLeadingEl.innerText = ""

    } else if (guestScore > homeScore) {
        guestScoreLeadingEl.innerText = "- Leading"
        homeScoreLeadingEl = ""

    } else {
        homeScoreLeadingEl.innerText = "";
        guestScoreLeadingEl.innerText = "";
    }
}

function resetGame(){
    homeScore = 0
    guestScore=0
    guestScoreEl.textContent = guestScore
    homeScoreEl.textContent = homeScore
    location.reload()
}

