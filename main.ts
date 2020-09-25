input.onGesture(Gesture.Shake, function () {
    keyboard.key("w", KeyboardKeyEvent.Press)
})
forever(function () {
    if (input.buttonA.isPressed()) {
        pause(100)
        light.showRing(
        `red red red red red white white white white white`
        )
        keyboard.key("a", KeyboardKeyEvent.Down)
    }
    if (input.buttonB.isPressed()) {
        pause(100)
        light.showRing(
        `white white white white white red red red red red`
        )
        keyboard.key("d", KeyboardKeyEvent.Down)
    }
    if (!(input.buttonA.isPressed())) {
        keyboard.key("a", KeyboardKeyEvent.Up)
        pause(100)
    }
    if (!(input.buttonB.isPressed())) {
        keyboard.key("d", KeyboardKeyEvent.Up)
        pause(100)
    }
})
