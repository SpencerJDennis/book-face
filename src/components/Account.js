import React from "react";
import carlImage from "./../img/carl.png";

function Account(){
  return (
    <div class="account col-3">
      <div class="profile">
        <img class="pfp" src={carlImage}></img>
        <div class="banner"><h1></h1></div>
        <section class="stats">          
          <button>Posts</button>
          <button>Following</button>
          <button>Followers</button>
          <p class="username">Carl Bot</p>

        </section>
      </div>

      <section class="about">
        <p>Hey I'm Carl, I really love to fight! I love fighting over code, and over food. I'll also fight anyone with my fists. I just turned 21 and dont think this will help with my fighting habits. Yeah .... I drink a little to much. It is what it is.</p>
      </section>
    </div>
  )

}

export default Account;