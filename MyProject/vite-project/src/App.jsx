import ConditionalRendering from "./components/ConditionalRendering";
import ConditionalRendering2 from "./components/ConditionalRendering2";
import HandlingEvent from "./components/HandlingEvent";
import ListGroup from "./components/ListGroup";
import Message from "./Message";

function App() {
  return (
    <div>
      <Message />
      <ListGroup />
      <ConditionalRendering />
      <ConditionalRendering2 />
      <HandlingEvent />
    </div>
  );
}

export default App;
