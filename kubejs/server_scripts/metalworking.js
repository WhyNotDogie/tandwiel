ServerEvents.recipes(event => {
    function ninecompress(o, i) {
        event.shaped(o, [
            "HHH",
            "HHH",
            "HHH"
        ], {
            H: i
        })
    }

    function nineuncompress(o, i) {
        event.shaped(Item.of(o, 9), [
            "H"
        ], {
            H: i
        })
    }

    function nineroundtrip(big, small) {
        ninecompress(big, small)
        nineuncompress(small, big)
    }

    event.remove({ input: "#forge:raw_materials", output: "#forge:ingots" })
    event.remove({ input: "#create:crushed_raw_materials", output: "#forge:ingots" })
    event.remove({ input: "#forge:ores", output: "#forge:ingots" })
    event.remove({ input: "#create:crushed_raw_materials", output: "#forge:nuggets" })
    event.remove({ id: "minecraft:netherite_ingot" })
    event.remove({ id: "create:mixing/brass_ingot" })
    event.remove({ id: "createaddition:mixing/electrum" })
    event.remove({ id: "create_more_additions:electrum/electrum_mixing_ingot" })

    nineroundtrip("tfmg:lead_ingot", "tfmg:lead_nugget")
    nineroundtrip("tfmg:lead_block", "tfmg:lead_ingot")
})