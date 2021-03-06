import Vue from "vue";
import VueRouter from "vue-router";
import Admin from "../views/Admin";
import CourseForm from "../components/CourseForm";
import SelectCourse from "../components/SelectCourse";
import Student from "../views/Student";
import AdminCourseList from "../components/AdminCourseList";
import TeacherList from "../components/TeacherList";
import StudentList from "../components/StudentList";
import UnselectCourse from "../components/UnselectCourse";
import StudentForm from "../components/StudentForm";
import TeacherForm from "../components/TeacherForm";
import Teacher from "../views/Teacher"
import TeacherCourseList from "../components/TeacherCourseList";

Vue.use(VueRouter);

const routes = [
    {
        path: "/admin",
        name: "Admin",
        component: Admin,
        children: [
            {
                path: "add_course",
                name: "AddCourse",
                component: CourseForm
            },
            {
                path: "all_course",
                name: "AllCourse",
                component: AdminCourseList
            },
            {
                path: "all_teacher",
                name: "AllTeacher",
                component: TeacherList
            },
            {
                path: "all_student",
                name: "AllStudent",
                component: StudentList
            },
            {
                path: "add_student",
                name: "AddStudent",
                component: StudentForm
            },
            {
                path: "add_teacher",
                name: "AddTeacher",
                component: TeacherForm
            }
        ]
    },
    {
        path: "/student",
        name: "Student",
        component: Student,
        children: [
            {
                path: "select_course",
                name: "SelectCourse",
                component: SelectCourse
            },
            {
                path: "unselect_course",
                name: "UnselectCourse",
                component: UnselectCourse
            },
            {
                path: "profile",
                name: "Profile",
                component: StudentForm
            }
        ]
    },
    {
        path: "/teacher",
        name: "Teacher",
        component: Teacher,
        children: [
            {
                path: "profile",
                name:"Profile",
                component: TeacherForm
            },
            {
                path: "teach_course",
                name: "TeachCourse",
                component: TeacherCourseList
            }
        ]
    }
];

const router = new VueRouter({
    routes
});

export default router;
