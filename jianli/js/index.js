define(function(require, exports, module) {
	require('vue.js')
	var P={
		_init:function(){
			P.render()
		},
		quchong:function(arr){
			var result={};
			var newArr=[];
			for(var i=0,len=arr.length;i<len;i++){
				if(!result[arr[i]]){
					newArr.push(arr[i]);
					result[arr[i]]=true;
				}
			}
			return newArr;
		},
		render:function(){
			 $.ajax({
                url:'/html/jianli.json',
                dataType:"JSON",
                type:"get"
            }).done(function(cfg){
                P.xiala(cfg)
                var arr=[0,1,2,34,2,6,7,8]
            })
		},
		sendData:function(model){
			$.ajax({
                url:'/html/jianli.json',
                data:model,
                dataType:"JSON",
                type:"post"
            }).done(function(){
            	alert('请求成功')
            })
		},
		ifWork:function(obj,key,bt1,bt2,bt3){
			var jx=obj.vakeClass[key];
			jx.isA=bt1;
			jx.isB=bt2;
			jx.isC=bt3;
		},
		xiala:function(cfg){
			Vue.filter('typeSelect',function(index,name){
				if(index=='' || index==null){
					return name;
				}else{
					return index;
				}
			});
			var typeChu={
				'1':'可出差',
				'2':'不可出差'
			}
			Vue.filter('typeChu',function(index){
				if(index==true){
					return typeChu[1]
				}else{
					return typeChu[2]
				}
			});
			var typeXsfs={
				'0':'店面销售',
				'1':'渠道销售',
				'2':'电话销售',
				'3':'网络销售',
				'4':'面访销售',
				'5':'大客户销售'
			}
			Vue.filter('typeXsfs',function(index){
				var str=""
				$.each(index,function(key,val){
		            str+=typeXsfs[val];
		        })
		        return str;
			});
			var data={
				'model':cfg.model,
				'vakeClass':{
					'gzjl':{
						'isA':false,
						'isB':false,
						'isC':false
					},
					'jyjl':{
						'isA':false,
						'isB':false,
						'isC':false
					},
					'newgzjl':{}
				}
			};
			data.model.gzjl=P.quchong(data.model.gzjl);
			if(data.model.gzjl.length>0){
				var work=data.vakeClass.gzjl;
				work.isA=false;
				work.isB=true;
				work.isC=true;
			}
			var vm=new Vue({
				el:'#l-zuo',
				data:data,
				methods:{
					addBase:function(event,sclass){
						var str=JSON.stringify(this.model);
		            	$('#l-zuo').data('index2',str);
		            	var item = event.currentTarget;
	                    var parent = $(item).parents('.bji');
	                    parent.find('.jjbb').show();
	                    parent.find('.'+sclass).hide();
		            },
		            saveBase:function(event,sclass){
		            	var item = event.currentTarget;
	                    var parent = $(item).parents('.bji');
	                    parent.find('.jjbb').hide();
	                    parent.find('.'+sclass).show();
		            },
		            editBase:function(event,sclass){
		            	var str=JSON.stringify(this.model);
		            	$('#l-zuo').data('index2',str);
		            	var item = event.currentTarget;
	                    var parent = $(item).parents('.bji');
	                    parent.find('.jjbb').show();
	                    parent.find('.'+sclass).hide();
		            },
					cancleBase:function(event,sclass){
						var num=$.parseJSON($('#l-zuo').data('index2'));
						this.model=num;
		            	var item = event.currentTarget;
	                    var parent = $(item).parents('.bji');
	                    parent.find('.jjbb').hide();
	                    parent.find('.'+sclass).show();
		            },
					wans5:function(){
						P.ifWork(this,'gzjl',true,false,true)
					},
					baoc5:function(){
						var jx=this.vakeClass.gzjl;
						var mo=this.model.gzjl;
						var ng=this.vakeClass.newgzjl;
						if($('#l-zuo').hasClass('bianbao')){
							var datas=$('#l-zuo').data('index1')
							mo.splice(datas,1,ng)
							$('#l-zuo').removeClass('bianbao')
						}else{
							mo.push(ng)
						};
						jx.isA=false;
						jx.isB=true;
					},
					tianjia5:function(){
						var jx=this.vakeClass.gzjl;
						this.vakeClass.newgzjl={};
						jx.isA=true;
						jx.isB=false;
					},
					quxiao5:function(){
						var jx=this.vakeClass.gzjl;
						if(this.model.gzjl.length==0){
							jx.isA=false;
							jx.isB=false;
							jx.isC=false;
						}else if($('#l-zuo').hasClass('bianbao')){
							var num=$.parseJSON($('#l-zuo').data('index2'));
							var datas=$('#l-zuo').data('index1')
							this.model.gzjl.splice(datas,1,num)
							$('#l-zuo').removeClass('bianbao')
							jx.isA=false;
							jx.isB=true;
						}else{
							jx.isA=false;
							jx.isB=true;
						}
					},
					bianjis:function(obj,item,index){
						var jx=this.vakeClass.gzjl;
						$('#l-zuo').addClass('bianbao');
						$('#l-zuo').data('index1',index);
						var str=JSON.stringify(item);
						$('#l-zuo').data('index2',str);
						this.vakeClass.newgzjl=item;
						jx.isA=true;
						jx.isB=false;
					},
					shanchu:function(index){
						var jx=this.vakeClass.gzjl;
						this.model.gzjl.splice(index,1);
						if(this.model.gzjl.length==0){
							jx.isA=false;
							jx.isB=false;
							jx.isC=false;
						}
					},
					work:function(){
						P.ifWork(this,'jyjl',true,false,true)
					},
					peix:function(){
						P.ifWork(this,'jyjl',true,false,true)
					}
				}
			})
		}
	}
	module.exports = {
		init:P._init
	}

});