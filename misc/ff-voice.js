// Paste result table of following TsunDB query with updated the event id:
/*
select distinct fleet#>>'{voice,0}' as voiceids, fleet#>>'{voice,1}' as voiceorders, fleet->>'ship' as ships from friendlyfleet where map like '59-%'
*/
const rawtbl = `
[159,149,159,159]	[1,2,0,0]	[200,180,179,948]
[259,245,159]	[1,2,0]	[693,580,347]
[258,159]	[1,0]	[665,407]
[259,159]	[1,0]	[906,394]
[248,259,159,159]	[1,2,0,0]	[697,152,144,975]
[158,154,154,159,159,159]	[1,2,3,0,0,0]	[916,553,554,321,330,968]
[159,159,159,159]	[1,2,0,0]	[364,733,906,893]
[259,251,159,159]	[1,2,0,0]	[733,705,906,893]
[159,142,259,159,159]	[1,2,3,0,0]	[969,372,967,733,906]
[159,142,259,159]	[1,2,3,0]	[969,372,967,733]
[154,159,159]	[1,2,0]	[282,622,232]
[158,154,158,159,159]	[1,2,3,0,0]	[411,319,194,564,327]
[155,245,159,159,159]	[1,2,0,0,0]	[447,619,658,580,948]
[154,148,155,159,159,159]	[1,2,3,0,0,0]	[704,697,659,734,726,628]
[248,155,159,159]	[1,2,0,0]	[697,659,726,689]
[259,149,159,159]	[1,2,0,0]	[630,180,179,619]
[149,159]	[1,0]	[180,179]
[159,159]	[1,0]	[647,627]
[158,148,158,159]	[1,2,3,0]	[949,607,976,399]
[151,159,159]	[1,0,0]	[626,725,703]
[159,159,149]	[1,0,2]	[962,179,180]
[159,155,159,159]	[1,2,0,0]	[969,724,372,967]
[259,245,159,159]	[1,2,0,0]	[693,580,347,948]
[159,153,159,159]	[1,2,0,0]	[264,487,647,627]
[159,159,251,159,159]	[1,2,3,0,0]	[364,733,705,906,893]
[148,158,159]	[1,2,0]	[639,976,977]
[145,159]	[1,0]	[619,658]
[148,158,158,159,159,159]	[1,2,3,0,0,0]	[639,977,976,399,647,627]
[255,255,159,159]	[1,2,0,0]	[197,196,564,648]
[158,158]	[1,2]	[319,194]
[159,159,149,159]	[1,0,2,0]	[962,179,180,619]
[154,154,159,159]	[1,2,0,0]	[264,142,417,416]
[159,151,159,159,159]	[1,2,0,0,0]	[962,626,948,179,180]
[159,159,159,159,159]	[1,2,0,0,0]	[591,954,626,144,975]
[159,153,159,159,159]	[1,2,0,0,0]	[264,487,647,627,961]
[159,142,159,159]	[1,2,0,0]	[724,372,967,965]
[159,159,159,159,159]	[1,2,0,0,0]	[592,152,725,703,498]
[159,159,159,159]	[1,2,0,0]	[591,954,144,975]
[258,159]	[1,0]	[700,729]
[159,259,159]	[1,2,0]	[965,962,372]
[159,149,159]	[1,2,0]	[200,180,179]
[158,158,159]	[1,2,0]	[949,976,607]
[259,149,159]	[1,2,0]	[630,180,179]
[256,158,159]	[1,2,0]	[928,726,689]
[248,159]	[1,0]	[703,260]
[159,142,159,159]	[1,2,0,0]	[969,372,967,965]
[144,144,159,159]	[1,2,0,0]	[599,610,330,346]
[144,159,159]	[1,0,0]	[599,330,346]
[158,158,159,159,148]	[1,2,0,0,3]	[319,194,246,497,961]
[151,245,159,159]	[1,2,0,0]	[691,580,347,626]
[159,159]	[1,0]	[962,372]
[159,155,148,159,159,159]	[1,2,3,0,0,0]	[734,659,697,928,689,726]
[158,154,158,159,159,159]	[1,2,3,0,0,0]	[411,319,194,564,327,328]
[158,159,159,159,159,159]	[1,2,3,0,0,0]	[916,894,501,662,703,725]
[159,155,159,159,159]	[1,2,0,0,0]	[446,447,580,619,626]
[156,148,159,159]	[1,2,0,0]	[640,607,398,401]
[159,251,159,159]	[1,2,0,0]	[364,705,906,893]
[259,159,159]	[1,2,0]	[733,906,893]
[159,155,159,159]	[1,2,0,0]	[630,488,180,179]
[159,148,159]	[1,2,0]	[592,144,975]
[159,158,158,159,159,159]	[1,2,3,0,0,0]	[200,729,700,703,948,626]
[159,158,159]	[1,2,0]	[948,407,665]
[159,148,159,159]	[1,2,0,0]	[610,599,703,725]
[154,159,159,159]	[1,2,0,0]	[282,622,142,232]
[149,159]	[1,0]	[893,394]
[158,155,159]	[1,2,0]	[411,564,327]
[159,151,159,159]	[1,2,0,0]	[962,626,179,180]
[159,159,159]	[1,0,0]	[610,703,725]
[155,159]	[1,0]	[564,327]
[159,143,159,159,159]	[1,2,0,0,0]	[592,586,144,975,498]
[158,159,159,158,159,159]	[1,0,0,2,3,0]	[156,411,412,501,968,329]
[155,145,245,159,159]	[1,2,3,0,0]	[447,691,619,658,347]
[159,154,159]	[1,2,0]	[622,142,232]
[151,245,159,159]	[1,2,0,0]	[691,580,347,658]
[159,155,159,159,159,159]	[1,2,3,0,0,0]	[446,447,693,580,619,626]
[158,159,159,158,159]	[1,0,0,2,3]	[156,411,412,501,968]
[155,145,245,159,159]	[1,2,3,0,0]	[447,691,619,658,626]
[155,145,245,159]	[1,2,3,0]	[447,691,619,658]
[143,159,159]	[1,0,0]	[586,354,557]
[159,158,159,151]	[1,2,0,3]	[200,665,407,626]
[159,158,158,159,159]	[1,2,3,0,0]	[200,729,700,948,626]
[151,159,159]	[1,2,0]	[705,906,893]
[159,159,159,245,159]	[1,0,0,2,0]	[446,580,658,619,626]
[153,159,159]	[1,2,0]	[487,647,627]
[159,158,159,159]	[1,2,0,0]	[200,665,407,626]
[159,155,159,159,159]	[1,2,0,0,0]	[630,488,725,180,179]
[156,159]	[1,0]	[725,703]
[151,245,159]	[1,2,0]	[691,580,347]
[155,155,159,159,159,159]	[1,2,3,0,0,0]	[196,197,954,648,564,398]
[151,158,159]	[1,2,0]	[626,665,407]
[158,148,158,159,159]	[1,2,3,0,0]	[949,607,976,399,580]
[259,159]	[1,0]	[906,893]
[159,259,259,159]	[1,2,0,0]	[969,965,962,372]
[158,158,159,159,159,148]	[1,2,0,0,0,3]	[319,194,487,246,497,961]
[159,155,159,159,159,159]	[1,2,3,0,0,0]	[446,447,693,691,580,619]
[159,158,159,159,159]	[1,2,0,0,0]	[200,665,407,703,626]
[159,159]	[1,0]	[347,658]
[159,155,159,159,159]	[1,2,3,0,0]	[446,447,693,580,619]
`


const ffv = rawtbl.split(/\n/).filter(s => !!s.trim())
	.map(ln => ln.trim().split(/\t/).map(a => JSON.parse(a)))
console.info('FF voice parsed records:', ffv.length)
//console.debug(ffv)


const voiceByShipId = {}
ffv.forEach(r => {
	r[0].forEach((voiceId, i) => {
		const voiceRecord = voiceByShipId[voiceId] || []
		if(!voiceRecord.length) voiceByShipId[voiceId] = voiceRecord
		const speakOrder = r[1][i], shipId = r[2][i] || -1
		if(speakOrder > 0 && !voiceRecord.includes(shipId)) voiceRecord.push(shipId)
	})
})
const distinctShip = new Set()
Object.keys(voiceByShipId).forEach(s => {
	voiceByShipId[s] = voiceByShipId[s].sort()
	voiceByShipId[s].forEach(id => distinctShip.add(id))
})
//console.debug(distinctShip)
console.info('FF voice-ship stats:', Object.keys(voiceByShipId).length,
	'voices from', distinctShip.size, 'ships:')
console.info(JSON.stringify(voiceByShipId))


// Update id list respectively
const voicesLookfor = [159, 259]
const previousFound = [906,647,968,967,969,962,967,264,734,200,948,364,630,965,446,693,347,733,152,501,591,592,610,622,724,894,954]
voicesLookfor.forEach(v => {
	console.info(`voice-${v} ${voiceByShipId[v].length} ships:`, voiceByShipId[v].join(','))
	console.info(`voice-${v} new ships:`, voiceByShipId[v].filter(id => !previousFound.includes(id)).join(','))
})


// To get available voice id list (to determine if 3xx exists?):
/*
select distinct voiceid from (
  select distinct (fleet#>>'{voice,0}')::jsonb as voiceids from friendlyfleet where map like '59-%'
) as t, jsonb_array_elements(t.voiceids) as voiceid order by voiceid
*/
