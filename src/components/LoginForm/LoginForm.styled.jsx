import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.spacing(10)};
`;

export const Label = styled.label``;

export const Input = styled.input`
  width: ${props => props.theme.spacing(92)};
  margin-bottom: ${props => props.theme.spacing(5)};
  outline: none;
  padding: ${props => props.theme.spacing(3)};
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: ${props => props.theme.spacing(1)};
  color: ${props => props.theme.colors.gray};
  font-weight: 500;
  font-size: ${props => props.theme.spacing(4)};
  transition: border-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
  :focus,
  :hover {
    border-color: ${props => props.theme.colors.blue};
  }
`;

export const Button = styled.button`
  margin-top: ${props => props.theme.spacing(4)};
  align-items: center;
  width: ${props => props.theme.spacing(42)};
  // font-weight: 600;
  font-size: ${props => props.theme.spacing(4)};
  padding: 6px 18px;
  border: 1px solid transparent;
  border-radius: ${props => props.theme.spacing(1)};
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.btn};
  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  :hover {
    background-color: ${props => props.theme.colors.blue};
  }
`;

export const Span = styled.span`
  display: flex;
  margin-bottom: ${props => props.theme.spacing(1)};
  font-weight: 600;
  font-size: ${props => props.theme.spacing(4)};
  color: ${props => props.theme.colors.black};
`;
