/** @type {import('next').NextConfig} */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack: (config, { isServer }) => {
    // SVG loader configuration
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // CSS and SCSS loader configuration
    if (!isServer) {
      config.module.rules.push({
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      });

      // MiniCssExtractPlugin 추가
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: "static/css/[contenthash].css",
          chunkFilename: "static/css/[contenthash].css",
        })
      );

      // CSS 최소화 및 코드 분할 플러그인 추가 (단, 서버에서는 불필요)
      config.optimization.minimizer.push(new TerserPlugin());
    }

    return config;
  },
};

module.exports = nextConfig;
