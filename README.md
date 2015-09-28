# jCarrousel

A jQuery Plugin to make a powerful 3D slider

----

## Introduction

Based on [`jquery.gallery.js`](http://tympanus.net/codrops/2012/02/06/3d-gallery-with-css3-and-jquery/) from `Pedro Botelho`

[详情及中文说明](http://www.anotherhome.net/2063)

[Demo](http://www.anotherhome.net/file/jCarrousel)

## How it works

The following HTML structure is used for the carrousel:


```
<link rel="stylesheet" href="css/carrousel.css"/>
<!-- ... -->
<div class="banner">
    <section id="dg-container" class="dg-container">
        <div class="dg-wrapper">
            <a href="#" link="http://www.anotherhome.net">
                <img src="images/1.jpg">
            </a>
            <a href="#" link="http://www.anotherhome.net">
                <img src="images/2.jpg">
            </a>
            <!-- ... -->
        </div>
        <ol class="button" id="lightButton">
            <li index="0">
            <li index="1">
            <!-- ... -->
        </ol>
        <nav>
            <span class="dg-prev"></span>
            <span class="dg-next"></span>
        </nav>
    </section>
</div>
<!-- ... -->
<script src="js/jquery.js"></script>
<script src="js/carrousel.js"></script>
```

And this is how the carrousel is initialized:

```
$('#dg-container').carrousel({
    current: 0,
    autoplay: true,
    interval: 3000
});
```

## Options

The following options are available:

```
// index of current item
current		: 0,

// slideshow on / off
autoplay	: false,

// time between transitions
interval	: 2000
```

## API

+ `$('#dg-container').carrousel('play');` -- play
+ `$('#dg-container').carrousel('stop');` -- stop
+ `$('#dg-container').carrousel('next');` -- switch to the next picture
+ `$('#dg-container').carrousel('prev');` -- switch to the previous picture
+ `$('#dg-container').carrousel(3);`      -- switch to the fourth picture

## LICENSE

(MIT License)

Copyright (c) DIYgod

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.