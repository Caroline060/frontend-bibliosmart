function adicionarAluno(id, ra, nome, email, celular, dataNascimento){
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
}