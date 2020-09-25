input.buttonA.onEvent(ButtonEvent.Down, function () {
    pause(100)
    keyboard.key("a", KeyboardKeyEvent.Down)
})
input.buttonB.onEvent(ButtonEvent.Down, function () {
    pause(100)
    keyboard.key("d", KeyboardKeyEvent.Down)
})
input.buttonA.onEvent(ButtonEvent.Up, function () {
    pause(100)
    keyboard.key("a", KeyboardKeyEvent.Up)
})
input.onGesture(Gesture.Shake, function () {
    keyboard.key("w", KeyboardKeyEvent.Press)
    music.pewPew.play()
    pause(100)
    keyboard.key("w", KeyboardKeyEvent.Up)
})
input.buttonB.onEvent(ButtonEvent.Up, function () {
    pause(100)
    keyboard.key("d", KeyboardKeyEvent.Up)
})
