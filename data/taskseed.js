module.exports = {
	up: (queryInterface, Sequelize) =>{
		return queryInterface.bulkInsert('Tasks', [
		{task: 'Anode Rod Replacement', description: 'Inspect Anode Rod in Water Heater', imageLink: 'http://www.azhomewater.com/images/product-amoderod.png', timeFrame: 'annually', category: 'plumbing', skillLevel: 'beginner', internetSearch: 'anode rode inspection', createdAt: new Date(), updatedAt:  new Date()}, 
		{task: 'Drain Water Heater', description: 'Drain water heater to prevent sediment', imageLink: 'http://images.trulia.com/blogimg/6/5/8/7/1066338_1305628021732_o.jpg', timeFrame:: 'annually', category:: 'plumbing', skillLevel: 'beginner', internetSearch:   'how to drain water heater', createdAt: new Date(), updatedAt:  new Date()}, 
		{task: 'Turn off/on water supply valves under sinks and toilets', description: 'Turn off/on water supply valves under sinks and toilets to prevent them from sticking.', imageLink: 'https://cdn1.tmbi.com/TFH/Step-By-Step/FH03MAY_SINKVA_03.JPG', timeFrame: 'annually', category: 'plumbing', skillLevel: 'beginner', internetSearch:   'how to turn off sink valves' , createdAt: new Date(), updatedAt:  new Date()}, 
		{task: 'Pour Water Into Drains', description: 'Pour a gallon of water into drains that are not used often including floor drains to fill the trap and prevent odors', imageLink: 'https://www.sparkleteam.com/wp-content/uploads/2013/04/pouring-chemicals-down-a-drain-225x300.jpg', timeFrame: 'annually', category: 'plumbing', skillLevel: ‘beginner’ internetSearch:   ‘how to eliminate drain odors’, createdAt: new Date(), updatedAt:  new Date()}, 
		{task: 'Inspect Filters Throughout Home', description: 'Inspect filters and cartridges throughout the home including furnace, fridge, water purifier; replace as needed'., imageLink: 'http://g-ecx.images-amazon.com/images/G/01/th/aplus/ge_mwf_filter_fridge2._V167585617_.jpg', timeFrame: 'monthly', category: 'general home maintenence', skillLevel: 'beginner', internetSearch:   'replace furnace or fridge filter' , createdAt: new Date(), updatedAt:  new Date()}, 
		{task: 'Furnace Tune-up and Cleaning', description: 'Have a professional come out and perform a tune-up and cleaning', imageLink: 'http://www.mm-plumbing.com/wp-content/uploads/2014/04/tune-up-furnace.jpg', timeFrame: 'fall', category: 'HVAC', skillLevel: 'professional', internetSearch:   'furnace tune-up special' , createdAt: new Date(), updatedAt:  new Date()}, 
		{task: 'Air Conditioner or Swamp Cooler Tune-up and Cleaning', description: 'Have a professional come out and perform a tune-up and cleaning', imageLink: 'http://www.planoairconditioningandheating.com/ac-repair/plano-air-conditioning-tune-up-list.jpg', timeFrame: 'spring,' category: 'HVAC', skillLevel: 'professional', internetSearch:   'air conditioner tune-up special', createdAt: new Date(), updatedAt:  new Date()}, 
		{task: 'Check Vents', description: 'Check all vents in home to make sure they are open', imageLink: 'https://www.revlocal.com/FileStore.ashx?id=95706', timeFrame: 'fall', category: 'HVAC', skillLevel: 'beginner', internetSearch:   'how to open vents in home', createdAt: new Date(), updatedAt:  new Date()}, 
		{task: 'Inspect Window and Door Seals', description: 'Inspect Window and Door Seals replace or fix as needed', imageLink: ‘https://www.todayshomeowner.com/screengrabs/639-10-how-replace-worn-weatherstripping-doors.jpg’, timeFrame: 'fall', category: 'general home maintenance', skillLevel: 'beginner', internetSearch:   'DIY replace weatherstripping', createdAt: new Date(), updatedAt:  new Date()}, 
		{task: 'Inspect Dryer Vents and Vent Hose', description: 'Inspect Dryer vents and vent hose for blockage.  Clean as needed.', imageLink: 'http://www.kaypratt.com/blog/wp-content/uploads/2013/05/cloggeddryervent.jpg', timeFrame: 'annually', category: 'general home maintenance', skillLevel: 'beginner', internetSearch:   'how to clean dryer vent and hose', createdAt: new Date(), updatedAt:  new Date()}, 
		{task: 'Check Flue or Chimney', description: 'Visually look over the flue or chimney for any cracks holes or corrosion. Some small flue leaks can be seals with foil tape. Chimney repairs must be done by a professional mason.', imageLink: 'http://www.certifiedcraftsmen.com/content/images/chimney/classa_b.jpg', timeFrame: 'annually', category: 'HVAC', skillLevel: 'beginner', internetSearch:   'How to check the flue on the roof', createdAt: new Date(), updatedAt:  new Date()}, 
		{task: 'Fertilize Lawn', description: 'Fertilize your lawn at least four times per year. Ask home and garden center for type of fertilizer for your area.', imageLink: 'http://hoosierhomemade.com/wp-content/uploads/lawn-fertilizing-dos-donts-post.jpg', timeFrame: 'all seasons', category: 'landscaping', skillLevel: 'beginner', internetSearch:   'how to fertilize a lawn', createdAt: new Date(), updatedAt:  new Date()}, 
		{task: 'Clean Raingutters', description: 'Clean out raingutters to prevent downspout blockage', imageLink: 'http://seminolepowerwash.com/wp-content/uploads/2014/05/Gutter-Cleaning1.jpg', timeFrame: 'all seasons', category: 'landscaping', skillLevel: 'beginner', internetSearch:   'how to clean out raingutters', createdAt: new Date(), updatedAt:  new Date()}, 
	    {task: 'Winterize Sprinkler System', description: 'Turn off sprinkler system open valves blow-out lines', imageLink: 'https://images.plantcaretoday.com/wp-content/uploads/winterinze-sprinkler-09302016-1200x630.jpg', timeFrame: 'fall', category: 'landscaping', skillLevel: 'beginner', internetSearch:   'how to drain sprinkler system', createdAt: new Date(), updatedAt:  new Date()}, 
		{task: 'Check Outdoor Hosebibbs for Leaks', description: 'Check oudoor hosebibbs for leaks disconnect all hoses to prevent freezing.', imageLink: 'https://i.pinimg.com/736x/de/30/78/de3078de16b5c7473664287cd447300b.jpg', timeFrame: 'fall', category: 'landscaping', skillLevel: 'beginner', internetSearch:   'how to check hosebibb', createdAt: new Date(), updatedAt:  new Date()}, 
		{task: 'Change batteriesin smoke detetctors', description: 'Change batteries in all smoke and carbon monoxide detectors', imageLink: 'https://unitedelectricalgroup.net.au/wp-content/uploads/2017/02/Chirping-Smoke-Alarm-Battery-Cover.jpg', timeFrame: 'fall', category: 'general home maintenance', skillLevel: 'beginner', internetSearch:   'how to change batteries in smoke detectors', createdAt: new Date(), updatedAt:  new Date()}, 
		{task: 'Inspect exterior paint and touch up', description: 'Inspect exterior paint on siding, window frames, etc., and check for missing paint or damage.  Touch up yourself or hire a professional.', imageLink: 'http://successpatheducation.com/wp-content/uploads/sites/8/2016/05/exterior-paint-is-a-touch-up-enough.jpg', timeFrame: 'spring', category: 'painting', skillLevel: 'beginner', internetSearch:   ‘inspect for paint chips’, createdAt: new Date(), updatedAt:  new Date()}, 
		{task: 'Inspect Roof Shingles', description: 'Inspect the shingles on your roof check for cracks, peeling, curling or missing shingles. Replace as necessary.', imageLink: 'https://i.pinimg.com/736x/36/ec/ab/36ecabfed4fbbbd88650b0ec762147db.jpg', timeFrame: 'fall', category: 'roofing', skillLevel: 'beginner', internetSearch:   'how to replace individual shingles on a roof' , createdAt: new Date(), updatedAt:  new Date()}, 
		{task: 'Prune shrubs after they bloom', description: 'Prune shrubs after they bloom, always making sure to remove any decayed or dead branches'.  Each shrub may require pruning at different times.’, imageLink: 'http://img2-1.timeinc.net/toh/i/g/11/yard/03-shrub-pruning/04-dos-and-donts.jpg', timeFrame: 'spring', category: 'landscaping', skillLevel: 'beginning', internetSearch:   'how to prune bushes', createdAt: new Date(), updatedAt:  new Date()}, 
		{task: 'Inspect Outdoor Play Equipment', description: 'Inspect outdoor play equipment for cracks, loose bolts, rusty chains, split or cracked wood.  Perform repairs or hire professional.', imageLink: 'https://i.pinimg.com/736x/9a/67/5d/9a675dbd0eb0d370feea5272ca477356.jpg', timeFrame: 'spring', category: 'landscaping', skillLevel: 'beginner', internetSearch:   'how to repair outdoor play equipment', createdAt: new Date(), updatedAt:  new Date()}, 
		{task: 'Vacuum Refrigerator Coils', description: 'Remove the coil cover and vacuum the dust off of the refrigerator coils', imageLink: 'https://www.onegoodthingbyjillee.com/wp-content/uploads/2012/06/cleaning-refrigerator-coils-8.jpg', timeFrame: 'all seasons', category: 'general home maintenance', skillLevel: 'beginner', internetSearch:   'how to clean fridge coils', createdAt: new Date(), updatedAt:  new Date()}
		], {});
	},

	down: (queryInterface, Dequelize) => {
		return queryInterface.bulkDelete('task', null, {truncate : true});
	}
};

