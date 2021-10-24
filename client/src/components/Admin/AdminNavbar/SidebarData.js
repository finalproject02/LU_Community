import React, {useEffect} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {useSelector} from "react-redux";

export const SidebarData = () => {
    const { currentUser } = useSelector(state => state.auth);

        if (currentUser?.type === 'admin' && currentUser?.name === 'Administrator') {
            return [
                {
                    title: 'Department',
                    path: '/department',
                    icon: <IoIcons.IoIosPaper />,
                    cName: 'nav-text'
                },
            ]
        } else if (currentUser?.position === 'Teacher' && currentUser?.designation.toLowerCase() === 'head') {
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
                   title: 'View Courses',
                   path: '/viewCourses',
                   icon: <IoIcons.IoMdHelpCircle />,
                   cName: 'nav-text'
               },
               {
                   title: 'Publish Results',
                   path: '/publishResults',
                   icon: <IoIcons.IoMdHelpCircle />,
                   cName: 'nav-text'
               },
               {
                   title: 'Results',
                   path: '/results',
                   icon: <IoIcons.IoMdHelpCircle />,
                   cName: 'nav-text'
               },
               {
                   title: 'Semester Registration',
                   path: '/semesterRegistration',
                   icon: <IoIcons.IoMdHelpCircle />,
                   cName: 'nav-text'
               }
           ]
        } else if (currentUser?.position === 'Teacher' && currentUser?.designation.toLowerCase() !== 'head') {
            return [
                {
                    title: 'Home',
                    path: '/dashboard',
                    icon: <AiIcons.AiFillHome />,
                    cName: 'nav-text'
                },
            ];
        } else {
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
                    title: 'Semester Registration',
                    path: '/semesterRegistrationRequest',
                    icon: <FaIcons.FaEnvelopeOpenText />,
                    cName: 'nav-text'
                },
                {
                    title: 'Approve Results',
                    path: '/approveResults',
                    icon: <IoIcons.IoMdHelpCircle />,
                    cName: 'nav-text'
                },
                {
                    title: 'View Courses',
                    path: '/viewCourses',
                    icon: <IoIcons.IoMdHelpCircle />,
                    cName: 'nav-text'
                },
                {
                    title: 'Publish Results',
                    path: '/publishResults',
                    icon: <IoIcons.IoMdHelpCircle />,
                    cName: 'nav-text'
                },
                {
                    title: 'Results',
                    path: '/results',
                    icon: <IoIcons.IoMdHelpCircle />,
                    cName: 'nav-text'
                },
                {
                    title: 'Semester Registration',
                    path: '/semesterRegistration',
                    icon: <IoIcons.IoMdHelpCircle />,
                    cName: 'nav-text'
                },
                {
                    title: 'Payment',
                    path: '/paymentHistory',
                    icon: <IoIcons.IoMdHelpCircle />,
                    cName: 'nav-text'
                },
            ];
        }


}