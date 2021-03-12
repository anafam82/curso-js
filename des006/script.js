function converter (){

    var tempC = window.prompt("<p>Digite uma temperatura em °C (Celsius).</p>")
    var celsius = Number(tempC)
    var res = window.document.getElementById('resultado')
    res.innerHTML = `<p><strong>A temperatura de ${celsius}°C, corresponde a...</strong></p>
    <p>${celsius + 273.15}°K (Kelvin)</p>
    <p>${(celsius*9/5)+32}°F (Fahrenheit)</p>`

}