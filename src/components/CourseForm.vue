<template>
    <div>
        <el-form ref="form" :model="course" label-width="80px" label-position="top">
            <el-row :gutter="40">
                <el-col :span="8">
                    <el-form-item label="课程名" prop="courseName">
                        <el-input
                            placeholder="请输入课程名"
                            v-model="course.courseName"
                            clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item prop="courseId" label="课程号">
                        <el-input
                            placeholder="请输入课程号"
                            v-model="course.courseId"
                            clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="开课学院" prop="ownerInstitute">
                        <el-input
                            placeholder="请输入开课学院"
                            v-model="course.ownerInstitute"
                            clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="40">
                <el-col :span="8">
                    <el-form-item prop="time" label="上课时间">
                        <el-input
                            placeholder="请输入上课时间"
                            v-model="course.time"
                            clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item prop="location" label="上课地点">
                        <el-input
                            placeholder="请输入上课地点"
                            v-model="course.location"
                            clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item prop="maxStudents" label="最大人数">
                        <el-input
                            placeholder="请输入允许上课的人数"
                            v-model="course.maxStudents"
                            clearable>
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="40" >
                <el-col :span="8">
                    <el-form-item prop="gradeCanChoose" label="可选年级">
                        <el-select v-model="course.gradeCanChoose" multiple filterable placeholder="可选年级">
                            <el-option
                                v-for="grade in chart.grades"
                                :key="grade.id"
                                :label="grade.grade"
                                :value="grade.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item prop="majorCanChoose" label="可选专业">
                        <el-select v-model="course.majorCanChoose" multiple filterable placeholder="可选专业">
                            <el-option
                                v-for="major in chart.majors"
                                :key="major.id"
                                :label="major.major"
                                :value="major.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item prop="teachers" label="任课教师">
                        <el-select v-model="course.teachers" multiple filterable placeholder="任课教师">
                            <el-option
                                v-for="teacher in chart.teachers"
                                :key="teacher.uid"
                                :label="teacher.name"
                                :value="teacher.uid">
                            </el-option>
                        </el-select>
                    </el-form-item>
                
                </el-col>
            </el-row>
            <el-row :gutter="40" >
                <el-col :span="6">
                    <el-form-item prop="required">
                        <el-switch
                            v-model="course.required"
                            active-color="#13ce66"
                            inactive-color="#ff4949"
                            active-text="选修"
                            inactive-text="必修">
                        </el-switch>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="40">
                <el-col :span="6">
                    <el-form-item>
                        <el-button type="primary" @click="showMessage">添加</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    
    </div>
</template>

<script>
    import gql from "graphql-tag"
    
    export default {
        name: "AddCourse",
        data() {
            return {
                course: {
                    courseId: "",
                    courseName: "",
                    time: "",
                    location: "",
                    required: false,
                    gradeCanChoose: [],
                    majorCanChoose: [],
                    teachers: [],
                    maxStudents: "",
                    ownerInstitute: ""
                },
                chart: {
                    majors: [],
                    teachers: [],
                    grades: []
                },
            }
        },
        apollo: {
            chart:{
                query: gql`query{
                    teachers {
                        uid
                        name
                    }
                    majors {
                        id
                        major
                    }
                    grades {
                        id
                        grade
                    }
                }`,
                update(data) {
                    const chart = {
                        teachers: data.teachers,
                        grades: data.grades,
                        majors: data.majors
                    };
                    return chart
                }
            }
        },
        methods: {
            addCourse() {
                this.$apollo.mutate({
                    variables: {
                        course: {
                            courseId: this.courseId,
                            courseName: this.courseName,
                            time: this.time,
                            location: this.location,
                            require: this.required,
                            gradeCanChoose: this.gradeCanChoose,
                            majorCanChoose: this.majorCanChoose,
                            teachers: this.teachers,
                            maxStudents: "",
                            ownerInstitute: this.ownerInstitute
                        }
                    },
                    mutation: gql`mutation {
                        addCourse(course:$course)
                    }`,
                    update(_, {data: {addCourse}}) {
                        console.log(addCourse);
                    },
                    optimisticResponse: {
                        __typename: "Mutation",
                        addCourse: {
                            __typename: "addCourse",
                        },
                    }
                }).then((res) => {
                    console.log(res);
                })
            },
            showMessage(){
                this.$message({
                    message: "添加课程成功",
                    type: "success"
                });
                this.course = {
                    courseId: "",
                    courseName: "",
                    time: "",
                    location: "",
                    required: false,
                    gradeCanChoose: [],
                    majorCanChoose: [],
                    teachers: [],
                    maxStudents: "",
                    ownerInstitute: ""
                };
            }
        }
    }
</script>

<style scoped>
</style>