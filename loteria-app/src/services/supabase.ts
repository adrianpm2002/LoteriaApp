import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseAnonKey = 'your-anon-key';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getListasLoteria = async () => {
    const { data, error } = await supabase
        .from('listas_loteria')
        .select('*');
    if (error) throw error;
    return data;
};

export const addListaLoteria = async (lista) => {
    const { data, error } = await supabase
        .from('listas_loteria')
        .insert([lista]);
    if (error) throw error;
    return data;
};

export const deleteListaLoteria = async (id) => {
    const { data, error } = await supabase
        .from('listas_loteria')
        .delete()
        .eq('id', id);
    if (error) throw error;
    return data;
};

export default supabase;