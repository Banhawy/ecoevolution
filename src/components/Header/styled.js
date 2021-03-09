import styled from 'styled-components';
import media from 'styled-media-query';
import LocalizedLink from '../LocalizedLink';
import nature from '../../images/nature.jpg'

export const HeaderWrapper = styled.div`
  background-image: linear-gradient(to bottom, rgba(210, 219, 184, 0.36), rgba(229, 232, 222, 0.83)), url(${nature});
  background-attachment: fixed;
  background-position: 0% 1130%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 24rem;
  ${media.greaterThan('large')`
    margin-bottom: var(--space);
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--width-container);
  margin: 0 auto;
  justify-content: flex-start;
  align-items: center;
  padding: calc(var(--space) * 1.3) var(--space);
  position: relative;
  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
  ${media.greaterThan('large')`
    padding: calc(var(--space)*1.3) var(--space-sm);
  `}
`;

export const LogoLink = styled(LocalizedLink)`
  display: inline-block;
  margin-right: 0.5rem;
  width: 170px;
`;

export const ButtonMenu = styled.div`
  &.is-active {}
`;

export const NavMenu = styled.div`
  width: 100%;
  display: none;
  ${media.greaterThan('medium')`
    margin-left: auto;
    width: auto;
    display: block;
  `}
  &.is-active {
    display: block;
  }
`;

export const NavLanguages = styled.div`
  margin-left: var(--space);
`;
