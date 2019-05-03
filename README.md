# Frontend Masters— Complete Intro to React v5 by Brian Holt

Workshop taken May 2019

See my coding journing on the [code-along branch](https://github.com/qjac/complete-intro-to-react-v5/tree/code-along).

---

## Takeaways & Notes

- JSX ❤️
- VS Code does have some neat autocompletes and helpers
- Parcel is sweet
  - No config! Get up and running quickly.
  - Add a script to _package.json_ `"dev": "parcel src/index.html"` to tell it where to build from and it will build the project and spin up a dev server
  - on save it rebuilds the project and hot reloads the browser
  - Use webpack instead if customization is needed.
  - We just auto imported a package from npm just by writing an import statement. Write `import { ANIMALS } from "@frontendmasters/pet";` and get `"@frontendmasters/pet": "^1.0.3"` automatically. neato.
- [HOOKS!] <https://btholt.github.io/complete-intro-to-react-v5/hooks-in-depth>
  - A way to set state ("do state") in functional components
  - Hooks run in order on render...and for some reason everything breaks when if they get out of order, so NEVER use hooks in an if statement or conditional logic.
  - always start hooks with `use` (as in `useState`) per convention
  - there's a bunch of hooks and you can create custom hooks
  - hooks return an array `[currentState , updaterFunction]`
  - Holt uses `setX` naming convention for the updater function. Not necessary (can be named anything), but makes sense for readability
  - hooks take an arg that is the default state `useSate(`defaultState`)`
  - `useEffect`
    - takes place of `componentWillMount`, `componentDidMount`, and `componentDidUpdate`
    - component renders on screen before `useEffect` runs. `useEffect` runs asynchronously after the component renders and then updates the component and rerenders
    - final arg for useEffect is an array of dependencies (what variables it's taking in and needs to watch). If you want to run it only once after render leave dependancy arg empty and it won't watch for any updates and run again-AND make sure it actually doesn't have dependancies (otherwise it'll keep auto updating with nothing to watch for and crash your api)
    - useEffect will propagate updates to dependant components
    - if you return a clean up function from `useEffect` it will run on unmount
  - `useRef` can only have `refName.current`. `refName.anythingElse` will throw an error.
  - `useReducer` allows redux-style reducers in hooks. Can replace redux in some cases (especially when used in conjunction with `useContext`)
- Rendering
  - Every time something is updated the component rerenders, so it's important to keep render functions light. Heavy lifting should be done elsewhere. Render function should focus on rendering.
- Strictmode
  - React is working on deprecating some features. Strictmode will throw errors if you try to use any of those near dead features
  - can wrap only part of app (like maybe the new part) to stop from using those features, but leave the older stuff in place without throwing warnings
  - it is a component, so throw it in the render. It's only for development, but can stay in code—the browser will ignore it
- `async`
  - will always return a promise
  - `wait` keyword does just what it says, it'll wait for the promise to come back
  - only modern browsers (babel can transpile, but not needed for demo app)
- Class Components
  - still a thing
  - `useEffect` has no effect. Use lifecycle methods
  - c`omponentDidMount` runs once still, `componentDidUpdate` runs on update
  - still need to include `super(props)` in constructor and all class components MUST HAVE render method
  - `this.props` is immutable. use this.state and setState() instead of hooks to set state in class components...only the component can modify its state.
  - arrow functions are often used inside class components to avoid creating a new context for `this`. the context for `this` is very important in class components (less so with hooks)
  - Public class functions
    - `"@babel/plugin-proposal-class-properties"`
    - coming soon (and now with special setup) no constructor needed
    - `this.handleIndexClick = this.handleIndexClick.bind(this)` is very familiar. with this set up, it's not needed. handleIndexClick written as an arrow function retains the correct binding (to the component, not the component's method) of `this` without it.
      - only a concern for event listeners and functions passed to children. lifecycle methods and the class render function automatically have the component context
- `active: +event.target.dataset.index` the plus coerces this into an interger (can also use parseInt)
- `.bind()` is expensive and if it's in the render it will need to run each render. eek. keep it out of the render. also it might not be so slow now ???
- Error Boundaries
  - `.then()` runs after promise is fulfilled (whether successful or not). try/catch is for handling errors.
  - Catches error
- only use spread operators to pass thru props (if it's just passing through and not using...if the component is using the props it's hard to read and follow so be more vrbose)
- reach router. navigate vs redirect? both redirect user. what's the difference?
- Context
  - can provide entire app with global application state
  - use in place of redux. when would reduz vs context be the appropriate choice?
  - similar to useState hook it returns an array [currentContext, setContextFunction]
  - the function (second arg) will only run if there is no provider
  - Works really well with hooks and functional components. A little more unweildy in class components, but still doable
- What is a provider? in the general/abstract sense?
- Portals (used for modal) Other uses might include contextual menus or nav
- When parent elements are rerendered, ALL children are rerendered. Generally, that's fine since react renders very quickly (unless you write a non-performant render, so don't do that)

---

## Welcome to the Complete Intro to React v5 and Intermediate React v2!

[See the course website here][v5].

Before starting the course, please have [VSCode][vscode] or another code editor installed. Brian is using a font called [Dankmono][dankmono] (not necessary to install -- just for those curious), but [FiraCode][firacode] is another great option. This course was written for and recorded by [Frontend Masters][fem]. The code here is licensed under the Apache 2.0 license and the [course notes][v5] are licensed under the Creative Commons Attribution-NonCommercial 4.0 International license.

<!-- as the [Complete Intro to React v5][course] and [Intermediate React][course-intermediate] courses.  -->

### Debugging

Parcel is an ever evolving project that's just getting better. If you run into problems with it not respecting changes (particularly to your `.babelrc` or `.env` files) then delete the `dist/` and the `.cache/` directories. You can do this in bash by running from the root directoy of your project `rm -rf dist/ .cache/` or just by deleting those directories in your editor. This will force Parcel to start over and not cache anything.

See [this issue](https://github.com/btholt/complete-intro-to-react-v4/issues/3#issuecomment-425124265) for more specific instructions.

If you run into anything else, open an issue and we'll try to clarify or help.

[v5]: https://bit.ly/react-v5
[vscode]: https://code.visualstudio.com/
[dankmono]: https://dank.sh/
[firacode]: https://github.com/tonsky/FiraCode
[fem]: https://frontendmasters.com/

<!-- [course]: https://frontendmasters.com/courses/complete-react-v5/ -->
<!-- [course-intermediate]: https://frontendmasters.com/courses/intermediate-react-v2/ -->
