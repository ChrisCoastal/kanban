import { useRouteError } from 'react-router-dom';

import React from 'react';

// type Props = {};

type PageError = {
  data: null | unknown;
  status: number;
  statusText?: string;
  message?: string;
};

const ErrorPage = () => {
  const error = useRouteError() as PageError;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
