var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var Request = require("sdk/request").Request;

var sendToAM = function() {
  Request({
    //url: "http://musique.amoki.fr"
    url: "http://127.0.0.1:8000",
    content: {
      'url': tabs.activeTab.url,
      'add_url': true
    }
  }).post();
};


var button = buttons.ActionButton({
  id: "amoki-musique",
  label: "Amoki musique",
  icon: {
    "64": "./play-64.png"
  },
  onClick: sendToAM
});
