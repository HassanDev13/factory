CREATE TABLE users (
    user_id uuid not null references auth.users on delete cascade,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    gender user_gender,
    status user_status,
    facebook VARCHAR(255),
    instagram VARCHAR(255),
    github VARCHAR(255),
    linkedin VARCHAR(255),
    phone_number VARCHAR(20),
    country_id INT REFERENCES country(id),
    primary key (user_id)
);
ALTER TABLE country ADD COLUMN user_id uuid REFERENCES users(user_id);
