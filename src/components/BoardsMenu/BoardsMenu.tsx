import { FC, useEffect } from 'react';
import React, { useState } from 'react';

// type BoardsMenuProps = {}

const BoardsMenu: FC = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(true);
  const [boardData, setBoardData] = useState<any>({});

  const fetchBoardData = () => {
    try {
      const res = await fetch('src/boards/data.json')
      const data = await res.json()
      console.log(data);
      
    } catch(err) {
      console.log(err);
    }
  }
  // const handleWindowResize = () => {
  //   setWindowWidth(() => window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener('resize', handleWindowResize);

  //   return () => {
  //     window.removeEventListener('resize', handleWindowResize);
  //   };
  // }, []);

  return (
    <div>
      {tempBoards.map(())}
      <ul>
        <li></li>
      </ul>
    </div>
  );
};

export default BoardsMenu;
