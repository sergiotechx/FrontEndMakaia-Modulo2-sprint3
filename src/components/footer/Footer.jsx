'use client'
import React, { useContext, useState } from 'react'
import { usePathname,useRouter } from 'next/navigation'
import './footer.scss'
import { StoreContext } from '@/store/StoreProvider'
import { getProfileAlldata } from '@/services/profileAlldata'
import { types } from '@/constants/Constants'


const Footer = () => {
    const Menus = [
        { name: "Home", icon: "home-outline", dis: "1px" },
        { name: "Find", icon: "search-outline", dis: "57px" },
        { name: "More", icon: "add-outline", dis: "114px" },
        { name: "Advice", icon: "notifications-outline", dis: "171px" },
        { name: "profile", icon: "person-outline", dis: "228px" },
    ]

    const [active, setActive] = useState(0)

    const [ovalPosition, setOvalPosition] = useState('1px');
    const currentPath = usePathname()
    const router = useRouter();
    const { authStore,perfilDispatch} = useContext(StoreContext);
    const goTo = async (index)=>{
        switch(index){
         case 0:
            router.push('/')
            break
            case 4:
             
            let { basicUserData } = await getProfileAlldata(authStore.id)
                if (Object.keys(basicUserData).length > 0) {
                  perfilDispatch({ type: types.perfilsetData, payload: basicUserData })
                  router.push(`/perfil`)
                }
                break
        }
    }
    return (
        <div className="footer">
            {currentPath != '/login' ?
                (
                    <ul className='ul'>
                        <span className='oval' style={{ transform: `translateX(${ovalPosition})` }}>
                            <span className='cornerL'>
                                <span className='cornerL__re'>

                                </span>

                            </span>
                            <span className='cornerR'>
                                <span className='cornerR__rel'>

                                </span>
                            </span>
                        </span>
                        {
                            Menus.map((menu, i) => (
                                <li key={i} className='li'>
                                    <a onClick={() => { setActive(i); setOvalPosition(menu.dis); goTo(i)}}>
                                        <span className={`icon ${i === active && 'active'}`}>
                                            <ion-icon name={menu.icon}></ion-icon>
                                        </span>
                                        <span className={` ${active === i ? 'show' : 'ocult'}`}>{menu.name}</span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                )
                :
                null
            }
        </div>
    )
}

export default Footer