import styled from 'styled-components';

export const Image = styled.img`
  max-width: 90px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.black300};
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 300px;
`;
