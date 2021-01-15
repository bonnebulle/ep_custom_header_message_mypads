
exports.aceInitialized = function(hook, context){

    if (!window.matchMedia('(max-width: 720px)').matches) {
        clearTimeout(timer);

        var timer = setTimeout(function(){
            $("body").prepend("<div class='ep_custom_header' id='ep_custom_header'> <p class='ep_custom_header_text'> "+
            clientVars.ep_custom_header_message.message+" </p> <div id='ep_custom_header_close'>&times;</div></div>")
            $("#ep_custom_header_close").bind('click', function(e){
                console.log('click');
                $("#ep_custom_header").fadeOut()
                $("#wrtc_modal").css({"top" : 0})

            });
            $("#wrtc_modal").css({"top" : '4%'})
        },300000);
    }
   
}

exports.postAceInit = function (hook,context){

}

