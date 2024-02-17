create table "public"."roles" (
    "user_id" uuid not null references auth.users on delete cascade,
    "roles" role[] not null
);
