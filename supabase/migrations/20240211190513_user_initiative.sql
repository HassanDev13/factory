CREATE TABLE user_initiative (
    initiative_id INT REFERENCES initiative(initiative_id),
    user_id uuid REFERENCES users(user_id),
    status user_initiative_status,
    PRIMARY KEY (initiative_id, user_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    soft_delete BOOLEAN DEFAULT FALSE
);

