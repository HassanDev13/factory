import { pgEnum } from "drizzle-orm/pg-core";

export const initiativeForGender = pgEnum('initiative_for_gender', ['men', 'female', 'mix']);
export const initiativeStatus = pgEnum('initiative_status', ['announcement', 'preparing', 'registrations', 'organize student', 'execution', 'completed', 'postponed']);
export const taskInitiativeStatus = pgEnum('task_initiative_status', ['solve', 'unsolved', 'pending']);
export const userGender = pgEnum('user_gender', ['men', 'female']);
export const userInitiativeStatus = pgEnum('user_initiative_status', ['pending', 'accepted', 'refused']);
export const userStatus = pgEnum('user_status', ['active', 'deactivate']);
export const notificationStatus = pgEnum('notification_status', ['read', 'unread']);
export const role = pgEnum('role', ['admin', 'supervisor', 'student']);
