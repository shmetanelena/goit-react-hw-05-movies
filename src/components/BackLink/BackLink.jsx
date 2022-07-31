import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from './BackLink.styled';
import PropTypes from 'prop-types';

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="8" />
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string,
      hash: PropTypes.string,
      key: PropTypes.string,
      state: PropTypes.any,
    }),
  ]).isRequired,
  children: PropTypes.any,
};

export default BackLink;
