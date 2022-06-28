
// helper function
function read(id){
    return document.getElementById(id).value;
}

async function Translate(){

    //1. text translate

    try{
        const input = read("input-text");
        // console.log("input:",input);
        const input_lang = read("inp_lang"); 

        const out_lang = read("out_lang");
    
        const res = await fetch("https://libretranslate.de/translate", {
            method: "POST",
    
            body: JSON.stringify({
                q: input,
                source:input_lang,
                target: out_lang,
                format: "text",
            }),

            // additional information about our request that server migth needs to know
            headers: {
                "content-type": "application/json",
            },
        });

        const { translatedText } = await res.json();

        document.getElementById("output").innerText = translatedText;
    }catch(err) {
    console.log("err:",err);
    }
}