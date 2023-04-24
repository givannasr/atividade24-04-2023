var area = document.getElementById("area");
function entrar() {
    var nome = prompt("Digite seu nome:");
    if (nome == "" || nome == null) {
        alert("Por favor preencher todos os campos!");
        area.innerHTML = "Clique no botão para acessar...";
    } else {
        area.innerHTML = "Bem-vindo " + nome
    }
}
function subtrair() {

    var arrayA = new Array(20)
    arrayA[0] = parseInt(document.getElementById("num01").value);
    arrayA[1] = parseInt(document.getElementById("num02").value);
    arrayA[2] = parseInt(document.getElementById("num03").value);
    arrayA[3] = parseInt(document.getElementById("num04").value);
    arrayA[4] = parseInt(document.getElementById("num05").value);
    arrayA[5] = parseInt(document.getElementById("num06").value);
    arrayA[6] = parseInt(document.getElementById("num07").value);
    arrayA[7] = parseInt(document.getElementById("num08").value);
    arrayA[8] = parseInt(document.getElementById("num09").value);
    arrayA[9] = parseInt(document.getElementById("num10").value);
    arrayA[10] = parseInt(document.getElementById("num11").value);
    arrayA[11] = parseInt(document.getElementById("num12").value);
    arrayA[12] = parseInt(document.getElementById("num13").value);
    arrayA[13] = parseInt(document.getElementById("num14").value);
    arrayA[14] = parseInt(document.getElementById("num15").value);
    arrayA[15] = parseInt(document.getElementById("num16").value);
    arrayA[16] = parseInt(document.getElementById("num17").value);
    arrayA[17] = parseInt(document.getElementById("num18").value);
    arrayA[18] = parseInt(document.getElementById("num19").value);
    arrayA[19] = parseInt(document.getElementById("num20").value);

    var arrayB = new Array(20)
    arrayB[0] = parseInt(document.getElementById("num21").value);
    arrayB[1] = parseInt(document.getElementById("num22").value);
    arrayB[2] = parseInt(document.getElementById("num23").value);
    arrayB[3] = parseInt(document.getElementById("num24").value);
    arrayB[4] = parseInt(document.getElementById("num25").value);
    arrayB[5] = parseInt(document.getElementById("num26").value);
    arrayB[6] = parseInt(document.getElementById("num27").value);
    arrayB[7] = parseInt(document.getElementById("num28").value);
    arrayB[8] = parseInt(document.getElementById("num29").value);
    arrayB[9] = parseInt(document.getElementById("num30").value);
    arrayB[10] = parseInt(document.getElementById("num31").value);
    arrayB[11] = parseInt(document.getElementById("num32").value);
    arrayB[12] = parseInt(document.getElementById("num33").value);
    arrayB[13] = parseInt(document.getElementById("num34").value);
    arrayB[14] = parseInt(document.getElementById("num35").value);
    arrayB[15] = parseInt(document.getElementById("num36").value);
    arrayB[16] = parseInt(document.getElementById("num37").value);
    arrayB[17] = parseInt(document.getElementById("num38").value);
    arrayB[18] = parseInt(document.getElementById("num39").value);
    arrayB[19] = parseInt(document.getElementById("num40").value);


    var arrayC = new Array(20)
    arrayC[0] = arrayA[0] - arrayB[0];
    document.getElementById("resultado01").value = arrayC[0];
    arrayC[1] = arrayA[1] - arrayB[1];
    document.getElementById("resultado02").value = arrayC[1];
    arrayC[2] = arrayA[2] - arrayB[2];
    document.getElementById("resultado03").value = arrayC[2];
    arrayC[3] = arrayA[3] - arrayB[3];
    document.getElementById("resultado04").value = arrayC[3];
    arrayC[4] = arrayA[4] - arrayB[4];
    document.getElementById("resultado05").value = arrayC[4];
    arrayC[5] = arrayA[5] - arrayB[5];
    document.getElementById("resultado06").value = arrayC[5];
    arrayC[6] = arrayA[6] - arrayB[6];
    document.getElementById("resultado07").value = arrayC[6];
    arrayC[7] = arrayA[7] - arrayB[7];
    document.getElementById("resultado08").value = arrayC[7];
    arrayC[8] = arrayA[8] - arrayB[8];
    document.getElementById("resultado09").value = arrayC[8];
    arrayC[9] = arrayA[9] - arrayB[9];
    document.getElementById("resultado10").value = arrayC[9];
    arrayC[10] = arrayA[10] - arrayB[10];
    document.getElementById("resultado11").value = arrayC[10];
    arrayC[11] = arrayA[11] - arrayB[11];
    document.getElementById("resultado12").value = arrayC[11];
    arrayC[12] = arrayA[12] - arrayB[12];
    document.getElementById("resultado13").value = arrayC[12];
    arrayC[13] = arrayA[13] - arrayB[13];
    document.getElementById("resultado14").value = arrayC[13];
    arrayC[14] = arrayA[14] - arrayB[14];
    document.getElementById("resultado15").value = arrayC[14];
    arrayC[15] = arrayA[15] - arrayB[15];
    document.getElementById("resultado16").value = arrayC[15];
    arrayC[16] = arrayA[16] - arrayB[16];
    document.getElementById("resultado17").value = arrayC[16];
    arrayC[17] = arrayA[17] - arrayB[17];
    document.getElementById("resultado18").value = arrayC[17];
    arrayC[18] = arrayA[18] - arrayB[18];
    document.getElementById("resultado19").value = arrayC[18];
    arrayC[19] = arrayA[19] - arrayB[19];
    document.getElementById("resultado20").value = arrayC[19];
}