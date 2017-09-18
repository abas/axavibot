var axaviModule = {
    Emoji : {
        hehe:'😁',wkwk:'😆',haha:'😂',hadeh:'🙃',suka:'😊',wlee:'😜',lopeU:'😘',cool:'😎',
        marah:'😡',hm:'😐',ha:'🙄',sedih:'😢',kaget:'😱'
    },

    JerkFilter : function(msg){
        // update jika ada masukan
        var textSaru = [
            'cuk','cok','coeg','su','asu','anjing','njing','anying','nying','anjng','fuck',
            'fak','fuk','kontol','kontil','goblok','bodo','bodoh','tolol','kntl','tai','tae',
            'silit','bokong','ndas','ndes','bento','koplo','suek','nds','fck','kmprt','pejuh',
            'titit','memek','kmcl','lonte','lnte','itil','itel','itl','kprt','jembut','mbut',
            'asshole','asshl','bgst','bangsat','bangsut','telek','tembelek','sex','gawok',
            'bosok','bangke'
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
    },

    NumFilter : function(msg){
        var num = [
            '1','2','3','4','5','6','7','8','9','0'
        ];
        var bool = false;
        
        var getLong = num.length;
        var idx = 0;while(getLong!=0){
            if(msg.includes(num[idx])){
                return true;
                break;
            }else{
                getLong--;
            }
            idx++;
        }
        return bool;
    },

    MathFilter : function(msg){
        var mathOp = [
            '+','-','+','/'
        ];
        var bool = false;

        var getLong = mathOp.length;
        var idx = 0;while(getLong!=0){
            if(msg.includes(mathOp[idx])){
                return true;
                break;
            }else{
                getLong--;
            }
            idx++;
        }
        return bool;
    },

    PraiseFilter : function(msg){
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
    },


    // Abas Commander
    AbasVerify : function(hook){
        // if(hook.params.message.chat.first_name == null){
        //     hook = hook.params.message.from.first_name;
        // }else{
        //     hook = hook.params.message.chat.first_name;
        // } // to deploy

        if(hook == 'Abas_'){
            return true;
        }else{
            return false;
        }
    },

    AbasCommand : function(hook,msg){
        if(axaviModule.AbasVerify(hook)){
            if(msg.includes('/jadwal')||msg.includes('jadwal')){
                return 'hari ini jadwal nya ini kak'
            }else{
                return 'yaelah kak, command nya belum di set -.-'
            }
        }else{
            return 'maaf kak '+hook+',.. \ncommand itu hanya boleh dilakukan kak Abas_ :)'
        }
    },

    KnowOne : function(msg){
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
        if(msg.includes('kenal')||(msg.includes('kenal')&&msg.includes('?'))){
            return sendRep[op];
        }
    },
    
    IsMissed : function(msg){
        var missed = false;
        if(msg.includes('kangen')){
            missed = true;
        }
        return missed;
    },
    
    MissingOne : function(msg){
        var sendRep = [
            'iya dia juga kangen,.. mungkin XD',
            'ciee kangen dia cieee',
            'emang dia itu ngangenin hihi',
            'kangen ya telfon lah kak',
            'dia bosen dikangenin hmm',
            'makan tuh kangen biar gemuk :p',
            'orang kayak dia dikangenin? wkwk',
            'yaelah klo kangen ya ngomong langsung lah -.-'
        ];
        var op = Math.floor((Math.random() * sendRep.length) + 1);
        if(msg.includes('kamu')||msg.includes('kmu')){
           var sender = sendRep[op].replace('dia','xavi') 
           return sender;
        }else{
            return sendRep[op];
        }
    },

    GreetingMsg : function(msg){
        var sendRep = [
            'selamat'
        ];
    }
}

module.exports = axaviModule;