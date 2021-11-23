import LoginPage from "../components/LoginPage"
import Home from "../components/Home"
import Signup from "../components/Signup";
import CreateGroup from "../components/CreateGroup";
import Group from "../components/Group";
import CreateAssignment from "../components/CreateAssignment";
import AssignmentAdminView from "../components/AssignmentAdminView";
import SubmissionAdminView from "../components/SubmissionAdminView";
import SubmissionStudentView from "../components/SubmissionStudentView";


const pages = [
    {
        displayName: "Login to Engage Groups",
        pageLink: "/login",
        component: LoginPage,
    },
    {
        displayName: "Home",
        pageLink: "/",
        component: Home,
    },
    {
        displayName: "Home",
        pageLink: "/home",
        component: Home,
    },
    {
        displayName: "Sign up",
        pageLink: "/signup",
        component: Signup,
    },
    {
        displayName: "Create Group",
        pageLink: "/createGroup",
        component: CreateGroup,
    },
    {
        displayName: "",
        pageLink: "/group/:groupId",
        component: Group,
    },
    {
        displayName: "",
        pageLink: "/createAssignment",
        component: CreateAssignment,
    },
    {
        displayName: "",
        pageLink: "/adminOpenAssignment",
        component: AssignmentAdminView,
    },
    {
        displayName: "",
        pageLink: "/adminOpenSubmission",
        component: SubmissionAdminView,
    },
    {
        displayName: "",
        pageLink: "/studentOpenSubmission",
        component: SubmissionStudentView,
    },
]

export default pages;