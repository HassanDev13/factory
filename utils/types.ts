import { SupabaseClient } from '@supabase/supabase-js'
import type { Database } from './database.types'


type Row<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row'];
type InsertDto<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert'];
type UpdateDto<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update'];
type Enum<T extends keyof Database['public']['Enums']> = Database['public']['Enums'][T];

export type TypedSupabaseClient = SupabaseClient<Database>


export type Country = Row<'country'>;
export type CountryInsertDto = InsertDto<'country'>;
export type CountryUpdateDto = UpdateDto<'country'>;

export type User = Row<'users'>;
export type UserInsertDto = InsertDto<'users'>;
export type UserUpdateDto = UpdateDto<'users'>;

export type Initiative = Row<'initiative'>;
export type InitiativeInsertDto = InsertDto<'initiative'>;
export type InitiativeUpdateDto = UpdateDto<'initiative'>;

export type TimeZone = Row<'time_zone'>;
export type TimeZoneInsertDto = InsertDto<'time_zone'>;
export type TimeZoneUpdateDto = UpdateDto<'time_zone'>;

export type Roles = Row<'Roles'>;
export type RolesInsertDto = InsertDto<'Roles'>;
export type RolesUpdateDto = UpdateDto<'Roles'>;

export type Image = Row<'image'>;
export type ImageInsertDto = InsertDto<'image'>;
export type ImageUpdateDto = UpdateDto<'image'>;

export type TypeInitiative = Row<'type_initiative'>;
export type TypeInitiativeInsertDto = InsertDto<'type_initiative'>;
export type TypeInitiativeUpdateDto = UpdateDto<'type_initiative'>;

export type TypeTask = Row<'type_task'>;
export type TypeTaskInsertDto = InsertDto<'type_task'>;
export type TypeTaskUpdateDto = UpdateDto<'type_task'>;

export type Tag = Row<'tag'>;
export type TagInsertDto = InsertDto<'tag'>;
export type TagUpdateDto = UpdateDto<'tag'>;

export type Task = Row<'task'>;
export type TaskInsertDto = InsertDto<'task'>;
export type TaskUpdateDto = UpdateDto<'task'>;

export type UserInitiative = Row<'user_initiative'>;
export type UserInitiativeInsertDto = InsertDto<'user_initiative'>;
export type UserInitiativeUpdateDto = UpdateDto<'user_initiative'>;

export type TaskInitiative = Row<'task_initiative'>;
export type TaskInitiativeInsertDto = InsertDto<'task_initiative'>;
export type TaskInitiativeUpdateDto = UpdateDto<'task_initiative'>;

export type Team = Row<'team'>;
export type TeamInsertDto = InsertDto<'team'>;
export type TeamUpdateDto = UpdateDto<'team'>;

export type Notification = Row<'notification'>;
export type NotificationInsertDto = InsertDto<'notification'>;
export type NotificationUpdateDto = UpdateDto<'notification'>;

export type NotificationUser = Row<'notification_user'>;
export type NotificationUserInsertDto = InsertDto<'notification_user'>;
export type NotificationUserUpdateDto = UpdateDto<'notification_user'>;

export type TeamUser = Row<'team_user'>;
export type TeamUserInsertDto = InsertDto<'team_user'>;
export type TeamUserUpdateDto = UpdateDto<'team_user'>;

export type Role = Enum<'role'>;
export type InitiativeForGender = Enum<'initiative_for_gender'>;
export type InitiativeStatus = Enum<'initiative_status'>;
export type TaskInitiativeStatus = Enum<'task_initiative_status'>;
export type UserGender = Enum<'user_gender'>;
export type UserInitiativeStatus = Enum<'user_initiative_status'>;
export type UserStatus = Enum<'user_status'>;
export type NotificationStatus = Enum<'notification_status'>;