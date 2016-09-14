(function(win, doc) {
'use strict';
    
    // init controller
    var controller = new ScrollMagic.Controller();

    // create a scene
    var firstScene = new ScrollMagic.Scene({
        triggerElement: '.first-scene-trigger', // element from where will start the scene
        duration: '50%', // number on px or percents for responsive, will add end scene

        /**
         * triggerHook: Moves the trigger
         * 'onEnter': scene start when the trigger appear
         * 'onCenter': (defaut) scene start when the trigger are on top 50%
         * 'onLeave':  scene start when the trigger are on the top
         * Also can be a number between 0 (top) and 1 (bottom)
         */
        triggerHook: 'onCenter'

        //reverse: false // Animation only once
        //offset: 50 // start this scene after scrolling for 50px

    })
    .setClassToggle('.first-scene-animation', 'fade-in') // Add class to .first-scene-animation element
    .addIndicators({ // Marks to start/end scene. Requires a plugin
        name: 'fade scene',
        colorTrigger: 'black',
        colorStart: '#75C695',
        colorEnd: 'blue'
    })
    .addTo(controller);

    // another scene
    var secondScene = new ScrollMagic.Scene({
        triggerElement: '.second-scene-trigger',

    })
    .setClassToggle('.second-scene-animation', 'scale-in') // add class to project01
    .addIndicators({
        name: 'scale scene',
        colorTrigger: 'black',
        colorStart: '#75C695',
        colorEnd: 'blue'
    }) // this requires a plugin
    .addTo(controller);



}(window, window.document));