var eejs = require('ep_etherpad-lite/node/eejs/');

exports.eejsBlock_styles = function (hook_name, args, cb) {
    args.content = args.content + eejs.require("ep_custom_header_message/templates/styles.html", {}, module);
    return cb();
}

exports.clientVars = function  (hook, context, callback){
    return callback({
        ep_custom_header_message: {
            message :  "<b> we can't finish docs.plus without your help: <a  target='_blank' href='https://patreon.com/docsplus'>patreon.com/docsplus </a> </b>"
        }
    });
}