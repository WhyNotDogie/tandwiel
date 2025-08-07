ServerEvents.recipes(event => {
    event.recipes.create.crushing([
        Item.of('tfmg:coal_coke_dust', 2),
        Item.of('tfmg:coal_coke_dust').withChance(0.25)
    ], 'tfmg:coal_coke_block')
    
    event.shaped("tfmg:screwdriver", [
        "  I",
        "DI ",
        "ID "
    ], {
        I: "minecraft:iron_ingot",
        D: "minecraft:red_dye"
    })
    event.recipes.create.cutting(
        Item.of('tfmg:screw', 2),
        'tfmg:steel_nugget'
    ).id('kubejs:cutting_steel_nugget_into_screws');
    
    event.recipes.create.deploying(
        'tfmg:steel_trapdoor',
        ['tfmg:heavy_plate', 'tfmg:screw']
    ).id('kubejs:steel_trapdoor_deploying');


    event.recipes.create.deploying(
        'tfmg:steel_cogwheel',
        ['create:shaft', 'tfmg:steel_trapdoor']
    ).id('kubejs:steel_cog_deploying');
    event.recipes.create.deploying(
        'tfmg:large_steel_cogwheel',
        ['tfmg:steel_cogwheel', 'tfmg:steel_trapdoor']
    ).id('kubejs:steel_large_cog_from_small_deploying');
    event.shapeless(
        'tfmg:steel_cogwheel',
        ['create:shaft', 'tfmg:steel_trapdoor']
    ).id('kubejs:steel_cog_shapeless');
    event.shapeless(
        'tfmg:large_steel_cogwheel',
        ['tfmg:steel_cogwheel', 'tfmg:steel_trapdoor']
    ).id('kubejs:steel_large_cog_from_small_shapeless');
    event.shapeless(
        'tfmg:large_steel_cogwheel',
        ['create:shaft', 'tfmg:steel_trapdoor', 'tfmg:steel_trapdoor']
    ).id('kubejs:steel_large_cog_shapeless');

    event.recipes.create.sequenced_assembly([
        Item.of("tfmg:steel_mechanism")
    ], "create:precision_mechanism", [
        event.recipes.createDeploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:large_steel_cogwheel']),
        event.recipes.createDeploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:large_steel_cogwheel']),
        event.recipes.createDeploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:screwdriver']),
    ]).transitionalItem("tfmg:unfinished_steel_mechanism").loops(1)
})