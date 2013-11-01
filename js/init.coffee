$ = jQuery

$(document).ready ->

	if $(".tabs").length
		x = 1;
		changeTab = ->
			$(".tabs").find('span').eq(x).click()
		intervalFunc = setInterval(changeTab, 3000)
		$(".tabs").find('span').on "click", (event) ->
			event.preventDefault()
			event.stopPropagation()
			if $(@).hasClass('active')
				return false
			else
				idx = $(@).index()
				$(@).parents(".tabs-section").find(".tabs span").removeClass("active")
				$(@).addClass('active').focus()
				$(@).parents(".tabs-section").find(".tab-body").removeClass('opened').eq(idx).addClass('opened')

			idx = $(this).index()+1;
			if idx == $(".tabs").find('span').length
				x = 0;
			else
				x = idx;
			clearInterval(intervalFunc)
			intervalFunc = setInterval(changeTab, 5000)



	return #end document ready

jQuery(window).load ->
	$(".tabs").find('span').eq(0).click()


	stickyMenu()


	return #end Window load

$(window).scroll =>

	stickyMenu()

	return


stickyMenu = ->
	if $(window).width() > 800
		positionWrapper = $('.wrapper ').offset().top
		positionFooter = $(".footer").offset().top
		scrollTopPosition = 0
		winHeight = $(window).height()

		if (navigator.appCodeName == "Netscape")
			scrollTopPosition = $('body').scrollTop()
		else
			scrollTopPosition = $('html').scrollTop()

		if (scrollTopPosition+winHeight-positionFooter > 0)
			$(".left-column").removeClass("fixed")
		else if (positionWrapper-scrollTopPosition <= 0)
			$(".left-column").addClass("fixed")
		else
			$(".left-column").removeClass("fixed")
	else
