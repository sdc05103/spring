drop table if exists member CASCADE;
create table member
(
    id varchar(255),
    name varchar(255),
    grade int(2),
    pwd varchar(255),
    primary key (id)
);