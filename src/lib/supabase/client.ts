import { createClient } from '@supabase/supabase-js'

export function supabaseClient() {
  return createClient(
    import.meta.env.VITE_SUPABASE_URL!,
    import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY!
  )
}