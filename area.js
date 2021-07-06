function cadAluno(nome, nota, status) {
    alunos = document.getElementById("tbAluno");
    var qtdlLinhas = alunos.rows.length;
    var linha = alunos.insertRow(qtdlLinhas);

    var cellId = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellNota = linha.insertCell(2);
    var cellStatus = linha.insertCell(3);

    cellId.innerHTML = qtdlLinhas;
    cellNome.innerHTML = nome;
    cellNota.innerHTML = nota;
    cellStatus.innerHTML = status;

    preencheCamposForm();

}

function preencheCamposForm() {

    for (var i = 0; i < alunos.rows.length; i++) {
        alunos.rows[i].onclick = function () {
            index = this.rowIndex;
            document.getElementById("Id").value = alunos.rows[index].cells[0].innerText;
            document.getElementById("txtNome").value = alunos.rows[index].cells[1].innerText;
            document.getElementById("txtNota").value = alunos.rows[index].cells[2].innerText;
            document.getElementById("status").value = alunos.rows[index].cells[3].innerText;
        }
    }
}

function delRegistro() {

    for (var i = 0; i < alunos.rows.length; i++) {
        if (index == i) {
            alunos.deleteRow(index);
            return;
        }
    }
}
