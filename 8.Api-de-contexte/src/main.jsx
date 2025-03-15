import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import ModeProvider from "./components/ModeProvider.jsx"
ReactDOM.createRoot(document.getElementById("root")).render(
    
    // 3. j'entoure mon App du composant provider
    <ModeProvider>
        <App />
    </ModeProvider>
)
