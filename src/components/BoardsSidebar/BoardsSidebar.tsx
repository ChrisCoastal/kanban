import { FC, useEffect } from 'react';
import React, { useState } from 'react';
import { BoardsType } from 'src/@types';
import { Link } from 'react-router-dom';

// type BoardsMenuProps = {}

const BoardsMenu: FC = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [boardData, setBoardData] = useState([] as BoardsType);

  const fetchBoardData = async () => {
    try {
      const res = await fetch('src/boards/data.json');
      const data: BoardsType = await res.json();
      console.log(data);

      setBoardData(() => data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBoardData();
  }, []);
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
    <div className="w-16 flex flex-col justify-between">
      <div>
        <ul className="w-full">
          {boardData.length &&
            boardData.map((board, i) => {
              return (
                <li key={i}>
                  <Link to={`boards/${board.name}`}>{board.name}</Link>
                </li>
              );
            })}
          <li>
            <button>+ Create New Board</button>
          </li>
        </ul>
      </div>
      <div>Hide Sidebar</div>
    </div>
  );
};

export default BoardsMenu;
