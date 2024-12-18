import { Divider } from '@mui/material'
import path from 'path'
import React from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Orders from './Orders'
import OrderDetails from './OrderDetails'
import UserDetails from './UserDetails'
import Address from './Address'
import { useAppDispatch } from '../../../state/store'
import { logout } from '../../../state/authSlice'


const menu = [
    { name: "orders", path: "/account/orders" },
    { name: "profile", path: "/account" },
    { name: "Saved Cards", path: "/account/saved-card" },
    { name: "Address", path: "/account/addresses" },
    { name: "Logout", path: "/" }

]
const Account = () => {
    const navigate = useNavigate();

    const handleClick = (item: any) => 
        {navigate(item.path)
            if(item.path=='/') handleLogout()
        };
    const location = useLocation();
    const dispatch=useAppDispatch();

    const handleLogout=()=>[
        dispatch(logout(navigate))
    ]

    return (
        <div>
            <div className="px-5 lg:px-52  min-h-screen mt-10">
                <div>
                    <h1 className='text-xl font-bold pb-5'>Gao</h1>
                </div>
                <Divider />
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78vh]">
                    <section className='col-span-1 lg:border-r lg:pr-5 py-5 h-full'>
                        {
                            menu.map((item) => (
                                <div onClick={() => handleClick(item)
                                    
                                } key={item.name}
                                    className={`${item.path === location.pathname ? 'bg-primary-color text-white' : ''}
                                        py-3 cursor-pointer hover:text-white hover:bg-primary-color
                             px-5 rounded-md border-b`}>
                                    <p>{item.name}</p>
                                </div>
                            ))
                        }
                    </section>

                    <section className='right lg:col-span-2 lg:pl-5 py-5'>
                        <Routes>
                        <Route path="/" element={<UserDetails />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/order/:orderId/:orderItemId" element={<OrderDetails />} />
                        <Route path="/addresses" element={<Address />} />
                        </Routes>


                      {/* <Orders /> */}
                      {/* <OrderDetails /> */}
                      {/* <UserDetails /> */}
                      {/* <Address /> */}
                      <section className="p-10 w-full lg:w-[80%] overflow-y-auto">
              
            </section>
                    
                    
                    
                    
                    </section>

                </div>

            </div>
        </div>
    )
}

export default Account