CREATE TABLE task (
    task_id SERIAL PRIMARY KEY,
    description TEXT,
    link VARCHAR(255),
    type_task_id INT REFERENCES type_task(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    soft_delete BOOLEAN DEFAULT FALSE
);

ALTER TABLE task ADD COLUMN tag_id INT REFERENCES tag(id);