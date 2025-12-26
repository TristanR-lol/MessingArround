console.log("Starting 'script.js'")

let RedOptions = [
    "You cannot speak until your next turn.",
    "You must keep buzzing (like a bee) until your next turn.",
    "You must talk gibberish constantly until your next turn.",
    "Gasp dramatically after anyone moves until your next turn",
    "Scream when anyone is within 2 squares IN THE DIRECTION THEY ARE FACING of a snake",
    "Meow :3 (say that 10 times before your next turn)",
]

let GreenOptions = [
    "Jump until your next turn.",
    "Run around in circles until your next turn.",
    "Just spin on a spot until your next turn.",

]

let BlueOptions = [
    "Everyone must chase you (run away for 20 seconds).",
    "Pretend to eat spaghetti with your hands 😈😈😈",
    "Pretend to be trapped in an invisible box.",
    "Do nothing :D",
]

let YellowOptions = [
    "Narate the game in detail with a siri voice until your next turn.",
    "Rap until your next go with a siri voice.",
    "Sing about the weather in Schamgobaltch Land until your next turn in a siri voice."
]

let WhiteOptions = [
    "Free pass. (50% chance)",
    "FAIL! (50% chance)",
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

function onYellowButtonPress() {
    let Array = YellowOptions
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

function onWhiteButtonPress() {
    let Array = WhiteOptions
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
const ButtonWhite = document.getElementById('ButtonWhite')

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

ButtonYellow.addEventListener('click', () => {
    let Button = ButtonYellow
    onYellowButtonPress()

    Button.setAttribute("aria-pressed", "true")
    setTimeout(function () {
        Button.setAttribute("aria-pressed", "false")
    }, 4100)
})

ButtonWhite.addEventListener('click', () => {
    let Button = ButtonWhite
    onWhiteButtonPress()

    Button.setAttribute("aria-pressed", "true")
    setTimeout(function () {
        Button.setAttribute("aria-pressed", "false")
    }, 4100)
})