// theme.js - applies dark theme globally based on localStorage
(function() {
  // Apply theme on page load
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  // Set initial theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);

  // Sync toggle if present
  document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      // Set toggle state based on theme
      themeToggle.checked = (localStorage.getItem('theme') === 'dark');
      // Listen for toggle changes
      themeToggle.addEventListener('change', function() {
        const newTheme = themeToggle.checked ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
      });
    }
  });
})();
