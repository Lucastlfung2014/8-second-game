let start = 0
let elapsed = 0
let set_score = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    elapsed = input.runningTime() - start
    set_score = (elapsed - 8000) / 1000
    basic.pause(500)
    basic.showNumber(set_score)
})
