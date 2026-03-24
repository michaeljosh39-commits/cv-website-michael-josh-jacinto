# AI Agent Developer Workshop Documentation

## Student Information
- Name: Michael Josh Jacinto
- Workshop Cohort: Week 2
- Repository: https://github.com/michaeljosh39-commits/cv-website-michael-josh-jacinto

## Development Environment Checklist

### 1. Node.js Installed
- Command: `node --version`
- Result: `v24.9.0`
- Screenshot: add image at `screenshots/node-version.png`

![Node.js Version Screenshot](screenshots/node-version.png)

### 2. Git Installed
- Command: `git --version`
- Result: `git version 2.51.0.windows.2`
- Screenshot: add image at `screenshots/git-version.png`

![Git Version Screenshot](screenshots/git-version.png)

### 3. VS Code Insider with GitHub Copilot Enabled
- Verification needed: VS Code Insider window with Copilot chat/extension visible and enabled.
- Screenshot: add image at `screenshots/vscode-insiders-copilot.png`

![VS Code Insiders + Copilot Screenshot](screenshots/vscode-insiders-copilot.png)

### 4. Claude Desktop with 4 MCP Servers Connected
- Required MCP servers:
	- Rolldice
	- Bootcamp AI Agent
	- Calendar Booking
	- GitHub
- Screenshot: add image at `screenshots/claude-mcp-servers-connected.png`

![Claude Desktop MCP Servers Screenshot](screenshots/claude-mcp-servers-connected.png)

## MCP Server Purpose and Functionality

### Rolldice MCP Server
- Purpose: Provides deterministic/random dice operations for demos, testing, and lightweight simulation tasks.
- Functionality: Accepts dice expressions and returns computed results that can be used by agents for workflows and examples.

### Bootcamp AI Agent MCP Server
- Purpose: Central server for workshop-specific agent tasks and guided activities.
- Functionality: Exposes bootcamp tools/prompts that support structured exercises, validation, and workflow automation.

### Calendar Booking MCP Server
- Purpose: Scheduling and appointment coordination through AI tools.
- Functionality: Lets agents read availability, create bookings, and manage calendar events in supported systems.

### GitHub MCP Server
- Purpose: Repository and collaboration automation from AI chat interfaces.
- Functionality: Enables actions like searching repositories, inspecting commits/issues, and automating pull request workflows.

## Troubleshooting Notes

### Issue 1: Push denied to wrong GitHub account
- Error observed: Permission denied to account `cdrcrmss`.
- Cause: Cached credentials were linked to a different GitHub account.
- Resolution:
	- Cleared saved credential using `cmdkey /delete:git:https://github.com`
	- Re-authenticated in browser as `michaeljosh39-commits`
	- Re-ran push successfully

### Issue 2: Non-fast-forward push rejection
- Error observed: `main -> main (fetch first)`
- Cause: Remote branch had commits not present locally.
- Resolution:
	- Fetched and pulled remote updates
	- Resolved merge/rebase conflicts
	- Pushed again after histories were synchronized

### Issue 3: Git not initialized in workspace
- Error observed: `fatal: not in a git directory`
- Cause: `.git` directory was missing.
- Resolution:
	- Ran `git init`
	- Set branch and remote
	- Reconfigured `user.name` and `user.email`

## Project Run Commands
- Install dependencies: `npm install`
- Start development server: `npm run dev`
- Build production bundle: `npm run build`
- Start production server: `npm run start`
