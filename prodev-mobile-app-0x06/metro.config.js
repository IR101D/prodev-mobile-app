// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// ✅ Enable NativeWind support
config.resolver.assetExts.push("cjs");

module.exports = config;

