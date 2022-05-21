function Enviar(){

    let cep = document.getElementById("cep").value;
    let rua = document.getElementById("rua").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;
    let uf = document.getElementById("uf").value;
    let ibge = document.getElementById("ibge").value;

    
    
    let blob = new Blob ([cep, rua, bairro, cidade, uf, ibge],
        {type: "text/plain;charset=utf-8"});


        saveAs (blob, cep, rua, bairro, cidade, uf, ibge + ".txt");

}