input.buttonA.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.Up)
    music.pewPew.play()
    pause(200)
})
forever(function () {
    makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
})
