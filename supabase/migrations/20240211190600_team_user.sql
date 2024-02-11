CREATE TABLE team_user (
    team_id INT REFERENCES team(team_id),
    user_id uuid REFERENCES users(user_id),
    invitation_link_channel VARCHAR(255),
    PRIMARY KEY (team_id, user_id)
);