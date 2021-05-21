// .chrome styling

// document.getElementById("input-range").oninput = function() {
//  this.style.background = 'linear-gradient(to right, #C29974 0%, #C29974 ' + this.value + '%, #666 ' + this.value + '%, #666 100%)'
//};

// .chrome

//$( '.chrome input' ).on( 'input', function( ) {
//  $( this ).css( 'background', 'linear-gradient(to right, green, #005555 ' + this.value + '%, blue)' );
//} );

// .chrome styling

$( '.filters-col input::-webkit-slider-runnable-track' ).on( 'input::-webkit-slider-runnable-track', function( ) {
  $( this ).css( 'background', 'linear-gradient(to right, #C29974 0%, #C29974 ' + this.value + '%, #666 ' + this.value + '%, #666 100%)' );
} );
