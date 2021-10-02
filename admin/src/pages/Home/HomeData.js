import { useSelector } from "react-redux";

const Topics = () => {
    const { applications } = useSelector(state =>  state.applications)
    return [
        {
            item: applications.length,
            path: "/admissionRequest",
            subject: "Admission Request",
        },
        {
            item: "44",
            path: "/semesterRegistration",
            subject: "Semester Registration",
        },
        {
            item: "44",
            path: "/results",
            subject: "Results",
        },
        {
            item: "44",
            path: "/latestNews",
            subject: "Latest News",
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
        {
            item: "44",
            subject: "Admission Request",
        },
        {
            item: "44",
            subject: "Admission Request",
        },
        {
            item: "44",
            subject: "Admission Request",
        },
    ]
}
export default Topics;