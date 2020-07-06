
exports.aceInitialized = function(hook, context){
    $("body").append("<div class='ep_custom_header' id='ep_custom_header'> <p class='ep_custom_header_text'> "+
    clientVars.ep_custom_header_message.message+" </p> </div>")
}

exports.postAceInit = function (hook,context){

}

