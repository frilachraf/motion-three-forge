import { supabase } from '@/lib/supabase';

// Generic helper functions for common Supabase operations

export async function fetchTableData<T>(
  table: string,
  select: string = '*',
  filters?: Record<string, any>
) {
  try {
    let query = supabase.from(table).select(select);

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        query = query.eq(key, value);
      });
    }

    const { data, error } = await query;

    if (error) throw error;
    return data as T[];
  } catch (error) {
    console.error(`Error fetching ${table}:`, error);
    throw error;
  }
}

export async function insertRecord<T>(table: string, record: Partial<T>) {
  try {
    const { data, error } = await supabase
      .from(table)
      .insert(record)
      .select()
      .single();

    if (error) throw error;
    return data as T;
  } catch (error) {
    console.error(`Error inserting into ${table}:`, error);
    throw error;
  }
}

export async function updateRecord<T>(
  table: string,
  id: string | number,
  updates: Partial<T>
) {
  try {
    const { data, error } = await supabase
      .from(table)
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data as T;
  } catch (error) {
    console.error(`Error updating ${table}:`, error);
    throw error;
  }
}

export async function deleteRecord(table: string, id: string | number) {
  try {
    const { error } = await supabase
      .from(table)
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error(`Error deleting from ${table}:`, error);
    throw error;
  }
}

// Real-time subscription helper
export function subscribeToTable(
  table: string,
  callback: (payload: any) => void,
  filters?: Record<string, any>
) {
  let subscription = supabase
    .channel(`${table}_changes`)
    .on('postgres_changes', 
      { 
        event: '*', 
        schema: 'public', 
        table: table,
        ...(filters && { filter: Object.entries(filters).map(([key, value]) => `${key}=eq.${value}`).join(',') })
      }, 
      callback
    )
    .subscribe();

  return () => {
    subscription.unsubscribe();
  };
}