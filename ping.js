module['exports'] = function axaviBot(hook) {

  // impor modul request
  var request = require('request');

  // reply msg
  var msg = hook.params.message.text.toLowerCase();
  var rep = '';

  if(msg.includes('ping')){
    rep = 'pong!'
  }

  request.post('https://api.telegram.org/bot' + hook.env.axavibot + '/sendMessage?')
    .form({
      'chat_id': hook.params.message.chat.id,
      'text': rep,
    });

}