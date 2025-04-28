function operar(operacion) {
    var n1 = parseFloat(document.getElementById('num1').value);
    var n2 = parseFloat(document.getElementById('num2').value);
    var res = 0;

    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor ingrese números válidos");
        return;
    }

    switch (operacion) {
        case '+':
            res = n1 + n2;
            break;
        case '-':
            res = n1 - n2;
            break;
        case '*':
            res = n1 * n2;
            break;
        case '/':
            if (n2 === 0) {
                alert("No se puede dividir entre cero");
                return;
            }
            res = n1 / n2;
            break;
    }
    document.getElementById('resultado').value = res;
}