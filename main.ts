let a = 0
let t = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(a, 0)
        basic.pause(1000)
        a += 1
    }
    if (a > 4) {
        a = 0
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(0, t)
        basic.pause(1000)
        t += 1
    }
    if (t > 4) {
        t = 0
    }
})
