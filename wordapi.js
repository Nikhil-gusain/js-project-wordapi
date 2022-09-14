console.log("this is word api");
//making function to search defination
function getdef(S_word){
    let s_word = S_word.toLowerCase()
    let xhr = new XMLHttpRequest();
    xhr.open('GET','wordapi.txt',true);
    xhr.onload = function (){
        //converting respond text inti object type instead of string

        let data = JSON.parse(this.responseText);
        //console.log('data ======',data)
        //console.log("type====",typeof(data))
        //accessing keys of object data
        for (let i = 0;i <data.length;){
            //console.log('i =',i)
            let wrd =data[i];
            let def = document.getElementById('def')
            //console.log('wrd.word = ',wrd.word,'  s_word =',s_word)
            if (wrd.word.toLowerCase() == s_word){
                //console.log("inside if")
                let result = wrd.results
                //console.log(result)
                let html ='';
                for (let m = 0;m <result.length;m++){
                    html += `<ul>Defination ${m+1}
                             <li>${result[m].definition}</li>
                             </ul>`
                    //console.log(result[m].definition)
                }
                def.innerHTML = html;
                break;
                //i+= data.length
                
            }
            else{
                //console.log("inside else")
                let html = "";
                html += `<ul>Defination
                             <li>sorry this word does not exist here </li>
                             </ul>`
                def.innerHTML = html;
            }
            i+=1
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
search.addEventListener('click',function (e){
    let Txt = document.getElementById('Txt');
    getdef(Txt.value)
    Txt.value = ''
    e.preventDefault()
})
