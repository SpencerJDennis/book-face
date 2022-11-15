import React from "react";

function Header(){
  return (
  <React.Fragment>
    <div class="header">
      <button>Home</button>
      <button>Notifications</button>
      <button>Messages</button>
      <button class="post">Post</button>
      <input type="text" placeholder="Search"></input>
    </div>
  </React.Fragment>
  )
}

export default Header;