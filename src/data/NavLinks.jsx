import  KeyboardAlt  from '@mui/icons-material/KeyboardAlt'
import  FilterDrama  from '@mui/icons-material/FilterDrama'
import  Info  from '@mui/icons-material/Info'
import  SmartToy from '@mui/icons-material/SmartToy'
import ImageSearchIcon from '@mui/icons-material/ImageSearch';

export default function NavLinks() {
    return [
        {name:"Bot",Icon:<SmartToy/>,link:"/"},
        {name:"Editor",Icon:<KeyboardAlt/>,link:"/editor"},
        {name:"Images",Icon:<ImageSearchIcon/>,link:"/images"},
        {name:"Recent",Icon:<FilterDrama/>,link:"/recent"},
        {name:"Blogs",Icon:<Info/>,link:"/blog"},
    ]
}