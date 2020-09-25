input.onGesture(Gesture.Shake, function () {
    keyboard.key("w", KeyboardKeyEvent.Press)
})
forever(function () {
    if (input.buttonA.isPressed()) {
        keyboard.key("a", KeyboardKeyEvent.Down)
        pause(100)
        light.showRing(
        `red red red red red white white white white white`
        )
    }
    if (input.buttonB.isPressed()) {
        keyboard.key("d", KeyboardKeyEvent.Down)
        pause(100)
        light.showRing(
        `white white white white white red red red red red`
        )
    }
    if (!(input.buttonA.isPressed())) {
        keyboard.key("a", KeyboardKeyEvent.Up)
        pause(100)
        light.showRing(
        `green green green green green white white white white white`
        )
    }
    if (!(input.buttonB.isPressed())) {
        keyboard.key("d", KeyboardKeyEvent.Up)
        pause(100)
        light.showRing(
        `white white white white white green green green green green`
        )
    }
})
