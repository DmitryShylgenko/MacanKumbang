$(document).ready(function() {
	$("#owl-demo").owlCarousel({
		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		autoHeight : true,
		singleItem: true,
		autoPlay : 2000
	});
	initMap();
	effecktCaptions.init();
	initScrollToTop();
	$(window).on('scroll',function(){
		initScrollToTop();
	});
	$('a.to-top').click(function(e){
		leafOver(e);
	});
	$('#nav a[href^="#"]').click(function(e){
		leafOver(e);
	});
});
function leafOver(e){
	e.preventDefault();
	var id = $(e.currentTarget).attr('href');
	var top = $(id).offset().top;
	$('body,html').animate({scrollTop:top}, 1500);
}
function initScrollToTop(){
	var button = document.getElementsByClassName("to-top");
	var height = document.documentElement.clientHeight;
	var pageY = window.pageYOffset || document.documentElement.scrollTop;
	if(height >= pageY){
		button[0].style.display = 'none';
	} else {
		button[0].style.display = 'block';
	}
}
var effecktCaptions = {
	init: function(){
		this.bindUIActions();
	},
	bindUIActions: function(){
		var self = this;
		$('[calss = "effeckt"]').on(Effeckt.buttonPressedEvent, function(event) {
			self.activateCaptions(this);
			event.preventDefault();
		});
	},
	activateCaptions: function(el){
		var activeClass = 'active';
		if (document.documentElement.classList) {
			el.classList.toggle(activeClass);
		} else {
			var $caption = $(el);
			$caption.toggleClass(activeClass);
		}
	}
};
function initMap(){
	var map = new google.maps.Map(document.getElementById('map'),{
		zoom: 16,
		center: {lat: 50.211641, lng: -5.480311}
	});

	var image = 'images/pin.png';
	var beachMarker = new google.maps.Marker({
	position: {lat: 50.211641, lng: -5.480311},
	map: map,
	icon: image
	});
}