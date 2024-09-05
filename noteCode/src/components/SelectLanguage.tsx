import { useState } from "react"

export const SelectLanguage = ({onChange} :{
    onChange : (value: string) =>  void
}) => {
    const [selectedLanguage, setSelectedlanguage] = useState("Language");
    const handlerChange = (event: React.ChangeEvent<HTMLSelectElement>)=> {
        const value = event.target.value
        setSelectedlanguage(value)
        onChange(value)
    }
    return <form className="max-w-sm mx-auto">
      
      <select id="Language"
       onChange={handlerChange} 
       className="bg-gray-50 border  border-gray-300 text-gray-900 p-1 text-xs rounded-full focus:ring-blue-500 focus:border-blue-500 block max-w-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
        <option selected>Language</option>
        <option value="html">HTML</option>
        <option value="javascript">Javascript</option>
        <option value="typescript">TypeScript</option>
        <option value="css">CSS</option>
        <option value="xml">XML</option>
        <option value="markdown">Markdown</option>
        <option value="cpp">C++</option>
        <option value="csharp">C#</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="php">PHP</option>
        <option value="ruby">Ruby</option>
        <option value="go">Go</option>
        <option value="rust">Rust</option>
        <option value="sql">SQL</option>
        <option value="yaml">YAML</option>
        <option value="swift">Swift</option>
        <option value="kotlin">Kotlin</option>
        <option value="r">R</option>
        <option value="perl">Perl</option>
      </select>
    </form>
}