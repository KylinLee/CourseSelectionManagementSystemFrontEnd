<template>
    <div>
        <el-table
            :data="personalCourses"
            style="width: 100%">
            <el-table-column
                prop="courseId"
                label="课程号"
                align="center"
                header-align="center">
            </el-table-column>
            <el-table-column
                prop="courseName"
                label="课程名"
                align="center"
                header-align="center">
            </el-table-column>
            <el-table-column
                prop="require"
                label="必修"
                align="center"
                header-align="center">
            </el-table-column>
            <el-table-column
                prop="teachers"
                label="任课教师"
                align="center"
                header-align="center">
            </el-table-column>
            <el-table-column
                prop="time"
                label="上课时间"
                align="center"
                header-align="center">
            </el-table-column>
            <el-table-column
                prop="location"
                label="上课地点"
                align="center"
                header-align="center">
            </el-table-column>
            <el-table-column
                prop="normalGrades"
                label="平时分"
                align="center"
                header-align="center">
            </el-table-column>
            <el-table-column
                prop="finalGrades"
                label="期末成绩"
                align="center"
                header-align="center">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import gql from "graphql-tag"
    
    export default {
        name: "UnselectCourse",
        data() {
            return {
                personalCourses: []
            }
        },
        apollo: {
            personalCourses: gql`query{
                    personalCourses {
                        finalGrades
                        normalGrades
                        courseId
                        teachers
                        require
                        location
                        time
                        courseName
                    }
            }`
        }
    }
</script>

<style scoped>

</style>