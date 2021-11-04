import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { useSelector } from "react-redux";

export const SidebarData = () => {
    const { currentUser } = useSelector(state => state.auth);

    if (currentUser?.type === 'admin' && currentUser?.name === 'Administrator') {
        return [
            {
                title: 'Home',
                path: '/adminHome',
                icon: <AiIcons.AiFillHome />,
                cName: 'nav-text'
            },
            {
                title: 'Department',
                path: '/department',
                icon: <IoIcons.IoIosPaper />,
                cName: 'nav-text'
            },
            {
                title: 'Add On Going Semester',
                path: '/addSemester',
                icon: <IoIcons.IoIosPaper />,
                cName: 'nav-text'
            },
        ]
    }
    else if (currentUser?.type === 'admission' && currentUser?.name === 'Admission') {
        return [
            {
                title: 'Home',
                path: '/admissionHome',
                icon: <AiIcons.AiFillHome />,
                cName: 'nav-text'
            },
            {
                title: 'Students',
                path: '/addStudents',
                icon: <IoIcons.IoIosPaper />,
                cName: 'nav-text'
            },
            {
                title: 'Admission Request',
                path: '/admissionRequest',
                icon: <IoIcons.IoIosPaper />,
                cName: 'nav-text'
            },
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
    else if (currentUser?.position === 'Teacher' && currentUser?.designation.toLowerCase() === 'head') {
        return [
            {
                title: 'Home',
                path: '/dashboard',
                icon: <AiIcons.AiFillHome />,
                cName: 'nav-text'
            },
            {
                title: 'Assign Course',
                path: '/assignCourses',
                icon: <IoIcons.IoMdPeople />,
                cName: 'nav-text'
            },
            {
                title: 'Approve Results',
                path: '/approveResults',
                icon: <IoIcons.IoMdHelpCircle />,
                cName: 'nav-text'
            },

            {
                title: 'new Admission',
                path: '/departmentStudents',
                icon: <IoIcons.IoMdHelpCircle />,
                cName: 'nav-text'
            },
        ]
    }


}
