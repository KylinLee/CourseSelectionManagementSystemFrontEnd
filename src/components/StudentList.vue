<template>
    <div>
        <el-table
            :data="students"
            style="width: 100%">
            <el-table-column
                prop="uid"
                label="学号"
                align="center"
                header-align="center">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                align="center"
                header-align="center">
            </el-table-column>
            <el-table-column
                prop="grade"
                label="年级"
                align="center"
                header-align="center">
            </el-table-column>
            <el-table-column
                prop="institute"
                label="学院"
                align="center"
                header-align="center">
            </el-table-column>
            <el-table-column
                prop="major"
                label="专业"
                align="center"
                header-align="center">
            </el-table-column>
            <el-table-column
                label="修改"
                align="center"
                header-align="center">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        type="warning"
                        @click="alterStudent(scope.$index, scope.row)">编辑
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column
                label="删除"
                align="center"
                header-align="center">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        type="danger"
                        @click="deleteStudent(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import gql from "graphql-tag"
    
    export default {
        name: "StudentList",
        data() {
            return {
                students: []
            }
        },
        apollo: {
            students: gql`query{
                students {
                    uid
                    name
                    institute
                    major
                    grade
                }
            }`
        },
        methods: {
            alterStudent(index, row) {
                console.log(index, row)
            },
            deleteStudent(index, row) {
                console.log(index, row)
            }
        }
    }
</script>

<style scoped>

</style>