const withTM = require('next-transpile-modules')(['@ionic/react']);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otras opciones de configuración que puedas tener...
};

module.exports = withTM(nextConfig);
