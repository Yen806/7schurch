import { createClient } from "@supabase/supabase-js";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const supabase = createClient(baseUrl, apiKey)

export default supabase