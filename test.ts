// tests go here; this will not be compiled when this package is used as an extension.
basic.showIcon(IconNames.Heart)

basic.forever(function() {
    PCAservo.Servo(PCAservo.Servos.S1, 90)
    basic.pause(1000)
    PCAservo.GeekServo(PCAservo.Servos.S1, 600)
    basic.pause(1000)
})