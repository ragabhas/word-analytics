import Statistics from "./Statistics";
import Textarea from "./Textarea";
import { useState } from "react";
import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    numberOfCharachters: text.length,
    instagramCharachtersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharachtersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Statistics stats={stats} />
    </main>
  );
}
