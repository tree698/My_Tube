import React, { useEffect, useState } from 'react';
import './app.css';
import VideoList from './component/video_list/video_list';
import items from './videoList.json';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // const requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow',
    // };

    // fetch(
    //   'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyD_DLuVderXOEVvn1b99umo8c-UbWpVClk',
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((result) => setVideos(result.items))
    //   .catch((error) => console.log('error', error));

    setVideos(items.items);
  });
  return <VideoList videos={videos} />;
}

export default App;
