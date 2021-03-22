import styled from 'styled-components';

export const Image = styled.img`
  max-width: 90px;
  border-radius: 50%
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBG};
  min-height: 100vh;
  width: 100vw;
`;