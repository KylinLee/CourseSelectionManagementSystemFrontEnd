<template>
    <div>
        <el-form class="align-form" ref="form" label-position="top" :model="student" label-width="80px">
            <el-form-item label="学号">
                <el-input v-model="student.uid"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="student.name"></el-input>
            </el-form-item>
            <el-form-item label="学院">
                <el-input v-model="student.institute"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="student.password" show-password></el-input>
            </el-form-item>
            <el-form-item label="年级">
                <el-select v-model="student.grade" filterable placeholder="请选择年级">
                    <el-option
                        v-for="grade in chart.grades"
                        :key="grade.id"
                        :label="grade.grade"
                        :value="grade.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="专业">
                <el-select v-model="student.major" filterable placeholder="请选择专业">
                    <el-option
                        v-for="major in chart.majors"
                        :key="major.id"
                        :label="major.major"
                        :value="major.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="sendData(student)">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    // import gql from "graphql-tag"
    
    import gql from "graphql-tag";

    export default {
        name: "StudentForm",
        data() {
            return {
                student: {
                    uid: "",
                    name: "",
                    password: "",
                    major: null,
                    grade: null,
                    institute: ""
                },
                chart: {
                    majors: [],
                    grades: []
                }
            }
        },
        apollo: {
            chart:{
                query: gql`query{
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
                        grades: data.grades,
                        majors: data.majors
                    };
                    return chart
                }
            }
        },
        methods: {
            sendData(){
                this.$message({
                    message: "添加学生成功",
                    type: "success"
                });
                this.courses = {};
            }
        }
    }
</script>

<style scoped>
.align-form{
    width: 400px;
    margin-left: auto;
    margin-right: auto;
}
</style>