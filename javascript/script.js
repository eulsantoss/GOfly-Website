const additionalFly = 799.90
const aditionalTaxi = 89.90
const aditionalAbode = 1110.90

function changeValue() {
    let select_1 = document.getElementById("select_id_1").value
    let select_2 = document.getElementById("select_id_2").value
    let select_3 = document.getElementById("select_id_3").value
    let select_4 = document.getElementById("select_id_4").value
    let select_5 = document.getElementById("select_id_5").value

    if (select_1 == 1){
        document.getElementById("value_price_1").innerHTML = "R$1099,00"
    } else if (select_1 == 2) {
        document.getElementById("value_price_1").innerHTML = "R$1699,00"
    } else if (select_1 == 0) {
        document.getElementById("value_price_1").innerHTML = "R$999,99"
    }

    if (select_2 == 1){
        document.getElementById("value_price_2").innerHTML = "R$1359,00"
    } else if (select_2 == 2) {
        document.getElementById("value_price_2").innerHTML = "R$1799,00"
    } else if (select_2 == 0) {
        document.getElementById("value_price_2").innerHTML = "R$1259,99"
    }

    if (select_3 == 1){
        document.getElementById("value_price_3").innerHTML = "R$1459,00"
    } else if (select_3 == 2) {
        document.getElementById("value_price_3").innerHTML = "R$1999,00"
    } else if (select_3 == 0) {
        document.getElementById("value_price_3").innerHTML = "R$1359,99"
    }

    if (select_4 == 1){
        document.getElementById("value_price_4").innerHTML = "R$1499,00"
    } else if (select_4 == 2) {
        document.getElementById("value_price_4").innerHTML = "R$2099,00"
    } else if (select_4 == 0) {
        document.getElementById("value_price_4").innerHTML = "R$1459,99"
    }

    if (select_5 == 1){
        document.getElementById("value_price_5").innerHTML = "R$1799,00"
    } else if (select_5 == 2) {
        document.getElementById("value_price_5").innerHTML = "R$2399,00"
    } else if (select_5 == 0) {
        document.getElementById("value_price_5").innerHTML = "R$1559,99"
    }

    
}
