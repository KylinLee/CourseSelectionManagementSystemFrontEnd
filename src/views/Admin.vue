<template>
    <el-container id="app">
        <el-header>
            选课管理系统
        </el-header>
        <el-container>
            <el-aside width="240px">
                <el-menu :default-active="$route.path" :router="true">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">课程管理</span>
                        </template>
                        <el-menu-item-group>
                            <span slot="title">编辑</span>
                            <el-menu-item index="/admin/add_course" >课程录入</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="查看">
                            <el-menu-item index="/admin/all_course">所有课程</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span slot="title">教师管理</span>
                        </template>
                        <el-menu-item-group>
                            <span slot="title">编辑</span>
                            <el-menu-item index="/admin/add_teacher">教师信息录入</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="查看">
                            <el-menu-item index="/admin/all_teacher">查看教师信息</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-document"></i>
                            <span slot="title">学生管理</span>
                        </template>
                        <el-menu-item-group>
                            <span slot="title">编辑</span>
                            <el-menu-item index="/admin/add_student">学生信息录入</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="查看">
                            <el-menu-item index="/admin/all_student">查看学生信息</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
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
        name: "Admin",
        data() {
            return {};
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
