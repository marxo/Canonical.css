Package.describe({
    summary: "Lightweight CSS normalization for modern browsers.",
    version: "2.0.0",
    name: "marxo:canonical.css",
    git: "https://github.com/marxo/canonical.css.git",
});

Package.onUse(function(api) {
    api.versionsFrom('0.9.0');
    api.addFiles('canonical.css', 'client');
});