create table qrdb;

use qrdb;

create table visitas (
  id int auto_increment primary key,
  codigo varchar(100),
  sala varchar(100),
  data DATETIME DEFAULT CURRENT_TIMESTAMP
);

create table usuarios (
    id int auto_increment primary key,
    nome varchar(100),
    email varchar(100) unique,
    senha varchar(255),
    tipo enum('admin', 'usuario') default 'usuario',
    created_at timestamp default current_timestamp
);


insert into visitas (codigo, sala, data)
values (?, ?, ?);

select sala, COUNT(*) as total_visitas, COUNT(distinct sala) as salas_ativas
from visitas
group by sala
order by sala asc;

delete from visitas;

select * from visitas;