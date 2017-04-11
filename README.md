## Purpose

The purpose of creating this repository is as a starting point for React projects, using Node/NPM as the build system.

The project can be cloned from this repository with the following command:

    git clone -o origin https://github.com/drognisep/react-startup-npm.git

After successfully cloning, remove the remote and push to a different one if needed:
    
    git remote remove origin
    git remote add origin https://your/repo/url/here
    git push --set-upstream origin master

You should be able to get all required packages with the **`npm install`** command in the repo's root directory. This should install Webpack, Babel, and React dependencies with base configuration information. The **`project.json`** file includes a couple of NPM tasks which will launch **`webpack -d --watch`** by running **`npm run dev`**.

All thanks goes to [tamizhvendan](https://www.codementor.io/tamizhvendan) for his article on [this exact sort of setup](https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr), I just made a repository as a shortcut.
