import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div``;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 18px;
  font-weight: 600;
  padding: 11px 4px;
  :nth-child(2n + 1) {
    margin-right: ${props => props.theme.spacing(5)};
  }

  &:hover,
  &.active {
    color: ${props => props.theme.colors.blue};
  }
`;
