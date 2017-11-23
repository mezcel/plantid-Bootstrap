# plantid-Bootstrap
### A scaled down bootstrap version of a similar C# plant identification app I made a while back.

I use TaffyDB as my "no"sql ER workaround

## Dev Status:
* I restructured the DB mgnt. It now uses a messy cross DOM getter/setter-like local storage sharing.
* The add Morphology is a bit sticky
* I can now import a JSON file as well as scripted Json embedded object.
* I still need a subtractive filter, right now it encourages an additive approach

## Dependencies:
* GUI - Bootstrap
* DB - JS/JSON
* query Engine - TaffyDB - [taffydb](http://taffydb.com/)
* easy fix to remove array duplicates - [underscorejs](http://underscorejs.org/#uniq)

## Demo:

> [Youtube](https://www.youtube.com/watch?v=d6cYrqyCk4o)

### Edit and Run Script:
Github has the most up to date version. The other versions are sandboxes for anyone who want to tinker with the code.

* [Codeply](https://www.codeply.com/view/1JXIluLDW5)
* [Codepen](https://codepen.io/mezcel/pen/gRrjXP/)
