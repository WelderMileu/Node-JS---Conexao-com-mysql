const mysql = require('mysql')
// Conectando ao banco de dados
const conn = mysql.createConnection({
	"local":"localhost",
	"user":"root",
	"password":"",
	"database":"dev"
})

// Validando conexao com o banco de dados
conn.connect((erro) => {
	if ( erro ) {
		console.log("Erro ao conectar no banco de dados\n")
	}else{
		console.log("Conectado ao banco de dados com sucesso\n")
	}
});

// Mostrando dados do banco de dados
conn.query('select * from usuario',(err, results) => {
	if (err) {
		console.log("Erro: Nao foi possivel exibir os dados")
	}else{
		console.log(results)	
		console.log()
	}
})
// Hora
const data = new Date()
const hora = data.getHours()
const min  = data.getMinutes()
const seg  = data.getSeconds()

// Data
let dia = data.getDay()
let mes = data.getMonth()+1
let ano = data.getFullYear()

if (dia < 10) {
	dia = "0" + dia;
}
if (mes < 10) {
	mes = "0" + mes;
}

const horarioDate =`${dia}/${mes}/${ano} `;
const horario = `${hora}:${min}:${seg}`;

console.log()
console.log(data)
console.log()
// Finalizando conexão com o banco de dados
conn.end(
	console.log(`Requisicao Realizada em: `+horarioDate+horario)
);