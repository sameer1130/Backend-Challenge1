import Share from "../images/Share.svg"
import {v4 as uuidv4} from "uuid"
import {useNavigate} from 'react-router-dom'
import { useState } from "react"


export const Button = ({codeModified, shareUrl,setShareUrl}: {
    codeModified: boolean,
    shareUrl : string | null,
    setShareUrl: React.Dispatch<React.SetStateAction<string | null>>
}) =>{

    const [isShared, setIsShare] = useState(false);
    const navigate = useNavigate();
    console.log(shareUrl)
    const handleShare = () =>{
        
            const uniqueId = uuidv4();
            const url = `http://localhost:5173/${uniqueId}`

            setShareUrl(url)
            setIsShare(true)
            navigate(`/${uniqueId}`)
        
    };

    return (<>
    {!isShared ? (<button type="button" onClick={handleShare} className="py-2 px-8 flex justify-center item-center me-2 mb-2 text-sm
     font-medium text-gray-900 focus:outline-none bg-white rounded-full
      border border-gray-200 hover:bg-gray-100 hover:text-blue-700 
      focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 
      dark:bg-gray-800 dark:text-gray-400
     dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
     
     ><img src={Share} alt="Share Icon" className="inline-block w-5 h-5 mr-2" />Share</button>) :
     (<>
                   {codeModified && (
                        <button
                            type="button"
                            onClick={handleShare}
                            className="py-2 px-8 flex justify-center items-center me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            Share Again
                        </button>
                    )}
     </>
     )}
    
     </>)
}