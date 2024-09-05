
import  MonacoEditor  from '@monaco-editor/react';
import { Button } from './Button';
import Copy from "../images/link.svg"
import { SelectLanguage } from './SelectLanguage';
import { SelectTheme } from './SelectTheme';
import { useState } from 'react';

export const MonacoEditorComponent = () => {
    const [selectedLanguage, setSelectedlanguage] = useState("html");
    const [selectedTheme, setSelectedTheme] = useState("vs-dark");
    const [codeModified, setCodeModified] = useState(false)
    const [shareUrl, setShareUrl] = useState<string | null>(null)
    
    const handlerEditorChange = (value: string | undefined ) =>{
        setCodeModified(true)
    }
    const handlerSelectedLanguage = (language: string) =>{
        setSelectedlanguage(language)
        console.log(language)
    }
    const handlerSelectedTheme = (theme: string) =>{
        setSelectedTheme(theme)

    }

    const handleCopyLink =() =>{
        if(shareUrl){
            const unique = shareUrl.split("/")
            const uniqueId = unique[3]
            navigator.clipboard.writeText(shareUrl)
            alert("Link Copied to Clipboard!")
        }
        setCodeModified(false)
    }


    return (
        
        <div className="w-full h-full ">
            <div className='relative'>

                <MonacoEditor 
                width="100vh"
                height="calc(80vh - 4rem)"
                defaultLanguage='html'
                language={selectedLanguage}
                defaultValue="//write your code here"
                className='w-full h-auto -mt-40'
                theme={selectedTheme}
                onChange={handlerEditorChange}
                />
            </div>
            <div className='absolute z-10 bottom-3 pl-5'>
            
            <SelectLanguage onChange={handlerSelectedLanguage}/>
            </div>
            <div className='absolute z-10 bottom-3 ml-20 pl-10'>
            
            <SelectTheme onChange={handlerSelectedTheme} />
            </div>
            {shareUrl && (<div className='absolute z-10 bottom-3 right-40'>
            
            <img src={Copy} onClick={handleCopyLink} alt="Copy Icon" className="inline-block w-8 h-8 mr-5" />
            {codeModified ? <span className="text-slate-500 pr-6">{shareUrl.split("/")[3].slice(0, 6).concat("...")}</span> : ""}
           
            </div>)
            
            }
            <div className='absolute z-10 bottom-1 right-4'>
            
                <Button codeModified={codeModified} shareUrl={shareUrl} setShareUrl={setShareUrl}/>
            </div>
        </div>
    )

}