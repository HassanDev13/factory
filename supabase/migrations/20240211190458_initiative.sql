CREATE TABLE initiative (
    initiative_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    invitation_link_channel VARCHAR(255),
    announcement_date DATE,
    start_management_date DATE,
    end_management_date DATE,
    open_registrations_date DATE,
    close_registrations_date DATE,
    launch_date DATE,
    end_execution_date DATE,
    for_gender initiative_for_gender,
    status initiative_status,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    soft_delete BOOLEAN DEFAULT FALSE
);


ALTER TABLE initiative ADD COLUMN type_initiative_id INT REFERENCES type_initiative(id);

ALTER TABLE initiative ADD COLUMN image_id INT REFERENCES image(id);

ALTER TABLE initiative ADD COLUMN timezone_id INT REFERENCES time_zone(id);

ALTER TABLE type_task ADD COLUMN initiative_id INT REFERENCES initiative(initiative_id);
