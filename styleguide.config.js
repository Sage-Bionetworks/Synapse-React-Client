const path = require('path')
const pkg = require('./package.json');
const homePageComponents = ['src/lib/containers/home_page/**/[A-Z]*.tsx', 'src/lib/containers/widgets/themes-plot/**/ThemesPlot.tsx', 'src/lib/containers/**/UserCardListRotate.tsx', 'src/lib/containers/**/RssFeedCards.tsx', 'src/lib/containers/**/TableFeedCards.tsx', 'src/lib/containers/**/UpsetPlot.tsx', 'src/lib/containers/**/MarkdownSynapse.tsx']
const ignoreComponents = ['**/*.Mobile.tsx','**/*.Desktop.tsx']

module.exports = {
    title: `Synapse React Components v${pkg.version}`,
    tocMode: 'collapse',
    pagePerSection: true,
    skipComponentsWithoutExample: true,
    styleguideComponents: {
        Wrapper: path.resolve(__dirname, 'src/lib/containers/StyleGuidistComponentWrapper'),
    },
    sections: [
        {
            name: 'Introduction',
            content: 'introduction.md'
        },
        {
            name: 'Login/Logout',
            description: 'Content depends on if you are logged in',
            components: ['src/lib/containers/**/Login.tsx','src/lib/containers/**/Logout.tsx'],
        },
        {
            name: 'Experimental Mode',
            description: 'For components that are in experimental mode',
            components: 'src/lib/containers/**/ExperimentalMode.tsx'
        },
        {
            name: 'Home Page',
            //   content: 'docs/homepage.md'
            description: 'Collection of components used in portal home pages',
            components: homePageComponents,
            ignore: ignoreComponents
        },        
        {
            name: 'Other Components',
            //   content: 'docs/all.md'
            components: 'src/lib/containers/**/[A-Z]*.tsx',
            ignore: [...ignoreComponents, ...homePageComponents]
        },
        {
            name: 'Demos and non-components',
            description: 'Demos or examples that are useful to display here that are not components.',
            components: 'src/demo/containers/**/[A-Z]*.tsx',
        },
      ],

    require: [
        path.join(__dirname, 'styleguide.setup.js'),
        path.join(__dirname, 'styleguide.setup.css'),
        path.join(__dirname, 'src/demo/style/DemoStyle.css'),
    ],
    theme: {
        maxWidth: 1300,
        color: {
            link: 'rgb(64, 123, 160)',
            linkHover: 'rgb(64, 123, 160)'
        },
        fontFamily: {
            base: '"Lato", Helvetica, sans-serif'
        },
    },
    template: {
        favicon: 'https://sage-bionetworks.github.io/Synapse-React-Client/favicon.png',
        head: {
          scripts: [
            {
                src:"https://cdn.jsdelivr.net/npm/markdown-it@8.4.2/dist/markdown-it.min.js",
            },
            {
                src:"https://unpkg.com/markdown-it-synapse@1.1.1/dist/markdown-it-synapse.min.js",
            },
            {
                src:"https://unpkg.com/markdown-it-center-text@1.0.4/dist/markdown-it-center-text.min.js",
            },
            {
                src:"https://unpkg.com/markdown-it-synapse-heading@1.0.1/dist/markdown-it-synapse-heading.min.js",
            },
            {
                src:"https://unpkg.com/markdown-it-synapse-table@1.0.6/dist/markdown-it-synapse-table.min.js",
            },
            {
                src:"https://unpkg.com/markdown-it-strikethrough-alt@1.0.0/dist/markdown-it-strikethrough-alt.min.js",
            },
            {
                src:"https://unpkg.com/markdown-it-emphasis-alt@1.0.8/dist/markdown-it-emphasis-alt.min.js",
            },
            {
                src:"https://unpkg.com/markdown-it-synapse-math@3.0.4/dist/markdown-it-math.min.js",
            },
            {
                src:"https://unpkg.com/markdown-it-sup-alt@1.0.2/dist/markdown-it-sup.min.js",
            },
            {
                src:"https://unpkg.com/markdown-it-sub-alt@1.0.0/dist/markdown-it-sub.min.js",
            },
            {
                src:"https://unpkg.com/markdown-it-inline-comments@1.0.1/dist/markdown-it-inline-comments.min.js",
            },
            {
                src:"https://unpkg.com/markdown-it-br@1.0.0/dist/markdown-it-br.min.js",
            },
            {
                src:"https://cdn.jsdelivr.net/npm/markdown-it-container@2.0.0/dist/markdown-it-container.min.js",
            },
            {
                src:"https://cdn.jsdelivr.net/npm/sanitize-html@1.20.0/dist/sanitize-html.min.js",
            },
            {
                src:"https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.js",
            },
        ],
        links: [
            {
              rel: 'stylesheet',
              href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
            },
            {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css'
            }
          ]
        }
      }
      
}
