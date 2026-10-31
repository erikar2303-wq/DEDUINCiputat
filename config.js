/* =====================================================================
   KONFIGURASI KERTAS KERJA POKJA — isi 2 nilai dari Supabase:
   Supabase > Project Settings > API (atau Data API):
     - Project URL            -> SUPABASE_URL
     - anon / publishable key -> SUPABASE_ANON_KEY
   Kunci "anon" memang aman diletakkan di sini: data tetap dilindungi
   aturan akses (RLS) — hanya email anggota Pokja yang dapat membaca/mengubah.
   JANGAN PERNAH menaruh kunci "service_role" / "secret" di berkas ini.
   ===================================================================== */
window.KK_CONFIG = {
  SUPABASE_URL: "https://pnlrtmvaylnzwysxuiav.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6...(panjang, sampai habis)",
  LOGIN_GOOGLE: false
};
