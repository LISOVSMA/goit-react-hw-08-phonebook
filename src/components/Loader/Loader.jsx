import { RotatingLines } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export const Loader = () => (
  <Container>
    <RotatingLines
      strokeColor="rgb(58, 151, 232)"
      strokeWidth="5"
      animationDuration="0.75"
      width="60"
      visible={true}
    />
  </Container>
);
