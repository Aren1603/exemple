$(document).ready(function(){
	$(".menudivmenu1").click(function(){
		$(".menudivmenu1").css({
			backgroundColor: "#616161",
		})
		$(".menudivmenu1 h2").css({
			color:"white"
		})
		$(".menudiv2").css({
			display:"block"
		})
		$(".menudivmenu2").css({
			backgroundColor: "white",
		})
		$(".menudivmenu2 h2").css({
			color:"black",
			fontWeight:"400"
		})
		$(".menudiv3").css({
			display:"none"
		})
	})
	$(".menudivmenu2").click(function(){
		$(".menudivmenu2").css({
			backgroundColor: "#616161",
		})
		$(".menudivmenu2 h2").css({
			color:"white"
		})
		$(".menudivmenu1").css({
			backgroundColor: "white",
		})
		$(".menudivmenu1 h2").css({
			color:"black",
			fontWeight:"400"
		})
		$(".menudiv3").css({
			display:"block"
		})
		$(".menudiv2").css({
			display:"none"
		})
	})
})