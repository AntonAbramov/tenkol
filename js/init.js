// Generated by CoffeeScript 1.6.3
(function() {
  var $, cartLogic, initCarusel, initSlider, initTabs, registrationPopupLogic, searchTyping;

  $ = jQuery;

  $(document).ready(function() {
    if ($('#slides').length) {
      initSlider();
    }
    if ($('.tab-section').length) {
      initTabs();
    }
    $(".triger-brand").on('click', function() {
      return $(this).parents('.brand-parts').toggleClass('closed');
    });
  });

  jQuery(window).load(function() {
    if ($('.cart-content').length) {
      cartLogic();
    }
    if ($('#registration-popup').length) {
      registrationPopupLogic();
    }
    if ($("#search").length) {
      searchTyping();
    }
    $.ajax({
      url: 'ajax/sidebar.html',
      method: 'get',
      dataType: 'html',
      success: function(data) {
        $('#sv-leftcolumn').append(data);
        return initTabs();
      }
    });
    $.ajax({
      url: 'ajax/registrationpopup.html',
      method: 'get',
      dataType: 'html',
      success: function(data) {
        $('.registration-popup').append(data);
        return registrationPopupLogic();
      }
    });
    $.ajax({
      url: 'ajax/cart.html',
      method: 'get',
      dataType: 'html',
      success: function(data) {
        $('.cart-section .cart').append(data);
        return cartLogic();
      }
    });
    $.ajax({
      url: 'ajax/footer.html',
      method: 'get',
      dataType: 'html',
      success: function(data) {
        return $('#sv-footer').append(data);
      }
    });
    if ($('.carusel ul').length) {
      initCarusel();
    }
    if ($(".sorting-content").length) {
      $(".sorting-content .sorting-nav").find("li").on('click', function() {
        var idx;
        if (!($(this).hasClass('active'))) {
          $(".sorting-content .sorting-nav").find("li").removeClass("active");
          $(".sorting-body > div").hide();
          $(this).addClass("active");
          idx = $(this).index();
          return $(".sorting-body > div").eq(idx).show();
        }
      });
      $(".sorting-content .sorting-nav").find("li").first().click();
    }
    if ($(".product-image").length) {
      $(".product-preview").find("img").each(function() {
        var h, that, w;
        that = $(this);
        h = that.height() / 2;
        w = that.width() / 2;
        return that.css({
          'marginTop': -h + 'px',
          'marginLeft': -w + 'px'
        });
      });
      $(".product-preview").find("a").on('click', function(ev) {
        var src;
        ev.preventDefault();
        src = $(this).data("pic");
        return $(".product-image").find("img").fadeOut(function() {
          return $(this).attr('src', src);
        }).fadeIn();
      });
    }
  });

  initSlider = function() {
    return $('#slides').slidesjs({
      width: 940,
      play: {
        active: false,
        effect: "slide",
        interval: 40000,
        auto: true,
        swap: true,
        pauseOnHover: false,
        restartDelay: 2500
      },
      navigation: true
    });
  };

  initCarusel = function() {
    return $('.carusel ul').jcarousel({
      scroll: 1,
      visible: 5
    });
  };

  initTabs = function() {
    $(".tab-nav").find('a').on('click', function(event) {
      var id;
      event.preventDefault();
      if (!($(this).hasClass('active'))) {
        id = $(this).attr('href');
        $(".tab-nav").find('.active').removeClass('active');
        $(this).addClass('active');
        $(".tab").hide();
        return $(id).show();
      }
    });
    return $('.tab-nav').find('a').first().click();
  };

  cartLogic = function() {
    $('.cart-title').on('click', function() {
      if ($(this).hasClass('opened')) {
        $(this).removeClass('opened');
        return $('.cart-content').fadeOut();
      } else {
        $(this).addClass('opened');
        return $('.cart-content').fadeIn();
      }
    });
    $(".cart").find('.icons-delete-button').on('click', function() {
      $(this).parents('.cart-content').fadeOut();
      return $('.cart-title').removeClass('opened');
    });
    $('.item-delete').find('.icons-close-small').on('click', function(e) {
      e.stopPropagation();
      return $(this).parents('.item-holder').remove();
    });
    $("body").on('click', function(e) {
      if ($("#registration-popup").is(":visible")) {
        if (!($(e.target).closest('#registration-popup').length) && !($(e.target).closest('#enter').length)) {
          $('#enter').parent().removeClass('opened');
          $("#registration-popup").fadeOut();
        }
      }
      if ($(".cart-content").is(":visible")) {
        if (!($(e.target).closest('.cart-content').length) && !($(e.target).closest('.cart-title').length)) {
          $('.cart-title').removeClass('opened');
          return $(".cart-content").fadeOut();
        }
      }
    });
  };

  registrationPopupLogic = function() {
    $('#enter').on('click', function(event) {
      event.preventDefault();
      if ($(this).parent().hasClass('opened')) {
        $(this).parent().removeClass('opened');
        return $("#registration-popup").fadeOut();
      } else {
        $(this).parent().addClass('opened');
        return $('#registration-popup').fadeIn();
      }
    });
    $("#registration-popup").find('.icons-close-button-gray').on('click', function() {
      $('#registration-popup').fadeOut();
      return $(this).parents('li').removeClass('opened');
    });
  };

  searchTyping = function() {
    $("#search").on('keyup', function() {
      if ($("#search").val().length >= 3) {
        return $(".search-output").show();
      } else {
        return $(".search-output").hide();
      }
    });
  };

}).call(this);
