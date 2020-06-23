<template>
    <div>
        <el-row class="line" :gutter="40">
            <el-col :span="8">
                <div class="label">
                    课程名：
                </div>
                <el-input
                    placeholder="请输入课程名"
                    v-model="courseName"
                    clearable>
                </el-input>
            </el-col>
            <el-col :span="8">
                <div class="label">
                    课程号：
                </div>
                <el-input
                    placeholder="请输入课程号"
                    v-model="courseId"
                    clearable>
                </el-input>
            </el-col>
            <el-col :span="8">
                <div class="label">
                    开课学院：
                </div>
                <el-input
                    placeholder="请输入开课学院"
                    v-model="ownerInstitute"
                    clearable>
                </el-input>
            </el-col>
        </el-row>
        <el-row class="line" :gutter="40">
            <el-col :span="8">
                <div class="label">
                    上课时间：
                </div>
                <el-input
                    placeholder="请输入上课时间"
                    v-model="time"
                    clearable>
                </el-input>
            </el-col>
            <el-col :span="8">
                <div class="label">
                    上课地点：
                </div>
                <el-input
                    placeholder="请输入上课地点"
                    v-model="location"
                    clearable>
                </el-input>
            </el-col>
            <el-col :span="8">
                <div class="label">
                    最大人数：
                </div>
                <el-input
                    placeholder="请输入允许上课的人数"
                    v-model="maxStudents"
                    clearable>
                </el-input>
            </el-col>
        </el-row>
        <el-row :gutter="40" class="line">
            <el-col :span="8">
                <el-select v-model="gradeCanChoose" multiple filterable placeholder="可选年级">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="8">
                <el-select v-model="majorCanChoose" multiple filterable placeholder="可选专业">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="8">
                <el-select v-model="teachers" multiple filterable placeholder="任课教师">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        <el-row :gutter="40" class="line">
            <el-col :span="6">
                <el-switch
                    v-model="required"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-text="选修"
                    inactive-text="必修">
                </el-switch>
            </el-col>
        </el-row>
        <el-row :gutter="40" class="line">
            <el-col :span="6">
                <el-button type="primary" @click="addCourse">添加</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import gql from "graphql-tag"
    
    export default {
        name: "AddCourse",
        data() {
            return {
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
                        __typename: 'Mutation',
                        addCourse: {
                            __typename: 'addCourse',
                        },
                    }
                }).then((res) => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>
    .label {
        padding: 4px;
    }
    
    .line {
        margin: 40px 0;
    }
</style>