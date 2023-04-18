import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/app/App";

//_________________ componentDidCatch()
import ErrorBoundry from "./components/error-boundry/error-boundry";

//__________________API
import BookstoreService from "./services/bookstore-service";

//_________________React.createContext()
import { BookstoreServiceProvider } from "./components/bookstore-service-context/bookstore-service-context";

//______________Redux
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const bookstoreService = new BookstoreService();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <BookstoreServiceProvider value={bookstoreService}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </BookstoreServiceProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>
);
