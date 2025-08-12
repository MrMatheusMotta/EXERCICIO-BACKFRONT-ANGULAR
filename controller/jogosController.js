
const db = require("../bd");

exports.getAll = (req, res) => {
  const sql = "SELECT * FROM jogos";
  db.query(sql, (erro, resultado) => {
    if (erro) {
      console.error("Erro ao buscar jogos:", erro);
      return res.status(500).json({ erro: "Erro interno no servidor." });
    }
    res.status(200).json(resultado);
  });
};

exports.create = (req, res) => {
  const { nome, tipo, ano_lancamento } = req.body;
  const sql = "INSERT INTO jogos (nome, tipo, ano_lancamento) VALUES (?, ?, ?)";
  db.query(sql, [nome, tipo, ano_lancamento], (erro, resultado) => {
    if (erro) {
      console.error("Erro ao criar jogo:", erro);
      return res.status(500).json({ erro: "Erro interno no servidor." });
    }
    res
      .status(201)
      .json({
        mensagem: "Jogo cadastrado com sucesso!",
        id: resultado.insertId,
      });
  });
};

exports.update = (req, res) => {
  const { id } = req.params;
  const { nome, tipo, ano_lancamento } = req.body;
  const sql =
    "UPDATE jogos SET nome = ?, tipo = ?, ano_lancamento = ? WHERE id = ?"; 
  db.query(sql, [nome, tipo, ano_lancamento, id], (erro, resultado) => {
    if (erro) {
      console.error("Erro ao atualizar jogo:", erro);
      return res.status(500).json({ erro: "Erro interno no servidor." });
    }
    if (resultado.affectedRows === 0) {
      return res.status(404).json({ mensagem: "Jogo não encontrado." });
    }
    res.status(200).json({ mensagem: "Jogo atualizado com sucesso!" });
  });
};


exports.delete = (req, res) => {
  const { id } = req.params; 
  const sql = "DELETE FROM jogos WHERE id = ?";
  db.query(sql, [id], (erro, resultado) => {
    if (erro) {
      console.error("Erro ao excluir jogo:", erro);
      return res.status(500).json({ erro: "Erro interno no servidor." });
    }
    if (resultado.affectedRows === 0) {
      return res.status(404).json({ mensagem: "Jogo não encontrado." });
    }
    res.status(200).json({ mensagem: "Jogo excluído com sucesso!" });
  });
};
