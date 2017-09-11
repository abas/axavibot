
module['exports'] = function axaviBot(hook) {

    // impor modul request
    var request = require('request');
    var R = require('./lib');
    // reply msg
    var msg = hook.params.message.text.toLowerCase();
    var rep = R.Respon(msg);

    //logically reply

    // buat atau kirim request ke bot telegram
    request.post('https://api.telegram.org/bot' + hook.env.axavibot + '/sendMessage')
        .form(
            {
            'chat_id': hook.params.message.chat.id,
            'text': rep,

        });
}
