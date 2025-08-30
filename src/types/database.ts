// Database type definitions
// These will be auto-generated from your Supabase schema

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  created_at: string;
  updated_at?: string;
}

export interface User {
  id: string;
  email: string;
  created_at: string;
  updated_at?: string;
}

// Add more table types as you create them
export type Tables = {
  todos: Todo;
  users: User;
};