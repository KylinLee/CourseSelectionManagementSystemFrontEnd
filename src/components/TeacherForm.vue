<template>
    <div>
        <el-form class="align-form" ref="form" label-position="top" :model="teacher" 
                 label-width="80px">
            <el-form-item label="教职工号">
                <el-input v-model="teacher.uid"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="teacher.name"></el-input>
            </el-form-item>
            <el-form-item label="学院">
                <el-input v-model="teacher.institute"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="teacher.password" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="sendData">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "TeacherForm",
        data(){
            return {
                teacher: {
                    uid: "",
                    password: "",
                    institute: "",
                    name: ""
                }
            }
        },
        methods:{
            sendData(){
                this.$message({
                    message: "添加教师成功",
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