console.log("this is improved word api");
function getdef(S_word, Quary) {
    let s_word = S_word.toLowerCase()
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'wordapi.txt', true);
    xhr.onload = function () {
        //converting respond text inti object type instead of string

        let data = JSON.parse(this.responseText);
        //console.log('data ======', data[0].results)
        
        //console.log("type====",typeof(data))
        //accessing keys of object data
        for (let i = 0; i < data.length; i++) {
            let k = 1
            //console.log('i =', i)
            let wrd = data[i];
            let def = document.getElementById('table')
            //console.log('wrd.word = ',wrd.word,'  s_word =',s_word)
            if (wrd.word.toLowerCase() == s_word) {
                //console.log("inside if")
                let result = wrd.results
                //console.log("quary", Quary)
                let html = '';
                for (let m = 0; m < result.length; m++) {
                    //console.log('m =', m)
                    let part = result[m]
                    //console.log(part[Quary])
                    if (part[Quary] != undefined){
                        html += `<ul>${Quary} ${k}
                            <li> ${part[Quary]}</li>
                            </ul>`
                            k+=1
                    }
                    
                }
                def.innerHTML = html;
                break;
            }
            else {
                //console.log("inside else")
                let html = "";
                html += `<ul>Defination
                                 <li>sorry this word does not exist here </li>
                                 </ul>`
                def.innerHTML = html;
            }


        }


        /*
        console.log(wrd.word)
        for (key in wrd ){
            console.log(key)
        }
        
        //this is not working dont know why
        Array.from(wor).forEach(function(e){
            console.log(e);
        })
        */

    }
    xhr.send()
}

let search = document.getElementById('search')
search.addEventListener('click', function (e) {
    let Txt = document.getElementById('searchTxt');
    let definition = document.getElementById('definition');
    let derivation = document.getElementById('derivation');
    let examples = document.getElementById('examples');
    let hasTypes = document.getElementById('hasTypes');
    let partOfSpeech = document.getElementById('partOfSpeech');
    let synonyms = document.getElementById('synonyms');
    let typeOf = document.getElementById('typeOf');
    let quary
    if (definition.checked) {
        quary = definition.value;
    }
    if (derivation.checked) {
        quary = derivation.value;
    }
    if (examples.checked) {
        quary = examples.value;
    }
    if (hasTypes.checked) {
        quary = hasTypes.value;
    }
    if (partOfSpeech.checked) {
        quary = partOfSpeech.value;
    }
    if (synonyms.checked) {
        quary = synonyms.value;
    }
    if (typeOf.checked) {
        quary = typeOf.value;
    }
    getdef(Txt.value, quary)
    Txt.value = ''
    e.preventDefault()
})
