input.buttonA.onEvent(ButtonEvent.Down, function () {
    pause(50)
    makerController.player1.press(ArcadeButton.A)
})
input.buttonB.onEvent(ButtonEvent.Down, function () {
    pause(50)
    makerController.player1.press(ArcadeButton.B)
})
input.onGesture(Gesture.Shake, function () {
    makerController.player1.press(ArcadeButton.Up)
    music.pewPew.play()
    pause(200)
})
