webpackJsonp([10],{Ugg2:function(t,s,i){var e=i("zCmD");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("8bSs")("4ccdca0c",e,!0)},YIJx:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("4YfN"),o=i.n(e),a=i("9rMa"),n=i("ZN2C"),r=i("QxSH"),c=i("rC09"),l=i("hhm8"),h=i("F4+m"),p={name:"postHistory",mixins:[h.b,h.c,h.a],data:function(){return{title:"历史记录",page:1,hasMore:!0,list:[]}},methods:{_getPostHistory:function(){var t=this;this.hasMore&&function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return c.a.get("postHistory",{params:{page:t,limit:s}})}(this.page).then(function(s){var i=s.data;if(i.code===l.a)if(i.data.length>0){t.page++;var e=t.timeFormat(t.postFormat(i.data));t.list=t.list.concat(e)}else t.hasMore=!1}).catch(console.log)},_delHistoryById:function(t){var s=this;(function(t){return c.a.post("postHistory/"+t)})(this.list[t]._id).then(function(i){i.data.code===l.a&&s.list.splice(t,1)}).catch(console.log)},postClick:function(t){var s=this.list[t].postId;this.$router.push("/post/"+s)}},created:function(){this._getPostHistory(),this.pullup(this._getPostHistory)},activated:function(){!this.isPopState&&this.intoPageCount++&&(this.page=1,this.hasMore=!0,this.list=[],this._getPostHistory())},computed:o()({},Object(a.c)(["isPopState"])),components:{OtherHeader:n.a,PostList:r.a}},u={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("other-header",{attrs:{title:this.title}}),this._v(" "),s("post-list",{attrs:{list:this.list},on:{delByIndex:this._delHistoryById,postClick:this.postClick}})],1)},staticRenderFns:[]},d=i("OF7X")(p,u,!1,function(t){i("Ugg2")},"data-v-3c9424d3",null);s.default=d.exports},zCmD:function(t,s,i){(t.exports=i("BkJT")(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"postHistory.vue",sourceRoot:""}])}});
//# sourceMappingURL=10.8a20c8dec8b22d6eac31.js.map