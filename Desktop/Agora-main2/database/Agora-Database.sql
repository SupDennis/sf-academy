
CREATE TABLE ruolo (
    Id INT NOT NULL AUTO_INCREMENT,
    Nome_Ruolo VARCHAR(32) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE utente (
    Id INT NOT NULL AUTO_INCREMENT,
    Username VARCHAR(32) NOT NULL,
    Password VARCHAR(32) NOT NULL,
    Mail VARCHAR(32) NOT NULL,
    Data_Creazione DATETIME  NOT NULL,
    Data_Ultima_Modifica DATETIME NOT NULL,
    Fk_Ruolo INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(Fk_ruolo) 
        REFERENCES ruolo(id)
        ON UPDATE cascade
        ON DELETE cascade
);

CREATE TABLE genitore (
    Id INT NOT NULL AUTO_INCREMENT,
    Nome VARCHAR(32) NOT NULL,
    Cognome VARCHAR(32) NOT NULL,
    Data_Di_Nascita DATE NOT NULL,
    Fk_Utente INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(fk_utente) 
        REFERENCES utente(id)
        ON UPDATE cascade
        ON DELETE cascade
);

CREATE TABLE insegnante (
    Id INT NOT NULL AUTO_INCREMENT,
    Nome VARCHAR(32) NOT NULL,
    Cognome VARCHAR(32) NOT NULL,
    Sezione VARCHAR(1) NOT NULL,
    Fk_Utente INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(fk_utente) 
        REFERENCES utente(id)
        ON UPDATE cascade
        ON DELETE cascade
);

CREATE TABLE classe (
    Id INT NOT NULL AUTO_INCREMENT,
    Classe int(1) NOT NULL,
    Sezione VARCHAR(1) NOT NULL,
    Anno INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE figlio (
    Id INT NOT NULL AUTO_INCREMENT,
    Nome VARCHAR(32) NOT NULL,
    Cognome VARCHAR(32) NOT NULL,
    Data_Di_Nascita DATE NOT NULL,
    Fk_Classe INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(fk_classe) 
        REFERENCES classe(id)
        ON UPDATE cascade
        ON DELETE cascade
);

CREATE TABLE famiglia (
    Id INT NOT NULL AUTO_INCREMENT,
    Fk_Genitore INT NOT NULL,
    Fk_Figlio INT NOT NULL,
    PRIMARY KEY(Id),
    FOREIGN KEY(Fk_Genitore) 
        REFERENCES genitore(Id)
        ON UPDATE cascade
        ON DELETE cascade,
    FOREIGN KEY(Fk_Figlio) 
        REFERENCES figlio(Id)
        ON UPDATE cascade
        ON DELETE cascade
); 