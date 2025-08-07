ServerEvents.recipes(event => {
    event.shapeless("createmetallurgy:refractory_mortar", [
        "createsifter:dust",
        "createsifter:dust",
        "createsifter:dust",
        "minecraft:clay_ball",
        Item.of("minecraft:water_bucket").withChance(1.0)
    ]).id("kubejs:dust_mortar_manual_only")
    event.recipes.create.mixing({
        ingredients: [
            { item: "createsifter:dust" },
            { item: "createsifter:dust" },
            { item: "minecraft:clay_ball" },
            { fluid: "minecraft:water", amount: 100 }
        ],
        results: [
            { item: "createmetallurgy:refractory_mortar" }
        ]
    }).id("kubejs:dust_mortar")
    event.shapeless("createmetallurgy:refractory_mortar", [
        "minecraft:sand",
        "minecraft:sand",
        "minecraft:sand",
        "minecraft:clay_ball",
        Item.of("minecraft:water_bucket").withChance(1.0)
    ]).id("kubejs:sand_mortar_manual_only")
    event.custom({
        type: "create:splashing",
        ingredients: [
            { item: "createsifter:dust" }
        ],
        results: [
            { item: "minecraft:clay_ball", count: 2 }
        ]
    })
    event.remove({ type: "create:splashing", input: "minecraft:sand" })
    event.custom({
        type: "create:splashing",
        ingredients: [
            { item: "minecraft:sand" }
        ],
        results: [
            { item: "minecraft:clay_ball", count: 3 }
        ]
    })
    event.custom({
        type: "create:mixing",
        ingredients: [
            { item: "minecraft:bookshelf" }
        ],
        results: [
            { item: "createsifter:dust", chance: 0.1 },
            { item: "minecraft:bookshelf" }
        ]
    })
    event.smelting("tfmg:slag_bricks", "createmetallurgy:refractory_mortar")
    event.custom({
        type: "create:mixing",
        ingredients: [
            { item: "tfmg:slag_bricks" },
            { item: "minecraft:andesite" }
        ],
        results: [
            { item: "create:andesite_alloy", count: 3 }
        ]
    }).id("andesite_alloy")
    event.remove({ output:"create:andesite_alloy", input: ["minecraft:iron_nugget", "create:zinc_nugget"] })
    event.shaped(Item.of("create:andesite_alloy", 3), [
        "SS",
        "AA"
    ], {
        S: "tfmg:slag_bricks",
        A: "minecraft:andesite"
    }).id("andesite_alloy_crafting")

    event.recipes.create.sequenced_assembly([
        Item.of("kubejs:kinetic_mechanism")
    ], "#minecraft:wooden_slabs", [
        event.recipes.createDeploying('kubejs:incomplete_kinetic_mechanism', ['kubejs:incomplete_kinetic_mechanism', 'create:andesite_alloy']),
        event.recipes.createDeploying('kubejs:incomplete_kinetic_mechanism', ['kubejs:incomplete_kinetic_mechanism', 'create:andesite_alloy']),
        event.recipes.createDeploying('kubejs:incomplete_kinetic_mechanism', ['kubejs:incomplete_kinetic_mechanism', '#minecraft:axes'])
    ]).transitionalItem("kubejs:incomplete_kinetic_mechanism").loops(1)

    // Copper
    event.remove({ id: "create_factory_logistics:sequenced_assembly/fluid_mechanism" })
    event.shaped(Item.of("create_factory_logistics:fluid_mechanism"), [
        "KMK"
    ], {
        K: "minecraft:dried_kelp",
        M: "kubejs:kinetic_mechanism"
    })

    // Gold
    event.blasting("minecraft:magma_block", "minecraft:deepslate").cookingTime(300)
    event.recipes.create.splashing("minecraft:obsidian", "minecraft:magma_block")
    event.recipes.create.milling(
        'create:powdered_obsidian',
        'minecraft:obsidian'
    )
    event.remove({ id: "create_factory_logistics:sequenced_assembly/fluid_mechanism" })
    event.shaped(Item.of("kubejs:reinforced_mechanism"), [
        "SMS"
    ], {
        S: "create:sturdy_sheet",
        M: "kubejs:kinetic_mechanism"
    })
})