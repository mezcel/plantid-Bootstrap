# plantid-Bootstrap
### A scaled down bootstrap version of a similar C# plant identification app I made a while back.

I use TaffyDB as my "no"sql ER workaround

## Tax Limitation
* For simplicity I only Query the 'TOP' of the leaf. Proper leaf ID requires examination of the bottom as well.

## Dev Status:
* I restructured the DB mgnt... again
    * In my opinion, the .NET version was the easiest, quickest, and most reliable versions
    * the .NET version even has more features, and the features work and is stable
    * the html web browser version is the better looking and the lighter weight though
* I converted many of my process obj to functions obj
* I now use ```localStorace``` as a pivot point while letting functions handle local data Manipulation
    * ```localStorage``` is intended to simulate a dedicated ```NoSql DB``` or some other "less risky" virtual server
* I still need a subtractive filter, right now it encourages an additive approach
* The ER is fine, but I just discovered the Morphology records in the Demo needs to be fixed
    * i mismatched my hand written data entry
    * this is a usecase not a legit bio-app... yet
    * this is a quick... yet tedious fix

## Note:
* this seems like a usable nice stop point

## Dependencies:
* GUI - Bootstrap
* DB - JS/JSON
* query Engine - TaffyDB - [taffydb](http://taffydb.com/)
* easy fix to remove array duplicates - [underscorejs](http://underscorejs.org/#uniq)

## Demo:

> [Youtube](https://www.youtube.com/watch?v=d6cYrqyCk4o) this was a demo on the first test run

### Edit and Run Script:
Github has the most up to date version. The other versions are sandboxes for anyone who want to tinker with the code.

The Github version is up to date and works as intended.

> These demos are old and contain the old bugs. But it is responsive. It just doesn't yield the correct Query
* [Codeply](https://www.codeply.com/view/1JXIluLDW5)
* [Codepen](https://codepen.io/mezcel/pen/gRrjXP/)
