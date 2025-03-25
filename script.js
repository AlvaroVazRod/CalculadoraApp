document.querySelectorAll('input[name="theme"]').forEach(input => {
    input.addEventListener("change", () => {
        document.body.className = `theme-${input.value}`;
    });
});
