import styled from '@emotion/styled';

export const ListWrapper = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  // -webkit-box-pack: justify;
  justify-content: space-between;
  margin: ${props => props.theme.spacing(2)};
  // gap: ${props => props.theme.spacing(12)};
  width: ${props => props.theme.spacing(97)};
`;

export const Fragment = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: ${props => props.theme.spacing(4)};
  color: ${props => props.theme.colors.black};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.spacing(4)};
  padding: 5px 16px;
  border: 1px solid transparent;
  border-radius: ${props => props.theme.spacing(1)};
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.gray};
  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:focus,
  :hover {
    background-color: ${props => props.theme.colors.blue}};
  }
`;
