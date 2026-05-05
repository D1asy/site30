function mult() {
    let num1 = document.getElementById("first_num").value;
    let num2 = document.getElementById("second_num").value;
    
    if (num1 !== "" && num2 !== "") {
        document.getElementById("result").innerHTML = "Результат: " + (num1 * num2);
    } else {
        document.getElementById("result").innerHTML = "Будь ласка, введіть обидва числа";
    }
}
