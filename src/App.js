import React, { Fragment } from "react";
import BooksList from "./containers/BooksList";
import Total from "./containers/Total";

import "./styles/style.styl";

function App() {
  return (
    <Fragment>
      <main>
        <BooksList />
      </main>
      <footer>
        <Total />
      </footer>
    </Fragment>
  );
}

export default App;
