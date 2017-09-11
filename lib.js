function Response(msg,hook){
    if(msg.includes('hai')){
        return 'hai juga '+hook.params.message.chat.first_name;
    }
}

exports.Response=Response;