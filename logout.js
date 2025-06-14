document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.clear();
      if (window.supabase && window.supabase.auth) {
        window.supabase.auth.signOut();
      }
      window.location.href = "index.html";
    });
  }
});