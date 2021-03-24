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
  DefaultParagraph,
} from '../../UI';

import agachamentoAquecimento from '../../../assets/videos/treino_pernas/agachamento_aquecimento.mp4';
import pistolSquat from '../../../assets/videos/treino_pernas/pistol_squat.mp4';
import agachamentoExplosivo from '../../../assets/videos/treino_pernas/agachamento_explosivo.mp4';
import conjugados from '../../../assets/videos/treino_pernas/conjugados.mp4';
import agachamentoFechado from '../../../assets/videos/treino_pernas/agachamento_fechado.mp4';
import elevaçaoPelvica from '../../../assets/videos/treino_pernas/elevaçao_pelvica.mp4';

export default function Pernas({ db }) {
  const [listTraining, setListTraining] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const arrTraining = [
    agachamentoAquecimento,
    pistolSquat,
    agachamentoExplosivo,
    conjugados,
    agachamentoFechado,
    elevaçaoPelvica,
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
          <TitleContentSections>{db.trains.types[2]}</TitleContentSections>
          <ListExercises>
            {
              db.trains.exercisesPernas.map((exercises) => (
                <li key={exercises.id}>{exercises.exercise}</li>
              ))
            }
            <DefaultParagraph style={{ fontWeight: 500 }}>
              Observação: O número de séries e repetições vai variar com o seu nível.
            </DefaultParagraph>
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
            <TitleContentSections>{db.trains.types[2]}</TitleContentSections>
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
              db.trains.exercisesPernas.map((exercises) => (
                <li key={exercises.id}>{exercises.exercise}</li>
              ))
            }
            <DefaultParagraph style={{ fontWeight: 500 }}>
              Observação: O número de séries e repetições vai variar com o seu nível.
            </DefaultParagraph>
          </ListExercisesMobile>
        </ContentTreinosMobile>
      </ContainerFlex>
    </BoxMargin>
  );
}
