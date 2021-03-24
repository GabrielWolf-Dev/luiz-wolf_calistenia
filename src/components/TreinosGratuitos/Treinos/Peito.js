import React, { useState } from 'react';

import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import {
  BoxMargin,
  ContainerFlex,
  SectionContent,
  TitleContentSections,
  BoxVideo,
  VideoPlayer,
  NextBtn,
  PrevBtn,
  ListExercises,
} from '../../UI';

import flexaoArqueiro from '../../../assets/videos/treino_peito/flexao_arqueiro.mp4';
import flexaoExplosiva from '../../../assets/videos/treino_peito/flexao_explosiva.mp4';
import triSet from '../../../assets/videos/treino_peito/dropSet_de_flexoes.mp4';
import flexaoDiamante from '../../../assets/videos/treino_peito/flexao_diamante.mp4';
import extensaoTricpes from '../../../assets/videos/treino_peito/extensao_tricpes.mp4';
import tricpesBanco from '../../../assets/videos/treino_peito/tricpes_banco.mp4';

export default function Peito({ db }) {
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
        <SectionContent>
          <TitleContentSections>{db.trains.types[1]}</TitleContentSections>
          <ListExercises>
            {
              db.trains.exercisesPeito.map((exercises) => (
                <li key={exercises.id}>{exercises.exercise}</li>
              ))
            }
          </ListExercises>
        </SectionContent>
      </ContainerFlex>
    </BoxMargin>
  );
}
