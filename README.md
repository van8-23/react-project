# Courses App Template

This **template repository** contains all tasks for the React module. Each practical task is in its own branch. Since this is a step-by-step implementation of a single React application, each subsequent task builds on the solution from the previous one. To work on a new task, switch to the relevant branch and ensure it is updated with the solution from the previous task.

## Where to put your code?

We’ve already set up the basis for your `React` application, including all the necessary dependencies, so you won’t need to start the project from scratch

There are already predefined files:

-   `src/App.tsx`: main application component, we expect you to render components you create inside of it;
-   `index.html`: HTML page we render our application;
-   `src/main.tsx`: our application entry point, here you must put the logic for rendering `<App>` component and putting it on the page. By default it is empty.
- Other files you see also have their purpose, so please, don't delete them.

### Please, read carefully all recommendations below:

1. **You must import and render your component(s) inside `src/App.tsx` file, otherwise we can't verify your solution!**

2. **You have to render `<App>` component inside of the element with `"root"` id! All the logic for putting `<App>` component inside the `index.html` page, you have to write in the `src/main.tsx` file! Otherwise we can't verify your solution.**

3. We suggest creating separate files for components your are writing. For instance, if task description says creating a header component, you create a file `src/components/Header.tsx` and put inside all the code, and export the component as a result.

    After that you import you new component to the `src/App.tsx` and render it inside, for examples like this:

    `src/components/Header.tsx`:

    ```tsx
    function Header() {
        return <header>Hello, I am header</header>;
    }

    export default Header;
    ```

    `src/App.tsx`:

    ```tsx
    import Header from "./components/Header";

    function App() {
        return <Header />;
    }

    export default App;
    ```

4. If task says you need applying styles, please, import them directly to a component file like this:

    `src/components/MyComponent.css`:

    ```css
    .my-component {
        color: red;
    }
    ```

    `src/components/MyComponent.tsx`:

    ```tsx
    import "./MyComponent.css";

    function MyComponent() {
        return <div className="my-component">Hello, I am component</div>;
    }

    export default MyComponent;
    ```

5. To run application in development mode, just run in the terminal (`command line, Bash, Git Bash`):

    ```bash
    npm start
    ```

    It starts application and updates it when you change something.

