import React from "react";
import useMenu from "../useMenu";

import * as S from "./styled";

const Navigation = ({ isActive, handleToggleMenu }) => {
  const menuItems = useMenu();

  return (
    <>
      <S.Navigation>
        {menuItems.map((menu, index) => (
          <S.NavigationLink
            href={menu.link}
            aria-label={menu.name}
            activeClassName="active"
            key={`${menu.link}${index}`}
          >
            {menu.name}
          </S.NavigationLink>
        ))}
      </S.Navigation>
    </>
  );
};

export default Navigation;
