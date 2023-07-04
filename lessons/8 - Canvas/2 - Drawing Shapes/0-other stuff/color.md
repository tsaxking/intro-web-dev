Before we do stuff with drawing onto canvases its good to know how colors work in html, css and canvases

# rgb
Rgb lets you individually control the red, green, and blue values of a color
You do this by setting color = "rgb(0, 1, 2)";
Note that colors dont mix the same way they would in real life (for example red and green mix to make yellow, and all the colors mix together to make white)
This is because the mixing is based off how light mixes

# rgba
rgba is the same as rgb except you also have alpha
Alpha controls how transparent something is
0 alpha means something is completely invisible
1 alpha means something is completely visible 

# hsl
hsl is hue, saturation, and lightness
If you imagine the color wheel and you were to put an arrow in the center facing towards the colors,
then hue would be the angle of that arrow, (between 0 and 360)
Saturation is how not grey a color is so 0% saturation is grey while 100% saturation is that color
Lightness changes how light or dark a color is: 0% is black, 50% is the color, and 100% is white

HSL lets you do cool thing like making rgb gaming websites by changing h on an interval

# hexes
Hexes work the same way as rgb but they are hexadecimal
They do the same thing as rgb though so if you understand hexadecimal good for you, if you don't you don't need to

# just putting the color
if you just set the color of something to the name of the color as a string it will often work

# bootstrap colors
Bootstrap is weird so while you can set colors, they have very weird names

For example, red is danger and yellow is warning
you can find more info here: https://getbootstrap.com/docs/5.0/customize/color/