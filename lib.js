var axaviModule = {

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
}

module.exports = axaviModule;