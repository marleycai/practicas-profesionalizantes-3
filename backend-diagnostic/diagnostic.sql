    #crear base de datos.
CREATE DATABASE IF NOT EXISTS fixture;

    #selecion de base de datos.
USE fixture;

    #crear tabla.

CREATE TABLE IF NOT EXISTS team(
    id_team INT NOT NULL, 
    name_team varchar(40) NOT NULL,
    PRIMARY KEY(id_team)

)ENGINE=INNODB; 

    #creamos trabla team-group
CREATE TABLE IF NOT EXISTS team_group(
    id_team_group INT NOT NULL, 
    name_team_group varchar(40) NOT NULL,
    PRIMARY KEY(id_team_group) #es una clave primaria
    
    

)ENGINE=INNODB;

    ##creamos tabla team-groups-numbers
CREATE TABLE IF NOT EXISTS team_group_numbers(
    id_team_group INT NOT NULL, 
    id_team INT NOT NULL,
    PRIMARY KEY(id_team_group,id_team)

)ENGINE=INNODB;

    #creamos la tablamatch
CREATE TABLE IF NOT EXISTS mach(
    id INT NOT NULL, 
    id_team_a INT NOT NULL,
    id_team_b INT NOT NULL,
    goals_a INT NOT NULL,
    goals_b INT NOT NULL,
    data varchar(40),
    id_place INT NOT NULL,
    PRIMARY KEY(id),
    mach_id_mach INT NOT NULL,
    CONSTRAINT fkmach_team_group_numbers
    FOREIGN KEY (mach_id_mach)
    REFERENCES team_group_numbers(id_team,id_team_group)
)ENGINE=INNODB;
    
    ##creamos tabla team-group-mach
CREATE TABLE IF NOT EXISTS team_group_mach(
    id_mach INT NOT NULL, 
    id_team_group INT NOT NULL 

)ENGINE=INNODB;
    
       ##creamos tabla place
CREATE TABLE IF NOT EXISTS place(
    id_place INT NOT NULL, 
    city VARCHAR (40) NOT NULL,
    country VARCHAR (40) NOT NULL,
    stadium_name VARCHAR (40) NOT NULL

)ENGINE=INNODB;
