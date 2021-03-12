import React from 'react';
import { MDBTypography } from 'mdbreact'
import * as S from './styled';

const TitlePage = props => {
  const { text, id } = props;

  return <S.TitleElement id={id}><MDBTypography className="text-center titles" tag="h2" variant="display-2">{text}</MDBTypography></S.TitleElement>
};

export default TitlePage;
