import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  faChevronRight,
  faChevronLeft,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

import {
  BoxMargin,
  ContainerFlex,
  ContentTreinosDesktop,
  TitleContentSections,
  BoxVideo,
  VideoPlayer,
  NextBtn,
  PrevBtn,
  ListExercises,
  ContentTreinosMobile,
  BtnTreinosMobile,
  ListExercisesMobile,
  Icons,
} from '../../UI';

import agachamentos from '../../../assets/videos/treino_corpoInteiro/agachamentos.mp4';
import barrafixa from '../../../assets/videos/treino_corpoInteiro/barrafixa.mp4';
import burpes from '../../../assets/videos/treino_corpoInteiro/burpes.mp4';
import flexao from '../../../assets/videos/treino_corpoInteiro/flexao.mp4';
import pranchaDinamica from '../../../assets/videos/treino_corpoInteiro/prancha_dinamica.mp4';

export default function CorpoInteiro({ db }) {
  const [listTraining, setListTraining] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const arrTraining = [barrafixa, flexao, burpes, agachamentos, pranchaDinamica];
  const total = arrTraining.length;

  function toggleShowList() {
    setListTraining(!listTraining);
  }

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
            src={arrTraining[currentVideo]}
            controls
          >
            <track kind="captures" />
          </VideoPlayer>
          <NextBtn onClick={nextVideo} icon={faChevronRight} />
          <PrevBtn onClick={prevVideo} icon={faChevronLeft} />
        </BoxVideo>
        <ContentTreinosDesktop>
          <TitleContentSections>{db.trains.types[0]}</TitleContentSections>
          <ListExercises>
            {
              db.trains.exercisesCorpoInteiro.map((exercises) => (
                <li key={exercises.id}>{exercises.exercise}</li>
              ))
            }
          </ListExercises>
        </ContentTreinosDesktop>
        <ContentTreinosMobile>
          <BtnTreinosMobile
            onClick={toggleShowList}
            as={motion.button}
            variants={{
              show: { borderRadius: '12px 12px 0 0' },
              hidden: { borderRadius: '12px 12px 12px 12px' },
            }}
            transition={{
              duration: 0.6,
            }}
            animate={listTraining === true ? 'show' : 'hidden'}
          >
            <TitleContentSections>{db.trains.types[0]}</TitleContentSections>
            <Icons icon={listTraining === true ? faChevronUp : faChevronDown} />
          </BtnTreinosMobile>
          <ListExercisesMobile
            as={motion.ul}
            variants={{
              show: { height: 'auto', opacity: 1 },
              hidden: { height: '0', opacity: 0 },
            }}
            transition={{
              duration: 0.6,
            }}
            animate={listTraining === true ? 'show' : 'hidden'}
          >
            {
              db.trains.exercisesCorpoInteiro.map((exercises) => (
                <li key={exercises.id}>{exercises.exercise}</li>
              ))
            }
          </ListExercisesMobile>
        </ContentTreinosMobile>
      </ContainerFlex>
    </BoxMargin>
  );
}
