"use strict";

var Chatty = (function (chatty){



  //************************ Public Functions ***************************

  // calls removeArrayMessages function and removes the element from the DOM
  chatty.deleteSingleMessageFromDOM = function (id) {
    Chatty.removeArrayMessages(id);
    $("#"+id).remove();
  };



  return chatty;

}(Chatty || {}));
