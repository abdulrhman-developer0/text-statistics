content = window["content"]//The input text
srh = window["search"]//     The search box
wordout = window["out"]//   The Output for words
OutAll = window["outall"]// the output for filltered content

function search_txt(){
  srhText = srh.value // Search Value
  str = content.value // content text
  words = fillter(str,srhText)// words pross

    wordout.innerHTML = "" //reset words
    
    for(i=0;i<words.length;i++){
    wordout.innerHTML += words[i]//items
    }
    OutAll.innerHTML= selWord(str,srhText)
   
    tblh = window.tblh// Table Head
    tblb = window.tblb// Table Body
    TI= new TextInfo(str)// TextInfo data
    hInfo = ""// head info
    bInfo = ""// body info
    
    for( i=0;i < TI.MainData.length;i++){
        id = (i==0?"c3":"c6")
        hInfo += "<div id='"+id+"'>"
        for( p in TI.MainData[i]){
        hInfo+="<div class='th'>"+p+" "+TI.MainData[i][p]+"</div>"
        }
        hInfo += "</div>"    
    }
    w = TI.words()[0]
    c = TI.words()[1]
    bInfo = "<div class='hw'>The-Words "+w.length+"</div>"
    for(i=0; i< w.length;i++){
    bInfo+="<div class='w'>"+w[i]+" count["+c[i]+"]</div>"
    }
tblh.innerHTML= hInfo
tblb.innerHTML= bInfo
    console.log(word)
}



function fillter(str,sh){

  if(sh!=""){
    aWords    = str.toLowerCase().split(/\s|\t|\n/)
    aOut      = []
for(i=0;i<aWords.length;i+=1){
    if(aWords[i].indexOf(sh.toLowerCase())>-1){
          aOut.push("<div class='item'>"+aWords[i]+"</div")
    }
}
if(aOut.length) return aOut
                return ["<div class='item'>لا شى</div>"]
    }
    return []
}



function selWord(str,sh){
    als = str.split("\n")
    i=0
    while(i<als.length){
      if(sh!=""&& als[i].indexOf(sh)>-1){
        als[i]=als[i].replace(sh,"<mark>"+sh+"</mark>")
      }
    i++
    }
    return als.join("\n")
}

function TextInfo(str){
    this.enum ={
        chars  :  str.length,
                 words :   str.split(/\n|\s|\t/).length,
         lines :   str.split("\n").length,
    }
    this.words     =  function(){
        words = str.split(/\n|\s|\t/)
        w = []
        c = []
            for(i=0;i<words.length;i++){
                  if(w.indexOf(words[i])<0){
                      w.push(words[i])
                      c.push(0)
                  }
            }
        for(i=0;i<w.length;i++){
          for(v=0;v<words.length;v++){
              if(w[i]==words[v]) c[i]++
          }
        }
    return [w,c]
    }
    this.aeiou = {
        A  : str.toLowerCase().split("a").length-1,
        E  : str.toLowerCase().split("e").length-1,
        I  : str.toLowerCase().split("i").length-1,
        O  : str.toLowerCase().split("o").length-1,
        U  : str.toLowerCase().split("u").length-1,
        gh : str.toLowerCase().split("gh").length-1,
    }
    this.MainData = [this.enum,this.aeiou]
}

