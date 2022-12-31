import  KeyboardAlt  from '@mui/icons-material/KeyboardAlt'
import  FilterDrama  from '@mui/icons-material/FilterDrama'
import  Info  from '@mui/icons-material/Info'
import  SmartToy from '@mui/icons-material/SmartToy'

export default function NavLinks() {
    return [
        {name:"Bot",Icon:<SmartToy/>},
        {name:"Editor",Icon:<KeyboardAlt/>},
        {name:"Recent",Icon:<FilterDrama/>},
        {name:"About",Icon:<Info/>},
    ]
}