# ~~todo touch~~
## DEPRECATED
Not maintained anymore, but left for reference

[![Greenkeeper badge](https://badges.greenkeeper.io/marcusasplund/hyperapp-todo.svg)](https://greenkeeper.io/)
[![GitHub issues](https://img.shields.io/github/issues/marcusasplund/hyperapp-todo.svg)](https://github.com/marcusasplund/hyperapp-todo/issues)
[![Build status](https://travis-ci.org/marcusasplund/hyperapp-todo.svg?branch=master)](https://travis-ci.org/marcusasplund/hyperapp-todo)
[![dependencies](https://david-dm.org/marcusasplund/hyperapp-todo.svg)](https://david-dm.org/marcusasplund/hyperapp-todo)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4a4f8aba60a64a50b7075f438c6a46e6)](https://www.codacy.com/app/marcusasplund/hyperapp-todo?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=marcusasplund/hyperapp-todo&amp;utm_campaign=Badge_Grade)

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[hyperapp.js](https://github.com/hyperapp/hyperapp) CRUD todo, test with [hyper-tap](https://github.com/rbiggs/hyper-tap) touch support


Offline support with service worker

# [demo](https://pap.as/hyperapp/todotouch/)


## installation

````bash
    $ git clone https://github.com/marcusasplund/hyperapp-todo.git

    $ cd hyperapp-todo-simple

    $ yarn

    $ yarn start
````

Open up application at http://localhost:4000/ in browser

## build a release

````bash
    $ yarn run build

````
This will generate a release directory with your minified/rev'd assets.


## serve static

````bash
    $ yarn run serve

````

This will use serve to statically serve your app from the release directory.

## Credits

The rollup and fly config is based on https://github.com/tzellman/hyperapp-boilerplate
