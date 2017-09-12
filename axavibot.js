
module['exports'] = function axaviBot(hook) {

    // impor modul request
    var request = require('request');
    
    // function
    function JerkFilter (msg){
        // update jika ada masukan
        var textSaru = [
            'cuk','cok','coeg','su','asu','anjing','njing','anying','nying','anjng',
            'fuck','fak','fuk','kontol','kontil','goblok','bodo','bodoh','tolol','kntl',
            'tai','tae','silit','bokong','ndas','ndes','bento','koplo','suek','nds','fck',
        ];

        var distance = textSaru.length;
        var bool = false; // nggak jorok
        var idx=0;while(distance!=0){
            if(msg.includes(textSaru[idx])){
                bool = true; // jorok
                break;
            }else{
                distance--;
            }
            idx++;
        }
        return bool;
    }

    function PraiseFilter (msg){
        var Praise = [
            'cantik','ntik','cntk',
            'ganteng','gntg',
            'keren','kren','kyen','keyen',
            'cakep','ckep','cakp','cakeep','caakep',
            'mantab','ntab','mntab','mntb','mantap','ntap','mantp','mntap','mantaa'
        ];
        var bool = false;

        var getLong = Praise.length;
        var idx = 0;while(getLong!=0){
            if(msg.includes(Praise[idx])){
                return true;
                break;
            }else{
                getLong--;
            }
            idx++;
        }
        return bool;
    }

    // reply msg
    var msg = hook.params.message.text.toLowerCase();
    var rep = '';   

    //logically reply

    // saru filter
    if(JerkFilter(msg)){
        var op = Math.floor((Math.random() * 5) + 1);
        switch(op){
            case 1:
                rep = 'hayolhoo,, gaboleh bilang gituu';
                break;
            case 2:
                rep = 'ihh kakak jorok -_-';
                break;
            case 3:
                rep = 'kakak... aku gk suka! -.-';
                break;
            case 4:
                rep = 'loh loh loh, barusan bilang apaan hayoo...';
                break;
            case 5:
                rep = 'astaghfirullaaah.. istighfar kak -.-';
                break;
        }
    }

    else if(PraiseFilter(msg)){
        if(msg.includes('cantik')){
            var op = Math.floor((Math.random() * 5) + 1);
            switch (op) {
                case 1:
                    rep = 'iya cantik kok';
                    break;
                case 2:
                    rep = 'cantik... dikit 😅';
                    break;
                case 3:
                    rep = 'nggak 😜';
                    break;
                case 4:
                    rep = 'ngaku ngaku wuuu';
                    break;
                case 5:
                    rep = 'iya iya percayaaa 😏';
                    break;
            }
        }else{
            var op = Math.floor((Math.random() * 3) + 1);
            switch(op){
                case 1:
                    rep = 'pffftt pede ';
                    break;
                case 2:
                    rep = 'hahaha pastilaah kak XD';
                    break;
                case 3:
                    rep = 'mantabdjiwaa!!';
                    break;
            }
        }
    }
    
    else{
        if (msg.includes('/start')) {
            if (hook.params.message.chat.first_name == null) {
                rep = 'hi! kak '+hook.params.message.from.first_name+' saya xavi 😄, bot yg di buat kak @ahmadbasir yang sedang suwung 😅 hehe';
            } else {
                rep = 'hi! kak ' + hook.params.message.chat.first_name + ',... saya xavi  😄, bot yg di buat kak @ahmadbasir yang sedang suwung 😅 hehe';
            }
            var op = Math.floor((Math.random() * 5) + 1);
            switch (op) {
                case 1:
                    rep = rep + '\n\njangan di start trs lah -_-';
                    break;
                case 2:
                    rep = rep + '\n\ntadi udah di start di start lagi hmm';
                    break;
                case 3:
                    rep = 'auk ah! capek :v';
                    break;
                case 4:
                    rep = 'aku ngambek nih ._.';
                    break;
                case 5:
                    rep = '';break;
            }
        } else if ((msg.includes('xa') || msg.includes('vi')) && msg.includes('?') || msg.includes('xavi?')) {
            if (msg.length > 4) {
                rep = 'kenapa kak?';
            } else if (msg.length < 6) {
                rep = 'iya kak .-.?';
            } else {
                rep = 'apa eh?';
            }
        } else if ((msg.length < 4 && msg.includes('lah')) || (msg.includes('lah') && msg.includes('ngaco')) || msg.includes('ngaco')) {
            rep = 'wkwkwk 😂';
        } else if (msg.includes('wkwk') || msg.includes('haha') || msg.includes('wokwok')) {
            var op = Math.floor((Math.random() * 3) + 1);
            if (op == 1) {
                rep = 'apaan coba 😂';
            } else if (op == 2) {
                rep = 'malah ketawa 😂';
            } else {
                rep = 'jangan ketawain aku 😂';
            }
        } else if (msg.includes('cie')) {
            var op = Math.floor((Math.random() * 3) + 1);
            switch (op) {
                case 1:
                    rep = 'apaan sih kak 😄';
                    break;
                case 2:
                    rep = 'ciee cieee 😄';
                    break;
                case 3:
                    rep = 'Stttt Diam!! 😅';
                    break;
            }
        } else if (msg.includes('anjay') || msg.includes('anjaa') || msg.includes('anjaaa') || msg.includes('asem') || msg.includes('aseem')) {
            rep = 'wkwk 😝';
        } else if(msg.includes('terimakasih')||msg.includes('makasih')||msg.includes('makasii')){
            var op = Math.floor((Math.random() * 3) + 1 );
            switch (op) {
                case 1:
                    rep = 'sama-samaa 😄';
                    break;
                case 2:
                    rep = 'YOi kak hehe';
                    break;
                case 3:
                    rep = 'terimakasih doang nih? .__.';
                    break;
            }
        }


        else if (msg.includes('hai')) {
            if(hook.params.message.chat.first_name == null){
                rep = 'hai juga kak 😄';
            }else{
                rep = 'hai juga kak ' + hook.params.message.chat.first_name + ' 😄';
            }
        } else if (msg.includes('apa kabar') || msg.includes('apa kabar?') || msg.includes('kabar') || msg.includes('kabar?')) {
            rep = 'xavi selalu sehat :D\nkakak sendiri gimana? :D';
        } else if (msg.includes('sehat') || msg.includes('alhamdulillaah') || msg.includes('baik')) {
            rep = 'alhamdulillaaah :)';
        } 
        
        // JAM
        else if (msg.includes('jam') || msg.includes('jam?')) {
            if (msg.includes('sekarang') || msg.includes('ini')) {
                var d = new Date();
                rep = 'sekarang jam |' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '| kak';
            } else {
                rep = 'jam apa kak? ._.';
            }
        }
        
        else if (msg.includes('lagi apa') || msg.includes('lagi apa?')) {
            var op = Math.floor((Math.random() * 5) + 1);
            switch (op) {
                case 1:
                    rep = 'lagi mikirin kamu kak 😘';
                    break;
                case 2:
                    rep = 'lagi apa coba?';
                    break;
                case 3:
                    rep = 'lagi anu .__.';
                    break;
                case 4:
                    rep = 'lagi boker 😂';
                    break;
                case 5:
                    rep = 'lagi dimanja sama kak Abas_ 😂 kak';
                    break;
            }
        } else if (msg.includes('siapa?') || msg.includes('siapa')) {
            rep = 'siapaa..yang nanyak! 😝';
        }

        // contribute person
        else if (msg.includes('cantik')) {
            var op = Math.floor((Math.random() * 5) + 1);
            switch (op) {
                case 1:
                    rep = 'iya cantik kok';
                    break;
                case 2:
                    rep = 'cantik... dikit 😅';
                    break;
                case 3:
                    rep = 'nggak 😜';
                    break;
                case 4:
                    rep = 'ngaku ngaku wuuu';
                    break;
                case 5:
                    rep = 'iya iya percayaaa 😏';
                    break;
            }

        }

        else {
            var op = Math.floor((Math.random() * 5) + 1);
            switch (op) {
                case 1:
                    rep = 'maaf kak, aku masih tahap belajar.. belum mengerti apa itu ' + hook.params.message.text + ' 😅';
                    break;
                case 2:
                    rep = 'xavi gk tau apa itu ' + hook.params.message.text + ' 😐 hmm';
                    break;
                case 3:
                    rep = 'xavi gk ngerti 😑';
                    break;
                case 4:
                    rep = 'ahaha xavi beneran gk ngerti 😂';
                    break;
                case 5:
                    rep = 'mbuh ah! gk tauk! 😶';
                    break;
            }
        }
    }

    // buat atau kirim request ke bot telegram
    request.post('https://api.telegram.org/bot' + hook.env.axavibot + '/sendMessage')
        .form(
            {
            'chat_id': hook.params.message.chat.id,
            'text': rep,

        });
}
