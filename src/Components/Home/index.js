import React from 'react';

import Banner from './Banner';
import SectionWhatIs from './SectionWhatIs';
import TargetAudience from './TargetAudience';
import RelationSports from './RelationSports';
import Shapes from './Shapes';
import AboutMe from './AboutMe';

export default function Home({ theme }) {
  return (
    <main>
      <Banner />
      <SectionWhatIs />
      <TargetAudience theme={theme} />
      <RelationSports />
      <Shapes />
      <AboutMe />
    </main>
  );
}
