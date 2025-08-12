CREATE DATABASE IF NOT EXISTS catalogo_jogos;
USE catalogo_jogos;

CREATE TABLE jogos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    tipo VARCHAR(100) NOT NULL,
    ano_lancamento YEAR NOT NULL
);

INSERT INTO jogos (nome, tipo, ano_lancamento) VALUES
('Chrono Trigger', 'RPG', 1995),
('The Last of Us Part I', 'Ação-Aventura', 2013),
('StarCraft II: Wings of Liberty', 'Estratégia em Tempo Real', 2010),
('Street Fighter II', 'Luta', 1991),
('Minecraft', 'Sandbox', 2011),
('The Witcher 3: Wild Hunt', 'RPG de Ação', 2015),
('Elden Ring', 'RPG de Ação', 2022),
('Portal 2', 'Quebra-Cabeça', 2011);