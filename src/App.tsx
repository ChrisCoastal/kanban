import React from 'react';
import Nav from 'src/components/Nav/Nav';
import BoardsSidebar from './components/BoardsSidebar/BoardsSidebar';
import { Outlet } from 'react-router-dom';
import { BoardsProvider } from './context/BoardsProvider';
// type Props = {}

const App = () => {
  return (
    <BoardsProvider>
      <div>
        <BoardsSidebar />
        <Nav />
        <div>
          <Outlet />
        </div>
      </div>
    </BoardsProvider>
  );
};

export default App;
