let geheugen = 0
input.onButtonPressed(Button.A, function () {
    geheugen = geheugen
    geheugen += 0 + 1
    basic.showNumber(geheugen)
})
input.onButtonPressed(Button.B, function () {
    geheugen = geheugen
    geheugen = 0 - 1
    basic.showNumber(geheugen)
})
basic.forever(function () {
	
})
