export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      country: {
        Row: {
          id: number
          name: string | null
          soft_delete: boolean | null
          user_id: string | null
        }
        Insert: {
          id?: number
          name?: string | null
          soft_delete?: boolean | null
          user_id?: string | null
        }
        Update: {
          id?: number
          name?: string | null
          soft_delete?: boolean | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "country_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      image: {
        Row: {
          id: number
          link: string | null
        }
        Insert: {
          id?: number
          link?: string | null
        }
        Update: {
          id?: number
          link?: string | null
        }
        Relationships: []
      }
      initiative: {
        Row: {
          announcement_date: string | null
          close_registrations_date: string | null
          created_at: string | null
          description: string | null
          end_execution_date: string | null
          end_management_date: string | null
          for_gender:
            | Database["public"]["Enums"]["initiative_for_gender"]
            | null
          image_id: number | null
          initiative_id: number
          invitation_link_channel: string | null
          launch_date: string | null
          name: string | null
          open_registrations_date: string | null
          soft_delete: boolean | null
          start_management_date: string | null
          status: Database["public"]["Enums"]["initiative_status"] | null
          team_id: number | null
          timezone_id: number | null
          type_initiative_id: number | null
          updated_at: string | null
        }
        Insert: {
          announcement_date?: string | null
          close_registrations_date?: string | null
          created_at?: string | null
          description?: string | null
          end_execution_date?: string | null
          end_management_date?: string | null
          for_gender?:
            | Database["public"]["Enums"]["initiative_for_gender"]
            | null
          image_id?: number | null
          initiative_id?: number
          invitation_link_channel?: string | null
          launch_date?: string | null
          name?: string | null
          open_registrations_date?: string | null
          soft_delete?: boolean | null
          start_management_date?: string | null
          status?: Database["public"]["Enums"]["initiative_status"] | null
          team_id?: number | null
          timezone_id?: number | null
          type_initiative_id?: number | null
          updated_at?: string | null
        }
        Update: {
          announcement_date?: string | null
          close_registrations_date?: string | null
          created_at?: string | null
          description?: string | null
          end_execution_date?: string | null
          end_management_date?: string | null
          for_gender?:
            | Database["public"]["Enums"]["initiative_for_gender"]
            | null
          image_id?: number | null
          initiative_id?: number
          invitation_link_channel?: string | null
          launch_date?: string | null
          name?: string | null
          open_registrations_date?: string | null
          soft_delete?: boolean | null
          start_management_date?: string | null
          status?: Database["public"]["Enums"]["initiative_status"] | null
          team_id?: number | null
          timezone_id?: number | null
          type_initiative_id?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "initiative_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "image"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "initiative_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "initiative_timezone_id_fkey"
            columns: ["timezone_id"]
            isOneToOne: false
            referencedRelation: "time_zone"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "initiative_type_initiative_id_fkey"
            columns: ["type_initiative_id"]
            isOneToOne: false
            referencedRelation: "type_initiative"
            referencedColumns: ["id"]
          }
        ]
      }
      notification: {
        Row: {
          created_at: string | null
          description: string | null
          image_id: number | null
          notification_id: number
          soft_delete: boolean | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          image_id?: number | null
          notification_id?: number
          soft_delete?: boolean | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          image_id?: number | null
          notification_id?: number
          soft_delete?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notification_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "image"
            referencedColumns: ["id"]
          }
        ]
      }
      notification_user: {
        Row: {
          created_at: string | null
          notification_id: number
          soft_delete: boolean | null
          status: Database["public"]["Enums"]["notification_status"] | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          notification_id: number
          soft_delete?: boolean | null
          status?: Database["public"]["Enums"]["notification_status"] | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          notification_id?: number
          soft_delete?: boolean | null
          status?: Database["public"]["Enums"]["notification_status"] | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notification_user_notification_id_fkey"
            columns: ["notification_id"]
            isOneToOne: false
            referencedRelation: "notification"
            referencedColumns: ["notification_id"]
          },
          {
            foreignKeyName: "notification_user_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      tag: {
        Row: {
          id: number
          name: string | null
          soft_delete: boolean | null
        }
        Insert: {
          id?: number
          name?: string | null
          soft_delete?: boolean | null
        }
        Update: {
          id?: number
          name?: string | null
          soft_delete?: boolean | null
        }
        Relationships: []
      }
      task: {
        Row: {
          created_at: string | null
          description: string | null
          link: string | null
          soft_delete: boolean | null
          tag_id: number | null
          task_id: number
          type_task_id: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          link?: string | null
          soft_delete?: boolean | null
          tag_id?: number | null
          task_id?: number
          type_task_id?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          link?: string | null
          soft_delete?: boolean | null
          tag_id?: number | null
          task_id?: number
          type_task_id?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "task_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tag"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_type_task_id_fkey"
            columns: ["type_task_id"]
            isOneToOne: false
            referencedRelation: "type_task"
            referencedColumns: ["id"]
          }
        ]
      }
      task_initiative: {
        Row: {
          created_at: string | null
          date_of_execution: string | null
          initiative_id: number | null
          point: number | null
          soft_delete: boolean | null
          status: Database["public"]["Enums"]["task_initiative_status"] | null
          task_id: number
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          date_of_execution?: string | null
          initiative_id?: number | null
          point?: number | null
          soft_delete?: boolean | null
          status?: Database["public"]["Enums"]["task_initiative_status"] | null
          task_id?: number
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          date_of_execution?: string | null
          initiative_id?: number | null
          point?: number | null
          soft_delete?: boolean | null
          status?: Database["public"]["Enums"]["task_initiative_status"] | null
          task_id?: number
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "task_initiative_initiative_id_fkey"
            columns: ["initiative_id"]
            isOneToOne: false
            referencedRelation: "initiative"
            referencedColumns: ["initiative_id"]
          },
          {
            foreignKeyName: "task_initiative_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      team: {
        Row: {
          created_at: string | null
          image_id: number | null
          max_member: number | null
          name: string | null
          soft_delete: boolean | null
          team_id: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          image_id?: number | null
          max_member?: number | null
          name?: string | null
          soft_delete?: boolean | null
          team_id?: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          image_id?: number | null
          max_member?: number | null
          name?: string | null
          soft_delete?: boolean | null
          team_id?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "image"
            referencedColumns: ["id"]
          }
        ]
      }
      team_user: {
        Row: {
          invitation_link_channel: string | null
          team_id: number
          user_id: string
        }
        Insert: {
          invitation_link_channel?: string | null
          team_id: number
          user_id: string
        }
        Update: {
          invitation_link_channel?: string | null
          team_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "team_user_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_user_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      time_zone: {
        Row: {
          id: number
          zone: string | null
        }
        Insert: {
          id?: number
          zone?: string | null
        }
        Update: {
          id?: number
          zone?: string | null
        }
        Relationships: []
      }
      type_initiative: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      type_task: {
        Row: {
          id: number
          initiative_id: number | null
          name: string | null
        }
        Insert: {
          id?: number
          initiative_id?: number | null
          name?: string | null
        }
        Update: {
          id?: number
          initiative_id?: number | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "type_task_initiative_id_fkey"
            columns: ["initiative_id"]
            isOneToOne: false
            referencedRelation: "initiative"
            referencedColumns: ["initiative_id"]
          }
        ]
      }
      user_initiative: {
        Row: {
          created_at: string | null
          initiative_id: number
          soft_delete: boolean | null
          status: Database["public"]["Enums"]["user_initiative_status"] | null
          team_id: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          initiative_id: number
          soft_delete?: boolean | null
          status?: Database["public"]["Enums"]["user_initiative_status"] | null
          team_id?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          initiative_id?: number
          soft_delete?: boolean | null
          status?: Database["public"]["Enums"]["user_initiative_status"] | null
          team_id?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_initiative_initiative_id_fkey"
            columns: ["initiative_id"]
            isOneToOne: false
            referencedRelation: "initiative"
            referencedColumns: ["initiative_id"]
          },
          {
            foreignKeyName: "user_initiative_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "user_initiative_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      users: {
        Row: {
          country_id: number | null
          email: string | null
          first_name: string | null
          gender: Database["public"]["Enums"]["user_gender"] | null
          last_name: string | null
          password: string | null
          status: Database["public"]["Enums"]["user_status"] | null
          user_id: string
        }
        Insert: {
          country_id?: number | null
          email?: string | null
          first_name?: string | null
          gender?: Database["public"]["Enums"]["user_gender"] | null
          last_name?: string | null
          password?: string | null
          status?: Database["public"]["Enums"]["user_status"] | null
          user_id: string
        }
        Update: {
          country_id?: number | null
          email?: string | null
          first_name?: string | null
          gender?: Database["public"]["Enums"]["user_gender"] | null
          last_name?: string | null
          password?: string | null
          status?: Database["public"]["Enums"]["user_status"] | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "country"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      initiative_for_gender: "men" | "female" | "mix"
      initiative_status:
        | "announcement"
        | "preparing"
        | "registrations"
        | "organize student"
        | "execution"
        | "completed"
        | "postponed"
      notification_status: "read" | "unread"
      task_initiative_status: "solve" | "unsolved" | "pending"
      user_gender: "men" | "female"
      user_initiative_status: "pending" | "accepted" | "refused"
      user_status: "active" | "deactivate"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never

