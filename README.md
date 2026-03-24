# AI Agent Developer Workshop Documentation

## Student Information
- Name: Michael Josh Jacinto
- Workshop Cohort: Week 2
- Repository: https://github.com/michaeljosh39-commits/cv-website-michael-josh-jacinto

<img width="2559" height="1471" alt="image" src="https://github.com/user-attachments/assets/b4ae1494-f73e-410a-94e2-9f132d60730b" />
<img width="2559" height="1469" alt="image" src="https://github.com/user-attachments/assets/1ac3bb92-5c7c-407d-9dff-451947600e76" />


## Development Environment Checklist

### 1. Node.js Installed
- Command: `node --version`
- Result: `v24.9.0`

### 2. Git Installed
- Command: `git --version`
- Result: `git version 2.51.0.windows.2`

### 3. VS Code Insider with GitHub Copilot Enabled
- Verification needed: VS Code Insider window with Copilot chat/extension visible and enabled.
- Screenshot: add image at `screenshots/vscode-insiders-copilot.png`


### 4. Claude Desktop with 4 MCP Servers Connected
- Required MCP servers:
	- Rolldice
	- Bootcamp AI Agent
	- Calendar Booking
	- GitHub
<img width="293" height="372" alt="image" src="https://github.com/user-attachments/assets/5f2a45d2-0742-4650-a80b-beb5a90b3cf4" />


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

## Project Run Commands
- Install dependencies: `npm install`
- Start development server: `npm run dev`
- Build production bundle: `npm run build`
- Start production server: `npm run start`
