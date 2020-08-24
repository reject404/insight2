webpackJsonp([25],{"/0kM":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("mvHQ"),a=i.n(n),r=i("INCx"),s=i.n(r),o=i("X2Oc"),l={name:"curd",components:{},data:function(){return{form_errors:[],cur_entity:{},user_list_url:"/api/user/list",change_url:"/api/group/owner/set",add_url:"/api/group/add",list_url:"/api/group/list",del_url:"/api/group/del",role_list_url:"/api/role/select",del_list:new URLSearchParams,tableData:[],select_word:"",cur_page:1,page_size:10,total:0,multipleSelection:[],editVisible:!1,createVisible:!1,groupOwnerChangeVisible:!1,form:{enable:"1",role_id:""},owner_form:{username:""},role_options:[]}},created:function(){this.getRoleList(),this.getData()},updated:function(){this.$desensitive()},computed:{},filters:{getDateDiff_timestamp:function(e){return Object(o.e)(e)},formatDate:function(e){var t=new Date(s()(1e3*e));return Object(o.c)(t,"yyyy-MM-dd HH:mm:ss")},statusFilter:function(e){return{0:"info",1:"success","-1":"danger"}[e]}},methods:{querySearchAsync:function(e,t){this.$axios.get(this.user_list_url,{params:{search:e}}).then(function(e){var i=new Array;e.data.result.map(function(e){i.push({value:e.username,id:e.id})}),t(i)})},getRoleList:function(){var e=this;this.$axios.get(this.role_list_url,{params:{type:0}}).then(function(t){e.role_options=t.data.result})},handleOwnerSelect:function(e){this.owner_form.owner_id=e.id},sortChange:function(e,t,i){this.sortcolumn=e.prop,this.sortorder=e.order,this.getData()},viewGroupUser:function(){"{}"!=a()(this.cur_entity)?this.$router.push({name:"editgroupuser",params:this.cur_entity}):this.$message.info("请选择数据")},changeGroupOwner:function(){"{}"!=a()(this.cur_entity)&&null!=this.cur_entity&&void 0!=this.cur_entity?(this.owner_form.id=this.cur_entity.id,this.groupOwnerChangeVisible=!0):this.$message.info("请选择数据")},checkForm:function(){if(this.form.name)return!0;this.form_errors=[],this.form.name||this.form_errors.push("请输入用户组名")},doChange:function(e){var t=this;this.$axios.post(this.change_url,Object(o.h)(this.owner_form)).then(function(e){1==e.data.status?(t.$message.success("操作成功"),t.getData()):t.$message.error("操作失败, 错误码:"+e.data.status+e.data.msg),t.groupOwnerChangeVisible=!1})},doCreate:function(e){var t=this;this.$axios.post(this.add_url,Object(o.h)(this.form)).then(function(e){1==e.data.status?(t.$message.success("操作成功"),t.getData()):t.$message.error("操作失败, 错误码:"+e.data.status+e.data.msg),t.createVisible=!1,t.editVisible=!1})},getData:function(){var e=this;this.$axios.get(this.list_url,{params:{search:this.select_word,page_index:this.cur_page,page_size:this.page_size,sort:this.sortcolumn,direction:this.sortorder}}).then(function(t){e.tableData=t.data.result,e.total=t.data.total})},handleSizeChange:function(e){this.page_size=e,this.getData()},handleCurrentChange:function(e){this.cur_page=e,this.getData()},handleCurrentChangeRow:function(e){this.cur_entity=e},search:function(){this.getData()},handleEdit:function(e,t){this.form_errors=[],this.editVisible=!0,this.form=t},handleSelect:function(e,t){this.$refs.dataTable.setCurrentRow(t),this.cur_entity=t},handleSelectionChange:function(e){this.multipleSelection=e},dataDel:function(e){var t=this,i=null;if(e)i=e;else{if(this.multipleSelection.length<=0)return void this.$message.info("未选择任何数据");this.del_list=this.multipleSelection.map(function(e){return e.id}),i=this.del_list}this.$confirm("是否确认此操作","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(function(){t.$axios.post(t.del_url,Object(o.h)({id:i})).then(function(e){e.data.status>=1?(t.getData(),t.$message.success("删除成功")):t.$message.error("删除失败, 错误码: "+e.data.status)})}).catch(function(){})}}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"crumbs"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",[i("i",{staticClass:"el-icon-tickets"}),e._v(" 用户\n      ")]),e._v(" "),i("el-breadcrumb-item",[e._v("用户组")])],1)],1),e._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"handle-box"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus",size:"mini"},on:{click:function(t){e.createVisible=!0,e.form={enable:"1"}}}},[e._v("新增用户组")]),e._v(" "),i("el-input",{staticClass:"handle-input",attrs:{size:"mini",placeholder:"请输入关键词"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search()}},model:{value:e.select_word,callback:function(t){e.select_word=t},expression:"select_word"}}),e._v(" "),i("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.search}},[e._v("搜索")]),e._v(" "),i("div",{staticStyle:{float:"right"}},[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.viewGroupUser()}}},[e._v("管理成员")]),e._v(" "),i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.changeGroupOwner}},[e._v("拥有者变更")]),e._v(" "),i("el-button",{attrs:{size:"mini",icon:"search"},on:{click:function(t){return e.dataDel()}}},[e._v("批量删除")])],1)],1),e._v(" "),i("el-table",{ref:"dataTable",attrs:{data:e.tableData,border:"","highlight-current-row":""},on:{select:e.handleSelect,"selection-change":e.handleSelectionChange,"current-change":e.handleCurrentChangeRow,"sort-change":e.sortChange}},[i("el-table-column",{attrs:{type:"selection",width:"45"}}),e._v(" "),i("el-table-column",{attrs:{prop:"name",label:"用户组","min-width":"80","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"second-title insight_sensitive"},[e._v(e._s(t.row.name))])]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"task_type",label:"成员数量","min-width":"80","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.groupuser.length))]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"desc","min-width":"110",label:"描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"insight_sensitive"},[e._v(e._s(t.row.desc))])]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"owner","min-width":"110",label:"拥有者"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"insight_sensitive"},[e._v(e._s(t.row.owner))])]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"update_time",label:"创建时间","min-width":"100",sortable:"","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-tooltip",{attrs:{effect:"light",content:e._f("formatDate")(t.row.update_time),placement:"right"}},[i("span",[e._v(e._s(e._f("getDateDiff_timestamp")(t.row.update_time)))])])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"操作","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"编辑",expression:"'编辑'"}],attrs:{size:"mini"},on:{click:function(i){return e.handleEdit(t.$index,t.row)}}},[i("i",{staticClass:"el-iconbianji2 iconfont_no_margin sumeru_op_button"})]),e._v(" "),i("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"删除",expression:"'删除'"}],attrs:{size:"mini",type:"danger"},on:{click:function(i){return e.dataDel(t.row.id)}}},[i("i",{staticClass:"el-iconshanchu1 iconfont_no_margin sumeru_op_button sumeru_red"})])]}}])})],1),e._v(" "),i("div",{staticClass:"pagination"},[i("el-pagination",{attrs:{"current-page":e.cur_page,"page-sizes":[10,20,50,100],"page-size":e.page_size,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.cur_page=t},"update:current-page":function(t){e.cur_page=t},"update:pageSize":function(t){e.page_size=t},"update:page-size":function(t){e.page_size=t},"update:total":function(t){e.total=t}}})],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"新建用户组",visible:e.createVisible,width:"30%"},on:{"update:visible":function(t){e.createVisible=t}}},[i("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"用户组名"}},[i("el-input",{attrs:{clearable:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"描述"}},[i("el-input",{attrs:{tclearable:""},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),e._v(" "),e.form_errors.length?i("el-form-item",{staticStyle:{color:"#f78989"}},[i("b",[e._v("出现以下问题 :")]),e._v(" "),i("ul",e._l(e.form_errors,function(t){return i("li",{key:t},[e._v(e._s(t))])}),0)]):e._e()],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.checkForm()&&e.doCreate()}}},[e._v("创建")])],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"编辑用户",visible:e.editVisible,width:"30%"},on:{"update:visible":function(t){e.editVisible=t}}},[i("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"用户组名"}},[i("el-input",{attrs:{clearable:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"描述"}},[i("el-input",{attrs:{tclearable:""},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){return e.doCreate()}}},[e._v("修 改")])],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"拥有者变更",visible:e.groupOwnerChangeVisible,width:"30%"},on:{"update:visible":function(t){e.groupOwnerChangeVisible=t}}},[i("el-form",{attrs:{"label-width":"80px"}},[i("el-form-item",{attrs:{label:"当前"}},[e._v(e._s("{}"!=JSON.stringify(e.cur_entity)&&void 0!=e.cur_entity&&null!=e.cur_entity?e.cur_entity.name+" - "+e.cur_entity.owner:""))]),e._v(" "),i("el-form-item",{attrs:{label:"变更为"}},[i("el-autocomplete",{attrs:{"fetch-suggestions":e.querySearchAsync,placeholder:"请输入内容"},on:{select:e.handleOwnerSelect},model:{value:e.owner_form.username,callback:function(t){e.$set(e.owner_form,"username",t)},expression:"owner_form.username"}})],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){return e.doChange()}}},[e._v("确认变更")])],1)],1)],1)},staticRenderFns:[]};var u=i("VU/8")(l,c,!1,function(e){i("TXQ2")},"data-v-4310dc75",null);t.default=u.exports},TXQ2:function(e,t){}});