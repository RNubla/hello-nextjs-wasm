### NextJS Rust WASM

[Resource](https://www.tkat0.dev/posts/how-to-create-a-react-app-with-rust-and-wasm/)

1.  Create a react/nextjs app
2.  create a rust lib with cargo in the web app folder
    ```$ cargo new wasm-lib --lib
    Created library `wasm-lib`package`
    ```
3.  Add the wasm-bidgen dependency in rust

    ```
    [package]
    name = "wasm-lib"
    version = "0.1.0"
    edition = "2021"
     +[lib]
     +crate-type = ["cdylib"]
    [dependencies]
    +wasm-bindgen = "0.2.78"
    ```

4.  add wasm-bindgen to your function
    ```
    +use wasm_bindgen::prelude::\*;
    +#[wasm_bindgen]
    pub fn add(a: i32, b: i32) -> i32 {
    a + b
    } #[test]
    fn add_test() {
    assert_eq!(1 + 1, add(1, 1));
    }
    ```
5.  on the react root project folder run the following: `cargo install wasm-pack`
6.  add the following to package.json
    ```
    "build:wasm": "cd wasm-lib && wasm-pack build --target web --out-dir pkg",
    ```
7.  `npm run build:wasm`
8.  `npm install ./wasm-lib/pkg`
9.  Call the wasm function into the app

    ```
    import and call
    import React, { useEffect, useState } from 'react';
    +import init, { add } from "wasm-lib";
    import logo from './logo.svg';
    import './App.css';

    function App() {

    - const [ans, setAns] = useState(0);
    - useEffect(() => {
    - init().then(() => {
    -      setAns(add(1, 1));
    - })
    - }, [])
    return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
    -        <p>1 + 1 = {ans}</p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            </header>
        </div>

    );
    }

      export default App;

    ```
