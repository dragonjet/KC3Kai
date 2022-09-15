(function(){
	"use strict";

	KC3StrategyTabs.jukebox = new KC3StrategyTab("jukebox");

	KC3StrategyTabs.jukebox.definition = {
		tabSelf: KC3StrategyTabs.jukebox,

		/* INIT: mandatory
		Prepares initial static data needed.
		---------------------------------*/
		init: function() {
			const myServer = (new KC3Server()).setNum(PlayerManager.hq.server);
			this.serverIp = myServer.ip;
		},

		/* RELOAD: optional
		Loads latest player or game data if needed.
		---------------------------------*/
		reload: function() {
			this.portbgm = KC3Master._raw.bgm;
			this.mapbgm = KC3Master._raw.mapbgm;
		},

		/* EXECUTE: mandatory
		Places data onto the interface from scratch.
		---------------------------------*/
		execute: function() {
			const audioElm = $("audio"), audio = audioElm.get(0);
			audio.crossOrigin = "anonymous";
			audio.loop = true;
			audio.onplay = () => {
				$(".player").addClass("playing");
			};
			audio.onended = () => {
				$(".player").removeClass("playing");
			};
			audio.oncanplay = () => {
				audio.play();
			};
			let evenodd = false;
			const addTrack = (bgmtype, bgmid, bgmdesc) => {
				const item = $(".factory .track").clone().appendTo(".musiclist ." + bgmtype);
				$(".id", item).text("#" + String(bgmid).pad(3, "0"))
					.data("bgmid", bgmid).data("bgmtype", bgmtype);
				$(".desc", item).text("\u266a " + (bgmdesc || "-"));
				item.toggleClass("even", !!evenodd).toggleClass("odd", !evenodd);
				evenodd = !evenodd;
			};
			$.each(this.portbgm, (idx, bgm) => {
				addTrack("port", bgm.api_id, bgm.api_name);
			});
			$.each(this.mapbgm, (idx, bgm) => {
				const mapName = "World {0}{1}".format(
					KC3Meta.isEventWorld(bgm.api_maparea_id) ? bgm.api_maparea_id + " " : "",
					KC3Meta.mapToDesc(bgm.api_maparea_id, bgm.api_no)
				);
				addTrack("battle", bgm.api_moving_bgm, mapName + " Overworld");
				if(bgm.api_map_bgm[0]) addTrack("battle", bgm.api_map_bgm[0], mapName + " Day Battle");
				if(bgm.api_map_bgm[1]) addTrack("battle", bgm.api_map_bgm[1], mapName + " Night Battle");
				if(bgm.api_boss_bgm[0]) addTrack("battle", bgm.api_boss_bgm[0], mapName + " Day Boss");
				if(bgm.api_boss_bgm[1]) addTrack("battle", bgm.api_boss_bgm[1], mapName + " Night Boss");
			});
			$(".musiclist .playbtn").addClass("hover").click((e) => {
				audio.pause();
				const item = $(e.target).parent();
				const bgmId = $(".id", item).data("bgmid");
				const bgmType = $(".id", item).data("bgmtype");
				const bgmDesc = $(".desc", item).text();
				const bgmSrc = `http://${this.serverIp}/kcs2/resources${KC3Master.bgm_file(bgmId, bgmType)}`;
				$(".player .playing").text("#{0} {1}".format(bgmId, bgmDesc));
				$(audio).attr("src", bgmSrc);
			});
		},

		/* UPDATE: optional
		Partially update elements of the interface,
			possibly without clearing all contents first.
		Be careful! Do not only update new data,
			but also handle the old states (do cleanup).
		Return `false` if updating all needed,
			EXECUTE will be invoked instead.
		---------------------------------*/
		update: function(pageParams) {
			// Use `pageParams` for latest page hash values,
			// KC3StrategyTabs.pageParams keeps the old values for states tracking

			// Returning `true` means updating has been handled.
			return false;
		}
	};
})();