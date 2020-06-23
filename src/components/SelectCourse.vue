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
                label="操作"
            >
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        type="primary"
                        @click="selectCourse(scope.$index, scope.row)">选课
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
            selectCourse(index, row) {
                this.$apollo.mutate({
                    mutation: gql`mutation($courseId: String!){
                        selectCourse(courseId: $courseId)
                    }`,
                    variables: {
                        courseId: row.courseId
                    },
                    optimisticResponse: {
                        __typename: 'Mutation',
                        selectCourse: {
                            __typename: 'selectCourse',
                            selectCourse: String
                        },
                    }
                }).then((res) => {
                    if (res.data.selectCourse === row.courseId) {
                        this.$message({
                            message: '恭喜你，同学，选课成功！',
                            type: 'success'
                        });
                        this.courses.splice(index, 1);
                    } else {
                        this.$message({
                            message: '很遗憾，同学，选课失败！',
                            type: 'error'
                        });
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>