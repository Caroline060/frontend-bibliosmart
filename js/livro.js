async function enviaFormulario() {
    // recuperar as informações do formulário e colocar em objeto JSON
    const livroDTO = {
        "título": document.querySelectorAll("input")[0].value,
        "autor": document.querySelectorAll("input")[1].value,
        "editora": document.querySelectorAll("input")[2].value,
        "publicação": Date(document.querySelectorAll("input")[3].value),
        "ISBN": document.querySelectorAll("input")[4].value,
        "quantidade": Number(document.querySelectorAll("input")[5].value)
    }

    try {
        const respostaServidor = await fetch("http://localhost:3333/novo/livro", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(livroDTO)
        });
    
        if(!respostaServidor.ok) {
            throw new Error("Erro ao enviar os dados para o servidor. Entre em contato com o administrador do sistema.");
        }
    
        alert("Livro cadastrado com sucesso!");
    } catch (error) {
        console.log(error);
        alert(`Erro ao se comunicar com o servidor. ${error}`);
    }
}