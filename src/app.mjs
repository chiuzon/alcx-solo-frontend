import { $m } from "./deps.mjs";

export function App() {
    const appDivContainer = document.body.querySelector("#app") 

    $m.mount(appDivContainer, {
        view: function() {
            return $m('h1', "Hello Alchemix")
        }
    })
}