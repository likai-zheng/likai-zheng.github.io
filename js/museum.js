$(function () { 
  $("#arrow-down").click(function () { 
    $(".museum-images-more").show();
    $(".nav-down").hide();
    $(".nav-up").show();
  })

  $("#arrow-up").click(function () { 
    $(".museum-images-more").hide();
    $(".nav-down").show();
    $(".nav-up").hide();
  })

  $('.museum-image').click(function () { 
    var page = $(this).data('order');
    window.open('./museum.html'+'#'+page, 'Musée imaginaire', 'window settings');
    return false;
  })
})