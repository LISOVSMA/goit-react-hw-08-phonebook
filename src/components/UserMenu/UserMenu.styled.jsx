import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spacing(4)};
`;

export const Text = styled.p`
  color: ${props => props.theme.colors.black};
  font-size: 18px;
`;

export const Button = styled.button`
  padding: 6px 18px;
  border-radius: ${props => props.theme.spacing(1)};
  border: 1px solid transparent;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.btn};
  font-size: ${props => props.theme.spacing(4)};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    background-color: ${props => props.theme.colors.blue};
  }
`;
