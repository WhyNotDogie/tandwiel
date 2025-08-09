ServerEvents.recipes(event => {
    // tfmg x metallurgy
    event.remove({ mod: "tfmg", not: { output: "#kubejs:dont_remove_recipe" } })
    event.remove({ output: "minecraft:coal", input: "#minecraft:coal_ores" })
    event.shaped(
        Item.of("tfmg:slag_block", 3),
        [
            "SSS",
            "SSS",
            "SSS"
        ],
        {
            S: "createmetallurgy:slag"
        }
    ).id("slag_block_crafting")
    event.shaped(
        Item.of("createmetallurgy:slag", 3),
        [
            "S"
        ],
        {
            S: "tfmg:slag_block"
        }
    ).id("slag_block_uncrafting")
    event.custom({
        type: "createmetallurgy:casting_in_basin",
        ingredients: [
            {
                amount: 270,
                fluid: "createmetallurgy:molten_slag",
                nbt: {} // Usually optional — omit if not needed
            }
        ],
        processingTime: 180,
        result: {
            item: "tfmg:slag_block"
        }
    }).id("casting_slag_block")
    
    event.custom({
        type: "createmetallurgy:casting_in_table",
        ingredients: [
            {
                item: "createmetallurgy:graphite_ingot_mold"
            },
            {
                amount: 90,
                fluid: "tfmg:liquid_silicon",
                nbt: {}
            }
        ],
        processingTime: 60,
        result: {
            item: "tfmg:silicon_ingot"
        }
    }).id("casting_silicon_ingot")
    event.shaped(Item.of('createmetallurgy:graphite_blank_mold', 2), [
        'GG',
        'GG'
    ], {
        G: 'createmetallurgy:graphite'
    }).id("kubejs:mold_crafting_manual_only")
    event.shaped(Item.of('tfmg:industrial_pipe', 8), [
        'S',
        'I',
        'S'
    ], {
        I: 'ad_astra:steel_ingot',
        S: 'ad_astra:steel_plate'
    }).id('kubejs:industrial_pipe');
    event.shaped(Item.of('tfmg:pumpjack_base', 1), [
        'S',
        'P'
    ], {
        S: 'ad_astra:steel_plate',
        P: 'tfmg:industrial_pipe'
    }).id('kubejs:pumpjack_base');
    event.shaped("tfmg:steel_fluid_tank", [
        "P",
        "B",
        "P"
    ], {
        P: "ad_astra:steel_plate",
        B: "minecraft:barrel"
    })
    event.stonecutting("tfmg:exhaust", "tfmg:industrial_pipe")
    // event.recipes.create.emptying([Fluid.of("tfmg:air", 250), 'minecraft:glass_bottle'], 'minecraft:glass_bottle')
    event.recipes.create.filling('tfmg:air_bucket', [Fluid.of("tfmg:air", 1000), 'minecraft:bucket'])
    event.recipes.create.mixing(
        [Fluid.of('tfmg:sulfuric_acid', 500)],
        [
            Item.of('tfmg:sulfur_dust', 2),
            'tfmg:nitrate_dust',
            Fluid.of('minecraft:water', 1000)
        ]
    ).id('kubejs:mixing_sulfuric_acid')
})