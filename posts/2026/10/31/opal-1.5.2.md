---
path: '/blog/2026/10/31/opal-1.5.2'
title: 'Opal 1.5.2 - Release'
author: 'CodeDead'
date: '2026-10-31'
abstract: 'Opal v1.5.2 has just been released. This update adds HTTP proxy support for update checks, a new Fastest Metronome sound, improved playback controls, smarter platform-aware updates and updated dependencies...'
categories: 'Java, News, Opal'
---

## Information

![Opal](https://i.imgur.com/VbN1wnN.png)

Opal v1.5.2 has just been released. This release focuses on smoother playback, more reliable updates and keeping Opal up to date with the latest Java and JavaFX releases.

Here's what's new:

- **HTTP proxy support** — Update checks can now go through a custom HTTP proxy, with optional proxy authentication. Proxy passwords are encrypted before they are stored.
- **New "Fastest Metronome" sound** — A new metronome option has been added to the sound library.
- **Playback improvements** — Play/pause now works consistently across built-in and custom sounds. Custom sounds loop and follow your global balance and media-button settings, the countdown timer is more accurate, and Ctrl+O opens your sound presets.
- **Smarter update handling** — Opal now uses semantic version comparisons and selects updates based on your platform, architecture and whether you're using a portable build. Update checks also use the new CodeDead update API.
- **Dynamic About window** — The application version and copyright year are loaded at runtime instead of being hard-coded.
- **Localization fixes** — Translations have been corrected across several languages, and the legacy Japanese locale (`jp-JP`) is now migrated to the standard `ja-JP` locale.
- **Toolchain upgrades** — Gradle 9.8.2, JDK 27, JavaFX 27.0.1 and several dependencies have been upgraded.
- **Bug fixes** — Tray behaviour, the Cupertino Light theme, help and license document refresh, and AppImage packaging have all been improved.

## What's Changed

- feat: updated Gradle wrapper, dependencies, JDK, and JavaFX versions by @CodeDead in [#149](https://github.com/CodeDead/opal/pull/149)
- feat: add proxy configuration support with encryption and update test cases by @CodeDead in [#150](https://github.com/CodeDead/opal/pull/150)
- feat: playback improvements and new Fastest Metronome sound by @CodeDead in [#151](https://github.com/CodeDead/opal/pull/151)
- feat: dynamically fetch app version and copyright year, add platform-aware updates by @CodeDead in [#152](https://github.com/CodeDead/opal/pull/152)
- feat: version bump by @CodeDead in [#153](https://github.com/CodeDead/opal/pull/153)

**Full Changelog**: [https://github.com/CodeDead/opal/compare/v1.5.1...v1.5.2](https://github.com/CodeDead/opal/compare/v1.5.1...v1.5.2)

## Download

You can download Opal v1.5.2 from GitHub:
[Opal v1.5.2](https://github.com/CodeDead/opal/releases/tag/v1.5.2)

## Other

Feel free to [contact us](/contact) if you have any questions or if you need help.
