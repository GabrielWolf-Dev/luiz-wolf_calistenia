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
  ContentTreinosMobile,
  TitleContentSections,
  BoxVideo,
  VideoPlayer,
  NextBtn,
  PrevBtn,
  ListExercises,
  ListExercisesMobile,
  BtnTreinosMobile,
  Icons,
} from '../../UI';

import flexaoArqueiro from '../../../assets/videos/treino_peito/flexao_arqueiro.mp4';
import flexaoExplosiva from '../../../assets/videos/treino_peito/flexao_explosiva.mp4';
import triSet from '../../../assets/videos/treino_peito/dropSet_de_flexoes.mp4';
import flexaoDiamante from '../../../assets/videos/treino_peito/flexao_diamante.mp4';
import extensaoTricpes from '../../../assets/videos/treino_peito/extensao_tricpes.mp4';
import tricpesBanco from '../../../assets/videos/treino_peito/tricpes_banco.mp4';

export default function Peito({ db }) {
  const [listTraining, setListTraining] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const arrTraining = [
    flexaoArqueiro,
    flexaoExplosiva,
    triSet,
    flexaoDiamante,
    extensaoTricpes,
    tricpesBanco,
  ];
  const total = arrTraining.length;

  function toggleShowList() {
    setListTraining(!listTraining);
  }

  function nextVideo() {
    document.querySelector('#video2').setAttribute('autoPlay', null);
    setCurrentVideo(currentVideo + 1);
    if (currentVideo > total) {
      setCurrentVideo(0);
    }
  }
  function prevVideo() {
    document.querySelector('#video2').setAttribute('autoPlay', null);
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
            id="video2"
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
          <TitleContentSections>{db.trains.types[1]}</TitleContentSections>
          <ListExercises>
            {
              db.trains.exercisesPeito.map((exercises) => (
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
