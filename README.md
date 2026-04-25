# ChatLogVault

Turn AI chat logs into structured, reusable knowledge.

ChatLogVault is a personal knowledge management tool for AI chat logs.  
It allows you to store, organize, and restructure conversations from ChatGPT and other AI platforms into reusable knowledge.

---

## Features

- Import chat logs via API (Tampermonkey → API)
- Organize chats with folders (hierarchical) and tags
- Mark favorites
- Hide unnecessary messages (toggle visibility)
- Pin important messages
- Add message headings and build a table of contents
- Multiple view modes: Chat-style / Markdown / JSON
- Image extraction and separate storage (UUID-based)
- i18n support (browser language with English fallback)

---

## Import Methods

ChatLogVault supports multiple ways to import chat logs:

MVP:
- Upload JSON files exported from AI chat services

Future:
- Send chat logs via API
- Use a Tampermonkey userscript to send ChatGPT conversations directly to ChatLogVault


### Tampermonkey Integration

A userscript can be used to extract chat logs from ChatGPT and send them directly to ChatLogVault via API.

This allows seamless one-click import without manual file handling.

---

## Concept

ChatLogVault is not just a log viewer.

It is designed as a **knowledge reconstruction tool**, enabling users to clean, structure, and reuse chat content.

- JSON is the source of truth
- UI states are stored separately (visibility, pin, headings)
- Users can restructure conversations into readable knowledge

---

## Tech Stack

- Nuxt 4 (Fullstack / Nitro)
- JavaScript
- Nuxt UI + Tailwind CSS
- PostgreSQL
- Drizzle ORM
- Better Auth (Google / GitHub)
- i18n (@nuxtjs/i18n)

---

## Architecture

- Unique key: `source + url`
- Upsert on import (latest JSON overwrites)
- Message states stored in separate table
- Images extracted from Base64 and stored externally
- Markdown uses placeholders: `chatlogvault:image:{id}`

---

## Status

🚧 Work in progress

This project is under active development. Features and APIs may change.


---

## License

MIT

