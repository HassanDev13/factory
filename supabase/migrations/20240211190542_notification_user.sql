CREATE TABLE notification_user (
    notification_id INT REFERENCES notification(notification_id),
    user_id uuid REFERENCES users(user_id),
    status notification_status,
    PRIMARY KEY (notification_id, user_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    soft_delete BOOLEAN DEFAULT FALSE
);