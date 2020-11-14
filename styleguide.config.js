const path = require('path')
const ignoreComponents = ['**/*.Mobile.tsx','**/*.Desktop.tsx', '**/*Demo.tsx',
    '**/FeaturedDataPlots.tsx', '**/QueryPerFacetPlotsCard.tsx', '**/SingleQueryFacetPlotsCards.tsx',
    '**/FacetPlotsCard.tsx', '**/ExpandableContent.tsx', '**/EvaluationRoundEditor.tsx', '**/EvaluationRoundEditorDropdown.tsx',
    '**/EvaluationRoundLimitOptions.tsx', '**/EvaluationRoundLimitOptionsList.tsx'
]
module.exports = {
    title: 'Synapse React Client Component Library',
    tocMode: 'expand',
    pagePerSection: true,
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
            name: 'Home Page',
            //   content: 'docs/homepage.md'
            description: 'Collection of components used in portal home pages',
            ignore: ignoreComponents,
            components: ['src/lib/containers/home_page/**/[A-Z]*.tsx', 'src/lib/containers/widgets/themes-plot/**/ThemesPlot.tsx', 'src/lib/containers/**/UserCardListRotate.tsx', 'src/lib/containers/**/RssFeedCards.tsx', 'src/lib/containers/**/TableFeedCards.tsx', 'src/lib/containers/**/UpsetPlot.tsx', 'src/lib/containers/**/MarkdownSynapse.tsx'],
        },
        // {
        //     name: 'All Components',
        //     //   content: 'docs/all.md'
        //     components: 'src/lib/containers/**/[A-Z]*.tsx',
        //     ignore: ignoreComponents,
        // },
      ],

    require: [
        path.join(__dirname, 'styleguide.setup.js'),
        path.join(__dirname, 'styleguide.setup.css'),
        path.join(__dirname, 'src/lib/style/main.css'),
    ],
    // This works when running the local server, but not when built.
    // styles: {
    //     StyleGuide: {
    //         content: {
    //             maxWidth: 1300
    //         }
    //     }
    // },
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
        ],
          links: [
            {
              rel: 'stylesheet',
              href:
                'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
            }
          ]
        }
      }
}