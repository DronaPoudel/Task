
// mobile navigation toggle

$(document).ready(function(){
	$('.side-menu').click(function(){
		$('.mobile-nav').toggleClass('mobile-nav-shower');
	});
	$('.close-nav').click(function(){
		$('.mobile-nav').toggleClass('mobile-nav-shower');
	});
  $('.mobile-nav ul li a').click(function(){
    $('.mobile-nav').toggleClass('mobile-nav-shower');
  });


  // show header on scroll

  	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
		    $('header').addClass('header-bg');
		} else {
		    $('header').removeClass('header-bg');
		}
	});


// Slider
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:0,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true,
              autoHeight:true
          },
          400:{
              items:1,
              nav:true,
            autoHeight:true
          },
          600:{
              items:1,
              nav:true,
            autoHeight:true
          },
          1000:{
              items:1,
              nav:false,
              loop:true,
              autoplay:true,
              autoplayTimeout:2000,
              autoplayHoverPause:false,
            autoHeight:true
          }
      }
  })
});




    // testimonial carousel

  	var owl = $('#testi-carousel');
      owl.owlCarousel({
        margin: 20,
        loop: true,
        dots: false,
        nav: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 2
          }
        }
      });

      // other service carousel

      var owl = $('#service-carousel');
      owl.owlCarousel({
        margin: 20,
        loop: true,
        dots: false,
        nav: true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 3
          }
        }
      });

      // smooth scroll for navigation

      $(document).on('click', 'header a[href^="#"]', function(e) {
      // target element id
      var id = $(this).attr('href');

      // target element
      var $id = $(id);
      if ($id.length === 0) {
          return;
      }

      // prevent standard hash navigation (avoid blinking in IE)
      e.preventDefault();

      // top position relative to the document
      var pos = $id.offset().top-70;

      // animated top scrolling
      $('body, html').animate({scrollTop: pos},1000);
  });


});

// Location page Province based location select 
var lookup = {
  'Province 1': ['Mechi', 'Koshi'],
  'Province 2': ['Sagarmatha', 'Janakpur'],
  'Province 3': ['Bagmati', 'Narayani'],
  'Province 4': ['Gandaki', 'Lumbini'],
  'Province 5': ['Dhaulagiri', 'Rapti'],
  'Province 6': ['Karnali', 'Bheri'],
  'Province 7': ['Seti', 'Mahakali'],
};

// When an option is changed, search the above for matching choices
$('#options').on('change', function() {
  // Set selected option as variable
  var selectValue = $(this).val();

  // Empty the target field
  $('#choices').empty();
  
  // For each chocie in the selected option
  for (i = 0; i < lookup[selectValue].length; i++) {
     // Output choice in the target field
     $('#choices').append("<option value='" + lookup[selectValue][i] + "'>" + lookup[selectValue][i] + "</option>");
  }
});    

// details page 
class ImageViewer {
  constructor(selector) {
    this.selector = selector;
    $(this.secondaryImages).click(() => this.setMainImage(event));
    $(this.mainImage).click(() => this.showLightbox(event));
    $(this.lightboxClose).click(() => this.hideLightbox(event));
  }
  
  get secondaryImageSelector() {
    return '.secondary-image';
  }
  
  get mainImageSelector() {
    return '.main-image';
  }
  
  get lightboxImageSelector() {
    return '.lightbox';
  }
  
  get lightboxClose() {
    return '.lightbox-controls-close';
  }
  
  get secondaryImages() {
    var secondaryImages = $(this.selector).find(this.secondaryImageSelector).find('img')
    return secondaryImages;
  }
  
  get mainImage() {
    var mainImage = $(this.selector).find(this.mainImageSelector);
    return mainImage;
  }
  
  get lightboxImage() {
    var lightboxImage = $(this.lightboxImageSelector);
    return lightboxImage;
  }
  
  setLightboxImage(event){
    var src = this.getEventSrc(event);
    this.setSrc(this.lightboxImage, src);
  }
  
  setMainImage(event){
    var src = this.getEventSrc(event);
    this.setSrc(this.mainImage, src);
  }
  
  getSrc(node){
    var image = $(node).find('img');
  }
  
  setSrc(node, src){
    var image = $(node).find('img')[0];
    image.src = src;
  }
  
  getEventSrc(event){
    return event.target.src;
  }
  
  showLightbox(event){
    this.setLightboxImage(event);
    $(this.lightboxImageSelector).addClass('show');
  }
  
  hideLightbox(){
    $(this.lightboxImageSelector).removeClass('show');
  }
}

new ImageViewer('.image-viewer');


// Login/ Signup JS
$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});