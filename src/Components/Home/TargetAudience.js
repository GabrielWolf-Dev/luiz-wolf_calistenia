import React from 'react';
import styled from 'styled-components';

import {
  Container,
  Box,
  TitleContentSections,
  SectionContent,
  DefaultParagraph,
  ImgSections,
} from '../UI';
import targetAudienceLight from '../../assets/svg/targetAudienceLight.svg';
import targetAudienceDark from '../../assets/svg/targetAudienceDark.svg';

const TargetBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default function TargetAudience({ theme }) {
  return (
    <Container>
      <TargetBox>
        <SectionContent>
          <TitleContentSections>Para quem é esse site?</TitleContentSections>
          <DefaultParagraph>
            Quero através desse site e do meu instagram ajudar principalmente os jovens em geral,
            a conseguirem ter um corpo bonito mas ao mesmo tempo
            conseguindo ter saúde e domínio corporal.
          </DefaultParagraph>
          <DefaultParagraph>
            Eu sei que a maioria dos jovens costumam ser mais teimosos,
            mas acho que quando o bate-papo é entre
            jovem para jovem fica mais fácil de se dialogar.
            Obviamente que também meus conteúdos irão ajudar pessoas de outras idades,
            mas meu foco será nesse público.
          </DefaultParagraph>
        </SectionContent>
        {
          theme ? <ImgSections src={targetAudienceLight} alt="Ilustração de duas pessoas pensativas em definir um objetivo" />
            : <ImgSections src={targetAudienceDark} alt="Ilustração de duas pessoas pensativas em definir um objetivo" />
        }
      </TargetBox>
    </Container>
  );
}
