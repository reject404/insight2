webpackJsonp([37],{j1o9:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("X2Oc"),s={data:function(){return{apikey:"",is_enable:!0,curl_eg:""}},created:function(){this.keyGet()},methods:{keyGen:function(){var e=this;this.$axios.post("/api/user/apikey/gen").then(function(t){t.data.status>=1?(e.$message.success("生成成功"),e.apikey=t.data.apikey,e.keyGet()):e.$message.error("失败,  "+t.data.msg)})},keyGet:function(){var e=this;this.$axios.get("/api/user/apikey/get").then(function(t){t.data.status>=1&&(e.apikey=t.data.apikey,e.is_enable=1==t.data.enable,e.curl_eg="curl "+t.data.host+"/api/user/apikey/test?token="+t.data.apikey)})},enbaleKey:function(e){this.$axios.post("/api/user/apikey/enable",Object(i.h)({enable:e?1:0})).then(function(e){})}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-tickets"}),e._v(" API Key 生成\n      ")])],1)],1),e._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"block",staticStyle:{width:"50%"}},[a("div",{staticStyle:{"margin-top":"10px",width:"70%"}},[a("el-form",{ref:"form",attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"API Key "}},[a("el-input",{attrs:{placeholder:"待生成"},model:{value:e.apikey,callback:function(t){e.apikey=t},expression:"apikey"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"命令示例"}},[a("div",{staticStyle:{"margin-top":"10px",width:"100%"}},[a("el-input",{attrs:{type:"textarea",rows:10,placeholder:"cURL 示例"},model:{value:e.curl_eg,callback:function(t){e.curl_eg=t},expression:"curl_eg"}})],1)]),e._v(" "),a("el-form-item",[a("el-button",{on:{click:e.keyGen}},[e._v("重新生成")]),e._v(" "),a("el-checkbox",{staticStyle:{"margin-left":"10px","padding-top":"5px"},attrs:{checked:e.is_enable,size:"mini"},on:{change:e.enbaleKey},model:{value:e.is_enable,callback:function(t){e.is_enable=t},expression:"is_enable"}},[e._v("启用")]),e._v(" "),a("el-button",{staticStyle:{color:"green !important"},attrs:{type:"text"},on:{click:function(t){return e.$router.push("doc")}}},[e._v("查看API文档")])],1)],1)],1)])])])},staticRenderFns:[]},l=a("VU/8")(s,n,!1,null,null,null);t.default=l.exports}});