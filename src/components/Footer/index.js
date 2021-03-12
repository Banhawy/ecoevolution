import React from 'react';
import useTranslations from '../useTranslations';
import SocialLinks from '../SocialLinks';

import * as S from './styled';

const Footer = () => {

  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        {/* <SocialLinks /> */}
        <p>All Rights Reserved. Ecoevolution {new Date().getFullYear()}</p>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};

export default Footer;
