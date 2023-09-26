/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Giordan Zeina
 * Created on: Sep 2023
 * This program shows the temperature of the microbit in Kelvin
*/

// Variables
let temperature : number
let temperatureKelvin : number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {
  //input
  temperature = input.temperature()

  //Process
  temperatureKelvin = (temperatureKelvin + 273.15)
  temperatureKelvin = Math.round(temperatureKelvin)

 // output
  basic.showString('The temperature is ' + temperatureKelvin.toString() + 'K,')
})
