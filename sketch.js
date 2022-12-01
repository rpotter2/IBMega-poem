function setup() {
  noCanvas();
    
  let dict = buildDict();
  let seed = setTitle();
  
  poem = make_poem(seed, dict);
  
  let title = ''
  for (var w = 0; w < seed.length; w++) {
      title += dict.get(seed[w]) + " ";
  }
  
  let content = createElement("div");
  content.attribute("id","content");
  let poemTitle = createElement("h3", title);
  content.child(poemTitle);
  
  let pre = createElement("pre", poem);
  pre.attribute("class","poem");
  content.child(pre);
  
  Bindery.makeBook({
    content: '#content',
    rules: [
    Bindery.RunningHeader({ render: (pageInfo) => pageInfo.isLeft ? `${pageInfo.number}`:`${pageInfo.number}`
}) 
    ] 
  });
  
}

function buildDict() {
  let dict = new Map();
  dict.set("a", RiTa.randomWord({pos : 'n'|'v', maxLength: 7}));
  dict.set("b", RiTa.randomWord({maxLength: 7}));
  dict.set("c", RiTa.randomWord({maxLength: 7}));
  dict.set("d", RiTa.randomWord({pos : 'v'|'n', maxLength: 7}));
  dict.set("e", RiTa.randomWord({pos : 'v'|'n', maxLength: 7}));
  dict.set("f", RiTa.randomWord({maxLength: 7}));
  dict.set("g", RiTa.randomWord({maxLength: 7}));
  dict.set("h", RiTa.randomWord({pos : 'in', maxLength: 7}));
  dict.set("i", RiTa.randomWord({pos : 'in', maxLength: 7}));
  dict.set("j", RiTa.randomWord({maxLength: 7}));
  dict.set("k", RiTa.randomWord({maxLength: 7}));
  dict.set("l", RiTa.randomWord({maxLength: 7}));
  dict.set("m", RiTa.randomWord({maxLength: 7}));
  dict.set("n", RiTa.randomWord({pos : 'in', maxLength: 7}));
  dict.set("o", RiTa.randomWord({pos : 'n'|'v', maxLength: 7}));
  dict.set("p", RiTa.randomWord({maxLength: 7}));
  dict.set("q", RiTa.randomWord({pos : 'v'|'r', maxLength: 7}));
  dict.set("r", RiTa.randomWord({pos : 'in', maxLength: 7}));
  dict.set("s", RiTa.randomWord({pos : 'v'|'n', maxLength: 7}));
  dict.set("t", RiTa.randomWord({pos : 'v', maxLength: 7}));
  if (RiTa.pos(dict.get('q')=='v')) {
    dict.set("u", RiTa.randomWord({pos : 'r', maxLength: 7}));
  } else {
    dict.set("u", RiTa.randomWord({pos : 'v', maxLength: 7}));
  }
  dict.set("v", RiTa.randomWord({maxLength: 7}));
  dict.set("w", RiTa.randomWord({pos : 'n'|'v', maxLength: 7}));
  dict.set("x", RiTa.randomWord({maxLength: 7}));
  dict.set("y", RiTa.randomWord({maxLength: 7}));
  dict.set("z", RiTa.randomWord({maxLength: 7}));
  return dict;
}

function make_poem(seed, dict) {
  let full = '';
  let newseed = [];
  let wordcount = 0;
  for (var i = 0; wordcount <= 50000; i++) {
       for (var w = 0; w < seed.length && wordcount <= 50000; w++) {
         let expanded = [];
         for (var c = 0; c < seed[w].length  && wordcount <= 50000; c++) {
          expanded.push(dict.get(seed[w].charAt(c)));
           wordcount++;
         }
         if (wordcount <= 50000) {
           let tine = expanded.join(" ")
           full += tine + '\n';
         
           if(i == 0) {
             full = '';
           }
           newseed = newseed.concat(expanded);
         }
     }
     seed = newseed;
     newseed = [];
  }
  return full
}

function setTitle() {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let title = [];
  let used = "";
  for ( var i = 0; i < 3; i++ ) {
    used = Math.floor(Math.random()*alphabet.length);
    title.push(alphabet[used]);
    alphabet.splice(used, 1);
  }
  return title
}