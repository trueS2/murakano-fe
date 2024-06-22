// src/components/common/organisms/Header.js
import React from 'react';
import styled from 'styled-components';
import SearchBar from '@/components/search/atoms/SearchBar';
import { LogoText, Row } from '@/styles/commonStyles';
import HeaderBtn from '../molecules/HeaderBtn';
import Link from 'next/link';

export default function Header({ $isHome }) {
  return (
    <MainContainer $isHome={$isHome}>
      <Inner>
        <HeaderBtn />
        {!$isHome && (
          <HeaderRow>
            <SmallLogoText>
              <StyledLink href='/'>머라카노</StyledLink>
            </SmallLogoText>
            <SearchBar header />
          </HeaderRow>
        )}
      </Inner>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  background-color: white;
  top: 0;
  left: 0;
  box-shadow: ${(props) => (props.$isHome ? 'none' : 'rgba(0, 0, 0, 0.08) 0px 8px 16px 0px')};
  padding: 0;
  height: ${(props) => (props.$isHome ? '38px' : '130px')};
  width: 100%;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 780px;
  height: 100%;
`;

const SmallLogoText = styled(LogoText)`
  width: 130px;
  font-size: 30px;
  align-items: center;
`;

const HeaderRow = styled(Row)`
  height: 51px;
  padding: 10px;
  gap: 35px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--primary);
  text-shadow: 2px 2px 1px rgba(118, 118, 118, 0.2);
  &:hover {
  }
`;
