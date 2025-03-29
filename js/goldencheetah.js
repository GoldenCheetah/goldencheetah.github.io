$(document).ready(function() {
    // Add "active" class to clicked menu item
	jQuery("nav a").on("click", function () {
        // Check if the clicked <a> contains the class "logo"
        if (!$(this).hasClass("logo")) {
            jQuery("nav a").removeClass("active"); // Remove "active" from all <a>
            $(this).addClass("active"); // Add "active" only if it's not a logo
        }
        else{
            jQuery("nav a").removeClass("active"); // Remove "active" from all <a>
        }
    });
    // Toggle "More ..." / "Show less"
	jQuery("a.toggle").on("click", function () {
        var buttonText = $(this).text();
        // Check if the clicked <a> contains the class "logo"
        if ( buttonText == "More ..." ) {
            $(this).text("Show less"); // Add "active" only if it's not a logo
        }
        else if ( buttonText == "Show less" ) {
            $(this).text("More ..."); // Add "active" only if it's not a logo
        }
    });
    // For Tooltips
    $('[data-toggle="tooltip"]').tooltip({
        "html": true,
        "width": "400px"
    })        
    
    // For vimeo videos
	$('.popup-vimeo').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false,
        image: {
          // options for image content type
          titleSrc: 'data-title'
        }
	});
    // For single image - NOT gallery
    $('.popup-link').magnificPopup({
        type: 'image'
        // other options
    });

    // For all galleries - it need to use "each()" to detect all galleries
    $('.popup-gallery').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
              enabled:true
            },
            image: {
              // options for image content type
              titleSrc: 'data-title'
            }
        });
    });
    // Changes Footer text "Since 2006" to "© 2006 - 2025". "Since 2006" in case
    // someone doesn't have JS turned on.
    var since = $("small.since").text();
    if (since.trim() === "Since 2006") {  // .trim() ensures extra spaces don't break the condition
        const currentYear = new Date().getFullYear();
        $("small.since").html("&copy; 2006 - " + currentYear);  // Use .html() for &copy;
    }
});
// Scroll menu selection
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("div[id^='section-']");
    const menuLinks = document.querySelectorAll("nav a");
  
    // We'll use a threshold list with several steps so that we get updates
    // at many intersection ratio changes.
    const thresholds = [];
    for (let i = 0; i <= 1.0; i += 0.01) {
      thresholds.push(i);
    }
  
    const observerOptions = {
      root: null, // use the viewport as the container
      threshold: thresholds
    };
  
    // This object will keep track of the latest intersectionRatio for each section.
    const sectionVisibility = {};
  
    // Initialize all sections' ratio to 0
    sections.forEach(section => {
      sectionVisibility[section.id] = 0;
    });
  
    const observer = new IntersectionObserver((entries) => {
      // Update our record for each section that changed.
      entries.forEach(entry => {
        sectionVisibility[entry.target.id] = entry.intersectionRatio;
      });
  
      // Find the section with the highest intersection ratio.
      let mostVisibleId = null;
      let maxRatio = 0;
      for (const [id, ratio] of Object.entries(sectionVisibility)) {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          mostVisibleId = id;
        }
      }
  
      // Remove 'active' from all links.
      menuLinks.forEach(link => link.classList.remove("active"));
  
      // Only add active if the best ratio is above 0 (i.e. at least a bit visible)
      if (mostVisibleId && maxRatio > 0) {
        const activeLink = document.querySelector(`nav a[href="#${mostVisibleId}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    }, observerOptions);
  
    // Start observing each section.
    sections.forEach(section => observer.observe(section));
});

// Menu selection for refresh / reload
document.addEventListener("DOMContentLoaded", function () {
    // Get the fragment identifier (without "#")
    let hash = window.location.hash.substring(1);
    // Remove "active" class from all nav links
    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
    // Find the <a> tag where href matches the hash and add "active" class
    let targetLink = document.querySelector(`nav a[href="#${hash}"]`);
    if (targetLink && !targetLink.classList.contains("logo")) {
        targetLink.classList.add("active");
    }
});