import { Habit } from "./components/Habit";
import '../global.css'

function App() {
  return (
    <div>
      <Habit completed={3} />
      <Habit completed={2} />
      <Habit completed={5} />
      <Habit completed={3} />
      <Habit completed={7} />
    </div>
  );
}
export default App;
