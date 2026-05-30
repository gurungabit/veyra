import { defineGeneratedStory, type StoryStep } from "./runner.js";

export const meta = {
  "name": "Tutorial Story",
  "description": "This will finish the Tutorial Story.",
  "tags": [
    "story",
    "quest",
    "tutorial"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [];

export const definition = defineGeneratedStory(
  {
    id: "story.tutorial",
    category: "Story",
    map: "story",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
