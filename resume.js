
window.onbeforeunload = function () { $(window).scrollTop(0) }

//右侧导航栏的Tab切换功能
$('.rightNav > ol > li').on('click', function () {
	$(window).scrollTop(0)
	$(this).addClass('active').siblings().removeClass('active')
	$('body > section').eq($(this).index() + 1).addClass('active').siblings().removeClass('active')
})


//右侧Icons的点击跳转页面事件
$('.rightNav > svg:nth-of-type(1)').on('click', function () {
	window.location.href = 'mailto:Tiany_Comeon@163.com'
})
$('.rightNav > svg:nth-of-type(2)').on('click', function () {
	window.open('https://github.com/330387398')
})
$('.rightNav > svg:nth-of-type(3)').on('click', function () {
	window.open('https://github.com/330387398/Tech-Blog')
})
$('.rightNav > svg:nth-of-type(4)').on('click', function () {
	window.location.href='https://nj01ct01.baidupcs.com/file/e985dc96031ef329078c05aa0737a041?bkt=p3-1400e985dc96031ef329078c05aa0737a041ce1bccf5000000029c4f&fid=1865780803-250528-309173369384732&time=1511057790&sign=FDTAXGERLQBHSK-DCb740ccc5511e5e8fedcff06b081203-xvOYVoMOqb1hlsln3HuZSsZdoVw%3D&to=63&size=171087&sta_dx=171087&sta_cs=0&sta_ft=pdf&sta_ct=0&sta_mt=0&fm2=MH,Yangquan,Anywhere,,shanxi,ct&vuk=1865780803&iv=0&newver=1&newfm=1&secfm=1&flow_ver=3&pkey=1400e985dc96031ef329078c05aa0737a041ce1bccf5000000029c4f&sl=79364174&expires=8h&rt=sh&r=484863405&mlogid=7478018547846101842&vbdid=639227533&fin=田宇鹏+-+前端开发+-+18592051215.pdf&fn=田宇鹏+-+前端开发+-+18592051215.pdf&rtype=1&dp-logid=7478018547846101842&dp-callid=0.1.1&hps=1&tsl=100&csl=100&csign=oS0If80yj8%2BPK1v65cy%2FUPueYsc%3D&so=0&ut=6&uter=4&serv=0&uc=3673361441&ic=1222992579&ti=220620fd8d32b115c7c7406d329a509508cc1b5a3cb1587b&by=themis'
})


//个人情况页面下WhyMe部分svg的样式自动调整
var $p = $('.aboutMe > div:nth-of-type(2) > p')
for (let i = 0; i < $p.length; i++) {
	$p.eq(i).before('<svg><use xlink:href="#icon-gougou"></use></svg>')
}
var $svg = $('.aboutMe > div:nth-of-type(2) > svg')
for (let i = 0; i < $svg.length; i++) {
	$svg.eq(i).css('top', (i * 2) + 4.3 + 'rem')
}


//在项目页面根据项目数量插入相应的Tab切换按钮
var projectNumber = $('.project > ol > li').length
addLabels()
function addLabels() {
	for (let i = 0; i < projectNumber; i++) {
		$('.project > ul').append('<li></li>')
	}
	if (projectNumber % 2 == 1) {
		$('.project > ul').css('marginTop', (0.4 - ((Math.ceil(projectNumber / 2)) * 1.3)) + 'rem')
	}else {
		$('.project > ul').css('marginTop', (-(projectNumber * 0.65) - 0.25) + 'rem')
		
	}
}

//为每个Tab按钮绑定鼠标事件
$('.project > ul > li').on('mouseover', function () {
	$(this).addClass('hover').siblings('.project > ul > li:first-of-type').css('marginTop', '.3rem').prev().css('marginBottom', '.7rem')
})
$('.project > ul > li').on('mouseout', function () {
	$(this).removeClass('hover').siblings('.project > ul > li:first-of-type').css('marginTop', '.5rem').prev().css('marginBottom', '.5rem')
})
$('.project > ul > li').on('click', function () {
	$(this).addClass('active').siblings().removeClass('active')
	$(window).scrollTop($('.project > ol > li').eq($(this).index()).offset().top)
})


//当用户点开项目页面时，计算出所有项目标签距离页面顶部的高度，并组成数组
var arr = []
$('.rightNav > ol > li:nth-of-type(2)').on('click', function () {
	arr = []
	for (let i = 0; i < projectNumber; i++) {
		arr.push($('.project > ol > li').eq(i).offset().top)
	}
	$('.project > ul > li').eq(0).addClass('active').siblings().removeClass('active')
})

//监听页面滚动距离，实时更新按钮状态
$(window).on('scroll', function () {
	if ($('body > section').eq(2).hasClass('active')) {
		if ($(window).scrollTop() < (arr[0] + arr[1]) / 2) {
			$('.project > ul > li').eq(0).addClass('active').siblings().removeClass('active')
		}else {
			for (let i = 0; i < projectNumber - 1; i++) {
				if ($(window).scrollTop() > (arr[i] + arr[i + 1]) / 2) {
					$('.project > ul > li').eq(i + 1).addClass('active').siblings().removeClass('active')
				}
			}
		}
	}
})

//为每个项目绑定点击事件，跳转到项目页面
$('.music-163 > img, .music-163 > .footer > p:nth-of-type(2)').on('click', function () {
	window.open('https://330387398.github.io/Music-163/home.html') 
})
$('.music-163 > .footer > p:nth-of-type(1)').on('click', function () {
	window.open('https://github.com/330387398/Music-163') 
})
$('.mafia > img, .mafia > .footer > p:nth-of-type(2)').on('click', function () {
	window.open('https://330387398.github.io/Mafia/page1-index.html') 
})
$('.mafia > .footer > p:nth-of-type(1)').on('click', function () {
	window.open('https://github.com/330387398/Mafia') 
})
$('.lol > img, .lol > .footer > p:nth-of-type(2)').on('click', function () {
	window.open('https://330387398.github.io/LOL/LOL.html') 
})
$('.lol > .footer > p:nth-of-type(1)').on('click', function () {
	window.open('https://github.com/330387398/LOL') 
})