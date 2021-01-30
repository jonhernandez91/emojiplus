# emojiplus

## Usage

```jsx
import { EmojiSpan } from "emojiplus";

function App() {
  return (
    <div>
      <EmojiSpan ariaLabel="a dino emoji">🦖</EmojiSpan>
    </div>
  );
}

export default App;
```

## Contributing

### Making Changes

_For now, the only way to contribute to this package with visibility into the changes is via linking. [Yalc](https://github.com/wclr/yalc) is a fantastic tool for this purpose._

1. Ensure you have the necessary dependencies installed:

   ```bash
   npm install
   ```

2. Make changes and bundle them using:

   ```bash
   npm run build
   ```

3. Test them using a separate app (e.g `npx create-react-app demo`):

   ```bash
   # in this project's root directory, run
   yalc publish

   # then in the root directory of the app you're using to demo this package, run:
   yalc link emojiplus && npm run start
   ```

   You should now be able to use the package in that app, e.g.

   ```jsx
   import { EmojiSpan } from "emojiplus";
   ```

### Available Scripts

| Command | Env Vars | Example | Purpose
| - | - | - | - |
| build | none | `npm run build` | Runs `npm run build:rollup` |
| build:rollup | none | `npm run build:rollup` | Generates a build and source map (`bundle.js` & `bundle.js.map`) using Rollup & Babel. |
| test:babel | none | `npm run test:babel` | Runs `npx babel src --out-dir .babel-config-test/`, providing a glimpse at how babel's current config transforms the src code. Find the output in `.babel-config-test/`. |
| release | TAG (e.g. 1.2.3) | `TAG=1.2.3 npm run release` | Generates a git tag using the TAG supplied, and pushes it to GitHub, then provides a link to follow to create a release in GitHub for the new tag. *If the script fails, check the git log to see if a commit was created. If so, you'll have to undo the commit if you want to run the script again. Simply run the following to do so:*  `git reset HEAD\^` |

### Publishing Releases

In order to generate a release, you need to produce a new package version and a corresponding tag for said version.

For example, let's say you want to add a component to this package.

To do so, you'd simply add your component, commit your work, then produce your version via:

1. Open `package.json` and update the `version` accordingly (e.g. `1.2.3` to `1.3.0`).
2. Run the following command with your new version in place of `<VERSION>`:

   ```bash
   TAG=<VERSION> npm run release
   ```

   If it was successful, you'll get a link like https://github.com/Jonhernandez91/emojiplus/releases/new?tag=YOUR_VERSION&title=YOUR_VERSION in the output. Look for the rocket: 🚀

   _If the `release` script fails, check the git log to see if a commit was created. If so, you'll have to undo the commit if you want to run the script again. Simply run the following to do so:_

   ```bash
   git reset HEAD\^
   ```

3. Go to the URL provided by the `release` script output, and make a release for your new version (a tag was produced by the `release` script using the version you provided).

4. Once the release is created, go to the [Actions tab](https://github.com/Jonhernandez91/emojiplus/actions) for this project and you should see a job running for your release, which, if successful, will upload your new version of this package to JFrog. Note that it takes a minute or so for JFrogs API to reflect the successful upload.
