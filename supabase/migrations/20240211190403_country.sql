

CREATE TABLE country (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    soft_delete BOOLEAN DEFAULT FALSE
);


