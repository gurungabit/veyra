import { defineGeneratedStory, type StoryStep } from "../runner.js";

export const meta = {
  "name": "Story2[Place Holder]",
  "description": "Runs the Story2[Place Holder] story route.",
  "tags": [
    "story",
    "shadowsof",
    "doom",
    "oct",
    "13th",
    "story2",
    "place",
    "holder"
  ],
  "version": "0.1.0"
};

const steps: StoryStep[] = [];

export const definition = defineGeneratedStory(
  {
    id: "story.shadowsof-doom-oct-13th.story2-place-holder",
    category: "Story",
    map: "holder",
    meta
  },
  steps
);

export const main = definition.run;

export default definition;
