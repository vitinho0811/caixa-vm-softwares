CREATE DATABASE PROJETO_ES41;
USE PROJETO_ES41;


------------------------------------------------------------------------------
CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(60) NOT NULL,
    contato VARCHAR(60)NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE
);

CREATE TABLE Produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
);

CREATE TABLE Transacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    data DATETIME NOT NULL,
    valor_final DECIMAL(10, 2) NOT NULL,
    metodo_pagamento ENUM('debito', 'credito', 'pix', 'dinheiro') NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id)
);

CREATE TABLE Itens_Transacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_transacao INT NOT NULL,
    id_produto INT NOT NULL,
    quantidade INT NOT NULL,
    valor_individual DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_transacao) REFERENCES Transacoes(id),
    FOREIGN KEY (id_produto) REFERENCES Produtos(id)
);

INSERT INTO Produtos VALUES (001,'Arroz - 5kg','32');
INSERT INTO Produtos VALUES (002,'Feijao - 1kg','8');
INSERT INTO Produtos VALUES (003,'Oleo de Soja - 900ml','6');
INSERT INTO Produtos VALUES (004,'Cafe Moido - 500g','24');
INSERT INTO Produtos VALUES (005,'Acucar Refinado - 1kg','7');
INSERT INTO Produtos VALUES (006,'Pacote de Pao de Forma - 400g','8');
INSERT INTO Produtos VALUES (007,'Sal Refinado - 1kg','4');
INSERT INTO Produtos VALUES (008,'Leite Integral - 1L','5');
INSERT INTO Produtos VALUES (009,'Manteiga - 500g', '9');
INSERT INTO Produtos VALUES (010,'Refri(Guarana) - 2L','9');
INSERT INTO Produtos VALUES (011,'Farofa Tradicional - 400g','7');
INSERT INTO Produtos VALUES (012,'Pacote de Bolacha(agua e sal) - 170g','4');
INSERT INTO Produtos VALUES (013,'Macarrao Espaguete - 500g','5');
INSERT INTO Produtos VALUES (014,'Suco de Uva - 1L','7');
INSERT INTO Produtos VALUES (015,'Farinha de Trigo - 1kg','5');