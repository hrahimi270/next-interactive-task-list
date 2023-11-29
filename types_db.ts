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
      tasks: {
        Row: {
          created_at: string
          id: number
          is_daily: boolean | null
          is_important: boolean | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          is_daily?: boolean | null
          is_important?: boolean | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          is_daily?: boolean | null
          is_important?: boolean | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tasks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
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
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
