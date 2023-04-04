/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let enteredNum = []
const numInput = document.getElementById('inputNum')
const convertBtn = document.getElementById('covertBtn')
const metresEl = document.getElementById('metres')
const litresEl = document.getElementById('litres')
const kilogramsEl = document.getElementById('kilograms')


convertBtn.addEventListener('click', function () {
    enteredNum.push(numInput.value)
    renderMetres()
    renderLitres()
    renderKilograms()
    enteredNum = []
})

function renderMetres() {
    let metre = ""
    metre += `<p id="metres"> ${enteredNum} metres = ${(enteredNum * 3.281).toFixed(3)} feet | ${enteredNum} feet = ${(enteredNum / 3.281).toFixed(3)} metres</p>`
    metresEl.innerHTML = metre
}
function renderLitres() {
    let litre = ""
    litre += `<p id="litres">${enteredNum} litres = ${(enteredNum * 0.264).toFixed(3)} gallons | ${enteredNum} gallons = ${(enteredNum / 0.264).toFixed(3)} litres</p>`
    litresEl.innerHTML = litre
}
function renderKilograms() {
    let kilogram = ""
    kilogram += `<p id="kilograms">${enteredNum} kilos = ${(enteredNum * 2.204).toFixed(3)} pounds | ${enteredNum} pounds = ${(enteredNum / 2.204).toFixed(3)} kilos</p>`
    kilogramsEl.innerHTML = kilogram
}

