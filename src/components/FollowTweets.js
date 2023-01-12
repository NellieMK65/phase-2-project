import React from "react";
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';

function FollowTweets(){
  return (
    <div className = "twitter-box">
      <TwitterFollowButton
        screenName = "NewsAPIorg"
        options = {{padding: 20}}
      />
      <TwitterTimelineEmbed
        sourceType = "profile"
        screenName = "NewsAPIorg"
        options = {{height: 400}}
      />
    </div>
   
  )
}
export default FollowTweets