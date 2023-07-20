import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

    return <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 bg-offwhite`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/*LEFT SIDE*/}
                    <img alt="logo" src={Logo} className="h-10"/>
                    
                    {/*RIGHT SIDE*/}
                    {isAboveMediumScreens ? (
                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                <p>FREE QUOTE</p>
                            </div>
                        </div>)
                        : (
                            <button className="rounded-full bg-secondary p-2"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <Bars3Icon className="h-6 w-6 text-white"></Bars3Icon>
                            </button>
                        )} 
                </div>
            </div>
        
        </div>    
    </nav>;
}

export default Navbar