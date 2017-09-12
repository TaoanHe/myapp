var app = angular.module("myapp",["ui.router"]);
	        app.directive("myapp",function(){
	        	return {
	        		restrict:'EA',
	        		templateUrl:"view/startpage.html",
	        		replace:true,
	        		transclude:true,
	        		scope:true,
	        		link:function(scope,e,attr){
	        			var contianer = document.getElementById('start')
			            contianer.addEventListener("touchstart",function(e){
				            e.preventDefault();
			            })
			            $(function(){
				            var w=$("#start").find("div").eq(0).width();
				            var n=0;
				            console.log(w);
				            $("#start").on("swipeLeft",function(){
					            n++;
					            if(n>$("#start").find("div").length-1){
						            n=$("#start").find("div").length-1;
					            }
					            contianer.style.transform="translate3d(-"+n*+w+"px,0,0)"
				            })
				            $("#start").on("swipeRight",function(){
					            n--;
					            if(n<0){
						        n=0;
					            }
					             contianer.style.transform="translate3d(-"+n*+w+"px,0,0)"
				            })
				            $("#btn").on("tap",function(){
					           location.href="view/restaurant.html";
				            })
			            })
	        		}
	        	}
	        })
//	        app.directive("jdt",function(){
//	        	return {
//	        		restrict:'EA',
//	        		templateUrl:"view/jdt.html",
//	        		replace:true,
//	        		scope:true,
//	        		link:function(scope,e,attr){
//	        			scope.v=attr.value;
//	        		}
//	        	}
//	        })
//	         app.directive("tab",function(dataDemo){
//	        	return {
//	        		restrict:'EA',
//	        		templateUrl:"view/tab.html",
//	        		replace:true,
//	        		scope:true,
//	        		link:function(scope,e,attr){
//	        			dataDemo.then(function(data){
//	        				console.log(data);
//	        				scope.data=data.data.list;
//	        				$("#list").on("click","li",function(){
//	        					$(".current").removeClass("current");
//	        					$(this).addClass("current");
//	        					$(".container").find('div').hide();
//	        					$(".container").find('div').eq($(this).index()).show();
//	        				})
//	        			})
////	        			scope.v=attr.value;
//	        		}
//	        	}
//	        })
//	    	app.config(function($stateProvider,$urlRouterProvider){
//	    		$urlRouterProvider.otherwise("restaurant");
//	    		
//	    		$stateProvider.state({
//	    			name:'restaurant',
//	    			url:'/restaurant',
//	    			templateUrl:'view/restaurant.html',
//	    			controller:'restaurant'
//	    		})
//	    		.state({
//	    			name:'book',
//	    			url:'/book/:type',
//	    			templateUrl:'view/book.html',
//	    			controller:'book'
//	    		})
//	    		.state({
//	    			name:'about',
//	    			url:'/about',
//	    			templateUrl:'view/about.html',
//	    			controller:'about'
//	    		})
//	    	});