"use strict";

var Chatty = (function (chatty){



  // loads the json file and passes it to a function that places into the DOM and private message array
  $(document).ready(function(){
    $.ajax({
      url: "/data/startMsg.json"
    }).done(function(contents){
      chatty.initialMessages(contents.startMsg);
    });
  });



  return chatty;

}(Chatty || {}));
