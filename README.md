# Glyph Substitution Bot

> This bot was made for streamers and moderators who are tired of loopholes around banned words in a chat

## Summary

> The purpose of this bot is to recognize glyph substitutions - or letters/unicode that look similar to eachother - that are used in order to get around banned words in a chat. E.x.

## Problem

> The word 'apple' is banned in a chat. The user can type 'áppłê' and the chat bot will most likely not catch this.

## Solution

> This bot has a list of almost 2000 glyph substitutions for alphabetical characters. This is ~75 glyphs for each letter! The bot will make all permutation based off of the specified substitutions, and check to see if the banned word is contained in any of these permutations.

## How to Get Started

> Just run 'npm start'. All glyphs and banned words are stored in .txt files in the /lib/dependencies/ directory
