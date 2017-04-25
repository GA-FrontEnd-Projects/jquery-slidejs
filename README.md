# Slideshows with the jQuery Cycle2 Plugin

Although the JavaScript world has undergone a huge amount of change in the last few years, most marketing websites still rely on relatively low-tech, tried-and-true methods of conveying information. One of the most common interactions you'll see on marketing websites is the slideshow, which is a rotating list of images (typically) tied together with a transition effect. Because this is such a common interaction, you'll almost certainly be asked to implement it in some form or another in your career, and it will save you a huge amount of time to have a plugin handy that you know how to use.

For this exercise, we will use the [jQuery Cycle2](http://jquery.malsup.com/cycle2/) plugin to create our slideshows. This is not meant to be an endorsement of the plugin, but for our purposes it is a relatively intuitive plugin that will make it easy to familiarize ourselves with common options. Keep the plugin documentation open, and follow these steps to complete the exercise:

1. Open the index.html file under the `exercise` folder in your browser.

2. Open the index.html file in your code editor.

3. Include the SlidesJS source in the `<head>` element of the index file. The source file is located in the `js` folder.

4. In your js/script.js file, add the standard `$(document).ready()` statement.

5. Inside the `$(document).ready()` body, select the element that contains the images and initialize the jQuery Cycle2 plugin on it (`.cycle()`). Look at the index.html file in your browser. You should see a basic slideshow with basic transitions.

6. Let's speed up the slideshow by setting the delay between slides to two seconds instead of four. You will add a "timeout" option to the list of options in your your plugin initiatlization and set that option to 2000.

7. Locate the option in the documentation that stops the slideshow when someone hovers over it. Set this option to true so that the slideshow stops on hover. (The documentation is confusing here, you'll need to camelCase the option name instead of hyphenating it).

8. Let's add some controls. Create a `<button>` with the text "Prev" and another one with the text "Next" after the `#slides` div, with corresponding `prev` and `next` classes. Reload the page and notice that these buttons don't work.

9. To make the next and previous buttons work, we have to tell the plugin which button performs which action. Add `prev` and `next` options to your list of options, and set the value of each option to be the corresponding element's selector.

10. These exercises are useful exercises in exploring documentation and finding what you need in order to achieve your goals. Look up the appropriate option for changing the transition effect, and change it to something other than the default.

11. I don't personally like the way this plugin handles its own internal events, but read about its event handling in the documentation and handle the `cycle-after` event so that a `console.log` message with the text "slide changed" appears after each slide change.

12. Some plugins allow options to be set declaratively, which means that they're set in appropriate places in the HTML rather than in JavaScript code. Read the section on declarative options in the documentation and add an option to the slideshow container, `#slides`, that turns off the plugin's default logging in the console.

13. Explore the other configuation options this plugin has to offer and change one or two of each kind -- JavaScript options, declarative options, and event handling.


There are many more options and settings to explore with this plugin, but this should give you a general idea of some of the customization options that are possible in popular slideshow plugins.