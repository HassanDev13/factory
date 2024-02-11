CREATE TABLE task_initiative (
    task_id SERIAL PRIMARY KEY,
    initiative_id INT REFERENCES initiative(initiative_id),
    -- user_id INT REFERENCES users(user_id),
    status task_initiative_status,
    point INT,
    date_of_execution DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    soft_delete BOOLEAN DEFAULT FALSE
);

ALTER TABLE task_initiative ADD COLUMN user_id uuid REFERENCES users(user_id);

