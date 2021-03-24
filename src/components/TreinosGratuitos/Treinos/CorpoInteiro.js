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

import agachamentos from '../../../assets/videos/treino_corpoInteiro/agachamentos.mp4';
import barrafixa from '../../../assets/videos/treino_corpoInteiro/barrafixa.mp4';
import burpes from '../../../assets/videos/treino_corpoInteiro/burpes.mp4';
import flexao from '../../../assets/videos/treino_corpoInteiro/flexao.mp4';
import pranchaDinamica from '../../../assets/videos/treino_corpoInteiro/prancha_dinamica.mp4';

export default function CorpoInteiro({ db }) {
  const [currentVideo, setCurrentVideo] = useState(0);
  const arrTraining = [barrafixa, flexao, burpes, agachamentos, pranchaDinamica];
  const total = arrTraining.length;

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
        <SectionContent>
          <TitleContentSections>{db.trains.types[0]}</TitleContentSections>
          <ListExercises>
            {
              db.trains.exercisesCorpoInteiro.map((exercises) => (
                <li key={exercises.id}>{exercises.exercise}</li>
              ))
            }
          </ListExercises>
        </SectionContent>
      </ContainerFlex>
    </BoxMargin>
  );
}
