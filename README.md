# plantid-Bootstrap
### A scaled down bootstrap version of a similar C# plant identification app I made a while back.

I use TaffyDB as my "no"sql ER workaround

## Dev Status:
* I restructured the DB mgnt... again
    * In my opinion, the .NET version was the easiest, quickest, and most reliable versions
    * the .NET version even has more features, and the features work and is stable
    * the html web browser version is the better looking and the lighter weight though
* I converted many of my process obj to functions obj
* I now use ```localStorace``` as a pivot point while letting functions handle local data Manipulation
    * ```localStorage``` is intended to simulate a dedicated ```NoSql DB``` or some other "less risky" virtual server
* I still need a subtractive filter, right now it encourages an additive approach
* The ER is file, but I just discovered the Morphology records in the Demo needs to be fixed

## Note:
* I messed up the filter query update in the ```morphologyFilter```.html page
* I know the problem is within ```switchFilterQuery()``` with respect to primary and foreign id numbers
* this seems like a nice stop point

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
