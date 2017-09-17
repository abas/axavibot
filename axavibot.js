
module['exports'] = function axaviBot(hook) {

    // impor modul request
    var request = require('request');
    
    // function
    // start
    function Start(msg){
        if(msg.includes('start')){
            return true;
        }else{
            return false;
        }
    }

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
            'keren','kren','kyen','keyen','keree',
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

    // Abas Commander
    function AbasVerify(){
        var abas = {
            name : '',
            state : false
        };
        if(hook.params.message.chat.first_name == null){
            abas.name = hook.params.message.from.first_name;
            abas.state = true;
        }else{
            abas.name = hook.params.message.chat.first_name;
            abas.state = true;
        } 

        if(abas.name == 'Abas_'){
            return abas;
        }else{
            return abas.state;
        }
    }

    function AbasCommand(msg){
        if(AbasVerify().state){
            if(msg.includes('jadwal')){
                return 'hari ini jadwal nya ini kak'
            }else if(msg.includes('anu')){
                return 'anu apaan coba'
            }
            
            else{
                return 'yaelah kak, command nya belum di set -.-'
            }
        }
    }

    function KnowOne(){
        var sendRep = [
            
            'iya tau, kenapa emang?',
            'tau dong.. kakak naksir :v',
            'oh dia yang punya tompel itu?',
            'oh kakak yang pintar masak itu ya?',
            'dia anak band kan?',
            'kalo nggak salah dia yang suka kentut ya?',
            
            'hmm, siapa ya? lupa kak wkwk',
            'aduh kak, gk tau xavi..',
            'wkwkwk orang stress bukan?',
            'pfftt bodo amat siapa dah',
            'pacar kakak?',

            'ciee kangen mantaaan :v',
            'dia kn yang kerjanya makan tidur -_-',
            'yelah orang itu',
        ];

        var op = Math.floor((Math.random() * sendRep.length) + 1);
        // if(msg.includes('kenal')||(msg.includes('kenal')&&msg.includes('?'))){
        // }
        return sendRep[op];
    }

    //=======================================================================

    // reply msg
    var msg = hook.params.message.text.toLowerCase();
    var rep = '';   

    //logically reply

    // Abas Command
    if(msg.includes('/') && !Start(msg)){
        if( AbasVerify().state ){
            rep = AbasCommand(msg);
        }else{
            rep = 'maaf kak '+AbasVerify().name+',.. \ncommand itu hanya boleh dilakukan kak Abas_ :)'
        }
    }

    // saru filter
    else if(JerkFilter(msg)){
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

    else if(msg.includes('kenal')||(msg.includes('kenal')&&msg.includes('?'))){
        rep = KnowOne();
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
            var op = Math.floor((Math.random() * 10) + 1);
            switch (op) {
                case 1:
                    rep = rep + '\n\njangan di start trs lah -_-';
                    break;
                case 2:
                    rep = rep + '\n\ntadi udah di start di start lagi hmm';
                    break;
                case 3:
                    rep = rep + '\n\nauk ah! capek :v';
                    break;
                case 4:
                    rep = rep + '\n\naku ngambek nih ._.';
                    break;
                case 5:
                    rep = rep + '';break;
                case 6:
                    rep = rep + '';break;
                case 7:
                    rep = rep + '';break;
                case 8:
                    rep = rep + '';break;
                case 9:
                    rep = rep + '';break;
                case 10:
                    rep = rep + '';break;
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
            }
        );
    
}
