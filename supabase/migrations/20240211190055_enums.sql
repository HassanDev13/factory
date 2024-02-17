CREATE TYPE initiative_for_gender AS ENUM ('men', 'female', 'mix');
CREATE TYPE initiative_status AS ENUM ('announcement', 'preparing', 'registrations', 'organize student', 'execution', 'completed', 'postponed');
CREATE TYPE task_initiative_status AS ENUM ('solve', 'unsolved', 'pending');
CREATE TYPE user_gender AS ENUM ('men', 'female');
CREATE TYPE user_initiative_status AS ENUM ('pending', 'accepted', 'refused');
CREATE TYPE user_status AS ENUM ('active', 'deactivate');
CREATE TYPE notification_status AS ENUM ('read', 'unread');
create type "public"."role" as enum ('admin', 'supervisor', 'student');