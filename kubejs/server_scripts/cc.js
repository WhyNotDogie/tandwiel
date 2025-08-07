ServerEvents.recipes(event => {
    event.remove({ type: "create:pressing", output: "ccbr:lapis_sheet" })
    event.custom({
        type: "create:pressing",
        ingredients: [
            {
                item: "minecraft:lapis_lazuli"
            }
        ],
        results: [
            {
                item: "ccbr:lapis_sheet"
            }
        ]
    })
})