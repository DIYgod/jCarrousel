# jCarrousel

A jQuery Plugin to make a powerful 3D slider

----

## Introduction

Based on `jquery.gallery.js` from `Pedro Botelho`

[Detail Introduction](http://www.anotherhome.net/2063)

[Demo](http://www.anotherhome.net/file/jCarrousel)

## How it works

The following HTML structure is used for the carrousel:


```
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
```

And this is how the gallery is initialized:

```
$('#dg-container').gallery();
```

## Options

The following options are available:

```
current		: 0,	
// index of current item

autoplay	: false,
// slideshow on / off

interval	: 2000  
// time between transitions
```

## License

Free to use under the MIT license.