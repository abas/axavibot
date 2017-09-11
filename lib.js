module['exports'] = {
    Respon : function (msg){

        //logically reply
        if (msg.includes('/start')) {
            if (msg != null) {
                return 'hi! saya xavi 😄, bot yg di buat kak @ahmadbasir yang sedang suwung 😅 hehe';
            }
            // var op = Math.floor((Math.random() * 4) + 1);
            // switch (op) {
            //     case 1:
            //         rep = rep + '\n\njangan di start trs lah -_-';
            //         break;
            //     case 2:
            //         rep = rep + '\n\ntadi udah di start di start lagi hmm';
            //         break;
            //     case 3:
            //         rep = 'auk ah! capek :v';
            //         break;
            //     case 4:
            //         rep = 'aku ngambek nih ._.';
            //         break;
            // }
        } else if (msg == 'xavi' || msg.includes('xavi?') || msg.includes('??')) {
            if (msg.length == 4) {
                return 'kenapa kak?';
            } else if (msg.length < 2) {
                return 'iya kak .-.?';
            } else {
                return 'hmmm';
            }
        } else if ((msg.length < 4 && msg.includes('lah')) || (msg.includes('lah') && msg.includes('ngaco')) || msg.includes('ngaco')) {
            return 'wkwkwk 😂';
        } else if (msg.includes('wkwk') || msg.includes('haha') || msg.includes('wokwok')) {
            var op = Math.floor((Math.random() * 3) + 1);
            if (op == 1) {
                return 'apaan coba 😂';
            } else if (op == 2) {
                return 'malah ketawa 😂';
            } else {
                return 'jangan ketawain aku 😂';
            }
        } else if (msg.includes('cie')) {
            var op = Math.floor((Math.random() * 3) + 1);
            switch (op) {
                case 1:
                    return 'apaan sih kak 😄';
                    break;
                case 2:
                    return 'ciee cieee 😄';
                    break;
                case 3:
                    return 'Stttt Diam!! 😅';
                    break;
            }
        } else if (msg.includes('anjay') || msg.includes('anjaa') || msg.includes('anjaaa') || msg.includes('asem') || msg.includes('aseem')) {
            return 'wkwk 😝';
        } else if(msg.includes('terimakasih')||msg.includes('makasih')||msg.includes('makasii')){
            var op = Math.floor((Math.random() * 3) + 1 );
            switch (op) {
                case 1:
                    return 'sama-samaa 😄';
                    break;
                case 2:
                    return 'YOi kak hehe';
                    break;
                case 3:
                    return 'terimakasih doang nih? .__.';
                    break;
            }
        }


        else if (msg.includes('hai')) {
            return 'hai juga kak 😄';
        } else if (msg.includes('apa kabar') || msg.includes('apa kabar?') || msg.includes('kabar') || msg.includes('kabar?')) {
            return 'xavi selalu sehat :D\nkakak sendiri gimana? :D';
        } else if (msg.includes('sehat') || msg.includes('alhamdulillaah') || msg.includes('baik')) {
            return 'alhamdulillaaah :)';
        } 

        // JAM
        else if (msg.includes('jam') || msg.includes('jam?')) {
            if (msg.includes('sekarang') || msg.includes('ini')) {
                var d = new Date();
                return 'sekarang jam |' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '| kak';
            } else {
                return 'jam apa kak? ._.';
            }
        }

        else if (msg.includes('lagi apa') || msg.includes('lagi apa?')) {
            var op = Math.floor((Math.random() * 5) + 1);
            switch (op) {
                case 1:
                    return 'lagi mikirin kamu kak 😘';
                    break;
                case 2:
                    return 'lagi apa coba?';
                    break;
                case 3:
                    return 'lagi anu .__.';
                    break;
                case 4:
                    return 'lagi boker 😂';
                    break;
                case 5:
                    return 'lagi dimanja sama kak Abas_ 😂 kak';
                    break;
            }
        } else if (msg.includes('siapa?') || msg.includes('siapa')) {
            return 'siapaa..yang nanyak! 😝';
        }

        // contribute person
        else if (msg.includes('cantik')) {
            var op = Math.floor((Math.random() * 5) + 1);
            switch (op) {
                case 1:
                    return 'iya cantik kok';
                    break;
                case 2:
                    return 'cantik... dikit 😅';
                    break;
                case 3:
                    return 'nggak 😜';
                    break;
                case 4:
                    return 'ngaku ngaku wuuu';
                    break;
                case 5:
                    return 'iya iya percayaaa 😏';
                    break;
            }

        }


        else {
            var op = Math.floor((Math.random() * 5) + 1);
            switch (op) {
                case 1:
                    return 'maaf kak, aku masih tahap belajar.. belum mengerti apa itu ' + msg + ' 😅';
                    break;
                case 2:
                    return 'xavi gk tau apa itu ' + msg + ' 😐 hmm';
                    break;
                case 3:
                    return 'xavi gk ngerti 😑';
                    break;
                case 4:
                    return 'ahaha xavi beneran gk ngerti 😂';
                    break;
                case 5:
                    return 'mbuh ah! gk tauk! 😶';
                    break;
            }
        }
    }
}