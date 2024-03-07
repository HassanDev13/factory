CREATE TABLE users (
    user_id uuid not null references auth.users on delete cascade,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    gender user_gender,
    status user_status DEFAULT 'active',
    country INT REFERENCES country(id),
    primary key (user_id)
);

