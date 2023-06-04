$(document).ready(function(){
    $(".readmore").hide();
$(document).on('click',".readmorea",function(){
    var moreLessButton=$(".readmore").is(":visible")?'Read more':'Read less';
    $(this).text(moreLessButton);
    $(this).parent(".services-col").find(".readmore").toggle();
    $(this).parent(".services-col").find(".readless").toggle()
});
});