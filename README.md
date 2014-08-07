#FluidFont#

Responsive font made easy with JavaScript. No jQuery required.

##Usage##
* Makes the font within a wrapper responsive. Wrapper must have a defined width.
* All font sizes are in px.
* Known to work in Chrome, FireFox, Safari, and Internet Explorer 9+
* In Internet Explorer 8 only getElementById() works. A workaround for multiple elements is to use querySelectorAll() and loop through the NodeList. See the example at the bottom of the page.

##Syntax##
```
Element.fluidFont(percent , minSize , maxSize);
NodeList.fluidFont(percent , minSize , maxSize);
HTMLCollection.fluidFont(percent , minSize , maxSize);
```

Samples:
```
document.getElementById().fluidFont();
document.getElementsByClassName().fluidFont();
document.getElementsByName().fluidFont();
document.getElementsByTagName().fluidFont();
document.querSelector().fluidFont();
document.querySelectorAll().fluidFont();
```

##Parameters##
**percent** - *Optional. Default: 1.* The ratio between the font size and parent's width. Example: the width is 1000px and font size is 14px so 14/1000=0.014
	fluidFont(0.014);

**minSize** - *Optional. Default: 1px.* The minimum font size. Can be an integer or string. Example 20 or "20px"
	fluidFont(0.014, 20);
	fluidFont(0.014, "20px");
	
**maxSize** - *Optional. Default: infinity.* The maximum font size. Can be an integer or string. Example 100 or "100px"
	fluidFont(0.014, 20, 100);
	fluidFont(0.014, 20, "100px");
	fluidFont(0.014, "20px", 100);
	fluidFont(0.014, "20px", "100px");

##Methods##
setPerc ( *percent* ); //set the ratio of the font size and parent's width

setMin ( *minSize* ); //set the minimum font size

setMax ( *maxSize* ); //set the maximum font size

fluidize(); //fonts are auto-responsive when the window is loaded or resized. You can manually activate it with this

##Exampes##
```
document.getElementById('myId').fluidFont(0.25, 14, 100); //makes the font 25% of the width, a minimum size of 14px, and a maximum of 100px

document.querySelector('#myId').fluidFont(0.17); //makes the font 17% of the width

document.querySelectorAll('.myClass').fluidFont(0.03); //makes the font 3% of the width for all elements with class="myClass"

document.getElementById('myId').setMin(20); //sets the minimum font size to 20px

// INTERNET EXPLORER 8: Multiple Elements
var elements = document.querySelectorAll(".myClass");
for(var i=0 ; i < elements.length ; i++) {
	elements[i].fluidFont(percent);
}
```
