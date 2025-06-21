import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";


const cetagories=[
    {
        id: 1,
        name: 'All',
        image: <TiThSmallOutline className="w-[3.75rem] h-[3.75rem] text-green-600"/>,
    },
    {
        id: 2,
        name: 'Breakfast',
        image: <MdOutlineFreeBreakfast className="w-[3.75rem] h-[3.75rem] text-green-600"/>,
    },
    {
        id: 3,
        name: 'Soups',
        image: <TbSoup className="w-[3.75rem] h-[3.75rem] text-green-600"/>,
    },
    {
        id: 4,
        name: 'pasta',
        image: <CiBowlNoodles className="w-[3.75rem] h-[3.75rem] text-green-600"/>,
    },
    {
        id: 5,
        name: 'main Contents',
        image: <MdOutlineFoodBank className="w-[3.75rem] h-[3.75rem] text-green-600"/>,
    },
    {
        id: 6,
        name: 'pizza',
        image: <GiFullPizza className="w-[3.75rem] h-[3.75rem] text-green-600"/>,
    },
    {
        id: 7,
        name: 'Burger',
        image: <GiHamburger className="w-[3.75rem] h-[3.75rem] text-green-600"/>,
    },
]

export default cetagories;