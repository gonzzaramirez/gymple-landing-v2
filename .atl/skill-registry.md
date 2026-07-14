# Skill Registry — gymple-landing-v2

**Generated**: 2026-07-05
**Source project**: gymple-landing-v2

## Convention Files

No AGENTS.md, CLAUDE.md, .cursorrules, or other convention files exist at project root.

## Project-Level Skills (`.agents/skills/`)

| Name | Trigger | Path |
|---|---|---|
| astro | Use for Astro projects: CLI commands, project structure, core config options, adapters. | `.agents/skills/astro/SKILL.md` |
| seo-audit | Audit websites for SEO, technical, content, security, JS rendering, and AI readiness using SEOmator CLI. | `.agents/skills/seo-audit/skill/SKILL.md` |
| solid | Use when writing code, implementing features, refactoring, planning architecture, designing systems, reviewing code, or debugging. | `.agents/skills/solid/SKILL.md` |

## User-Level Skills (`~/.config/opencode/skills/`)

| Name | Trigger | Path |
|---|---|---|
| branch-pr | Create Gentle AI pull requests with issue-first checks. | `~/.config/opencode/skills/branch-pr/SKILL.md` |
| chained-pr | Split oversized changes into chained PRs. | `~/.config/opencode/skills/chained-pr/SKILL.md` |
| cognitive-doc-design | Design docs that reduce cognitive load. | `~/.config/opencode/skills/cognitive-doc-design/SKILL.md` |
| comment-writer | Write warm, direct collaboration comments. | `~/.config/opencode/skills/comment-writer/SKILL.md` |
| customize-opencode | Use ONLY when editing/creating opencode's own configuration. | `<built-in>` |
| go-testing | Go tests, go test coverage, Bubbletea teatest, golden files. | `~/.config/opencode/skills/go-testing/SKILL.md` |
| issue-creation | Create Gentle AI issues with issue-first checks. | `~/.config/opencode/skills/issue-creation/SKILL.md` |
| judgment-day | Dual review, adversarial review. | `~/.config/opencode/skills/judgment-day/SKILL.md` |
| skill-creator | New skills, agent instructions. | `~/.config/opencode/skills/skill-creator/SKILL.md` |
| skill-improver | Improve, audit, refactor skills. | `~/.config/opencode/skills/skill-improver/SKILL.md` |
| work-unit-commits | Plan commits as reviewable work units. | `~/.config/opencode/skills/work-unit-commits/SKILL.md` |

## User-Level Skills (`~/.agents/skills/`)

| Name | Trigger | Path |
|---|---|---|
| find-skills | Discover and install agent skills. | `~/.agents/skills/find-skills/SKILL.md` |

## Excluded Skills (standard filter)

- sdd-* (SDD phase skills — loaded by orchestrator)
- _shared (shared references)
- skill-registry (this tool)
