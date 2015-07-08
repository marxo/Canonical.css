Package.describe({
  summary: "Lightweight CSS normalization for modern browsers.",
  version: "1.0.8",
  name: "marxo:canonical.css",
  git: "https://github.com/marxo/canonical.css.git",
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.addFiles('canonical.min.css', 'client');
});
