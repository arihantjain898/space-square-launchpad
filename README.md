# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/bb11787f-d263-493c-908b-efc1701da62e

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/bb11787f-d263-493c-908b-efc1701da62e) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/bb11787f-d263-493c-908b-efc1701da62e) and click on Share -> Publish.

## Deploying to GitHub Pages (this repo)

This repository already includes a GitHub Actions workflow that builds to `dist` and publishes to Pages. To ensure every file update reaches the live site:

1. Push to the active `work` branch (or merge it into `main`). The Pages workflow triggers on both branches.
2. In your repository settings, set **Pages → Source** to **GitHub Actions** so the workflow output is served instead of the raw repository files.
3. Wait for the **Deploy to GitHub Pages** workflow to complete. It uploads the full build, so all changed files (not just `index.html`) are deployed.
4. Keep the committed `public/CNAME` file if you’re using the `spacesquare.dev` custom domain so Pages applies it on each deploy.

### Making sure GitHub has *all* your changes

- **Merge the PR** into `main` (or `work`), then delete the branch so you don’t accidentally keep pushing to an old head commit.
- **Pull the latest branch locally** (`git pull origin main` or `git pull origin work`) before editing, so your next push includes everything currently on GitHub.
- **Push from the same branch** that the Pages workflow listens to (`main` or `work`). If you push to another branch without merging, Pages won’t see those files.
- After the merge/push, open the repository’s **Actions → Deploy to GitHub Pages** run and confirm it finished successfully; if it failed, rerun after fixing the error so the full build is published.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
