$(document).ready(function() {
    
    $('.nav-trigger').on('click', function () {
        $('.brgr-wrap').toggleClass('wrap-event');
        $('.navigation').toggleClass('nav-event');
        $('label[for="nav-trigger"]').toggleClass('trigger-event');
        return false;
    });
    
    $("#ww_1, #ww_2, #ww_3").on('click', function () {
        var nextItem = $(this).next('#ww_vid_cont');
        $(nextItem).addClass('show');
        //$(nextItem).children('#ww_vid_cont iframe')[0].src += "?autoStart=true";
    });
    
    $('#ww_vid_close, .ww_close').on('click', function () {
    	$(this).parent('#ww_vid_cont').removeClass('show');
    	//$(this).parent('#ww_vid_cont').children('#ww_pop_vid').attr('src',$('#ww_pop_vid').attr('src').replace('?autoStart=true', ''));
    });
    
});