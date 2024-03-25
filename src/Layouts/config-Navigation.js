import icon1 from '../assets/icons/nav/1.svg'
import icon2 from '../assets/icons/nav/2.svg'
import icon3 from '../assets/icons/nav/3.svg'
import icon4 from '../assets/icons/nav/4.svg'
import icon5 from '../assets/icons/nav/5.svg'
import icon6 from '../assets/icons/nav/6.svg'
import icon7 from '../assets/icons/nav/active/1.svg'
import icon8 from '../assets/icons/nav/active/2.svg'
import icon9 from '../assets/icons/nav/active/3.svg'
import icon10 from '../assets/icons/nav/active/4.svg'
import icon11 from '../assets/icons/nav/active/5.svg'
import icon12 from '../assets/icons/nav/active/6.svg'

const navConfig = [
    {
        title: 'dashboard',
        path: '/',
        icon:<img src={icon1}/>,
        icon2:<img src={icon7}/>
    },
    {
        title:'Reservations',
        path:'/reservation',
        icon:<img src={icon2}/>,
        icon2:<img src={icon8}/>
    },
    {
        title:'Pending Orders',
        path:'/pending-orders',
        icon:<img src={icon3}/>,
        icon2:<img src={icon9}/>
    },
    {
        title:'Our Menu',
        path:'/our-menu',
        icon:<img src={icon4}/>,
        icon2:<img src={icon10}/>
    },
    {
        title:'Profile',
        path:'/profile',
        icon:<img src={icon5}/>,
        icon2:<img src={icon11}/>
    },
    {
        title:'Generate Invoice',
        path:'/generate-invoice',
        icon:<img src={icon6}/>,
        icon2:<img src={icon12}/>
    },
 
]


export default navConfig;