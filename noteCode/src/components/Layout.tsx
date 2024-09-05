import backgroundImage from "../images/Hero-Background-notecode@2x.png";
import Logo from "../images/NoteCodeLogo.svg"
import { MonacoEditorComponent } from "./MonacoEditorComponent";

export const Layout = () => {
  return (
    
    <div className="relative bg-purple-500 h-170vh">
        <div className="relative flex justify-center items-center overflow-hidden">
            <img
                src={backgroundImage}
                alt="Background"
                className="w-full h-full"
            />
            <div className="absolute flex flex-col  justify-center item-center font-bold z-10 -mt-40">
                <div className="-mt-40 m-5">

                    <img src={Logo} alt="Logo" className="w-32 h-auto -mt-40 m-20" />
                </div>
                <div className="-mt-20 pb-20">
                    <p className="pb-4 pl-14 text-4xl">
                        Create & Share 
                    </p>
                    <p className="pt-4 text-5xl">
                        Your Code Easily
                    </p>
                </div>
                
            </div>
            
        
        </div>
        
            <div className="absolute  cursor-pointer -mt-40 ml-40"> 
                    <div className="-mt-40 ml-60">

                        <MonacoEditorComponent />
                    </div>
            </div>
        </div>
    
  );
};
