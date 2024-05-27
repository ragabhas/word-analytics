
export default function Textarea() {
  return (
    <textarea className="textarea"
    placeholder="Enter your text"
    spellCheck="false"
    onChange={(e)=>{
        console.log(e.target.value);
    }}/>
  )
}
