CREATE TABLE team (
    team_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    max_member INT,
    image_id INT REFERENCES image(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    soft_delete BOOLEAN DEFAULT FALSE
);
ALTER TABLE initiative ADD COLUMN team_id INT REFERENCES team(team_id);
ALTER TABLE user_initiative ADD COLUMN team_id INT REFERENCES team(team_id);