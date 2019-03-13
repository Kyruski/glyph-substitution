# Glyph Substitution Bot

This bot was made for streamers and moderators who are tired of loopholes around banned words in a chat

## Summary

The purpose of this bot is to recognize glyph substitutions - or letters/unicode that look similar to eachother - that are used in order to get around banned words in a chat. E.x.

## Problem

The word `apple` is banned in a chat. The user can type `áppłê` and a normal chat bot will most likely not catch this.

## Solution

This bot has a list of almost 2000 glyph substitutions for alphabetical characters. This is ~75 glyphs for each letter! The bot will make all permutation based off of the specified substitutions, and check to see if the banned word is contained in any of these permutations. Additionally, new words and new glyphs can be seemlessly added.

## How to Get Started

Create a `.env` file in the main directory with `BOT_USERNAME=` (username on twitch to use), `CHANNEL_NAME=` (optional default channel), and `OAUTH_TOKEN=` (the OAUTH from Twitch). Just run `npm start` as this will install all depenedencies, build the js bundles, and start electron. All glyphs and banned words are stored in .txt files in the /lib/dependencies/ directory.
