# Contributing to Synapse-React-Client

## Code Contributions

### Setup

[vscode](https://code.visualstudio.com/) should be used for development. A few extensions will be needed -

- The [eslint](https://github.com/Microsoft/vscode-eslint) extension, which is a js linter and rough style guide.
- The [prettier](https://github.com/prettier/prettier) extension, which is a more opininiated js linter. You will need to ensure you have vscode configured to format on saving by modifying ,.vscode/setting.json to include the line `"editor.formatOnSave": true`. See [here](https://code.visualstudio.com/updates/v1_6#_format-on-save) for more details.

### Git Workflow

1. Fork this repository
2. Create your feature branch, if applicable name it after the specific JIRA issue being fixed.
3. Create a pull request against `develop` from your forked branch.
4. To keep commits organized consider `squashing` closely related commits (optional). When it makes sense format your commit in the following way: `(<JIRA>): <subject><BLANK LINE><body or link to the JIRA if applicable (optional)>`.
5. Ensure someone else review's the pull request and that person should be the one to merge the PR.

### Development Guide

- Prefer react hooks to class components
- This codebase packages itself as a UMD bundle using [rollup](https://rollupjs.org/guide/en/), one quirk of the rollup process is needing imports in a certain way. Note - not all components are exported as part of the UMD bundle - only those in [rollup.index.ts](./src/lib/rollup.index.ts). Imports should (if possible) be made in the form -

  `import <submodule> from '<package-name>/<submodule>'`

  instead of:

  `import { <submodule> } from 'package'`

  e.g `import ModalHeader from 'react-bootstrap/ModalHeader`



  #### CSS

  Styles are broken down across multiple Sass partials.
```
    abstracts 
    |
    |-_functions
    |
    |-_mixins
    |
    |-_variables
    |
    base
    |
    |-_base  -- mainly element selectors and their pseudo-classes
    |
    |-_core  -- legacy styles and will be refactored and removed *DO NOT ADD TO IT*
    |
    |-_fonts -- @font-face declarations
    |
    |-_helpers -- helper classes that apply consistent styles to any element [1]
    |             
    components -- each component's stylesheet is a file in components directory
    |
    |-_all -- component stylesheets will be imported into _all
    |
    |-_some-component -- components use a BEM methdology [2].
 ``` 
[1]: For example, we can create a responsive, top margin helper class in _helpers.scss:
<pre>
    .h-margin-top {
        margin-top: 16px;
        @media (min-width: 720px) {   
            margin-top: 24px;
        } 
    }
</pre>
[2]: For component styles we use [BEM naming methodology](http://getbem.com/naming/) with one   
exception: **Top level blocks are PascalCase.**

##### Summary

 - Components are blocks: match the top-level tag’s class name with the name of your component (e.g. UserProfile.jsx, className="UserProfile")
 - Element names refer to the component: every class name within a component should start with the name of the component and two underscores (e.g. className="UserProfile__icon")
 - Modifiers are added to blocks, elements: add conditional styles by appending a modifier class that refers to the element being modified (e.g. className="UserProfile--disabled", className="UserProfile__icon--round)  

 ([courtesy of this article](https://medium.com/@seanmcp/how-and-when-to-use-bem-in-react-edabad2b805a))