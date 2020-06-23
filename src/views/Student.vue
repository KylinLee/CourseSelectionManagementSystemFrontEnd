<template>
    <el-container id="app">
        <el-header>
            学生选课系统
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
                        <el-submenu index="1-4">
                            <span slot="title">选项4</span>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
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
