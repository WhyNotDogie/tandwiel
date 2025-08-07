ServerEvents.recipes(event => {
    event.remove({ id: "hexcasting:decompose_quenched_shard/charged" })
    event.remove({ id: "hexcasting:decompose_quenched_shard/shard" })
    event.remove({ id: "hexcasting:decompose_quenched_shard/dust" })
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [
            "tfmg:steel_vat"
        ],
        "heatRequirement": "heated",
        "ingredients": [
            { "item": "hexcasting:quenched_allay_shard" },
            { "item": "hexcasting:amethyst_dust" }
        ],
        "machines": [
            // "tfmg:electrode",
            // "tfmg:electrode"
        ],
        "minSize": 1,
        "processingTime": 100,
        "results": [
            {
                "item": "hexcasting:amethyst_dust",
                "count": 31
            }
        ]
    })
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [
            "tfmg:steel_vat"
        ],
        "heatRequirement": "heated",
        "ingredients": [
            { "item": "hexcasting:quenched_allay_shard" },
            { "item": "minecraft:amethyst_shard" }
        ],
        "machines": [
            // "tfmg:electrode",
            // "tfmg:electrode"
        ],
        "minSize": 1,
        "processingTime": 100,
        "results": [
            {
                "item": "minecraft:amethyst_shard",
                "count": 7
            }
        ]
    })
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [
            "tfmg:steel_vat"
        ],
        "heatRequirement": "heated",
        "ingredients": [
            { "item": "hexcasting:quenched_allay_shard" },
            { "item": "hexcasting:charged_amethyst" }
        ],
        "machines": [
            // "tfmg:electrode",
            // "tfmg:electrode"
        ],
        "minSize": 1,
        "processingTime": 100,
        "results": [
            {
                "item": "hexcasting:charged_amethyst",
                "count": 4
            }
        ]
    })
})