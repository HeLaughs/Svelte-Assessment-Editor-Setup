# Summary

This Svelte component manages a quiz creation interface. It includes features like:

Dark mode support
Drag-and-drop question management
Adding individual questions
Bulk importing questions
Setting quiz metadata (title, target score, submission date)
Displaying tutor grading and real-time reports

The component uses stores for managing dark mode and likely other global states. It leverages Svelte's reactivity system and lifecycle hooks to manage its behavior and appearance.

## Developing

Installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
