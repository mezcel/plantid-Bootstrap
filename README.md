# plantid-Bootstrap
### A scaled down bootstrap version of a similar [C# plant identification app](https://github.com/mezcel/plantid) I made a while back.

I use TaffyDB as my "nosql" ER-like workaround

## Tax Limitation
* For simplicity I only Query the 'TOP' of the leaf. Proper leaf ID requires examination of the bottom as well.
* I left pot the Apex and Base too
* The C# version has the full version

## Dev Status:
* I restructured the DB mgnt... again
    * In my opinion, the .NET ```C#``` version was the easiest, quickest, and most reliable versions
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
* Enclosed is a Demo Proof of concept testbench JSON titled ```fieldTestExample.json```
    * The json was made using this app
    * I did it really quick only using my eyes and memory of biology terms
    * it is not intended to resemble the reality of taxonomic observation. Sometimes in real situations the same species is seen having different yet similar traits. Over many samples, the trends and averages tend to normalize consistency.
    * I will continue to add a few more plants, but for now the following species are observed:
        * ACRU
        * ASAN
        * CAAL
        * CAAM
        * COLF
        * DIVI
        * LIST
        * MAAN

## Note:

* this seems like a usable nice stop point

## Dependencies:

* GUI - Bootstrap 3 [Bootstrap 3.4.1](https://getbootstrap.com/docs/3.4/getting-started/#download)
* Database - JSON
* Platform - Jquery
* Database Engine - TaffyDB - [taffydb](http://taffydb.com/)
* fix array duplicates - [underscorejs](http://underscorejs.org/#uniq)
* DOM Textarea configuration - [autosize.js](http://www.jacklmoore.com/autosize/)

#### External Resources Source Code:
```sh
## jquery 3.4.1
git clone https://github.com/jquery/jquery-dist.git

## underscore.js
git clone https://github.com/jashkenas/underscore.git

## taffydb
git clone https://github.com/typicaljoe/taffydb.git

## autosize.js
git clone https://github.com/jackmoore/autosize.git

## Bootstrap 3.4.1
wget https://github.com/twbs/bootstrap/releases/download/v3.4.1/bootstrap-3.4.1-dist.zip

```

## Outdated Demo:

> [Youtube](https://www.youtube.com/watch?v=d6cYrqyCk4o) this was a demo on the first test run

### Edit and Run Script:
Github has the most up to date version. The other versions are sandboxes for anyone who want to tinker with the code.

The Github version is up to date and works as intended.

> These demos are old and contain the old bugs. But it is responsive. It just doesn't yield the correct Query
* [Codeply](https://www.codeply.com/view/1JXIluLDW5)
* [Codepen](https://codepen.io/mezcel/pen/gRrjXP/)
