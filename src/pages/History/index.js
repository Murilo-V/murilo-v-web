import React from 'react';
import Menu from '../../components/Menu';
import MP4MenuVideo from '../../assets/menu-video.mp4';

import { Container } from './styles';

const History = () => {
  return (
      <Container>
        <Menu/>
          <h1>história</h1>

          <div className="history-container">
            <video muted autoPlay loop controlsList="nodownload">
              <source src={MP4MenuVideo} type="video/mp4"/>
            </video>
          </div>
      </Container>
  );
};

export default History;
