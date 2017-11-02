$(function () { 
  $("#museum-images-load-more").click(function () { 
    $(".museum-images-more").show();
    $("#museum-images-load-more").hide();
    $("#museum-images-load-less").show();
  })

  $("#museum-images-load-less").click(function () { 
    $(".museum-images-more").hide();
    $("#museum-images-load-more").show();
    $("#museum-images-load-less").hide();
  
  })

  $('.museum-image').click(function () { 
    var page = $(this).data('order');
    window.open('./museum.html'+'#'+page, 'Musée imaginaire', 'window settings');
    return false;
  })
})