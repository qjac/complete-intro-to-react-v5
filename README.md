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
- HOOKS!
  - A way to set state ("do state") in functional components
  - Hooks run in order on render...and for some reason everything breaks when if they get out of order, so NEVER use hooks in an if statement or conditional logic.
  - always start hooks with `use` (as in `useState`) per convention
  - there's a bunch of hooks and you can create custom hooks
  - hooks return an array `[currentState , updaterFunction]`
  - Holt uses `setX` naming convention for the updater function. Not necessary (can be named anything), but makes sense for readability
  - hooks take an arg that is the default state `useSate(`defaultState`)`
- Rendering
  - Every time something is updated the component rerenders, so it's important to keep render functions light. Heavy lifting should be done elsewhere. Render function should focus on rendering.

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
