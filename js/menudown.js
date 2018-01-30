$(function(){
    var v_width= $(document.body).width();
    $(".select_textul").width(v_width);
    $(".select_textdiv").click(function(){
        var str = $(this).siblings("div").css("display")
        console.log(str)
        if(str == "block"){
            $(this).children('.down').children().css('transform','rotateX(0deg)');
        }else {
            $(this).children('.down').children().css('transform','rotateX(180deg)');
        }
    	$(this).parent().parent().siblings('dt').children().children('.select_textdiv').children('.down').children().css('transform','rotateX(0deg)')
		$(this).parent().parent().siblings().find(".select_textul").hide();
    	$(".select_textdiv").removeClass("divfocus");
    	$(this).addClass("divfocus");
    	$(this).siblings(".select_textul").fadeToggle(10);
        var lilength = $(this).siblings(".select_textul").find("li.focus").has(".select_second_ul").length;
    	if(lilength > 0){
    		$(this).siblings(".select_textul").find("li.focus>.select_second_ul").show();
    	}else{
    		$(".select_first_ul>li>p").css("width","100%");
    	}
    })
	$(".select_first_ul>li>p").click(function(){
		$(".select_second_ul").hide();
		$(this).parent("li").addClass("focus").siblings("li").removeClass("focus");
		$(this).parent("li").parent("ul").parent(".select_textul").siblings("div").find("p");
		var text = $(this).parent("li").parent("ul").parent(".select_textul").siblings("div").find("p").text();
        var value = $(this).text();
        $(this).parent().parent().parent().siblings().find('p').text(value)
         var chooselist = $(".focus")
        var postdata = {
            searchname: "",
            area:  $(chooselist[1]).find("p").text(),
            state: $(chooselist[0]).find("p").text(),
            joingread: $(chooselist[2]).find("p").text(),
            pagesize: 10,
            pageindex: 0,
        }
            getlist(postdata)

		var ynul = $(this).parent("li").has(".select_second_ul").length;
        if(ynul == 0){
        	var choose = $(this).text();
//			$(this).parents(".select_textul").siblings(".select_textdiv").find(".s_text").text(choose);
			$(this).parents(".select_textul").siblings("input").val(choose);
			$(this).parents(".select_textul").fadeOut(10);
			$(this).parent().parent().parent().siblings().children('.down').children().css('transform','rotateX(0deg)');
        }else{
        	$(".select_second_ul").hide();
		    $(this).siblings(".select_second_ul").show();
		    event.stopPropagation();
			chooseclick();
        }
		
	});
	
	chooseclick();
	function chooseclick(){
		$(".select_second_ul>li").unbind("click").on('click',function(){
			$(this).parent().parent().parent().parent().siblings().children('.down').children().css('transform','rotateX(0deg)');
			var choose = $(this).text();
			$(this).addClass("focusli").siblings("li").removeClass("focusli");
            $(this).parent("ul").parent("li").siblings("li").find("ul").find("li").removeClass("focusli");
            var value = $(this).text();
            console.log(value)
            var postdata = {
                searchname: "",
                area: value,
                state: "",
                joingread: "",
                pagesize: 10,
                pageindex: 0,
            }
            getlist(postdata)
//			$(this).parents(".select_textul").siblings(".select_textdiv").find(".s_text").text(choose);
			$(this).parents(".select_textul").siblings("input").val(choose);
			$(this).parents(".select_textul").fadeOut(10);
			event.stopPropagation();
		});
	}
		
})
