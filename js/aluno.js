async function enviarFormulario() {
    // recuperar as informações do formulário e colocar em objeto JSON
    const alunoDTO = {
        "nome": document.querySelectorAll("input")[0].value,
        "ra": document.querySelectorAll("input")[1].value,
        "dataNascimento": document.querySelectorAll("input")[2].value,
        "endereco": document.querySelectorAll("input")[3].value,
        "email": document.querySelectorAll("input")[4].value,
        "telefone": document.querySelectorAll("input")[5].value
    }

    try {
        const respostaServidor = await fetch("http://localhost:3333/novo/aluno", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },  
            body: JSON.stringify(alunoDTO)
        });
    
        if(!respostaServidor.ok) {
            throw new Error("Erro ao enviar os dados para o servidor. Entre em contato com o administrador do sistema.");
        }
    
        alert("Aluno cadastrado com sucesso!");
    } catch (error) {
        console.log(error);
        alert(`Erro ao se comunicar com o servidor. ${error}`);
    }

    /*if(alert="Aluno cadastrado com sucesso!"){
        const tabelaBody = document.querySelector('table tbody'); // Seleciona o corpo da tabela
    
        const novaLinha = document.createElement('tr'); // Cria uma nova linha
        
        novaLinha.innerHTML = `
            <td>${id}</td>
            <td>${ra}</td>
            <td>${nome}</td>
            <td>${email}</td>
            <td>${celular}</td>
            <td>${dataNascimento}</td>
            <td>
            <button><img src="assets/icons/pencil-square.svg" alt="editar"></button>
            <button><img src="assets/icons/trash-fill.svg" alt="excluir"></button>
            </td>
        `;
        
        tabelaBody.appendChild(novaLinha); // Adiciona a nova linha à tabela
    }*/
 }