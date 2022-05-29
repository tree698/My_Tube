import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video, video: { snippet }, onClickVideo, display }) => {
  const displayType = display === 'grid' ? styles.grid : styles.list;

  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => onClickVideo(video)}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.high.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
          <p className={styles.date}>
            {snippet.publishedAt.match(/\d{4}-\d{2}-\d{2}/)}
          </p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
