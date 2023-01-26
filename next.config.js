/** @type {import('next').NextConfig} */
const path = require("path");
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: process.env.NODE_ENV === "development",
  buildExcludes: [/middleware-manifest.json$/],
  maximumFileSizeToCacheInBytes: 4000000,
});
const withTM = require("next-transpile-modules")([]);
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const { redirect } = require("next/dist/server/api-utils");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    legacyBrowsers: false,
    nextScriptWorkers: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import 'styles/_functions';`,
  },
  images: {
    // ADD in case you need to import SVGs in next/image component
    // dangerouslyAllowSVG: true,
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // domains: ['images.ctfassets.net', 'assets.studiofreight.com'],
    // formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
  webpack: (config, options) => {
    const { dir } = options;

    config.module.rules.push(
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              memo: true,
              dimensions: false,
              svgoConfig: {
                multipass: true,
                plugins: [
                  "removeDimensions",
                  "removeOffCanvasPaths",
                  "reusePaths",
                  "removeElementsByAttr",
                  "removeStyleElement",
                  "removeScriptElement",
                  "prefixIds",
                  "cleanupIDs",
                  {
                    name: "cleanupNumericValues",
                    params: {
                      floatPrecision: 1,
                    },
                  },
                  {
                    name: "convertPathData",
                    params: {
                      floatPrecision: 1,
                    },
                  },
                  {
                    name: "convertTransform",
                    params: {
                      floatPrecision: 1,
                    },
                  },
                  {
                    name: "cleanupListOfValues",
                    params: {
                      floatPrecision: 1,
                    },
                  },
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(graphql|gql)$/,
        include: [dir],
        exclude: /node_modules/,
        use: [
          {
            loader: "graphql-tag/loader",
          },
        ],
      }
    );

    config.plugins.push(new DuplicatePackageCheckerPlugin());

    return config;
  },
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

module.exports = () => {
  const plugins = [withPWA, withTM, withBundleAnalyzer];
  return plugins.reduce((acc, plugin) => plugin(acc), {
    ...nextConfig,
  });
};
