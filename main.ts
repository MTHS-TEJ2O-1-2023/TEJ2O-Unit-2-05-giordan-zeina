/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Giordan Zeina
 * Created on: Sep 2023
 * This program shows the temperature of the microbit in Kelvin
*/

// Variables
let temperature: number = input.temperature()
let temperatureKelvin: number = (temperature + 273.15)

// Clean up
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  // Process
  temperature = (temperatureKelvin + 273.15)
  temperatureKelvin = Math.round(temperatureKelvin)

  // Output
  basic.showString('The temperature is ' + temperatureKelvin.toString() + 'K')
})
