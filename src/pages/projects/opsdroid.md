---
slug: opsdroid
title:  Opsdroid
date:   2017-11-20 09:30:00 +0000
categories: Projects
tag: Chat Bot
tag-icon: fas fa-robot
source: https://github.com/opsdroid/opsdroid
tech: Python Asyncio NLU
image: ../../images/projects/opsdroid.jpg
excerpt: An open source chatbot framework written in python. It is designed to be extendable, scalable and simple.
---
Opsdroid was the first open-source project that I've contributed to. I've been contributing since September 2017 and later on became a Maintainer for the project. Since I've been contributing to Opsdroid for such a long time, it will be hard to show all that I've done. If you are curious you can see [my list of commits](https://github.com/opsdroid/opsdroid/commits?author=FabioRosado).

As part of the Opsdroid team, I also have to do tasks such as triaging issues, code review PRs, help, guide and mentor new contributors, merge PR's, implement new features and also work with the team to decide plans for the project.

Let's have a look at a few things that I added to the project.

## Connectors

Connectors are used to receive and send messages from chat services.

- Added the Telegram connector
- Added the Rocket.chat connector
- Added the Twitch connector

## Parsers

Parses are Natural Language Understanding services that give opsdroid more context.

- Added the Wit.ai parser
- Added Recast.ai parser (Now known as SAP Conversational AI)
- Added IBM Watson parser
- Updated Dialogflow parser to V2

## Logging

- Done various refactors done to the logging messages
- Moved logs to appdir location - keeps consistent through all platforms
- Added filters to logging
- Added logs rotation

## Configuration and CLI

- Added configuration validation
- Added feature to run config validation without having to start the bot
- Added a flag to CLI to load a config file from a different path
- Added `list-modules` command to CLI to show a list of active modules
- Added `build` command to CLI to load and load dependencies without running the bot
- Changed config layout - use dicts of dicts instead of list of dicts

## Loader

- Updated loader to prevent the execution of arbitrary code by exploiting a vulnerability in PyYaml load method
- Refactored some parts of the loader to improve performance

## Documentation

- Created tutorials to help beginners get started with opsdroid
- Added VIM tutorial
- Added examples
- Updated contributing.md
- Updated README.md
- Added documentation for new features
- Added documentation about using parsers with a different language

## Website

- Designed a new page for the project
- Coded new page for the project
- Updated module list on the website


# Info

**Official site:** [https://opsdroid.github.io](https://opsdroid.github.io)

**GitHub repo:** [https://github.com/opsdroid/opsdroi](https://github.com/opsdroid/opsdroid)

**Creator:** [Jacob Tomlinson](https://www.jacobtomlinson.co.uk)