import { supabase } from "./apiSupabase";

export async function getItemData(id) {

      let { data, error } = await supabase
            .from('Mobiles')
            .select("*")
            .eq('id', id)
      if (error) {
            console.log(error.message)
      }
      return data;
}