$ = jQuery

$(document).ready ->

	if $(".tabs").length
		$(".tabs").find('a').on "click", (event) ->
			event.preventDefault()
			if $(@).hasClass('active')
				return false
			else
				idx = $(@).index()

				$(@).parents(".tabs-section").find(".tabs a").removeClass("active")
				$(@).addClass('active')
				$(@).parents(".tabs-section").find(".tab-body").removeClass('opened').eq(idx).addClass('opened')


	return #end document ready

jQuery(window).load ->
	$(".tabs").find('a').eq(0).click()

	return #end Window load
