<template>
    <div>
        <el-table
            :data="teachers"
            style="width: 100%">
            <el-table-column
                prop="uid"
                label="教职工号"
                align="center"
                header-align="center"
            >
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
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
                header-align="center"
                align="center"
                label="修改">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        type="warning"
                        @click="alterTeacher(scope.$index, scope.row)">修改
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column
                header-align="center"
                align="center"
                label="删除"
            >
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        type="danger"
                        @click="deleteTeacher(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import gql from "graphql-tag"
    
    export default {
        name: "TeacherList",
        data() {
            return {
                teachers: []
            }
        },
        apollo: {
            teachers: gql`query{
                teachers {
                    uid
                    name
                    institute
                }
            }`
        },
        methods: {
            alterTeacher(index, row){
                console.log(index, row)
            },
            deleteTeacher(index, row){
                console.log(index, row)
            }
        }
    }
</script>

<style scoped>

</style>