import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// export const Header = styled.header`
//   box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.27);
//   padding-left: 20px;
// `;
export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.27);
  padding-left: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
  > nav {
    display: flex;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const NavigationLink = styled(NavLink)`
  color: black;
  font-size: 24px;
  font-weight: 500;
  padding-top: 20px;
  padding-bottom: 20px;
  &.active {
    color: red;
  }
`;
export const Logo = styled.p`
  font-weight: 700;
  margin: 30px 5px 30px 30px;
`;
