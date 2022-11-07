import { createBrowserRouter } from 'react-router-dom';
import App from 'src/App';
import Board from 'src/components/Board/Board';
import ErrorPage from './routes/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'boards/:boardId',
        element: <Board />,
      },
    ],
  },
  {
    path: '/logged-in',
    element: <LoggedInPage />,
    loader: loggedInLoader,
  },
  {
    path: '/game/:gameId',
    element: <GamePage />,
  },
]);

export default router;
