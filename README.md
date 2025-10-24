# Node.js Razd Example

This is a Node.js project configured for use with [Razd CLI](https://github.com/razd-cli/razd) - a streamlined project setup tool that integrates git, mise, and taskfile.

## Quick Start with Razd

### Prerequisites
- [mise](https://mise.jdx.dev/getting-started.html) - Required for tool management
- [razd](https://github.com/razd-cli/razd) - Install via mise: `mise use -g razd`

### Setup Project
```bash
# Clone and setup (if cloning from repository)
razd up https://github.com/razd-cli/razd-nodejs-example.git

# Or setup existing local project
cd razd-nodejs-example
razd up
```

### Available Tasks
```bash
# Start development server (default task)
razd task

# Or explicitly run development server
razd task dev

# Setup project dependencies
razd task setup

# Start production server
razd task start

# Clean dependencies
razd task clean

# View all available tasks
task --list
```

## Manual Setup (without Razd)

If you prefer not to use Razd:

```bash
# Install Node.js version specified in mise.toml
mise install

# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

- `index.js` - Main application entry point with simple HTTP server
- `Taskfile.yml` - Task definitions for Razd/Task runner
- `mise.toml` - Node.js version specification
- `package.json` - npm package configuration

## Features

- 🚀 One-command setup with Razd
- 🔄 Hot reload development server
- 📦 Automatic tool version management with mise
- 🎯 Task-based workflow with clear descriptions

## Resources

- [Razd CLI](https://github.com/razd-cli/razd) - Streamlined project setup
- [Task](https://taskfile.dev/) - Task runner / build tool
- [mise](https://mise.jdx.dev/) - Development environment management
