import { supabase } from './apiSupabase';

export async function getAllOrders() {

      let { data: orders, error } = await supabase
            .from('orders')
            .select('*');
      if (error) {
            console.log(error.message);
            return null;
      }
      return orders;
}

export async function setDelivered(id) {

      const { data, error } = await supabase
            .from('orders')
            .update({ delivered: true })
            .eq('id', id)
            .select()
      if (error) {
            console.log(error.message);
            return null;
      }
      return data;
}

export async function getOrder({ id: selectedId }) {
      let { data: order, error } = await supabase
            .from('orders')
            .select('*')
            .eq('id', selectedId);
      if (error) {
            console.log(error.message);
            return null;
      }
      return order;
}

export async function registerOrder(orderData) {

      const { data, error } = await supabase
            .from('orders')
            .insert([
                  orderData,
            ])
            .select()
      if (error) {
            console.log(error.message);
            return null;
      }
      return data;
}