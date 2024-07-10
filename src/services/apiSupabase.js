
import { createClient } from '@supabase/supabase-js'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0Z3h5Y29ndmx5Y2ZlbmN1cWRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzMTc5ODgsImV4cCI6MjAxMzg5Mzk4OH0.lao3nvqnVIBZgka4UrZleZcuqMeduYEOgF8FmF3Cq_o'
const supabaseUrl = 'https://ltgxycogvlycfencuqdj.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY

export const supabase = createClient(supabaseUrl, SUPABASE_KEY)