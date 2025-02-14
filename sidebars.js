/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
// const sidebars = {
//   // By default, Docusaurus generates a sidebar from the docs folder structure
//   tutorialSidebar: [{ type: "autogenerated", dirName: "." }],
// };

/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const sidebars = {
  quickstarts: [
    {
      type: "doc",
      label: "Overview",
      id: "overview/index",
    },
    {
      type: "doc",
      label: "About",
      id: "about/index",
    },
    {
      type: "doc",
      label: "Get Started",
      id: "get-started/index",
    },
    {
      type: "category",
      label: "Concepts",
      collapsed: false,
      items: [
        "concepts/architecture/index",
        "concepts/authnz/index",
        "api/s3/index",
      ],
    },
    {
      type: "category",
      label: "Buckets",
      items: ["buckets/create-bucket", "buckets/public-bucket"],
    },
    {
      type: "category",
      label: "Objects",
      items: ["objects/caching", "objects/conditionals"],
    },
    {
      type: "category",
      label: "Data Migration",
      items: ["migration/index"],
    },
    {
      type: "category",
      label: "Fly.io",
      items: ["sdks/fly/index"],
    },
    {
      type: "category",
      label: "AWS S3 SDKs",
      link: {
        type: "doc",
        id: "sdks/s3/index",
      },
      items: [
        "sdks/s3/aws-cli",
        "sdks/s3/aws-js-sdk",
        "sdks/s3/aws-go-sdk",
        "sdks/s3/aws-python-sdk",
        "sdks/s3/aws-php-sdk",
        "sdks/s3/aws-elixir-sdk",
        "sdks/s3/aws-ruby-sdk",
        "sdks/s3/aws-net-sdk",
      ],
    },
    {
      type: "doc",
      label: "Pricing",
      id: "pricing/index",
    },
    {
      type: "doc",
      label: "Support",
      id: "support/index",
    },
    {
      type: "category",
      label: "Legal",
      items: ["legal/privacy-policy", "legal/service-terms"],
    },
  ],
};

module.exports = sidebars;
