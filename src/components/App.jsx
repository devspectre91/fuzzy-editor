import React, { useState, useEffect } from "react";
import Editor from "./Editor";

function App() {
  const [html, setHtml] = useState(`<center>
  <img src="https://cutt.ly/JbMvJKT" />
  <h1>Hello World!</h1>
</center>`);
  const [css, setCss] = useState(`
            h1 {
             font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                }
             img {
    width: 200px;
    height: auto;
    border-radius: 20px;
  }
                body{padding:1rem;
    background-color:#DCDCDC}`);
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
            <html>
            <body>${html}</body>
            <style>${css}</style>
            </html>
            `);
    }, 250);
    return () => {
      clearTimeout(timeout);
    };
  }, [html, css]);

  return (
    <>
      <div className="title my-0 has-text-centered has-text-black">
        Live Code Editor
      </div>
      <div className="mt-0 mb-6 has-text-centered is-size-5 has-text-dark">
        You can write and preview HTML and CSS!
      </div>
      <div className="columns is-centered">
        <div className="column is-5 columns is-multiline mx-5">
          <div className="column is-full box html-editor has-background-dark p-1">
            <Editor
              language="xml"
              displayName="HTML"
              value={html}
              onChange={setHtml}
            />
          </div>
          <div className="column is-full has-background-dark box css-editor p-1">
            <Editor
              language="xml"
              displayName="CSS"
              value={css}
              onChange={setCss}
            />
          </div>
        </div>
        <div className="column is-5 mb-5 box p-0 mx-5 preview">
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameborder="0"
            height="100%"
            width="100%"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default App;
