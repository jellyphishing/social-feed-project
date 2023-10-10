import "./App.css";
import Header from "./components/Header/Header";
import PostList from "./components/PostList/PostList";
import PostContent from "./components/PostContent/PostContent";

function App() {
  return (
    <div className="App">
      <Header />
      <PostList />
      <PostContent petName="Charlie" yak="I love to eat all the fall leaves!" />
    </div>
  );
}

export default App;
