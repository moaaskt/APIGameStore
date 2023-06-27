
const database = require("../database");



exports.listarUsers = (req, res) => {
    database.query("SELECT * FROM USUARIOS")
        .then((resultado) => {
            res.status(202).send({ "dados": resultado.rows })

            console.log(resultado)
        })
}

exports.deletarGame = (req, res) => {
    const idDoGame = req.params.id
    const query = 'DELETE FROM GAMES WHERE game_id=$1'

    database.query(query, [idDoGame]).then(() => {
        res.status(200).send({ mensagem: 'Removido com sucesso!' })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
}

exports.deletarUser = (req, res) => {
    const idDoUser = req.params.id
    const query = 'DELETE FROM USUARIOS WHERE user_id=$1'

    database.query(query, [idDoUser]).then(() => {
        res.status(200).send({ mensagem: 'Removido com sucesso!' })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
}
exports.deletarAdmin = (req, res) => {
    const idDoAdmin = req.params.id
    const query = 'DELETE FROM ADMIN WHERE user_id=$1'

    database.query(query, [idDoAdmin]).then(() => {
        res.status(200).send({ mensagem: 'Removido com sucesso!' })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
}





exports.cadastrarGame = (req, res) => {
    const novoGame = req.body
    const query = 'INSERT INTO GAMES(nome,descricao, preco, plataforma) VALUES ($1, $2,$3,$4)'
    const values = [novoGame.nome, novoGame.descricao, novoGame.preco, novoGame.plataforma]

    database.query(query, values).then(() => {
        res.status(200).send({ mensagem: 'Produto inserido!' })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
}


exports.atualizarGame = (req, res) => {
    const gameId = req.params.id; // Obtém o ID do game a ser atualizado
    const gameAtt = req.body; // Obtém os dados atualizados do game
    const values = [gameId];
    let query = 'UPDATE GAMES SET';

    // Verifica se o nome do jogo foi fornecido
    if (gameAtt.nome) {
        query += ' nome = $2,';
        values.push(gameAtt.nome);
    }

    query = query.slice(0, -1); // Remove a vírgula extra no final da query
    query += ' WHERE game_id = $1';

    database.query(query, values)
        .then(() => {
            res.status(200).send({ mensagem: 'Game atualizado com sucesso!' });
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
}


exports.cadastrarUsuario = (req, res) => {
    const novoUser = req.body
    const query = 'INSERT INTO USUARIOS(nome,cpf,email) VALUES ($1, $2,$3)'
    const values = [novoUser.nome, novoUser.cpf, novoUser.email]

    database.query(query, values).then(() => {
        res.status(200).send({ mensagem: 'Usuário cadastrado com sucesso!' })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
}

exports.cadastrarAdmin = (req, res) => {
    const novoAdmin = req.body
    const query = 'INSERT INTO ADMIN(nome,cpf,email,senha) VALUES ($1, $2,$3,$4)'
    const values = [novoAdmin.nome, novoAdmin.cpf, novoAdmin.email, novoAdmin.senha]

    database.query(query, values).then(() => {
        res.status(200).send({ mensagem: 'Adminstrador cadastrado com sucesso!' })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
}

exports.buscarJogo = (req, res) => {
    const { nome, precoMin, precoMax, plataforma } = req.query;
    let query = 'SELECT * FROM GAMES WHERE ';

    const conditions = [];

    if (nome) {
        conditions.push(`nome ILIKE '%${nome}%'`);
    }

    if (precoMin && precoMax) {
        conditions.push(`preco BETWEEN ${precoMin} AND ${precoMax}`);
    } else if (precoMin) {
        conditions.push(`preco >= ${precoMin}`);
    } else if (precoMax) {
        conditions.push(`preco <= ${precoMax}`);
    }

    if (plataforma) {
        conditions.push(`plataforma ILIKE '%${plataforma}%'`);
    }

    query += conditions.join(' AND ') + " order by preco desc";

    console.log(query)
    database
        .query(query)
        .then((resultado) => {
            res.status(200).send({ dados: resultado.rows });
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
};





exports.atualizarUser = (req, res) => {
    const userId = req.params.id; // Obtém o ID do game a ser atualizado
    const userAtt = req.body; // Obtém os dados atualizados do game
    const query = 'UPDATE USUARIOS SET nome = $1, cpf = $2, email = $3 WHERE user_id = $4';
    const values = [userAtt.nome, userAtt.cpf, userAtt.email, userId];

    database.query(query, values)
        .then(() => {
            res.status(200).send({ mensagem: 'Usuario atualizado com sucesso!' });
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
}



exports.buscarPorPlataforma = (req, res) => {
    const plataforma = req.params.plataforma;
    const query = `SELECT * FROM GAMES WHERE plataforma ILIKE '%${plataforma}%'`;

    database.query(query)
        .then((result) => {
            if (result.rows.length === 0) {
                res.status(404).send({ mensagem: 'Nenhum game encontrado com o nome especificado.' });
            } else {
                res.status(200).send(result.rows);
            }
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
}

exports.listarGames = (req, res) => {
    database.query('SELECT * FROM GAMES').then((resultado) => {
        res.status(200).send({ Dados: resultado.rows })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
}

exports.listarAdmins = (req, res) => {
    database.query('SELECT * FROM ADMIN').then((resultado) => {
        res.status(200).send({ dados: resultado.rows })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
}
