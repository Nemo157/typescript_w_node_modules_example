# Overview

This repository contains an example set of packages for proposed solution to
[Microsoft/typescript#247](https://github.com/Microsoft/TypeScript/issues/247).
Each package uses a different development standard, but by making tsc lenient on
what it accepts it should be possible for all of these standards to nicely
interact.

## Quick Start

    pushd waiter
    npm install
    npm run build
    popd

    pushd cook
    npm install
    npm run build
    popd

    pushd cafe
    npm install
    npm run build
    node src/index.js
    popd

## Rebuilding

    rm -r */node_modules
    # Follow Quick Start above

# Details

## Dependency Tree

    cafe
    ├── when@3.3.1
    ├── waiter
    │   ├── when@3.4.6
    │   └── items
    ├── cook
    │   ├── when@3.3.1
    │   └── items
    └── barista
        ├── when@3.3.1
        └── items

## Standards

### items

This package was developed by Botolf, he prefers to work in JavaScript, but as
his teammates generally work in TypeScript he's kind enough to provide a
TypeScript declaration file for the package

### waiter

This package was developed by Elli, she works exclusively in TypeScript but
distributes her package in JavaScript along with source maps and TypeScript
declaration files for maximum compatibility with her colleagues work.

### cook

This package was developed by Cecil, he also works exclusively in TypeScript but
unlike Elli he believes TypeScript is the one true way and only provides a
package of TypeScript source files.  If they need translating to JavaScript to
be used by someone else, well they should do that at the latest point possible.

### barista

This package was developed by Capucine, she alternatively works in TypeScript
and JavaScript depending on the most useful language for the project. Like Cecil
she believes that when you're working in TypeScript it's best to actually work
in TypeScript up until the point where you _must_ translate to JavaScript.
Consequentially she distributes this package with both the compiled JavaScript
files and the original TypeScript files so that users of the package can choose
themselves.
