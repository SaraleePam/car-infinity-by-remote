radio.onReceivedNumberDeprecated(function (receivedNumber) {
    basic.pause(2)
    radio2 = receivedNumber
})
let radio2 = 0
basic.showIcon(IconNames.Skull)
radio.setGroup(7)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.forever(function () {
	
})
basic.forever(function () {
    if (radio2 == 1) {
        RingbitCar.freestyle(43, 50)
        basic.pause(2000)
        RingbitCar.freestyle(100, 0)
        basic.pause(1000)
        RingbitCar.brake()
        
        
    } else if (radio2 == 2) {
        RingbitCar.freestyle(50, 43)
        basic.pause(2000)
        RingbitCar.freestyle(20, 0)
        basic.pause(1000)
        RingbitCar.brake()

    } else if (radio2 == 3) {
        RingbitCar.brake()
        basic.pause(5000)
    } else if (radio2 == 4) {
        RingbitCar.brake()
        basic.pause(5000)
    } else {
        radio2 = 0
    }
})
