ServerEvents.recipes(event => {
    event.recipes.create.cutting("9x kubejs:silicon_wafer", "tfmg:silicon_ingot")
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [
            "tfmg:steel_vat"
        ],
        "heatRequirement": "heated",
        "ingredients": [
            { "item": "kubejs:silicon_wafer" },
            {
                "fluid": "createmetallurgy:molten_electrum",
                "amount": 20
            }
        ],
        "machines": [
            // "tfmg:electrode",
            // "tfmg:electrode"
        ],
        "minSize": 1,
        "processingTime": 100,
        "results": [
            {
                "item": "kubejs:coated_silicon_wafer",
                "count": 1
            }
        ]
    })
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [
            "tfmg:steel_vat"
        ],
        "ingredients": [
            { "item": "kubejs:silicon_wafer" },
            {
                "fluid": "createmetallurgy:molten_electrum",
                "amount": 10
            }
        ],
        "machines": [
            // "tfmg:electrode",
            // "tfmg:electrode"
        ],
        "minSize": 1,
        "processingTime": 100,
        "results": [
            {
                "item": "kubejs:coated_silicon_wafer",
                "count": 1
            }
        ]
    })
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [
            "tfmg:steel_vat"
        ],
        "ingredients": [
            { "item": "kubejs:coated_silicon_wafer" },
            {
                "fluid": "tfmg:sulfuric_acid",
                "amount": 125
            }
        ],
        "machines": [
            // "tfmg:electrode",
            // "tfmg:electrode"
        ],
        "minSize": 1,
        "processingTime": 100,
        "results": [
            {
                "item": "kubejs:etched_silicon_wafer",
                "count": 1
            }
        ]
    })
    event.remove({ id: "ccbr:mechanical_crafting/integrated_circuit" })
    // TODO: Add Transitional Item
    event.recipes.create.sequenced_assembly([
        Item.of("ccbr:integrated_circuit")
    ], "kubejs:etched_silicon_wafer", [
        event.recipes.createDeploying('kubejs:etched_silicon_wafer', ['kubejs:etched_silicon_wafer', 'minecraft:gold_nugget']),
        event.recipes.createDeploying('kubejs:etched_silicon_wafer', ['kubejs:etched_silicon_wafer', 'minecraft:gold_nugget']),
        event.recipes.createDeploying('kubejs:etched_silicon_wafer', ['kubejs:etched_silicon_wafer', 'minecraft:gold_nugget']),
        event.recipes.createDeploying('kubejs:etched_silicon_wafer', ['kubejs:etched_silicon_wafer', 'ccbr:lapis_sheet']),
        event.recipes.createPressing('kubejs:etched_silicon_wafer', 'kubejs:etched_silicon_wafer')
    ]).transitionalItem("kubejs:etched_silicon_wafer").loops(1)
})