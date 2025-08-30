import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a placeholder client when environment variables are missing
const createSupabaseClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase environment variables not found. Please connect to Supabase to enable database functionality.');
    // Return a mock client that won't cause errors
    return {
      from: () => ({
        select: () => Promise.resolve({ data: [], error: null }),
        insert: () => Promise.resolve({ data: null, error: { message: 'Supabase not connected' } }),
        update: () => Promise.resolve({ data: null, error: { message: 'Supabase not connected' } }),
        delete: () => Promise.resolve({ data: null, error: { message: 'Supabase not connected' } }),
      }),
      auth: {
        signUp: () => Promise.resolve({ data: null, error: { message: 'Supabase not connected' } }),
        signIn: () => Promise.resolve({ data: null, error: { message: 'Supabase not connected' } }),
        signOut: () => Promise.resolve({ error: null }),
        getUser: () => Promise.resolve({ data: { user: null }, error: null }),
      },
    } as any;
  }
  
  return createClient(supabaseUrl, supabaseAnonKey);
};

export const supabase = createSupabaseClient();

// Database types (will be auto-generated from your schema)
export type Database = {
  public: {
    Tables: {
      // Add your table types here as you create them
      [key: string]: {
        Row: Record<string, any>;
        Insert: Record<string, any>;
        Update: Record<string, any>;
      };
    };
  };
};