import {
    faWifi,
    faFlask,
    faUserFriends,
    faBook,
    faBuilding,
    faMoneyBillAlt,
} from "@fortawesome/free-solid-svg-icons";

const CampusFacilitiesData = [
    {
        id: 1,
        title: "Free Wi-Fi Access",
        description:
            "Students are given access to high speed internet all over the campus through wifi.",
        icon: faWifi,
    },
    {
        id: 2,
        title: "Highly Equipped Labs",
        description:
            "There are labs equipped with modern instruments in every relevant department.",
        icon: faFlask,
    },
    {
        id: 3,
        title: "Extra Curricular Activities",
        description:
            "Students can participate in various extra curricular activities through various clubs.",
        icon: faUserFriends,
    },
    {
        id: 4,
        title: "Rich Library",
        description:
            "The university has a fully air-conditioned and computerized rich library.",
        icon: faBook,
    },
    {
        id: 5,
        title: "AC Class Rooms",
        description:
            "Classrooms are air conditioned, so the students can study in comfort.",
        icon: faBuilding,
    },
    {
        id: 6,
        title: "Up to 75% Waiver",
        description:
            "Meritorious students are rewarded with up to 75% waiver based on several criterias.",
        icon: faMoneyBillAlt,
    },
];

export default CampusFacilitiesData;