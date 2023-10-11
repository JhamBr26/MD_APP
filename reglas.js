function evaluarResultado(test, parental, lunch, gender) {
    if (lunch === "standard") {
      return "PASS";
    } else if (test === "completed" && parental === "some college" && lunch === "free/reduced") {
      return "PASS";
    } else if ( gender === "female" && test === "none" && parental === "some college" && lunch === "free/reduced") {
      return "FAIL";
    } else if ( gender === "male" && test === "none" && parental === "some college" && lunch === "free/reduced") {
      return "PASS";
    } else if (parental === "associate's degree" && lunch === "free/reduced") {
      return "PASS";
    } else if (parental === "some high school" && lunch === "free/reduced") {
      return "FAIL";
    } else if (test === "completed" && parental === "bachelor's degree" && lunch === "free/reduced") {
      return "FAIL";
    } else if (test === "none" && parental === "bachelor's degree" && lunch === "free/reduced") {
      return "PASS";
    } else if (parental === "master's degree" && lunch === "free/reduced") {
      return "PASS";
    } else if (test === "completed" && parental === "high school" && lunch === "free/reduced") {
      return "PASS";
    } else if (test === "none" && parental === "high school" && lunch === "free/reduced"  ) {
      return "FAIL";
    } else { 
      return "Resultado indefinido";
    }
}
  
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario
        
    const testSelect = document.getElementById("testSelect").value;
    const parentalEducationSelect = document.getElementById("parentalEducationSelect").value;
    const lunchSelect = document.getElementById("lunchSelect").value;
    const genderSelect = document.getElementById("genderSelect").value;

    console.log("Gender: " + genderSelect);
    console.log("Education: " + parentalEducationSelect);
    console.log("Lunch: " + lunchSelect);
    console.log("Test Preparation Course: " + testSelect);

    const resultado = evaluarResultado(testSelect,parentalEducationSelect,lunchSelect,genderSelect);
    console.log(resultado);  

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "<p> !Your probable outcome: " + resultado + "¡</p>";   
});
  

 