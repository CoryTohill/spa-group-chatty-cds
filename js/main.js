"use strict";

var Chatty = (function (chatty){



  //************************ Variables ***************************

  var $border = $("#display-messages");
  var $userInputText = $("#user-message-input");
  var $clearAllButton = $("#clear-msg");
  var $body = $("#color-theme");



  //************************ Event Listeners ***************************

  // toggle classes for dark theme
  $("#input-toggle").click(toggleDark);

  // toggle class for large theme
  $("#large-toggle").click(toggleLarge);

  $userInputText.keyup(addUserMessage);

  $clearAllButton.click(clearAllMessages);

  $border.click(deleteButtons);



  //************************ Event Listener Functions ***************************

  // toggles classes that control the dark theme
  function toggleDark () {
    $body.toggleClass("theme");
    $border.toggleClass("msg-white");
  }

  // toggles class that controls the large theme
  function toggleLarge () {
    $body.toggleClass("large");
  }

  // tests if key pressed is "enter" key;
  // if pressed, it passes the text input to the addMessage function and clears the text field
  function addUserMessage (key){
    if (key.which === 13){
      Chatty.addMessage("display-messages", $userInputText.val());
      $clearAllButton.removeAttr("disabled");
      $userInputText.val("");
    }
  }

  // all messages are removed from the DOM and private array, and the "Clear Message Board" button is disabled
  function clearAllMessages() {
    Chatty.removeAllMessagesInArray();
    $border.empty();
    $clearAllButton.attr("disabled", true);
  }

  // tests if a delete button is clicked and passes the id of it's parent div to the deleteSingleMessageFromDOM function
  // also checks for divs on the page and disables "Clear Message Board" button if empty
  function deleteButtons (event) {
    if (event.target.className === "deleteButton") {
      Chatty.deleteSingleMessageFromDOM(event.target.parentNode.id);
      if ($border.html() === "") {
        $clearAllButton.attr("disabled", true);
      }
    }
  }



  //************************ Public Functions ***************************

  // function that fills the DOM with initial JSON messages,
  // it is called in the load.js file after the json is loaded
  chatty.initialMessages = function (content){
    $(content).each(function (index, currentMessage){
      Chatty.addMessage("display-messages", currentMessage);
    });
  };



  return chatty;

}(Chatty || {}));
