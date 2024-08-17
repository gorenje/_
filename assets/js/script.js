// begin jQuery stuff
$(document).ready(function () {
  /*
  // set lang
  var userLang = navigator.language || navigator.userLanguage;
  var setLang = userLang.split('-')[0];
  if(setLang == "de") {
    $("html").attr("lang","de");
  } else if(setLang == "it") {
    $("html").attr("lang","it");
  } else if(setLang == "jp") {
    $("html").attr("lang","jp");
  } else {
    $("html").attr("lang","en");
  }
   */

	// location specific mailto
  $('a[href="#email"]').click(function(e) {
    e.preventDefault();
		var hostname = window.location.hostname;
		var email = 'enquires@' + hostname;
		var subject = 'Purchase of ' + $(this).data('hshid')
		window.location = 'mailto:' + email + '?subject=' + subject;
    return false;
  });

  // open external links in new window / tab
  // $("a[href^='http']").attr("target","_blank");
  $("a[href^='http']").attr("rel","noreferrer nofollow noopener");
});// end jQuery
