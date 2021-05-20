/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import {
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
  ListExercises,
  ListExercisesMobile,
  BtnTreinosMobile,
  Icons,
  DefaultParagraph,
} from '../UI';

export default function Videos({ db }) {
  const [showTrain, setShowTrain] = useState();

  function toggleShowList(event) {
    db.trainings.forEach((train) => {
      if (train.type === event.target.innerText) {
        setShowTrain(train.type);
      }
    });
  }

  return (
    <BoxMargin>
      {
            db.trainings.map((trains) => (
              <ContainerFlex style={{ marginTop: '32px' }} key={trains.id}>
                <BoxVideo>
                  <VideoPlayer
                    title="YouTube video player"
                    src={trains.video}
                  />
                </BoxVideo>
                <ContentTreinosDesktop>
                  <TitleContentSections>{trains.type}</TitleContentSections>
                  <ListExercises>
                    {
                      trains.exercises.map((datas) => <li key={datas.id}>{datas.exercise}</li>)
                    }
                  </ListExercises>
                </ContentTreinosDesktop>
                <ContentTreinosMobile>
                  <BtnTreinosMobile
                    onClick={toggleShowList}
                    aria-label={`Acessar exercícios de ${trains.type}`}
                    aria-expanded={showTrain === trains.type ? 'true' : 'false'}
                    aria-controls={`card${trains.id}`}
                    as={motion.button}
                    variants={{
                      show: { borderRadius: '12px 12px 0 0' },
                      hidden: { borderRadius: '12px 12px 12px 12px' },
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    animate={showTrain === trains.type ? 'show' : 'hidden'}
                  >
                    <TitleContentSections>{trains.type}</TitleContentSections>
                    <Icons icon={showTrain === trains.type ? faChevronUp : faChevronDown} />
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
                    animate={showTrain === trains.type ? 'show' : 'hidden'}
                    id={`card${trains.id}`}
                  >
                    {trains.exercises.map((datas) => <li key={datas.id}>{datas.exercise}</li>)}
                    <DefaultParagraph style={{ fontWeight: 500 }}>
                      Observação: O número de séries e repetições vai variar com o seu nível.
                    </DefaultParagraph>
                  </ListExercisesMobile>
                </ContentTreinosMobile>
              </ContainerFlex>
            ))
          }
    </BoxMargin>
  );
}
