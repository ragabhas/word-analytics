import { useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
  const [text, setText] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [warningText, setWarningText] = useState("");

  const handleChange = (event) => {
    let newText = event.target.value;
    if (newText.includes("<script>")) {
      newText = newText.replace("<script>", "");
      setShowWarning(true);
      setWarningText("No <script> tag allowed.");
    } else if (newText.includes("@")) {
      newText = newText.replace("@", "");
      setShowWarning(true);
      setWarningText("No @ symbol allowed.");
    }

    setText(newText);
  };
  return (
    <div className="textarea">
      <textarea
        value={text}
        placeholder="Enter your text"
        spellCheck="false"
        onChange={handleChange}
      />
      {showWarning && <Warning warningText={warningText} />}
    </div>
  );
}
