import "./App.css";
import Header from "./components/Header/Header";
import PostList from "./components/PostList/PostList";
import PostContent from "./components/PostContent/PostContent";

function App() {
  const addedPost = [
    {
      petName: "Charlie",
      yak: "I love to eat all the fall leaves!",
    },
    {
      petName: "Copper",
      yak: "I AM HOUSE HIPPO! RUB MY BELLY!",
    },
    {
      petName: "Guinness",
      yak: "Did somebody say CAR???",
    },
    {
      petName: "Cheeto",
      yak: "Feelin' frisky! Might knock over a houseplant.",
    },
  ];

  return (
    <div className="App">
      <Header />
      <PostList postObj={addedPost} />
    </div>
  );
}

export default App;
