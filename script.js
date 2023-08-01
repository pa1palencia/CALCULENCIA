function sumar() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 + num2;
    document.getElementById("resultado1").textContent = `Resultado: ${resultado}`;
  }
  
  function restar() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 - num2;
    document.getElementById("resultado1").textContent = `Resultado: ${resultado}`;
  }
  
  function multiplicar() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 * num2;
    document.getElementById("resultado1").textContent = `Resultado: ${resultado}`;
  }
  
  function dividir() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 / num2;
    document.getElementById("resultado1").textContent = `Resultado: ${resultado}`;
  }
  
  // Potencia y raíz
  function calcularPotencia() {
    const base = parseFloat(document.getElementById("base").value);
    const exponente = parseFloat(document.getElementById("exponente").value);
    const resultado = Math.pow(base, exponente);
    document.getElementById("resultado2").textContent = `Resultado: ${resultado}`;
  }
  
  function calcularRaiz() {
    const base = parseFloat(document.getElementById("base").value);
    const resultado = Math.sqrt(base);
    document.getElementById("resultado2").textContent = `Resultado: ${resultado}`;
  }
  
  // Cálculo de áreas
  function calcularAreaCuadrado() {
    const lado = parseFloat(document.getElementById("ladoCuadrado").value);
    const resultado = lado * lado;
    document.getElementById("resultado3").textContent = `Área del Cuadrado: ${resultado}`;
  }
  
  function calcularAreaCirculo() {
    const radio = parseFloat(document.getElementById("radioCirculo").value);
    const resultado = Math.PI * radio * radio;
    document.getElementById("resultado3").textContent = `Área del Círculo: ${resultado}`;
  }
  
  // Conversiones de masa, volumen, longitud y densidad
  function convertirKgLibras() {
    const kilogramos = parseFloat(document.getElementById("kilogramos").value);
    const libras = kilogramos * 2.20462;
    document.getElementById("resultado4").textContent = `Libras: ${libras}`;
  }
  
  function convertirLitrosGalones() {
    const litros = parseFloat(document.getElementById("litros").value);
    const galones = litros * 0.264172;
    document.getElementById("resultado4").textContent = `Galones: ${galones}`;
  }
  
  function convertirMetrosPies() {
    const metros = parseFloat(document.getElementById("metros").value);
    const pies = metros * 3.28084;
    document.getElementById("resultado4").textContent = `Pies: ${pies}`;
  }
  
  function convertirDensidadKgLb() {
    const densidadKg = parseFloat(document.getElementById("densidadKg").value);
    const densidadLb = densidadKg * 0.06242796;
    document.getElementById("resultado4").textContent = `Densidad (lb/ft³): ${densidadLb}`;
  }
  
  // Unidades de Medida de Informática
  function convertirBytesKBMBGB() {
    const bytes = parseFloat(document.getElementById("bytes").value);
    const kilobytes = bytes / 1024;
    const megabytes = kilobytes / 1024;
    const gigabytes = megabytes / 1024;
    document.getElementById("resultado5").textContent = `KB: ${kilobytes}, MB: ${megabytes}, GB: ${gigabytes}`;
  }