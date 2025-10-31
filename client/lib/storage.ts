import { createClient, SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string | undefined;
const SUPABASE_BUCKET = process.env.NEXT_PUBLIC_SUPABASE_BUCKET as string | undefined;

let cachedClient: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
  if (cachedClient) return cachedClient;
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error('Supabase env vars missing. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.');
  }
  cachedClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return cachedClient;
}

export function getSupabaseBucket(): string | undefined {
  return SUPABASE_BUCKET;
}

export async function uploadImageToSupabase(file: File, folder: string = 'blogs') {
  if (!SUPABASE_BUCKET) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_BUCKET. Please check your .env.local file.');
  }
  
  try {
    const supabase = getSupabaseClient();
    const fileExt = file.name.split('.').pop();
    const fileName = `${crypto.randomUUID()}.${fileExt}`;
    const filePath = `${folder}/${fileName}`;

    const { error } = await supabase.storage.from(SUPABASE_BUCKET).upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
      contentType: file.type,
    });

    if (error) {
      // Provide helpful error messages for common issues
      if (error.message.includes('row-level security') || error.message.includes('new row violates')) {
        throw new Error('Storage upload blocked by Row Level Security. Please make your Supabase bucket PUBLIC or set up proper RLS policies. See SUPABASE_SETUP.md for instructions.');
      }
      if (error.message.includes('not found')) {
        throw new Error(`Bucket "${SUPABASE_BUCKET}" not found. Please create it in your Supabase dashboard.`);
      }
      throw new Error(`Upload failed: ${error.message}`);
    }

    const { data } = supabase.storage.from(SUPABASE_BUCKET).getPublicUrl(filePath);
    return { publicUrl: data.publicUrl, path: filePath };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Unknown error occurred during upload');
  }
}


