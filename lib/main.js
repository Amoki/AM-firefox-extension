var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var Request = require("sdk/request").Request;

var sendToAM = function() {
  var url = require("sdk/simple-prefs").prefs.url;
  Request({
    url: url,
    content: {
      'url': tabs.activeTab.url
    }
  }).post();
};


var button = buttons.ActionButton({
  id: "amoki-music",
  label: "Amoki-Music",
  icon: {
    "16": "./icon16.png",
    "32": "./icon32.png",
    "64": "./icon64.png"
  },
  onClick: sendToAM
});