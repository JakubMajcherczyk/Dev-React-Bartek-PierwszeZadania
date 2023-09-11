# How to run it

## Step 1

- run `npm i` command in your terminal in order to install all the dependencies

## Step 2

- run `npm run dev` in order to run the project
- by default your project should be accessible here http://localhost:5173/
- if you want to test your application on your mobile or other device run that command with `--host` flag, like this `npm run dev -- --host`
- HINT additonal `--` is required in order to pass `--host` flag to vite and not npm

## Step 3

- play around with the code, try to do it by yourself from the scratch by following attached to this document video

## Step 4 - Homework

### 1. Personal Greeting Card

- Create a simple "Greeting Card" component that takes a name prop and displays a message like "Hello, [name]!"

### 2. User Profile

- Create two components: `ProfilePicture` and `ProfileDetails`. `ProfilePicture` should accept a src prop for the image URL and ProfileDetails should accept name and email props. Then, compose these components inside a parent `UserProfile` component.

### 3. Like Button

- Create a `LikeButton` component. It should have a button that displays a count. Every time the button is clicked, the count should increase by one. Use the useState hook for this.

### 4. Todo List Item

- Build a `Todo` component that displays a task. It should accept the task name as a prop and have a checkbox next to it. When the checkbox is checked, the task name should have a strikethrough.

### 5. Product List

- Make a `Product` component which displays a product's name, price, and description passed as props. Then, make a ProductList component that takes an array of products and renders a list of `Product` components.

### 6. Accordion

- Design an `AccordionItem` component that has a title and hidden content. When the title is clicked, the hidden content should toggle visibility. Then, create an `Accordion` component that takes an array of items (with titles and content) and renders them using the `AccordionItem` component.

### 7. Comment System

- Build a `Comment` component that takes username and commentText as props. Next, make a `CommentList` component that receives an array of comments. This should display a list of comments, demonstrating props drilling as you pass individual comment details down to the `Comment` component. Add a counter at the top of the `CommentList` showing the number of comments.

### 8. Dynamic Tabs

- Create a `Tab` component that takes a label and children. Then, make a `TabList` component that composes multiple Tab components. Only the content of the selected tab should be visible. This will involve passing down callback functions as props and lifting up state.

### 9. Theme Switcher

- Design a `ThemeProvider` component that wraps around other components and provides a light or dark theme to them. Components inside `ThemeProvider` should change their background and text colors based on the theme. Use useState to toggle between light and dark themes. Also, implement a `ThemeButton` inside the `ThemeProvider` to toggle the theme.

### 10. Advanced Comment System with Reply

- Expand the Comment System from #7. For each comment, users should be able to click a "Reply" button to write a response. Replies should be nested under the original comment. The structure would look like this:

- Comment 1
  - Reply 1.1
  - Reply 1.2 - Reply 1.2.1
    Comment 2
  - Reply 2.1
    For this task:

The `Comment` component should take an additional prop for replies.
Use the useState hook for managing the list of replies.
Incorporate props drilling to handle the nested reply structure.
The nesting can be represented with margins or different background shades to distinguish between levels.

## Last but not least

- have fun! experiment, do not give up, all the techniques needed to acomplish these tasks where preseneted during the live. Remember one thing though! in JSX we use className instead of class, class won't work!
