// import styles from "./App.module.scss";

import GreetingCard from "./components/GreetingCard/GreetingCard";
import UserProfile from "./components/Profile/UserProfile";
import LikeButton from "./components/LikeButton/LikeButton";
import TodoList from "./components/Todo/Todo";
import ProductList from "./components/ProductList/ProductList";
import Accordion from "./components/Accordion/Accordion";
import TabList from "./components/Tabs/TabList";
import ThemeProvider from "./components/ThemeProvider/ThemeProvider";
import Content from "./components/ThemeProvider/Content";
import ThemeButton from "./components/ThemeProvider/ThemeButton";
import CommentList from "./components/Comment/CommentList";

function App() {
  return (
    <div>
      <GreetingCard name="Jakub" />
      <UserProfile
        src="https://unsplash.it/100/100"
        name="Jakub Majcherczyk"
        email="lordjimm3@gmail.com"
      />
      <LikeButton />
      <TodoList />
      <ProductList />
      <Accordion />
      <TabList />
      <ThemeProvider>
        <Content />
        <ThemeButton />
      </ThemeProvider>
      <CommentList />
    </div>
  );
}

export default App;
