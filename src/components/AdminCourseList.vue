<template>
    <div>
        <el-table
            :data="courses"
            style="width: 100%">
            <el-table-column
                prop="courseId"
                label="课程号"
                header-align="center"
                align="center"
                width="">
            </el-table-column>
            <el-table-column
                prop="courseName"
                label="课程名"
                header-align="center"
                align="center"
                width="">
            </el-table-column>
            <el-table-column
                prop="time"
                label="上课时间"
                header-align="center"
                align="center"
                width="">
            </el-table-column>
            <el-table-column
                prop="require"
                label="必修"
                :formatter="toBool"
                header-align="center"
                align="center"
                width="">
            </el-table-column>
            <el-table-column
                prop="location"
                label="上课地点"
                header-align="center"
                align="center"
                width="">
            </el-table-column>
            <el-table-column
                prop="teachers"
                label="任课教师"
                header-align="center"
                align="center"
                width="">
            </el-table-column>
            <el-table-column
                prop="gradeCanChoose"
                label="可选年级"
                header-align="center"
                align="center"
                width="">
            </el-table-column>
            <el-table-column
                prop="majorCanChoose"
                label="可选专业"
                header-align="center"
                align="center"
                width="">
            </el-table-column>
            <el-table-column
                prop="maxStudents"
                label="课程容量"
                header-align="center"
                align="center"
                width="">
            </el-table-column>
            <el-table-column
                header-align="center"
                align="center"
                label="修改"
            >
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        type="warning"
                        @click="alterCourse(scope.$index, scope.row)">修改
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column
                header-align="center"
                align="center"
                label="删除"
            >
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        type="danger"
                        @click="deleteCourse(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import gql from "graphql-tag"
    
    export default {
        name: "CourseList",
        data() {
            return {
                courses: []
            }
        },
        apollo: {
            courses: gql`query {
                courses{
                    courseId
                    courseName
                    time
                    require
                    location
                    teachers
                    gradeCanChoose
                    majorCanChoose
                    maxStudents
                }
            }`
        },
        methods: {
            toBool(row) {
                return row.require ? "是" : "否";
            },
            deleteCourse(index, row) {
                this.$apollo.mutate({
                    mutation: gql`mutation($courseId: String!){
                        removeCourse(courseId: $courseId)
                    }`,
                    variables: {
                        courseId: row.courseId
                    },
                    optimisticResponse: {
                        __typename: 'Mutation',
                        removeCourse: {
                            __typename: 'removeCourse',
                            removeCourse: String
                        },
                    }
                }).then((res) => {
                    if (res.data.removeCourse === row.courseId) {
                        this.$message({
                            message: '删除课程成功！',
                            type: 'success'
                        });
                        this.courses.splice(index, 1);
                    } else {
                        this.$message({
                            message: '课程删除失败！',
                            type: 'error'
                        });
                    }
                })
            },
            alterCourse(index, row) {
                console.log(index, row);
            }
        }
    }
</script>

<style scoped>

</style>