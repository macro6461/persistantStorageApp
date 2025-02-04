# Persistant Storage React Native App

This is my React Native app that is making use of `AsyncStorage` to persist data beyond local state. It works by adding values to the `openedPosts` key in my `AsyncStorage` instance (similar to `localStorage` in Reactjs).

## Getting Started

1. First, clone this repo and run `yarn`.
2. Next, run `yarn start` and then select which platform you want to run it on.
3. After that, you will see instructions for the app on the homepage telling you to navifate to the `Feed` tab.
4. Once in the `Feed` tab you can then open/collapse posts from a seeded list of posts json data.
5. Open one post (or more), and then try restarting the app and navigating to the opened posts. You should see your previously opened posts still open in the UI!
