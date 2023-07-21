import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing(12)};
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 48;
  text-align: center;
  margin-bottom: ${props => props.theme.spacing(6)};
  margin-top: ${props => props.theme.spacing(6)};
  color: ${props => props.theme.colors.gray};
`;
