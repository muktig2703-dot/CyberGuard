import {Moon,Sun} from "lucide-react";

import {useTheme} from "../../context/ThemeContext";

export default function ThemeToggle(){

    const {theme,toggleTheme}=useTheme();

    return(

        <button

        onClick={toggleTheme}

        className="rounded-xl border p-2 transition hover:scale-105"

        >

            {

                theme==="dark"

                ?

                <Sun size={18}/>

                :

                <Moon size={18}/>

            }

        </button>

    );

}