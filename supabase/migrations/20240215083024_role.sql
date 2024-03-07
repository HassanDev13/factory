create table "public"."roles" (
    "id" uuid PRIMARY KEY not null default uuid_generate_v4(),
    "user_id" uuid not null references auth.users on delete cascade,
    "roles" role[] not null
);
ALTER TABLE users ADD COLUMN role_id uuid REFERENCES roles(id) DEFAULT NULL;