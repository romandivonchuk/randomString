const { interval } = rxjs



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function randomString() {
    const str = "abcdefghijklmnopqrstuvwxyz1234567890"
    let arr = []
    for (let index = 0; index < 5; index++) {
        let rndnum = getRndInteger(0, str.length)
        arr.push(str[rndnum]) 
    }
    return arr.join("")
}


let testArr = ["12345", "asdsa", "asd0s", "plpsf", "12sv3", "09234", "12321", "qwewq", "89098","78987"]

let randomStringArr = []


const input = document.querySelector("p") 

document.querySelector("button").addEventListener('click', () => {

    interval(1000).subscribe((x) => {

        randomStringArr.push(randomString())

        let str = randomStringArr[x]

        if (str.match(/[0]/)) {
            input.textContent = ''
        } else {
            input.textContent = `${str}`
            if (str === str.split("").reverse().join("")) {
                input.style.color = 'red';
            } else if (str.match(/^\d+$/)) {
                input.style.color = 'blue';
            } else {
                input.style.color = 'black'
            }
        }
    
    })
})
