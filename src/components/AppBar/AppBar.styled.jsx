import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottm: ${props => props.theme.spacing(9)};
  border-bottom: 2px solid ${props => props.theme.colors.blue};
  padding: 0px 15px;
  width: ${props => props.theme.spacing(240)};
  height: ${props => props.theme.spacing(12)};
`;
