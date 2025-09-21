create database qrdb2;
use qrdb2;

drop database qrdb2;

create table usuarios (
    id int auto_increment primary key,
    nome varchar(100) ,
    email varchar(100) unique not null,
    senha varchar(255) ,
    tipo enum('admin', 'usuario') default 'usuario',
    created_at timestamp default current_timestamp
);

create table visitas (
    id int auto_increment primary key,
    codigo varchar(100) ,
    sala varchar(100) ,
    andar varchar(100),
    data datetime default current_timestamp
);

insert into usuarios (nome, email, senha, tipo)
values 
('administrador', 'admin@exemplo.com', md5('admin123'), 'admin'),
('guilherme neto', 'netoguilherme@gmail.com', md5('1913gremio'), 'usuario');

select * from usuarios;

insert into visitas (codigo, sala, andar)
values 
('1', 'sala 1', 'patio'),
('2', 'sala 2', 'patio'),
('3', 'sala 21', 'primeiro andar'),
('4', 'lab informática 1', 'segundo andar');

select * from visitas;

select sala, count(*) as total_visitas from visitas
group by sala
order by total_visitas desc;

select andar, count(*) as total_visitas from visitas
group by andar order by total_visitas desc;

select count(distinct sala), count(distinct codigo) from visitas;

