// Wait for jQuery to be ready before running
function runWhenjQueryReady(fn) {
	if (typeof jQuery !== 'undefined' && jQuery.fn.jquery) {
		fn();
	} else {
		setTimeout(function() { runWhenjQueryReady(fn); }, 50);
	}
}

runWhenjQueryReady(function() {
	jQuery(window).load(function(){
		jQuery('.loading').fadeOut('fast');
		jQuery('.container').fadeIn('fast');
	});
	jQuery(document).ready(function(){
		var vw;
		jQuery(window).resize(function(){
			 vw = jQuery(window).width()/2;
			jQuery('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			jQuery('#b11').animate({top:240, left: vw-350},500);
			jQuery('#b22').animate({top:240, left: vw-250},500);
			jQuery('#b33').animate({top:240, left: vw-150},500);
			jQuery('#b44').animate({top:240, left: vw-50},500);
			jQuery('#b55').animate({top:240, left: vw+50},500);
			jQuery('#b66').animate({top:240, left: vw+150},500);
			jQuery('#b77').animate({top:240, left: vw+250},500);
		});

		jQuery('#turn_on').click(function(){
			jQuery('#bulb_yellow').addClass('bulb-glow-yellow');
			jQuery('#bulb_red').addClass('bulb-glow-red');
			jQuery('#bulb_blue').addClass('bulb-glow-blue');
			jQuery('#bulb_green').addClass('bulb-glow-green');
			jQuery('#bulb_pink').addClass('bulb-glow-pink');
			jQuery('#bulb_orange').addClass('bulb-glow-orange');
			jQuery('body').addClass('peach');
			jQuery(this).fadeOut('slow').delay(5000).promise().done(function(){
				jQuery('#play').fadeIn('slow');
			});
		});
		jQuery('#play').click(function(){
			var audio = jQuery('.song')[0];
			audio.play();
			jQuery('#bulb_yellow').addClass('bulb-glow-yellow-after');
			jQuery('#bulb_red').addClass('bulb-glow-red-after');
			jQuery('#bulb_blue').addClass('bulb-glow-blue-after');
			jQuery('#bulb_green').addClass('bulb-glow-green-after');
			jQuery('#bulb_pink').addClass('bulb-glow-pink-after');
			jQuery('#bulb_orange').addClass('bulb-glow-orange-after');
			jQuery('body').css('background-color','#FFF');
			jQuery('body').addClass('peach-after');
			jQuery(this).fadeOut('slow').delay(6000).promise().done(function(){
				jQuery('#bannar_coming').fadeIn('slow');
			});
		});

		jQuery('#bannar_coming').click(function(){
			jQuery('.bannar').addClass('bannar-come');
			jQuery(this).fadeOut('slow').delay(6000).promise().done(function(){
				jQuery('#balloons_flying').fadeIn('slow');
			});
		});

		function loopOne() {
			var randleft = 1000*Math.random();
			var randtop = 500*Math.random();
			jQuery('#b1').animate({left:randleft,bottom:randtop},10000,function(){
				loopOne();
			});
		}
		function loopTwo() {
			var randleft = 1000*Math.random();
			var randtop = 500*Math.random();
			jQuery('#b2').animate({left:randleft,bottom:randtop},10000,function(){
				loopTwo();
			});
		}
		function loopThree() {
			var randleft = 1000*Math.random();
			var randtop = 500*Math.random();
			jQuery('#b3').animate({left:randleft,bottom:randtop},10000,function(){
				loopThree();
			});
		}
		function loopFour() {
			var randleft = 1000*Math.random();
			var randtop = 500*Math.random();
			jQuery('#b4').animate({left:randleft,bottom:randtop},10000,function(){
				loopFour();
			});
		}
		function loopFive() {
			var randleft = 1000*Math.random();
			var randtop = 500*Math.random();
			jQuery('#b5').animate({left:randleft,bottom:randtop},10000,function(){
				loopFive();
			});
		}

		function loopSix() {
			var randleft = 1000*Math.random();
			var randtop = 500*Math.random();
			jQuery('#b6').animate({left:randleft,bottom:randtop},10000,function(){
				loopSix();
			});
		}
		function loopSeven() {
			var randleft = 1000*Math.random();
			var randtop = 500*Math.random();
			jQuery('#b7').animate({left:randleft,bottom:randtop},10000,function(){
				loopSeven();
			});
		}

		jQuery('#balloons_flying').click(function(){
			jQuery('.balloon-border').animate({top:-500},8000);
			jQuery('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
			jQuery('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
			loopOne();
			loopTwo();
			loopThree();
			loopFour();
			loopFive();
			loopSix();
			loopSeven();
			
			jQuery(this).fadeOut('slow').delay(5000).promise().done(function(){
				jQuery('#cake_fadein').fadeIn('slow');
			});
		});

		jQuery('#cake_fadein').click(function(){
			jQuery('.cake').fadeIn('slow');
			jQuery(this).fadeOut('slow').delay(3000).promise().done(function(){
				jQuery('#light_candle').fadeIn('slow');
			});
		});

		jQuery('#light_candle').click(function(){
			jQuery('.fuego').fadeIn('slow');
			jQuery(this).fadeOut('slow').promise().done(function(){
				jQuery('#wish_message').fadeIn('slow');
			});
		});

		jQuery('#wish_message').click(function(){
			vw = jQuery(window).width()/2;

			jQuery('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			jQuery('#b1').attr('id','b11');
			jQuery('#b2').attr('id','b22');
			jQuery('#b3').attr('id','b33');
			jQuery('#b4').attr('id','b44');
			jQuery('#b5').attr('id','b55');
			jQuery('#b6').attr('id','b66');
			jQuery('#b7').attr('id','b77');
			jQuery('#b11').animate({top:240, left: vw-350},500);
			jQuery('#b22').animate({top:240, left: vw-250},500);
			jQuery('#b33').animate({top:240, left: vw-150},500);
			jQuery('#b44').animate({top:240, left: vw-50},500);
			jQuery('#b55').animate({top:240, left: vw+50},500);
			jQuery('#b66').animate({top:240, left: vw+150},500);
			jQuery('#b77').animate({top:240, left: vw+250},500);
			jQuery('.balloons').css('opacity','0.9');
			jQuery('.balloons h2').fadeIn(3000);
			jQuery(this).fadeOut('slow').delay(3000).promise().done(function(){
				jQuery('#story').fadeIn('slow');
			});
		});
		
		jQuery('#story').click(function(){
			jQuery(this).fadeOut('slow');
			jQuery('.cake').fadeOut('fast').promise().done(function(){
				jQuery('.message').fadeIn('slow');
			});
			
			var i;

			function msgLoop (i) {
				jQuery("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
					i=i+1;
					jQuery("p:nth-child("+i+")").fadeIn('slow').delay(1000);
					if(i==50){
						jQuery("p:nth-child(49)").fadeOut('slow').promise().done(function () {
							jQuery('.cake').fadeIn('fast');
						});
					}
					else{
						msgLoop(i);
					}
				});
			}
			
			msgLoop(0);
		});
	});
});

//alert('hello');