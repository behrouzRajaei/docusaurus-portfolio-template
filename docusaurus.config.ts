import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {config as dotenvconfig} from "dotenv";

dotenvconfig();

const blogEnabled = Boolean(process.env.BLOG_ENABLED === 'true')

const config: Config = {
  title: 'DSO Live Demo Docs',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  url: "https://behrouzrajaei.github.io",
  baseUrl: "/docusaurus-portfolio-template/",

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap',
      type: 'text/css',
    },
  ],

  organizationName: process.env.GITHUB_ORG,
  projectName: process.env.GITHUB_PROJECT,
  deploymentBranch: process.env.DEPLOYMENT_BRANCH,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'documentation',
          sidebarPath: './sidebars.ts',
          sidebarCollapsible: false,
          sidebarCollapsed: true,
          editUrl: 'https://github.com/spmse/dev-blog-template',
        },

        blog: blogEnabled
          ? {
              showReadingTime: true,
              feedOptions: {
                type: ['rss', 'atom'],
                xslt: true,
              },
              editUrl: 'https://github.com/spmse/dev-blog-template',
              onInlineTags: 'warn',
              onInlineAuthors: 'warn',
              onUntruncatedBlogPosts: 'warn',
            }
          : false,

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    navbar: {
      title: '',
      items: [
        {
          to: '/documentation',
          label: 'Docs',
          position: 'left',
        },
      ],
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['powershell', 'hcl'],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

if (blogEnabled) {
  (config.themeConfig.navbar as any).items.push({
    to: '/blog',
    label: 'Blog',
    position: 'left',
  });

  (config.themeConfig.footer as any).links[2].items.push({
    to: '/blog',
    label: 'Blog',
  });
}

export default config;
