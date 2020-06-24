<template>
    <el-container id="app">
        <el-header>
            <h1>学生选课系统</h1>
        </el-header>
        <el-container>
            <el-aside width="240px">
                <el-menu :default-active="$route.path" :router="true">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">退选课</span>
                        </template>
                        <el-menu-item-group>
                            <span slot="title">选课</span>
                            <el-menu-item index="/student/select_course">选课</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="退课">
                            <el-menu-item index="/student/unselect_course">退课</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="/student/profile">
                        <i class="el-icon-menu"></i>
                        <span slot="title">修改个人信息</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view :key="$route.path"></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Student",
        data() {
            
        },
        methods: {
            
        }
    }
</script>

<style>
</style>
