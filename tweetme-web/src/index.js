import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ProfileBadgeComponent} from './profiles' 
import {FeedComponent, TweetsComponent, TweetDetailComponent} from './tweets';
import reportWebVitals from './reportWebVitals';

const appEl = document.getElementById('root')
if (appEl) {
    ReactDOM.render(<App />, appEl);
}

const e = React.createElement

const tweetsEl = document.getElementById("tweetme")
if (tweetsEl) {
    ReactDOM.render(e(TweetsComponent, tweetsEl.dataset), tweetsEl);
}

const tweetFeedEl = document.getElementById("tweetme-feed")
if (tweetFeedEl) {
    ReactDOM.render(e(FeedComponent, tweetFeedEl.dataset), tweetFeedEl);
}

const tweetDetailElements = document.querySelectorAll('.tweetme-detail')

tweetDetailElements.forEach(container => {
    ReactDOM.render(e(TweetDetailComponent, container.dataset), container);
})

const userProfileBadgeElements = document.querySelectorAll('.tweetme-profile-badge')

userProfileBadgeElements.forEach(container => {
    ReactDOM.render(e(ProfileBadgeComponent, container.dataset), container);
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
