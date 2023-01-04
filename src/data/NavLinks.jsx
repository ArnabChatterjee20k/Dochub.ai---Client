import  KeyboardAlt  from '@mui/icons-material/KeyboardAlt'
import  FilterDrama  from '@mui/icons-material/FilterDrama'
import  Info  from '@mui/icons-material/Info'
import  SmartToy from '@mui/icons-material/SmartToy'

export default function NavLinks() {
    return [
        {name:"Bot",Icon:<SmartToy/>,link:"/"},
        {name:"Editor",Icon:<KeyboardAlt/>,link:"/editor"},
        {name:"Recent",Icon:<FilterDrama/>,link:""},
        {name:"About",Icon:<Info/>,link:""},
    ]
}