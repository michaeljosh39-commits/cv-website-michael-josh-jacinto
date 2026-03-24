# MCP Functionality Verification

## 1. MCP Server Connection Proof (Claude Desktop)

Add screenshots showing each connected server:

- Rolldice server connected: `screenshots/mcp-rolldice-connected.png`
- Bootcamp AI Agent server connected: `screenshots/mcp-bootcamp-agent-connected.png`
- Calendar Booking server connected: `screenshots/mcp-calendar-connected.png`
- GitHub server connected: `screenshots/mcp-github-connected.png`

<img width="293" height="372" alt="image" src="https://github.com/user-attachments/assets/afd83ba5-9bc6-4af7-a4f1-7a2a7f177c5c" />


## 2. GitHub MCP Usage Example

### Example Task
Use GitHub MCP to query repositories for account `michaeljosh39-commits`.

### Evidence to Include
- Screenshot of the MCP query request in Claude Desktop:
  - `Search repositories for user:michaeljosh39-commits`
- Screenshot of returned repository list.
- Screenshot path suggestion: `screenshots/mcp-github-repo-query.png`

![GitHub MCP Query Example](screenshots/mcp-github-repo-query.png)

## 3. Git Commit History Verification

Current visible commit history in local repository:

```text
a0b8cb8 Update CV
```

### Requirement Check
Minimum acceptance requires at least 5 meaningful commits.

Current status: Not yet met in this local history snapshot.

### Recommended commit workflow to satisfy requirement
Run separate commits for meaningful milestones, for example:

1. `docs: add rubric-aligned README with checklist and MCP notes`
2. `docs: add 500-word reflection on AI agent developer mindset`
3. `docs: add verification guide and screenshot checklist`
4. `docs: add screenshots for environment and MCP connectivity`
5. `chore: final documentation polish and acceptance review`

After making these commits, update this section with:

```bash
git log --oneline -n 10
```

and paste the resulting output.

## 4. Minimum Acceptance Criteria Tracking

- [ ] All 4 MCP servers demonstrably connected
- [ ] At least 5 meaningful commits
- [ ] All screenshots clear and readable
- [ ] Written content demonstrates understanding of AI Agent Developer concepts

## 5. Submission Checklist

- [ ] README.md completed with screenshots and troubleshooting notes
- [ ] reflection.md finalized (500 words)
- [ ] VERIFICATION.md updated with final proof artifacts
- [ ] All screenshot files added under `screenshots/`
- [ ] Changes committed and pushed to GitHub
