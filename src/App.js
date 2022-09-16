import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app__wrapper'>
      <header className='header'>
        <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' alt='logo'></img>
      </header>
      <nav className='nav'>
        <div>Profile</div>
        <div>Messages</div>
        <div>News</div>
        <div>Music</div>
        <div>Settings</div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://www.ghimprove.com/_blog/images/posts/hello-world/mountain.jpg' alt='banner' class='banner'></img>
        </div>
        <div>
          avatar + description
        </div>
        <div>
          My posts
          <div>
            New posts
          </div>
          <div>
            <div>
              Post 1
            </div>
            <div>
              Post 2
            </div>
          </div>
        </div>
      </div>
  
    </div>
  );
}

export default App;
