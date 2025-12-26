console.log("Starting 'script.js'")

let RedOptions = [
    "Go back a space.",
    "Go back two spaces.",
    "Go back three spaces.",
    "Go forward a space.",
    "Go forward two spaces.",
    "Go forward three spaces.",
    "Go up one column.",
    "Go down one column.",
    "Do nothing :D",
]

let GreenOptions = [
    "Skip your next turn.",
    "Choose someone to skip their next turn",
    "Go to the nearest snake. (any position on snake)",
    "Go to the nearest ladder (any position on ladder)",
    "Do nothing :D",
]

let BlueOptions = [
    "Jump 20 times before your next turn.",
    "Meow :3 (say that 10 times before your next turn)",
    "Everyone must chase you (run away for 20 seconds). If you get caught, click blue again.",
    "Pretend to eat spaghetti with your hands 😈😈😈",
    "Pretend to be trapped in an invisible box.",
    "Mime a deep sea diver running out of air.",
    "Do nothing :D",
]

function PickRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function onRedButtonPress() {
    let Array = RedOptions
    let ArrayLength = Array.length

    let RandomNumber = PickRandomNumber(0, ArrayLength - 1)

    console.log("RandomNumber:", RandomNumber)

    let PickedValue = Array[RandomNumber]

    console.log(PickedValue)

    let Display = document.getElementById("Display")

    Display.innerHTML = PickedValue
    Display.setAttribute("aria-pressed", "true")
    setTimeout(function () {
        Display.setAttribute("aria-pressed", "false")
    }, 4000)
}

function onGreenButtonPress() {
    let Array = GreenOptions
    let ArrayLength = Array.length

    let RandomNumber = PickRandomNumber(0, ArrayLength - 1)

    console.log("RandomNumber:", RandomNumber)

    let PickedValue = Array[RandomNumber]

    console.log(PickedValue)

    let Display = document.getElementById("Display")

    Display.innerHTML = PickedValue
    Display.setAttribute("aria-pressed", "true")
    setTimeout(function () {
        Display.setAttribute("aria-pressed", "false")
    }, 4000)
}

function onBlueButtonPress() {
    let Array = BlueOptions
    let ArrayLength = Array.length

    let RandomNumber = PickRandomNumber(0, ArrayLength - 1)

    console.log("RandomNumber:", RandomNumber)

    let PickedValue = Array[RandomNumber]

    console.log(PickedValue)

    let Display = document.getElementById("Display")

    Display.innerHTML = PickedValue
    Display.setAttribute("aria-pressed", "true")
    setTimeout(function () {
        Display.setAttribute("aria-pressed", "false")
    }, 4000)
}

const ButtonRed = document.getElementById('ButtonRed')
const ButtonGreen = document.getElementById('ButtonGreen')
const ButtonBlue = document.getElementById('ButtonBlue')

ButtonRed.addEventListener('click', () => {
    let Button = ButtonRed
    onRedButtonPress()

    Button.setAttribute("aria-pressed", "true")
    setTimeout(function () {
        Button.setAttribute("aria-pressed", "false")
    }, 4100)
})

ButtonGreen.addEventListener('click', () => {
    let Button = ButtonGreen
    onGreenButtonPress()

    Button.setAttribute("aria-pressed", "true")
    setTimeout(function () {
        Button.setAttribute("aria-pressed", "false")
    }, 4100)
})

ButtonBlue.addEventListener('click', () => {
    let Button = ButtonBlue
    onBlueButtonPress()

    Button.setAttribute("aria-pressed", "true")
    setTimeout(function () {
        Button.setAttribute("aria-pressed", "false")
    }, 4100)
})