ServerEvents.recipes(event => {
    // TODO: Rename ad astra cheese to american cheese
    
    // american cheese ahahaha im such a joker my full name is literally joe kerr
    // hahaha
    event.recipes.create.mixing(
        "ad_astra:cheese",
        [
            "create_bic_bit:aged_cheese_wedge",
            Fluid.of('tfmg:heavy_oil', 20)
        ]
    ).id('kubejs:mixing_american_cheese')
})