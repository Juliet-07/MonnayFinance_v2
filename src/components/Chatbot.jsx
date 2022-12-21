import React from "react";
import { useEffect } from "react";

const Chat = () => {
  useEffect(() => {
    var _smartsupp = _smartsupp || {};
    _smartsupp.key = "7477913c7332b2ab56e9c1fd3143ea3a9a5cbc57";
    window.smartsupp ||
      (function (d) {
        var s,
          c,
          o = (_smartsupp = function () {
            o._.push(arguments);
          });
        o._ = [];
        s = d.getElementsByTagName("script")[0];
        c = d.createElement("script");
        c.type = "text/javascript";
        c.charset = "utf-8";
        c.async = true;
        c.src = "https://www.smartsuppchat.com/loader.js?";
        s.parentNode.insertBefore(c, s);
      })(document);
  }, []);
  return (
    <div>
      <h1>this is our chat bot</h1>
    </div>
  );
};

export default Chat;
