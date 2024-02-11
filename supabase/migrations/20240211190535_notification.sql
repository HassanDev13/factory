CREATE TABLE notification (
    notification_id SERIAL PRIMARY KEY,
    description TEXT,
    image_id INT REFERENCES image(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    soft_delete BOOLEAN DEFAULT FALSE
);
