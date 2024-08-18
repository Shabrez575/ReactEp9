Ep - 9 : Optimize the app

Topic: 
- Custom Hooks
- Single Responsibility Principles.
- Single component should have single responsiblity.

- We learn How we can create custom hooks.
- Hooks ? it is utility functions.
- During creating custom hooks
- Always start the name ok hooks with small letter like - useRestaurantMenu.
- Process to write the custom hooks:-
- 1. create the state variable.
  2. fetching the data.
  3. Get the data as a json data.
  4. update the data resInfo using setInfo(json.data).
  5. lastly return restInfo
     (It is a local variable.)

- By custom hooks, we try to do the segregation inside code.
   - By fetching the data at one place.
   - By displaying the data at one place.

- When we are creating a custom hooks alway keep this point in mind.
  - 1. Input of the hooks.
       (What Input Parameter we are expecting. like for useRestaurantMenu custom hooks we took input as a resId. Based on resId we provide some output.)
  - 2. Output of the hooks.
       (What Output we get from this hooks. like for useRestaurantMenu custom hooks we return resInfo as a output.)

- Note:- Always use the word use as a hooks name. (like useRestaurantMenu or useOnlineStatus)
- Optimize the code:-
- In this part, we will see how we can optimize the APP.
- Methods To Do the Optimize the code:
  - 1. Chunking/Code Splitting/Dynamically Bundling).
       (Break our App into multiple chunks like we have only js file which load as a complete.) - This is done by lazy function which is load from react package.
  - 2. Lazy Loading/On Demand Loading:
       - Lazy() - it is coming from React Package.
       - It help us to load the component code based on demand/requirement.
       - Earlier only one .js file is build after bundling and minfication and all.
       - If we have large component and we want to load the code of that particular at a time not the whole code of app for that we will use lazy() function.
       - We will put our component(Large Component) inside Suspense component.Like this: <Suspense><About></About></Suspense> 