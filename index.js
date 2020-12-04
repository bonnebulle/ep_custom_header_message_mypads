var eejs = require('ep_etherpad-lite/node/eejs/');

exports.eejsBlock_styles = function (hook_name, args, cb) {
    args.content = args.content + eejs.require("ep_custom_header_message/templates/styles.html", {}, module);
    return cb();
}

exports.clientVars = function  (hook, context, callback){
    return callback({
        ep_custom_header_message: {
            message :  "<b> docs.plus is <a target='_blank' href='https://github.com/nwspk/docs.plus'>free and open source,</a> please help us stay online: <a  target='_blank' href='https://patreon.com/docsplus'>patreon.com/docsplus </a> </b>"
        }
    });
}