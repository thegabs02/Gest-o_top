const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/salvar', (req, res) =>{
    const nome_serv = req.body.nome_serv
    const total_serv = req.body.total_serv
    const total_tamanho = req.body.total_tamanho
    fs.appendFile('nome.txt', `Segue orçamento:\n ${nome_serv}, Tamanho em: ${total_tamanho}, No valor de: ${total_serv}\n já inclusos mão de obra e outros componentes, tais como calhas e rufos\n`, (err) =>{
        if(err){
            return res.status(500).json({mensagem: "falha ao abrir servidor"})
        }

        return res.status(200).json({ mensagem: "Nome salvo com sucesso!" });
    })
    console.log("novo nome adicionado");
});
app.listen(3000)