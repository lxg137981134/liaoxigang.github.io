/* index.js Date:2017-03-08 20:39:57 */
define("/jianli/js/index.js",["vue.js"],function(require,a,b){require("vue.js");var c={_init:function(){c.render()},quchong:function(a){var b={};var c=[];for(var d=0,e=a.length;e>d;d++)b[a[d]]||(c.push(a[d]),b[a[d]]=!0);return c},render:function(){$.ajax({url:"/jianli/html/jianli.json",dataType:"JSON",type:"get"}).done(function(a){c.xiala(a)})},sendData:function(a){$.ajax({url:"/jianli/html/jianli.json",data:a,dataType:"JSON",type:"post"}).done(function(){alert("\u8bf7\u6c42\u6210\u529f")})},ifWork:function(a,b,c,d,e){var f=a.vakeClass[b];f.isA=c,f.isB=d,f.isC=e},xiala:function(a){Vue.filter("typeSelect",function(a,b){return""==a||null==a?b:a});var b={1:"\u53ef\u51fa\u5dee",2:"\u4e0d\u53ef\u51fa\u5dee"};Vue.filter("typeChu",function(a){return 1==a?b[1]:b[2]});var d={0:"\u5e97\u9762\u9500\u552e",1:"\u6e20\u9053\u9500\u552e",2:"\u7535\u8bdd\u9500\u552e",3:"\u7f51\u7edc\u9500\u552e",4:"\u9762\u8bbf\u9500\u552e",5:"\u5927\u5ba2\u6237\u9500\u552e"};Vue.filter("typeXsfs",function(a){var b="";return $.each(a,function(a,c){b+=d[c]}),b});var e={model:a.model,vakeClass:{gzjl:{isA:!1,isB:!1,isC:!1},jyjl:{isA:!1,isB:!1,isC:!1},newgzjl:{}}};if(e.model.gzjl=c.quchong(e.model.gzjl),e.model.gzjl.length>0){var f=e.vakeClass.gzjl;f.isA=!1,f.isB=!0,f.isC=!0}new Vue({el:"#l-zuo",data:e,methods:{addBase:function(a,b){var c=JSON.stringify(this.model);$("#l-zuo").data("index2",c);var d=a.currentTarget;var e=$(d).parents(".bji");e.find(".jjbb").show(),e.find("."+b).hide()},saveBase:function(a,b){var c=a.currentTarget;var d=$(c).parents(".bji");d.find(".jjbb").hide(),d.find("."+b).show()},editBase:function(a,b){var c=JSON.stringify(this.model);$("#l-zuo").data("index2",c);var d=a.currentTarget;var e=$(d).parents(".bji");e.find(".jjbb").show(),e.find("."+b).hide()},cancleBase:function(a,b){var c=$.parseJSON($("#l-zuo").data("index2"));this.model=c;var d=a.currentTarget;var e=$(d).parents(".bji");e.find(".jjbb").hide(),e.find("."+b).show()},wans5:function(){c.ifWork(this,"gzjl",!0,!1,!0)},baoc5:function(){var a=this.vakeClass.gzjl;var b=this.model.gzjl;var c=this.vakeClass.newgzjl;if($("#l-zuo").hasClass("bianbao")){var d=$("#l-zuo").data("index1");b.splice(d,1,c),$("#l-zuo").removeClass("bianbao")}else b.push(c);a.isA=!1,a.isB=!0},tianjia5:function(){var a=this.vakeClass.gzjl;this.vakeClass.newgzjl={},a.isA=!0,a.isB=!1},quxiao5:function(){var a=this.vakeClass.gzjl;if(0==this.model.gzjl.length)a.isA=!1,a.isB=!1,a.isC=!1;else if($("#l-zuo").hasClass("bianbao")){var b=$.parseJSON($("#l-zuo").data("index2"));var c=$("#l-zuo").data("index1");this.model.gzjl.splice(c,1,b),$("#l-zuo").removeClass("bianbao"),a.isA=!1,a.isB=!0}else a.isA=!1,a.isB=!0},bianjis:function(a,b,c){var d=this.vakeClass.gzjl;$("#l-zuo").addClass("bianbao"),$("#l-zuo").data("index1",c);var e=JSON.stringify(b);$("#l-zuo").data("index2",e),this.vakeClass.newgzjl=b,d.isA=!0,d.isB=!1},shanchu:function(a){var b=this.vakeClass.gzjl;this.model.gzjl.splice(a,1),0==this.model.gzjl.length&&(b.isA=!1,b.isB=!1,b.isC=!1)},work:function(){c.ifWork(this,"jyjl",!0,!1,!0)},peix:function(){c.ifWork(this,"jyjl",!0,!1,!0)}}})}};b.exports={init:c._init}});
