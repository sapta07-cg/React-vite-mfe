import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { injectReducer, store } from "./store/index.ts";
import { Provider } from "react-redux";

// ⚠️ IMPORTANT: dynamic import of remote reducer

async function bootstrap() {
    try {
        const remoteModule = await import('remoteApp/remoteSlice');
        // default export is the reducer; adjust if you export differently
        const remoteReducer = remoteModule.default;

        injectReducer('remote', remoteReducer);

        // if suppose there is another reducer to inject, repeat the above steps

        // const anotherModule = await import('remoteApp/anotherSlice');
        // const anotherReducer = anotherModule.default;
        // injectReducer('another', anotherReducer);

        // another approach is to use Promise.all to load multiple reducers in parallel

        //     const [remoteModule1, remoteModule2] = await Promise.all([
        //   import("remoteApp1/remoteSlice"),
        //   import("remoteApp2/anotherSlice"),
        // ]);

        // injectReducer("remote1", remoteModule1.default);
        // injectReducer("remote2", remoteModule2.default);


        // After reducer is injected, render the app
        createRoot(document.getElementById("root")!).render(
            <StrictMode>
                <Provider store={store}>
                    <App />
                </Provider>
            </StrictMode>
        );



    } catch (err) {
        console.error("Error loading remote reducer:", err);

        createRoot(document.getElementById("root")!).render(
            <StrictMode>
                <Provider store={store}>
                    <App />
                </Provider>
            </StrictMode>
        );

    }

}

bootstrap();

