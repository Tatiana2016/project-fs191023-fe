import Container from '../Container/Container';
import { Navigation, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <Container>
      <Navigation>
        <StyledLink to="/profile">Profile</StyledLink>
        <StyledLink to="/">Diary</StyledLink>{' '}
        <StyledLink to="/products">Products</StyledLink>
        <StyledLink to="/exercises">Exercises</StyledLink>{' '}
      </Navigation>
    </Container>
  );
};
