import React from 'react';
import styled from 'styled-components';
import GoodBox from '../molecules/GoodBox';
import BadBox from '../molecules/BadBox';
import InfoBox from '../molecules/InfoBox';

export default function ResultBoxIntegration() {
    return (
      <Container>
          <GoodBox />
          <BadBox />
          <InfoBox />
      </Container>
    );
  }

  const Container = styled.div`
  width: 691px;
  height: 90px;
  padding: 10px 30px 10px 30px;
  gap: 10px;
`;