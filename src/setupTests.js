import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import 'raf/polyfill' // polyfill for requestAnimationFrame
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect'
import crypto from 'crypto'
// MarkdownSynapse dependencies below --
// When using the component in production it relies on these imports being globals,
// however, the testing environment doesn't have a browser loading CDNs, so we
// import it below. This also means that these dependencies are required in package.json
global.markdownit = require('markdown-it')
global.markdownitSynapse = require('markdown-it-synapse')
global.markdownitSub = require('markdown-it-sub-alt')
global.markdownitSup = require('markdown-it-sup-alt')
global.markdownitCentertext = require('markdown-it-center-text')
global.markdownitSynapseHeading = require('markdown-it-synapse-heading')
global.markdownitSynapseTable = require('markdown-it-synapse-table')
global.markdownitStrikethroughAlt = require('markdown-it-strikethrough-alt')
global.markdownitContainer = require('markdown-it-container')
global.markdownitEmphasisAlt = require('markdown-it-emphasis-alt')
global.markdownitInlineComments = require('markdown-it-inline-comments')
global.markdownitBr = require('markdown-it-br')
global.sanitizeHtml = require('sanitize-html')
global.markdownitMath = require('markdown-it-synapse-math')

configure({ adapter: new Adapter() })
// Synapse API calls may take longer than 5s (typically if a dependent call is taking much longer than normal)
jest.setTimeout(30000)

// JSDOM doesn't support createObjectURL and revokeObjectURL, so we shim them
// https://github.com/jsdom/jsdom/issues/1721
window.URL.createObjectURL = jest
  .fn()
  .mockReturnValue('blob:mockBlobUrlConfiguredInTestSetup')
window.URL.revokeObjectURL = jest.fn()

// crypto.getRandomValues polyfill for JSDOM
Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: arr => crypto.randomBytes(arr.length),
  },
})
//  RUNS  src/__tests__/lib/containers/synapse_form_wrapper/SynapseFormSubmissionsGrid.test.tsx
//  RUNS  src/__tests__/lib/containers/ModalDownload.test.tsx
//  RUNS  src/__tests__/lib/containers/Login.test.tsx
