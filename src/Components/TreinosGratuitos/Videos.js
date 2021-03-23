import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

import {
  BoxMargin,
  ContainerFlex,
  Icons,
  SectionContent,
  TitleContentSections,
} from '../UI';
import { white } from '../UI/variables';

import agachamentos from '../../assets/videos/treino_corpoInteiro/agachamentos.mp4';
import barrafixa from '../../assets/videos/treino_corpoInteiro/barrafixa.mp4';
import burpes from '../../assets/videos/treino_corpoInteiro/burpes.mp4';
import flexao from '../../assets/videos/treino_corpoInteiro/flexao.mp4';
import pranchaDinamica from '../../assets/videos/treino_corpoInteiro/prancha_dinamica.mp4';

const BoxVideo = styled.div`
  width: 100%;
  max-width: 600px;
  height: 800px;
  position: relative;

  @media screen and (max-width: 540px) {
    max-width: 400px;
    height: 600px;
  }
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

const NextBtn = styled(Icons)`
  position: absolute;
  top: 50%;
  right: 4%;
  transform: translateY(-50%);
  color: ${white};
  z-index: 1;
`;

const PrevBtn = styled(Icons)`
  position: absolute;
  top: 50%;
  left: 4%;
  transform: translateY(-50%);
  color: ${white};
  z-index: 1;
`;

const ListExercises = styled.ul`
  list-style-type: circle;
  list-style-position: inside;
  margin: 16px 0;

  li {
    text-align: left;
    font-size: 1.4rem;
    font-weight: 400;
    padding: 16px 2%;
    color: ${({ theme }) => theme.text};
  }
`;

export default function Videos({ db }) {
  const arrTreino1 = [barrafixa, flexao, burpes, agachamentos, pranchaDinamica];
  const total = arrTreino1.length;
  const [currentVideo, setCurrentVideo] = useState(0);

  function nextVideo() {
    document.querySelector('#video1').setAttribute('autoPlay', null);
    setCurrentVideo(currentVideo + 1);
    if (currentVideo > total) {
      setCurrentVideo(0);
    }
  }
  function prevVideo() {
    document.querySelector('#video1').setAttribute('autoPlay', null);
    setCurrentVideo(currentVideo - 1);
    if (currentVideo < 0) {
      setCurrentVideo(total);
    }
  }

  return (
    <BoxMargin>
      <ContainerFlex>
        <BoxVideo>
          <VideoPlayer
            id="video1"
            onEnded={nextVideo}
            src={arrTreino1[currentVideo]}
            controls
            as={motion.video}
            variants={{
              show: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            transition={{ duration: 0.6 }}
            initial="hidden"
            animate="show"
          >
            <track kind="captures" />
          </VideoPlayer>
          <NextBtn onClick={nextVideo} icon={faArrowAltCircleRight} />
          <PrevBtn onClick={prevVideo} icon={faArrowAltCircleLeft} />
        </BoxVideo>
        <SectionContent>
          <TitleContentSections>{db.trains.type}</TitleContentSections>
          <ListExercises>
            {
              db.trains.exercises.map((exercises) => (
                <li key={exercises.id}>{exercises.exercise}</li>
              ))
            }
          </ListExercises>
        </SectionContent>
      </ContainerFlex>
    </BoxMargin>
  );
}
