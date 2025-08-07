ServerEvents.recipes(event => {
    event.remove({ mod: "ad_astra", not: { output: "#kubejs:dont_remove_recipe" } })
    event.remove({ id: "create:pressing/steel_ingot" })
    event.replaceOutput(
        { output: "#ad_astra:steel_ingots" },
        "#ad_astra:steel_ingots",
        "ad_astra:steel_ingot"
    )
    event.replaceOutput(
        { output: "#ad_astra:steel_nuggets" },
        "#ad_astra:steel_nuggets",
        "ad_astra:steel_nugget"
    )
    event.replaceOutput(
        { output: "#ad_astra:steel_plates" },
        "#ad_astra:steel_plates",
        "ad_astra:steel_plate"
    )
    event.replaceInput(
        { input: "#ad_astra:steel_ingots" },
        "#ad_astra:steel_ingots",
        "ad_astra:steel_ingot"
    )
    event.replaceInput(
        { input: "#ad_astra:steel_nuggets" },
        "#ad_astra:steel_nuggets",
        "ad_astra:steel_nugget"
    )
    event.replaceInput(
        { input: "#ad_astra:steel_plates" },
        "#ad_astra:steel_plates",
        "ad_astra:steel_plate"
    )
    
    event.custom({
        "type": "ad_astra:oxygen_loading",
        "cookingtime": 1,
        "energy": 30,
        "input": {
            "ingredient": {
                "fluid": "tfmg:air"
            },
            "millibuckets": 25
        },
        "result": {
            "fluid": "tfmg:air",
            "millibuckets": 25
        }
    })
    
    event.recipes.create.mechanical_crafting('ad_astra:tier_1_rocket', [
        '   O   ',
        '   B   ',
        '  BAB  ',
        '  SCS  ',
        '  SDS  ',
        'OSMTMSO',
        'F EEE F'
    ], {
        O: 'createmetallurgy:obdurium_block',
        B: 'tfmg:fireproof_bricks',
        A: 'minecraft:amethyst_shard',
        S: 'createmetallurgy:steel_block',
        C: 'tfmg:circuit_board',
        D: 'ad_astra:steel_door',
        M: 'createaddition:electric_motor',
        T: 'tfmg:steel_fluid_tank',
        F: 'ad_astra:rocket_fin',
        E: 'ad_astra:steel_engine'
    })
    event.shaped("ad_astra:rocket_fin", [
        " N ",
        "I I"
    ], {
        I: "ad_astra:steel_ingot",
        N: "ad_astra:steel_nugget"
    })
    event.shaped("ad_astra:steel_door", [
        "II",
        "II",
        "II"
    ], {
        I: "ad_astra:steel_ingot"
    })

    function fourcompress(o, i) {
        event.shaped(o, [
            "HH",
            "HH"
        ], {
            H: i
        })
    }

    fourcompress(Item.of("ad_astra:iron_plateblock", 8), "create:iron_sheet")
    fourcompress(Item.of("ad_astra:desh_plateblock", 8), "ad_astra:desh_plate")
})