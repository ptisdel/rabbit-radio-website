$(document).ready(function() {
   
    $("body").on("click",".chapter-button", function() {
       
        $(".chapter-button").removeClass("selected");
        $(this).addClass("selected");
        
        let selected_chapter = $(this).index();
        let distance_between_chapters = 25+1; // 15vw (half a big circle) + 6vw margin + half a small circle
        
        $("#chapters_list").css("left", "-"+(selected_chapter * distance_between_chapters)+"vh");
    });
    
});