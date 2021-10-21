import { useSelector } from "react-redux";

const Topics = () => {
    const { applications } = useSelector(state => state.applications)
    return [
        {
            item: applications.length,
            path: "/admissionRequest",
            subject: "Admission Request",
        },
        {
            item: "44",
            path: "/approveRequest",
            subject: "Approve Request",
        },
        {
            item: "44",
            path: "/addDepartment",
            subject: "Add Department",
        },
        {
            item: "44",
            path: "/addDepartmentWise",
            subject: "Add DepartmentWise",
        },
        {
            item: "44",
            path: "/viewCourses",
            subject: "View Courses",
        },
        {
            item: "44",
            path: "/assignCourses",
            subject: "Assign Course",
        },
        {
            item: "44",
            path: "/semesterRegistrationRequest",
            subject: "Semester Registration Request",
        },
        {
            item: "44",
            path: "/approveResult",
            subject: "Approve Results",
        },
        {
            item: "44",
            path: "/publishResults",
            subject: "Publish Results",
        },
        {
            item: "44",
            path: "/Events",
            subject: "Events",
        },
        {
            item: "44",
            path: "/notice",
            subject: "Notice",
        },

    ]
}
export default Topics;