create table if not exists recipes(
    id serial primary key,
    name text not null,
    decription text not null
);