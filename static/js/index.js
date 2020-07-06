
exports.aceInitialized = function(hook, context){
    clearTimeout(timer);
    var timer = setTimeout(function(){
        $("body").prepend("<div class='ep_custom_header' id='ep_custom_header'> <p class='ep_custom_header_text'> "+
        clientVars.ep_custom_header_message.message+" </p> </div>")
    },120000);
   
}

exports.postAceInit = function (hook,context){

}

