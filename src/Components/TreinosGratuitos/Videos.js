import React from 'react';

import {
  BoxMargin,
} from '../UI';

import CorpoInteiro from './Treinos/CorpoInteiro';
import Peito from './Treinos/Peito';

export default function Videos({ db }) {
  return (
    <BoxMargin>
      <CorpoInteiro db={db} />
      <Peito db={db} />
    </BoxMargin>
  );
}
