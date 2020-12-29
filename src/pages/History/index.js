import React from 'react';
import Menu from '../../components/Menu';
import MP4HistoryVideo from '../../assets/history-video.mp4';

import { Container } from './styles';

const History = () => {
  return (
      <Container>
        <Menu/>
          <h1>história</h1>

          <div className="history-container">
            <video muted autoPlay loop controlsList="nodownload">
              <source src={MP4HistoryVideo} type="video/mp4"/>
            </video>
          </div>
      </Container>
  );
};

export default History;
