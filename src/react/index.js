import Button from "./Button";

const createElement = React.createElement;
const { useState, useEffect } = React;

function App() {
  const [name, setName] = useState("shuibuzhuo");
  const [init, setInit] = useState(true);

  useEffect(() => {
    if (!init) {
      setName("hamo");
    }
  }, [init]);

  return (
    <div onClick={() => setInit(false)}>
      <div>hello {name}!!!!!</div>
      <Button />
    </div>
  );
}

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
root.render(createElement(App));
