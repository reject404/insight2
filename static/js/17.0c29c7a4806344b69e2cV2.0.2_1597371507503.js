webpackJsonp([17],{"HR/z":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("INCx"),s=a.n(r),i=a("X2Oc"),o=a("diDo"),n={name:"curd",components:{},data:function(){return{form_errors:[],cur_entity:{},add_url:"/api/asset/add",list_url:"/api/asset/list",del_url:"/api/asset/del",del_list:new URLSearchParams,tableData:[],select_word:"",cur_page:1,page_size:10,total:0,multipleSelection:[],editVisible:!1,createVisible:!1,form:{enable:"1"},static_config:o.b}},created:function(){this.getData()},mounted:function(){},computed:{},updated:function(){this.$desensitive()},filters:{getDateDiff_timestamp:function(t){return Object(i.e)(t)},formatDate:function(t){var e=new Date(s()(1e3*t));return Object(i.c)(e,"yyyy-MM-dd HH:mm:ss")},statusFilter:function(t){return{0:"info",1:"success",2:"danger"}[t]},statusNameFilter:function(t,e){return o.b[e][t]}},methods:{statusColor:function(t){return Object(i.g)(t)},sortChange:function(t,e,a){this.sortcolumn=t.prop,this.sortorder=t.order,this.getData()},viewUser:function(){this.cur_entity.id?this.$router.push({name:"view_asset_detail",params:this.cur_entity}):this.$message.info("请选择数据")},checkForm:function(){if(this.form.username&&this.form.password&&this.form.repassword&&null!=this.form.enable&&this.form.password==this.form.repassword)return!0;this.form_errors=[],this.form.username||this.form_errors.push("请输入用户名"),this.form.password||this.form_errors.push("请输入密码"),this.form.repassword||this.form_errors.push("请输入重复密码"),this.form.repassword&&this.form.repassword&&this.form.username!==this.form.repassword&&this.form_errors.push("两次密码输入不一致"),this.form.enable||this.form_errors.push("请选择状态")},doCreate:function(t){var e=this;this.$axios.post(this.add_url,Object(i.h)(this.form)).then(function(t){1==t.data.status?(e.$message.success("操作成功"),e.getData()):e.$message.error("操作失败, 错误码:"+t.data.status+t.data.msg),e.createVisible=!1,e.editVisible=!1})},getData:function(){var t=this;this.$axios.get(this.list_url,{params:{search:this.select_word,page_index:this.cur_page,page_size:this.page_size,sort:this.sortcolumn,direction:this.sortorder,app_id:this.$route.query.app}}).then(function(e){t.tableData=e.data.result,t.total=e.data.total})},handleSizeChange:function(t){this.page_size=t,this.getData()},handleCurrentChange:function(t){this.cur_page=t,this.getData()},handleCurrentChangeRow:function(t){this.cur_entity=t},search:function(){this.getData()},handleEdit:function(t,e){this.form_errors=[],this.editVisible=!0,this.form=e,this.form.is_https=this.form.is_https.toString(),this.form.is_open=this.form.is_open.toString(),this.form.type=this.form.type.toString(),delete this.form.create_time},handleSelectionChange:function(t){this.multipleSelection=t},dataDel:function(t){var e=this,a=null;if(t)a=t;else{if(this.multipleSelection.length<=0)return void this.$message.info("未选择任何数据");this.del_list=this.multipleSelection.map(function(t){return t.id}),a=this.del_list}this.$confirm("是否确认此操作","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(function(){e.$axios.post(e.del_url,Object(i.h)({id:a})).then(function(t){t.data.status>=1?(e.getData(),e.$message.success("删除成功")):e.$message.error("删除失败, 错误码: "+t.data.status)})}).catch(function(){})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-tickets"}),t._v(" 资产\n      ")]),t._v(" "),a("el-breadcrumb-item",[t._v("资产")])],1)],1),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus",size:"mini"},on:{click:function(e){t.createVisible=!0,t.form={enable:"1"}}}},[t._v("新增资产")]),t._v(" "),a("el-input",{staticClass:"handle-input",attrs:{size:"mini",placeholder:"请输入关键词"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search()}},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}}),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:t.search}},[t._v("搜索")]),t._v(" "),a("div",{staticStyle:{float:"right"}},[a("el-button",{staticStyle:{height:"32px"},attrs:{size:"mini",icon:"el-icon-search",type:"primary"},on:{click:function(e){return t.viewUser()}}},[t._v("查看详情")]),t._v(" "),a("el-button",{staticStyle:{height:"33px"},attrs:{size:"mini",icon:"search"},on:{click:function(e){return t.dataDel()}}},[t._v("批量删除")])],1)],1),t._v(" "),a("el-table",{attrs:{data:t.tableData,border:"","highlight-current-row":""},on:{"selection-change":t.handleSelectionChange,"current-change":t.handleCurrentChangeRow,"sort-change":t.sortChange}},[a("el-table-column",{attrs:{type:"selection",width:"45"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"资产名称  ","min-width":"150",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"insight_sensitive"},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"value",label:"值","min-width":"180",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"primary-title insight_sensitive"},[a("a",{attrs:{href:"http://"+e.row.value,target:"_blank"}},[t._v("  "+t._s(e.row.value)+" ")])])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"apptype",label:"资产类型","min-width":"55",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{style:{color:t.statusColor(e.row.type)}},[t._v("   "+t._s(t._f("statusNameFilter")(e.row.type,"ASSET_TYPE"))+"  ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"appname",label:"关联应用","min-width":"180",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"insight_sensitive"},[t._v("\n              "+t._s(e.row.appname?e.row.appname:"[ 未关联 ]")+"\n          ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间","min-width":"80",sortable:"","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{effect:"light",content:t._f("formatDate")(e.row.create_time),placement:"right"}},[a("span",[t._v(t._s(t._f("getDateDiff_timestamp")(e.row.create_time)))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"编辑",expression:"'编辑'"}],attrs:{size:"mini"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[a("i",{staticClass:"el-iconbianji2 iconfont_no_margin sumeru_op_button"})]),t._v(" "),a("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"删除",expression:"'删除'"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.dataDel(e.row.id)}}},[a("i",{staticClass:"el-iconshanchu1 iconfont_no_margin sumeru_op_button sumeru_red"})])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":t.cur_page,"page-sizes":[10,20,50,100],"page-size":t.page_size,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.cur_page=e},"update:current-page":function(e){t.cur_page=e},"update:pageSize":function(e){t.page_size=e},"update:page-size":function(e){t.page_size=e},"update:total":function(e){t.total=e}}})],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"新增资产",visible:t.createVisible,width:"30%"},on:{"update:visible":function(e){t.createVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"资产名称"}},[a("el-input",{attrs:{clearable:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"类型"}},[a("el-radio-group",{attrs:{size:"mini"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},t._l(t.static_config.ASSET_TYPE,function(e,r){return a("el-radio-button",{key:e,attrs:{label:r}},[t._v(t._s(e))])}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"值"}},[a("el-input",{attrs:{placeholder:"例:127.0.0.1 或 www.example.com"},model:{value:t.form.value,callback:function(e){t.$set(t.form,"value",e)},expression:"form.value"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"选项"}},[a("el-checkbox",{attrs:{"true-label":"1","false-label":"0"},model:{value:t.form.is_open,callback:function(e){t.$set(t.form,"is_open",e)},expression:"form.is_open"}},[t._v("公网")]),t._v(" "),a("el-checkbox",{attrs:{"true-label":"1","false-label":"0"},model:{value:t.form.is_https,callback:function(e){t.$set(t.form,"is_https",e)},expression:"form.is_https"}},[t._v("HTTPS")])],1),t._v(" "),a("el-form-item",{attrs:{label:"应用类型"}},[a("el-radio-group",{attrs:{size:"mini"},model:{value:t.form.apptype,callback:function(e){t.$set(t.form,"apptype",e)},expression:"form.apptype"}},t._l(t.static_config.ASSET_APP_TYPE,function(e,r){return a("el-radio-button",{key:e,attrs:{label:r}},[t._v(t._s(e))])}),1)],1),t._v(" "),t.form_errors.length?a("el-form-item",{staticStyle:{color:"#f78989"}},[a("b",[t._v("出现以下问题 :")]),t._v(" "),a("ul",t._l(t.form_errors,function(e){return a("li",{key:e},[t._v(t._s(e))])}),0)]):t._e()],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.doCreate()}}},[t._v("新 增")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"编辑资产",visible:t.editVisible,width:"30%"},on:{"update:visible":function(e){t.editVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"资产名称"}},[a("el-input",{attrs:{clearable:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"类型"}},[a("el-radio-group",{attrs:{size:"mini"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},t._l(t.static_config.ASSET_TYPE,function(e,r){return a("el-radio-button",{key:e,attrs:{label:r}},[t._v(t._s(e))])}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"值"}},[a("el-input",{model:{value:t.form.value,callback:function(e){t.$set(t.form,"value",e)},expression:"form.value"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"选项"}},[a("el-checkbox",{attrs:{"true-label":"1","false-label":"0"},model:{value:t.form.is_open,callback:function(e){t.$set(t.form,"is_open",e)},expression:"form.is_open"}},[t._v("公网")]),t._v(" "),a("el-checkbox",{attrs:{"true-label":"1","false-label":"0"},model:{value:t.form.is_https,callback:function(e){t.$set(t.form,"is_https",e)},expression:"form.is_https"}},[t._v("HTTPS")])],1),t._v(" "),a("el-form-item",{attrs:{label:"应用类型"}},[a("el-radio-group",{attrs:{size:"mini"},model:{value:t.form.apptype,callback:function(e){t.$set(t.form,"apptype",e)},expression:"form.apptype"}},t._l(t.static_config.ASSET_APP_TYPE,function(e,r){return a("el-radio-button",{key:e,attrs:{label:r}},[t._v(t._s(e))])}),1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){return t.doCreate()}}},[t._v("修 改")])],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(n,l,!1,function(t){a("skrT")},"data-v-86d782c2",null);e.default=c.exports},skrT:function(t,e){}});