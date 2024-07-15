document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('preferencesForm');
    const fontsizeInput = document.getElementById('fontsize');
    const fontcolorInput = document.getElementById('fontcolor');

    // Function to get cookie value by name
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Load preferences from cookies and apply them
    const savedFontsize = getCookie('fontsize');
    const savedFontcolor = getCookie('fontcolor');
    if (savedFontsize) {
        document.documentElement.style.setProperty('--fontsize', `${savedFontsize}px`);
        fontsizeInput.value = savedFontsize;
    }
    if (savedFontcolor) {
        document.documentElement.style.setProperty('--fontcolor', savedFontcolor);
        fontcolorInput.value = savedFontcolor;
    }

    // Save preferences to cookies on form submit
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const fontsize = fontsizeInput.value;
        const fontcolor = fontcolorInput.value;

        document.cookie = `fontsize=${fontsize}; path=/; max-age=31536000`; // 1 year
        document.cookie = `fontcolor=${fontcolor}; path=/; max-age=31536000`; // 1 year

        document.documentElement.style.setProperty('--fontsize', `${fontsize}px`);
        document.documentElement.style.setProperty('--fontcolor', fontcolor);
    });
});