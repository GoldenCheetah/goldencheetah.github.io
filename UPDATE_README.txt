Here is short explanation, for anyone that might be doing any changes in future.

1. I tried to minimize number of JS files. For "Features" screenshots and "Tutorials" vimeo videos, i used only one JS script.
   "jquery.magnific-popup.js"
   https://dimsemenov.com/plugins/magnific-popup/documentation.html - Documentation for JS script i used.
1.a) $('.popup-vimeo').magnificPopup() is obviously for vimeo videos.
1.b) $('.popup-link').magnificPopup() is for single image
1.c) $('.popup-gallery').each(function() {
        $(this).magnificPopup({
        });
     });
     This is for multiple galleries. It needs "each()" to detect multiple galleries. 
1.d) ".popup-link" and ".popup-gallery" can have HTML descriptions for each image. Example is "Wprime" with 'data-title="W’<sub>bal</sub> Stress Chart"'
1.e) goldencheetah.js does have some basic comments, for each function used.

2. goldencheetah.css is as simple / short as it can be.
2.a) In "parallax1" and "parallax2" you can change "min-height" if you want to change how much photo is shown in each frame.

3. In "Features" seaction i added "<img src="img/link.svg" width="24px" height="24px"/>" to some titles.
   This is used only for titles that use links (<h3><a></a></h3>)for GC wiki for that specific feature / topic.

Cheers,
Mitja
