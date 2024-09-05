import { useState } from "react"


export const SelectTheme = ({onChange}:{
    onChange : (value: string) => void
}) => {
    const[selectedTheme, setSelectedTheme] = useState("Theme")
    const handlerChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        const value = e.target.value;
        setSelectedTheme(value)
        onChange(value)
    }
    console.log(selectedTheme);
    return <form className="max-w-sm mx-auto">
      
      <select id="Theme"
       onChange={handlerChange}
       className="bg-gray-50 border p-1 border-gray-300 text-gray-900 text-xs rounded-full focus:ring-blue-500 focus:border-blue-500 block max-w-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
        <option selected>Theme</option>
        <option value="vs-dark">VS Dark</option>
        <option value="light">Light</option>
        </select>
    </form>
}