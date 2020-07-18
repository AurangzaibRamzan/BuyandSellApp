import React from 'react';
import BoardingScreens from '../../components/boardingScreens';

import BoardingScreenData from '../../../config/boardingScreens';

export default function Boarding(porps) {
  return <BoardingScreens boardingScreenData={BoardingScreenData} {...porps} />;
}
