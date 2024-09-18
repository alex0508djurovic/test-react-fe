import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { GithubSearch, NotFound } from "./pages";
import { Header } from "./components";
import { setupStore } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
    const { store, persistor } = setupStore();
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <Routes>
                            <Route path="/" element={<GithubSearch />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </PersistGate>
                </Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
