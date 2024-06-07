import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { useSelector } from "react-redux";

export const SidebarData = () => {
    const { currentUser } = useSelector(state => state.auth);

    if (currentUser?.type === 'admission' && currentUser?.name === 'Admission') {
        return [
            {
                title: 'Home',
                path: '/admissionHome',
                icon: <AiIcons.AiFillHome />,
                cName: 'nav-text'
            },
            {
                title: 'new Admission',
                path: '/AdmissionDetailsForm',
                icon: <IoIcons.IoIosPaper />,
                cName: 'nav-text'
            }
        ]
    }
    else if (currentUser?.type === 'account' && currentUser?.name === 'Account') {
        return [
            {
                title: 'Home',
                path: '/dashboard',
                icon: <AiIcons.AiFillHome />,
                cName: 'nav-text'
            }
        ]
    }


}
