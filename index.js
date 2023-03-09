var eejs = require('ep_etherpad-lite/node/eejs/');

exports.eejsBlock_styles = function (hook_name, args, cb) {
    args.content = args.content + eejs.require("ep_custom_header_message/templates/styles.html", {}, module);
    return cb();
}

exports.clientVars = function  (hook, context, callback){
    return callback({
        ep_custom_header_message: {
            message :  "<b> Pour les pads privés c'est par ici <a target='_blank' href='https://pad.bonnebulle.xyz/mypads/?'>MyPads</a> </b>"
        }
    });
}
