import { supabase } from "./apiSupabase";

export async function getHomeItemsData() {
      let { data, error } = await supabase
            .from('homeItems')
            .select("*")
      if (error) {
            console.log(error.message)
      }
      return data;
}