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
  SUPABASE_URL: "https://xxxxxxxxxxxxxxxxxxxx.supabase.co",
  SUPABASE_ANON_KEY: "TEMPEL_ANON_KEY_DI_SINI",
  LOGIN_GOOGLE: false   // ubah ke true bila login Google sudah diaktifkan di Supabase > Authentication > Providers
};
