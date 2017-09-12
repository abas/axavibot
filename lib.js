var axaviModule = {

    JerkFilter : function(msg){
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
 
}

module.exports = axaviModule;