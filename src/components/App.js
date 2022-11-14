import React from "react";
import '../App.css';
import Header from './Header';
import Account from  './Account';
import UserList from './UserList';
import PostList from './PostList';


function App() {
  return (
    <React.Fragment>
      <div class="container">
        <div class="row">
          <Header />
        </div>
        <div class="row">      
          <Account />
          <PostList />
          <UserList />
        </div>        
      </div>
    </React.Fragment>
  );
}

export default App;
