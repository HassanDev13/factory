-- Insert sample data into time_zone table

INSERT INTO
    country (name, soft_delete)
VALUES ('Algeria', FALSE),
    ('Maroc', FALSE),
    ('Tunisia', FALSE);

INSERT INTO
    auth.users (
        instance_id,
        id,
        aud,
        role,
        email,
        encrypted_password,
        email_confirmed_at,
        recovery_sent_at,
        last_sign_in_at,
        raw_app_meta_data,
        raw_user_meta_data,
        created_at,
        updated_at,
        confirmation_token,
        email_change,
        email_change_token_new,
        recovery_token
    ) (
        select
            '00000000-0000-0000-0000-000000000000',
            uuid_generate_v4 (),
            'authenticated',
            'authenticated',
            'user' || (ROW_NUMBER() OVER ()) || '@example.com',
            crypt ('password', gen_salt ('bf')),
            current_timestamp,
            current_timestamp,
            current_timestamp,
            '{"provider":"email","providers":["email"]}',
            '{}',
            current_timestamp,
            current_timestamp,
            '',
            '',
            '',
            ''
        FROM
            generate_series(1,3)
    );




-- test user email identities
INSERT INTO
    auth.identities (
        id,
        user_id,
        provider_id,
        identity_data,
        provider,
        last_sign_in_at,
        created_at,
        updated_at
    ) (
        select
            uuid_generate_v4 (),
            id,
            id,
            format('{"sub":"%s","email":"%s"}', id::text, email)::jsonb,
            'email',
            current_timestamp,
            current_timestamp,
            current_timestamp
        from
            auth.users
    );

 INSERT INTO public.roles (user_id,roles)
    select 
    id,
    ARRAY['admin', 'supervisor', 'student']::role[]
    from auth.users;


INSERT INTO
    time_zone (zone)
VALUES ('UTC'),
    ('GMT'),
    ('PST');
--  admin', 'supervisor', 'student'


-- Insert sample data into image table
INSERT INTO
    image (link)
VALUES (
        'https://example.com/image1.jpg'
    ),
    (
        'https://example.com/image2.jpg'
    ),
    (
        'https://example.com/image3.jpg'
    );

-- Insert sample data into type_initiative table
INSERT INTO
    type_initiative (name)
VALUES ('Type 1'),
    ('Type 2'),
    ('Type 3');

-- Insert sample data into type_task table
INSERT INTO
    type_task (name)
VALUES ('Task Type 1'),
    ('Task Type 2'),
    ('Task Type 3');

-- Insert sample data into tag table
INSERT INTO
    tag (name, soft_delete)
VALUES ('Tag 1', FALSE),
    ('Tag 2', FALSE),
    ('Tag 3', FALSE);

-- Insert sample data into country table


-- Insert sample data into users table
-- Insert sample data into users table

-- Insert sample data into initiative table
INSERT INTO
    team (
        name, max_member, image_id, created_at, updated_at, soft_delete
    )
VALUES (
        'Team 1', 5, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, FALSE
    ),
    (
        'Team 2', 6, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, FALSE
    ),
    (
        'Team 3', 7, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, FALSE
    );

INSERT INTO
    initiative (
        name, description, invitation_link_channel, announcement_date, start_management_date, end_management_date, open_registrations_date, close_registrations_date, launch_date, end_execution_date, for_gender, status, type_initiative_id, image_id, timezone_id, team_id, soft_delete
    )
VALUES (
        'Initiative 1', 'Description 1', 'Channel 1', '2024-01-01', '2024-01-05', '2024-01-10', '2024-01-02', '2024-01-08', '2024-01-15', '2024-01-20', 'men', 'announcement', 1, 1, 1, 1, FALSE
    ),
    (
        'Initiative 2', 'Description 2', 'Channel 2', '2024-02-01', '2024-02-05', '2024-02-10', '2024-02-02', '2024-02-08', '2024-02-15', '2024-02-20', 'female', 'preparing', 2, 2, 2, 2, FALSE
    ),
    (
        'Initiative 3', 'Description 3', 'Channel 3', '2024-03-01', '2024-03-05', '2024-03-10', '2024-03-02', '2024-03-08', '2024-03-15', '2024-03-20', 'men', 'registrations', 3, 3, 3, 3, FALSE
    );

-- Insert sample data into task table
INSERT INTO
    task (
        description, link, type_task_id, created_at, updated_at, soft_delete
    )
VALUES (
        'Task 1 Description', 'https://example.com/task1', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, FALSE
    ),
    (
        'Task 2 Description', 'https://example.com/task2', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, FALSE
    ),
    (
        'Task 3 Description', 'https://example.com/task3', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, FALSE
    );

-- Insert sample data into user_initiative table


-- Insert sample data into task_initiative table
-- Insert sample data into task_initiative table


-- Insert sample data into team table


-- Insert sample data into notification table
INSERT INTO
    notification (
        description, image_id, created_at, updated_at, soft_delete
    )
VALUES (
        'Notification 1', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, FALSE
    ),
    (
        'Notification 2', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, FALSE
    ),
    (
        'Notification 3', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, FALSE
    );

-- Insert sample data into notification_user table
-- Insert sample data into notification_user table
