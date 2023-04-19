let n1 = 0
let n2 = 0
let n3 = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        n1 += 0
        basic.showNumber(n1 + 1)
        for (let index = 0; index < 20; index++) {
            n2 += 1
            basic.showNumber(n2 + 1)
        }
    } else if (input.buttonIsPressed(Button.B)) {
        n1 += 0
        basic.showNumber(n1 - 1)
        for (let index = 0; index < 20; index++) {
            n3 += -1
            basic.showNumber(n3 - 1)
        }
    }
})
