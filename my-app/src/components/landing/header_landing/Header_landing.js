import React from 'react'
import './Header_landing.css'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'



export default function Header_Landing(props){
    const {setPopup, popup, popupReg, setPopupReg} = props;
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.user.isAuth)
    console.log("popup", popup);
    return (
            <div className='header'>
             <div className='header_1'>
                <div className='zns'>
                    <div className='emblem'>
                    <div className='name_zns'><h3>zns</h3></div>
                    </div>
                    <div className='zborka'>
                        <div>zborka</div>
                        <div>network</div>  
                        <div>system</div>
                    </div>
                </div>
                <div className='text_zns'>
                    <h1>ZNS.</h1>
                    <h1>Управляйте своими</h1>
                    <h1>контактами</h1>
                    <h2>Регистрируясь в ZNS, вы получаете продукт, помогающий</h2>
                    <h2>вам организовать контакты из социальных сетей, почты </h2>
                    <h2>и мессенджеров.</h2>
                </div>
                <div className='zns_button'>
                {/* <Link to='/registration'> */}
                    <button onClick={() => setPopupReg(!popupReg)}>Бесплатная регистрация</button>
                {/* </Link> */}
                </div>
            </div>

            <div className='header_2'>
                <div className='header_2_nav'>
                    <button>Функции</button>
                    <button>Контакты</button>
                    {!isAuth && <button onClick={() => setPopup(!popup)}>Вход</button>}
                    {!isAuth && <button onClick={() => setPopupReg(!popupReg)}>Регистрация</button>}
                    {/* {isAuth && <button onClick={() => dispatch(logout())}>Выход</button> */}
                    <button>Ru</button>
                </div>
                <div className='pictures'>
                    <div className='pic1'>
                        <img src='/images/contacts_cut.png'/>
                    </div>
                    <div className='pic2'>
                    <img src='/images/iPhone.png'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

