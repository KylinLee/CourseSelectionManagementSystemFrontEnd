<template>
    <div>
        <el-table
            :data="courses"
            style="width: 100%">
            <el-table-column
                prop="studentId"
                label="学号"
                header-align="center"
                align="center">
            </el-table-column>
            <el-table-column
                prop="studentName"
                label="姓名"
                header-align="center"
                align="center">
            </el-table-column>
            <el-table-column
                prop="grade"
                label="年级"
                header-align="center"
                align="center">
            </el-table-column>
            <el-table-column
                prop="institute"
                label="学院"
                header-align="center"
                align="center">
            </el-table-column>
            <el-table-column
                prop="major"
                label="专业"
                header-align="center"
                align="center">
            </el-table-column>
            <el-table-column
                prop="normalGrades"
                label="平时成绩"
                header-align="center"
                align="center">
            </el-table-column>
            <el-table-column
                prop="finalGrades"
                label="期末成绩"
                header-align="center"
                align="center">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "TeacherCourseList",
        data() {
            return {
                courses: [
                    {
                        studentId: "18052407",
                        studentName: "李麒麟",
                        grade: 2018,
                        institute: "海洋与环境学院",
                        major: "海洋技术",
                        finalGrades: "",
                        normalGrades: ""
                    },
                    {
                        studentId: "18052405",
                        studentName: "孔灿举",
                        grade: 2018,
                        institute: "海洋与环境学院",
                        major: "海洋技术",
                        finalGrades: "",
                        normalGrades: ""
                    },
                    {
                        studentId: "18052408",
                        studentName: "刘明龙",
                        grade: 2018,
                        institute: "海洋与环境学院",
                        major: "海洋技术",
                        finalGrades: "",
                        normalGrades: ""
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>