import React, { Fragment } from "react";
import BooksList from "./containers/BooksList";

import "./styles/style.styl";

function App() {
  return (
    <Fragment>
      <main>
        <BooksList />
      </main>
    </Fragment>
  );
}

export default App;
