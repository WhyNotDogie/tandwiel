ServerEvents.recipes(event => {
    event.recipes.create.splashing(Item.of("kubejs:quartz_shard").withChance(0.125), "#kubejs:stripped_nether_logs")
    
    event.shaped('minecraft:quartz', [
        'SSS',
        'SSS',
        'SSS'
    ], {
        S: 'kubejs:quartz_shard'
    })
    event.shapeless(Item.of('kubejs:quartz_shard', 9), ['minecraft:quartz'])
    event.recipes.create.crushing([
        Item.of('tfmg:limesand', 2),
        Item.of('tfmg:limesand').withChance(0.25)
    ], 'create:limestone')
    event.recipes.create.mixing(
        'tfmg:n_semiconductor',
        [
            'tfmg:limesand',
            'tfmg:silicon_ingot'
        ]
    )
    event.custom({
        type: "createmetallurgy:alloying",
        heatRequirement: "heated",
        ingredients: [
            {
                item: "minecraft:quartz",
                nbt: {}
            },
            {
                item: "createmetallurgy:coke",
                nbt: {}
            }
        ],
        results: [
            {
                fluid: "tfmg:liquid_silicon",
                amount: 270
            }
        ],
        processingTime: 40
    })
    
    event.custom({
        type: "createmetallurgy:alloying",
        heatRequirement: "heated",
        ingredients: [
            {
                item: "minecraft:quartz",
                nbt: {}
            },
            {
                item: "tfmg:coal_coke",
                nbt: {}
            }
        ],
        results: [
            {
                fluid: "tfmg:liquid_silicon",
                amount: 180
            }
        ],
        processingTime: 40
    })
    
    event.recipes.create.compacting(
        'createmetallurgy:coke',
        [Item.of('tfmg:coal_coke_dust', 2)]
    )
    event.recipes.create.milling([
        Item.of('tfmg:coal_coke', 1)
    ], 'tfmg:coal_coke_block')
    event.remove({ id: "create:crafting/materials/electron_tube" })
    event.recipes.create.filling(
        'create:electron_tube',
        [Fluid.of('createmetallurgy:molten_iron', 10), 'tfmg:n_semiconductor'],
    )
    
    event.remove({ id: "create:sequenced_assembly/precision_mechanism" })
    event.recipes.create.sequenced_assembly([
        Item.of("create:precision_mechanism")
    ], "kubejs:kinetic_mechanism", [
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:electron_tube']),
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:electron_tube']),
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'kubejs:mini_wrench']),
    ]).transitionalItem("create:incomplete_precision_mechanism").loops(1)
    event.shaped("kubejs:mini_wrench", [
        " N ",
        " IN",
        "D  "
    ], {
        I: "minecraft:iron_ingot",
        D: "minecraft:red_dye",
        N: "minecraft:iron_nugget"
    })
})