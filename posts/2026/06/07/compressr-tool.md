---
path: '/blog/2026/06/07/compressr-tool'
title: 'Compressr tool preview'
author: 'CodeDead'
date: '2026-06-07'
abstract: 'Compressr is a free, open-source desktop image compression tool built with Rust and Iced. It supports JPEG, PNG, GIF, WebP, BMP, and TIFF formats with batch processing, customizable quality, scaling, and EXIF metadata preservation across Windows, macOS, and Linux.'
categories: 'Rust, iced, News'
---

## Information

![Compressr App](https://i.imgur.com/h5lYwZ6.png)

We're currently working on a new desktop tool to compress images. This tool will provide a user-friendly interface for compressing images with various options and settings.
It is an extension of the [Compressr](https://compressr.codedead.com) website. The tool will be available for Windows, macOS, and Linux. The compressr tool will be available for free, and will be open-source.

## Features

Compressr is built entirely in **Rust** using the **Iced** GUI framework (v0.14) and offers the following features:

- **Batch processing** — Compress multiple images at once, or scan entire folders recursively.
- **Format support** — JPEG, PNG, GIF, WebP, BMP, and TIFF, with the ability to convert between formats.
- **Quality control** — Adjustable compression quality slider for JPEG and WebP output.
- **Resizing options** — Scale by percentage, or set explicit width and/or height (with proportional scaling when only one dimension is specified). All resampling uses the Lanczos3 filter.
- **EXIF metadata preservation** — Optionally keep EXIF data intact during compression (supported for JPEG, PNG, and WebP).
- **Progress tracking** — Real-time progress bar during batch compression
- **Compression results** — Detailed before/after file sizes and percentage saved, displayed per file and as totals.
- **Delete originals** — Optional automatic deletion of source files after successful compression.
- **Multi-language UI** — Interface (currently) available in 9 languages: English, Dutch, French, Spanish, Portuguese, Russian, Ukrainian, Chinese (Simplified), and Japanese.
- **Theme support** — All Iced built-in themes are available, with Oxocarbon as the default.
- **Auto-update** — Optional automatic update checking against the CodeDead API at startup, with one-click download.
- **Multi-window design** — Separate windows for compression, settings, about info, results, and error display — keeping the UI clean and focused.

## Technical details

- **Language:** Rust (edition 2024, minimum rustc 1.96.0)
- **UI framework:** Iced 0.14 with Tokio async runtime for responsive compression
- **Image processing:** The `image` crate for decoding/encoding, `webp` crate for WebP support, and `img-parts` for EXIF injection
- **Configuration:** Stored as `config.json` in the OS config directory (`~/.config/compressr/` on Linux, `%APPDATA%\CodeDead\Compressr\` on Windows, `~/.config/compressr/` on macOS) with atomic save (write-to-tmp then rename)
- **License:** GPL-3.0-only — fully free and open-source
- **Release targets:** Linux x86_64 (AppImage), Windows x64 (MSVC), macOS x64, macOS aarch64
- **CI:** GitHub Actions runs formatting checks and tests on every push/PR, and builds platform releases on tag pushes

If you're curious to find out more or use a pre-release version of the application, you can find the source code on [GitHub](https://github.com/CodeDead/compressr-app).

## Other

Feel free to [contact us](/contact) if you have any questions or if you need help.
