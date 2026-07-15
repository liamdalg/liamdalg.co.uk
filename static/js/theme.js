(() => {
    const toggle = document.getElementById("theme-toggle");
    toggle?.addEventListener("click", () => {
        const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
        localStorage.setItem("theme", next);
        document.documentElement.classList.toggle("dark", next === "dark");
    });
})();
