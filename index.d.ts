import React from "react";

export interface Action {
  type: string;
  [key: string]: any;
}

export interface GenericObject {
  [key: string]: Array<string>;
}

export interface VoidFunction {
  (): void;
}

export interface KeyPress {
  (event: React.KeyboardEvent): void;
}

export interface AddWordType {
  (word: string): string;
}

export interface AddGlyphType {
  (glyph: string, letter: string): string;
}

export interface ToggleBotType {
  (channel: string): void;
}

export interface IsRunningType {
  (channel: string): boolean;
}

export interface AddBannedWord {
  (word: string, bannedWords: Array<string>): string;
}
