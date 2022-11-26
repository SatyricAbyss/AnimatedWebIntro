
# Animated Website Intro
This project is about creating an animated website opening.
It's all based on timing in the code, using several timeouts which intertwine
and make sure that the animations play out well timed.

### The settings
Settings have been provided in the code so you can easily adjust the text and
timing of each action to play out at a certain time. They look like this:


```javascript
// Loader settings in seconds
const loaderMinTimeInSeconds    = 1;
const loaderMaxTimeInSeconds    = 2.5;

// General text settings
const textSpeed                 = 25;

// First text
const firstTextDelayInSeconds   = 0.1;
const firstText                   = "Your first phrase goes here";

// Second text and delay
const secondTextDelayInSeconds  = 1;
const secondText                = "Your second phrase goes here";

// Third text and delay
const thirdTextDelayInSeconds   = 3;
const thirdText                 = "Your third phrase goes here";
```

### The loader
The website contains a loader which can be changed with every form
of loader you prefer. You can simply copy-paste your custom loader in the
`loaderSection` of the HTML and replace the code in `loader.css` to make
sure your super awesome custom loader is implemented.

The loader is defined as:
```html
<section id="loaderSection">
</section>
```

### The animation timings
The timing of the animations is done by executing a function in every
animation that plays out. This way you don't have to keep track of how
long each animation takes to complete, and you can just go haywire on
whatever you want to make.

### Open-Source
Even though this is the code to my own website which I'm making, I did
want to make this code open to use and improve for everyone. It's currently
still under heavy development, but I think it's fun if others can improve
this code in their own way!

Link to my website, where I use it with my own loader:
https://meltingcorestudios.com/

Link to this code in action:
https://meltingcorestudios.com/opensource/
