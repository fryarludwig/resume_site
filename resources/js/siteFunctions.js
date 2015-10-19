$(document).ready(function(){

  $('.resume-button').click(function(e){
    e.preventDefault();
    e.stopPropagation();

    window.location = 'resources/files/Resume.pdf';
    //window.open('resources/files/Resume.pdf');
  })

});
