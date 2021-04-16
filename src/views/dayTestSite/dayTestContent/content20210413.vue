<template>
    <div>
        <text-field catalog
                    title="Restful API-什么是restfulAPI"
                    content="rest全称为表现层状态转化，指的是一种约束条件和原则，如果一个架构符合rest原则，那么就称他为restful架构"
                    fontSizeType="middle">
        </text-field>
        <text-field content="具体说下什么是restful架构:"></text-field>
        <text-field content="①每一个uri代表一个资源；②客户端和服务器之间传递这种资源的某种表现层；③客户端通过http
                            四个动词（get/post/put/delete）对服务端进行状态更新操作，实现‘表现层状态转化’"></text-field>
        <text-field content="RESTful API 就可以通过一套统一的接口为所有客户端提供web服务，实现前后端分离"></text-field>
        <el-divider></el-divider>
        <text-field catalog
                    title="Restful API-restful API 和普通API有什么区别"
                    content="说到API接口设计有的喜欢用Web Service，有的喜欢用WCF，当然也有还在用最原始的ashx，aspx页面的。无论采用什么方式能很好的满足业务需求就ok，但是不同的方式在扩展性、易用性，可维护性都有一定的差别。如今移动移动互联网正如火如荼，各种终端，各种平台，各种开发语言也是层出不穷，所以要设计出能满足这些要求的API也就显得至关重要了。"
                    fontSizeType="middle">
        </text-field>
        <text-field content="例如：一个文件操作接口传统模式需要三个接口来操作："></text-field>
        <text-field :list="originList"
                    style="margin-left:3%" />
        <text-field content="使用restfulAPI模式："></text-field>
        <text-field content="RESTful：api/file 只需要这一个接口；"></text-field>
        <text-field content="GET 方式请求 api/file - 获取文件信息，下载文件，POST 方式请求 api/file - 上传创建文件，DELETE 方式请求 api/file - 删除某个文件"></text-field>
        <el-divider></el-divider>
    </div>
</template>

<script>
import { highlightCode } from '../../../utils/common';
import TextField from '../../../components/textField.vue';

export default {
    name: 'content20210413',
    data() {
        return {
            originList: {
                listTitle: '',
                routeList: [
                    {
                        data: 'api/getfile.php - 获取文件信息，下载文件',
                    },
                    {
                        data: 'api/uploadfile.php - 上传创建文件',
                    },
                    {
                        data: 'api/deletefile.php - 删除文件',
                    },
                ],
            },
        };
    },
    methods: {
        jumpTo() {},
    },
    components: {
        TextField,
    },
    mounted() {
        highlightCode();
    },
};
</script>

<style scoped lang='less'>
.codeBorder {
    width: 100%;
    border-radius: 10px;
}
.commonStyle {
    margin-top: 20px;
}
</style>
