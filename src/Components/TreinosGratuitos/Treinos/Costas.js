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

import elevacaoDuck from '../../../assets/videos/treino_costas/elevacao_duck.mp4';
import muscleUp from '../../../assets/videos/treino_costas/muscleUp.mp4';
import barraPronada from '../../../assets/videos/treino_costas/barraPronada.mp4';
import remadaInvertidaL from '../../../assets/videos/treino_costas/remadaInvertidaL.mp4';
import barraSupinada from '../../../assets/videos/treino_costas/barraSupinada.mp4';
import remadaAustraliana from '../../../assets/videos/treino_costas/remadaAustraliana.mp4';
import bicepsTesta from '../../../assets/videos/treino_costas/bicepsTesta.mp4';

export default function CorpoInteiro({ db }) {
  const [listTraining, setListTraining] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const arrTraining = [
    elevacaoDuck,
    muscleUp,
    barraPronada,
    remadaInvertidaL,
    barraSupinada,
    remadaAustraliana,
    bicepsTesta,
  ];
  const total = arrTraining.length;

  function toggleShowList() {
    setListTraining(!listTraining);
  }

  function nextVideo() {
    document.querySelector('#video4').setAttribute('autoPlay', null);
    setCurrentVideo(currentVideo + 1);
    if (currentVideo > total) {
      setCurrentVideo(0);
    }
  }
  function prevVideo() {
    document.querySelector('#video4').setAttribute('autoPlay', null);
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
            id="video4"
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
          <TitleContentSections>{db.trains.types[3]}</TitleContentSections>
          <ListExercises>
            {
              db.trains.exercisesCostas.map((exercises) => (
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
            <TitleContentSections>{db.trains.types[3]}</TitleContentSections>
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
              db.trains.exercisesCostas.map((exercises) => (
                <li key={exercises.id}>{exercises.exercise}</li>
              ))
            }
          </ListExercisesMobile>
        </ContentTreinosMobile>
      </ContainerFlex>
    </BoxMargin>
  );
}
