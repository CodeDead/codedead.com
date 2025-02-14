---
path: "/blog/2022/10/17/advanced-passgen-2.0"
title: "Advanced PassGen 2.0 - Release"
author: "CodeDead"
date: "2022-10-17"
abstract: "As time goes on, so do our applications. We've just released Advanced PassGen 2.0, which is a complete rewrite of the application..."
categories: "Tauri, React, News"
---
## Information

![Advanced PassGen](https://i.imgur.com/bVTaGO7.png)

As time goes on, so do our applications. We've just released Advanced PassGen 2.0, which is a complete rewrite of the application.
We've removed the .NET dependency and instead opted to rewrite it into a Tauri application.

The reason behind this is that we want to be able to create applications that are cross-platform, without having to use Electron or .NET.
.NET does not offer cross-platform UI tools, which is why we've opted to use Tauri. Tauri is a great alternative to Electron, as it is a lot faster and uses less resources.

This means that Advanced PassGen is now a native application, which runs in your system's WebView, which is much faster and more lightweight than
what the previous version used (e.g. the .NET Framework).

In addition, because we are using Tauri, Advanced PassGen will run on macOS, Windows and Linux without requiring any dependencies to be installed!

## Changelog

* Complete rewrite in Tauri + React
* Added Dutch translation
* Added French translation
* Simplified Settings window
* Fixed https://github.com/CodeDead/Advanced-PassGen/issues/4
* Fixed https://github.com/CodeDead/Advanced-PassGen/issues/3

**Full Changelog**: https://github.com/CodeDead/Advanced-PassGen/compare/1.7.1...v2.0.0

## Download

You can download the latest version of Advanced PassGen by clicking on the following link:
[Advanced PassGen](https://codedead.com/software/advanced-passgen)

## Other

Feel free to [contact us](/contact) if you have any questions or if you need help.
