/*RESIZE WINDOWS ADD  MENU*/
$(window).resize(function(){
    if (window.innerWidth > 767) {
        $("#nav").removeClass('vertical');
         $("#nav > li > ul").css({"opacity": "1","display": "none","margin": "0"});
    }
});

$("#menu").click(function(){
    $("#nav").toggleClass('vertical');
    return false;
});


/*MENU WHEN CLICK ON MENU*/

 function initMenu() {
    $('#nav ul').hide();
     $('#nav li a').click(

     function () {
        
         var checkElement = $(this).next();
         if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
             $('#nav ul:visible').slideToggle('normal');
         }
         if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
             removeActiveClassFromAll();
             $(this).addClass("active");
              if (window.innerWidth > 767) {
                 $("#nav > li > ul").css({"opacity": "1","display": "block","margin": "0","z-index": "999"});
                }
             else{
               $('#nav ul:visible').slideToggle('normal');
             checkElement.slideToggle('normal');   
             }
            
             
             return true;
         }
         
         if($(this).siblings('ul').length==0 && $(this).parent().parent().attr('id')=='nav')
         {
             
             removeActiveClassFromAll();
             $(this).addClass("active");
             $('#nav ul:visible').slideToggle('normal');
             
             return true;
         }
     });
 }

 function removeActiveClassFromAll() {
     $('#nav li a').each(function (index) {
         $(this).removeClass("active");
     });
 }


 $(document).ready(function () {
     initMenu();
 });

 $('#nav').click(function (e)

 {
     e.stopPropagation();
 })




 $(document).click(function () {
     $('#nav').children('li').each(function () {
         if ($(this).children('ul').css('display') == 'block') {
             $(this).children('ul').slideToggle('normal')
             $(this).children('a').removeClass('active')
         }
     })
 })
 
 $(document).ready(function() {
     $("ul.ul-change-language li").each(function(n,v){
                if($(this).attr("data-flag")=== $("#id-current-language").attr("data-flag")){
                   $(this).toggleClass("selected-language");
                }
        });
     
    $("ul.ul-change-language li").click(function(event) {
        var current =  $("#id-current-language");
        var flagCurrent = current.attr("data-flag");
        $("ul.ul-change-language li").each(function(n,v){
                if($(this).attr("data-flag")===flagCurrent){
                   $(this).removeClass("selected-language");
                }
        });
        current.removeClass(current.attr("data-flag"));
        current.addClass($(this).attr("data-flag"))  ;
        current.attr("data-flag",$(this).attr("data-flag"));
        $(this).toggleClass("selected-language");
    });
});


//share button js
$(document).ready(function(){
    var pageTitle	= document.title; //HTML page title
    var pageUrl		= location.href; //Location of this page
	
	$('.share-btn-wrp li').click(function(event){
		var shareName = $(this).attr('class').split(' ')[0]; //get the first class name of clicked element
		switch(shareName) //switch to different links based on different social name
		{
			case 'facebook':
				OpenShareUrl('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(pageUrl) + '&amp;title=' + encodeURIComponent(pageTitle));
				break;
			case 'twitter':
				OpenShareUrl('http://twitter.com/home?status=' + encodeURIComponent(pageTitle + ' ' + pageUrl));
				break;
			
		}
		
	});
		
	function OpenShareUrl(openLink){
		//Parameters for the Popup window
        winWidth    = 650; 
        winHeight   = 450;
        winLeft     = ($(window).width()  - winWidth)  / 2,
        winTop      = ($(window).height() - winHeight) / 2,
        winOptions   = 'width='  + winWidth  + ',height=' + winHeight + ',top='    + winTop    + ',left='   + winLeft;
        window.open(openLink,'Share This Link',winOptions); //open Popup window to share website.
        return false;
	}
});



$('select#select-make').on('change', function (e) {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;
    //alert(valueSelected);
});


