# Contributing to Synapse-React-Client

## Code Contributions

### Setup

[vscode](https://code.visualstudio.com/) should be used for development. A few extensions will be needed -

- The [eslint](https://github.com/Microsoft/vscode-eslint) extension, which is a js linter and rough style guide.
- The [prettier](https://github.com/prettier/prettier) extension, which is a more opininiated js linter. You will need to ensure you have vscode configured to format on saving by modifying ,.vscode/setting.json to include the line `"editor.formatOnSave": true`. See [here](https://code.visualstudio.com/updates/v1_6#_format-on-save) for more details.

### Git Workflow

1. Fork this repository
2. Create your feature branch, if applicable name it after the specific JIRA issue being fixed.
3. Try to keep commits organized by `squashing` closely related commits. If it makes sense format your commit in the following way: `<type>(<JIRA>): <subject><BLANK LINE><body> or link to the JIRA` [^1] .
4. Create a pull request against `develop` from your forked branch.
5. Ensure someone else review's the pull request and that person should be the one to merge the PR.

### Development Guide

- Prefer react hooks to class components
- This codebase packages itself as a UMD bundle using [rollup](https://rollupjs.org/guide/en/), one quirk of the rollup process is needing imports in a certain way. Note - not all components are exported as part of the UMD bundle - only those in [rollup.index.ts](./src/lib/rollup.index.ts). Imports should (if possible) be made in the form -

  `import <submodule> from '<package-name>/<submodule>'`

  instead of:

  `import { <submodule> } from 'package'`

  e.g `import ModalHeader from 'react-bootstrap/ModalHeader`
  
 [^1]:commit types adopted from [angular guide](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit):
 - build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
 - ci: Changes to our CI configuration files and scripts (example: rollup)
 - docs: Documentation only changes
 - feat: A new feature
 - fix: A bug fix
 - perf: A code change that improves performance
 - refactor: A code change that neither fixes a bug nor adds a feature
 - style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
 - test: Adding missing tests or correcting existing tests
 - css: visual changes only
 
