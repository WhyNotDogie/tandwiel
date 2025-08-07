ServerEvents.tags('item', event => {
    event.add('kubejs:stripped_nether_logs', [
        'minecraft:stripped_crimson_stem',
        'minecraft:stripped_warped_stem'
    ])
    event.remove("ad_astra:steel_blocks", "ad_astra:steel_block")

    event.add('kubejs:dont_remove_recipe', [
        '#minecraft:stairs',
        '#minecraft:slabs',
        '#minecraft:planks',
        '#forge:stripped_logs',
        '#tfmg:stone_types/bauxite',
        '#tfmg:stone_types/galena',
        'tfmg:steel_scaffolding',
        'tfmg:steel_ladder',
        'tfmg:lead_ladder',
        'tfmg:steel_bars',
        'tfmg:lead_bars',
        'tfmg:slag_bricks_wall',
        'tfmg:slag_bricks_slab',
        'tfmg:slag_bricks_stairs',
        'tfmg:lead_sheet',
        'ad_astra:desh_ingot',
        'ad_astra:desh_block',
        'ad_astra:desh_nugget',
        'ad_astra:iron_pillar',
        'ad_astra:glowing_iron_pillar',
        'ad_astra:marked_iron_pillar',
        'ad_astra:vent',
        'tfmg:fireproof_bricks',
        'tfmg:fireproof_brick',
        'tfmg:etched_circuit_board',
        'tfmg:coated_circuit_board',
        'tfmg:sulfur_dust',
        'tfmg:nitrate_dust'
    ])
    event.add('forge:stripped_logs', [
        'hexcasting:stripped_edified_log',
        'ad_astra:stripped_glacian_log'
    ])
})
