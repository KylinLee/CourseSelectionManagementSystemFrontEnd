<template>
    <el-container id="app">
        <el-header>
            <h1>教师课程管理</h1>
        </el-header>
        <el-container>
            <el-aside width="240px">
                <el-menu :default-active="$route.path" :router="true">
                    <el-menu-item index="/teacher/teach_course">
                        <i class="el-icon-menu"></i>
                        <span slot="title">我的课程</span>
                    </el-menu-item>
                    <el-menu-item index="/teacher/profile">
                        <i class="el-icon-setting"></i>
                        <span slot="title">修改个人信息</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main><router-view :key="$route.path"></router-view></el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Teacher",
        data() {
            return {
                
            };
        },
        methods: {
            // handleOpen(key, keyPath) {
            //     console.log(key, keyPath);
            // },
            // handleClose(key, keyPath) {
            //     console.log(key, keyPath);
            // }
        }
    }
</script>

<style>
</style>
