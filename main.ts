basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 500) {
        basic.showLeds(`
            . # . # .
            . # . # .
            # . . . #
            # . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
