	
//File name: tabs.js
//Client-side Develope: Alexander Adu-Sarkodie
//Date created: 21/07/2009
// Comments: This function swaps different content in the preview area when different tabs are clicked
	glow.onDomReady(function() {
			//reference to all button links in home promo section of homepage
			//add onclick events to all theme links in page
			var tabs = glow.dom.get(".ms-hp-promo-active");
			tabs.each(function(i){
			glow.events.addListener(
				tabs[i],
				'click',
				function () {
					currTab = glow.dom.get('#ms-hp-promo-panel').get('.ms-hp-promo-show');
					newTab = glow.dom.get(this).parent();
					currTab.removeClass("ms-hp-promo-show");
					newTab.addClass("ms-hp-promo-show");	
					return false;
				}
			);
			});	
		});