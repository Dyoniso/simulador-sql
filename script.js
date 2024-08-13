document.getElementById('btn-executar').addEventListener('click', () => {
    const sqlinput = document.getElementById('sqlinput').value;
    const resultDiv = document.getElementById('result')

    if (sqlinput.toLocaleLowerCase().includes('select')) {
        resultDiv.innerHTML = '<p>Resultado da consulta: exemplo de dados retornados. </p>'
    }

    else if (sqlinput.toLocaleLowerCase().includes('insert')) {
        resultDiv.innerHTML = '<p>Dados inseridos com sucesso!</p>'
    }

    else if (sqlinput.toLocaleLowerCase().includes('update')) {
        resultDiv.innerHTML = '<p>Dados atualizados com sucesso!</p>'
    }

    else if (sqlinput.toLocaleLowerCase().includes('delete')) {
        resultDiv.innerHTML = '<p>Dados deletados com sucesso! </p>'
    }

    else {
        resultDiv.innerHTML = '<p>SQL Não suportado </p>'
    }
})