import React from 'react';
import BoardingScreens from '../../components/BoardingScreens';

import BoardingScreenData from '../../../config/boardingScreens';

export default function Boarding() {
  return <BoardingScreens boardingScreenData={BoardingScreenData} />;
}
