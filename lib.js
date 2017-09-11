var axaviModule = {

    filterTextSaru : function (msg){
        // update jika ada masukan
        var textSaru = [
            'cuk','cok','coeg','su','asu','anjing','njing','anying','nying',
            'fuck','fak','fuk','kontol','kontil','goblok','bodo','bodoh',
            'tai','tae','silit','bokong','ndas','ndes'
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
 
}

module.exports = axaviModule;