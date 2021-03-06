export const data = [
    {
        slug: "aboleth",
        name: "Aboleth",
        type: "large aberration",
        alignment: "lawful evil",
        ac: "17 (natural armor)",
        hp: {
            default: 135,
            rng: [
                18,
                10,
                36
            ]
        },
        speed: {
            base: 10,
            unit: "ft."
        },
        stats: {
            STR: [
                21,
                5
            ],
            DEX: [
                9,
                -1
            ],
            CON: [
                15,
                2
            ],
            INT: [
                18,
                4
            ],
            WIS: [
                15,
                2
            ],
            CHA: [
                18,
                4
            ]
        },
        saving_throws: [
            "CON +6",
            "INT +8",
            "WIS +6"
        ],
        skills: [
            "history +12",
            "perception +10"
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 20"
        ],
        languages: [
            "deep speech",
            "telepathy 120 ft."
        ],
        challenge_lvl: "10",
        xp: 5900,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The aboleth can breathe air and water. </p><p><em><strong>Mucous Cloud.</strong></em> While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 feet of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater. </p><p><em><strong>Probing Telepathy.</strong></em> If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The aboleth makes three tentacle attacks. </p><p><em><strong>Tentacle.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft., one target. <em>Hit:</em> 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft. one target. <em>Hit:</em> 15 (3d6 + 5) bludgeoning damage. </p><p><em><strong>Enslave (3/Day).</strong></em> The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance. </p><p>Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.</p><h3> LEGENDARY ACTIONS </h3><p>The aboleth can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The aboleth regains spent legendary actions at the start of its turn. </p><p><em><strong>Detect.</strong></em> The aboleth makes a Wisdom (Perception) check. </p><p><em><strong>Tail Swipe.</strong></em> The aboleth makes one tail attack. </p><p><em><strong>Psychic Drain</strong></em> (Costs 2 Actions). One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/11/1000/1000/636238825975375671.jpeg",
        id: 0
    },
    {
        slug: "acolyte",
        name: "Acolyte",
        type: "medium humanoid",
        alignment: "any",
        ac: "10",
        hp: {
            default: 9,
            rng: [
                2,
                8,
                0
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                10,
                0
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                10,
                0
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                14,
                2
            ],
            CHA: [
                11,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "medicine +4",
            "religion +2"
        ],
        senses: [
            "passive perception 12"
        ],
        languages: [
            "any one language (usually common)"
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3><p><em><strong>Spellcasting.</strong></em> The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The acolyte has following cleric spellsprepare: </p><p>Cantrips (atwill: light, sacred flame, thaumaturgy </p><p>1st level (3slots: bless, cure wounds, sanctuary</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Club.</strong></em> <em>Melee Weapon Attack:</em> +2 to hit, reach 5 ft., one target. <em>Hit:</em> 2 (1d4) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
        id: 1
    },
    {
        slug: "adult_black_dragon",
        name: "Adult Black Dragon",
        type: "huge dragon",
        alignment: "chaotic evil",
        ac: "19 (natural armor)",
        hp: {
            default: 195,
            rng: [
                17,
                12,
                85
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                23,
                6
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                21,
                5
            ],
            INT: [
                14,
                2
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                17,
                3
            ]
        },
        saving_throws: [
            "DEX +7",
            "CON +10",
            "WIS +6",
            "CHA +8"
        ],
        skills: [
            "perception +11",
            "stealth +7"
        ],
        senses: [
            "blindsight 60 ft.",
            "darkvision 120 ft.",
            " passive perception 21"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "14",
        xp: 11500,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The dragon can breathe air and water.</p><p><em><strong>Legendary Resistance (3/Day).</strong></em> If the dragon fails a saving throw, it can choose to succeed instead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon can use its Frightful Presence. It then makes threeattack: one with its bite and two with its claws.</p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 10 ft., one target. <em>Hit:</em> 17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage.</p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d6 + 6) slashing damage.</p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 15 ft., one target. <em>Hit:</em> 15 (2d8 + 6) bludgeoning damage.</p><p><em><strong>Frightful Presence.</strong></em> Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p><p><em><strong>Acid Breath (Recharge 5\u20136).</strong></em> The dragon exhales acid in a 60-\u00adfoot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.</p><h3> LEGENDARY ACTIONS </h3><p>The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn.</p><p><em><strong>Detect.</strong></em> The dragon makes a Wisdom (Perception) check.</p><p><em><strong>Tail Attack.</strong></em> The dragon makes a tail attack.</p><p><em><strong>Wing Attack (Costs 2 Actions).</strong></em> The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/13/1000/1000/636238871029832086.jpeg",
        id: 2
    },
    {
        slug: "adult_blue_dragon",
        name: "Adult Blue Dragon",
        type: "huge dragon",
        alignment: "lawful evil",
        ac: "19 (natural armor)",
        hp: {
            default: 225,
            rng: [
                18,
                12,
                108
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                25,
                7
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                23,
                6
            ],
            INT: [
                16,
                3
            ],
            WIS: [
                15,
                2
            ],
            CHA: [
                19,
                4
            ]
        },
        saving_throws: [
            "DEX +5",
            "CON +11",
            "WIS +7",
            "CHA +9"
        ],
        skills: [
            "perception +12",
            "stealth +5"
        ],
        senses: [
            "blindsight 60 ft.",
            "darkvision 120 ft.",
            " passive perception 22"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "16",
        xp: 15000,
        traits_html: "<h3> Traits </h3><p><em><strong>Legendary Resistance (3/Day).</strong></em> If the dragon fails a saving throw, it can choose to succeed instead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon can use its Frightful Presence. It then makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +12 to hit, reach 10 ft., one target. <em>Hit:</em> 18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +12 to hit, reach 5 ft., one target. <em>Hit:</em> 14 (2d6 + 7) slashing damage. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +12 to hit, reach 15 ft., one target. <em>Hit:</em> 16 (2d8 + 7) bludgeoning damage. </p><p><em><strong>Frightful Presence.</strong></em> Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours. </p><p><em><strong>Lightning Breath (Recharge 5\u20136).</strong></em> The dragon exhales lightning in a 90-\u00adfoot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.</p><h3> LEGENDARY ACTIONS </h3><p>The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn. </p><p><em><strong>Detect.</strong></em> The dragon makes a Wisdom (Perception) check. </p><p><em><strong>Tail Attack.</strong></em> The dragon makes a tail attack. </p><p><em><strong>Wing Attack (Costs 2 Actions).</strong></em> The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/16/1000/1000/636238882493439723.jpeg",
        id: 3
    },
    {
        slug: "adult_brass_dragon",
        name: "Adult Brass Dragon",
        type: "huge dragon",
        alignment: "chaotic good",
        ac: "18 (natural armor)",
        hp: {
            default: 172,
            rng: [
                15,
                12,
                75
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                23,
                6
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                21,
                5
            ],
            INT: [
                14,
                2
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                17,
                3
            ]
        },
        saving_throws: [
            "DEX +5",
            "CON +10",
            "WIS +6",
            "CHA +8"
        ],
        skills: [
            "history +7",
            "perception +11",
            "persuasion +8",
            "stealth +5"
        ],
        senses: [
            "blindsight 60 ft.",
            "darkvision 120 ft.",
            " passive perception 21"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "13",
        xp: 10000,
        traits_html: "<h3> Traits </h3><p><em><strong>Legendary Resistance (3/Day).</strong></em> If the dragon fails a saving throw, it can choose to succeed instead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon can use its Frightful Presence. It then makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 10 ft., one target. <em>Hit:</em> 17 (2d10 + 6) piercing damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d6 + 6) slashing damage. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 15 ft., one target. <em>Hit:</em> 15 (2d8 + 6) bludgeoning damage. </p><p><em><strong>Frightful Presence.</strong></em> Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours. </p><p><em><strong>Breath Weapons (Recharge 5\u20136).</strong></em> The dragon uses one of the following breath weapons. </p><p><em><strong>Fire Breath.</strong></em> The dragon exhales fire in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 45 (13d6) fire damage on a failed save, or half as much damage on a successful one. </p><p><em><strong>Sleep Breath.</strong></em> The dragon exhales sleep gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.</p><h3> LEGENDARY ACTIONS </h3><p>The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn. </p><p><em><strong>Detect.</strong></em> The dragon makes a Wisdom (Perception) check. </p><p><em><strong>Tail Attack.</strong></em> The dragon makes a tail attack. </p><p><em><strong>Wing Attack (Costs 2 Actions).</strong></em> The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/18/1000/1000/636238885681129014.jpeg",
        id: 4
    },
    {
        slug: "adult_bronze_dragon",
        name: "Adult Bronze Dragon",
        type: "huge dragon",
        alignment: "lawful good",
        ac: "19 (natural armor)",
        hp: {
            default: 212,
            rng: [
                17,
                12,
                102
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                25,
                7
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                23,
                6
            ],
            INT: [
                16,
                3
            ],
            WIS: [
                15,
                2
            ],
            CHA: [
                19,
                4
            ]
        },
        saving_throws: [
            "DEX +5",
            "CON +11",
            "WIS +7",
            "CHA +9"
        ],
        skills: [
            "insight +7",
            "perception +12",
            "stealth +5"
        ],
        senses: [
            "blindsight 60 ft.",
            "darkvision 120 ft.",
            " passive perception 22"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "15",
        xp: 13000,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The dragon can breathe air and water.</p><p><em><strong>Legendary Resistance (3/Day).</strong></em> If the dragon fails a saving throw, it can choose to succeed instead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon can use its Frightful Presence. It then makes threeattack: one with its bite and two with its claws.</p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +12 to hit, reach 10 ft., one target. <em>Hit:</em> 18 (2d10 + 7) piercing damage.</p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +12 to hit, reach 5 ft., one target. <em>Hit:</em> 14 (2d6 + 7) slashing damage.</p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +12 to hit, reach 15 ft., one target. <em>Hit:</em> 16 (2d8 + 7) bludgeoning damage.</p><p><em><strong>Frightful Presence.</strong></em> Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p><p><em><strong>Breath Weapons (Recharge 5\u20136).</strong></em> The dragon uses one of the following breath weapons.</p><p><em><strong>Lightning Breath.</strong></em> The dragon exhales lightning in a 90- foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.</p><p><em><strong>Repulsion Breath.</strong></em> The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 19 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon.</p><p><em><strong>Change Shape.</strong></em> The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).</p><p>In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.</p><h3> LEGENDARY ACTIONS </h3><p>The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn.</p><p><em><strong>Detect.</strong></em> The dragon makes a Wisdom (Perception) check.</p><p><em><strong>Tail Attack.</strong></em> The dragon makes a tail attack.</p><p><em><strong>Wing Attack (Costs 2 Actions).</strong></em> The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/20/1000/1000/636238888310108665.jpeg",
        id: 5
    },
    {
        slug: "adult_copper_dragon",
        name: "Adult Copper Dragon",
        type: "huge dragon",
        alignment: "chaotic good",
        ac: "18 (natural armor)",
        hp: {
            default: 184,
            rng: [
                16,
                12,
                80
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                23,
                6
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                21,
                5
            ],
            INT: [
                18,
                4
            ],
            WIS: [
                15,
                2
            ],
            CHA: [
                17,
                3
            ]
        },
        saving_throws: [
            "DEX +6",
            "CON +10",
            "WIS +7",
            "CHA +8"
        ],
        skills: [
            "deception +8",
            "perception +12",
            "stealth +6"
        ],
        senses: [
            "blindsight 60 ft.",
            "darkvision 120 ft.",
            " passive perception 22"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "14",
        xp: 11500,
        traits_html: "<h3> Traits </h3><p><em><strong>Legendary Resistance (3/Day)</strong></em> If the dragon fails a saving throw, it can choose to succeed instead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon can use its Frightful Presence. It then makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 10 ft., one target. <em>Hit:</em> 17 (2d10 + 6) piercing damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d6 + 6) slashing damage. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 15 ft., one target. <em>Hit:</em> 15 (2d8 + 6) bludgeoning damage. </p><p><em><strong>Frightful Presence.</strong></em> Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours. </p><p><em><strong>Breath Weapons (Recharge 5\u20136).</strong></em> The dragon uses one of the following breath weapons. </p><p><em><strong>Acid Breath.</strong></em> The dragon exhales acid in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one. </p><p><em><strong>Slowing Breath.</strong></em> The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.</p><h3> LEGENDARY ACTIONS </h3><p>The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn. </p><p><em><strong>Detect.</strong></em> The dragon makes a Wisdom (Perception) check. </p><p><em><strong>Tail Attack.</strong></em> The dragon makes a tail attack. </p><p><em><strong>Wing Attack (Costs 2 Actions).</strong></em> The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/22/1000/1000/636238956325913912.jpeg",
        id: 6
    },
    {
        slug: "adult_gold_dragon",
        name: "Adult Gold Dragon",
        type: "huge dragon",
        alignment: "lawful good",
        ac: "19 (natural armor)",
        hp: {
            default: 256,
            rng: [
                19,
                12,
                133
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                27,
                8
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                25,
                7
            ],
            INT: [
                16,
                3
            ],
            WIS: [
                15,
                2
            ],
            CHA: [
                24,
                7
            ]
        },
        saving_throws: [
            "DEX +8",
            "CON +13",
            "WIS +8",
            "CHA +13"
        ],
        skills: [
            "insight +8",
            "perception +14",
            "persuasion +13",
            "stealth +8"
        ],
        senses: [
            "blindsight 60 ft.",
            "darkvision 120 ft.",
            " passive perception 24"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "17",
        xp: 18000,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The dragon can breathe air and water. </p><p><em><strong>Legendary Resistance (3/Day).</strong></em> If the dragon fails a saving throw, it can choose to succeed instead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon can use its Frightful Presence. It then makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +14 to hit, reach 10 ft., one target. <em>Hit:</em> 19 (2d10 + 8) piercing damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +14 to hit, reach 5 ft., one target. <em>Hit:</em> 15 (2d6 + 8) slashing damage. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +14 to hit, reach 15 ft., one target. <em>Hit:</em> 17 (2d8 + 8) bludgeoning damage. </p><p><em><strong>Frightful Presence.</strong></em> Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours. </p><p><em><strong>Breath Weapons (Recharge 5\u20136).</strong></em> The dragon uses one of the following breath weapons. </p><p><em><strong>Fire Breath.</strong></em> The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 66 (12d10) fire damage on a failed save, or half as much damage on a successful one. </p><p><em><strong>Weakening Breath.</strong></em> The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 21 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. </p><p><em><strong>Change Shape.</strong></em> The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice). </p><p>In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.</p><h3> LEGENDARY ACTIONS </h3><p>The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn. </p><p><em><strong>Detect.</strong></em> The dragon makes a Wisdom (Perception) check. </p><p><em><strong>Tail Attack.</strong></em> The dragon makes a tail attack. </p><p><em><strong>Wing Attack (Costs 2 Actions).</strong></em> The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/24/1000/1000/636238958915127190.jpeg",
        id: 7
    },
    {
        slug: "adult_green_dragon",
        name: "Adult Green Dragon",
        type: "huge dragon",
        alignment: "lawful evil",
        ac: "19 (natural armor)",
        hp: {
            default: 207,
            rng: [
                18,
                12,
                90
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                23,
                6
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                21,
                5
            ],
            INT: [
                18,
                4
            ],
            WIS: [
                15,
                2
            ],
            CHA: [
                17,
                3
            ]
        },
        saving_throws: [
            "DEX +6",
            "CON +10",
            "WIS +7",
            "CHA +8"
        ],
        skills: [
            "deception +8",
            "insight +7",
            "perception +12",
            "persuasion +8",
            "stealth +6"
        ],
        senses: [
            "blindsight 60 ft.",
            "darkvision 120 ft.",
            " passive perception 22"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "15",
        xp: 13000,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The dragon can breathe air and water. </p><p><em><strong>Legendary Resistance (3/Day).</strong></em> If the dragon fails a saving throw, it can choose to succeed instead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon can use its Frightful Presence. It then makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 10 ft., one target. <em>Hit:</em> 17 (2d10 + 6) piercing damage plus 7 (2d6) poison damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d6 + 6) slashing damage. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 15 ft., one target. <em>Hit:</em> 15 (2d8 + 6) bludgeoning damage. </p><p><em><strong>Frightful Presence.</strong></em> Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours. </p><p><em><strong>Poison Breath (Recharge 5\u20136).</strong></em> The dragon exhales poisonous gas in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 56 (16d6) poison damage on a failed save, or half as much damage on a successful one.</p><h3> LEGENDARY ACTIONS </h3><p>The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn. </p><p><em><strong>Detect.</strong></em> The dragon makes a Wisdom (Perception) check. </p><p><em><strong>Tail Attack.</strong></em> The dragon makes a tail attack. </p><p><em><strong>Wing Attack (Costs 2 Actions).</strong></em> The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/26/1000/1000/636238962276510242.jpeg",
        id: 8
    },
    {
        slug: "adult_red_dragon",
        name: "Adult Red Dragon",
        type: "huge dragon",
        alignment: "chaotic evil",
        ac: "19 (natural armor)",
        hp: {
            default: 256,
            rng: [
                19,
                12,
                133
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                27,
                8
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                25,
                7
            ],
            INT: [
                16,
                3
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                21,
                5
            ]
        },
        saving_throws: [
            "DEX +6",
            "CON +13",
            "WIS +7",
            "CHA +11"
        ],
        skills: [
            "perception +13",
            "stealth +6"
        ],
        senses: [
            "blindsight 60 ft.",
            "darkvision 120 ft.",
            " passive perception 23"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "17",
        xp: 18000,
        traits_html: "<h3> Traits </h3><p><em><strong>Legendary Resistance (3/Day).</strong></em> If the dragon fails a saving throw, it can choose to succeed instead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon can use its Frightful Presence. It then makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +14 to hit, reach 10 ft., one target. <em>Hit:</em> 19 (2d10 + 8) piercing damage plus 7 (2d6) fire damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +14 to hit, reach 5 ft., one target. <em>Hit:</em> 15 (2d6 + 8) slashing damage. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +14 to hit, reach 15 ft., one target. <em>Hit:</em> 17 (2d8 + 8) bludgeoning damage. </p><p><em><strong>Frightful Presence.</strong></em> Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours. </p><p><em><strong>Fire Breath (Recharge 5\u20136).</strong></em> The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 63 (18d6) fire damage on a failed save, or half as much damage on a successful one.</p><h3> LEGENDARY ACTIONS </h3><p>The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn. </p><p><em><strong>Detect.</strong></em> The dragon makes a Wisdom (Perception) check. </p><p><em><strong>Tail Attack.</strong></em> The dragon makes a tail attack. </p><p><em><strong>Wing Attack (Costs 2 Actions).</strong></em> The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/28/1000/1000/636238971817119794.jpeg",
        id: 9
    },
    {
        slug: "adult_silver_dragon",
        name: "Adult Silver Dragon",
        type: "huge dragon",
        alignment: "lawful good",
        ac: "19 (natural armor)",
        hp: {
            default: 243,
            rng: [
                18,
                12,
                126
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                27,
                8
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                25,
                7
            ],
            INT: [
                16,
                3
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                21,
                5
            ]
        },
        saving_throws: [
            "DEX +5",
            "CON +12",
            "WIS +6",
            "CHA +10"
        ],
        skills: [
            "arcana +8",
            "history +8",
            "perception +11",
            "stealth +5"
        ],
        senses: [
            "blindsight 60 ft.",
            "darkvision 120 ft.",
            " passive perception 21"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "16",
        xp: 15000,
        traits_html: "<h3> Traits </h3><p><em><strong>Legendary Resistance (3/Day).</strong></em> If the dragon fails a saving throw, it can choose to succeed instead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon can use its Frightful Presence. It then makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +13 to hit, reach 10 ft., one target. <em>Hit:</em> 19 (2d10 + 8) piercing damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +13 to hit, reach 5 ft., one target. <em>Hit:</em> 15 (2d6 + 8) slashing damage. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +13 to hit, reach 15 ft., one target. <em>Hit:</em> 17 (2d8 + 8) bludgeoning damage. </p><p><em><strong>Frightful Presence.</strong></em> Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours. </p><p><em><strong>Breath Weapons (Recharge 5\u20136).</strong></em> The dragon uses one of the following breath weapons. </p><p><em><strong>Cold Breath.</strong></em> The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 20 Constitution saving throw, taking 58 (13d8) cold damage on a failed save, or half as much damage on a successful one. </p><p><em><strong>Paralyzing Breath.</strong></em> The dragon exhales paralyzing gas in a 60-foot cone. Each creature in that area must succeed on a DC 20 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. </p><p><em><strong>Change Shape.</strong></em> The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice). </p><p>In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.</p><h3> LEGENDARY ACTIONS </h3><p>The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn. </p><p><em><strong>Detect.</strong></em> The dragon makes a Wisdom (Perception) check. </p><p><em><strong>Tail Attack.</strong></em> The dragon makes a tail attack. </p><p><em><strong>Wing Attack (Costs 2 Actions).</strong></em> The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 21 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/123/1000/1000/636252753945133025.jpeg",
        id: 10
    },
    {
        slug: "adult_white_dragon",
        name: "Adult White Dragon",
        type: "huge dragon",
        alignment: "chaotic evil",
        ac: "18 (natural armor)",
        hp: {
            default: 200,
            rng: [
                16,
                12,
                96
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                22,
                6
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                22,
                6
            ],
            INT: [
                8,
                -1
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                12,
                1
            ]
        },
        saving_throws: [
            "DEX +5",
            "CON +11",
            "WIS +6",
            "CHA +6"
        ],
        skills: [
            "perception +11",
            "stealth +5"
        ],
        senses: [
            "blindsight 60 ft.",
            "darkvision 120 ft.",
            " passive perception 21"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "13",
        xp: 10000,
        traits_html: "<h3> Traits </h3><p><em><strong>Ice Walk.</strong></em> The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement. </p><p><em><strong>Legendary Resistance (3/Day).</strong></em> If the dragon fails a saving throw, it can choose to succeed instead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon can use its Frightful Presence. It then makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 10 ft., one target. <em>Hit:</em> 17 (2d10 + 6) piercing damage plus 4 (1d8) cold damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d6 + 6) slashing damage. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 15 ft., one target. <em>Hit:</em> 15 (2d8 + 6) bludgeoning damage. </p><p><em><strong>Frightful Presence.</strong></em> Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours. </p><p><em><strong>Cold Breath (Recharge 5\u20136).</strong></em> The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one.</p><h3> LEGENDARY ACTIONS </h3><p>The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn. </p><p><em><strong>Detect.</strong></em> The dragon makes a Wisdom (Perception) check. </p><p><em><strong>Tail Attack.</strong></em> The dragon makes a tail attack. </p><p><em><strong>Wing Attack (Costs 2 Actions).</strong></em> The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/125/1000/1000/636252755468117001.jpeg",
        id: 11
    },
    {
        slug: "air_elemental",
        name: "Air Elemental",
        type: "large elemental",
        alignment: "neutral",
        ac: "15",
        hp: {
            default: 90,
            rng: [
                12,
                10,
                24
            ]
        },
        speed: {
            base: 0,
            unit: "ft."
        },
        stats: {
            STR: [
                14,
                2
            ],
            DEX: [
                20,
                5
            ],
            CON: [
                14,
                2
            ],
            INT: [
                6,
                -2
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            "auran"
        ],
        challenge_lvl: "5",
        xp: 1800,
        traits_html: "<h3> Traits </h3><p><em><strong>Air Form.</strong></em> The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The elemental makes two slam attacks. </p><p><em><strong>Slam.</strong></em> <em>Melee Weapon Attack:</em> +8 to hit, reach 5 ft., one target. <em>Hit:</em> 14 (2d8 + 5) bludgeoning damage. </p><p><em><strong>Whirlwind (Recharge 4\u20136).</strong></em> Each creature in the elemental's space must make a DC 13 Strength saving throw. On a failure, a target takes 15 (3d8 + 2) bludgeoning damage and is flung up 20 feet away from the elemental in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 13 Dexterity saving throw or take the same damage and be knocked prone. </p><p>If the saving throw is successful, the target takes half the bludgeoning damage and isn't flung away or knocked prone.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/127/1000/1000/636252755648556800.jpeg",
        id: 12
    },
    {
        slug: "allosaurus",
        name: "Allosaurus",
        type: "large beast",
        alignment: "unaligned",
        ac: "13 natural armor",
        hp: {
            default: 51,
            rng: [
                6,
                10,
                18
            ]
        },
        speed: {
            base: 60,
            unit: "ft."
        },
        stats: {
            STR: [
                19,
                4
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                17,
                3
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +5"
        ],
        senses: [
            "passive perception 15"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p> <em><strong>Pounce.</strong></em> If the allosaurus moves at least 30 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the allosaurus can make one bite attack against it as a bonus action.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 15 (2d10 + 4) piercing damage.</p><p><em><strong>Claw. </strong></em><em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 8 (1d8 + 4) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 13
    },
    {
        slug: "ancient_black_dragon",
        name: "Ancient Black Dragon",
        type: "gargantuan dragon",
        alignment: "chaotic evil",
        ac: "22 (natural armor)",
        hp: {
            default: 367,
            rng: [
                21,
                20,
                147
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                27,
                8
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                25,
                7
            ],
            INT: [
                16,
                3
            ],
            WIS: [
                15,
                2
            ],
            CHA: [
                19,
                4
            ]
        },
        saving_throws: [
            "DEX +9",
            "CON +14",
            "WIS +9",
            "CHA +11"
        ],
        skills: [
            "perception +16",
            "stealth +9"
        ],
        senses: [
            "blindsight 60 ft.",
            "darkvision 120 ft.",
            " passive perception 26"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "21",
        xp: 33000,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The dragon can breathe air and water.</p><p><em><strong>Legendary Resistance (3/Day).</strong></em> If the dragon fails a saving throw, it can choose to succeed instead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon can use its Frightful Presence. It then makes threeattack: one with its bite and two with its claws.</p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +15 to hit, reach 15 ft., one target. <em>Hit:</em> 19 (2d10 + 8) piercing damage plus 9 (2d8) acid damage.</p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +15 to hit, reach 10 ft., one target. <em>Hit:</em> 15 (2d6 + 8) slashing damage.</p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +15 to hit, reach 20 ft., one target. <em>Hit:</em> 17 (2d8 + 8) bludgeoning damage.</p><p><em><strong>Frightful Presence.</strong></em> Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p><p><em><strong>Acid Breath (Recharge 5\u20136).</strong></em> The dragon exhales acid in a 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 67 (15d8) acid damage on a failed save, or half as much damage on a successful one.</p><h3> LEGENDARY ACTIONS </h3><p>The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn.</p><p><em><strong>Detect.</strong></em> The dragon makes a Wisdom (Perception) check.</p><p><em><strong>Tail Attack.</strong></em> The dragon makes a tail attack.</p><p><em><strong>Wing Attack (Costs 2 Actions).</strong></em> The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/129/315/315/636252755854649337.jpeg",
        id: 14
    },
    {
        slug: "ancient_blue_dragon",
        name: "Ancient Blue Dragon",
        type: "gargantuan dragon",
        alignment: "lawful evil",
        ac: "22 (natural armor)",
        hp: {
            default: 481,
            rng: [
                26,
                20,
                208
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                29,
                9
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                27,
                8
            ],
            INT: [
                18,
                4
            ],
            WIS: [
                17,
                3
            ],
            CHA: [
                21,
                5
            ]
        },
        saving_throws: [
            "DEX +7",
            "CON +15",
            "WIS +10",
            "CHA +12"
        ],
        skills: [
            "perception +17",
            "stealth +7"
        ],
        senses: [
            "blindsight 60 ft.",
            "darkvision 120 ft.",
            " passive perception 27"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "23",
        xp: 50000,
        traits_html: "<h3> Traits </h3><p><em><strong>Legendary Resistance (3/Day).</strong></em> If the dragon fails a saving throw, it can choose to succeed instead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon can use its Frightful Presence. It then makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +16 to hit, reach 15 ft., one target. <em>Hit:</em> 20 (2d10 + 9) piercing damage plus 11 (2d10) lightning damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +16 to hit, reach 10 ft., one target. <em>Hit:</em> 16 (2d6 + 9) slashing damage. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +16 to hit, reach 20 ft., one target. <em>Hit:</em> 18 (2d8 + 9) bludgeoning damage. </p><p><em><strong>Frightful Presence.</strong></em> Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours. </p><p><em><strong>Lightning Breath (Recharge 5\u20136).</strong></em> The dragon exhales lightning in a 120-\u00ad-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one.</p><h3> LEGENDARY ACTIONS </h3><p>The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn. </p><p><em><strong>Detect.</strong></em> The dragon makes a Wisdom (Perception) check. </p><p><em><strong>Tail Attack.</strong></em> The dragon makes a tail attack. </p><p><em><strong>Wing Attack (Costs 2 Actions).</strong></em> The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/131/1000/1000/636252756020185006.jpeg",
        id: 15
    },
    {
        slug: "ancient_brass_dragon",
        name: "Ancient Brass Dragon",
        type: "gargantuan dragon",
        alignment: "chaotic good",
        ac: "20 (natural armor)",
        hp: {
            default: 297,
            rng: [
                17,
                20,
                119
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                27,
                8
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                25,
                7
            ],
            INT: [
                16,
                3
            ],
            WIS: [
                15,
                2
            ],
            CHA: [
                19,
                4
            ]
        },
        saving_throws: [
            "DEX +6",
            "CON +13",
            "WIS +8",
            "CHA +10"
        ],
        skills: [
            "history +9",
            "perception +14",
            "persuasion +10",
            "stealth +6"
        ],
        senses: [
            "blindsight 60 ft.",
            "darkvision 120 ft.",
            " passive perception 24"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "20",
        xp: 25000,
        traits_html: "<h3> Traits </h3><p><em><strong>Legendary Resistance (3/Day).</strong></em> If the dragon fails a saving throw, it can choose to succeed instead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon can use its Frightful Presence. It then makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +14 to hit, reach 15 ft., one target. <em>Hit:</em> 19 (2d10 + 8) piercing damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +14 to hit, reach 10 ft., one target. <em>Hit:</em> 15 (2d6 + 8) slashing damage. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +14 to hit, reach 20 ft., one target. <em>Hit:</em> 17 (2d8 + 8) bludgeoning damage. </p><p><em><strong>Frightful Presence.</strong></em> Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours. </p><p><em><strong>Breath Weapons (Recharge 5\u20136).</strong></em> The dragon uses one of the following breathweapon: </p><p><em><strong>Fire Breath.</strong></em> The dragon exhales fire in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 21 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one. </p><p><em><strong>Sleep Breath.</strong></em> The dragon exhales sleep gas in a 90-foot cone. Each creature in that area must succeed on a DC 21 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it. </p><p><em><strong>Change Shape.</strong></em> The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice). </p><p>In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.</p><h3> LEGENDARY ACTIONS </h3><p>The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn. </p><p><em><strong>Detect.</strong></em> The dragon makes a Wisdom (Perception) check. </p><p><em><strong>Tail Attack.</strong></em> The dragon makes a tail attack. </p><p><em><strong>Wing Attack (Costs 2 Actions).</strong></em> The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/133/1000/1000/636252756157427258.jpeg",
        id: 16
    },
    {
        slug: "ancient_bronze_dragon",
        name: "Ancient Bronze Dragon",
        type: "gargantuan dragon",
        alignment: "lawful good",
        ac: "22 (natural armor)",
        hp: {
            default: 444,
            rng: [
                24,
                20,
                192
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                29,
                9
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                27,
                8
            ],
            INT: [
                18,
                4
            ],
            WIS: [
                17,
                3
            ],
            CHA: [
                21,
                5
            ]
        },
        saving_throws: [
            "DEX +7",
            "CON +15",
            "WIS +10",
            "CHA +12"
        ],
        skills: [
            "insight +10",
            "perception +17",
            "stealth +7"
        ],
        senses: [
            "blindsight 60 ft.",
            "darkvision 120 ft.",
            " passive perception 27"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "22",
        xp: 41000,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The dragon can breathe air and water.</p><p><em><strong>Legendary Resistance (3/Day).</strong></em> If the dragon fails a saving throw, it can choose to succeed instead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon can use its Frightful Presence. It then makes threeattack: one with its bite and two with its claws.</p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +16 to hit, reach 15 ft., one target. <em>Hit:</em> 20 (2d10 + 9) piercing damage.</p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +16 to hit, reach 10 ft., one target. <em>Hit:</em> 16 (2d6 + 9) slashing damage.</p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +16 to hit, reach 20 ft., one target. <em>Hit:</em> 18 (2d8 + 9) bludgeoning damage.</p><p><em><strong>Frightful Presence.</strong></em> Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p><p><em><strong>Breath Weapons (Recharge 5\u20136).</strong></em> The dragon uses one of the following breath weapons.</p><p><em><strong>Lightning Breath.</strong></em> The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one.</p><p><em><strong>Repulsion Breath.</strong></em> The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 23 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon.</p><p><em><strong>Change Shape.</strong></em> The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).</p><p>In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.</p><h3> LEGENDARY ACTIONS </h3><p>The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn.</p><p><em><strong>Detect.</strong></em> The dragon makes a Wisdom (Perception) check.</p><p><em><strong>Tail Attack.</strong></em> The dragon makes a tail attack.</p><p><em><strong>Wing Attack (Costs 2 Actions).</strong></em> The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/135/315/315/636252756372367681.jpeg",
        id: 17
    },
    {
        slug: "ancient_copper_dragon",
        name: "Ancient Copper Dragon",
        type: "gargantuan dragon",
        alignment: "chaotic good",
        ac: "21 (natural armor)",
        hp: {
            default: 350,
            rng: [
                20,
                20,
                140
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                27,
                8
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                25,
                7
            ],
            INT: [
                20,
                5
            ],
            WIS: [
                17,
                3
            ],
            CHA: [
                19,
                4
            ]
        },
        saving_throws: [
            "DEX +8",
            "CON +14",
            "WIS +10",
            "CHA +11"
        ],
        skills: [
            "deception +11",
            "perception +17",
            "stealth +8"
        ],
        senses: [
            "blindsight 60 ft.",
            "darkvision 120 ft.",
            " passive perception 27"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "21",
        xp: 33000,
        traits_html: "<h3> Traits </h3><p><em><strong>Legendary Resistance (3/Day).</strong></em> If the dragon fails a saving throw, it can choose to succeed instead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon can use its Frightful Presence. It then makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +15 to hit, reach 15 ft., one target. <em>Hit:</em> 19 (2d10 + 8) piercing damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +15 to hit, reach 10 ft., one target. <em>Hit:</em> 15 (2d6 + 8) slashing damage. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +15 to hit, reach 20 ft., one target. <em>Hit:</em> 17 (2d8 + 8) bludgeoning damage. </p><p><em><strong>Frightful Presence.</strong></em> Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours. </p><p><em><strong>Breath Weapons (Recharge 5\u20136).</strong></em> The dragon uses one of the following breath weapons. </p><p><em><strong>Acid Breath.</strong></em> The dragon exhales acid in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 63 (14d8) acid damage on a failed save, or half as much damage on a successful one. </p><p><em><strong>Slowing Breath.</strong></em> The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 22 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save. </p><p><em><strong>Change Shape.</strong></em> The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice). </p><p>In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.</p><h3> LEGENDARY ACTIONS </h3><p>The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn. </p><p><em><strong>Detect.</strong></em> The dragon makes a Wisdom (Perception) check. </p><p><em><strong>Tail Attack.</strong></em> The dragon makes a tail attack. </p><p><em><strong>Wing Attack (Costs 2 Actions).</strong></em> The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/137/1000/1000/636252756714896878.jpeg",
        id: 18
    },
    {
        slug: "ancient_gold_dragon",
        name: "Ancient Gold Dragon",
        type: "gargantuan dragon",
        alignment: "lawful good",
        ac: "22 (natural armor)",
        hp: {
            default: 546,
            rng: [
                28,
                20,
                252
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                30,
                10
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                29,
                9
            ],
            INT: [
                18,
                4
            ],
            WIS: [
                17,
                3
            ],
            CHA: [
                28,
                9
            ]
        },
        saving_throws: [
            "DEX +9",
            "CON +16",
            "WIS +10",
            "CHA +16"
        ],
        skills: [
            "insight +10",
            "perception +17",
            "persuasion +16",
            "stealth +9"
        ],
        senses: [
            "blindsight 60 ft.",
            "darkvision 120 ft.",
            " passive perception 27"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "24",
        xp: 62000,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The dragon can breathe air and water. </p><p><em><strong>Legendary Resistance (3/Day).</strong></em> If the dragon fails a saving throw, it can choose to succeed instead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon can use its Frightful Presence. It then makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +17 to hit, reach 15 ft., one target. <em>Hit:</em> 21 (2d10 + 10) piercing damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +17 to hit, reach 10 ft., one target. <em>Hit:</em> 17 (2d6 + 10) slashing damage. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +17 to hit, reach 20 ft., one target. <em>Hit:</em> 19 (2d8 + 10) bludgeoning damage. </p><p><em><strong>Frightful Presence.</strong></em> Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 24 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours. </p><p><em><strong>Breath Weapons (Recharge 5\u20136).</strong></em> The dragon uses one of the following breath weapons. </p><p><em><strong>Fire Breath.</strong></em> The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 71 (13d10) fire damage on a failed save, or half as much damage on a successful one. </p><p><em><strong>Weakening Breath.</strong></em> The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 24 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. </p><p><em><strong>Change Shape.</strong></em> The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice). </p><p>In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.</p><h3> LEGENDARY ACTIONS </h3><p>The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn. </p><p><em><strong>Detect.</strong></em> The dragon makes a Wisdom (Perception) check. </p><p><em><strong>Tail Attack.</strong></em> The dragon makes a tail attack. </p><p><em><strong>Wing Attack (Costs 2 Actions).</strong></em> The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/139/315/315/636252756930565101.jpeg",
        id: 19
    },
    {
        slug: "ancient_green_dragon",
        name: "Ancient Green Dragon",
        type: "gargantuan dragon",
        alignment: "lawful evil",
        ac: "21 (natural armor)",
        hp: {
            default: 385,
            rng: [
                22,
                20,
                154
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                27,
                8
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                25,
                7
            ],
            INT: [
                20,
                5
            ],
            WIS: [
                17,
                3
            ],
            CHA: [
                19,
                4
            ]
        },
        saving_throws: [
            "DEX +8",
            "CON +14",
            "WIS +10",
            "CHA +11"
        ],
        skills: [
            "deception +11",
            "insight +10",
            "perception +17",
            "persuasion +11",
            "stealth +8"
        ],
        senses: [
            "blindsight 60 ft.",
            "darkvision 120 ft.",
            " passive perception 27"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "22",
        xp: 41000,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The dragon can breathe air and water. </p><p><em><strong>Legendary Resistance (3/Day).</strong></em> If the dragon fails a saving throw, it can choose to succeed instead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon can use its Frightful Presence. It then makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +15 to hit, reach 15 ft., one target. <em>Hit:</em> 19 (2d10 + 8) piercing damage plus 10 (3d6) poison damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +15 to hit, reach 10 ft., one target. <em>Hit:</em> 22 (4d6 + 8) slashing damage. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +15 to hit, reach 20 ft., one target. <em>Hit:</em> 17 (2d8 + 8) bludgeoning damage. </p><p><em><strong>Frightful Presence.</strong></em> Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours. </p><p><em><strong>Poison Breath (Recharge 5\u20136).</strong></em> The dragon exhales poisonous gas in a 90-\u00ad-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 77 (22d6) poison damage on a failed save, or half as much damage on a successful one.</p><h3> LEGENDARY ACTIONS </h3><p>The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn. </p><p><em><strong>Detect.</strong></em> The dragon makes a Wisdom (Perception) check. </p><p><em><strong>Tail Attack.</strong></em> The dragon makes a tail attack. </p><p><em><strong>Wing Attack (Costs 2 Actions).</strong></em> The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/141/1000/1000/636252757319464533.jpeg",
        id: 20
    },
    {
        slug: "ancient_red_dragon",
        name: "Ancient Red Dragon",
        type: "gargantuan dragon",
        alignment: "chaotic evil",
        ac: "22 (natural armor)",
        hp: {
            default: 546,
            rng: [
                28,
                20,
                252
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                30,
                10
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                29,
                9
            ],
            INT: [
                18,
                4
            ],
            WIS: [
                15,
                2
            ],
            CHA: [
                23,
                6
            ]
        },
        saving_throws: [
            "DEX +7",
            "CON +16",
            "WIS +9",
            "CHA +13"
        ],
        skills: [
            "perception +16",
            "stealth +7"
        ],
        senses: [
            "blindsight 60 ft.",
            "darkvision 120 ft.",
            " passive perception 26"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "24",
        xp: 62000,
        traits_html: "<h3> Traits </h3><p><em><strong>Legendary Resistance (3/Day).</strong></em> If the dragon fails a saving throw, it can choose to succeed instead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon can use its Frightful Presence. It then makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +17 to hit, reach 15 ft., one target. <em>Hit:</em> 21 (2d10 + 10) piercing damage plus 14 (4d6) fire damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +17 to hit, reach 10 ft., one target. <em>Hit:</em> 17 (2d6 + 10) slashing damage. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +17 to hit, reach 20 ft., one target. <em>Hit:</em> 19 (2d8 + 10) bludgeoning damage. </p><p><em><strong>Frightful Presence.</strong></em> Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours. </p><p><em><strong>Fire Breath (Recharge 5\u20136).</strong></em> The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 91 (26d6) fire damage on a failed save, or half as much damage on a successful one.</p><h3> LEGENDARY ACTIONS </h3><p>The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn. </p><p><em><strong>Detect.</strong></em> The dragon makes a Wisdom (Perception) check. </p><p><em><strong>Tail Attack.</strong></em> The dragon makes a tail attack. </p><p><em><strong>Wing Attack (Costs 2 Actions).</strong></em> The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/147/1000/1000/636252758629652181.jpeg",
        id: 21
    },
    {
        slug: "ancient_silver_dragon",
        name: "Ancient Silver Dragon",
        type: "gargantuan dragon",
        alignment: "lawful good",
        ac: "22 (natural armor)",
        hp: {
            default: 487,
            rng: [
                25,
                20,
                225
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                30,
                10
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                29,
                9
            ],
            INT: [
                18,
                4
            ],
            WIS: [
                15,
                2
            ],
            CHA: [
                23,
                6
            ]
        },
        saving_throws: [
            "DEX +7",
            "CON +16",
            "WIS +9",
            "CHA +13"
        ],
        skills: [
            "arcana +11",
            "history +11",
            "perception +16",
            "stealth +7"
        ],
        senses: [
            "blindsight 60 ft.",
            "darkvision 120 ft.",
            " passive perception 26"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "23",
        xp: 50000,
        traits_html: "<h3> Traits </h3><p><em><strong>Legendary Resistance (3/Day).</strong></em> If the dragon fails a saving throw, it can choose to succeed instead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon can use its Frightful Presence. It then makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +17 to hit, reach 15 ft., one target. <em>Hit:</em> 21 (2d10 + 10) piercing damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +17 to hit, reach 10 ft., one target. <em>Hit:</em> 17 (2d6 + 10) slashing damage. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +17 to hit, reach 20 ft., one target. <em>Hit:</em> 19 (2d8 + 10) bludgeoning damage. </p><p><em><strong>Frightful Presence.</strong></em> Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours. </p><p><em><strong>Breath Weapons (Recharge 5\u20136).</strong></em> The dragon uses one of the following breath weapons. </p><p><em><strong>Cold Breath.</strong></em> The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 24 Constitution saving throw, taking 67 (15d8) cold damage on a failed save, or half as much damage on a successful one. </p><p><em><strong>Paralyzing Breath.</strong></em> The dragon exhales paralyzing gas in a 90-foot cone. Each creature in that area must succeed on a DC 24 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. </p><p><em><strong>Change Shape.</strong></em> The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice). </p><p>In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.</p><h3> LEGENDARY ACTIONS </h3><p>The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn. </p><p><em><strong>Detect.</strong></em> The dragon makes a Wisdom (Perception) check. </p><p><em><strong>Tail Attack.</strong></em> The dragon makes a tail attack. </p><p><em><strong>Wing Attack (Costs 2 Actions).</strong></em> The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/151/1000/1000/636252758799225927.jpeg",
        id: 22
    },
    {
        slug: "ancient_white_dragon",
        name: "Ancient White Dragon",
        type: "gargantuan dragon",
        alignment: "chaotic evil",
        ac: "20 (natural armor)",
        hp: {
            default: 333,
            rng: [
                18,
                20,
                144
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                26,
                8
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                26,
                8
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                14,
                2
            ]
        },
        saving_throws: [
            "DEX +6",
            "CON +14",
            "WIS +7",
            "CHA +8"
        ],
        skills: [
            "perception +13",
            "stealth +6"
        ],
        senses: [
            "blindsight 60 ft.",
            "darkvision 120 ft.",
            " passive perception 23"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "20",
        xp: 25000,
        traits_html: "<h3> Traits </h3><p><em><strong>Ice Walk.</strong></em> The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement. </p><p><em><strong>Legendary Resistance (3/Day).</strong></em> If the dragon fails a saving throw, it can choose to succeed instead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon can use its Frightful Presence. It then makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +14 to hit, reach 15 ft., one target. <em>Hit:</em> 19 (2d10 + 8) piercing damage plus 9 (2d8) cold damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +14 to hit, reach 10 ft., one target. <em>Hit:</em> 15 (2d6 + 8) slashing damage. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +14 to hit, reach 20 ft., one target. <em>Hit:</em> 17 (2d8 + 8) bludgeoning damage. </p><p><em><strong>Frightful Presence.</strong></em> Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours. </p><p><em><strong>Cold Breath (Recharge 5\u20136).</strong></em> The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 72 (16d8) cold damage on a failed save, or half as much damage on a successful one.</p><h3> LEGENDARY ACTIONS </h3><p>The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn. </p><p><em><strong>Detect.</strong></em> The dragon makes a Wisdom (Perception) check. </p><p><em><strong>Tail Attack.</strong></em> The dragon makes a tail attack. </p><p><em><strong>Wing Attack (Costs 2 Actions).</strong></em> The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/153/1000/1000/636252758955886210.jpeg",
        id: 23
    },
    {
        slug: "androsphinx",
        name: "Androsphinx",
        type: "large monstrosity",
        alignment: "lawful neutral",
        ac: "17 (natural armor)",
        hp: {
            default: 199,
            rng: [
                19,
                10,
                95
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                22,
                6
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                20,
                5
            ],
            INT: [
                16,
                3
            ],
            WIS: [
                18,
                4
            ],
            CHA: [
                23,
                6
            ]
        },
        saving_throws: [
            "DEX +6",
            "CON +11",
            "INT +9",
            "WIS +10"
        ],
        skills: [
            "arcana +9",
            "perception +10",
            "religion +15"
        ],
        senses: [
            "truesight 120 ft.",
            " passive perception 20"
        ],
        languages: [
            "common",
            "sphinx"
        ],
        challenge_lvl: "17",
        xp: 18000,
        traits_html: "<h3> Traits </h3><p><em><strong>Inscrutable.</strong></em> The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage. </p><p><em><strong>Magic Weapons.</strong></em> The sphinx's weapon attacks are magical. </p><p><em><strong>Spellcasting.</strong></em> The sphinx is a 12th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 18, +10 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following cleric spellsprepare: </p><p>Cantrips (atwill: sacred flame, spare the dying, thaumaturgy </p><p>1st level (4slots: command, detect evil and good, detect magic </p><p>2nd level (3slots: lesser restoration, zone of truth </p><p>3rd level (3slots: dispel magic, tongues </p><p>4th level (3slots: banishment, freedom of movement </p><p>5th level (2slots: flame strike, greater restoration </p><p>6th level (1slot: heroes' feast</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The sphinx makes two claw attacks. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +12 to hit, reach 5 ft., one target. <em>Hit:</em> 17 (2d10 + 6) slashing damage. </p><p><em><strong>Roar (3/Day).</strong></em> The sphinx emits a magical roar. Each time it roars before finishing a long rest, the roar is louder and the effect is different, as detailed below. Each creature within 500 feet of the sphinx and able to hear the roar must make a saving throw. </p><p><em><strong>First Roar.</strong></em> Each creature that fails a DC 18 Wisdom saving throw is frightened for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. </p><p><em><strong>Second Roar.</strong></em> Each creature that fails a DC 18 Wisdom saving throw is deafened and frightened for 1 minute. A frightened creature is paralyzed and can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. </p><p><em><strong>Third Roar.</strong></em> Each creature makes a DC 18 Constitution saving throw. On a failed save, a creature takes 44 (8d10) thunder damage and is knocked prone. On a successful save, the creature takes half as much damage and isn't knocked prone.</p><h3> LEGENDARY ACTIONS </h3><p>The sphinx can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The sphinx regains spent legendary actions at the start of its turn. </p><p><em><strong>Claw Attack.</strong></em> The sphinx makes one claw attack. </p><p><em><strong>Teleport (Costs 2 Actions).</strong></em> The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see. </p><p><em><strong>Cast a Spell (Costs 3 Actions).</strong></em> The sphinx casts a spell from its list of prepared spells, using a spell slot as normal.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/157/1000/1000/636252759145617281.jpeg",
        id: 24
    },
    {
        slug: "animated_armor",
        name: "Animated Armor",
        type: "medium construct",
        alignment: "unaligned",
        ac: "18 (natural armor)",
        hp: {
            default: 33,
            rng: [
                6,
                8,
                6
            ]
        },
        speed: {
            base: 25,
            unit: "ft."
        },
        stats: {
            STR: [
                14,
                2
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                13,
                1
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                3,
                -4
            ],
            CHA: [
                1,
                -5
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "blindsight 60 ft.",
            " passive perception 6"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "1",
        xp: 200,
        traits_html: "<h3> Traits </h3><p><em><strong>Antimagic Susceptibility.</strong></em> The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute. </p><p><em><strong>False Appearance.</strong></em> While the armor remains motionless, it is indistinguishable from a normal suit of armor.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The armor makes two melee attacks. </p><p><em><strong>Slam.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d6 + 2) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/429/1000/1000/636306156895834255.jpeg",
        id: 25
    },
    {
        slug: "ankheg",
        name: "Ankheg",
        type: "large monstrosity",
        alignment: "unaligned",
        ac: "14 (natural armor), 11 while prone",
        hp: {
            default: 39,
            rng: [
                6,
                10,
                6
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                17,
                3
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                13,
                1
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            "tremorsense 60 ft.",
            " passive perception 11"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 10 (2d6 + 3) slashing damage plus 3 (1d6) acid damage. If the target is a Large or smaller creature, it is grappled (escape DC 13). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so. </p><p><em><strong>Acid Spray (Recharge 6).</strong></em> The ankheg spits acid in a line that is 30 feet long and 5 feet wide, provided that it has no creature grappled. Each creature in that line must make a DC 13 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/161/315/315/636252759871983921.jpeg",
        id: 26
    },
    {
        slug: "ankylosaurus",
        name: "Ankylosaurus",
        type: "huge beast",
        alignment: "unaligned",
        ac: "15 natural",
        hp: {
            default: 68,
            rng: [
                8,
                12,
                16
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                19,
                4
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                15,
                2
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 11"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "3",
        xp: 700,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 10 ft., one target. <em>Hit:</em> 18 (4d6 + 4) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 27
    },
    {
        slug: "ape",
        name: "Ape",
        type: "medium beast",
        alignment: "unaligned",
        ac: "12",
        hp: {
            default: 19,
            rng: [
                3,
                8,
                6
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                14,
                2
            ],
            INT: [
                6,
                -2
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "athletics +5",
            "perception +3"
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The ape makes two fist attacks. </p><p><em><strong>Fist.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (1d6 + 3) bludgeoning damage. </p><p><em><strong>Rock.</strong></em> <em>Ranged Weapon Attack:</em> +5 to hit, range 25/50 ft., one target. <em>Hit:</em> 6 (1d6 + 3) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 28
    },
    {
        slug: "archmage",
        name: "Archmage",
        type: "medium humanoid",
        alignment: "any",
        ac: "12 (15 with mage armor)",
        hp: {
            default: 99,
            rng: [
                18,
                8,
                18
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                10,
                0
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                12,
                1
            ],
            INT: [
                20,
                5
            ],
            WIS: [
                15,
                2
            ],
            CHA: [
                16,
                3
            ]
        },
        saving_throws: [
            "INT +9",
            "WIS +6"
        ],
        skills: [
            "arcana +13",
            "history +13"
        ],
        senses: [
            "passive perception 12"
        ],
        languages: [
            "any six languages"
        ],
        challenge_lvl: "12",
        xp: 8400,
        traits_html: "<h3> Traits </h3><p><em><strong>Magic Resistance.</strong></em> The archmage has advantage on saving throws against spells and other magical effects.</p><p><em><strong>Spellcasting.</strong></em> The archmage is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The archmage can cast disguise self and invisibility at will and has the following wizard spells prepared:</p><p>Cantrips (atwill: fire bolt, light, mage hand, prestidigitation, shocking grasp</p><p>1st level (4slots: detect magic, identify, mage armor, magic missile</p><p>2nd level (3slots: detect thoughts, mirror image, misty step</p><p>3rd level (3slots: counterspell, fly, lightning bolt</p><p>4th level (3slots: banishment, fire shield, stoneskin</p><p>5th level (3slots: cone of cold, scrying, wall of force</p><p>6th level (1slot: globe of invulnerability</p><p>7th level (1slot: teleport</p><p>8th level (1slot: mind blank</p><p>9th level (1slot: time stop</p><p>*The archmage casts mind blank, stoneskin and mage armor spells on itself before combat.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Dagger.</strong></em> <em>Melee or <em>Ranged Weapon Attack:</em></em> +6 to hit, reach 5 ft. or range 20/60 ft., one target. <em>Hit:</em> 4 (1d4 + 2) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/167/1000/1000/636252760213195530.jpeg",
        id: 29
    },
    {
        slug: "assassin",
        name: "Assassin",
        type: "medium humanoid",
        alignment: "any",
        ac: "15 (studded leather)",
        hp: {
            default: 78,
            rng: [
                12,
                8,
                24
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                11,
                0
            ],
            DEX: [
                16,
                3
            ],
            CON: [
                14,
                2
            ],
            INT: [
                13,
                1
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                10,
                0
            ]
        },
        saving_throws: [
            "DEX +6",
            "INT +4"
        ],
        skills: [
            "acrobatics +6",
            "deception +3",
            "perception +3",
            "stealth +9"
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            "thieves' cant plus any two languages"
        ],
        challenge_lvl: "8",
        xp: 3900,
        traits_html: "<h3> Traits </h3><p><em><strong>Assassinate.</strong></em> During its first turn, the assassin has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the assassin scores against a surprised creature is a critical hit. </p><p><em><strong>Evasion.</strong></em> If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the saving throw, and only half damage if it fails. </p><p><em><strong>Sneak Attack.</strong></em> Once per turn, the assassin deals an extra 14 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the assassin that isn't incapacitated and the assassin doesn't have disadvantage on the attack roll.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The assassin makes two shortsword attacks. </p><p><em><strong>Shortsword.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (1d6 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one. </p><p><em><strong>Light Crossbow.</strong></em> <em>Ranged Weapon Attack:</em> +6 to hit, range 80/320 ft., one target. <em>Hit:</em> 7 (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/910/315/315/636334293020978804.png",
        id: 30
    },
    {
        slug: "awakened_shrub",
        name: "Awakened Shrub",
        type: "small plant",
        alignment: "unaligned",
        ac: "9",
        hp: {
            default: 10,
            rng: [
                3,
                6,
                0
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                3,
                -4
            ],
            DEX: [
                8,
                -1
            ],
            CON: [
                11,
                0
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 10"
        ],
        languages: [
            "one language known by its creator"
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3><p><em><strong>False Appearance.</strong></em> While the shrub remains motionless, it is indistinguishable from a normal shrub.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Rake.</strong></em> <em>Melee Weapon Attack:</em> +1 to hit, reach 5 ft., one target. <em>Hit:</em> 1 (1d4 \u2212 1) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/659/plant.jpg",
        id: 31
    },
    {
        slug: "awakened_tree",
        name: "Awakened Tree",
        type: "huge plant",
        alignment: "unaligned",
        ac: "13 (natural armor)",
        hp: {
            default: 59,
            rng: [
                7,
                12,
                14
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                19,
                4
            ],
            DEX: [
                6,
                -2
            ],
            CON: [
                15,
                2
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 10"
        ],
        languages: [
            "one language known by its creator"
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>False Appearance.</strong></em> While the tree remains motionless, it is indistinguishable from a normal tree.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Slam.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 10 ft., one target. <em>Hit:</em> 14 (3d6 + 4) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/659/plant.jpg",
        id: 32
    },
    {
        slug: "axe_beak",
        name: "Axe Beak",
        type: "large beast",
        alignment: "unaligned",
        ac: "11",
        hp: {
            default: 19,
            rng: [
                3,
                10,
                3
            ]
        },
        speed: {
            base: 50,
            unit: "ft."
        },
        stats: {
            STR: [
                14,
                2
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                12,
                1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Beak.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (1d8 + 2) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 33
    },
    {
        slug: "azer",
        name: "Azer",
        type: "medium elemental",
        alignment: "lawful neutral",
        ac: "17 (natural armor, shield)",
        hp: {
            default: 39,
            rng: [
                6,
                8,
                12
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                17,
                3
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                15,
                2
            ],
            INT: [
                12,
                1
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                10,
                0
            ]
        },
        saving_throws: [
            "CON +4"
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 11"
        ],
        languages: [
            "ignan"
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Heated Body.</strong></em> A creature that touches the azer or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage. </p><p><em><strong>Heated Weapons.</strong></em> When the azer hits with a metal melee weapon, it deals an extra 3 (1d6) fire damage (included in the attack). </p><p><em><strong>Illumination.</strong></em> The azer sheds bright light in a 10-\u00adfoot radius and dim light for an additional 10 feet.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Warhammer.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d8 + 3) bludgeoning damage, or 8 (1d10 + 3) bludgeoning damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/171/1000/1000/636252761112348397.jpeg",
        id: 34
    },
    {
        slug: "baboon",
        name: "Baboon",
        type: "small beast",
        alignment: "unaligned",
        ac: "12",
        hp: {
            default: 3,
            rng: [
                1,
                6,
                0
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                8,
                -1
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                11,
                0
            ],
            INT: [
                4,
                -3
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 11"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3><p><em><strong>Pack Tactics.</strong></em> The baboon has advantage on an attack roll against a creature if at least one of the baboon's allies is within 5 feet of the creature and the ally isn't incapacitated.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +1 to hit, reach 5 ft., one target. <em>Hit:</em> 1 (1d4 \u2212 1) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 35
    },
    {
        slug: "badger",
        name: "Badger",
        type: "tiny beast",
        alignment: "unaligned",
        ac: "10",
        hp: {
            default: 3,
            rng: [
                1,
                4,
                1
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                4,
                -3
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                12,
                1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 30 ft.",
            " passive perception 11"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Smell.</strong></em> The badger has advantage on Wisdom (Perception) checks that rely on smell.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +2 to hit, reach 5 ft., one target. <em>Hit:</em> 1 piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/528/1000/1000/636376327632236333.jpeg",
        id: 36
    },
    {
        slug: "balor",
        name: "Balor",
        type: "huge fiend",
        alignment: "chaotic evil",
        ac: "19 (natural armor)",
        hp: {
            default: 262,
            rng: [
                21,
                12,
                126
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                26,
                8
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                22,
                6
            ],
            INT: [
                20,
                5
            ],
            WIS: [
                16,
                3
            ],
            CHA: [
                22,
                6
            ]
        },
        saving_throws: [
            "STR +14",
            "CON +12",
            "WIS +9",
            "CHA +12"
        ],
        skills: [
            ""
        ],
        senses: [
            "truesight 120 ft.",
            " passive perception 13"
        ],
        languages: [
            "abyssal",
            "telepathy 120 ft."
        ],
        challenge_lvl: "19",
        xp: 22000,
        traits_html: "<h3> Traits </h3><p><em><strong>Death Throes.</strong></em> When the balor dies, it explodes, and each creature within 30 feet of it must make a DC 20 Dexterity saving throw, taking 70 (20d6) fire damage on a failed save, or half as much damage on a successful one. The explosion ignites flammable objects in that area that aren't being worn or carried, and it destroys the balor's weapons. </p><p><em><strong>Fire Aura.</strong></em> At the start of each of the balor's turns, each creature within 5 feet of it takes 10 (3d6) fire damage, and flammable objects in the aura that aren't being worn or carried ignite. A creature that touches the balor or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage. </p><p><em><strong>Magic Resistance.</strong></em> The balor has advantage on saving throws against spells and other magical effects. </p><p><em><strong>Magic Weapons.</strong></em> The balor's weapon attacks are magical.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The balor makes twoattack: one with its longsword and one with its whip. </p><p><em><strong>Longsword.</strong></em> <em>Melee Weapon Attack:</em> +14 to hit, reach 10 ft., one target. <em>Hit:</em> 21 (3d8 + 8) slashing damage plus 13 (3d8) lightning damage. If the balor scores a critical hit, it rolls damage dice three times, instead of twice. </p><p><em><strong>Whip.</strong></em> <em>Melee Weapon Attack:</em> +14 to hit, reach 30 ft., one target. <em>Hit:</em> 15 (2d6 + 8) slashing damage plus 10 (3d6) fire damage, and the target must succeed on a DC 20 Strength saving throw or be pulled up to 25 feet toward the balor. </p><p><em><strong>Teleport.</strong></em> The balor magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/175/1000/1000/636252761612038117.jpeg",
        id: 37
    },
    {
        slug: "bandit",
        name: "Bandit",
        type: "medium humanoid",
        alignment: "any",
        ac: "12 (leather armor)",
        hp: {
            default: 11,
            rng: [
                2,
                8,
                2
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                11,
                0
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                12,
                1
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                10,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 10"
        ],
        languages: [
            "any one language (usually common)"
        ],
        challenge_lvl: 0.125,
        xp: 25,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Scimitar.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 4 (1d6 + 1) slashing damage. </p><p><em><strong>Light Crossbow.</strong></em> <em>Ranged Weapon Attack:</em> +3 to hit, range 80 ft./320 ft., one target. <em>Hit:</em> 5 (1d8 + 1) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
        id: 38
    },
    {
        slug: "bandit_captain",
        name: "Bandit Captain",
        type: "medium humanoid",
        alignment: "any",
        ac: "15 (studded leather)",
        hp: {
            default: 65,
            rng: [
                10,
                8,
                20
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                15,
                2
            ],
            DEX: [
                16,
                3
            ],
            CON: [
                14,
                2
            ],
            INT: [
                14,
                2
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                14,
                2
            ]
        },
        saving_throws: [
            "STR +4",
            "DEX +5",
            "WIS +2"
        ],
        skills: [
            "athletics +4",
            "deception +4"
        ],
        senses: [
            "passive perception 10"
        ],
        languages: [
            "any two languages"
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The captain makes three meleeattack: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers. </p><p><em><strong>Scimitar.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (1d6 + 3) slashing damage. </p><p><em><strong>Dagger.</strong></em> <em>Melee or <em>Ranged Weapon Attack:</em></em> +5 to hit, reach 5 ft. or range 20/60 ft., one target. <em>Hit:</em> 5 (1d4 + 3) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/181/1000/1000/636252761965117015.jpeg",
        id: 39
    },
    {
        slug: "banshee",
        name: "Banshee",
        type: "medium undead",
        alignment: "chaotic evil",
        ac: "12",
        hp: {
            default: 58,
            rng: [
                13,
                8,
                0
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                1,
                -5
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                10,
                0
            ],
            INT: [
                12,
                1
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                17,
                3
            ]
        },
        saving_throws: [
            "WIS +2",
            "CHA +5"
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            "common",
            "elvish"
        ],
        challenge_lvl: "4",
        xp: 1100,
        traits_html: "<h3> Traits </h3><p><em><strong>Detect Life.</strong></em> The banshee can magically sense the presence of creatures up to 5 miles away that aren\u2019t undead or constructs. She knows the general direction they\u2019re in but not their exact locations.</p><p><em><strong>Incorporeal Movement.</strong></em> The banshee can move through other creatures and objects as if they were difficult terrain. She takes 5 (1d10) force damage if she ends her turn inside an object.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Corrupting Touch.</strong></em> <em>Melee Spell Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 12 (3d6 + 2) necrotic damage.</p><p><em><strong>Horrifying Visage.</strong></em> Each non-undead creature within 60 feet of the banshee that can see her must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, with disadvantage if the banshee is within line of sight, ending the effect on itself on a success. If a target\u2019s saving throw is successful or the effect ends for it, the target is immune to the banshee\u2019s Horrifying Visage for the next 24 hours.</p><p><em><strong>Wail (1/Day).</strong></em> The banshee releases a mournful wail, provided that she isn\u2019t in sunlight. This wail has no effect on constructs and undead. All other creatures within 30 feet of her that can hear her must make a DC 13 Constitution saving throw. On a failure, a creature drops to 0 hit points. On a success, a creature takes 10 (3d6) psychic damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/446/315/315/636306384206418474.jpeg",
        id: 40
    },
    {
        slug: "barbed_devil",
        name: "Barbed Devil",
        type: "medium fiend",
        alignment: "lawful evil",
        ac: "15 (natural armor)",
        hp: {
            default: 110,
            rng: [
                13,
                8,
                52
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                17,
                3
            ],
            CON: [
                18,
                4
            ],
            INT: [
                12,
                1
            ],
            WIS: [
                14,
                2
            ],
            CHA: [
                14,
                2
            ]
        },
        saving_throws: [
            "STR +6",
            "CON +7",
            "WIS +5",
            "CHA +5"
        ],
        skills: [
            "deception +5",
            "insight +5",
            "perception +8"
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 18"
        ],
        languages: [
            "infernal",
            "telepathy 120 ft."
        ],
        challenge_lvl: "5",
        xp: 1800,
        traits_html: "<h3> Traits </h3><p><em><strong>Barbed Hide.</strong></em> At the start of each of its turns, the barbed devil deals 5 (1d10) piercing damage to any creature grappling it. </p><p><em><strong>Devil's Sight.</strong></em> Magical darkness doesn't impede the devil's darkvision. </p><p><em><strong>Magic Resistance.</strong></em> The devil has advantage on saving throws against spells and other magical effects.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The devil makes three meleeattack: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (1d6 + 3) piercing damage. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 10 (2d6 + 3) piercing damage. </p><p><em><strong>Hurl Flame.</strong></em> Ranged SpellAttac: +5 to hit, range 150 ft., one target. <em>Hit:</em> 10 (3d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/486/315/315/636376302569423870.jpeg",
        id: 41
    },
    {
        slug: "basilisk",
        name: "Basilisk",
        type: "medium monstrosity",
        alignment: "unaligned",
        ac: "15 (natural armor)",
        hp: {
            default: 52,
            rng: [
                8,
                8,
                16
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                8,
                -1
            ],
            CON: [
                15,
                2
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                8,
                -1
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 9"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "3",
        xp: 700,
        traits_html: "<h3> Traits </h3><p><em><strong>Petrifying Gaze.</strong></em> If a creature starts its turn within 30 feet of the basilisk and the two of them can see each other, the basilisk can force the creature to make a DC 12 Constitution saving throw if the basilisk isn't incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.</p><p>A creature that isn't surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can't see the basilisk until the start of its next turn, when it can avert its eyes again.</p><p>If it looks at the basilisk in the meantime, it must immediately make the save. If the basilisk sees its reflection within 30 feet of it in bright light, it mistakes itself for a rival and targets itself with its gaze.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 10 (2d6 + 3) piercing damage plus 7 (2d6) poison damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/185/1000/1000/636252762168821795.jpeg",
        id: 42
    },
    {
        slug: "bat",
        name: "Bat",
        type: "tiny beast",
        alignment: "unaligned",
        ac: "12",
        hp: {
            default: 1,
            rng: [
                1,
                4,
                -1
            ]
        },
        speed: {
            base: 5,
            unit: "ft."
        },
        stats: {
            STR: [
                2,
                -4
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                8,
                -1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                4,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "blindsight 60 ft.",
            " passive perception 11"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3><p><em><strong>Echolocation.</strong></em> The bat can't use its blindsight while deafened. </p><p><em><strong>Keen Hearing.</strong></em> The bat has advantage on Wisdom (Perception) checks that rely on hearing.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +0 to hit, reach 5 ft., one creature. <em>Hit:</em> 1 piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/18/305/1000/1000/636379812593010967.jpeg",
        id: 43
    },
    {
        slug: "bearded_devil",
        name: "Bearded Devil",
        type: "medium fiend",
        alignment: "lawful evil",
        ac: "13 (natural armor)",
        hp: {
            default: 52,
            rng: [
                8,
                8,
                16
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                15,
                2
            ],
            INT: [
                9,
                -1
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                11,
                0
            ]
        },
        saving_throws: [
            "STR +5",
            "CON +4",
            "WIS +2"
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 10"
        ],
        languages: [
            "infernal",
            "telepathy 120 ft."
        ],
        challenge_lvl: "3",
        xp: 700,
        traits_html: "<h3> Traits </h3><p><em><strong>Devil's Sight.</strong></em> Magical darkness doesn't impede the devil's darkvision. </p><p><em><strong>Magic Resistance.</strong></em> The devil has advantage on saving throws against spells and other magical effects. </p><p><em><strong>Steadfast.</strong></em> The devil can't be frightened while it can see an allied creature within 30 feet of it.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The devil makes twoattack: one with its beard and one with its glaive. </p><p><em><strong>Beard.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one creature. <em>Hit:</em> 6 (1d8 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target can't regain hit points. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. </p><p><em><strong>Glaive.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 10 ft., one target. <em>Hit:</em> 8 (1d10 + 3) slashing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 12 Constitution saving throw or lose 5 (1d10) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5 (1d10). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/193/1000/1000/636252763397604505.jpeg",
        id: 44
    },
    {
        slug: "behir",
        name: "Behir",
        type: "huge monstrosity",
        alignment: "neutral evil",
        ac: "17 (natural armor)",
        hp: {
            default: 168,
            rng: [
                16,
                12,
                64
            ]
        },
        speed: {
            base: 50,
            unit: "ft."
        },
        stats: {
            STR: [
                23,
                6
            ],
            DEX: [
                16,
                3
            ],
            CON: [
                18,
                4
            ],
            INT: [
                7,
                -2
            ],
            WIS: [
                14,
                2
            ],
            CHA: [
                12,
                1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +6",
            "stealth +7"
        ],
        senses: [
            "darkvision 90 ft.",
            " passive perception 16"
        ],
        languages: [
            "draconic"
        ],
        challenge_lvl: "11",
        xp: 7200,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The behir makes twoattack: one with its bite and one to constrict. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +10 to hit, reach 10 ft., one target. <em>Hit:</em> 22 (3d10 + 6) piercing damage. </p><p><em><strong>Constrict.</strong></em> <em>Melee Weapon Attack:</em> +10 to hit, reach 5 ft., one Large or smaller creature. <em>Hit:</em> 17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing damage. The target is grappled (escape DC 16) if the behir isn't already constricting a creature, and the target is restrained until this grapple ends. </p><p><em><strong>Lightning Breath (Recharge 5\u20136).</strong></em> The behir exhales a line of lightning that is 20 feet long and 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one. </p><p><em><strong>Swallow.</strong></em> The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21 (6d6) acid damage at the start of each of the behir's turns. A behir can have only one creature swallowed at a time. </p><p>If the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 feet of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 feet of movement, exiting prone.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/195/1000/1000/636252763748680024.jpeg",
        id: 45
    },
    {
        slug: "berserker",
        name: "Berserker",
        type: "medium humanoid",
        alignment: "any",
        ac: "13 (hide armor)",
        hp: {
            default: 67,
            rng: [
                9,
                8,
                27
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                17,
                3
            ],
            INT: [
                9,
                -1
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                9,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 10"
        ],
        languages: [
            "any one language (usually common)"
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Reckless.</strong></em> At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Greataxe.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 9 (1d12 + 3) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
        id: 46
    },
    {
        slug: "black_bear",
        name: "Black Bear",
        type: "medium beast",
        alignment: "unaligned",
        ac: "11 (natural armor)",
        hp: {
            default: 19,
            rng: [
                3,
                8,
                6
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                15,
                2
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                14,
                2
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3"
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Smell.</strong></em> The bear has advantage on Wisdom (Perception) checks that rely on smell.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The bear makes twoattack: one with its bite and one with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d6 + 2) piercing damage. </p><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (2d4 + 2) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 47
    },
    {
        slug: "black_dragon_wyrmling",
        name: "Black Dragon Wyrmling",
        type: "medium dragon",
        alignment: "chaotic evil",
        ac: "17 (natural armor)",
        hp: {
            default: 33,
            rng: [
                6,
                8,
                6
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                15,
                2
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                13,
                1
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                13,
                1
            ]
        },
        saving_throws: [
            "DEX +4",
            "CON +3",
            "WIS +2",
            "CHA +3"
        ],
        skills: [
            "perception +4",
            "stealth +4"
        ],
        senses: [
            "blindsight 10 ft.",
            "darkvision 60 ft.",
            " passive perception 14"
        ],
        languages: [
            "draconic"
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The dragon can breathe air and water.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d10 + 2) piercing damage plus 2 (1d4) acid damage.</p><p><em><strong>Acid Breath (Recharge 5\u20136).</strong></em> The dragon exhales acid in a 15-\u00adfoot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 22 (5d8) acid damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/496/1000/1000/636376308217017511.jpeg",
        id: 48
    },
    {
        slug: "black_pudding",
        name: "Black Pudding",
        type: "large ooze",
        alignment: "unaligned",
        ac: "7",
        hp: {
            default: 85,
            rng: [
                10,
                10,
                30
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                5,
                -3
            ],
            CON: [
                16,
                3
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                6,
                -2
            ],
            CHA: [
                1,
                -5
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "blindsight 60 ft.",
            " passive perception 8"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "4",
        xp: 1100,
        traits_html: "<h3> Traits </h3><p><em><strong>Amorphous.</strong></em> The pudding can move through a space as narrow as 1 inch wide without squeezing. </p><p><em><strong>Corrosive Form.</strong></em> A creature that touches the pudding or hits it with a melee attack while within 5 feet of it takes 4 (1d8) acid damage. Any nonmagical weapon made of metal or wood that hits the pudding corrodes. After dealing damage, the weapon takes a permanent and cumulative \u22121 penalty to damage rolls. If its penalty drops to \u22125, the weapon is destroyed.</p><p>Nonmagical ammunition made of metal or wood that hits the pudding is destroyed after dealing damage.</p><p>The pudding can eat through 2-inch-thick, nonmagical wood or metal in 1 round. </p><p><em><strong>Spider Climb.</strong></em> The pudding can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Pseudopod.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (1d6 + 3) bludgeoning damage plus 18 (4d8) acid damage. In addition, nonmagical armor worn by the target is partly dissolved and takes a permanent and cumulative \u22121 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/201/315/315/636252764027417823.jpeg",
        id: 49
    },
    {
        slug: "blink_dog",
        name: "Blink Dog",
        type: "medium fey",
        alignment: "lawful good",
        ac: "13",
        hp: {
            default: 22,
            rng: [
                4,
                8,
                4
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                12,
                1
            ],
            DEX: [
                17,
                3
            ],
            CON: [
                12,
                1
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                11,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3",
            "stealth +5"
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            "blink dog  understands sylvan but can't speak it"
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Hearing and Smell.</strong></em> The dog has advantage on Wisdom (Perception) checks that rely on hearing or smell.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 4 (1d6 + 1) piercing damage. </p><p><em><strong>Teleport (Recharge 4\u20136).</strong></em> The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 feet to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/205/315/315/636252764168652859.jpeg",
        id: 50
    },
    {
        slug: "blood_hawk",
        name: "Blood Hawk",
        type: "small beast",
        alignment: "unaligned",
        ac: "12",
        hp: {
            default: 7,
            rng: [
                2,
                6,
                0
            ]
        },
        speed: {
            base: 10,
            unit: "ft."
        },
        stats: {
            STR: [
                6,
                -2
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                10,
                0
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                14,
                2
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +4"
        ],
        senses: [
            "passive perception 14"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.125,
        xp: 25,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Sight.</strong></em> The hawk has advantage on Wisdom (Perception) checks that rely on sight. </p><p><em><strong>Pack Tactics.</strong></em> The hawk has advantage on an attack roll against a creature if at least one of the hawk's allies is within 5 feet of the creature and the ally isn't incapacitated.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Beak.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 4 (1d4 + 2) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 51
    },
    {
        slug: "blue_dragon_wyrmling",
        name: "Blue Dragon Wyrmling",
        type: "medium dragon",
        alignment: "lawful evil",
        ac: "17 (natural armor)",
        hp: {
            default: 52,
            rng: [
                8,
                8,
                16
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                17,
                3
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                15,
                2
            ],
            INT: [
                12,
                1
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                15,
                2
            ]
        },
        saving_throws: [
            "DEX +2",
            "CON +4",
            "WIS +2",
            "CHA +4"
        ],
        skills: [
            "perception +4",
            "stealth +2"
        ],
        senses: [
            "blindsight 10 ft.",
            "darkvision 60 ft.",
            " passive perception 14"
        ],
        languages: [
            "draconic"
        ],
        challenge_lvl: "3",
        xp: 700,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 8 (1d10 + 3) piercing damage plus 3 (1d6) lightning damage. </p><p><em><strong>Lightning Breath (Recharge 5\u20136).</strong></em> The dragon exhales lightning in a 30-\u00adfoot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/209/1000/1000/636252764637244026.jpeg",
        id: 52
    },
    {
        slug: "boar",
        name: "Boar",
        type: "medium beast",
        alignment: "unaligned",
        ac: "11 (natural armor)",
        hp: {
            default: 11,
            rng: [
                2,
                8,
                2
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                13,
                1
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                12,
                1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                9,
                -1
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 9"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3><p><em><strong>Charge.</strong></em> If the boar moves at least 20 feet straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 3 (1d6) slashing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone. </p><p><em><strong>Relentless (Recharges after a Short or Long Rest).</strong></em> If the boar takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Tusk.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 4 (1d6 + 1) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 53
    },
    {
        slug: "bone_devil",
        name: "Bone Devil",
        type: "large fiend",
        alignment: "lawful evil",
        ac: "19 (natural armor)",
        hp: {
            default: 142,
            rng: [
                15,
                10,
                60
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                16,
                3
            ],
            CON: [
                18,
                4
            ],
            INT: [
                13,
                1
            ],
            WIS: [
                14,
                2
            ],
            CHA: [
                16,
                3
            ]
        },
        saving_throws: [
            "INT +5",
            "WIS +6",
            "CHA +7"
        ],
        skills: [
            "deception +7",
            "insight +6"
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 12"
        ],
        languages: [
            "infernal",
            "telepathy 120 ft."
        ],
        challenge_lvl: "9",
        xp: 5000,
        traits_html: "<h3> Traits </h3><p><em><strong>Devil's Sight.</strong></em> Magical darkness doesn't impede the devil's darkvision. </p><p><em><strong>Magic Resistance.</strong></em> The devil has advantage on saving throws against spells and other magical effects.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The devil makes threeattack: two with its claws and one with its sting. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +8 to hit, reach 10 ft., one target. <em>Hit:</em> 8 (1d8 + 4) slashing damage. </p><p><em><strong>Sting.</strong></em> <em>Melee Weapon Attack:</em> +8 to hit, reach 10 ft., one target. <em>Hit:</em> 13 (2d8 + 4) piercing damage plus 17 (5d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/481/1000/1000/636328225187253200.jpeg",
        id: 54
    },
    {
        slug: "brass_dragon_wyrmling",
        name: "Brass Dragon Wyrmling",
        type: "medium dragon",
        alignment: "chaotic good",
        ac: "16 (natural armor)",
        hp: {
            default: 16,
            rng: [
                3,
                8,
                3
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                15,
                2
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                13,
                1
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                13,
                1
            ]
        },
        saving_throws: [
            "DEX +2",
            "CON +3",
            "WIS +2",
            "CHA +3"
        ],
        skills: [
            "perception +4",
            "stealth +2"
        ],
        senses: [
            "blindsight 10 ft.",
            "darkvision 60 ft.",
            " passive perception 14"
        ],
        languages: [
            "draconic"
        ],
        challenge_lvl: "1",
        xp: 200,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d10 + 2) piercing damage. </p><p><em><strong>Breath Weapons (Recharge 5\u20136).</strong></em> The dragon uses one of the following breath weapons. </p><p><em><strong>Fire Breath.</strong></em> The dragon exhales fire in an 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 14 (4d6) fire damage on a failed save, or half as much damage on a successful one. </p><p><em><strong>Sleep Breath.</strong></em> The dragon exhales sleep gas in a 15-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw or fall unconscious for 1 minute. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/215/315/315/636252764963208954.jpeg",
        id: 55
    },
    {
        slug: "bronze_dragon_wyrmling",
        name: "Bronze Dragon Wyrmling",
        type: "medium dragon",
        alignment: "lawful good",
        ac: "17 (natural armor)",
        hp: {
            default: 32,
            rng: [
                5,
                8,
                10
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                17,
                3
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                15,
                2
            ],
            INT: [
                12,
                1
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                15,
                2
            ]
        },
        saving_throws: [
            "DEX +2",
            "CON +4",
            "WIS +2",
            "CHA +4"
        ],
        skills: [
            "perception +4",
            "stealth +2"
        ],
        senses: [
            "blindsight 10 ft.",
            "darkvision 60 ft.",
            " passive perception 14"
        ],
        languages: [
            "draconic"
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The dragon can breathe air and water.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 8 (1d10 + 3) piercing damage.</p><p><em><strong>Breath Weapons (Recharge 5\u20136).</strong></em> The dragon uses one of the following breath weapons.</p><p><em><strong>Lightning Breath.</strong></em> The dragon exhales lightning in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 16 (3d10) lightning damage on a failed save, or half as much damage on a successful one.</p><p><em><strong>Repulsion Breath.</strong></em> The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 12 Strength saving throw. On a failed save, the creature is pushed 30 feet away from the dragon.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/492/315/315/636376306909593829.jpeg",
        id: 56
    },
    {
        slug: "brown_bear",
        name: "Brown Bear",
        type: "large beast",
        alignment: "unaligned",
        ac: "11 (natural armor)",
        hp: {
            default: 34,
            rng: [
                4,
                10,
                12
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                19,
                4
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                16,
                3
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3"
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "1",
        xp: 200,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Smell.</strong></em> The bear has advantage on Wisdom (Perception) checks that rely on smell.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The bear makes twoattack: one with its bite and one with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 8 (1d8 + 4) piercing damage. </p><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 11 (2d6 + 4) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 57
    },
    {
        slug: "bugbear",
        name: "Bugbear",
        type: "medium humanoid",
        alignment: "chaotic evil",
        ac: "16 (hide armor, shield)",
        hp: {
            default: 27,
            rng: [
                5,
                8,
                5
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                15,
                2
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                13,
                1
            ],
            INT: [
                8,
                -1
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                9,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "stealth +6",
            "survival +2"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            "common",
            "goblin"
        ],
        challenge_lvl: "1",
        xp: 200,
        traits_html: "<h3> Traits </h3><p><em><strong>Brute.</strong></em> A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack). </p><p><em><strong>Surprise Attack.</strong></em> If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Morningstar.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 11 (2d8 + 2) piercing damage. </p><p><em><strong>Javelin.</strong></em> <em>Melee or Ranged Weapon Attack:</em> +4 to hit, reach 5 ft. or range 30/120 ft., one target. <em>Hit:</em> 9 (2d6 + 2) piercing damage in melee or 5 (1d6 + 2) piercing damage at range.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/221/1000/1000/636252765234633232.jpeg",
        id: 58
    },
    {
        slug: "bulette",
        name: "Bulette",
        type: "large monstrosity",
        alignment: "unaligned",
        ac: "17 (natural armor)",
        hp: {
            default: 94,
            rng: [
                9,
                10,
                45
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                19,
                4
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                21,
                5
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +6"
        ],
        senses: [
            "darkvision 60 ft.",
            "tremorsense 60 ft.",
            " passive perception 16"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "5",
        xp: 1800,
        traits_html: "<h3> Traits </h3><p><em><strong>Standing Leap.</strong></em> The bulette's long jump is up to 30 feet and its high jump is up to 15 feet, with or without a running start.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 30 (4d12 + 4) piercing damage. </p><p><em><strong>Deadly Leap.</strong></em> If the bulette jumps at least 15 feet as part of its movement, it can then use this action to land on its feet in a space that contains one or more other creatures. Each of those creatures must succeed on a DC 16 Strength or Dexterity saving throw (target's choice) or be knocked prone and take 14 (3d6 + 4) bludgeoning damage plus 14 (3d6 + 4) slashing damage. On a successful save, the creature takes only half the damage, isn't knocked prone, and is pushed 5 feet out of the bulette's space into an unoccupied space of the creature's choice. If no unoccupied space is within range, the creature instead falls prone in the bulette's space.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/223/315/315/636252765369632881.jpeg",
        id: 59
    },
    {
        slug: "camel",
        name: "Camel",
        type: "large beast",
        alignment: "unaligned",
        ac: "9",
        hp: {
            default: 15,
            rng: [
                2,
                10,
                4
            ]
        },
        speed: {
            base: 50,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                8,
                -1
            ],
            CON: [
                14,
                2
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                8,
                -1
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 9"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.125,
        xp: 25,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 2 (1d4) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 60
    },
    {
        slug: "cat",
        name: "Cat",
        type: "tiny beast",
        alignment: "unaligned",
        ac: "12",
        hp: {
            default: 2,
            rng: [
                1,
                4,
                0
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                3,
                -4
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                10,
                0
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3",
            "stealth +4"
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Smell.</strong></em> The cat has advantage on Wisdom (Perception) checks that rely on smell.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +0 to hit, reach 5 ft., one target. <em>Hit:</em> 1 slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 61
    },
    {
        slug: "centaur",
        name: "Centaur",
        type: "large monstrosity",
        alignment: "neutral good",
        ac: "12",
        hp: {
            default: 45,
            rng: [
                6,
                10,
                12
            ]
        },
        speed: {
            base: 50,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                14,
                2
            ],
            INT: [
                9,
                -1
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                11,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "athletics +6",
            "perception +3",
            "survival +3"
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            "elvish",
            "sylvan"
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Charge.</strong></em> If the centaur moves at least 30 feet straight toward a target and then hits it with a pike attack on the same turn, the target takes an extra 10 (3d6) piercing damage.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The centaur makes twoattack: one with its pike and one with its hooves or two with its longbow. </p><p><em><strong>Pike.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 10 ft., one target. <em>Hit:</em> 9 (1d10 + 4) piercing damage. </p><p><em><strong>Hooves.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 11 (2d6 + 4) bludgeoning damage. </p><p><em><strong>Longbow.</strong></em> <em>Ranged Weapon Attack:</em> +4 to hit, range 150/600 ft., one target. <em>Hit:</em> 6 (1d8 + 2) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/227/1000/1000/636252765573266420.jpeg",
        id: 62
    },
    {
        slug: "chain_devil",
        name: "Chain Devil",
        type: "medium fiend",
        alignment: "lawful evil",
        ac: "16 (natural armor)",
        hp: {
            default: 85,
            rng: [
                10,
                8,
                40
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                18,
                4
            ],
            INT: [
                11,
                0
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                14,
                2
            ]
        },
        saving_throws: [
            "CON +7",
            "WIS +4",
            "CHA +5"
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 11"
        ],
        languages: [
            "infernal",
            "telepathy 120 ft."
        ],
        challenge_lvl: "8",
        xp: 3900,
        traits_html: "<h3> Traits </h3><p><em><strong>Devil's Sight.</strong></em> Magical darkness doesn't impede the devil's darkvision. </p><p><em><strong>Magic Resistance.</strong></em> The devil has advantage on saving throws against spells and other magical effects.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The devil makes two attacks with its chains. </p><p><em><strong>Chain.</strong></em> <em>Melee Weapon Attack:</em> +8 to hit, reach 10 ft., one target. <em>Hit:</em> 11 (2d6 + 4) slashing damage. The target is grappled (escape DC 14) if the devil isn't already grappling a creature. Until this grapple ends, the target is restrained and takes 7 (2d6) piercing damage at the start of each of its turns. </p><p><em><strong>Animate Chains (Recharges after a Short or Long Rest).</strong></em> Up to four chains the devil can see within 60 feet of it magically sprout razor-\u00adedged barbs and animate under the devil's control, provided that the chains aren't being worn or carried. </p><p>Each animated chain is an object with AC 20, 20 hit points, resistance to piercing damage, and immunity to psychic and thunder damage. When the devil uses multiattack on its turn, it can use each animated chain to make one additional chain attack. An animated chain can grapple one creature of its own but can't make attacks while grappling. An animated chain reverts to its inanimate state if reduced to 0 hit points or if the devil is incapacitated or dies.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/235/1000/1000/636252766618069332.jpeg",
        id: 63
    },
    {
        slug: "chimera",
        name: "Chimera",
        type: "large monstrosity",
        alignment: "chaotic evil",
        ac: "14 (natural armor)",
        hp: {
            default: 114,
            rng: [
                12,
                10,
                48
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                19,
                4
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                19,
                4
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                14,
                2
            ],
            CHA: [
                10,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +8"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 18"
        ],
        languages: [
            "understands draconic but can't speak  it"
        ],
        challenge_lvl: "6",
        xp: 2300,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The chimera makes threeattack: one with its bite, one with its horns, and one with its claws. When its fire breath is available, it can use the breath in place of its bite or horns. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 11 (2d6 + 4) piercing damage. </p><p><em><strong>Horns.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 10 (1d12 + 4) bludgeoning damage. </p><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 11 (2d6 + 4) slashing damage. </p><p><em><strong>Fire Breath (Recharge 5\u20136).</strong></em> The dragon head exhales fire in a 15-\u00ad-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/237/1000/1000/636252766770156389.jpeg",
        id: 64
    },
    {
        slug: "chuul",
        name: "Chuul",
        type: "large aberration",
        alignment: "chaotic evil",
        ac: "16 (natural armor)",
        hp: {
            default: 93,
            rng: [
                11,
                10,
                33
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                19,
                4
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                16,
                3
            ],
            INT: [
                5,
                -3
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +4"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 14"
        ],
        languages: [
            "understands deep speech but can't speak"
        ],
        challenge_lvl: "4",
        xp: 1100,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The chuul can breathe air and water.</p><p><em><strong>Sense Magic.</strong></em> The chuul senses magic within 120 feet of it at will. This trait otherwise works like the detect magic spell but isn't itself magical.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once.</p><p><em><strong>Pincer.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 10 ft., one target. <em>Hit:</em> 11 (2d6 + 4) bludgeoning damage. The target is grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures grappled.</p><p><em><strong>Tentacles.</strong></em> One creature grappled by the chuul must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/241/1000/1000/636252767122656355.jpeg",
        id: 65
    },
    {
        slug: "clay_golem",
        name: "Clay Golem",
        type: "large construct",
        alignment: "unaligned",
        ac: "14 (natural armor)",
        hp: {
            default: 133,
            rng: [
                14,
                10,
                56
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                20,
                5
            ],
            DEX: [
                9,
                -1
            ],
            CON: [
                18,
                4
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                8,
                -1
            ],
            CHA: [
                1,
                -5
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 9"
        ],
        languages: [
            "understands the languages of its creator but can't speak"
        ],
        challenge_lvl: "9",
        xp: 5000,
        traits_html: "<h3> Traits </h3><p><em><strong>Acid Absorption.</strong></em> Whenever the golem is subjected to acid damage, it takes no damage and instead regains a number of hit points equal to the acid damage dealt. </p><p><em><strong>Berserk.</strong></em> Whenever the golem starts its turn with 60 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points. </p><p><em><strong>Immutable Form.</strong></em> The golem is immune to any spell or effect that would alter its form. </p><p><em><strong>Magic Resistance.</strong></em> The golem has advantage on saving throws against spells and other magical effects. </p><p><em><strong>Magic Weapons.</strong></em> The golem's weapon attacks are magical.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The golem makes two slam attacks. </p><p><em><strong>Slam.</strong></em> <em>Melee Weapon Attack:</em> +8 to hit, reach 5 ft., one target. <em>Hit:</em> 16 (2d10 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw or have its hit point maximum reduced by an amount equal to the damage taken. The target dies if this attack reduces its hit point maximum to 0. The reduction lasts until removed by the greater restoration spell or other magic. </p><p><em><strong>Haste (Recharge 5\u20136).</strong></em> Until the end of its next turn, the golem magically gains a +2 bonus to its AC, has advantage on Dexterity saving throws, and can use its slam attack as a bonus action.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/243/315/315/636252767318152303.jpeg",
        id: 66
    },
    {
        slug: "cloaker",
        name: "Cloaker",
        type: "large aberration",
        alignment: "chaotic neutral",
        ac: "14 (natural armor)",
        hp: {
            default: 78,
            rng: [
                12,
                10,
                12
            ]
        },
        speed: {
            base: 10,
            unit: "ft."
        },
        stats: {
            STR: [
                17,
                3
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                12,
                1
            ],
            INT: [
                13,
                1
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                14,
                2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "stealth +5"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 11"
        ],
        languages: [
            "deep speech",
            "undercommon"
        ],
        challenge_lvl: "8",
        xp: 3900,
        traits_html: "<h3> Traits </h3><p><em><strong>Damage Transfer.</strong></em> While attached to a creature, the cloaker takes only half the damage dealt to it (rounded down), and that creature takes the other half. </p><p><em><strong>False Appearance.</strong></em> While the cloaker remains motionless without its underside exposed, it is indistinguishable from a dark leather cloak. </p><p><em><strong>Light Sensitivity.</strong></em> While in bright light, the cloaker has disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The cloaker makes twoattack: one with its bite and one with its tail. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one creature. <em>Hit:</em> 10 (2d6 + 3) piercing damage, and if the target is Large or smaller, the cloaker attaches to it. If the cloaker has advantage against the target, the cloaker attaches to the target's head, and the target is blinded and unable to breathe while the cloaker is attached. While attached, the cloaker can make this attack only against the target and has advantage on the attack roll. The cloaker can detach itself by spending 5 feet of its movement. A creature, including the target, can take its action to detach the cloaker by succeeding on a DC 16 Strength check. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 10 ft., one creature. <em>Hit:</em> 7 (1d8 + 3) slashing damage. </p><p><em><strong>Moan.</strong></em> Each creature within 60 feet of the cloaker that can hear its moan and that isn't an aberration must succeed on a DC 13 Wisdom saving throw or become frightened until the end of the cloaker's next turn. If a creature's saving throw is successful, the creature is immune to the cloaker's moan for the next 24 hours. </p><p><em><strong>Phantasms (Recharges after a Short or Long Rest).</strong></em> The cloaker magically creates three illusory duplicates of itself if it isn't in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear.</p><p>Whenever any creature targets the cloaker with an attack or a harmful spell while a duplicate remains, that creature rolls randomly to determine whether it targets the cloaker or one of the duplicates. A creature is unaffected by this magical effect if it can't see or if it relies on senses other than sight.</p><p>A duplicate has the cloaker's AC and uses its saving throws. If an attack hits a duplicate, or if a duplicate fails a saving throw against an effect that deals damage, the duplicate disappears.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/245/1000/1000/636252767458838228.jpeg",
        id: 67
    },
    {
        slug: "cloud_giant",
        name: "Cloud Giant",
        type: "huge giant",
        alignment: "neutral",
        ac: "14 (natural armor)",
        hp: {
            default: 200,
            rng: [
                16,
                12,
                96
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                27,
                8
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                22,
                6
            ],
            INT: [
                12,
                1
            ],
            WIS: [
                16,
                3
            ],
            CHA: [
                16,
                3
            ]
        },
        saving_throws: [
            "CON +10",
            "WIS +7",
            "CHA +7"
        ],
        skills: [
            "insight +7",
            "perception +7"
        ],
        senses: [
            "passive perception 17"
        ],
        languages: [
            "common",
            "giant"
        ],
        challenge_lvl: "9",
        xp: 5000,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Smell.</strong></em> The giant has advantage on Wisdom (Perception) checks that rely on smell. </p><p><em><strong>Innate Spellcasting.</strong></em> The giant's innate spellcasting ability is Charisma. It can innately cast the following spells, requiring no materialcomponent: </p><p>Atwil: detect magic, fog cloud, light </p><p>3/dayeac: feather fall, fly, misty step, telekinesis </p><p>1/dayeac: control weather, gaseous form</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The giant makes two morningstar attacks. </p><p><em><strong>Morningstar.</strong></em> <em>Melee Weapon Attack:</em> +12 to hit, reach 10 ft., one target. <em>Hit:</em> 21 (3d8 + 8) piercing damage. </p><p><em><strong>Rock.</strong></em> <em>Ranged Weapon Attack:</em> +12 to hit, range 60/240 ft., one target. <em>Hit:</em> 30 (4d10 + 8) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/249/1000/1000/636252767619414260.jpeg",
        id: 68
    },
    {
        slug: "cockatrice",
        name: "Cockatrice",
        type: "small monstrosity",
        alignment: "unaligned",
        ac: "11",
        hp: {
            default: 27,
            rng: [
                6,
                6,
                6
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                6,
                -2
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                12,
                1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 11"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one creature. <em>Hit:</em> 3 (1d4 + 1) piercing damage, and the target must succeed on a DC 11 Constitution saving throw against being magically petrified. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/251/315/315/636252767744669874.jpeg",
        id: 69
    },
    {
        slug: "commoner",
        name: "Commoner",
        type: "medium humanoid",
        alignment: "any",
        ac: "10",
        hp: {
            default: 4,
            rng: [
                1,
                8,
                0
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                10,
                0
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                10,
                0
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                10,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 10"
        ],
        languages: [
            "any one language (usually common)"
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Club.</strong></em> <em>Melee Weapon Attack:</em> +2 to hit, reach 5 ft., one target. <em>Hit:</em> 2 (1d4) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
        id: 70
    },
    {
        slug: "constrictor_snake",
        name: "Constrictor Snake",
        type: "large beast",
        alignment: "unaligned",
        ac: "12",
        hp: {
            default: 13,
            rng: [
                2,
                10,
                2
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                15,
                2
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                12,
                1
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                3,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "blindsight 10 ft.",
            " passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one creature. <em>Hit:</em> 5 (1d6 + 2) piercing damage. </p><p><em><strong>Constrict.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one creature. <em>Hit:</em> 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 14). Until this grapple ends, the creature is restrained, and the snake can't constrict another target.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 71
    },
    {
        slug: "copper_dragon_wyrmling",
        name: "Copper Dragon Wyrmling",
        type: "medium dragon",
        alignment: "chaotic good",
        ac: "16 (natural armor)",
        hp: {
            default: 22,
            rng: [
                4,
                8,
                4
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                15,
                2
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                13,
                1
            ],
            INT: [
                14,
                2
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                13,
                1
            ]
        },
        saving_throws: [
            "DEX +3",
            "CON +3",
            "WIS +2",
            "CHA +3"
        ],
        skills: [
            "perception +4",
            "stealth +3"
        ],
        senses: [
            "blindsight 10 ft.",
            "darkvision 60 ft.",
            " passive perception 14"
        ],
        languages: [
            "draconic"
        ],
        challenge_lvl: "1",
        xp: 200,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d10 + 2) piercing damage. </p><p><em><strong>Breath Weapons (Recharge 5\u20136).</strong></em> The dragon uses one of the following breath weapons. </p><p><em><strong>Acid Breath.</strong></em> The dragon exhales acid in an 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 18 (4d8) acid damage on a failed save, or half as much damage on a successful one. </p><p><em><strong>Slowing Breath.</strong></em> The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/255/1000/1000/636252768002215182.jpeg",
        id: 72
    },
    {
        slug: "couatl",
        name: "Couatl",
        type: "medium celestial",
        alignment: "lawful good",
        ac: "19 (natural armor)",
        hp: {
            default: 97,
            rng: [
                13,
                8,
                39
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                20,
                5
            ],
            CON: [
                17,
                3
            ],
            INT: [
                18,
                4
            ],
            WIS: [
                20,
                5
            ],
            CHA: [
                18,
                4
            ]
        },
        saving_throws: [
            "CON +5",
            "WIS +7",
            "CHA +6"
        ],
        skills: [
            ""
        ],
        senses: [
            "truesight 120 ft.",
            " passive perception 15"
        ],
        languages: [
            "all",
            "telepathy 120 ft."
        ],
        challenge_lvl: "4",
        xp: 1100,
        traits_html: "<h3> Traits </h3><p><em><strong>Innate Spellcasting.</strong></em> The couatl's spellcasting ability is Charisma (spell save DC 14). It can innately cast the following spells, requiring only verbalcomponent: </p><p>Atwil: detect evil and good, detect magic, detect thoughts </p><p>3/dayeac: bless, create food and water, cure wounds, lesser restoration, protection from poison, sanctuary, shield </p><p>1/dayeac: dream, greater restoration, scrying </p><p><em><strong>Magic Weapons.</strong></em> The couatl's weapon attacks are magical. </p><p><em><strong>Shielded Mind.</strong></em> The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +8 to hit, reach 5 ft., one creature. <em>Hit:</em> 8 (1d6 + 5) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 24 hours. Until this poison ends, the target is unconscious. Another creature can use an action to shake the target awake. </p><p><em><strong>Constrict.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 10 ft., one Medium or smaller creature. <em>Hit:</em> 10 (2d6 + 3) bludgeoning damage, and the target is grappled (escape DC 15). Until this grapple ends, the target is restrained, and the couatl can't constrict another target. </p><p><em><strong>Change Shape.</strong></em> The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl's choice).</p><p>In a new form, the couatl retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and other actions are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks. If the new form has a bite attack, the couatl can use its bite in that form.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/257/1000/1000/636252768143323827.jpeg",
        id: 73
    },
    {
        slug: "crab",
        name: "Crab",
        type: "tiny beast",
        alignment: "unaligned",
        ac: "11 (natural armor)",
        hp: {
            default: 2,
            rng: [
                1,
                4,
                0
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                2,
                -4
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                10,
                0
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                8,
                -1
            ],
            CHA: [
                2,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "stealth +2"
        ],
        senses: [
            "blindsight 30 ft.",
            " passive perception 9"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The crab can breathe air and water.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +0 to hit, reach 5 ft., one target. <em>Hit:</em> 1 bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 74
    },
    {
        slug: "crocodile",
        name: "Crocodile",
        type: "large beast",
        alignment: "unaligned",
        ac: "12 (natural armor)",
        hp: {
            default: 19,
            rng: [
                3,
                10,
                3
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                15,
                2
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                13,
                1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "stealth +2"
        ],
        senses: [
            "passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3><p><em><strong>Hold Breath.</strong></em> The crocodile can hold its breath for 15 minutes.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one creature. <em>Hit:</em> 7 (1d10 + 2) piercing damage, and the target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the crocodile can't bite another target.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 75
    },
    {
        slug: "cult_fanatic",
        name: "Cult Fanatic",
        type: "medium humanoid",
        alignment: "any",
        ac: "13 (leather armor)",
        hp: {
            default: 33,
            rng: [
                6,
                8,
                6
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                11,
                0
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                12,
                1
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                14,
                2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "deception +4",
            "persuasion +4",
            "religion +2"
        ],
        senses: [
            "passive perception 11"
        ],
        languages: [
            "any one language (usually common)"
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Dark Devotion.</strong></em> The fanatic has advantage on saving throws against being charmed or frightened. </p><p><em><strong>Spellcasting.</strong></em> The fanatic is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 11, +3 to hit with spell attacks). The fanatic has the following cleric spellsprepare: </p><p>Cantrips (atwill: light, sacred flame, thaumaturgy </p><p>1st level (4slots: command, inflict wounds, shield of faith </p><p>2nd level (3slots: hold person, spiritual weapon</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The fanatic makes two melee attacks. </p><p><em><strong>Dagger.</strong></em> <em>Melee or <em>Ranged Weapon Attack:</em></em> +4 to hit, reach 5 ft. or range 20/60 ft., one creature. <em>Hit:</em> 4 (1d4 + 2) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/259/1000/1000/636252768307230924.jpeg",
        id: 76
    },
    {
        slug: "cultist",
        name: "Cultist",
        type: "medium humanoid",
        alignment: "any",
        ac: "12 (leather armor)",
        hp: {
            default: 9,
            rng: [
                2,
                8,
                0
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                11,
                0
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                10,
                0
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                10,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "deception +2",
            "religion +2"
        ],
        senses: [
            "passive perception 10"
        ],
        languages: [
            "any one language (usually common)"
        ],
        challenge_lvl: 0.125,
        xp: 25,
        traits_html: "<h3> Traits </h3><p><em><strong>Dark Devotion.</strong></em> The cultist has advantage on saving throws against being charmed or frightened.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Scimitar.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one creature. <em>Hit:</em> 4 (1d6 + 1) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/14/481/1000/1000/636364323106021375.png",
        id: 77
    },
    {
        slug: "cyclops",
        name: "Cyclops",
        type: "huge giant",
        alignment: "chaotic neutral",
        ac: "14 natural armor",
        hp: {
            default: 138,
            rng: [
                12,
                12,
                60
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                22,
                6
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                20,
                5
            ],
            INT: [
                8,
                -1
            ],
            WIS: [
                6,
                -2
            ],
            CHA: [
                10,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 8"
        ],
        languages: [
            "giant"
        ],
        challenge_lvl: "6",
        xp: 2300,
        traits_html: "<h3> Traits </h3><p><em><strong>Poor Depth Perception.</strong></em> The cyclops has disadvantage on any attack roll against a target more than 30 feet away.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The cyclops makes two greatclub attacks.</p><p><em><strong>Greatclub.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft., one target. <em>Hit:</em> 19 (3d8 + 6) bludgeoning damage.</p><p><em><strong>Rock.</strong></em> <em>Ranged Weapon Attack:</em> +9 to hit, range 30/120 ft., one target. <em>Hit:</em> 28 (4d10 + 6) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/470/1000/1000/636376290137285130.jpeg",
        id: 78
    },
    {
        slug: "darkmantle",
        name: "Darkmantle",
        type: "small monstrosity",
        alignment: "unaligned",
        ac: "11",
        hp: {
            default: 22,
            rng: [
                5,
                6,
                5
            ]
        },
        speed: {
            base: 10,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                13,
                1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "stealth +3"
        ],
        senses: [
            "blindsight 60 ft.",
            " passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3><p><em><strong>Echolocation.</strong></em> The darkmantle can't use its blindsight while deafened. </p><p><em><strong>False Appearance.</strong></em> While the darkmantle remains motionless, it is indistinguishable from a cave formation such as a stalactite or stalagmite.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Crush.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one creature. <em>Hit:</em> 6 (1d6 + 3) bludgeoning damage, and the darkmantle attaches to the target. If the target is Medium or smaller and the darkmantle has advantage on the attack roll, it attaches by engulfing the target's head, and the target is also blinded and unable to breathe while the darkmantle is attached in this way.</p><p>While attached to the target, the darkmantle can attack no other creature except the target but has advantage on its attack rolls. The darkmantle's speed also becomes 0, it can't benefit from any bonus to its speed, and it moves with the target.</p><p>A creature can detach the darkmantle by making a successful DC 13 Strength check as an action. On its turn, the darkmantle can detach itself from the target by using 5 feet of movement. </p><p><em><strong>Darkness Aura (1/Day).</strong></em> A 15-\u00ad-foot radius of magical darkness extends out from the darkmantle, moves with it, and spreads around corners. The darkness lasts as long as the darkmantle maintains concentration, up to 10 minutes (as if concentrating on a spell). Darkvision can't penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/263/315/315/636252768676699519.jpeg",
        id: 79
    },
    {
        slug: "death_dog",
        name: "Death Dog",
        type: "medium monstrosity",
        alignment: "neutral evil",
        ac: "12",
        hp: {
            default: 39,
            rng: [
                6,
                8,
                12
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                15,
                2
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                14,
                2
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +5",
            "stealth +4"
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 15"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "1",
        xp: 200,
        traits_html: "<h3> Traits </h3><p><em><strong>Two-Headed.</strong></em> The dog has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dog makes two bite attacks. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d6 + 2) piercing damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the creature must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. This reduction lasts until the disease is cured. The creature dies if the disease reduces its hit point maximum to 0.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/265/1000/1000/636252768823194310.jpeg",
        id: 80
    },
    {
        slug: "deep_gnome_svirfneblin",
        name: "Deep Gnome (Svirfneblin)",
        type: "small humanoid",
        alignment: "neutral good",
        ac: "15 (chain shirt)",
        hp: {
            default: 16,
            rng: [
                3,
                6,
                6
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                15,
                2
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                14,
                2
            ],
            INT: [
                12,
                1
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                9,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "investigation +3",
            "perception +2",
            "stealth +4"
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 12"
        ],
        languages: [
            "gnomish",
            "terran",
            "undercommon"
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3><p><em><strong>Stone Camouflage.</strong></em> The gnome has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.</p><p><em><strong>Gnome Cunning.</strong></em> The gnome has advantage on Intelligence, Wisdom, and Charisma saving throws against magic.</p><p><em><strong>Innate Spellcasting.</strong></em> The gnome\u2019s innate spellcasting ability is Intelligence (spell save DC 11). It can innately cast the following spells, requiring no material components:</p><p>Atwil: nondetection (self only)</p><p>1/dayeac: blindness/deafness, blur, disguise self</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>War Pick.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target.Hi: 6 (1d8 + 2) piercing damage.</p><p><em><strong>Poisoned Dart.</strong></em> <em>Ranged Weapon Attack:</em> +4 to hit, range 30/120 ft., one creature.Hi: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/112/1000/1000/636323610009818415.jpeg",
        id: 81
    },
    {
        slug: "deer",
        name: "Deer",
        type: "medium beast",
        alignment: "unaligned",
        ac: "13",
        hp: {
            default: 4,
            rng: [
                1,
                8,
                0
            ]
        },
        speed: {
            base: 50,
            unit: "ft."
        },
        stats: {
            STR: [
                11,
                0
            ],
            DEX: [
                16,
                3
            ],
            CON: [
                11,
                0
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                14,
                2
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 12"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +2 to hit, reach 5 ft., one target. <em>Hit:</em> 2 (1d4) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 82
    },
    {
        slug: "deva",
        name: "Deva",
        type: "medium celestial",
        alignment: "lawful good",
        ac: "17 (natural armor)",
        hp: {
            default: 136,
            rng: [
                16,
                8,
                64
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                18,
                4
            ],
            CON: [
                18,
                4
            ],
            INT: [
                17,
                3
            ],
            WIS: [
                20,
                5
            ],
            CHA: [
                20,
                5
            ]
        },
        saving_throws: [
            "WIS +9",
            "CHA +9"
        ],
        skills: [
            "insight +9",
            "perception +9"
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 19"
        ],
        languages: [
            "all",
            "telepathy 120 ft."
        ],
        challenge_lvl: "10",
        xp: 5900,
        traits_html: "<h3> Traits </h3><p><em><strong>Angelic Weapons.</strong></em> The deva's weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra 4d8 radiant damage (included in the attack). </p><p><em><strong>Innate Spellcasting.</strong></em> The deva's spellcasting ability is Charisma (spell save DC 17). The deva can innately cast the following spells, requiring only verbalcomponent: </p><p>Atwil: detect evil and good </p><p>1/dayeac: commune, raise dead </p><p><em><strong>Magic Resistance.</strong></em> The deva has advantage on saving throws against spells and other magical effects.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The deva makes two melee attacks. </p><p><em><strong>Mace.</strong></em> <em>Melee Weapon Attack:</em> +8 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d6 + 4) bludgeoning damage plus 18 (4d8) radiant damage. </p><p><em><strong>Healing Touch (3/Day).</strong></em> The deva touches another creature. The target magically regains 20 (4d8 + 2) hit points and is freed from any curse, disease, poison, blindness, or deafness. </p><p><em><strong>Change Shape.</strong></em> The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice).</p><p>In a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/267/1000/1000/636252768980059444.jpeg",
        id: 83
    },
    {
        slug: "dire_wolf",
        name: "Dire Wolf",
        type: "large beast",
        alignment: "unaligned",
        ac: "14 (natural armor)",
        hp: {
            default: 37,
            rng: [
                5,
                10,
                10
            ]
        },
        speed: {
            base: 50,
            unit: "ft."
        },
        stats: {
            STR: [
                17,
                3
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                15,
                2
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3",
            "stealth +4"
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "1",
        xp: 200,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Hearing and Smell.</strong></em> The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.</p><p><em><strong>Pack Tactics.</strong></em> The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/484/315/315/636376300478361995.jpeg",
        id: 84
    },
    {
        slug: "djinni",
        name: "Djinni",
        type: "large elemental",
        alignment: "chaotic good",
        ac: "17 (natural armor)",
        hp: {
            default: 161,
            rng: [
                14,
                10,
                84
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                21,
                5
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                22,
                6
            ],
            INT: [
                15,
                2
            ],
            WIS: [
                16,
                3
            ],
            CHA: [
                20,
                5
            ]
        },
        saving_throws: [
            "DEX +6",
            "WIS +7",
            "CHA +9"
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 13"
        ],
        languages: [
            "auran"
        ],
        challenge_lvl: "11",
        xp: 7200,
        traits_html: "<h3> Traits </h3><p><em><strong>Elemental Demise.</strong></em> If the djinni dies, its body disintegrates into a warm breeze, leaving behind only equipment the djinni was wearing or carrying. </p><p><em><strong>Innate Spellcasting.</strong></em> The djinni's innate spellcasting ability is Charisma (spell save DC 17, +9 to hit with spell attacks). It can innately cast the following spells, requiring no materialcomponent: </p><p>Atwil: detect evil and good, detect magic, thunderwave </p><p>3/dayeac: create food and water (can create wine instead of water) , tongues, wind walk </p><p>1/dayeac: conjure elemental (air elemental only), creation, gaseous form, invisibility, major image, plane shift</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The djinni makes three scimitar attacks. </p><p><em><strong>Scimitar.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 5 ft., one target. <em>Hit:</em> 12 (2d6 + 5) slashing damage plus 3 (1d6) lightning or thunder damage (djinni's choice). </p><p><em><strong>Create Whirlwind.</strong></em> A 5-foot-radius, 30-foot-tall cylinder of swirling air magically forms on a point the djinni can see within 120 feet of it. The whirlwind lasts as long as the djinni maintains concentration (as if concentrating on a spell). Any creature but the djinni that enters the whirlwind must succeed on a DC 18 Strength saving throw or be restrained by it. The djinni can move the whirlwind up to 60 feet as an action, and creatures restrained by the whirlwind move with it. The whirlwind ends if the djinni loses sight of it.</p><p>A creature can use its action to free a creature restrained by the whirlwind, including itself, by succeeding on a DC 18 Strength check. If the check succeeds, the creature is no longer restrained and moves to the nearest space outside the whirlwind.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/281/315/315/636252770322204007.jpeg",
        id: 85
    },
    {
        slug: "doppelganger",
        name: "Doppelganger",
        type: "medium monstrosity",
        alignment: "neutral",
        ac: "14",
        hp: {
            default: 52,
            rng: [
                8,
                8,
                16
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                11,
                0
            ],
            DEX: [
                18,
                4
            ],
            CON: [
                14,
                2
            ],
            INT: [
                11,
                0
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                14,
                2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "deception +6",
            "insight +3"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 11"
        ],
        languages: [
            "common"
        ],
        challenge_lvl: "3",
        xp: 700,
        traits_html: "<h3> Traits </h3><p><em><strong>Shapechanger.</strong></em> The doppelganger can use its action to polymorph into a Small or Medium humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies. </p><p><em><strong>Ambusher.</strong></em> The doppelganger has advantage on attack rolls against any creature it has surprised. </p><p><em><strong>Surprise Attack.</strong></em> If the doppelganger surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 10 (3d6) damage from the attack.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The doppelganger makes two melee attacks. </p><p><em><strong>Slam.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d6 + 4) bludgeoning damage. </p><p><em><strong>Read Thoughts.</strong></em> The doppelganger magically reads the surface thoughts of one creature within 60 feet of it. The effect can penetrate barriers, but 3 feet of wood or dirt, 2 feet of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the target is in range, the doppelganger can continue reading its thoughts, as long as the doppelganger's concentration isn't broken (as if concentrating on a spell). While reading the target's mind, the doppelganger has advantage on Wisdom (Insight) and Charisma (Deception, Intimidation, and Persuasion) checks against the target.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/289/315/315/636252770983164351.jpeg",
        id: 86
    },
    {
        slug: "draft_horse",
        name: "Draft Horse",
        type: "large beast",
        alignment: "unaligned",
        ac: "10",
        hp: {
            default: 19,
            rng: [
                3,
                10,
                3
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                12,
                1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Hooves.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 9 (2d4 + 4) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 87
    },
    {
        slug: "dragon_turtle",
        name: "Dragon Turtle",
        type: "gargantuan dragon",
        alignment: "neutral",
        ac: "20 (natural armor)",
        hp: {
            default: 341,
            rng: [
                22,
                20,
                110
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                25,
                7
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                20,
                5
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                12,
                1
            ]
        },
        saving_throws: [
            "DEX +6",
            "CON +11",
            "WIS +7"
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 11"
        ],
        languages: [
            "aquan",
            "draconic"
        ],
        challenge_lvl: "17",
        xp: 18000,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The dragon turtle can breathe air and water.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon turtle makes threeattack: one with its bite and two with its claws. It can make one tail attack in place of its two claw attacks. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +13 to hit, reach 15 ft., one target. <em>Hit:</em> 26 (3d12 + 7) piercing damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +13 to hit, reach 10 ft., one target. <em>Hit:</em> 16 (2d8 + 7) slashing damage. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +13 to hit, reach 15 ft., one target. <em>Hit:</em> 26 (3d12 + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be pushed up to 10 feet away from the dragon turtle and knocked prone. </p><p><em><strong>Steam Breath (Recharge 5\u20136).</strong></em> The dragon turtle exhales scalding steam in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 52 (15d6) fire damage on a failed save, or half as much damage on a successful one. Being underwater doesn't grant resistance against this damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/291/1000/1000/636252771128151641.jpeg",
        id: 88
    },
    {
        slug: "dretch",
        name: "Dretch",
        type: "small fiend",
        alignment: "chaotic evil",
        ac: "11 (natural armor)",
        hp: {
            default: 18,
            rng: [
                4,
                6,
                4
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                11,
                0
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                12,
                1
            ],
            INT: [
                5,
                -3
            ],
            WIS: [
                8,
                -1
            ],
            CHA: [
                3,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 9"
        ],
        languages: [
            "abyssal",
            "telepathy 60 ft."
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dretch makes twoattack: one with its bite and one with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +2 to hit, reach 5 ft., one target. <em>Hit:</em> 3 (1d6) piercing damage. </p><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +2 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (2d4) slashing damage. </p><p><em><strong>Fetid Cloud (1/Day).</strong></em> A 10\u00ad-foot radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a DC 11 Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target can take either an action or a bonus action on its turn, not both, and can't take reactions.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/293/1000/1000/636252771253285096.jpeg",
        id: 89
    },
    {
        slug: "drider",
        name: "Drider",
        type: "large monstrosity",
        alignment: "chaotic evil",
        ac: "19 (natural armor)",
        hp: {
            default: 123,
            rng: [
                13,
                10,
                52
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                16,
                3
            ],
            CON: [
                18,
                4
            ],
            INT: [
                13,
                1
            ],
            WIS: [
                14,
                2
            ],
            CHA: [
                12,
                1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +5",
            "stealth +9"
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 15"
        ],
        languages: [
            "elvish",
            "undercommon"
        ],
        challenge_lvl: "6",
        xp: 2300,
        traits_html: "<h3> Traits </h3><p><em><strong>Fey Ancestry.</strong></em> The drider has advantage on saving throws against being charmed, and magic can't put the drider to sleep. </p><p><em><strong>Innate Spellcasting.</strong></em> The drider's innate spellcasting ability is Wisdom (spell save DC 13). The drider can innately cast the following spells, requiring no materialcomponent: </p><p>Atwil: dancing lights </p><p>1/dayeac: darkness, faerie fire </p><p><em><strong>Spider Climb.</strong></em> The drider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.</p><p><em><strong>Sunlight Sensitivity.</strong></em> While in sunlight, the drider has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight. </p><p><em><strong>Web Walker.</strong></em> The drider ignores movement restrictions caused by webbing.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one creature. <em>Hit:</em> 2 (1d4) piercing damage plus 9 (2d8) poison damage. </p><p><em><strong>Longsword.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands. </p><p><em><strong>Longbow.</strong></em> <em>Ranged Weapon Attack:</em> +6 to hit, range 150/600 ft., one target. <em>Hit:</em> 7 (1d8 + 3) piercing damage plus 4 (1d8) poison damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/295/1000/1000/636252771409285458.jpeg",
        id: 90
    },
    {
        slug: "drow",
        name: "Drow",
        type: "medium humanoid",
        alignment: "neutral evil",
        ac: "15 (chain shirt)",
        hp: {
            default: 13,
            rng: [
                3,
                8,
                0
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                10,
                0
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                10,
                0
            ],
            INT: [
                11,
                0
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                12,
                1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +2",
            "stealth +4"
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 12"
        ],
        languages: [
            "elvish",
            "undercommon"
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3><p><em><strong>Fey Ancestry.</strong></em> The drow has advantage on saving throws against being charmed, and magic can\u2019t put the drow to sleep.</p><p><em><strong>Innate Spellcasting.</strong></em> The drow\u2019s spellcasting ability is Charisma (spell save DC 11). It can innately cast the following spells, requiring no material components:</p><p>Atwil: dancing lights</p><p>1/dayeac: darkness, faerie fire</p><p><em><strong>Sunlight Sensitivity.</strong></em> While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Shortsword.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d6 + 2) piercing damage.</p><p><em><strong>Hand Crossbow.</strong></em> <em>Ranged Weapon Attack:</em> +4 to hit, range 30/120 ft., one target.Hi: 5 (1d6 + 2) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/501/1000/1000/636376310726273495.jpeg",
        id: 91
    },
    {
        slug: "druid",
        name: "Druid",
        type: "medium humanoid",
        alignment: "any",
        ac: "11 (16 with barkskin)",
        hp: {
            default: 27,
            rng: [
                5,
                8,
                5
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                10,
                0
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                13,
                1
            ],
            INT: [
                12,
                1
            ],
            WIS: [
                15,
                2
            ],
            CHA: [
                11,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "medicine +4",
            "nature +3",
            "perception +4"
        ],
        senses: [
            "passive perception 14"
        ],
        languages: [
            "druidic plus any two languages"
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Spellcasting.</strong></em> The druid is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). It has the following druid spellsprepare: </p><p>Cantrips (atwill: druidcraft, produce flame, shillelagh </p><p>1st level (4slots: entangle, longstrider, speak with animals, thunderwave </p><p>2nd level (3slots: animal messenger, barkskin</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Quarterstaff.</strong></em> <em>Melee Weapon Attack:</em> +2 to hit (+4 to hit with shillelagh), reach 5 ft., one target. <em>Hit:</em> 3 (1d6) bludgeoning damage, 4 (1d8) bludgeoning damage if wielded with two hands, or 6 (1d8 + 2) bludgeoning damage with shillelagh.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/299/1000/1000/636252771583275655.jpeg",
        id: 92
    },
    {
        slug: "dryad",
        name: "Dryad",
        type: "medium fey",
        alignment: "neutral",
        ac: "11 (16 with barkskin)",
        hp: {
            default: 22,
            rng: [
                5,
                8,
                0
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                10,
                0
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                11,
                0
            ],
            INT: [
                14,
                2
            ],
            WIS: [
                15,
                2
            ],
            CHA: [
                18,
                4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +4",
            "stealth +5"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 14"
        ],
        languages: [
            "elvish",
            "sylvan"
        ],
        challenge_lvl: "1",
        xp: 200,
        traits_html: "<h3> Traits </h3><p><em><strong>Innate Spellcasting.</strong></em> The dryad's innate spellcasting ability is Charisma (spell save DC 14). The dryad can innately cast the following spells, requiring no materialcomponent: </p><p>Atwil: druidcraft </p><p>3/dayeac: entangle, goodberry </p><p>1/dayeac: barkskin, pass without trace, shillelagh </p><p><em><strong>Magic Resistance.</strong></em> The dryad has advantage on saving throws against spells and other magical effects. </p><p><em><strong>Speak with Beasts and Plants.</strong></em> The dryad can communicate with beasts and plants as if they shared a language. </p><p><em><strong>Tree Stride.</strong></em> Once on her turn, the dryad can use 10 feet of her movement to step magically into one living tree within her reach and emerge from a second living tree within 60 feet of the first tree, appearing in an unoccupied space within 5 feet of the second tree. Both trees must be Large or bigger.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Club.</strong></em> <em>Melee Weapon Attack:</em> +2 to hit (+6 to hit with shillelagh), reach 5 ft., one target. <em>Hit:</em> 2 (1d4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage with shillelagh. </p><p><em><strong>Fey Charm.</strong></em> The dryad targets one humanoid or beast that she can see within 30 feet of her. If the target can see the dryad, it must succeed on a DC 14 Wisdom saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend to be heeded and protected. Although the target isn't under the dryad's control, it takes the dryad's requests or actions in the most favorable way it can.</p><p>Each time the dryad or its allies do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the dryad dies, is on a different plane of existence from the target, or ends the effect as a bonus action. If a target's saving throw is successful, the target is immune to the dryad's Fey Charm for the next 24 hours. </p><p>The dryad can have no more than one humanoid and up to three beasts charmed at a time.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/307/1000/1000/636252771953950206.jpeg",
        id: 93
    },
    {
        slug: "duergar",
        name: "Duergar",
        type: "medium humanoid",
        alignment: "lawful evil",
        ac: "16 (scale mail, shield)",
        hp: {
            default: 26,
            rng: [
                4,
                8,
                8
            ]
        },
        speed: {
            base: 25,
            unit: "ft."
        },
        stats: {
            STR: [
                14,
                2
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                14,
                2
            ],
            INT: [
                11,
                0
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                9,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 10"
        ],
        languages: [
            "dwarvish",
            "undercommon"
        ],
        challenge_lvl: "1",
        xp: 200,
        traits_html: "<h3> Traits </h3><p><em><strong>Duergar Resilience.</strong></em> The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed. </p><p><em><strong>Sunlight Sensitivity.</strong></em> While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Enlarge (Recharges after a Short or Long Rest).</strong></em> For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available. </p><p><em><strong>War Pick.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (1d8 + 2) piercing damage, or 11 (2d8 + 2) piercing damage while enlarged. </p><p><em><strong>Javelin.</strong></em> <em>Melee or <em>Ranged Weapon Attack:</em></em> +4 to hit, reach 5 ft. or range 30/120 ft., one target. <em>Hit:</em> 5 (1d6 + 2) piercing damage, or 9 (2d6 + 2) piercing damage while enlarged. </p><p><em><strong>Invisibility (Recharges after a Short or Long Rest).</strong></em> The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/309/1000/1000/636252772101183765.jpeg",
        id: 94
    },
    {
        slug: "dust_mephit",
        name: "Dust Mephit",
        type: "small elemental",
        alignment: "neutral evil",
        ac: "12",
        hp: {
            default: 17,
            rng: [
                5,
                6,
                0
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                5,
                -3
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                10,
                0
            ],
            INT: [
                9,
                -1
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                10,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +2",
            "stealth +4"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 12"
        ],
        languages: [
            "auran",
            "terran"
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3><p><em><strong>Death Burst.</strong></em> When the mephit dies, it explodes in a burst of dust. Each creature within 5 feet of it must then succeed on a DC 10 Constitution saving throw or be blinded for 1 minute. A blinded creature can repeat the saving throw on each of its turns, ending the effect on itself on a success. </p><p><em><strong>Innate Spellcasting.</strong></em>(1/Day). The mephit can innately cast sleep, requiring no material components. Its innate spellcasting ability is Charisma.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one creature. <em>Hit:</em> 4 (1d4 + 2) slashing damage. </p><p><em><strong>Blinding Breath (Recharge 6).</strong></em> The mephit exhales a 15- foot cone of blinding dust. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/313/1000/1000/636252772213922157.jpeg",
        id: 95
    },
    {
        slug: "eagle",
        name: "Eagle",
        type: "small beast",
        alignment: "unaligned",
        ac: "12",
        hp: {
            default: 3,
            rng: [
                1,
                6,
                0
            ]
        },
        speed: {
            base: 10,
            unit: "ft."
        },
        stats: {
            STR: [
                6,
                -2
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                10,
                0
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                14,
                2
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +4"
        ],
        senses: [
            "passive perception 14"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Sight.</strong></em> The eagle has advantage on Wisdom (Perception) checks that rely on sight.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Talons.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 4 (1d4 + 2) slashing damage.  </p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/515/1000/1000/636376317171111968.jpeg",
        id: 96
    },
    {
        slug: "earth_elemental",
        name: "Earth Elemental",
        type: "large elemental",
        alignment: "neutral",
        ac: "17 (natural armor)",
        hp: {
            default: 126,
            rng: [
                12,
                10,
                60
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                20,
                5
            ],
            DEX: [
                8,
                -1
            ],
            CON: [
                20,
                5
            ],
            INT: [
                5,
                -3
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            "tremorsense 60 ft.",
            " passive perception 10"
        ],
        languages: [
            "terran"
        ],
        challenge_lvl: "5",
        xp: 1800,
        traits_html: "<h3> Traits </h3><p><em><strong>Earth Glide.</strong></em> The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through. </p><p><em><strong>Siege Monster.</strong></em> The elemental deals double damage to objects and structures.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The elemental makes two slam attacks. </p><p><em><strong>Slam.</strong></em> <em>Melee Weapon Attack:</em> +8 to hit, reach 10 ft., one target. <em>Hit:</em> 14 (2d8 + 5) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/317/315/315/636252772331779404.jpeg",
        id: 97
    },
    {
        slug: "efreeti",
        name: "Efreeti",
        type: "large elemental",
        alignment: "lawful evil",
        ac: "17 (natural armor)",
        hp: {
            default: 200,
            rng: [
                16,
                10,
                112
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                22,
                6
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                24,
                7
            ],
            INT: [
                16,
                3
            ],
            WIS: [
                15,
                2
            ],
            CHA: [
                16,
                3
            ]
        },
        saving_throws: [
            "INT +7",
            "WIS +6",
            "CHA +7"
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 12"
        ],
        languages: [
            "ignan"
        ],
        challenge_lvl: "11",
        xp: 7200,
        traits_html: "<h3> Traits </h3><p><em><strong>Elemental Demise.</strong></em> If the efreeti dies, its body disintegrates in a flash of fire and puff of smoke, leaving behind only equipment the efreeti was wearing or carrying. </p><p><em><strong>Innate Spellcasting.</strong></em> The efreeti's innate spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). It can innately cast the following spells, requiring no materialcomponent: </p><p>Atwil: detect magic </p><p>3da: enlarge/reduce, tongues </p><p>1/dayeac: conjure elemental (fire elemental only), gaseous form, invisibility, major image, plane shift, wall of fire</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The efreeti makes two scimitar attacks or uses its Hurl Flame twice. </p><p><em><strong>Scimitar.</strong></em> <em>Melee Weapon Attack:</em> +10 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d6 + 6) slashing damage plus 7 (2d6) fire damage. </p><p><em><strong>Hurl Flame.</strong></em> Ranged SpellAttac: +7 to hit, range 120 ft., one target. <em>Hit:</em> 17 (5d6) fire damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/325/1000/1000/636252775714332067.jpeg",
        id: 98
    },
    {
        slug: "elephant",
        name: "Elephant",
        type: "huge beast",
        alignment: "unaligned",
        ac: "12 (natural armor)",
        hp: {
            default: 76,
            rng: [
                8,
                12,
                24
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                22,
                6
            ],
            DEX: [
                9,
                -1
            ],
            CON: [
                17,
                3
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "4",
        xp: 1100,
        traits_html: "<h3> Traits </h3><p><em><strong>Trampling Charge.</strong></em> If the elephant moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp attack against it as a bonus action.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Gore.</strong></em> <em>Melee Weapon Attack:</em> +8 to hit, reach 5 ft., one target. <em>Hit:</em> 19 (3d8 + 6) piercing damage. </p><p><em><strong>Stomp.</strong></em> <em>Melee Weapon Attack:</em> +8 to hit, reach 5 ft., one prone creature. <em>Hit:</em> 22 (3d10 + 6) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 99
    },
    {
        slug: "elk",
        name: "Elk",
        type: "large beast",
        alignment: "unaligned",
        ac: "10",
        hp: {
            default: 13,
            rng: [
                2,
                10,
                2
            ]
        },
        speed: {
            base: 50,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                12,
                1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3><p><em><strong>Charge.</strong></em> If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Ram.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (1d6 + 3) bludgeoning damage. </p><p><em><strong>Hooves.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one prone creature. <em>Hit:</em> 8 (2d4 + 3) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 100
    },
    {
        slug: "erinyes",
        name: "Erinyes",
        type: "medium fiend",
        alignment: "lawful evil",
        ac: "18 (plate)",
        hp: {
            default: 153,
            rng: [
                18,
                8,
                72
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                16,
                3
            ],
            CON: [
                18,
                4
            ],
            INT: [
                14,
                2
            ],
            WIS: [
                14,
                2
            ],
            CHA: [
                18,
                4
            ]
        },
        saving_throws: [
            "DEX +7",
            "CON +8",
            "WIS +6",
            "CHA +8"
        ],
        skills: [
            ""
        ],
        senses: [
            "truesight 120 ft.",
            " passive perception 12"
        ],
        languages: [
            "infernal",
            "telepathy 120 ft."
        ],
        challenge_lvl: "12",
        xp: 8400,
        traits_html: "<h3> Traits </h3><p><em><strong>Hellish Weapons.</strong></em> The erinyes's weapon attacks are magical and deal an extra 13 (3d8) poison damage on a hit (included in the attacks). </p><p><em><strong>Magic Resistance.</strong></em> The erinyes has advantage on saving throws against spells and other magical effects.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The erinyes makes three attacks. </p><p><em><strong>Longsword.</strong></em> <em>Melee Weapon Attack:</em> +8 to hit, reach 5 ft., one target. <em>Hit:</em> 8 (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands, plus 13 (3d8) poison damage. </p><p><em><strong>Longbow.</strong></em> <em>Ranged Weapon Attack:</em> +7 to hit, range 150/600 ft., one target. <em>Hit:</em> 7 (1d8 + 3) piercing damage plus 13 (3d8) poison damage, and the target must succeed on a DC 14 Constitution saving throw or be poisoned. The poison lasts until it is removed by the lesser restoration spell or similar magic.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/329/1000/1000/636252776041158657.jpeg",
        id: 101
    },
    {
        slug: "ettercap",
        name: "Ettercap",
        type: "medium monstrosity",
        alignment: "neutral evil",
        ac: "13 (natural armor)",
        hp: {
            default: 44,
            rng: [
                8,
                8,
                8
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                14,
                2
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                13,
                1
            ],
            INT: [
                7,
                -2
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                8,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3",
            "stealth +4",
            "survival +3"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 13"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Spider Climb.</strong></em> The ettercap can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.</p><p><em><strong>Web Sense.</strong></em> While in contact with a web, the ettercap knows the exact location of any other creature in contact with the same web.</p><p><em><strong>Web Walker.</strong></em> The ettercap ignores movement restrictions caused by webbing.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The ettercap makes twoattack: one with its bite and one with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one creature. <em>Hit:</em> 6 (1d8 + 2) piercing damage plus 4 (1d8) poison damage. The target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. </p><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (2d4 + 2) slashing damage. </p><p><em><strong>Web (Recharge 5\u20136).</strong></em> <em>Ranged Weapon Attack:</em> +4 to hit, range 30/60 ft., one Large or smaller creature. <em>Hit:</em> The creature is restrained by webbing. As an action, the restrained creature can make a DC 11 Strength check, escaping from the webbing on a success. The effect also ends if the webbing is destroyed. The webbing has AC 10, 5 hit points, vulnerability to fire damage, and immunity to bludgeoning, poison, and psychic damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/339/315/315/636252776771842998.jpeg",
        id: 102
    },
    {
        slug: "ettin",
        name: "Ettin",
        type: "large giant",
        alignment: "chaotic evil",
        ac: "12 (natural armor)",
        hp: {
            default: 85,
            rng: [
                10,
                10,
                30
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                21,
                5
            ],
            DEX: [
                8,
                -1
            ],
            CON: [
                17,
                3
            ],
            INT: [
                6,
                -2
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                8,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +4"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 14"
        ],
        languages: [
            "giant",
            "orc"
        ],
        challenge_lvl: "4",
        xp: 1100,
        traits_html: "<h3> Traits </h3><p><em><strong>Two Heads.</strong></em> The ettin has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious. </p><p><em><strong>Wakeful.</strong></em> When one of the ettin's heads is asleep, its other head is awake.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The ettin makes twoattack: one with its battleaxe and one with its morningstar. </p><p><em><strong>Battleaxe.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 14 (2d8 + 5) slashing damage. </p><p><em><strong>Morningstar.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 14 (2d8 + 5) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/341/1000/1000/636252776953634777.jpeg",
        id: 103
    },
    {
        slug: "fire_elemental",
        name: "Fire Elemental",
        type: "large elemental",
        alignment: "neutral",
        ac: "13",
        hp: {
            default: 102,
            rng: [
                12,
                10,
                36
            ]
        },
        speed: {
            base: 50,
            unit: "ft."
        },
        stats: {
            STR: [
                10,
                0
            ],
            DEX: [
                17,
                3
            ],
            CON: [
                16,
                3
            ],
            INT: [
                6,
                -2
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            "ignan"
        ],
        challenge_lvl: "5",
        xp: 1800,
        traits_html: "<h3> Traits </h3><p><em><strong>Fire Form.</strong></em> The elemental can move through a space as narrow as 1 inch wide without squeezing. A creature that touches the elemental or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage. In addition, the elemental can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 5 (1d10) fire damage and catches fire; until someone takes an action to douse the fire, the creature takes 5 (1d10) fire damage at the start of each of its turns. </p><p><em><strong>Illumination.</strong></em> The elemental sheds bright light in a 30-foot radius and dim light in an additional 30 feet. </p><p><em><strong>Water Susceptibility.</strong></em> For every 5 feet the elemental moves in water, or for every gallon of water splashed on it, it takes 1 cold damage.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The elemental makes two touch attacks. </p><p><em><strong>Touch.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 10 (2d6 + 3) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 5 (1d10) fire damage at the start of each of its turns.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/343/1000/1000/636252777098624896.jpeg",
        id: 104
    },
    {
        slug: "fire_giant",
        name: "Fire Giant",
        type: "huge giant",
        alignment: "lawful evil",
        ac: "18 (plate)",
        hp: {
            default: 162,
            rng: [
                13,
                12,
                78
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                25,
                7
            ],
            DEX: [
                9,
                -1
            ],
            CON: [
                23,
                6
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                14,
                2
            ],
            CHA: [
                13,
                1
            ]
        },
        saving_throws: [
            "DEX +3",
            "CON +10",
            "CHA +5"
        ],
        skills: [
            "athletics +11",
            "perception +6"
        ],
        senses: [
            "passive perception 16"
        ],
        languages: [
            "giant"
        ],
        challenge_lvl: "9",
        xp: 5000,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The giant makes two greatsword attacks. </p><p><em><strong>Greatsword.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 10 ft., one target. <em>Hit:</em> 28 (6d6 + 7) slashing damage. </p><p><em><strong>Rock.</strong></em> <em>Ranged Weapon Attack:</em> +11 to hit, range 60/240 ft., one target. <em>Hit:</em> 29 (4d10 + 7) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/357/1000/1000/636252778143767005.jpeg",
        id: 105
    },
    {
        slug: "flameskull",
        name: "Flameskull",
        type: "tiny undead",
        alignment: "neutral evil",
        ac: "13",
        hp: {
            default: 40,
            rng: [
                9,
                4,
                18
            ]
        },
        speed: {
            base: 0,
            unit: "ft."
        },
        stats: {
            STR: [
                1,
                -5
            ],
            DEX: [
                17,
                3
            ],
            CON: [
                14,
                2
            ],
            INT: [
                16,
                3
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                11,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "arcana +5",
            "perception +2"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 12"
        ],
        languages: [
            "common"
        ],
        challenge_lvl: "4",
        xp: 1100,
        traits_html: "<h3> Traits </h3><p><em><strong>Illumination.</strong></em> The flameskull sheds either dim light in a 15-foot radius, or bright light in a 15-foot radius and dim light for an additional 15 feet. It can switch between the options as an action.</p><p><em><strong>Magic Resistance.</strong></em> The flameskull has advantage on saving throws against spells and other magical effects.</p><p><em><strong>Rejuvenation.</strong></em> If the flameskull is destroyed, it regains all its hit points in 1 hour unless holy water is sprinkled on its remains or a <em>dispel magic</em> or <em>remove curse</em> spell is cast on them.</p><p><em><strong>Spellcasting.</strong></em> The flameskull is a 5th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 13, +5 to hit with spell attacks). It requires no somatic or material components to cast its spells. The flameskull has the following wizard spells prepared:</p><ul>\n<li>Cantrip (atwill: mage hand</li>\n<li>1st level (3slots: magic missile, shield</li>\n<li>2nd level (2slots: blur, flaming sphere</li>\n<li>3rd level (1slot: fireball</li>\n</ul><p> </p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The flameskull uses Fire Ray twice.</p><p><em><strong>Fire Ray.</strong></em> <em>Ranged Spell Attack:</em> +5 to hit, range 30 ft., one target. <em>Hit:</em> 10 (3d6) fire damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/14/487/315/315/636364325235118776.png",
        id: 106
    },
    {
        slug: "flesh_golem",
        name: "Flesh Golem",
        type: "medium construct",
        alignment: "neutral",
        ac: "9",
        hp: {
            default: 93,
            rng: [
                11,
                8,
                44
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                19,
                4
            ],
            DEX: [
                9,
                -1
            ],
            CON: [
                18,
                4
            ],
            INT: [
                6,
                -2
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            "understands the languages of its creator but can't speak"
        ],
        challenge_lvl: "5",
        xp: 1800,
        traits_html: "<h3> Traits </h3><p><em><strong>Berserk.</strong></em> Whenever the golem starts its turn with 40 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points.</p><p>The golem's creator, if within 60 feet of the berserk golem, can try to calm it by speaking firmly and persuasively. The golem must be able to hear its creator, who must take an action to make a DC 15 Charisma (Persuasion) check. If the check succeeds, the golem ceases being berserk. If it takes damage while still at 40 hit points or fewer, the golem might go berserk again. </p><p><em><strong>Aversion of Fire.</strong></em> If the golem takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn. </p><p><em><strong>Immutable Form.</strong></em> The golem is immune to any spell or effect that would alter its form.</p><p> <em><strong>Lightning Absorption.</strong></em> Whenever the golem is subjected to lightning damage, it takes no damage and instead regains a number of hit points equal to the lightning damage dealt.</p><p> <em><strong>Magic Resistance.</strong></em> The golem has advantage on saving throws against spells and other magical effects. </p><p><em><strong>Magic Weapons.</strong></em> The golem's weapon attacks are magical.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The golem makes two slam attacks. </p><p><em><strong>Slam.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d8 + 4) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/359/315/315/636252778311644574.jpeg",
        id: 107
    },
    {
        slug: "flying_snake",
        name: "Flying Snake",
        type: "tiny beast",
        alignment: "unaligned",
        ac: "14",
        hp: {
            default: 5,
            rng: [
                2,
                4,
                0
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                4,
                -3
            ],
            DEX: [
                18,
                4
            ],
            CON: [
                11,
                0
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "blindsight 10 ft.",
            " passive perception 11"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.125,
        xp: 25,
        traits_html: "<h3> Traits </h3><p><em><strong>Flyby.</strong></em> The snake doesn't provoke opportunity attacks when it flies out of an enemy's reach.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 1 piercing damage plus 7 (3d4) poison damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/517/1000/1000/636376319640572721.jpeg",
        id: 108
    },
    {
        slug: "flying_sword",
        name: "Flying Sword",
        type: "small construct",
        alignment: "unaligned",
        ac: "17 (natural armor)",
        hp: {
            default: 17,
            rng: [
                5,
                6,
                0
            ]
        },
        speed: {
            base: 0,
            unit: "ft."
        },
        stats: {
            STR: [
                12,
                1
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                11,
                0
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                5,
                -3
            ],
            CHA: [
                1,
                -5
            ]
        },
        saving_throws: [
            "DEX +4"
        ],
        skills: [
            ""
        ],
        senses: [
            "blindsight 60 ft.",
            " passive perception 7"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3><p><em><strong>Antimagic Susceptibility.</strong></em> The sword is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the sword must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute. </p><p><em><strong>False Appearance.</strong></em> While the sword remains motionless and isn't flying, it is indistinguishable from a normal sword.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Longsword.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d8 + 1) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/77/599/1000/1000/636473151106171093.png",
        id: 109
    },
    {
        slug: "frog",
        name: "Frog",
        type: "tiny beast",
        alignment: "unaligned",
        ac: "11",
        hp: {
            default: 1,
            rng: [
                1,
                4,
                -1
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                1,
                -5
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                8,
                -1
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                8,
                -1
            ],
            CHA: [
                3,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +1",
            "stealth +3"
        ],
        senses: [
            "darkvision 30 ft.",
            " passive perception 11"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The frog can breathe air and water. </p><p><em><strong>Standing Leap.</strong></em> The frog's long jump is up to 10 feet and its high jump is up to 5 feet, with or without a running start.</p>",
        actions_html: "<h3> ACTIONS </h3>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/523/315/315/636376321230650501.jpeg",
        id: 110
    },
    {
        slug: "frost_giant",
        name: "Frost Giant",
        type: "huge giant",
        alignment: "neutral evil",
        ac: "15 (patchwork armor)",
        hp: {
            default: 138,
            rng: [
                12,
                12,
                60
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                23,
                6
            ],
            DEX: [
                9,
                -1
            ],
            CON: [
                21,
                5
            ],
            INT: [
                9,
                -1
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                12,
                1
            ]
        },
        saving_throws: [
            "CON +8",
            "WIS +3",
            "CHA +4"
        ],
        skills: [
            "athletics +9",
            "perception +3"
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            "giant"
        ],
        challenge_lvl: "8",
        xp: 3900,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The giant makes two greataxe attacks. </p><p><em><strong>Greataxe.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft., one target. <em>Hit:</em> 25 (3d12 + 6) slashing damage. </p><p><em><strong>Rock.</strong></em> <em>Ranged Weapon Attack:</em> +9 to hit, range 60/240 ft., one target. <em>Hit:</em> 28 (4d10 + 6) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/405/1000/1000/636252786158646348.jpeg",
        id: 111
    },
    {
        slug: "gargoyle",
        name: "Gargoyle",
        type: "medium elemental",
        alignment: "chaotic evil",
        ac: "15 (natural armor)",
        hp: {
            default: 52,
            rng: [
                7,
                8,
                21
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                15,
                2
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                16,
                3
            ],
            INT: [
                6,
                -2
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            "terran"
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>False Appearance.</strong></em> While the gargoyle remains motionless, it is indistinguishable from an inanimate statue.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The gargoyle makes twoattack: one with its bite and one with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d6 + 2) piercing damage. </p><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d6 + 2) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/407/315/315/636252786295384889.jpeg",
        id: 112
    },
    {
        slug: "gelatinous_cube",
        name: "Gelatinous Cube",
        type: "large ooze",
        alignment: "unaligned",
        ac: "6",
        hp: {
            default: 84,
            rng: [
                8,
                10,
                40
            ]
        },
        speed: {
            base: 15,
            unit: "ft."
        },
        stats: {
            STR: [
                14,
                2
            ],
            DEX: [
                3,
                -4
            ],
            CON: [
                20,
                5
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                6,
                -2
            ],
            CHA: [
                1,
                -5
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "blindsight 60 ft.",
            " passive perception 8"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Ooze Cube.</strong></em> The cube takes up its entire space. Other creatures can enter the space, but a creature that does so is subjected to the cube's Engulf and has disadvantage on the saving throw. </p><p>Creatures inside the cube can be seen but have total cover.</p><p>A creature within 5 feet of the cube can take an action to pull a creature or object out of the cube. Doing so requires a successful DC 12 Strength check, and the creature making the attempt takes 10 (3d6) acid damage.</p><p>The cube can hold only one Large creature or up to four Medium or smaller creatures inside it at a time. </p><p><em><strong>Transparent.</strong></em> Even when the cube is in plain sight, it takes a successful DC 15 Wisdom (Perception) check to spot a cube that has neither moved nor attacked. A creature that tries to enter the cube's space while unaware of the cube is surprised by the cube.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Pseudopod.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one creature. <em>Hit:</em> 10 (3d6) acid damage. </p><p><em><strong>Engulf.</strong></em> The cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a DC 12 Dexterity saving throw.</p><p>On a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw.</p><p>On a failed save, the cube enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 21 (6d6) acid damage at the start of each of the cube's turns. When the cube moves, the engulfed creature moves with it.</p><p>An engulfed creature can try to escape by taking an action to make a DC 12 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the cube.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/409/1000/1000/636252786406028958.jpeg",
        id: 113
    },
    {
        slug: "ghast",
        name: "Ghast",
        type: "medium undead",
        alignment: "chaotic evil",
        ac: "13",
        hp: {
            default: 36,
            rng: [
                8,
                8,
                0
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                17,
                3
            ],
            CON: [
                10,
                0
            ],
            INT: [
                11,
                0
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                8,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            "common"
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Stench.</strong></em> Any creature that starts its turn within 5 feet of the ghast must succeed on a DC 10 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the ghast's Stench for 24 hours. </p><p><em><strong>Turning Defiance.</strong></em> The ghast and any ghouls within 30 feet of it have advantage on saving throws against effects that turn undead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one creature. <em>Hit:</em> 12 (2d8 + 3) piercing damage. </p><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 10 (2d6 + 3) slashing damage. If the target is a creature other than an undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/411/315/315/636252786516023032.jpeg",
        id: 114
    },
    {
        slug: "ghost",
        name: "Ghost",
        type: "medium undead",
        alignment: "any",
        ac: "11",
        hp: {
            default: 45,
            rng: [
                10,
                8,
                0
            ]
        },
        speed: {
            base: 0,
            unit: "ft."
        },
        stats: {
            STR: [
                7,
                -2
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                10,
                0
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                17,
                3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 11"
        ],
        languages: [
            "any languages it knew in life"
        ],
        challenge_lvl: "4",
        xp: 1100,
        traits_html: "<h3> Traits </h3><p><em><strong>Ethereal Sight.</strong></em> The ghost can see 60 feet into the Ethereal Plane when it is on the Material Plane, and vice versa.</p><p><em><strong>Incorporeal Movement.</strong></em> The ghost can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Withering Touch.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 17 (4d6 + 3) necrotic damage.</p><p><em><strong>Etherealness.</strong></em> The ghost enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can't affect or be affected by anything on the other plane.</p><p><em><strong>Horrifying Visage.</strong></em> Each non-undead creature within 60 feet of the ghost that can see it must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. If the save fails by 5 or more, the target also ages 1d4 \u00d7 10 years. A frightened target can repeat the saving throw at the end of each of its turns, ending the frightened condition on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to this ghost's Horrifying Visage for the next 24 hours. The aging effect can be reversed with a greater restoration spell, but only within 24 hours of it occurring.</p><p><em><strong>Possession (Recharge 6).</strong></em> One humanoid that the ghost can see within 5 feet of it must succeed on a DC 13 Charisma saving throw or be possessed by the ghost; the ghost then disappears, and the target is incapacitated and loses control of its body. The ghost now controls the body but doesn't deprive the target of awareness. The ghost can't be targeted by any attack, spell, or other effect, except ones that turn undead, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being charmed and frightened. It otherwise uses the possessed target's statistics, but doesn't gain access to the target's knowledge, class features, or proficiencies.</p><p>The possession lasts until the body drops to 0 hit points, the ghost ends it as a bonus action, or the ghost is turned or forced out by an effect like the dispel evil and good spell. When the possession ends, the ghost reappears in an unoccupied space within 5 feet of the body. The target is immune to this ghost's Possession for 24 hours after succeeding on the saving throw or after the possession ends.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/413/1000/1000/636252786639798307.jpeg",
        id: 115
    },
    {
        slug: "ghoul",
        name: "Ghoul",
        type: "medium undead",
        alignment: "chaotic evil",
        ac: "12",
        hp: {
            default: 22,
            rng: [
                5,
                8,
                0
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                13,
                1
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                10,
                0
            ],
            INT: [
                7,
                -2
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            "common"
        ],
        challenge_lvl: "1",
        xp: 200,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +2 to hit, reach 5 ft., one creature. <em>Hit:</em> 9 (2d6 + 2) piercing damage. </p><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (2d4 + 2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/14/483/315/315/636364323937041514.png",
        id: 116
    },
    {
        slug: "giant_ape",
        name: "Giant Ape",
        type: "huge beast",
        alignment: "unaligned",
        ac: "12",
        hp: {
            default: 157,
            rng: [
                15,
                12,
                60
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                23,
                6
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                18,
                4
            ],
            INT: [
                7,
                -2
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "athletics +9",
            "perception +4"
        ],
        senses: [
            "passive perception 14"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "7",
        xp: 2900,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The ape makes two fist attacks. </p><p><em><strong>Fist.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft., one target. <em>Hit:</em> 22 (3d10 + 6) bludgeoning damage. </p><p><em><strong>Rock.</strong></em> <em>Ranged Weapon Attack:</em> +9 to hit, range 50/100 ft., one target. <em>Hit:</em> 30 (7d6 + 6) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 117
    },
    {
        slug: "giant_badger",
        name: "Giant Badger",
        type: "medium beast",
        alignment: "unaligned",
        ac: "10",
        hp: {
            default: 13,
            rng: [
                2,
                8,
                4
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                13,
                1
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                15,
                2
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 30 ft.",
            " passive perception 11"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Smell.</strong></em> The badger has advantage on Wisdom (Perception) checks that rely on smell.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The badger makes twoattack: one with its bite and one with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 4 (1d6 + 1) piercing damage. </p><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (2d4 + 1) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/530/1000/1000/636376327839601860.jpeg",
        id: 118
    },
    {
        slug: "giant_bat",
        name: "Giant Bat",
        type: "large beast",
        alignment: "unaligned",
        ac: "13",
        hp: {
            default: 22,
            rng: [
                4,
                10,
                0
            ]
        },
        speed: {
            base: 10,
            unit: "ft."
        },
        stats: {
            STR: [
                15,
                2
            ],
            DEX: [
                16,
                3
            ],
            CON: [
                11,
                0
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "blindsight 60 ft.",
            " passive perception 11"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3><p><em><strong>Echolocation.</strong></em> The bat can't use its blindsight while deafened.</p><p><em><strong>Keen Hearing.</strong></em> The bat has advantage on Wisdom (Perception) checks that rely on hearing.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one creature. <em>Hit:</em> 5 (1d6 + 2) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 119
    },
    {
        slug: "giant_boar",
        name: "Giant Boar",
        type: "large beast",
        alignment: "unaligned",
        ac: "12 (natural armor)",
        hp: {
            default: 42,
            rng: [
                5,
                10,
                15
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                17,
                3
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                16,
                3
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                7,
                -2
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 8"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Charge.</strong></em> If the boar moves at least 20 feet straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone. </p><p><em><strong>Relentless (Recharges after a Short or Long Rest).</strong></em> If the boar takes 10 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Tusk.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 10 (2d6 + 3) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 120
    },
    {
        slug: "giant_centipede",
        name: "Giant Centipede",
        type: "small beast",
        alignment: "unaligned",
        ac: "13 (natural armor)",
        hp: {
            default: 4,
            rng: [
                1,
                6,
                1
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                5,
                -3
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                12,
                1
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                7,
                -2
            ],
            CHA: [
                3,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "blindsight 30 ft.",
            " passive perception 8"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one creature. <em>Hit:</em> 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or take 10 (3d6) poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 121
    },
    {
        slug: "giant_constrictor_snake",
        name: "Giant Constrictor Snake",
        type: "huge beast",
        alignment: "unaligned",
        ac: "12",
        hp: {
            default: 60,
            rng: [
                8,
                12,
                8
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                19,
                4
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                12,
                1
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                3,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +2"
        ],
        senses: [
            "blindsight 10 ft.",
            " passive perception 12"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 10 ft., one creature. <em>Hit:</em> 11 (2d6 + 4) piercing damage. </p><p><em><strong>Constrict.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one creature. <em>Hit:</em> 13 (2d8 + 4) bludgeoning damage, and the target is grappled (escape DC 16). Until this grapple ends, the creature is restrained, and the snake can't constrict another target.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 122
    },
    {
        slug: "giant_crab",
        name: "Giant Crab",
        type: "medium beast",
        alignment: "unaligned",
        ac: "15 (natural armor)",
        hp: {
            default: 13,
            rng: [
                3,
                8,
                0
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                13,
                1
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                11,
                0
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                9,
                -1
            ],
            CHA: [
                3,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "stealth +4"
        ],
        senses: [
            "blindsight 30 ft.",
            " passive perception 9"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.125,
        xp: 25,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The crab can breathe air and water.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 4 (1d6 + 1) bludgeoning damage, and the target is grappled (escape DC 11). The crab has two claws, each of which can grapple only one target.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 123
    },
    {
        slug: "giant_crocodile",
        name: "Giant Crocodile",
        type: "huge beast",
        alignment: "unaligned",
        ac: "14 (natural armor)",
        hp: {
            default: 85,
            rng: [
                9,
                12,
                27
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                21,
                5
            ],
            DEX: [
                9,
                -1
            ],
            CON: [
                17,
                3
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "stealth +5"
        ],
        senses: [
            "passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "5",
        xp: 1800,
        traits_html: "<h3> Traits </h3><p><em><strong>Hold Breath.</strong></em> The crocodile can hold its breath for 30 minutes.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The crocodile makes twoattack: one with its bite and one with its tail. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +8 to hit, reach 5 ft., one target. <em>Hit:</em> 21 (3d10 + 5) piercing damage, and the target is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the crocodile can't bite another target. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +8 to hit, reach 10 ft., one target not grappled by the crocodile. <em>Hit:</em> 14 (2d8 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 124
    },
    {
        slug: "giant_eagle",
        name: "Giant Eagle",
        type: "large beast",
        alignment: "neutral good",
        ac: "13",
        hp: {
            default: 26,
            rng: [
                4,
                10,
                4
            ]
        },
        speed: {
            base: 10,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                17,
                3
            ],
            CON: [
                13,
                1
            ],
            INT: [
                8,
                -1
            ],
            WIS: [
                14,
                2
            ],
            CHA: [
                10,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +4"
        ],
        senses: [
            "passive perception 14"
        ],
        languages: [
            "giant eagle  understands common and auran but can't speak them"
        ],
        challenge_lvl: "1",
        xp: 200,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Sight.</strong></em> The eagle has advantage on Wisdom (Perception) checks that rely on sight.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The eagle makes twoattack: one with its beak and one with its talons. </p><p><em><strong>Beak.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (1d6 + 3) piercing damage.</p><p> <em><strong>Talons.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 10 (2d6 + 3) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/894/315/315/636334286969931904.jpeg",
        id: 125
    },
    {
        slug: "giant_elk",
        name: "Giant Elk",
        type: "huge beast",
        alignment: "unaligned",
        ac: "14 (natural armor)",
        hp: {
            default: 42,
            rng: [
                5,
                12,
                10
            ]
        },
        speed: {
            base: 60,
            unit: "ft."
        },
        stats: {
            STR: [
                19,
                4
            ],
            DEX: [
                16,
                3
            ],
            CON: [
                14,
                2
            ],
            INT: [
                7,
                -2
            ],
            WIS: [
                14,
                2
            ],
            CHA: [
                10,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +4"
        ],
        senses: [
            "passive perception 14"
        ],
        languages: [
            "elvish",
            "giant elk  and sylvan but can't speak them"
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Charge.</strong></em> If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Ram.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 10 ft., one target. <em>Hit:</em> 11 (2d6 + 4) bludgeoning damage. </p><p><em><strong>Hooves.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one prone creature. <em>Hit:</em> 22 (4d8 + 4) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 126
    },
    {
        slug: "giant_fire_beetle",
        name: "Giant Fire Beetle",
        type: "small beast",
        alignment: "unaligned",
        ac: "13 (natural armor)",
        hp: {
            default: 4,
            rng: [
                1,
                6,
                1
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                8,
                -1
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                12,
                1
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                7,
                -2
            ],
            CHA: [
                3,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "blindsight 30 ft.",
            " passive perception 8"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3><p><em><strong>Illumination.</strong></em> The beetle sheds bright light in a 10-foot radius and dim light for an additional 10 feet.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +1 to hit, reach 5 ft., one target. <em>Hit:</em> 2 (1d6 \u2212 1) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/896/1000/1000/636334287498492864.jpeg",
        id: 127
    },
    {
        slug: "giant_frog",
        name: "Giant Frog",
        type: "medium beast",
        alignment: "unaligned",
        ac: "11",
        hp: {
            default: 18,
            rng: [
                4,
                8,
                0
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                12,
                1
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                11,
                0
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                3,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +2",
            "stealth +3"
        ],
        senses: [
            "darkvision 30 ft.",
            " passive perception 12"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The frog can breathe air and water. </p><p><em><strong>Standing Leap.</strong></em> The frog's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 4 (1d6 + 1) piercing damage, and the target is grappled (escape DC 11). Until this grapple ends, the target is restrained, and the frog can't bite another target. </p><p><em><strong>Swallow.</strong></em> The frog makes one bite attack against a Small or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the frog, and it takes 5 (2d4) acid damage at the start of each of the frog's turns. The frog can have only one target swallowed at a time. If the frog dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/521/1000/1000/636376321052503535.jpeg",
        id: 128
    },
    {
        slug: "giant_goat",
        name: "Giant Goat",
        type: "large beast",
        alignment: "unaligned",
        ac: "11 (natural armor)",
        hp: {
            default: 19,
            rng: [
                3,
                10,
                3
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                17,
                3
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                12,
                1
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 11"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3><p><em><strong>Charge.</strong></em> If the goat moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 5 (2d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone. </p><p><em><strong>Sure-Footed.</strong></em> The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Ram.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 8 (2d4 + 3) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 129
    },
    {
        slug: "giant_hyena",
        name: "Giant Hyena",
        type: "large beast",
        alignment: "unaligned",
        ac: "12",
        hp: {
            default: 45,
            rng: [
                6,
                10,
                12
            ]
        },
        speed: {
            base: 50,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                14,
                2
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3"
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "1",
        xp: 200,
        traits_html: "<h3> Traits </h3><p><em><strong>Rampage.</strong></em> When the hyena reduces a creature to 0 hit points with a melee attack on its turn, the hyena can take a bonus action to move up to half its speed and make a bite attack.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 10 (2d6 + 3) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 130
    },
    {
        slug: "giant_lizard",
        name: "Giant Lizard",
        type: "large beast",
        alignment: "unaligned",
        ac: "12 (natural armor)",
        hp: {
            default: 19,
            rng: [
                3,
                10,
                3
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                15,
                2
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                13,
                1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 30 ft.",
            " passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (1d8 + 2) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 131
    },
    {
        slug: "giant_octopus",
        name: "Giant Octopus",
        type: "large beast",
        alignment: "unaligned",
        ac: "11",
        hp: {
            default: 52,
            rng: [
                8,
                10,
                8
            ]
        },
        speed: {
            base: 10,
            unit: "ft."
        },
        stats: {
            STR: [
                17,
                3
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                13,
                1
            ],
            INT: [
                4,
                -3
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                4,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +4",
            "stealth +5"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 14"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "1",
        xp: 200,
        traits_html: "<h3> Traits </h3><p><em><strong>Hold Breath.</strong></em> While out of water, the octopus can hold its breath for 1 hour. </p><p><em><strong>Underwater Camouflage.</strong></em> The octopus has advantage on Dexterity (Stealth) checks made while underwater.</p><p><em><strong>Water Breathing.</strong></em> The octopus can breathe only underwater.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Tentacles.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 15 ft., one target. <em>Hit:</em> 10 (2d6 + 3) bludgeoning damage. If the target is a creature, it is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the octopus can't use its tentacles on another target. </p><p><em><strong>Ink Cloud (Recharges after a Short or Long Rest).</strong></em> A 20- foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/898/315/315/636334288003435302.jpeg",
        id: 132
    },
    {
        slug: "giant_owl",
        name: "Giant Owl",
        type: "large beast",
        alignment: "neutral",
        ac: "12",
        hp: {
            default: 19,
            rng: [
                3,
                10,
                3
            ]
        },
        speed: {
            base: 5,
            unit: "ft."
        },
        stats: {
            STR: [
                13,
                1
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                12,
                1
            ],
            INT: [
                8,
                -1
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                10,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +5",
            "stealth +4"
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 15"
        ],
        languages: [
            "elvish",
            "giant owl  and sylvan but can't speak them"
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3><p><em><strong>Flyby.</strong></em> The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach. </p><p><em><strong>Keen Hearing and Sight.</strong></em> The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Talons.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 8 (2d6 + 1) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/535/1000/1000/636376331788287090.jpeg",
        id: 133
    },
    {
        slug: "giant_poisonous_snake",
        name: "Giant Poisonous Snake",
        type: "medium beast",
        alignment: "unaligned",
        ac: "14",
        hp: {
            default: 11,
            rng: [
                2,
                8,
                2
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                10,
                0
            ],
            DEX: [
                18,
                4
            ],
            CON: [
                13,
                1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                3,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +2"
        ],
        senses: [
            "blindsight 10 ft.",
            " passive perception 12"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 10 ft., one target. <em>Hit:</em> 6 (1d4 + 4) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 134
    },
    {
        slug: "giant_rat",
        name: "Giant Rat",
        type: "small beast",
        alignment: "unaligned",
        ac: "12",
        hp: {
            default: 7,
            rng: [
                2,
                6,
                0
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                7,
                -2
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                11,
                0
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                4,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.125,
        xp: 25,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Smell.</strong></em> The rat has advantage on Wisdom (Perception) checks that rely on smell. </p><p><em><strong>Pack Tactics.</strong></em> The rat has advantage on an attack roll against a creature if at least one of the rat's allies is within 5 feet of the creature and the ally isn't incapacitated.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit<em: 4 (1d4 + 2) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/538/1000/1000/636376332197953299.jpeg",
        id: 135
    },
    {
        slug: "giant_scorpion",
        name: "Giant Scorpion",
        type: "large beast",
        alignment: "unaligned",
        ac: "15 (natural armor)",
        hp: {
            default: 52,
            rng: [
                7,
                10,
                14
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                15,
                2
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                15,
                2
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                9,
                -1
            ],
            CHA: [
                3,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "blindsight 60 ft.",
            " passive perception 9"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "3",
        xp: 700,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The scorpion makes threeattack: two with its claws and one with its sting. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 12). The scorpion has two claws, each of which can grapple only one target. </p><p><em><strong>Sting.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one creature. <em>Hit:</em> 7 (1d10 + 2) piercing damage, and the target must make a DC 12 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 136
    },
    {
        slug: "giant_sea_horse",
        name: "Giant Sea Horse",
        type: "large beast",
        alignment: "unaligned",
        ac: "13 (natural armor)",
        hp: {
            default: 16,
            rng: [
                3,
                10,
                0
            ]
        },
        speed: {
            base: 0,
            unit: "ft."
        },
        stats: {
            STR: [
                12,
                1
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                11,
                0
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 11"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3><p><em><strong>Charge.</strong></em> If the sea horse moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. It the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone. </p><p><em><strong>Water Breathing.</strong></em> The sea horse can breathe only underwater.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Ram.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 4 (1d6 + 1) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 137
    },
    {
        slug: "giant_shark",
        name: "Giant Shark",
        type: "huge beast",
        alignment: "unaligned",
        ac: "13 (natural armor)",
        hp: {
            default: 126,
            rng: [
                11,
                12,
                55
            ]
        },
        speed: {
            base: 0,
            unit: "ft."
        },
        stats: {
            STR: [
                23,
                6
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                21,
                5
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3"
        ],
        senses: [
            "blindsight 60 ft.",
            " passive perception 13"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "5",
        xp: 1800,
        traits_html: "<h3> Traits </h3><p><em><strong>Blood Frenzy.</strong></em> The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points. </p><p><em><strong>Water Breathing.</strong></em> The shark can breathe only underwater.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 5 ft., one target. <em>Hit:</em> 22 (3d10 + 6) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 138
    },
    {
        slug: "giant_spider",
        name: "Giant Spider",
        type: "large beast",
        alignment: "unaligned",
        ac: "14 (natural armor)",
        hp: {
            default: 26,
            rng: [
                4,
                10,
                4
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                14,
                2
            ],
            DEX: [
                16,
                3
            ],
            CON: [
                12,
                1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                4,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "stealth +7"
        ],
        senses: [
            "blindsight 10 ft.",
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "1",
        xp: 200,
        traits_html: "<h3> Traits </h3><p><em><strong>Spider Climb.</strong></em> The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check. </p><p><em><strong>Web Sense.</strong></em> While in contact with a web, the spider knows the exact location of any other creature in contact with the same web. </p><p><em><strong>Web Walker.</strong></em> The spider ignores movement restrictions caused by webbing.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one creature. <em>Hit:</em> 7 (1d8 + 3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way. </p><p><em><strong>Web (Recharge 5\u20136).</strong></em> <em>Ranged Weapon Attack:</em> +5 to hit, range 30/60 ft., one creature. <em>Hit:</em> The target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage).</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/323/1000/1000/636252775648743317.jpeg",
        id: 139
    },
    {
        slug: "giant_toad",
        name: "Giant Toad",
        type: "large beast",
        alignment: "unaligned",
        ac: "11",
        hp: {
            default: 39,
            rng: [
                6,
                10,
                6
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                15,
                2
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                13,
                1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                3,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 30 ft.",
            " passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "1",
        xp: 200,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The toad can breathe air and water.</p><p><em><strong>Standing Leap.</strong></em> The toad's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d10 + 2) piercing damage plus 5 (1d10) poison damage, and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the toad can't bite another target. </p><p><em><strong>Swallow.</strong></em> The toad makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time. If the toad dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 140
    },
    {
        slug: "giant_vulture",
        name: "Giant Vulture",
        type: "large beast",
        alignment: "neutral",
        ac: "10",
        hp: {
            default: 22,
            rng: [
                3,
                10,
                6
            ]
        },
        speed: {
            base: 10,
            unit: "ft."
        },
        stats: {
            STR: [
                15,
                2
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                15,
                2
            ],
            INT: [
                6,
                -2
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3"
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            "understands common but can't speak  it"
        ],
        challenge_lvl: "1",
        xp: 200,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Sight and Smell.</strong></em> The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell.</p><p><em><strong>Pack Tactics.</strong></em> The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 feet of the creature and the ally isn't incapacitated.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The vulture makes twoattack: one with its beak and one with its talons. </p><p><em><strong>Beak.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (2d4 + 2) piercing damage. </p><p><em><strong>Talons.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 9 (2d6 + 2) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 141
    },
    {
        slug: "giant_wasp",
        name: "Giant Wasp",
        type: "medium beast",
        alignment: "unaligned",
        ac: "12",
        hp: {
            default: 13,
            rng: [
                3,
                8,
                0
            ]
        },
        speed: {
            base: 10,
            unit: "ft."
        },
        stats: {
            STR: [
                10,
                0
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                10,
                0
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                3,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Sting.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one creature. <em>Hit:</em> 5 (1d6 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 142
    },
    {
        slug: "giant_weasel",
        name: "Giant Weasel",
        type: "medium beast",
        alignment: "unaligned",
        ac: "13",
        hp: {
            default: 9,
            rng: [
                2,
                8,
                0
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                11,
                0
            ],
            DEX: [
                16,
                3
            ],
            CON: [
                10,
                0
            ],
            INT: [
                4,
                -3
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3",
            "stealth +5"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 13"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.125,
        xp: 25,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Hearing and Smell.</strong></em> The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d4 + 3) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 143
    },
    {
        slug: "giant_wolf_spider",
        name: "Giant Wolf Spider",
        type: "medium beast",
        alignment: "unaligned",
        ac: "13",
        hp: {
            default: 11,
            rng: [
                2,
                8,
                2
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                12,
                1
            ],
            DEX: [
                16,
                3
            ],
            CON: [
                13,
                1
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                4,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3",
            "stealth +7"
        ],
        senses: [
            "blindsight 10 ft.",
            "darkvision 60 ft.",
            " passive perception 13"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3><p><em><strong>Spider Climb.</strong></em> The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.</p><p><em><strong>Web Sense.</strong></em> While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.</p><p><em><strong>Web Walker.</strong></em> The spider ignores movement restrictions caused by webbing.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one creature. <em>Hit:</em> 4 (1d6 + 1) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 7 (2d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 144
    },
    {
        slug: "gibbering_mouther",
        name: "Gibbering Mouther",
        type: "medium aberration",
        alignment: "neutral",
        ac: "9",
        hp: {
            default: 67,
            rng: [
                9,
                8,
                27
            ]
        },
        speed: {
            base: 10,
            unit: "ft."
        },
        stats: {
            STR: [
                10,
                0
            ],
            DEX: [
                8,
                -1
            ],
            CON: [
                16,
                3
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Aberrant Ground.</strong></em> The ground in a 10-foot radius around the mouther is doughlike difficult terrain. Each creature that starts its turn in that area must succeed on a DC 10 Strength saving throw or have its speed reduced to 0 until the start of its next turn. </p><p><em><strong>Gibbering.</strong></em> The mouther babbles incoherently while it can see any creature and isn't incapacitated. Each creature that starts its turn within 20 feet of the mouther and can hear the gibbering must succeed on a DC 10 Wisdom saving throw. On a failure, the creature can't take reactions until the start of its next turn and rolls a d8 to determine what it does during its turn. On a 1 to 4, the creature does nothing. On a 5 or 6, the creature takes no action or bonus action and uses all its movement to move in a randomly determined direction. On a 7 or 8, the creature makes a melee attack against a randomly determined creature within its reach or does nothing if it can't make such an attack.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The gibbering mouther makes one bite attack and, if it can, uses its Blinding Spittle. </p><p><em><strong>Bite.</strong></em>. <em>Melee Weapon Attack:</em> +2 to hit, reach 5 ft., one creature. <em>Hit:</em> 17 (5d6) piercing damage. If the target is Medium or smaller, it must succeed on a DC 10 Strength saving throw or be knocked prone. If the target is killed by this damage, it is absorbed into the mouther. </p><p><em><strong>Blinding Spittle (Recharge 5\u20136).</strong></em> The mouther spits a chemical glob at a point it can see within 15 feet of it. The glob explodes in a blinding flash of light on impact. Each creature within 5 feet of the flash must succeed on a DC 13 Dexterity saving throw or be blinded until the end of the mouther's next turn.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/333/315/315/636252776252001529.jpeg",
        id: 145
    },
    {
        slug: "glabrezu",
        name: "Glabrezu",
        type: "large fiend",
        alignment: "chaotic evil",
        ac: "17 (natural armor)",
        hp: {
            default: 157,
            rng: [
                15,
                10,
                75
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                20,
                5
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                21,
                5
            ],
            INT: [
                19,
                4
            ],
            WIS: [
                17,
                3
            ],
            CHA: [
                16,
                3
            ]
        },
        saving_throws: [
            "STR +9",
            "CON +9",
            "WIS +7",
            "CHA +7"
        ],
        skills: [
            ""
        ],
        senses: [
            "truesight 120 ft.",
            " passive perception 13"
        ],
        languages: [
            "abyssal",
            "telepathy 120 ft."
        ],
        challenge_lvl: "9",
        xp: 5000,
        traits_html: "<h3> Traits </h3><p><em><strong>Innate Spellcasting.</strong></em> The glabrezu's spellcasting ability is Intelligence (spell save DC 16). The glabrezu can innately cast the following spells, requiring no materialcomponent: </p><p>Atwil: darkness, detect magic, dispel magic </p><p>1/dayeac: confusion, fly, power word stun </p><p><em><strong>Magic Resistance.</strong></em> The glabrezu has advantage on saving throws against spells and other magical effects.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The glabrezu makes fourattack: two with its pincers and two with its fists. Alternatively, it makes two attacks with its pincers and casts one spell. </p><p><em><strong>Pincer.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft., one target. <em>Hit:</em> 16 (2d10 + 5) bludgeoning damage. If the target is a Medium or smaller creature, it is grappled (escape DC 15). The glabrezu has two pincers, each of which can grapple only one target. </p><p><em><strong>Fist.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (2d4 + 2) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/337/315/315/636252776677682465.jpeg",
        id: 146
    },
    {
        slug: "gladiator",
        name: "Gladiator",
        type: "medium humanoid",
        alignment: "any",
        ac: "16 (studded leather, shield)",
        hp: {
            default: 112,
            rng: [
                15,
                8,
                45
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                16,
                3
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                15,
                2
            ]
        },
        saving_throws: [
            "STR +7",
            "DEX +5",
            "CON +6"
        ],
        skills: [
            "athletics +10",
            "intimidation +5"
        ],
        senses: [
            "passive perception 11"
        ],
        languages: [
            "any one language (usually common)"
        ],
        challenge_lvl: "5",
        xp: 1800,
        traits_html: "<h3> Traits </h3><p><em><strong>Brave.</strong></em> The gladiator has advantage on saving throws against being frightened. </p><p><em><strong>Brute.</strong></em> A melee weapon deals one extra die of its damage when the gladiator hits with it (included in the attack).</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The gladiator makes three melee attacks or two ranged attacks. </p><p><em><strong>Spear.</strong></em> <em>Melee or <em>Ranged Weapon Attack:</em></em> +7 to hit, reach 5 ft. and range 20/60 ft., one target. <em>Hit:</em> 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack. </p><p><em><strong>Shield Bash.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one creature. <em>Hit:</em> 9 (2d4 + 4) bludgeoning damage. If the target is a Medium or smaller creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
        id: 147
    },
    {
        slug: "gnoll",
        name: "Gnoll",
        type: "medium humanoid",
        alignment: "chaotic evil",
        ac: "15 (hide armor, shield)",
        hp: {
            default: 22,
            rng: [
                5,
                8,
                0
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                14,
                2
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                11,
                0
            ],
            INT: [
                6,
                -2
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            "gnoll"
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3><p><em><strong>Rampage.</strong></em> When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one creature. <em>Hit:</em> 4 (1d4 + 2) piercing damage. </p><p><em><strong>Spear.</strong></em> <em>Melee or <em>Ranged Weapon Attack:</em></em> +4 to hit, reach 5 ft. or range 20/60 ft., one target. <em>Hit:</em> 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack. </p><p><em><strong>Longbow.</strong></em> <em>Ranged Weapon Attack:</em> +3 to hit, range 150/600 ft., one target. <em>Hit:</em> 5 (1d8 + 1) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/345/1000/1000/636252777224997611.jpeg",
        id: 148
    },
    {
        slug: "goat",
        name: "Goat",
        type: "medium beast",
        alignment: "unaligned",
        ac: "10",
        hp: {
            default: 4,
            rng: [
                1,
                8,
                0
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                12,
                1
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                11,
                0
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3><p><em><strong>Charge.</strong></em> If the goat moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 2 (1d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 10 Strength saving throw or be knocked prone. </p><p><em><strong>Sure-Footed.</strong></em> The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Ram.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 3 (1d4 + 1) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 149
    },
    {
        slug: "goblin",
        name: "Goblin",
        type: "small humanoid",
        alignment: "neutral evil",
        ac: "15 (leather armor, shield)",
        hp: {
            default: 7,
            rng: [
                2,
                6,
                0
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                8,
                -1
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                10,
                0
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                8,
                -1
            ],
            CHA: [
                8,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "stealth +6"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 9"
        ],
        languages: [
            "common",
            "goblin"
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3><p><em><strong>Nimble Escape.</strong></em> The goblin can take the Disengage or Hide action as a bonus action on each of its turns.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Scimitar.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d6 + 2) slashing damage. </p><p><em><strong>Shortbow.</strong></em> <em>Ranged Weapon Attack:</em> +4 to hit, range 80/320 ft., one target. <em>Hit:</em> 5 (1d6 + 2) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/351/315/315/636252777818652432.jpeg",
        id: 150
    },
    {
        slug: "gold_dragon_wyrmling",
        name: "Gold Dragon Wyrmling",
        type: "medium dragon",
        alignment: "lawful good",
        ac: "17 natural armor",
        hp: {
            default: 60,
            rng: [
                8,
                8,
                24
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                19,
                4
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                17,
                3
            ],
            INT: [
                14,
                2
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                16,
                3
            ]
        },
        saving_throws: [
            "DEX +4",
            "CON +5",
            "WIS +2",
            "CHA +5"
        ],
        skills: [
            "perception +4",
            "stealth +4"
        ],
        senses: [
            "blindsight 10 ft.",
            "darkvision 60 ft.",
            " passive perception 14"
        ],
        languages: [
            "draconic"
        ],
        challenge_lvl: "3",
        xp: 700,
        traits_html: "<h3> Traits </h3><p><strong>Amphibious<strong: The dragon can breathe air and water.</p>",
        actions_html: "<h3> ACTIONS </h3><p><strong>Bite<strong: <em>Melee Weapon Attack<em: +6 to hit, reach 5 ft., one target. <em>Hit<em: 9 (1d10 + 4) piercing damage.</p><p><strong>Breath Weapons (Recharge 5\u20136)<strong: The dragon uses one of the following breath weapons.</p><p><strong>Fire Breath<strong: The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 22 (4d10) fire damage on a failed save, or half as much damage on a successful one.</p><p><strong>Weakening Breath<strong: The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/516/315/315/636285466148376212.jpeg",
        id: 151
    },
    {
        slug: "gorgon",
        name: "Gorgon",
        type: "large monstrosity",
        alignment: "unaligned",
        ac: "19 (natural armor)",
        hp: {
            default: 114,
            rng: [
                12,
                10,
                48
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                20,
                5
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                18,
                4
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +4"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 14"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "5",
        xp: 1800,
        traits_html: "<h3> Traits </h3><p><em><strong>Trampling Charge.</strong></em> If the gorgon moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 16 Strength saving throw or be knocked prone. If the target is prone, the gorgon can make one attack with its hooves against it as a bonus action.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Gore.</strong></em> <em>Melee Weapon Attack:</em> +8 to hit, reach 5 ft., one target. <em>Hit:</em> 18 (2d12 + 5) piercing damage.</p><p><em><strong>Hooves.</strong></em> <em>Melee Weapon Attack:</em> +8 to hit, reach 5 ft., one target. <em>Hit:</em> 16 (2d10 + 5) bludgeoning damage. </p><p><em><strong>Petrifying Breath (Recharge 5\u20136).</strong></em> The gorgon exhales petrifying gas in a 30-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw. On a failed save, a target begins to turn to stone and is restrained. The restrained target must repeat the saving throw at the end of its next turn. On a success, the effect ends on the target. On a failure, the target is petrified until freed by the greater restoration spell or other magic.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/355/315/315/636252778125099430.jpeg",
        id: 152
    },
    {
        slug: "gray_ooze",
        name: "Gray Ooze",
        type: "medium ooze",
        alignment: "unaligned",
        ac: "8",
        hp: {
            default: 22,
            rng: [
                3,
                8,
                9
            ]
        },
        speed: {
            base: 10,
            unit: "ft."
        },
        stats: {
            STR: [
                12,
                1
            ],
            DEX: [
                6,
                -2
            ],
            CON: [
                16,
                3
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                6,
                -2
            ],
            CHA: [
                2,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "stealth +2"
        ],
        senses: [
            "blindsight 60 ft.",
            " passive perception 8"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3><p><em><strong>Amorphous.</strong></em> The ooze can move through a space as narrow as 1 inch wide without squeezing. </p><p><em><strong>Corrode Metal.</strong></em> Any nonmagical weapon made of metal that hits the ooze corrodes. After dealing damage, the weapon takes a permanent and cumulative \u22121 penalty to damage rolls. If its penalty drops to \u22125, the weapon is destroyed. Nonmagical ammunition made of metal that hits the ooze is destroyed after dealing damage.</p><p>The ooze can eat through 2-inch-thick, nonmagical metal in 1 round. </p><p><em><strong>False Appearance.</strong></em> While the ooze remains motionless, it is indistinguishable from an oily pool or wet rock.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Pseudopod.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 4 (1d6 + 1) bludgeoning damage plus 7 (2d6) acid damage, and if the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative \u22121 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/658/ooze.jpg",
        id: 153
    },
    {
        slug: "green_dragon_wyrmling",
        name: "Green Dragon Wyrmling",
        type: "medium dragon",
        alignment: "lawful evil",
        ac: "17 (natural armor)",
        hp: {
            default: 38,
            rng: [
                7,
                8,
                7
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                15,
                2
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                13,
                1
            ],
            INT: [
                14,
                2
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                13,
                1
            ]
        },
        saving_throws: [
            "DEX +3",
            "CON +3",
            "WIS +2",
            "CHA +3"
        ],
        skills: [
            "perception +4",
            "stealth +3"
        ],
        senses: [
            "blindsight 10 ft.",
            "darkvision 60 ft.",
            " passive perception 14"
        ],
        languages: [
            "draconic"
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The dragon can breathe air and water.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d10 + 2) piercing damage plus 3 (1d6) poison damage. </p><p><em><strong>Poison Breath (Recharge 5\u20136).</strong></em> The dragon exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 11 Constitution saving throw, taking 21 (6d6) poison damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/363/315/315/636252778639163748.jpeg",
        id: 154
    },
    {
        slug: "green_hag",
        name: "Green Hag",
        type: "medium fey",
        alignment: "neutral evil",
        ac: "17 (natural armor)",
        hp: {
            default: 82,
            rng: [
                11,
                8,
                33
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                16,
                3
            ],
            INT: [
                13,
                1
            ],
            WIS: [
                14,
                2
            ],
            CHA: [
                14,
                2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "arcana +3",
            "deception +4",
            "perception +4",
            "stealth +3"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 14"
        ],
        languages: [
            "common",
            "draconic",
            "sylvan"
        ],
        challenge_lvl: "3",
        xp: 700,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The hag can breathe air and water. </p><p><em><strong>Innate Spellcasting.</strong></em> The hag's innate spellcasting ability is Charisma (spell save DC 12). She can innately cast the following spells, requiring no materialcomponent: </p><p>Atwil: dancing lights, minor illusion, vicious mockery </p><p><em><strong>Mimicry.</strong></em> The hag can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d8 + 4) slashing damage. </p><p><em><strong>Illusory Appearance.</strong></em> The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like another creature of her general size and humanoid shape. The illusion ends if the hag takes a bonus action to end it or if she dies.</p><p>The changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have smooth skin, but someone touching her would feel her rough flesh. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 20 Intelligence (Investigation) check to discern that the hag is disguised. </p><p><em><strong>Invisible Passage.</strong></em> The hag magically turns invisible until she attacks or casts a spell, or until her concentration ends (as if concentrating on a spell). While invisible, she leaves no physical evidence of her passage, so she can be tracked only by magic. Any equipment she wears or carries is invisible with her.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/365/315/315/636252778948574879.jpeg",
        id: 155
    },
    {
        slug: "grick",
        name: "Grick",
        type: "medium monstrosity",
        alignment: "neutral",
        ac: "14 (natural armor)",
        hp: {
            default: 27,
            rng: [
                6,
                8,
                0
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                14,
                2
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                11,
                0
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                14,
                2
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 12"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Stone Camouflage.</strong></em> The grick has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The grick makes one attack with its tentacles. If that attack hits, the grick can make one beak attack against the same target. </p><p><em><strong>Tentacles.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 9 (2d6 + 2) slashing damage. </p><p><em><strong>Beak.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d6 + 2) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/369/1000/1000/636252779341924439.jpeg",
        id: 156
    },
    {
        slug: "griffon",
        name: "Griffon",
        type: "large monstrosity",
        alignment: "unaligned",
        ac: "12",
        hp: {
            default: 59,
            rng: [
                7,
                10,
                21
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                16,
                3
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                8,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +5"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 15"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Sight.</strong></em> The griffon has advantage on Wisdom (Perception) checks that rely on sight.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The griffon makes twoattack: one with its beak and one with its claws. </p><p><em><strong>Beak.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 8 (1d8 + 4) piercing damage. </p><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 11 (2d6 + 4) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/373/315/315/636252779693862725.jpeg",
        id: 157
    },
    {
        slug: "grimlock",
        name: "Grimlock",
        type: "medium humanoid",
        alignment: "neutral evil",
        ac: "11",
        hp: {
            default: 11,
            rng: [
                2,
                8,
                2
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                12,
                1
            ],
            INT: [
                9,
                -1
            ],
            WIS: [
                8,
                -1
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "athletics +5",
            "perception +3",
            "stealth +3"
        ],
        senses: [
            "blindsight 30 ft.",
            " passive perception 13"
        ],
        languages: [
            "undercommon"
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3><p><em><strong>Blind Senses</strong></em>. The grimlock can't use its blindsight while deafened and unable to smell. </p><p><em><strong>Keen Hearing and Smell.</strong></em> The grimlock has advantage on Wisdom (Perception) checks that rely on hearing or smell. </p><p><em><strong>Stone Camouflage.</strong></em> The grimlock has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Spiked Bone Club.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d4 + 3) bludgeoning damage plus 2 (1d4) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/375/315/315/636252780049813181.jpeg",
        id: 158
    },
    {
        slug: "guard",
        name: "Guard",
        type: "medium humanoid",
        alignment: "any",
        ac: "16 (chain shirt, shield)",
        hp: {
            default: 11,
            rng: [
                2,
                8,
                2
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                13,
                1
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                12,
                1
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                10,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +2"
        ],
        senses: [
            "passive perception 12"
        ],
        languages: [
            "any one language (usually common)"
        ],
        challenge_lvl: 0.125,
        xp: 25,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Spear.</strong></em> <em>Melee or <em>Ranged Weapon Attack:</em></em> +3 to hit, reach 5 ft. or range 20/60 ft., one target. <em>Hit:</em> 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
        id: 159
    },
    {
        slug: "guardian_naga",
        name: "Guardian Naga",
        type: "large monstrosity",
        alignment: "lawful good",
        ac: "18 (natural armor)",
        hp: {
            default: 127,
            rng: [
                15,
                10,
                45
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                19,
                4
            ],
            DEX: [
                18,
                4
            ],
            CON: [
                16,
                3
            ],
            INT: [
                16,
                3
            ],
            WIS: [
                19,
                4
            ],
            CHA: [
                18,
                4
            ]
        },
        saving_throws: [
            "DEX +8",
            "CON +7",
            "INT +7",
            "WIS +8",
            "CHA +8"
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 14"
        ],
        languages: [
            "celestial",
            "common"
        ],
        challenge_lvl: "10",
        xp: 5900,
        traits_html: "<h3> Traits </h3><p><em><strong>Rejuvenation.</strong></em> If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning. </p><p><em><strong>Spellcasting.</strong></em> The naga is an 11th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 16, +8 to hit with spell attacks), and it needs only verbal components to cast its spells. It has the following cleric spellsprepare: </p><p>Cantrips (atwill: mending, sacred flame, thaumaturgy </p><p>1st level (4slots: command, cure wounds, shield of faith </p><p>2nd level (3slots: calm emotions, hold person </p><p>3rd level (3slots: bestow curse, clairvoyance </p><p>4th level (3slots: banishment, freedom of movement </p><p>5th level (2slots: flame strike, geas </p><p>6th level (1slot: true seeing</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +8 to hit, reach 10 ft., one creature. <em>Hit:</em> 8 (1d8 + 4) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one. </p><p><em><strong>Spit Poison.</strong></em> <em>Ranged Weapon Attack:</em> +8 to hit, range 15/30 ft., one creature. <em>Hit:</em> The target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/377/315/315/636252780447421771.jpeg",
        id: 160
    },
    {
        slug: "gynosphinx",
        name: "Gynosphinx",
        type: "large monstrosity",
        alignment: "lawful neutral",
        ac: "17 (natural armor)",
        hp: {
            default: 136,
            rng: [
                16,
                10,
                48
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                16,
                3
            ],
            INT: [
                18,
                4
            ],
            WIS: [
                18,
                4
            ],
            CHA: [
                18,
                4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "arcana +12",
            "history +12",
            "perception +8",
            "religion +8"
        ],
        senses: [
            "truesight 120 ft.",
            " passive perception 18"
        ],
        languages: [
            "common",
            "sphinx"
        ],
        challenge_lvl: "11",
        xp: 7200,
        traits_html: "<h3> Traits </h3><p><em><strong>Inscrutable.</strong></em> The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage. </p><p><em><strong>Magic Weapons.</strong></em> The sphinx's weapon attacks are magical. </p><p><em><strong>Spellcasting.</strong></em> The sphinx is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 16, +8 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following wizard spellsprepare: </p><p>Cantrips (atwill: mage hand, minor illusion, prestidigitation </p><p>1st level (4slots: detect magic, identify, shield </p><p>2nd level (3slots: darkness, locate object, suggestion </p><p>3rd level (3slots: dispel magic, remove curse, tongues </p><p>4th level (3slots: banishment, greater invisibility </p><p>5th level (1slot: legend lore</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The sphinx makes two claw attacks. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +8 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d8 + 4) slashing damage.</p><h3> LEGENDARY ACTIONS </h3><p>The sphinx can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The sphinx regains spent legendary actions at the start of its turn. </p><p><em><strong>Claw Attack.</strong></em> The sphinx makes one claw attack. </p><p><em><strong>Teleport (Costs 2 Actions).</strong></em> The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see. </p><p><em><strong>Cast a Spell (Costs 3 Actions).</strong></em> The sphinx casts a spell from its list of prepared spells, using a spell slot as normal.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/383/315/315/636252780786457550.jpeg",
        id: 161
    },
    {
        slug: "half_red_dragon_veteran",
        name: "Half-Red Dragon Veteran",
        type: "medium humanoid",
        alignment: "any",
        ac: "18 (plate)",
        hp: {
            default: 65,
            rng: [
                10,
                8,
                20
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                14,
                2
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                10,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "athletics +5",
            "perception +2"
        ],
        senses: [
            "blindsight 10 ft.",
            "darkvision 60 ft.",
            " passive perception 12"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "5",
        xp: 1800,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack. </p><p><em><strong>Longsword.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands. </p><p><em><strong>Shortsword.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (1d6 + 3) piercing damage. </p><p><em><strong>Heavy Crossbow.</strong></em> <em>Ranged Weapon Attack:</em> +3 to hit, range 100/400 ft., one target. <em>Hit:</em> 6 (1d10 + 1) piercing damage. </p><p><em><strong>Fire Breath (Recharge 5\u20136).</strong></em> The veteran exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/387/315/315/636252781353903793.jpeg",
        id: 162
    },
    {
        slug: "harpy",
        name: "Harpy",
        type: "medium monstrosity",
        alignment: "chaotic evil",
        ac: "11",
        hp: {
            default: 38,
            rng: [
                7,
                8,
                7
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                12,
                1
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                12,
                1
            ],
            INT: [
                7,
                -2
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                13,
                1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 10"
        ],
        languages: [
            "common"
        ],
        challenge_lvl: "1",
        xp: 200,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The harpy makes twoattack: one with its claws and one with its club. </p><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (2d4 + 1) slashing damage. </p><p><em><strong>Club.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 3 (1d4 + 1) bludgeoning damage. </p><p><em><strong>Luring Song.</strong></em> The harpy sings a magical melody. Every humanoid and giant within 300 feet of the harpy that can hear the song must succeed on a DC 11 Wisdom saving throw or be charmed until the song ends. The harpy must take a bonus action on its subsequent turns to continue singing. It can stop singing at any time. The song ends if the harpy is incapacitated.</p><p>While charmed by the harpy, a target is incapacitated and ignores the songs of other harpies. If the charmed target is more than 5 feet away from the harpy, the target must move on its turn toward the harpy by the most direct route, trying to get within 5 feet. It doesn't avoid opportunity attacks, but before moving into damaging terrain, such as lava or a pit, and whenever it takes damage from a source other than the harpy, the target can repeat the saving throw. A charmed target can also repeat the saving throw at the end of each of its turns. If the saving throw is successful, the effect ends on it.</p><p>A target that successfully saves is immune to this harpy's song for the next 24 hours.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/391/315/315/636252781955908234.jpeg",
        id: 163
    },
    {
        slug: "hawk",
        name: "Hawk",
        type: "tiny beast",
        alignment: "unaligned",
        ac: "13",
        hp: {
            default: 1,
            rng: [
                1,
                4,
                -1
            ]
        },
        speed: {
            base: 10,
            unit: "ft."
        },
        stats: {
            STR: [
                5,
                -3
            ],
            DEX: [
                16,
                3
            ],
            CON: [
                8,
                -1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                14,
                2
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +4"
        ],
        senses: [
            "passive perception 14"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Sight.</strong></em> The hawk has advantage on Wisdom (Perception) checks that rely on sight.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Talons.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 1 slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/900/1000/1000/636334288270143064.jpeg",
        id: 164
    },
    {
        slug: "hell_hound",
        name: "Hell Hound",
        type: "medium fiend",
        alignment: "lawful evil",
        ac: "15 (natural armor)",
        hp: {
            default: 45,
            rng: [
                7,
                8,
                14
            ]
        },
        speed: {
            base: 50,
            unit: "ft."
        },
        stats: {
            STR: [
                17,
                3
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                14,
                2
            ],
            INT: [
                6,
                -2
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +5"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 15"
        ],
        languages: [
            "understands infernal but can't speak it"
        ],
        challenge_lvl: "3",
        xp: 700,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Hearing and Smell.</strong></em> The hound has advantage on Wisdom (Perception) checks that rely on hearing or smell. </p><p><em><strong>Pack Tactics.</strong></em> The hound has advantage on an attack roll against a creature if at least one of the hound's allies is within 5 feet of the creature and the ally isn't incapacitated.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d8 + 3) piercing damage plus 7 (2d6) fire damage. </p><p><em><strong>Fire Breath (Recharge 5\u20136).</strong></em> The hound exhales fire in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/393/315/315/636252782461361426.jpeg",
        id: 165
    },
    {
        slug: "hezrou",
        name: "Hezrou",
        type: "large fiend",
        alignment: "chaotic evil",
        ac: "16 (natural armor)",
        hp: {
            default: 136,
            rng: [
                13,
                10,
                65
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                19,
                4
            ],
            DEX: [
                17,
                3
            ],
            CON: [
                20,
                5
            ],
            INT: [
                5,
                -3
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                13,
                1
            ]
        },
        saving_throws: [
            "STR +7",
            "CON +8",
            "WIS +4"
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 11"
        ],
        languages: [
            "abyssal",
            "telepathy 120 ft."
        ],
        challenge_lvl: "8",
        xp: 3900,
        traits_html: "<h3> Traits </h3><p><em><strong>Magic Resistance.</strong></em> The hezrou has advantage on saving throws against spells and other magical effects. </p><p><em><strong>Stench.</strong></em> Any creature that starts its turn within 10 feet of the hezrou must succeed on a DC 14 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the hezrou's stench for 24 hours.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The hezrou makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 15 (2d10 + 4) piercing damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 11 (2d6 + 4) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/321/315/315/636252775562934524.jpeg",
        id: 166
    },
    {
        slug: "hill_giant",
        name: "Hill Giant",
        type: "huge giant",
        alignment: "chaotic evil",
        ac: "13 (natural armor)",
        hp: {
            default: 105,
            rng: [
                10,
                12,
                40
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                21,
                5
            ],
            DEX: [
                8,
                -1
            ],
            CON: [
                19,
                4
            ],
            INT: [
                5,
                -3
            ],
            WIS: [
                9,
                -1
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +2"
        ],
        senses: [
            "passive perception 12"
        ],
        languages: [
            "giant"
        ],
        challenge_lvl: "5",
        xp: 1800,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The giant makes two greatclub attacks. </p><p><em><strong>Greatclub.</strong></em> <em>Melee Weapon Attack:</em> +8 to hit, reach 10 ft., one target. <em>Hit:</em> 18 (3d8 + 5) bludgeoning damage. </p><p><em><strong>Rock.</strong></em> <em>Ranged Weapon Attack:</em> +8 to hit, range 60/240 ft., one target. <em>Hit:</em> 21 (3d10 + 5) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/331/315/315/636252776196140305.jpeg",
        id: 167
    },
    {
        slug: "hippogriff",
        name: "Hippogriff",
        type: "large monstrosity",
        alignment: "unaligned",
        ac: "11",
        hp: {
            default: 19,
            rng: [
                3,
                10,
                3
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                17,
                3
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                13,
                1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                8,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +5"
        ],
        senses: [
            "passive perception 15"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "1",
        xp: 200,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Sight.</strong></em> The hippogriff has advantage on Wisdom (Perception) checks that rely on sight.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The hippogriff makes twoattack: one with its beak and one with its claws. </p><p><em><strong>Beak.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 8 (1d10 + 3) piercing damage. </p><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 10 (2d6 + 3) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/335/315/315/636252776578605778.jpeg",
        id: 168
    },
    {
        slug: "hobgoblin",
        name: "Hobgoblin",
        type: "medium humanoid",
        alignment: "lawful evil",
        ac: "18 (chain mail, shield)",
        hp: {
            default: 11,
            rng: [
                2,
                8,
                2
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                13,
                1
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                12,
                1
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                9,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            "common",
            "goblin"
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3><p><em><strong>Martial Advantage.</strong></em> Once per turn, the hobgoblin can deal an extra 7 (2d6) damage to a creature it hits with a weapon attack if that creature is within 5 feet of an ally of the hobgoblin that isn't incapacitated.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Longsword.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d8 + 1) slashing damage, or 6 (1d10 + 1) slashing damage if used with two hands. </p><p><em><strong>Longbow.</strong></em> <em>Ranged Weapon Attack:</em> +3 to hit, range 150/600 ft., one target. <em>Hit:</em> 5 (1d8 + 1) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/389/315/315/636252781431932597.jpeg",
        id: 169
    },
    {
        slug: "homunculus",
        name: "Homunculus",
        type: "tiny construct",
        alignment: "neutral",
        ac: "13 (natural armor)",
        hp: {
            default: 5,
            rng: [
                2,
                4,
                0
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                4,
                -3
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                11,
                0
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            "understands the languages of its creator but can't speak"
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3><p><em><strong>Telepathic Bond.</strong></em> While the homunculus is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one creature. <em>Hit:</em> 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is instead poisoned for 5 (1d10) minutes and unconscious while poisoned in this way.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/18/287/315/315/636379803928245506.jpeg",
        id: 170
    },
    {
        slug: "horned_devil",
        name: "Horned Devil",
        type: "large fiend",
        alignment: "lawful evil",
        ac: "18 (natural armor)",
        hp: {
            default: 148,
            rng: [
                17,
                10,
                55
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                22,
                6
            ],
            DEX: [
                17,
                3
            ],
            CON: [
                21,
                5
            ],
            INT: [
                12,
                1
            ],
            WIS: [
                16,
                3
            ],
            CHA: [
                17,
                3
            ]
        },
        saving_throws: [
            "STR +10",
            "DEX +7",
            "WIS +7",
            "CHA +7"
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 13"
        ],
        languages: [
            "infernal",
            "telepathy 120 ft."
        ],
        challenge_lvl: "11",
        xp: 7200,
        traits_html: "<h3> Traits </h3><p><em><strong>Devil's Sight.</strong></em> Magical darkness doesn't impede the devil's darkvision. </p><p><em><strong>Magic Resistance.</strong></em> The devil has advantage on saving throws against spells and other magical effects.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The devil makes three meleeattack: two with its fork and one with its tail. It can use Hurl Flame in place of any melee attack. </p><p><em><strong>Fork.</strong></em> <em>Melee Weapon Attack:</em> +10 to hit, reach 10 ft., one target. <em>Hit:</em> 15 (2d8 + 6) piercing damage. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +10 to hit, reach 10 ft., one target. <em>Hit:</em> 10 (1d8 + 6) piercing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 17 Constitution saving throw or lose 10 (3d6) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 10 (3d6). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing. </p><p><em><strong>Hurl Flame.</strong></em> Ranged SpellAttac: +7 to hit, range 150 ft., one target. <em>Hit:</em> 14 (4d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/347/315/315/636252777255936976.jpeg",
        id: 171
    },
    {
        slug: "hunter_shark",
        name: "Hunter Shark",
        type: "large beast",
        alignment: "unaligned",
        ac: "12 (natural armor)",
        hp: {
            default: 45,
            rng: [
                6,
                10,
                12
            ]
        },
        speed: {
            base: 0,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                15,
                2
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                4,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +2"
        ],
        senses: [
            "blindsight 30 ft.",
            " passive perception 12"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Blood Frenzy.</strong></em> The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points. </p><p><em><strong>Water Breathing.</strong></em> The shark can breathe only underwater.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d8 + 4) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 172
    },
    {
        slug: "hydra",
        name: "Hydra",
        type: "huge monstrosity",
        alignment: "unaligned",
        ac: "15 (natural armor)",
        hp: {
            default: 172,
            rng: [
                15,
                12,
                75
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                20,
                5
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                20,
                5
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +6"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 16"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "8",
        xp: 3900,
        traits_html: "<h3> Traits </h3><p><em><strong>Hold Breath.</strong></em> The hydra can hold its breath for 1 hour. </p><p><em><strong>Multiple Heads.</strong></em> The hydra has five heads. While it has more than one head, the hydra has advantage on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.</p><p>Whenever the hydra takes 25 or more damage in a single turn, one of its heads dies. If all its heads die, the hydra dies.</p><p>At the end of its turn, it grows two heads for each of its heads that died since its last turn, unless it has taken fire damage since its last turn. The hydra regains 10 hit points for each head regrown in this way. </p><p><em><strong>Reactive Heads.</strong></em> For each head the hydra has beyond one, it gets an extra reaction that can be used only for opportunity attacks. </p><p><em><strong>Wakeful.</strong></em> While the hydra sleeps, at least one of its heads is awake.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The hydra makes as many bite attacks as it has heads. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +8 to hit, reach 10 ft., one target. <em>Hit:</em> 10 (1d10 + 5) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/349/315/315/636252777669218389.jpeg",
        id: 173
    },
    {
        slug: "hyena",
        name: "Hyena",
        type: "medium beast",
        alignment: "unaligned",
        ac: "11",
        hp: {
            default: 5,
            rng: [
                1,
                8,
                1
            ]
        },
        speed: {
            base: 50,
            unit: "ft."
        },
        stats: {
            STR: [
                11,
                0
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                12,
                1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3"
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3><p><em><strong>Pack Tactics.</strong></em> The hyena has advantage on an attack roll against a creature if at least one of the hyena's allies is within 5 feet of the creature and the ally isn't incapacitated.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +2 to hit, reach 5 ft., one target. <em>Hit:</em> 3 (1d6) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/902/1000/1000/636334288674955736.jpeg",
        id: 174
    },
    {
        slug: "ice_devil",
        name: "Ice Devil",
        type: "large fiend",
        alignment: "lawful evil",
        ac: "18 (natural armor)",
        hp: {
            default: 180,
            rng: [
                19,
                10,
                76
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                21,
                5
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                18,
                4
            ],
            INT: [
                18,
                4
            ],
            WIS: [
                15,
                2
            ],
            CHA: [
                18,
                4
            ]
        },
        saving_throws: [
            "DEX +7",
            "CON +9",
            "WIS +7",
            "CHA +9"
        ],
        skills: [
            ""
        ],
        senses: [
            "blindsight 60 ft.",
            "darkvision 120 ft.",
            " passive perception 12"
        ],
        languages: [
            "infernal",
            "telepathy 120 ft."
        ],
        challenge_lvl: "14",
        xp: 11500,
        traits_html: "<h3> Traits </h3><p><em><strong>Devil's Sight.</strong></em> Magical darkness doesn't impede the devil's darkvision. </p><p><em><strong>Magic Resistance.</strong></em> The devil has advantage on saving throws against spells and other magical effects.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The devil makes threeattack: one with its bite, one with its claws, and one with its tail. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +10 to hit, reach 5 ft., one target. <em>Hit:</em> 12 (2d6 + 5) piercing damage plus 10 (3d6) cold damage. </p><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +10 to hit, reach 5 ft., one target. <em>Hit:</em> 10 (2d4 + 5) slashing damage plus 10 (3d6) cold damage. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +10 to hit, reach 10 ft., one target. <em>Hit:</em> 12 (2d6 + 5) bludgeoning damage plus 10 (3d6) cold damage. </p><p><em><strong>Wall of Ice (Recharge 6).</strong></em> The devil magically forms an opaque wall of ice on a solid surface it can see within 60 feet of it. The wall is 1 foot thick and up to 30 feet long and 10 feet high, or it's a hemispherical dome up to 20 feet in diameter.</p><p>When the wall appears, each creature in its space is pushed out of it by the shortest route. The creature chooses which side of the wall to end up on, unless the creature is incapacitated. The creature then makes a DC 17 Dexterity saving throw, taking 35 (10d6) cold damage on a failed save, or half as much damage on a successful one.</p><p>The wall lasts for 1 minute or until the devil is incapacitated or dies. The wall can be damaged and breached; each 10-\u00adfoot section has AC 5, 30 hit points, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage. If a section is destroyed, it leaves behind a sheet of frigid air in the space the wall occupied. Whenever a creature finishes moving through the frigid air on a turn, willingly or otherwise, the creature must make a DC 17 Constitution saving throw, taking 17 (5d6) cold damage on a failed save, or half as much damage on a successful one. The frigid air dissipates when the rest of the wall vanishes.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/353/315/315/636252777966974765.jpeg",
        id: 175
    },
    {
        slug: "ice_mephit",
        name: "Ice Mephit",
        type: "small elemental",
        alignment: "neutral evil",
        ac: "11",
        hp: {
            default: 21,
            rng: [
                6,
                6,
                0
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                7,
                -2
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                10,
                0
            ],
            INT: [
                9,
                -1
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                12,
                1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +2",
            "stealth +3"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 12"
        ],
        languages: [
            "aquan",
            "auran"
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3><p><em><strong>Death Burst.</strong></em> When the mephit dies, it explodes in a burst of jagged ice. Each creature within 5 feet of it must make a DC 10 Dexterity saving throw, taking 4 (1d8) slashing damage on a failed save, or half as much damage on a successful one. </p><p><em><strong>False Appearance.</strong></em> While the mephit remains motionless, it is indistinguishable from an ordinary shard of ice. </p><p><em><strong>Innate Spellcasting.</strong></em>(1/Day). The mephit can innately cast fog cloud, requiring no material components. Its innate spellcasting ability is Charisma.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one creature. <em>Hit:</em> 3 (1d4 + 1) slashing damage plus 2 (1d4) cold damage. </p><p><em><strong>Frost Breath (Recharge 6).</strong></em> The mephit exhales a 15- foot cone of cold air. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 5 (2d4) cold damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/18/290/315/315/636379804105821214.jpeg",
        id: 176
    },
    {
        slug: "imp",
        name: "Imp",
        type: "tiny fiend",
        alignment: "lawful evil",
        ac: "13",
        hp: {
            default: 10,
            rng: [
                3,
                4,
                3
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                6,
                -2
            ],
            DEX: [
                17,
                3
            ],
            CON: [
                13,
                1
            ],
            INT: [
                11,
                0
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                14,
                2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "deception +4",
            "insight +3",
            "persuasion +4",
            "stealth +5"
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 11"
        ],
        languages: [
            "common",
            "infernal"
        ],
        challenge_lvl: "1",
        xp: 200,
        traits_html: "<h3> Traits </h3><p><em><strong>Shapechanger.</strong></em> The imp can use its action to polymorph into a beast form that resembles a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb 20 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies. </p><p><em><strong>Devil's Sight.</strong></em> Magical darkness doesn't impede the imp's darkvision. </p><p><em><strong>Magic Resistance.</strong></em> The imp has advantage on saving throws against spells and other magical effects.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Sting (Bite in Beast Form).</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d4 + 3) piercing damage, and the target must make on a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one. </p><p><em><strong>Invisibility.</strong></em> The imp magically turns invisible until it attacks or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/361/315/315/636252778560366227.jpeg",
        id: 177
    },
    {
        slug: "invisible_stalker",
        name: "Invisible Stalker",
        type: "medium elemental",
        alignment: "neutral",
        ac: "14",
        hp: {
            default: 104,
            rng: [
                16,
                8,
                32
            ]
        },
        speed: {
            base: 50,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                19,
                4
            ],
            CON: [
                14,
                2
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                15,
                2
            ],
            CHA: [
                11,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +8",
            "stealth +10"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 18"
        ],
        languages: [
            "auran  understands common but doesn't speak it"
        ],
        challenge_lvl: "6",
        xp: 2300,
        traits_html: "<h3> Traits </h3><p><em><strong>Invisibility.</strong></em> The stalker is invisible. </p><p><em><strong>Faultless Tracker.</strong></em> The stalker is given a quarry by its summoner. The stalker knows the direction and distance to its quarry as long as the two of them are on the same plane of existence. The stalker also knows the location of its summoner.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The stalker makes two slam attacks. </p><p><em><strong>Slam.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 10 (2d6 + 3) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/367/315/315/636252779159282339.jpeg",
        id: 178
    },
    {
        slug: "iron_golem",
        name: "Iron Golem",
        type: "large construct",
        alignment: "unaligned",
        ac: "20 (natural armor)",
        hp: {
            default: 210,
            rng: [
                20,
                10,
                100
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                24,
                7
            ],
            DEX: [
                9,
                -1
            ],
            CON: [
                20,
                5
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                1,
                -5
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 10"
        ],
        languages: [
            "understands the languages of its creator but can't speak"
        ],
        challenge_lvl: "16",
        xp: 15000,
        traits_html: "<h3> Traits </h3><p><em><strong>Fire Absorption.</strong></em> Whenever the golem is subjected to fire damage, it takes no damage and instead regains a number of hit points equal to the fire damage dealt. </p><p><em><strong>Immutable Form.</strong></em> The golem is immune to any spell or effect that would alter its form. </p><p><em><strong>Magic Resistance.</strong></em> The golem has advantage on saving throws against spells and other magical effects. </p><p><em><strong>Magic Weapons.</strong></em> The golem's weapon attacks are magical.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The golem makes two melee attacks. </p><p><em><strong>Slam.</strong></em> <em>Melee Weapon Attack:</em> +13 to hit, reach 5 ft., one target. <em>Hit:</em> 20 (3d8 + 7) bludgeoning damage. </p><p><em><strong>Sword.</strong></em> <em>Melee Weapon Attack:</em> +13 to hit, reach 10 ft., one target. <em>Hit:</em> 23 (3d10 + 7) slashing damage. </p><p><em><strong>Poison Breath (Recharge 6).</strong></em> The golem exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/371/315/315/636252779460570049.jpeg",
        id: 179
    },
    {
        slug: "jackal",
        name: "Jackal",
        type: "small beast",
        alignment: "unaligned",
        ac: "12",
        hp: {
            default: 3,
            rng: [
                1,
                6,
                0
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                8,
                -1
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                11,
                0
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3"
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Hearing and Smell.</strong></em> The jackal has advantage on Wisdom (Perception) checks that rely on hearing or smell. </p><p><em><strong>Pack Tactics.</strong></em> The jackal has advantage on an attack roll against a creature if at least one of the jackal's allies is within 5 feet of the creature and the ally isn't incapacitated.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +1 to hit, reach 5 ft., one target. <em>Hit:</em> 1 (1d4 \u2013 1) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 180
    },
    {
        slug: "killer_whale",
        name: "Killer Whale",
        type: "huge beast",
        alignment: "unaligned",
        ac: "12 (natural armor)",
        hp: {
            default: 90,
            rng: [
                12,
                12,
                12
            ]
        },
        speed: {
            base: 0,
            unit: "ft."
        },
        stats: {
            STR: [
                19,
                4
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                13,
                1
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3"
        ],
        senses: [
            "blindsight 120 ft.",
            " passive perception 13"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "3",
        xp: 700,
        traits_html: "<h3> Traits </h3><p><em><strong>Echolocation.</strong></em> The whale can't use its blindsight while deafened. </p><p><em><strong>Hold Breath.</strong></em> The whale can hold its breath for 30 minutes. </p><p><em><strong>Keen Hearing.</strong></em> The whale has advantage on Wisdom (Perception) checks that rely on hearing.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 21 (5d6 + 4) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 181
    },
    {
        slug: "knight",
        name: "Knight",
        type: "medium humanoid",
        alignment: "any",
        ac: "18 (plate)",
        hp: {
            default: 52,
            rng: [
                8,
                8,
                16
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                14,
                2
            ],
            INT: [
                11,
                0
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                15,
                2
            ]
        },
        saving_throws: [
            "CON +4",
            "WIS +2"
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 10"
        ],
        languages: [
            "any one language (usually common)"
        ],
        challenge_lvl: "3",
        xp: 700,
        traits_html: "<h3> Traits </h3><p><em><strong>Brave.</strong></em> The knight has advantage on saving throws against being frightened.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The knight makes two melee attacks. </p><p><em><strong>Greatsword.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 10 (2d6 + 3) slashing damage. </p><p><em><strong>Heavy Crossbow.</strong></em> <em>Ranged Weapon Attack:</em> +2 to hit, range 100/400 ft., one target. <em>Hit:</em> 5 (1d10) piercing damage. </p><p><em><strong>Leadership (Recharges after a Short or Long Rest).</strong></em> For 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is incapacitated.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
        id: 182
    },
    {
        slug: "kobold",
        name: "Kobold",
        type: "small humanoid",
        alignment: "lawful evil",
        ac: "12",
        hp: {
            default: 5,
            rng: [
                2,
                6,
                -2
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                7,
                -2
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                9,
                -1
            ],
            INT: [
                8,
                -1
            ],
            WIS: [
                7,
                -2
            ],
            CHA: [
                8,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 8"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: 0.125,
        xp: 25,
        traits_html: "<h3> Traits </h3><p><em><strong>Sunlight Sensitivity.</strong></em> While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight. </p><p><em><strong>Pack Tactics.</strong></em> The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't incapacitated.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Dagger.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 4 (1d4 + 2) piercing damage. </p><p><em><strong>Sling.</strong></em> <em>Ranged Weapon Attack:</em> +4 to hit, range 30/120 ft., one target. <em>Hit:</em> 4 (1d4 + 2) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/379/1000/1000/636252780450300625.jpeg",
        id: 183
    },
    {
        slug: "kraken",
        name: "Kraken",
        type: "gargantuan monstrosity",
        alignment: "chaotic evil",
        ac: "18 (natural armor)",
        hp: {
            default: 472,
            rng: [
                27,
                20,
                189
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                30,
                10
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                25,
                7
            ],
            INT: [
                22,
                6
            ],
            WIS: [
                18,
                4
            ],
            CHA: [
                20,
                5
            ]
        },
        saving_throws: [
            "STR +17",
            "DEX +7",
            "CON +14",
            "INT +13",
            "WIS +11"
        ],
        skills: [
            ""
        ],
        senses: [
            "truesight 120 ft.",
            " passive perception 14"
        ],
        languages: [
            "abyssal",
            "celestial",
            "infernal",
            "primordial",
            "telepathy 120 ft. but can't speak"
        ],
        challenge_lvl: "23",
        xp: 50000,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The kraken can breathe air and water. </p><p><em><strong>Freedom of Movement.</strong></em> The kraken ignores difficult terrain, and magical effects can't reduce its speed or cause it to be restrained. It can spend 5 feet of movement to escape from nonmagical restraints or being grappled. </p><p><em><strong>Siege Monster.</strong></em> The kraken deals double damage to objects and structures.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The kraken makes three tentacle attacks, each of which it can replace with one use of Fling. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +17 to hit, reach 5 ft., one target. <em>Hit:</em> 23 (3d8 + 10) piercing damage. If the target is a Large or smaller creature grappled by the kraken, that creature is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the kraken, and it takes 42 (12d6) acid damage at the start of each of the kraken's turns.</p><p>If the kraken takes 50 damage or more on a single turn from a creature inside it, the kraken must succeed on a DC 25 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the kraken. If the kraken dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone. </p><p><em><strong>Tentacle.</strong></em> <em>Melee Weapon Attack:</em> +17 to hit, reach 30 ft., one target. <em>Hit:</em> 20 (3d6 + 10) bludgeoning damage, and the target is grappled (escape DC 18). Until this grapple ends, the target is restrained. The kraken has ten tentacles, each of which can grapple one target. </p><p><em><strong>Fling.</strong></em> One Large or smaller object held or creature grappled by the kraken is thrown up to 60 feet in a random direction and knocked prone. If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 18 Dexterity saving throw or take the same damage and be knocked prone. </p><p><em><strong>Lightning Storm.</strong></em> The kraken magically creates three bolts of lightning, each of which can strike a target the kraken can see within 120 feet of it. A target must make a DC 23 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one.</p><h3> LEGENDARY ACTIONS </h3><p>The kraken can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The kraken regains spent legendary actions at the start of its turn. </p><p><em><strong>Tentacle Attack or Fling.</strong></em> The kraken makes one tentacle attack or uses its Fling. </p><p><em><strong>Lightning Storm (Costs 2 Actions).</strong></em> The kraken uses Lightning Storm. </p><p><em><strong>Ink Cloud (Costs 3 Actions).</strong></em> While underwater, the kraken expels an ink cloud in a 60-foot radius. The cloud spreads around corners, and that area is heavily obscured to creatures other than the kraken. Each creature other than the kraken that ends its turn there must succeed on a DC 23 Constitution saving throw, taking 16 (3d10) poison damage on a failed save, or half as much damage on a successful one. A strong current disperses the cloud, which otherwise disappears at the end of the kraken's next turn.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/381/1000/1000/636252780680163799.jpeg",
        id: 184
    },
    {
        slug: "lamia",
        name: "Lamia",
        type: "large monstrosity",
        alignment: "chaotic evil",
        ac: "13 (natural armor)",
        hp: {
            default: 97,
            rng: [
                13,
                10,
                26
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                15,
                2
            ],
            INT: [
                14,
                2
            ],
            WIS: [
                15,
                2
            ],
            CHA: [
                16,
                3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "deception +7",
            "insight +4",
            "stealth +3"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 12"
        ],
        languages: [
            "abyssal",
            "common"
        ],
        challenge_lvl: "4",
        xp: 1100,
        traits_html: "<h3> Traits </h3><p><em><strong>Innate Spellcasting.</strong></em> The lamia's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast the following spells, requiring no material components. </p><p>Atwil: disguise self (any humanoid form), major image </p><p>3/dayeac: charm person, mirror image, scrying, suggestion </p><p>1da: geas</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The lamia makes twoattack: one with its claws and one with its dagger or Intoxicating Touch. </p><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 14 (2d10 + 3) slashing damage. Dagger. <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d4 + 3) piercing damage. </p><p><em><strong>Intoxicating Touch.</strong></em> Melee SpellAttac: +5 to hit, reach 5 ft., one creature. <em>Hit:</em> The target is magically cursed for 1 hour. Until the curse ends, the target has disadvantage on Wisdom saving throws and all ability checks.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/385/315/315/636252780906064244.jpeg",
        id: 185
    },
    {
        slug: "lemure",
        name: "Lemure",
        type: "medium fiend",
        alignment: "lawful evil",
        ac: "7",
        hp: {
            default: 13,
            rng: [
                3,
                8,
                0
            ]
        },
        speed: {
            base: 15,
            unit: "ft."
        },
        stats: {
            STR: [
                10,
                0
            ],
            DEX: [
                5,
                -3
            ],
            CON: [
                11,
                0
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                3,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 10"
        ],
        languages: [
            "understands infernal but can't speak it"
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3><p><em><strong>Devil's Sight.</strong></em> Magical darkness doesn't impede the lemure's darkvision. </p><p><em><strong>Hellish Rejuvenation.</strong></em> A lemure that dies in the Nine Hells comes back to life with all its hit points in 1d10 days unless it is killed by a good-aligned creature with a bless spell cast on that creature or its remains are sprinkled with holy water.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Fist.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 2 (1d4) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/149/1000/1000/636252758704142054.jpeg",
        id: 186
    },
    {
        slug: "lich",
        name: "Lich",
        type: "medium undead",
        alignment: "any evil alignment",
        ac: "17 (natural armor)",
        hp: {
            default: 135,
            rng: [
                18,
                8,
                54
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                11,
                0
            ],
            DEX: [
                16,
                3
            ],
            CON: [
                16,
                3
            ],
            INT: [
                20,
                5
            ],
            WIS: [
                14,
                2
            ],
            CHA: [
                16,
                3
            ]
        },
        saving_throws: [
            "CON +10",
            "INT +12",
            "WIS +9"
        ],
        skills: [
            "arcana +18",
            "history +12",
            "insight +9",
            "perception +9"
        ],
        senses: [
            "truesight 120 ft.",
            " passive perception 19"
        ],
        languages: [
            "common plus up to five other languages"
        ],
        challenge_lvl: "21",
        xp: 33000,
        traits_html: "<h3> Traits </h3><p><em><strong>Legendary Resistance (3/Day).</strong></em> If the lich fails a saving throw, it can choose to succeed instead. </p><p><em><strong>Rejuvenation.</strong></em> If it has a phylactery, a destroyed lich gains a new body in 1d10 days, regaining all its hit points and becoming active again. The new body appears within 5 feet of the phylactery. </p><p><em><strong>Spellcasting.</strong></em> The lich is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). The lich has the following wizard spellsprepare: </p><p>Cantrips (atwill: mage hand, prestidigitation, ray of frost </p><p>1st level (4slots: detect magic, magic missile, shield, thunderwave </p><p>2nd level (3slots: acid arrow, detect thoughts, invisibility, mirror image </p><p>3rd level (3slots: animate dead, counterspell, dispel magic, fireball </p><p>4th level (3slots: blight, dimension door </p><p>5th level (3slots: cloudkill, scrying </p><p>6th level (1slot: disintegrate, globe of invulnerability </p><p>7th level (1slot: finger of death, plane shift </p><p>8th level (1slot: dominate monster, power word stun </p><p>9th level (1slot: power word kill </p><p><em><strong>Turn Resistance.</strong></em> The lich has advantage on saving throws against any effect that turns undead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Paralyzing Touch.</strong></em> Melee SpellAttac: +12 to hit, reach 5 ft., one creature. <em>Hit:</em> 10 (3d6) cold damage. The target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p><h3> LEGENDARY ACTIONS </h3><p>The lich can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The lich regains spent legendary actions at the start of its turn. </p><p><em><strong>Cantrip.</strong></em> The lich casts a cantrip. </p><p><em><strong>Paralyzing Touch (Costs 2 Actions).</strong></em> The lich uses its Paralyzing Touch. </p><p><em><strong>Frightening Gaze (Costs 2 Actions).</strong></em> The lich fixes its gaze on one creature it can see within 10 feet of it. The target must succeed on a DC 18 Wisdom saving throw against this magic or become frightened for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the lich's gaze for the next 24 hours. </p><p><em><strong>Disrupt Life (Costs 3 Actions).</strong></em> Each living creature within 20 feet of the lich must make a DC 18 Constitution saving throw against this magic, taking 21 (6d6) necrotic damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/165/1000/1000/636252760084366499.jpeg",
        id: 187
    },
    {
        slug: "lion",
        name: "Lion",
        type: "large beast",
        alignment: "unaligned",
        ac: "12",
        hp: {
            default: 26,
            rng: [
                4,
                10,
                4
            ]
        },
        speed: {
            base: 50,
            unit: "ft."
        },
        stats: {
            STR: [
                17,
                3
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                13,
                1
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                8,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3",
            "stealth +6"
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "1",
        xp: 200,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Smell.</strong></em> The lion has advantage on Wisdom (Perception) checks that rely on smell. </p><p><em><strong>Pack Tactics</strong><em: The <span>lion</span> has advantage on an attack roll against a creature if at least one of the <span>lion</span>\u2019s allies is within 5 feet of the creature and the ally isn\u2019t i<span>ncapacitated</span>.</p><p><em><strong>Pounce.</strong></em> If the lion moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the lion can make one bite attack against it as a bonus action. </p><p><em><strong>Running Leap.</strong></em> With a 10-foot running start, the lion can long jump up to 25 feet.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d8 + 3) piercing damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (1d6 + 3) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 188
    },
    {
        slug: "lizard",
        name: "Lizard",
        type: "tiny beast",
        alignment: "unaligned",
        ac: "10",
        hp: {
            default: 2,
            rng: [
                1,
                4,
                0
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                2,
                -4
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                10,
                0
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                8,
                -1
            ],
            CHA: [
                3,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 30 ft.",
            " passive perception 9"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +0 to hit, reach 5 ft., one target. <em>Hit:</em> 1 piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 189
    },
    {
        slug: "lizardfolk",
        name: "Lizardfolk",
        type: "medium humanoid",
        alignment: "neutral",
        ac: "15 (natural armor, shield)",
        hp: {
            default: 22,
            rng: [
                4,
                8,
                4
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                15,
                2
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                13,
                1
            ],
            INT: [
                7,
                -2
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3",
            "stealth +2",
            "survival +5"
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            "draconic"
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3><p><em><strong>Hold Breath.</strong></em> The lizardfolk can hold its breath for 15 minutes.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The lizardfolk makes two melee attacks, each one with a different weapon. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d6 + 2) piercing damage. </p><p><em><strong>Heavy Club.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d6 + 2) bludgeoning damage. </p><p><em><strong>Javelin.</strong></em> <em>Melee or <em>Ranged Weapon Attack:</em></em> +4 to hit, reach 5 ft. or range 30/120 ft., one target. <em>Hit:</em> 5 (1d6 + 2) piercing damage. </p><p><em><strong>Spiked Shield.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d6 + 2) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/233/315/315/636252766314905259.jpeg",
        id: 190
    },
    {
        slug: "mage",
        name: "Mage",
        type: "medium humanoid",
        alignment: "any",
        ac: "12 (15 with mage armor)",
        hp: {
            default: 40,
            rng: [
                9,
                8,
                0
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                9,
                -1
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                11,
                0
            ],
            INT: [
                17,
                3
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                11,
                0
            ]
        },
        saving_throws: [
            "INT +6",
            "WIS +4"
        ],
        skills: [
            "arcana +6",
            "history +6"
        ],
        senses: [
            "passive perception 11"
        ],
        languages: [
            "any four languages"
        ],
        challenge_lvl: "6",
        xp: 2300,
        traits_html: "<h3> Traits </h3><p><em><strong>Spellcasting.</strong></em> The mage is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The mage has the following wizard spellsprepare: </p><p>Cantrips (atwill: fire bolt, light, mage hand, prestidigitation </p><p>1st level (4slots: detect magic, mage armor, magic missile, shield </p><p>2nd level (3slots: misty step, suggestion </p><p>3rd level (3slots: counterspell, fireball, fly </p><p>4th level (3slots: greater invisibility, ice storm </p><p>5th level (1slot: cone of cold</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Dagger.</strong></em> <em>Melee or <em>Ranged Weapon Attack:</em></em> +5 to hit, reach 5 ft. or range 20/60 ft., one target. <em>Hit:</em> 4 (1d4 + 2) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
        id: 191
    },
    {
        slug: "magma_mephit",
        name: "Magma Mephit",
        type: "small elemental",
        alignment: "neutral evil",
        ac: "11",
        hp: {
            default: 22,
            rng: [
                5,
                6,
                5
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                8,
                -1
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                12,
                1
            ],
            INT: [
                7,
                -2
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                10,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "stealth +3"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            "ignan",
            "terran"
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3><p><em><strong>Death Burst.</strong></em> When the mephit dies, it explodes in a burst of lava. Each creature within 5 feet of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one. </p><p><em><strong>False Appearance.</strong></em> While the mephit remains motionless, it is indistinguishable from an ordinary mound of magma. </p><p><em><strong>Innate Spellcasting.</strong></em>(1/Day). The mephit can innately cast heat metal (spell save DC 10), requiring no material components. Its innate spellcasting ability is Charisma.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one creature. <em>Hit:</em> 3 (1d4 + 1) slashing damage plus 2 (1d4) fire damage. </p><p><em><strong>Fire Breath (Recharge 6).</strong></em> The mephit exhales a 15-foot cone of fire. Each creature in that area must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/18/292/315/315/636379804350894228.jpeg",
        id: 192
    },
    {
        slug: "magmin",
        name: "Magmin",
        type: "small elemental",
        alignment: "chaotic neutral",
        ac: "14 (natural armor)",
        hp: {
            default: 9,
            rng: [
                2,
                6,
                2
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                7,
                -2
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                12,
                1
            ],
            INT: [
                8,
                -1
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                10,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            "ignan"
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3><p><em><strong>Death Burst.</strong></em> When the magmin dies, it explodes in a burst of fire and magma. Each creature within 10 feet of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one. Flammable objects that aren't being worn or carried in that area are ignited. </p><p><em><strong>Ignited Illumination.</strong></em> As a bonus action, the magmin can set itself ablaze or extinguish its flames. While ablaze, the magmin sheds bright light in a 10-foot radius and dim light for an additional 10 feet.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Touch.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (2d6) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 3 (1d6) fire damage at the end of each of its turns.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/183/315/315/636252762034276620.jpeg",
        id: 193
    },
    {
        slug: "mammoth",
        name: "Mammoth",
        type: "huge beast",
        alignment: "unaligned",
        ac: "13 (natural armor)",
        hp: {
            default: 126,
            rng: [
                11,
                12,
                55
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                24,
                7
            ],
            DEX: [
                9,
                -1
            ],
            CON: [
                21,
                5
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "6",
        xp: 2300,
        traits_html: "<h3> Traits </h3><p><em><strong>Trampling Charge.</strong></em> If the mammoth moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 18 Strength saving throw or be knocked prone. If the target is prone, the mammoth can make one stomp attack against it as a bonus action.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Gore.</strong></em> <em>Melee Weapon Attack:</em> +10 to hit, reach 10 ft., one target. <em>Hit:</em> 25 (4d8 + 7) piercing damage. </p><p><em><strong>Stomp.</strong></em> <em>Melee Weapon Attack:</em> +10 to hit, reach 5 ft., one prone creature. <em>Hit:</em> 29 (4d10 + 7) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 194
    },
    {
        slug: "manticore",
        name: "Manticore",
        type: "large monstrosity",
        alignment: "lawful evil",
        ac: "14 (natural armor)",
        hp: {
            default: 68,
            rng: [
                8,
                10,
                24
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                17,
                3
            ],
            DEX: [
                16,
                3
            ],
            CON: [
                17,
                3
            ],
            INT: [
                7,
                -2
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                8,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 11"
        ],
        languages: [
            "common"
        ],
        challenge_lvl: "3",
        xp: 700,
        traits_html: "<h3> Traits </h3><p><em><strong>Tail Spike Regrowth.</strong></em> The manticore has twenty-four tail spikes. Used spikes regrow when the manticore finishes a long rest.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The manticore makes threeattack: one with its bite and two with its claws or three with its tail spikes. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d8 + 3) piercing damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (1d6 + 3) slashing damage. </p><p><em><strong>Tail Spike.</strong></em> <em>Ranged Weapon Attack:</em> +5 to hit, range 100/200 ft., one target. <em>Hit:</em> 7 (1d8 + 3) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/187/315/315/636252762623266809.jpeg",
        id: 195
    },
    {
        slug: "marilith",
        name: "Marilith",
        type: "large fiend",
        alignment: "chaotic evil",
        ac: "18 (natural armor)",
        hp: {
            default: 189,
            rng: [
                18,
                10,
                90
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                20,
                5
            ],
            CON: [
                20,
                5
            ],
            INT: [
                18,
                4
            ],
            WIS: [
                16,
                3
            ],
            CHA: [
                20,
                5
            ]
        },
        saving_throws: [
            "STR +9",
            "CON +10",
            "WIS +8",
            "CHA +10"
        ],
        skills: [
            ""
        ],
        senses: [
            "truesight 120 ft.",
            " passive perception 13"
        ],
        languages: [
            "abyssal",
            "telepathy 120 ft."
        ],
        challenge_lvl: "16",
        xp: 15000,
        traits_html: "<h3> Traits </h3><p><em><strong>Magic Resistance.</strong></em> The marilith has advantage on saving throws against spells and other magical effects. </p><p><em><strong>Magic Weapons.</strong></em> The marilith's weapon attacks are magical. </p><p><em><strong>Reactive.</strong></em> The marilith can take one reaction on every turn in a combat.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The marilith makes sevenattack: six with its longswords and one with its tail. </p><p><em><strong>Longsword.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d8 + 4) slashing damage. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft., one creature. <em>Hit:</em> 15 (2d10 + 4) bludgeoning damage. If the target is Medium or smaller, it is grappled (escape DC 19). Until this grapple ends, the target is restrained, the marilith can automatically hit the target with its tail, and the marilith can't make tail attacks against other targets. </p><p><em><strong>Teleport.</strong></em> The marilith magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/189/315/315/636252763036079032.jpeg",
        id: 196
    },
    {
        slug: "mastiff",
        name: "Mastiff",
        type: "medium beast",
        alignment: "unaligned",
        ac: "12",
        hp: {
            default: 5,
            rng: [
                1,
                8,
                1
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                13,
                1
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                12,
                1
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3"
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.125,
        xp: 25,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Hearing and Smell.</strong></em> The mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 4 (1d6 + 1) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/191/1000/1000/636252763295291063.jpeg",
        id: 197
    },
    {
        slug: "medusa",
        name: "Medusa",
        type: "medium monstrosity",
        alignment: "lawful evil",
        ac: "15 (natural armor)",
        hp: {
            default: 127,
            rng: [
                17,
                8,
                51
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                10,
                0
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                16,
                3
            ],
            INT: [
                12,
                1
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                15,
                2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "deception +5",
            "insight +4",
            "perception +4",
            "stealth +5"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 14"
        ],
        languages: [
            "common"
        ],
        challenge_lvl: "6",
        xp: 2300,
        traits_html: "<h3> Traits </h3><p><em><strong>Petrifying Gaze.</strong></em> When a creature that can see the medusa's eyes starts its turn within 30 feet of the medusa, the medusa can force it to make a DC 14 Constitution saving throw if the medusa isn't incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is instantly petrified. Otherwise, a creature that fails the save begins to turn to stone and is restrained. The restrained creature must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the creature is freed by the greater restoration spell or other magic.</p><p>Unless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see the medusa until the start of its next turn, when it can avert its eyes again. If the creature looks at the medusa in the meantime, it must immediately make the save.</p><p>If the medusa sees itself reflected on a polished surface within 30 feet of it and in an area of bright light, the medusa is, due to its curse, affected by its own gaze.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The medusa makes either three melee attacks--one with its snake hair and two with its shortsword--or two ranged attacks with its longbow. </p><p><em><strong>Snake Hair.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one creature. <em>Hit:</em> 4 (1d4 + 2) piercing damage plus 14 (4d6) poison damage. </p><p><em><strong>Shortsword.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d6 + 2) piercing damage. </p><p><em><strong>Longbow.</strong></em> <em>Ranged Weapon Attack:</em> +5 to hit, range 150/600 ft., one target. <em>Hit:</em> 6 (1d8 + 2) piercing damage plus 7 (2d6) poison damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/580/1000/1000/636376361850900325.jpeg",
        id: 198
    },
    {
        slug: "merfolk",
        name: "Merfolk",
        type: "medium humanoid",
        alignment: "neutral",
        ac: "11",
        hp: {
            default: 11,
            rng: [
                2,
                8,
                2
            ]
        },
        speed: {
            base: 10,
            unit: "ft."
        },
        stats: {
            STR: [
                10,
                0
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                12,
                1
            ],
            INT: [
                11,
                0
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                12,
                1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +2"
        ],
        senses: [
            "passive perception 12"
        ],
        languages: [
            "aquan",
            "common"
        ],
        challenge_lvl: 0.125,
        xp: 25,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The merfolk can breathe air and water.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Spear.</strong></em> <em>Melee or <em>Ranged Weapon Attack:</em></em> +2 to hit, reach 5 ft. or range 20/60 ft., one target. <em>Hit:</em> 3 (1d6) piercing damage, or 4 (1d8) piercing damage if used with two hands to make a melee attack.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/197/1000/1000/636252763841141413.jpeg",
        id: 199
    },
    {
        slug: "merrow",
        name: "Merrow",
        type: "large monstrosity",
        alignment: "chaotic evil",
        ac: "13 (natural armor)",
        hp: {
            default: 45,
            rng: [
                6,
                10,
                12
            ]
        },
        speed: {
            base: 10,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                15,
                2
            ],
            INT: [
                8,
                -1
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                9,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            "abyssal",
            "aquan"
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The merrow can breathe air and water.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The merrow makes twoattack: one with its bite and one with its claws or harpoon. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 8 (1d8 + 4) piercing damage. </p><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 9 (2d4 + 4) slashing damage. </p><p><em><strong>Harpoon.</strong></em> <em>Melee or <em>Ranged Weapon Attack:</em></em> +6 to hit, reach 5 ft. or range 20/60 ft., one target. <em>Hit:</em> 11 (2d6 + 4) piercing damage. If the target is a Huge or smaller creature, it must succeed on a Strength contest against the merrow or be pulled up to 20 feet toward the merrow.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/203/315/315/636252764097970952.jpeg",
        id: 200
    },
    {
        slug: "mimic",
        name: "Mimic",
        type: "medium monstrosity",
        alignment: "neutral",
        ac: "12 (natural armor)",
        hp: {
            default: 58,
            rng: [
                9,
                8,
                18
            ]
        },
        speed: {
            base: 15,
            unit: "ft."
        },
        stats: {
            STR: [
                17,
                3
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                15,
                2
            ],
            INT: [
                5,
                -3
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                8,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "stealth +5"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 11"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Shapechanger.</strong></em> The mimic can use its action to polymorph into an object or back into its true, amorphous form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies. </p><p><em><strong>Adhesive (Object Form Only).</strong></em> The mimic adheres to anything that touches it. A Huge or smaller creature adhered to the mimic is also grappled by it (escape DC 13). Ability checks made to escape this grapple have disadvantage. </p><p><em><strong>False Appearance (Object Form Only).</strong></em> While the mimic remains motionless, it is indistinguishable from an ordinary object. </p><p><em><strong>Grappler.</strong></em> The mimic has advantage on attack rolls against any creature grappled by it.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Pseudopod.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d8 + 3) bludgeoning damage. If the mimic is in object form, the target is subjected to its Adhesive trait. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d8 + 3) piercing damage plus 4 (1d8) acid damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/211/315/315/636252764731637373.jpeg",
        id: 201
    },
    {
        slug: "minotaur",
        name: "Minotaur",
        type: "large monstrosity",
        alignment: "chaotic evil",
        ac: "14 (natural armor)",
        hp: {
            default: 76,
            rng: [
                9,
                10,
                27
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                16,
                3
            ],
            INT: [
                6,
                -2
            ],
            WIS: [
                16,
                3
            ],
            CHA: [
                9,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +7"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 17"
        ],
        languages: [
            "abyssal"
        ],
        challenge_lvl: "3",
        xp: 700,
        traits_html: "<h3> Traits </h3><p><em><strong>Charge.</strong></em> If the minotaur moves at least 10 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed up to 10 feet away and knocked prone. </p><p><em><strong>Labyrinthine Recall.</strong></em> The minotaur can perfectly recall any path it has traveled. </p><p><em><strong>Reckless.</strong></em> At the start of its turn, the minotaur can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Greataxe.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 17 (2d12 + 4) slashing damage. </p><p><em><strong>Gore.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d8 + 4) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/217/1000/1000/636252765009181721.jpeg",
        id: 202
    },
    {
        slug: "minotaur_skeleton",
        name: "Minotaur Skeleton",
        type: "large undead",
        alignment: "lawful evil",
        ac: "12 (natural armor)",
        hp: {
            default: 67,
            rng: [
                9,
                10,
                18
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                15,
                2
            ],
            INT: [
                6,
                -2
            ],
            WIS: [
                8,
                -1
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 9"
        ],
        languages: [
            "understands abyssal but can't speak  it"
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Charge.</strong></em> If the skeleton moves at least 10 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed up to 10 feet away and knocked prone.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Greataxe.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 17 (2d12 + 4) slashing damage. </p><p><em><strong>Gore.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d8 + 4) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/480/1000/1000/636376298435934058.jpeg",
        id: 203
    },
    {
        slug: "mule",
        name: "Mule",
        type: "medium beast",
        alignment: "unaligned",
        ac: "10",
        hp: {
            default: 11,
            rng: [
                2,
                8,
                2
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                14,
                2
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                13,
                1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.125,
        xp: 25,
        traits_html: "<h3> Traits </h3><p><em><strong>Beast of Burden.</strong></em> The mule is considered to be a Large animal for the purpose of determining its carrying capacity. </p><p><em><strong>Sure-Footed.</strong></em> The mule has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Hooves.</strong></em> <em>Melee Weapon Attack:</em> +2 to hit, reach 5 ft., one target. <em>Hit:</em> 4 (1d4 + 2) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 204
    },
    {
        slug: "mummy",
        name: "Mummy",
        type: "medium undead",
        alignment: "lawful evil",
        ac: "11 (natural armor)",
        hp: {
            default: 58,
            rng: [
                9,
                8,
                18
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                8,
                -1
            ],
            CON: [
                15,
                2
            ],
            INT: [
                6,
                -2
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                12,
                1
            ]
        },
        saving_throws: [
            "WIS +2"
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            "the languages it knew in life"
        ],
        challenge_lvl: "3",
        xp: 700,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The mummy can use its Dreadful Glare and makes one attack with its rotting fist.</p><p><em><strong>Rotting Fist.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 10 (2d6 + 3) bludgeoning damage plus 10 (3d6) necrotic damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic.</p><p><em><strong>Dreadful Glare.</strong></em> The mummy targets one creature it can see within 60 feet of it. If the target can see the mummy, it must succeed on a DC 11 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies (but not mummy lords) for the next 24 hours.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/225/1000/1000/636252765553048566.jpeg",
        id: 205
    },
    {
        slug: "mummy_lord",
        name: "Mummy Lord",
        type: "medium undead",
        alignment: "lawful evil",
        ac: "17 (natural armor)",
        hp: {
            default: 97,
            rng: [
                13,
                8,
                39
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                17,
                3
            ],
            INT: [
                11,
                0
            ],
            WIS: [
                18,
                4
            ],
            CHA: [
                16,
                3
            ]
        },
        saving_throws: [
            "CON +8",
            "INT +5",
            "WIS +9",
            "CHA +8"
        ],
        skills: [
            "history +5",
            "religion +5"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 14"
        ],
        languages: [
            "the languages it knew in life"
        ],
        challenge_lvl: "15",
        xp: 13000,
        traits_html: "<h3> Traits </h3><p><em><strong>Magic Resistance.</strong></em> The mummy lord has advantage on saving throws against spells and other magical effects.</p><p><em><strong>Rejuvenation.</strong></em> A destroyed mummy lord gains a new body in 24 hours if its heart is intact, regaining all its hit points and becoming active again. The new body appears within 5 feet of the mummy lord's heart.</p><p><em><strong>Spellcasting.</strong></em> The mummy lord is a 10th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 17, +9 to hit with spell attacks). The mummy lord has the following cleric spells prepared:</p><p>Cantrips (atwill: sacred flame, thaumaturgy</p><p>1st level (4slots: command, guiding bolt, shield of faith</p><p>2nd level (3slots: hold person, silence, spiritual weapon</p><p>3rd level (3slots: animate dead, dispel magic</p><p>4th level (3slots: divination, guardian of faith</p><p>5th level (2slots: contagion, insect plague</p><p>6th level (1slot: harm</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The mummy can use its Dreadful Glare and makes one attack with its rotting fist.</p><p><em><strong>Rotting Fist.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 5 ft., one target. <em>Hit:</em> 14 (3d6 + 4) bludgeoning damage plus 21 (6d6) necrotic damage. If the target is a creature, it must succeed on a DC 16 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic.</p><p><em><strong>Dreadful Glare.</strong></em> The mummy lord targets one creature it can see within 60 feet of it. If the target can see the mummy lord, it must succeed on a DC 16 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies and mummy lords for the next 24 hours.</p><h3> LEGENDARY ACTIONS </h3><p>The mummy lord can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The mummy lord regains spent legendary actions at the start of its turn.</p><p><em><strong>Attack.</strong></em> The mummy lord makes one attack with its rotting fist or uses its Dreadful Glare.</p><p><em><strong>Blinding Dust.</strong></em> Blinding dust and sand swirls magically around the mummy lord. Each creature within 5 feet of the mummy lord must succeed on a DC 16 Constitution saving throw or be blinded until the end of the creature's next turn.</p><p><em><strong>Blasphemous Word (Costs 2 Actions).</strong></em> The mummy lord utters a blasphemous word. Each non-undead creature within 10 feet of the mummy lord that can hear the magical utterance must succeed on a DC 16 Constitution saving throw or be stunned until the end of the mummy lord's next turn.</p><p><em><strong>Channel Negative Energy (Costs 2 Actions).</strong></em> The mummy lord magically unleashes negative energy. Creatures within 60 feet of the mummy lord, including ones behind barriers and around corners, can't regain hit points until the end of the mummy lord's next turn.</p><p><em><strong>Whirlwind of Sand (Costs 2 Actions).</strong></em> The mummy lord magically transforms into a whirlwind of sand, moves up to 60 feet, and reverts to its normal form. While in whirlwind form, the mummy lord is immune to all damage, and it can't be grappled, petrified, knocked prone, restrained, or stunned. Equipment worn or carried by the mummy lord remain in its possession.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/660/undead.jpg",
        id: 206
    },
    {
        slug: "nalfeshnee",
        name: "Nalfeshnee",
        type: "large fiend",
        alignment: "chaotic evil",
        ac: "18 (natural armor)",
        hp: {
            default: 184,
            rng: [
                16,
                10,
                96
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                21,
                5
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                22,
                6
            ],
            INT: [
                19,
                4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                15,
                2
            ]
        },
        saving_throws: [
            "CON +11",
            "INT +9",
            "WIS +6",
            "CHA +7"
        ],
        skills: [
            ""
        ],
        senses: [
            "truesight 120 ft.",
            " passive perception 11"
        ],
        languages: [
            "abyssal",
            "telepathy 120 ft."
        ],
        challenge_lvl: "13",
        xp: 10000,
        traits_html: "<h3> Traits </h3><p><em><strong>Magic Resistance.</strong></em> The nalfeshnee has advantage on saving throws against spells and other magical effects.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The nalfeshnee uses Horror Nimbus if it can. It then makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +10 to hit, reach 5 ft., one target. <em>Hit:</em> 32 (5d10 + 5) piercing damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +10 to hit, reach 10 ft., one target. <em>Hit:</em> 15 (3d6 + 5) slashing damage. </p><p><em><strong>Horror Nimbus (Recharge 5\u20136).</strong></em> The nalfeshnee magically emits scintillating, multicolored light. Each creature within 15 feet of the nalfeshnee that can see the light must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the nalfeshnee's Horror Nimbus for the next 24 hours. </p><p><em><strong>Teleport.</strong></em> The nalfeshnee magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/261/1000/1000/636252768396688147.jpeg",
        id: 207
    },
    {
        slug: "night_hag",
        name: "Night Hag",
        type: "medium fiend",
        alignment: "neutral evil",
        ac: "17 (natural armor)",
        hp: {
            default: 112,
            rng: [
                15,
                8,
                45
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                16,
                3
            ],
            INT: [
                16,
                3
            ],
            WIS: [
                14,
                2
            ],
            CHA: [
                16,
                3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "deception +7",
            "insight +6",
            "perception +6",
            "stealth +6"
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 16"
        ],
        languages: [
            "abyssal",
            "common",
            "infernal",
            "primordial"
        ],
        challenge_lvl: "5",
        xp: 1800,
        traits_html: "<h3> Traits </h3><p><em><strong>Innate Spellcasting.</strong></em> The hag's innate spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). She can innately cast the following spells, requiring no materialcomponent: </p><p>Atwil: detect magic, magic missile </p><p>2/dayeac: plane shift (self only), ray of enfeeblement, sleep </p><p><em><strong>Magic Resistance.</strong></em> The hag has advantage on saving throws against spells and other magical effects.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Claws.</strong></em>(Hag Form Only). <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d8 + 4) slashing damage. </p><p><em><strong>Change Shape.</strong></em> The hag magically polymorphs into a Small or Medium female humanoid, or back into her true form. Her statistics are the same in each form. Any equipment she is wearing or carrying isn't transformed. She reverts to her true form if she dies. </p><p><em><strong>Etherealness.</strong></em> The hag magically enters the Ethereal Plane from the Material Plane, or vice versa. To do so, the hag must have a heartstone in her possession. </p><p><em><strong>Nightmare Haunting (1/Day).</strong></em> While on the Ethereal Plane, the hag magically touches a sleeping humanoid on the Material Plane. A protection from evil and good spell cast on the target prevents this contact, as does a magic circle. As long as the contact persists, the target has dreadful visions. If these visions last for at least 1 hour, the target gains no benefit from its rest, and its hit point maximum is reduced by 5 (1d10). If this effect reduces the target's hit point maximum to 0, the target dies, and if the target was evil, its soul is trapped in the hag's soul bag. The reduction to the target's hit point maximum lasts until removed by the greater restoration spell or similar magic.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/269/1000/1000/636252769277562895.jpeg",
        id: 208
    },
    {
        slug: "nightmare",
        name: "Nightmare",
        type: "large fiend",
        alignment: "neutral evil",
        ac: "13 (natural armor)",
        hp: {
            default: 68,
            rng: [
                8,
                10,
                24
            ]
        },
        speed: {
            base: 60,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                16,
                3
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                15,
                2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 11"
        ],
        languages: [
            "common  and infernal but can't speak"
        ],
        challenge_lvl: "3",
        xp: 700,
        traits_html: "<h3> Traits </h3><p><em><strong>Confer Fire Resistance.</strong></em> The nightmare can grant resistance to fire damage to anyone riding it. </p><p><em><strong>Illumination.</strong></em> The nightmare sheds bright light in a 10-foot radius and dim light for an additional 10 feet.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Hooves.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d8 + 4) bludgeoning damage plus 7 (2d6) fire damage. </p><p><em><strong>Ethereal Stride.</strong></em> The nightmare and up to three willing creatures within 5 feet of it magically enter the Ethereal Plane from the Material Plane, or vice versa.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/273/315/315/636252769493472144.jpeg",
        id: 209
    },
    {
        slug: "noble",
        name: "Noble",
        type: "medium humanoid",
        alignment: "any",
        ac: "15 (breastplate)",
        hp: {
            default: 9,
            rng: [
                2,
                8,
                0
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                11,
                0
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                11,
                0
            ],
            INT: [
                12,
                1
            ],
            WIS: [
                14,
                2
            ],
            CHA: [
                16,
                3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "deception +5",
            "insight +4",
            "persuasion +5"
        ],
        senses: [
            "passive perception 12"
        ],
        languages: [
            "any two languages"
        ],
        challenge_lvl: 0.125,
        xp: 25,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Rapier.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d8 + 1) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/277/1000/1000/636252769861281900.jpeg",
        id: 210
    },
    {
        slug: "nothic",
        name: "Nothic",
        type: "medium aberration",
        alignment: "neutral evil",
        ac: "15 natural",
        hp: {
            default: 45,
            rng: [
                6,
                8,
                18
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                14,
                2
            ],
            DEX: [
                16,
                3
            ],
            CON: [
                16,
                3
            ],
            INT: [
                13,
                1
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                8,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "arcana +3",
            "insight +4",
            "perception +2",
            "stealth +5"
        ],
        senses: [
            "truesight 120 ft.",
            " passive perception 12"
        ],
        languages: [
            "undercommon"
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Sight.</strong></em> The nothic has advantage on Wisdom (Perception) checks that rely on sight.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The nothic makes two claw attacks.</p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (1d6 + 3) slashing damage.</p><p><em><strong>Rotting Gaze.</strong></em> The nothic targets one creature it can see within 30 feet of it. The target must succeed on a DC 12 Constitution saving throw against this magic or take 10 (3d6) necrotic damage.</p><p><em><strong>Weird Insight.</strong></em> The nothic targets one creature it can see within 30 feet of it. The target must contest its Charisma (Deception) check against the nothic\u2019s Wisdom (Insight) check. If the nothic wins, it magically learns one fact or secret about the target. The target automatically wins if it is immune to being charmed.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/14/475/1000/1000/636364321398842272.png",
        id: 211
    },
    {
        slug: "ochre_jelly",
        name: "Ochre Jelly",
        type: "large ooze",
        alignment: "unaligned",
        ac: "8",
        hp: {
            default: 45,
            rng: [
                6,
                10,
                12
            ]
        },
        speed: {
            base: 10,
            unit: "ft."
        },
        stats: {
            STR: [
                15,
                2
            ],
            DEX: [
                6,
                -2
            ],
            CON: [
                14,
                2
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                6,
                -2
            ],
            CHA: [
                1,
                -5
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "blindsight 60 ft.",
            " passive perception 8"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Amorphous.</strong></em> The jelly can move through a space as narrow as 1 inch wide without squeezing. </p><p><em><strong>Spider Climb.</strong></em> The jelly can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Pseudopod.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 9 (2d6 + 2) bludgeoning damage plus 3 (1d6) acid damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/279/1000/1000/636252770058723674.jpeg",
        id: 212
    },
    {
        slug: "octopus",
        name: "Octopus",
        type: "small beast",
        alignment: "unaligned",
        ac: "12",
        hp: {
            default: 3,
            rng: [
                1,
                6,
                0
            ]
        },
        speed: {
            base: 5,
            unit: "ft."
        },
        stats: {
            STR: [
                4,
                -3
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                11,
                0
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                4,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +2",
            "stealth +4"
        ],
        senses: [
            "darkvision 30 ft.",
            " passive perception 12"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3><p><em><strong>Hold Breath.</strong></em> While out of water, the octopus can hold its breath for 30 minutes. </p><p><em><strong>Underwater Camouflage.</strong></em> The octopus has advantage on Dexterity (Stealth) checks made while underwater. </p><p><em><strong>Water Breathing.</strong></em> The octopus can breathe only underwater.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Tentacles.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 1 bludgeoning damage, and the target is grappled (escape DC 10). Until this grapple ends, the octopus can't use its tentacles on another target. </p><p><em><strong>Ink Cloud (Recharges after a Short or Long Rest).</strong></em> A 5-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/921/315/315/636334602449110996.jpeg",
        id: 213
    },
    {
        slug: "ogre",
        name: "Ogre",
        type: "large giant",
        alignment: "chaotic evil",
        ac: "11 (hide armor)",
        hp: {
            default: 59,
            rng: [
                7,
                10,
                21
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                19,
                4
            ],
            DEX: [
                8,
                -1
            ],
            CON: [
                16,
                3
            ],
            INT: [
                5,
                -3
            ],
            WIS: [
                7,
                -2
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 8"
        ],
        languages: [
            "common",
            "giant"
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Greatclub.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d8 + 4) bludgeoning damage. </p><p><em><strong>Javelin.</strong></em> <em>Melee or <em>Ranged Weapon Attack:</em></em> +6 to hit, reach 5 ft. or range 30/120 ft., one target. <em>Hit:</em> 11 (2d6 + 4) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/285/315/315/636252770535203221.jpeg",
        id: 214
    },
    {
        slug: "ogre_zombie",
        name: "Ogre Zombie",
        type: "large undead",
        alignment: "neutral evil",
        ac: "8",
        hp: {
            default: 85,
            rng: [
                9,
                10,
                36
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                19,
                4
            ],
            DEX: [
                6,
                -2
            ],
            CON: [
                18,
                4
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                6,
                -2
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            "WIS +0"
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 8"
        ],
        languages: [
            "understands common and giant but can't speak  them"
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Undead Fortitude.</strong></em> If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Morningstar.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d8 + 4) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/287/315/315/636252770700032248.jpeg",
        id: 215
    },
    {
        slug: "oni",
        name: "Oni",
        type: "large giant",
        alignment: "lawful evil",
        ac: "16 (chain mail)",
        hp: {
            default: 110,
            rng: [
                13,
                10,
                39
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                19,
                4
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                16,
                3
            ],
            INT: [
                14,
                2
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                15,
                2
            ]
        },
        saving_throws: [
            "DEX +3",
            "CON +6",
            "WIS +4",
            "CHA +5"
        ],
        skills: [
            "arcana +5",
            "deception +8",
            "perception +4"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 14"
        ],
        languages: [
            "common",
            "giant"
        ],
        challenge_lvl: "7",
        xp: 2900,
        traits_html: "<h3> Traits </h3><p><em><strong>Innate Spellcasting.</strong></em> The oni's innate spellcasting ability is Charisma (spell save DC 13). The oni can innately cast the following spells, requiring no materialcomponent: </p><p>Atwil: darkness, invisibility</p><p>1/dayeac: charm person, cone of cold, gaseous form, sleep</p><p><em><strong>Magic Weapons.</strong></em> The oni's weapon attacks are magical. </p><p><em><strong>Regeneration.</strong></em> The oni regains 10 hit points at the start of its turn if it has at least 1 hit point.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The oni makes two attacks, either with its claws or its glaive. </p><p><em><strong>Claw (Oni Form Only).</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 8 (1d8 + 4) slashing damage. </p><p><em><strong>Glaive.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 10 ft., one target. <em>Hit:</em> 15 (2d10 + 4) slashing damage, or 9 (1d10 + 4) slashing damage in Small or Medium form. </p><p><em><strong>Change Shape.</strong></em> The oni magically polymorphs into a Small or Medium humanoid, into a Large giant, or back into its true form. Other than its size, its statistics are the same in each form. The only equipment that is transformed is its glaive, which shrinks so that it can be wielded in humanoid form. If the oni dies, it reverts to its true form, and its glaive reverts to its normal size.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/297/1000/1000/636252771507213738.jpeg",
        id: 216
    },
    {
        slug: "orc",
        name: "Orc",
        type: "medium humanoid",
        alignment: "chaotic evil",
        ac: "13 (hide armor)",
        hp: {
            default: 15,
            rng: [
                2,
                8,
                6
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                16,
                3
            ],
            INT: [
                7,
                -2
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                10,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "intimidation +2"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            "common",
            "orc"
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3><p><em><strong>Aggressive</strong></em>. As a bonus action, the orc can move up to its speed toward a hostile creature that it can see.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Greataxe.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 9 (1d12 + 3) slashing damage. </p><p><em><strong>Javelin.</strong></em> <em>Melee or <em>Ranged Weapon Attack:</em></em> +5 to hit, reach 5 ft. or range 30/120 ft., one target. <em>Hit:</em> 6 (1d6 + 3) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
        id: 217
    },
    {
        slug: "otyugh",
        name: "Otyugh",
        type: "large aberration",
        alignment: "neutral",
        ac: "14 (natural armor)",
        hp: {
            default: 114,
            rng: [
                12,
                10,
                48
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                19,
                4
            ],
            INT: [
                6,
                -2
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            "CON +7"
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 11"
        ],
        languages: [
            "otyugh"
        ],
        challenge_lvl: "5",
        xp: 1800,
        traits_html: "<h3> Traits </h3><p><em><strong>Limited Telepathy.</strong></em> The otyugh can magically transmit simple messages and images to any creature within 120 feet of it that can understand a language. This form of telepathy doesn't allow the receiving creature to telepathically respond.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The otyugh makes threeattack: one with its bite and two with its tentacles. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 12 (2d8 + 3) piercing damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the target must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. The disease is cured on a success. The target dies if the disease reduces its hit point maximum to 0. This reduction to the target's hit point maximum lasts until the disease is cured. </p><p><em><strong>Tentacle.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 10 ft., one target. <em>Hit:</em> 7 (1d8 + 3) bludgeoning damage plus 4 (1d8) piercing damage. If the target is Medium or smaller, it is grappled (escape DC 13) and restrained until the grapple ends. The otyugh has two tentacles, each of which can grapple one target. </p><p><em><strong>Tentacle Slam.</strong></em> The otyugh slams creatures grappled by it into each other or a solid surface. Each creature must succeed on a DC 14 Constitution saving throw or take 10 (2d6 + 3) bludgeoning damage and be stunned until the end of the otyugh's next turn. On a successful save, the target takes half the bludgeoning damage and isn't stunned.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/305/315/315/636252771931366466.jpeg",
        id: 218
    },
    {
        slug: "owl",
        name: "Owl",
        type: "tiny beast",
        alignment: "unaligned",
        ac: "11",
        hp: {
            default: 1,
            rng: [
                1,
                4,
                -1
            ]
        },
        speed: {
            base: 5,
            unit: "ft."
        },
        stats: {
            STR: [
                3,
                -4
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                8,
                -1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3",
            "stealth +3"
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 13"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3><p><em><strong>Flyby.</strong></em> The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach. </p><p><em><strong>Keen Hearing and Sight.</strong></em> The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Talons.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 1 slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/533/1000/1000/636376331660233857.jpeg",
        id: 219
    },
    {
        slug: "owlbear",
        name: "Owlbear",
        type: "large monstrosity",
        alignment: "unaligned",
        ac: "13 (natural armor)",
        hp: {
            default: 59,
            rng: [
                7,
                10,
                21
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                20,
                5
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                17,
                3
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 13"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "3",
        xp: 700,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Sight and Smell.</strong></em> The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The owlbear makes twoattack: one with its beak and one with its claws. </p><p><em><strong>Beak.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one creature. <em>Hit:</em> 10 (1d10 + 5) piercing damage. </p><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 14 (2d8 + 5) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/315/315/315/636252772225295187.jpeg",
        id: 220
    },
    {
        slug: "panther",
        name: "Panther",
        type: "medium beast",
        alignment: "unaligned",
        ac: "12",
        hp: {
            default: 13,
            rng: [
                3,
                8,
                0
            ]
        },
        speed: {
            base: 50,
            unit: "ft."
        },
        stats: {
            STR: [
                14,
                2
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                10,
                0
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                14,
                2
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +4",
            "stealth +6"
        ],
        senses: [
            "passive perception 14"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Smell.</strong></em> The panther has advantage on Wisdom (Perception) checks that rely on smell. </p><p><em><strong>Pounce.</strong></em> If the panther moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the panther can make one bite attack against it as a bonus action.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d6 + 2) piercing damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 4 (1d4 + 2) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 221
    },
    {
        slug: "pegasus",
        name: "Pegasus",
        type: "large celestial",
        alignment: "chaotic good",
        ac: "12",
        hp: {
            default: 59,
            rng: [
                7,
                10,
                21
            ]
        },
        speed: {
            base: 60,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                16,
                3
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                15,
                2
            ],
            CHA: [
                13,
                1
            ]
        },
        saving_throws: [
            "DEX +4",
            "WIS +4",
            "CHA +3"
        ],
        skills: [
            "perception +6"
        ],
        senses: [
            "passive perception 16"
        ],
        languages: [
            "celestial",
            "common",
            "elvish  and sylvan but can't speak"
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Hooves.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 11 (2d6 + 4) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/18/303/1000/1000/636379808797059368.png",
        id: 222
    },
    {
        slug: "phase_spider",
        name: "Phase Spider",
        type: "large monstrosity",
        alignment: "unaligned",
        ac: "13 (natural armor)",
        hp: {
            default: 32,
            rng: [
                5,
                10,
                5
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                15,
                2
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                12,
                1
            ],
            INT: [
                6,
                -2
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "stealth +6"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "3",
        xp: 700,
        traits_html: "<h3> Traits </h3><p><em><strong>Ethereal Jaunt.</strong></em> As a bonus action, the spider can magically shift from the Material Plane to the Ethereal Plane, or vice versa. </p><p><em><strong>Spider Climb.</strong></em> The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check. </p><p><em><strong>Web Walker.</strong></em> The spider ignores movement restrictions caused by webbing.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one creature. <em>Hit:</em> 7 (1d10 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 18 (4d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/319/315/315/636252772538300448.jpeg",
        id: 223
    },
    {
        slug: "pit_fiend",
        name: "Pit Fiend",
        type: "large fiend",
        alignment: "lawful evil",
        ac: "19 (natural armor)",
        hp: {
            default: 300,
            rng: [
                24,
                10,
                168
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                26,
                8
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                24,
                7
            ],
            INT: [
                22,
                6
            ],
            WIS: [
                18,
                4
            ],
            CHA: [
                24,
                7
            ]
        },
        saving_throws: [
            "DEX +8",
            "CON +13",
            "WIS +10"
        ],
        skills: [
            ""
        ],
        senses: [
            "truesight 120 ft.",
            " passive perception 14"
        ],
        languages: [
            "infernal",
            "telepathy 120 ft."
        ],
        challenge_lvl: "20",
        xp: 25000,
        traits_html: "<h3> Traits </h3><em><strong>Fear Aura.</strong></em>incapacitatedfrightened<em><strong>Magic Resistance.</strong></em><em><strong>Magic Weapons.</strong></em><em><strong>Innate Spellcasting.</strong></em>detect magicfireballhold monsterwall of fire",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The pit fiend makes fourattack: one with its bite, one with its claw, one with its mace, and one with its tail. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +14 to hit, reach 5 ft., one target. <em>Hit:</em> 22 (4d6 + 8) piercing damage. The target must succeed on a DC 21 Constitution saving throw or become poisoned. While poisoned in this way, the target can't regain hit points, and it takes 21 (6d6) poison damage at the start of each of its turns. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +14 to hit, reach 10 ft., one target. <em>Hit:</em> 17 (2d8 + 8) slashing damage. </p><p><em><strong>Mace.</strong></em> <em>Melee Weapon Attack:</em> +14 to hit, reach 10 ft., one target. <em>Hit:</em> 15 (2d6 + 8) bludgeoning damage plus 21 (6d6) fire damage. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +14 to hit, reach 10 ft., one target. <em>Hit:</em> 24 (3d10 + 8) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/311/315/315/636252772132434763.jpeg",
        id: 224
    },
    {
        slug: "planetar",
        name: "Planetar",
        type: "large celestial",
        alignment: "lawful good",
        ac: "19 (natural armor)",
        hp: {
            default: 200,
            rng: [
                16,
                10,
                112
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                24,
                7
            ],
            DEX: [
                20,
                5
            ],
            CON: [
                24,
                7
            ],
            INT: [
                19,
                4
            ],
            WIS: [
                22,
                6
            ],
            CHA: [
                25,
                7
            ]
        },
        saving_throws: [
            "CON +12",
            "WIS +11",
            "CHA +12"
        ],
        skills: [
            "perception +11"
        ],
        senses: [
            "truesight 120 ft.",
            " passive perception 21"
        ],
        languages: [
            "all",
            "telepathy 120 ft."
        ],
        challenge_lvl: "16",
        xp: 15000,
        traits_html: "<h3> Traits </h3><p><em><strong>Angelic Weapons.</strong></em> The planetar's weapon attacks are magical. When the planetar hits with any weapon, the weapon deals an extra 5d8 radiant damage (included in the attack). </p><p><em><strong>Divine Awareness.</strong></em> The planetar knows if it hears a lie. </p><p><em><strong>Innate Spellcasting.</strong></em> The planetar's spellcasting ability is Charisma (spell save DC 20). The planetar can innately cast the following spells, requiring no materialcomponent: </p><p>Atwil: detect evil and good, invisibility (self only) </p><p>3/dayeac: blade barrier, dispel evil and good, flame strike, raise dead </p><p>1/dayeac: commune, control weather, insect plague </p><p><em><strong>Magic Resistance.</strong></em> The planetar has advantage on saving throws against spells and other magical effects.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The planetar makes two melee attacks. </p><p><em><strong>Greatsword.</strong></em> <em>Melee Weapon Attack:</em> +12 to hit, reach 5 ft., one target. <em>Hit:</em> 21 (4d6 + 7) slashing damage plus 22 (5d8) radiant damage. </p><p><em><strong>Healing Touch</strong></em> (4/Day). The planetar touches another creature. The target magically regains 30 (6d8 + 3) hit points and is freed from any curse, disease, poison, blindness, or deafness.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/303/315/315/636252771762002496.jpeg",
        id: 225
    },
    {
        slug: "plesiosaurus",
        name: "Plesiosaurus",
        type: "large beast",
        alignment: "unaligned",
        ac: "13 (natural armor)",
        hp: {
            default: 68,
            rng: [
                8,
                10,
                24
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                16,
                3
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3",
            "stealth +4"
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Hold Breath.</strong></em> The plesiosaurus can hold its breath for 1 hour.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 10 ft., one target. <em>Hit:</em> 14 (3d6 + 4) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/488/315/315/636376304583147024.jpeg",
        id: 226
    },
    {
        slug: "poisonous_snake",
        name: "Poisonous Snake",
        type: "tiny beast",
        alignment: "unaligned",
        ac: "13",
        hp: {
            default: 2,
            rng: [
                1,
                4,
                0
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                2,
                -4
            ],
            DEX: [
                16,
                3
            ],
            CON: [
                11,
                0
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                3,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "blindsight 10 ft.",
            " passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.125,
        xp: 25,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 1 piercing damage, and the target must make a DC 10 Constitution saving throw, taking 5 (2d4) poison damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 227
    },
    {
        slug: "polar_bear",
        name: "Polar Bear",
        type: "large beast",
        alignment: "unaligned",
        ac: "12 (natural armor)",
        hp: {
            default: 42,
            rng: [
                5,
                10,
                15
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                20,
                5
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                16,
                3
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3"
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Smell.</strong></em> The bear has advantage on Wisdom (Perception) checks that rely on smell.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The bear makes twoattack: one with its bite and one with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 9 (1d8 + 5) piercing damage. </p><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 12 (2d6 + 5) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 228
    },
    {
        slug: "pony",
        name: "Pony",
        type: "medium beast",
        alignment: "unaligned",
        ac: "10",
        hp: {
            default: 11,
            rng: [
                2,
                8,
                2
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                15,
                2
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                13,
                1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.125,
        xp: 25,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Hooves.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (2d4 + 2) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 229
    },
    {
        slug: "priest",
        name: "Priest",
        type: "medium humanoid",
        alignment: "any",
        ac: "13 (chain shirt)",
        hp: {
            default: 27,
            rng: [
                5,
                8,
                5
            ]
        },
        speed: {
            base: 25,
            unit: "ft."
        },
        stats: {
            STR: [
                10,
                0
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                12,
                1
            ],
            INT: [
                13,
                1
            ],
            WIS: [
                16,
                3
            ],
            CHA: [
                13,
                1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "medicine +7",
            "persuasion +3",
            "religion +4"
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            "any two languages"
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Divine Eminence.</strong></em> As a bonus action, the priest can expend a spell slot to cause its melee weapon attacks to magically deal an extra 10 (3d6) radiant damage to a target on a hit. This benefit lasts until the end of the turn. If the priest expends a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each level above 1st.</p><p><em><strong>Spellcasting.</strong></em> The priest is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). The priest has the following cleric spells prepared:</p><p>Cantrips (atwill: light, sacred flame, thaumaturgy</p><p>1st level (4slots: cure wounds, guiding bolt, sanctuary</p><p>2nd level (3slots: lesser restoration, spiritual weapon</p><p>3rd level (2slots: dispel magic,<em> spirit guardians</em></p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Mace.</strong></em> <em>Melee Weapon Attack:</em> +2 to hit, reach 5 ft., one target. <em>Hit:</em> 3 (1d6) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
        id: 230
    },
    {
        slug: "pseudodragon",
        name: "Pseudodragon",
        type: "tiny dragon",
        alignment: "neutral good",
        ac: "13 (natural armor)",
        hp: {
            default: 7,
            rng: [
                2,
                4,
                2
            ]
        },
        speed: {
            base: 15,
            unit: "ft."
        },
        stats: {
            STR: [
                6,
                -2
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                13,
                1
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                10,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3",
            "stealth +4"
        ],
        senses: [
            "blindsight 10 ft.",
            "darkvision 60 ft.",
            " passive perception 13"
        ],
        languages: [
            "understands common and draconic but can't speak them"
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3><p><em><strong>Magic Resistance.</strong></em> The pseudodragon has advantage on saving throws against spells and other magical effects. </p><p><em><strong>Limited Telepathy.</strong></em> The pseudodragon can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 feet of it that can understand a language.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 4 (1d4 + 2) piercing damage. </p><p><em><strong>Sting.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one creature. <em>Hit:</em> 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or become poisoned for 1 hour. If the saving throw fails by 5 or more, the target falls unconscious for the same duration, or until it takes damage or another creature uses an action to shake it awake.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/283/1000/1000/636252770521719244.jpeg",
        id: 231
    },
    {
        slug: "pteranodon",
        name: "Pteranodon",
        type: "medium beast",
        alignment: "unaligned",
        ac: "13 natural armor",
        hp: {
            default: 13,
            rng: [
                3,
                8,
                0
            ]
        },
        speed: {
            base: 10,
            unit: "ft."
        },
        stats: {
            STR: [
                12,
                1
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                10,
                0
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                9,
                -1
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 11"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3><div><p><em><strong>Flyby.</strong></em> The pteranodon doesn\u2019t provoke an opportunity attack when it flies out of an enemy\u2019s reach.</p></div>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (2d4 + 1) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 232
    },
    {
        slug: "purple_worm",
        name: "Purple Worm",
        type: "gargantuan monstrosity",
        alignment: "unaligned",
        ac: "18 (natural armor)",
        hp: {
            default: 247,
            rng: [
                15,
                20,
                90
            ]
        },
        speed: {
            base: 50,
            unit: "ft."
        },
        stats: {
            STR: [
                28,
                9
            ],
            DEX: [
                7,
                -2
            ],
            CON: [
                22,
                6
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                8,
                -1
            ],
            CHA: [
                4,
                -3
            ]
        },
        saving_throws: [
            "CON +11",
            "WIS +4"
        ],
        skills: [
            ""
        ],
        senses: [
            "blindsight 30 ft.",
            "tremorsense 60 ft.",
            " passive perception 9"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "15",
        xp: 13000,
        traits_html: "<h3> Traits </h3><p><em><strong>Tunneler.</strong></em> The worm can burrow through solid rock at half its burrow speed and leaves a 10-foot-diameter tunnel in its wake.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The worm makes twoattack: one with its bite and one with its stinger. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft., one target. <em>Hit:</em> 22 (3d8 + 9) piercing damage. If the target is a Large or smaller creature, it must succeed on a DC 19 Dexterity saving throw or be swallowed by the worm. A swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the worm, and it takes 21 (6d6) acid damage at the start of each of the worm's turns.</p><p>If the worm takes 30 damage or more on a single turn from a creature inside it, the worm must succeed on a DC 21 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the worm. If the worm dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 20 feet of movement, exiting prone. </p><p><em><strong>Tail Stinger.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft., one creature. <em>Hit:</em> 19 (3d6 + 9) piercing damage, and the target must make a DC 19 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/275/315/315/636252769846436684.jpeg",
        id: 233
    },
    {
        slug: "quasit",
        name: "Quasit",
        type: "tiny fiend",
        alignment: "chaotic evil",
        ac: "13",
        hp: {
            default: 7,
            rng: [
                3,
                4,
                0
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                5,
                -3
            ],
            DEX: [
                17,
                3
            ],
            CON: [
                10,
                0
            ],
            INT: [
                7,
                -2
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                10,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "stealth +5"
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 10"
        ],
        languages: [
            "abyssal",
            "common"
        ],
        challenge_lvl: "1",
        xp: 200,
        traits_html: "<h3> Traits </h3><p><em><strong>Shapechanger.</strong></em> The quasit can use its action to polymorph into a beast form that resembles a bat (speed 10 ft. fly 40 ft.), a centipede (40 ft., climb 40 ft.), or a toad (40 ft., swim 40 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies. </p><p><em><strong>Magic Resistance.</strong></em> The quasit has advantage on saving throws against spells and other magical effects.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Claws (Bite in Beast Form).</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d4 + 3) piercing damage, and the target must succeed on a DC 10 Constitution saving throw or take 5 (2d4) poison damage and become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. </p><p><em><strong>Scare (1/Day).</strong></em> One creature of the quasit's choice within 20 feet of it must succeed on a DC 10 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the quasit is within line of sight, ending the effect on itself on a success. </p><p><em><strong>Invisibility.</strong></em> The quasit magically turns invisible until it attacks or uses Scare, or until its concentration ends (as if concentrating on a spell). Any equipment the quasit wears or carries is invisible with it.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/271/315/315/636252769318699115.jpeg",
        id: 234
    },
    {
        slug: "quipper",
        name: "Quipper",
        type: "tiny beast",
        alignment: "unaligned",
        ac: "13",
        hp: {
            default: 1,
            rng: [
                1,
                4,
                -1
            ]
        },
        speed: {
            base: 0,
            unit: "ft."
        },
        stats: {
            STR: [
                2,
                -4
            ],
            DEX: [
                16,
                3
            ],
            CON: [
                9,
                -1
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                7,
                -2
            ],
            CHA: [
                2,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 8"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3><p><em><strong>Blood Frenzy.</strong></em> The quipper has advantage on melee attack rolls against any creature that doesn't have all its hit points. </p><p><em><strong>Water Breathing.</strong></em> The quipper can breathe only underwater.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 1 piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/253/1000/1000/636252767919065233.jpeg",
        id: 235
    },
    {
        slug: "rakshasa",
        name: "Rakshasa",
        type: "medium fiend",
        alignment: "lawful evil",
        ac: "16 (natural armor)",
        hp: {
            default: 110,
            rng: [
                13,
                8,
                52
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                14,
                2
            ],
            DEX: [
                17,
                3
            ],
            CON: [
                18,
                4
            ],
            INT: [
                13,
                1
            ],
            WIS: [
                16,
                3
            ],
            CHA: [
                20,
                5
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "deception +10",
            "insight +8"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 13"
        ],
        languages: [
            "common",
            "infernal"
        ],
        challenge_lvl: "13",
        xp: 10000,
        traits_html: "<h3> Traits </h3><p><em><strong>Limited Magic Immunity.</strong></em> The rakshasa can't be affected or detected by spells of 6th level or lower unless it wishes to be. It has advantage on saving throws against all other spells and magical effects.</p><p><em><strong>Innate Spellcasting.</strong></em> The rakshasa's innate spellcasting ability is Charisma (spell save DC 18, +10 to hit with spell attacks). The rakshasa can innately cast the following spells, requiring no material components:</p><p>Atwil: detect thoughts, disguise self, mage hand, minor illusion</p><p>3/dayeac: charm person, detect magic, invisibility, major image, suggestion</p><p>1/dayeac: dominate person, fly, plane shift, true seeing</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The rakshasa makes two claw attacks.</p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 9 (2d6 + 2) slashing damage, and the target is cursed if it is a creature. The magical curse takes effect whenever the target takes a short or long rest, filling the target's thoughts with horrible images and dreams. The cursed target gains no benefit from finishing a short or long rest. The curse lasts until it is lifted by a remove curse spell or similar magic.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/247/315/315/636252767480157951.jpeg",
        id: 236
    },
    {
        slug: "rat",
        name: "Rat",
        type: "tiny beast",
        alignment: "unaligned",
        ac: "10",
        hp: {
            default: 1,
            rng: [
                1,
                4,
                -1
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                2,
                -4
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                9,
                -1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                4,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 30 ft.",
            " passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Smell.</strong></em> The rat has advantage on Wisdom (Perception) checks that rely on smell.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +0 to hit, reach 5 ft., one target. <em>Hit:</em> 1 piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/541/315/315/636376335435407571.jpeg",
        id: 237
    },
    {
        slug: "raven",
        name: "Raven",
        type: "tiny beast",
        alignment: "unaligned",
        ac: "12",
        hp: {
            default: 1,
            rng: [
                1,
                4,
                -1
            ]
        },
        speed: {
            base: 10,
            unit: "ft."
        },
        stats: {
            STR: [
                2,
                -4
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                8,
                -1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3"
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3><p><em><strong>Mimicry.</strong></em> The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Beak.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 1 piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/553/1000/1000/636376341568391037.jpeg",
        id: 238
    },
    {
        slug: "red_dragon_wyrmling",
        name: "Red Dragon Wyrmling",
        type: "medium dragon",
        alignment: "chaotic evil",
        ac: "17 (natural armor)",
        hp: {
            default: 75,
            rng: [
                10,
                8,
                30
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                19,
                4
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                17,
                3
            ],
            INT: [
                12,
                1
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                15,
                2
            ]
        },
        saving_throws: [
            "DEX +2",
            "CON +5",
            "WIS +2",
            "CHA +4"
        ],
        skills: [
            "perception +4",
            "stealth +2"
        ],
        senses: [
            "blindsight 10 ft.",
            "darkvision 60 ft.",
            " passive perception 14"
        ],
        languages: [
            "draconic"
        ],
        challenge_lvl: "4",
        xp: 1100,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 9 (1d10 + 4) piercing damage plus 3 (1d6) fire damage. </p><p><em><strong>Fire Breath (Recharge 5\u20136).</strong></em> The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/239/315/315/636252766855622680.jpeg",
        id: 239
    },
    {
        slug: "reef_shark",
        name: "Reef Shark",
        type: "medium beast",
        alignment: "unaligned",
        ac: "12 (natural armor)",
        hp: {
            default: 22,
            rng: [
                4,
                8,
                4
            ]
        },
        speed: {
            base: 0,
            unit: "ft."
        },
        stats: {
            STR: [
                14,
                2
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                13,
                1
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                4,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +2"
        ],
        senses: [
            "blindsight 30 ft.",
            " passive perception 12"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3><p><em><strong>Pack Tactics.</strong></em> The shark has advantage on an attack roll against a creature if at least one of the shark's allies is within 5 feet of the creature and the ally isn't incapacitated. </p><p><em><strong>Water Breathing.</strong></em> The shark can breathe only underwater.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (1d8 + 2) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 240
    },
    {
        slug: "remorhaz",
        name: "Remorhaz",
        type: "huge monstrosity",
        alignment: "unaligned",
        ac: "17 (natural armor)",
        hp: {
            default: 195,
            rng: [
                17,
                12,
                85
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                24,
                7
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                21,
                5
            ],
            INT: [
                4,
                -3
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            "tremorsense 60 ft.",
            " passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "11",
        xp: 7200,
        traits_html: "<h3> Traits </h3><p><em><strong>Heated Body.</strong></em> A creature that touches the remorhaz or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 10 ft., one target. <em>Hit:</em> 40 (6d10 + 7) piercing damage plus 10 (3d6) fire damage. If the target is a creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the remorhaz can't bite another target. </p><p><em><strong>Swallow.</strong></em> The remorhaz makes one bite attack against a Medium or smaller creature it is grappling. If the attack hits, that creature takes the bite's damage and is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the remorhaz, and it takes 21 (6d6) acid damage at the start of each of the remorhaz's turns.</p><p>If the remorhaz takes 30 damage or more on a single turn from a creature inside it, the remorhaz must succeed on a DC 15 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the remorhaz. If the remorhaz dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/231/315/315/636252766143328421.jpeg",
        id: 241
    },
    {
        slug: "rhinoceros",
        name: "Rhinoceros",
        type: "large beast",
        alignment: "unaligned",
        ac: "11 (natural armor)",
        hp: {
            default: 45,
            rng: [
                6,
                10,
                12
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                21,
                5
            ],
            DEX: [
                8,
                -1
            ],
            CON: [
                15,
                2
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 11"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Charge.</strong></em> If the rhinoceros moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Gore.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 14 (2d8 + 5) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 242
    },
    {
        slug: "riding_horse",
        name: "Riding Horse",
        type: "large beast",
        alignment: "unaligned",
        ac: "10",
        hp: {
            default: 13,
            rng: [
                2,
                10,
                2
            ]
        },
        speed: {
            base: 60,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                12,
                1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Hooves.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 8 (2d4 + 3) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/904/315/315/636334288913250513.jpeg",
        id: 243
    },
    {
        slug: "roc",
        name: "Roc",
        type: "gargantuan monstrosity",
        alignment: "unaligned",
        ac: "15 (natural armor)",
        hp: {
            default: 248,
            rng: [
                16,
                20,
                80
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                28,
                9
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                20,
                5
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                9,
                -1
            ]
        },
        saving_throws: [
            "DEX +4",
            "CON +9",
            "WIS +4",
            "CHA +3"
        ],
        skills: [
            "perception +4"
        ],
        senses: [
            "passive perception 14"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "11",
        xp: 7200,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Sight.</strong></em> The roc has advantage on Wisdom (Perception) checks that rely on sight.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The roc makes twoattack: one with its beak and one with its talons. </p><p><em><strong>Beak.</strong></em> <em>Melee Weapon Attack:</em> +13 to hit, reach 10 ft., one target. <em>Hit:</em> 27 (4d8 + 9) piercing damage. </p><p><em><strong>Talons.</strong></em> <em>Melee Weapon Attack:</em> +13 to hit, reach 5 ft., one target. <em>Hit:</em> 23 (4d6 + 9) slashing damage, and the target is grappled (escape DC 19). Until this grapple ends, the target is restrained, and the roc can't use its talons on another target.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/229/315/315/636252765590929622.jpeg",
        id: 244
    },
    {
        slug: "roper",
        name: "Roper",
        type: "large monstrosity",
        alignment: "neutral evil",
        ac: "20 (natural armor)",
        hp: {
            default: 93,
            rng: [
                11,
                10,
                33
            ]
        },
        speed: {
            base: 10,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                8,
                -1
            ],
            CON: [
                17,
                3
            ],
            INT: [
                7,
                -2
            ],
            WIS: [
                16,
                3
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +6",
            "stealth +5"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 16"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "5",
        xp: 1800,
        traits_html: "<h3> Traits </h3><p><em><strong>False Appearance.</strong></em> While the roper remains motionless, it is indistinguishable from a normal cave formation, such as a stalagmite. </p><p><em><strong>Grasping Tendrils.</strong></em> The roper can have up to six tendrils at a time. Each tendril can be attacked (AC 20; 10 hit points; immunity to poison and psychic damage). Destroying a tendril deals no damage to the roper, which can extrude a replacement tendril on its next turn. A tendril can also be broken if a creature takes an action and succeeds on a DC 15 Strength check against it. </p><p><em><strong>Spider Climb.</strong></em> The roper can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The roper makes four attacks with its tendrils, uses Reel, and makes one attack with its bite. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 22 (4d8 + 4) piercing damage. </p><p><em><strong>Tendril.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 50 ft., one creature. <em>Hit:</em> The target is grappled (escape DC 15). Until the grapple ends, the target is restrained and has disadvantage on Strength checks and Strength saving throws, and the roper can't use the same tendril on another target. </p><p><em><strong>Reel.</strong></em> The roper pulls each creature grappled by it up to 25 feet straight toward it.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/560/1000/1000/636376344528091115.jpeg",
        id: 245
    },
    {
        slug: "rug_of_smothering",
        name: "Rug of Smothering",
        type: "large construct",
        alignment: "unaligned",
        ac: "12",
        hp: {
            default: 33,
            rng: [
                6,
                10,
                0
            ]
        },
        speed: {
            base: 10,
            unit: "ft."
        },
        stats: {
            STR: [
                17,
                3
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                10,
                0
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                3,
                -4
            ],
            CHA: [
                1,
                -5
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "blindsight 60 ft.",
            " passive perception 6"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Antimagic Susceptibility.</strong></em> The rug is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the rug must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute. </p><p><em><strong>Damage Transfer.</strong></em> While it is grappling a creature, the rug takes only half the damage dealt to it, and the creature grappled by the rug takes the other half. </p><p><em><strong>False Appearance.</strong></em> While the rug remains motionless, it is indistinguishable from a normal rug.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Smother.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one Medium or smaller creature. <em>Hit:</em> The creature is grappled (escape DC 13). Until this grapple ends, the target is restrained, blinded, and at risk of suffocating, and the rug can't smother another target. In addition, at the start of each of the target's turns, the target takes 10 (2d6 + 3) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/213/1000/1000/636252764761726261.jpeg",
        id: 246
    },
    {
        slug: "rust_monster",
        name: "Rust Monster",
        type: "medium monstrosity",
        alignment: "unaligned",
        ac: "14 (natural armor)",
        hp: {
            default: 27,
            rng: [
                5,
                8,
                5
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                13,
                1
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                13,
                1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 11"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3><p><em><strong>Iron Scent.</strong></em> The rust monster can pinpoint, by scent, the location of ferrous metal within 30 feet of it.</p><p><em><strong>Rust Metal.</strong></em> Any nonmagical weapon made of metal that hits the rust monster corrodes. After dealing damage, the weapon takes a permanent and cumulative \u22121 penalty to damage rolls. If its penalty drops to \u22125, the weapon is destroyed. Nonmagical ammunition made of metal that hits the rust monster is destroyed after dealing damage.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d8 + 1) piercing damage.</p><p><em><strong>Antennae.</strong></em> The rust monster corrodes a nonmagical ferrous metal object it can see within 5 feet of it. If the object isn't being worn or carried, the touch destroys a 1-foot cube of it. If the object is being worn or carried by a creature, the creature can make a DC 11 Dexterity saving throw to avoid the rust monster's touch.</p><p>If the object touched is either metal armor or a metal shield being worn or carried, it takes a permanent and cumulative \u22121 penalty to the AC it offers. Armor reduced to an AC of 10 or a shield that drops to a +0 bonus is destroyed. If the object touched is a held metal weapon, it rusts as described in the Rust Metal trait.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/207/1000/1000/636252764265020108.jpeg",
        id: 247
    },
    {
        slug: "saber_toothed_tiger",
        name: "Saber-Toothed Tiger",
        type: "large beast",
        alignment: "unaligned",
        ac: "12",
        hp: {
            default: 52,
            rng: [
                7,
                10,
                14
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                15,
                2
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                8,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3",
            "stealth +6"
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Smell.</strong></em> The tiger has advantage on Wisdom (Perception) checks that rely on smell. </p><p><em><strong>Pounce.</strong></em> If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 10 (1d10 + 5) piercing damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 12 (2d6 + 5) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 248
    },
    {
        slug: "sahuagin",
        name: "Sahuagin",
        type: "medium humanoid",
        alignment: "lawful evil",
        ac: "12 (natural armor)",
        hp: {
            default: 22,
            rng: [
                4,
                8,
                4
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                13,
                1
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                12,
                1
            ],
            INT: [
                12,
                1
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                9,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +5"
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 15"
        ],
        languages: [
            "sahuagin"
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3><p><em><strong>Blood Frenzy.</strong></em> The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points. </p><p><em><strong>Limited Amphibiousness.</strong></em> The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating. </p><p><em><strong>Shark Telepathy.</strong></em> The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The sahuagin makes two meleeattack: one with its bite and one with its claws or spear. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 3 (1d4 + 1) piercing damage. </p><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 3 (1d4 + 1) slashing damage. </p><p><em><strong>Spear.</strong></em> <em>Melee or <em>Ranged Weapon Attack:</em></em> +3 to hit, reach 5 ft. or range 20/60 ft., one target. <em>Hit:</em> 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/177/1000/1000/636252761683746719.jpeg",
        id: 249
    },
    {
        slug: "salamander",
        name: "Salamander",
        type: "large elemental",
        alignment: "neutral evil",
        ac: "15 (natural armor)",
        hp: {
            default: 90,
            rng: [
                12,
                10,
                24
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                15,
                2
            ],
            INT: [
                11,
                0
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                12,
                1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            "ignan"
        ],
        challenge_lvl: "5",
        xp: 1800,
        traits_html: "<h3> Traits </h3><p><em><strong>Heated Body.</strong></em> A creature that touches the salamander or hits it with a melee attack while within 5 feet of it takes 7 (2d6) fire damage. </p><p><em><strong>Heated Weapons.</strong></em> Any metal melee weapon the salamander wields deals an extra 3 (1d6) fire damage on a hit (included in the attack).</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The salamander makes twoattack: one with its spear and one with its tail. </p><p><em><strong>Spear.</strong></em> <em>Melee or <em>Ranged Weapon Attack:</em></em> +7 to hit, reach 5 ft. or range 20 ft./60 ft., one target. <em>Hit:</em> 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 10 ft., one target. <em>Hit:</em> 11 (2d6 + 4) bludgeoning damage plus 7 (2d6) fire damage, and the target is grappled (escape DC 14). Until this grapple ends, the target is restrained, the salamander can automatically hit the target with its tail, and the salamander can't make tail attacks against other targets.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/173/1000/1000/636252761197608364.jpeg",
        id: 250
    },
    {
        slug: "satyr",
        name: "Satyr",
        type: "medium fey",
        alignment: "chaotic neutral",
        ac: "14 (leather armor)",
        hp: {
            default: 31,
            rng: [
                7,
                8,
                0
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                12,
                1
            ],
            DEX: [
                16,
                3
            ],
            CON: [
                11,
                0
            ],
            INT: [
                12,
                1
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                14,
                2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +2",
            "performance +6",
            "stealth +5"
        ],
        senses: [
            "passive perception 12"
        ],
        languages: [
            "common",
            "elvish",
            "sylvan"
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3><p><em><strong>Magic Resistance.</strong></em> The satyr has advantage on saving throws against spells and other magical effects.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Ram.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (2d4 + 1) bludgeoning damage. </p><p><em><strong>Shortsword.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (1d6 + 3) piercing damage.</p><p><em><strong>Shortbow.</strong></em> <em>Ranged Weapon Attack:</em> +5 to hit, range 80/320 ft., one target. <em>Hit:</em> 6 (1d6 + 3) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/169/1000/1000/636252760706340605.jpeg",
        id: 251
    },
    {
        slug: "scorpion",
        name: "Scorpion",
        type: "tiny beast",
        alignment: "unaligned",
        ac: "11 (natural armor)",
        hp: {
            default: 1,
            rng: [
                1,
                4,
                -1
            ]
        },
        speed: {
            base: 10,
            unit: "ft."
        },
        stats: {
            STR: [
                2,
                -4
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                8,
                -1
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                8,
                -1
            ],
            CHA: [
                2,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "blindsight 10 ft.",
            " passive perception 9"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Sting.</strong></em> <em>Melee Weapon Attack:</em> +2 to hit, reach 5 ft., one creature. <em>Hit:</em> 1 piercing damage, and the target must make a DC 9 Constitution saving throw, taking 4 (1d8) poison damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 252
    },
    {
        slug: "scout",
        name: "Scout",
        type: "medium humanoid",
        alignment: "any",
        ac: "13 (leather armor)",
        hp: {
            default: 16,
            rng: [
                3,
                8,
                3
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                11,
                0
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                12,
                1
            ],
            INT: [
                11,
                0
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                11,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "nature +4",
            "perception +5",
            "stealth +6",
            "survival +5"
        ],
        senses: [
            "passive perception 15"
        ],
        languages: [
            "any one language (usually common)"
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Hearing and Sight.</strong></em> The scout has advantage on Wisdom (Perception) checks that rely on hearing or sight.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The scout makes two melee attacks or two ranged attacks. </p><p><em><strong>Shortsword.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d6 + 2) piercing damage. </p><p><em><strong>Longbow.</strong></em> <em>Ranged Weapon Attack:</em> +4 to hit, ranged 150/600 ft., one target. <em>Hit:</em> 6 (1d8 + 2) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/163/1000/1000/636252759915100020.jpeg",
        id: 253
    },
    {
        slug: "sea_hag",
        name: "Sea Hag",
        type: "medium fey",
        alignment: "chaotic evil",
        ac: "14 (natural armor)",
        hp: {
            default: 52,
            rng: [
                7,
                8,
                21
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                16,
                3
            ],
            INT: [
                12,
                1
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                13,
                1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 11"
        ],
        languages: [
            "aquan",
            "common",
            "giant"
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The hag can breathe air and water. </p><p><em><strong>Horrific Appearance.</strong></em> Any humanoid that starts its turn within 30 feet of the hag and can see the hag's true form must make a DC 11 Wisdom saving throw. On a failed save, the creature is frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the hag is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the hag's Horrific Appearance for the next 24 hours.</p><p>Unless the target is surprised or the revelation of the hag's true form is sudden, the target can avert its eyes and avoid making the initial saving throw. Until the start of its next turn, a creature that averts its eyes has disadvantage on attack rolls against the hag.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 10 (2d6 + 3) slashing damage. </p><p><em><strong>Death Glare.</strong></em> The hag targets one frightened creature she can see within 30 feet of her. If the target can see the hag, it must succeed on a DC 11 Wisdom saving throw against this magic or drop to 0 hit points. </p><p><em><strong>Illusory Appearance.</strong></em> The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like an ugly creature of her general size and humanoid shape. The effect ends if the hag takes a bonus action to end it or if she dies.</p><p>The changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have no claws, but someone touching her hand might feel the claws. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 16 Intelligence (Investigation) check to discern that the hag is disguised.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/159/1000/1000/636252759356069260.jpeg",
        id: 254
    },
    {
        slug: "sea_horse",
        name: "Sea Horse",
        type: "tiny beast",
        alignment: "unaligned",
        ac: "11",
        hp: {
            default: 1,
            rng: [
                1,
                4,
                -1
            ]
        },
        speed: {
            base: 0,
            unit: "ft."
        },
        stats: {
            STR: [
                1,
                -5
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                8,
                -1
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                2,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3><p><em><strong>Water Breathing.</strong></em> The sea horse can breathe only underwater.</p>",
        actions_html: "<h3> ACTIONS </h3>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 255
    },
    {
        slug: "shadow",
        name: "Shadow",
        type: "medium undead",
        alignment: "chaotic evil",
        ac: "12",
        hp: {
            default: 16,
            rng: [
                3,
                8,
                3
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                6,
                -2
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                13,
                1
            ],
            INT: [
                6,
                -2
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                8,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "stealth +4"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3><p><em><strong>Amorphous.</strong></em> The shadow can move through a space as narrow as 1 inch wide without squeezing. </p><p><em><strong>Shadow Stealth.</strong></em> While in dim light or darkness, the shadow can take the Hide action as a bonus action. </p><p><em><strong>Sunlight Weakness.</strong></em> While in sunlight, the shadow has disadvantage on attack rolls, ability checks, and saving throws.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Strength Drain.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one creature. <em>Hit:</em> 9 (2d6 + 2) necrotic damage, and the target's Strength score is reduced by 1d4. The target dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest.</p><p>If a non-evil humanoid dies from this attack, a new shadow rises from the corpse 1d4 hours later.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/155/315/315/636252758977032019.jpeg",
        id: 256
    },
    {
        slug: "shambling_mound",
        name: "Shambling Mound",
        type: "large plant",
        alignment: "unaligned",
        ac: "15 (natural armor)",
        hp: {
            default: 136,
            rng: [
                16,
                10,
                48
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                8,
                -1
            ],
            CON: [
                16,
                3
            ],
            INT: [
                5,
                -3
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "stealth +2"
        ],
        senses: [
            "blindsight 60 ft.",
            " passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "5",
        xp: 1800,
        traits_html: "<h3> Traits </h3><p><em><strong>Lightning Absorption.</strong></em> Whenever the shambling mound is subjected to lightning damage, it takes no damage and regains a number of hit points equal to the lightning damage dealt.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The shambling mound makes two slam attacks. If both attacks hit a Medium or smaller target, the target is grappled (escape DC 14), and the shambling mound uses its Engulf on it. </p><p><em><strong>Slam.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d8 + 4) bludgeoning damage. </p><p><em><strong>Engulf.</strong></em> The shambling mound engulfs a Medium or smaller creature grappled by it. The engulfed target is blinded, restrained, and unable to breathe, and it must succeed on a DC 14 Constitution saving throw at the start of each of the mound's turns or take 13 (2d8 + 4) bludgeoning damage. If the mound moves, the engulfed target moves with it. The mound can have only one creature engulfed at a time.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/563/315/315/636376346968079714.jpeg",
        id: 257
    },
    {
        slug: "shield_guardian",
        name: "Shield Guardian",
        type: "large construct",
        alignment: "unaligned",
        ac: "17 (natural armor)",
        hp: {
            default: 142,
            rng: [
                15,
                10,
                60
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                8,
                -1
            ],
            CON: [
                18,
                4
            ],
            INT: [
                7,
                -2
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                3,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "blindsight 10 ft.",
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            "understands commands given in any language but can't speak"
        ],
        challenge_lvl: "7",
        xp: 2900,
        traits_html: "<h3> Traits </h3><p><em><strong>Bound.</strong></em> The shield guardian is magically bound to an amulet. As long as the guardian and its amulet are on the same plane of existence, the amulet's wearer can telepathically call the guardian to travel to it, and the guardian knows the distance and direction to the amulet. If the guardian is within 60 feet of the amulet's wearer, half of any damage the wearer takes (rounded up) is transferred to the guardian. </p><p><em><strong>Regeneration.</strong></em> The shield guardian regains 10 hit points at the start of its turn if it has at least 1 hit point. </p><p><em><strong>Spell Storing.</strong></em> A spellcaster who wears the shield guardian's amulet can cause the guardian to store one spell of 4th level or lower. To do so, the wearer must cast the spell on the guardian. The spell has no effect but is stored within the guardian. When commanded to do so by the wearer or when a situation arises that was predefined by the spellcaster, the guardian casts the stored spell with any parameters set by the original caster, requiring no components. When the spell is cast or a new spell is stored, any previously stored spell is lost.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The guardian makes two fist attacks. </p><p><em><strong>Fist.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 11 (2d6 + 4) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/145/315/315/636252758362792494.jpeg",
        id: 258
    },
    {
        slug: "shrieker",
        name: "Shrieker",
        type: "medium plant",
        alignment: "unaligned",
        ac: "5",
        hp: {
            default: 13,
            rng: [
                3,
                8,
                0
            ]
        },
        speed: {
            base: 0,
            unit: "ft."
        },
        stats: {
            STR: [
                1,
                -5
            ],
            DEX: [
                1,
                -5
            ],
            CON: [
                10,
                0
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                3,
                -4
            ],
            CHA: [
                1,
                -5
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "blindsight 30 ft.",
            " passive perception 6"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3><p><em><strong>False Appearance.</strong></em> While the shrieker remains motionless, it is indistinguishable from an ordinary fungus.</p>",
        actions_html: "<h3> ACTIONS </h3>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/571/1000/1000/636376357634308010.jpeg",
        id: 259
    },
    {
        slug: "silver_dragon_wyrmling",
        name: "Silver Dragon Wyrmling",
        type: "medium dragon",
        alignment: "lawful good",
        ac: "17 (natural armor)",
        hp: {
            default: 45,
            rng: [
                6,
                8,
                18
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                19,
                4
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                17,
                3
            ],
            INT: [
                12,
                1
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                15,
                2
            ]
        },
        saving_throws: [
            "DEX +2",
            "CON +5",
            "WIS +2",
            "CHA +4"
        ],
        skills: [
            "perception +4",
            "stealth +2"
        ],
        senses: [
            "blindsight 10 ft.",
            "darkvision 60 ft.",
            " passive perception 14"
        ],
        languages: [
            "draconic"
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 9 (1d10 + 4) piercing damage. </p><p><em><strong>Breath Weapons (Recharge 5\u20136).</strong></em> The dragon uses one of the following breath weapons. </p><p><em><strong>Cold Breath.</strong></em> The dragon exhales an icy blast in a 15-foot cone. Each creature in that area must make a DC 13 Constitution saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one. </p><p><em><strong>Paralyzing Breath.</strong></em> The dragon exhales paralyzing gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/143/315/315/636252757538355953.jpeg",
        id: 260
    },
    {
        slug: "skeleton",
        name: "Skeleton",
        type: "medium undead",
        alignment: "lawful evil",
        ac: "13 (armor scraps)",
        hp: {
            default: 13,
            rng: [
                2,
                8,
                4
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                10,
                0
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                15,
                2
            ],
            INT: [
                6,
                -2
            ],
            WIS: [
                8,
                -1
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 9"
        ],
        languages: [
            "understands all languages it knew in life but can't speak"
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Shortsword.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d6 + 2) piercing damage. </p><p><em><strong>Shortbow.</strong></em> <em>Ranged Weapon Attack:</em> +4 to hit, range 80/320 ft., one target. <em>Hit:</em> 5 (1d6 + 2) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/472/315/315/636376294573239565.jpeg",
        id: 261
    },
    {
        slug: "solar",
        name: "Solar",
        type: "large celestial",
        alignment: "lawful good",
        ac: "21 (natural armor)",
        hp: {
            default: 243,
            rng: [
                18,
                10,
                144
            ]
        },
        speed: {
            base: 50,
            unit: "ft."
        },
        stats: {
            STR: [
                26,
                8
            ],
            DEX: [
                22,
                6
            ],
            CON: [
                26,
                8
            ],
            INT: [
                25,
                7
            ],
            WIS: [
                25,
                7
            ],
            CHA: [
                30,
                10
            ]
        },
        saving_throws: [
            "INT +14",
            "WIS +14",
            "CHA +17"
        ],
        skills: [
            "perception +14"
        ],
        senses: [
            "truesight 120 ft.",
            " passive perception 24"
        ],
        languages: [
            "all",
            "telepathy 120 ft."
        ],
        challenge_lvl: "21",
        xp: 33000,
        traits_html: "<h3> Traits </h3><p><em><strong>Angelic Weapons.</strong></em> The solar's weapon attacks are magical. When the solar hits with any weapon, the weapon deals an extra 6d8 radiant damage (included in the attack). </p><p><em><strong>Divine Awareness.</strong></em> The solar knows if it hears a lie. </p><p><em><strong>Innate Spellcasting.</strong></em> The solar's spellcasting ability is Charisma (spell save DC 25). It can innately cast the following spells, requiring no materialcomponent: </p><p>Atwil: detect evil and good, invisibility (self only) </p><p>3/dayeac: blade barrier, dispel evil and good, resurrection </p><p>1/dayeac: commune, control weather </p><p><em><strong>Magic Resistance.</strong></em> The solar has advantage on saving throws against spells and other magical effects.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The solar makes two greatsword attacks. </p><p><em><strong>Greatsword.</strong></em> <em>Melee Weapon Attack:</em> +15 to hit, reach 5 ft., one target. <em>Hit:</em> 22 (4d6 + 8) slashing damage plus 27 (6d8) radiant damage. </p><p><em><strong>Slaying Longbow.</strong></em> <em>Ranged Weapon Attack:</em> +13 to hit, range 150/600 ft., one target. <em>Hit:</em> 15 (2d8 + 6) piercing damage plus 27 (6d8) radiant damage. If the target is a creature that has 100 hit points or fewer, it must succeed on a DC 15 Constitution saving throw or die. </p><p><em><strong>Flying Sword.</strong></em> The solar releases its greatsword to hover magically in an unoccupied space within 5 feet of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 feet and either make one attack against a target or return to the solar's hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies. </p><p><em><strong>Healing Touch (4/Day).</strong></em> The solar touches another creature. The target magically regains 40 (8d8 + 4) hit points and is freed from any curse, disease, poison, blindness, or deafness.</p><h3> LEGENDARY ACTIONS </h3><p>The solar can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The solar regains spent legendary actions at the start of its turn. </p><p><em><strong>Teleport.</strong></em> The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see. </p><p><em><strong>Searing Burst (Costs 2 Actions).</strong></em> The solar emits magical, divine energy. Each creature of its choice in a 10-foot radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) fire damage plus 14 (4d6) radiant damage on a failed save, or half as much damage on a successful one. </p><p><em><strong>Blinding Gaze (Costs 3 Actions).</strong></em> The solar targets one creature it can see within 30 feet of it. If the target can see it, the target must succeed on a DC 15 Constitution saving throw or be blinded until magic such as the lesser restoration spell removes the blindness.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/121/315/315/636252748079664097.jpeg",
        id: 262
    },
    {
        slug: "spectator",
        name: "Spectator",
        type: "medium aberration",
        alignment: "lawful neutral",
        ac: "14 natural",
        hp: {
            default: 39,
            rng: [
                6,
                8,
                12
            ]
        },
        speed: {
            base: 0,
            unit: "ft."
        },
        stats: {
            STR: [
                8,
                -1
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                14,
                2
            ],
            INT: [
                13,
                1
            ],
            WIS: [
                14,
                2
            ],
            CHA: [
                11,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +6"
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 16"
        ],
        languages: [
            "deep speech",
            "telepathy 120 ft.",
            "undercommon"
        ],
        challenge_lvl: "3",
        xp: 700,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +1 to hit, reach 5 ft., one target. <em>Hit:</em> 2 (1d6 \u2212 1) piercing damage.</p><p><em><strong>Eye Rays.</strong></em> The spectator shoots up to two of the following magical eye rays at one or two creatures it can see within 90 feet of it. It can use each ray only once on a turn.</p><ul>\r<li>\n<em>Confusion Ray.</em> The target must succeed on a DC 13 Wisdom saving throw, or it can\u2019t take reactions until the end of its next turn. On its turn, the target can\u2019t move, and it uses its action to make a melee or ranged attack against a randomly determined creature within range. If the target can\u2019t attack, it does nothing on its turn.</li>\r<li>\n<em>Paralyzing Ray.</em> The target must succeed on a DC 13 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</li>\r<li>\n<em>Fear Ray.</em> The target must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the spectator is visible to the target, ending the effect on itself on a success.</li>\r<li>\n<em>Wounding Ray.</em> The target must make a DC 13 Constitution saving throw, taking 16 (3d10) necrotic damage on a failed save, or half as much damage on a successful one.</li>\r</ul><p>\u00a0</p><p><em><strong>Create Food and Water.</strong></em> The spectator magically creates enough food and water to sustain itself for 24 hours.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/14/485/315/315/636364324602733616.png",
        id: 263
    },
    {
        slug: "specter",
        name: "Specter",
        type: "medium undead",
        alignment: "chaotic evil",
        ac: "12",
        hp: {
            default: 22,
            rng: [
                5,
                8,
                0
            ]
        },
        speed: {
            base: 0,
            unit: "ft."
        },
        stats: {
            STR: [
                1,
                -5
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                11,
                0
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                11,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            "understands all languages it knew in life but can't speak"
        ],
        challenge_lvl: "1",
        xp: 200,
        traits_html: "<h3> Traits </h3><p><em><strong>Incorporeal Movement.</strong></em> The specter can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object. </p><p><em><strong>Sunlight Sensitivity.</strong></em> While in sunlight, the specter has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Life Drain.</strong></em> <em>Melee Spell Attack:</em> +4 to hit, reach 5 ft., one creature. <em>Hit:</em> 10 (3d6) necrotic damage. The target must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/119/1000/1000/636252747399435720.jpeg",
        id: 264
    },
    {
        slug: "spider",
        name: "Spider",
        type: "tiny beast",
        alignment: "unaligned",
        ac: "12",
        hp: {
            default: 1,
            rng: [
                1,
                4,
                -1
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                2,
                -4
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                8,
                -1
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                2,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "stealth +4"
        ],
        senses: [
            "darkvision 30 ft.",
            " passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3><p><em><strong>Spider Climb.</strong></em> The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check. </p><p><em><strong>Web Sense.</strong></em> While in contact with a web, the spider knows the exact location of any other creature in contact with the same web. </p><p><em><strong>Web Walker.</strong></em> The spider ignores movement restrictions caused by webbing.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one creature. <em>Hit:</em> 1 piercing damage, and the target must succeed on a DC 9 Constitution saving throw or take 2 (1d4) poison damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/575/315/315/636376359864842950.jpeg",
        id: 265
    },
    {
        slug: "spirit_naga",
        name: "Spirit Naga",
        type: "large monstrosity",
        alignment: "chaotic evil",
        ac: "15 (natural armor)",
        hp: {
            default: 75,
            rng: [
                10,
                10,
                20
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                17,
                3
            ],
            CON: [
                14,
                2
            ],
            INT: [
                16,
                3
            ],
            WIS: [
                15,
                2
            ],
            CHA: [
                16,
                3
            ]
        },
        saving_throws: [
            "DEX +6",
            "CON +5",
            "WIS +5",
            "CHA +6"
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 12"
        ],
        languages: [
            "abyssal",
            "common"
        ],
        challenge_lvl: "8",
        xp: 3900,
        traits_html: "<h3> Traits </h3><p><em><strong>Rejuvenation.</strong></em> If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning. </p><p><em><strong>Spellcasting.</strong></em> The naga is a 10th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks), and it needs only verbal components to cast its spells. It has the following wizard spellsprepare: </p><p>Cantrips (atwill: mage hand, minor illusion, ray of frost </p><p>1st level (4slots: charm person, detect magic, sleep </p><p>2nd level (3slots: detect thoughts, hold person </p><p>3rd level (3slots: lightning bolt, water breathing </p><p>4th level (3slots: blight, dimension door </p><p>5th level (2slots: dominate person</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 10 ft., one creature. <em>Hit:</em> 7 (1d6 + 4) piercing damage, and the target must make a DC 13 Constitution saving throw, taking 31 (7d8) poison damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/117/315/315/636252746851035686.jpeg",
        id: 266
    },
    {
        slug: "sprite",
        name: "Sprite",
        type: "tiny fey",
        alignment: "neutral good",
        ac: "15 (leather armor)",
        hp: {
            default: 2,
            rng: [
                1,
                4,
                0
            ]
        },
        speed: {
            base: 10,
            unit: "ft."
        },
        stats: {
            STR: [
                3,
                -4
            ],
            DEX: [
                18,
                4
            ],
            CON: [
                10,
                0
            ],
            INT: [
                14,
                2
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                11,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3",
            "stealth +8"
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            "common",
            "elvish",
            "sylvan"
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Longsword.</strong></em> <em>Melee Weapon Attack:</em> +2 to hit, reach 5 ft., one target. <em>Hit:</em> 1 slashing damage. </p><p><em><strong>Shortbow.</strong></em> <em>Ranged Weapon Attack:</em> +6 to hit, range 40/160 ft., one target. <em>Hit:</em> 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or become poisoned for 1 minute. If its saving throw result is 5 or lower, the poisoned target falls unconscious for the same duration, or until it takes damage or another creature takes an action to shake it awake. </p><p><em><strong>Heart Sight.</strong></em> The sprite touches a creature and magically knows the creature's current emotional state. If the target fails a DC 10 Charisma saving throw, the sprite also knows the creature's alignment. Celestials, fiends, and undead automatically fail the saving throw. </p><p><em><strong>Invisibility.</strong></em> The sprite magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell). Any equipment the sprite wears or carries is invisible with it.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/115/315/315/636252746444973630.jpeg",
        id: 267
    },
    {
        slug: "spy",
        name: "Spy",
        type: "medium humanoid",
        alignment: "any",
        ac: "12",
        hp: {
            default: 27,
            rng: [
                6,
                8,
                0
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                10,
                0
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                10,
                0
            ],
            INT: [
                12,
                1
            ],
            WIS: [
                14,
                2
            ],
            CHA: [
                16,
                3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "deception +5",
            "insight +4",
            "investigation +5",
            "perception +6",
            "persuasion +5",
            "sleight of hand +4",
            "stealth +4"
        ],
        senses: [
            "passive perception 16"
        ],
        languages: [
            "any two languages"
        ],
        challenge_lvl: "1",
        xp: 200,
        traits_html: "<h3> Traits </h3><p><em><strong>Cunning Action.</strong></em> On each of its turns, the spy can use a bonus action to take the Dash, Disengage, or Hide action. </p><p><em><strong>Sneak Attack (1/Turn).</strong></em> The spy deals an extra 7 (2d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the spy that isn't incapacitated and the spy doesn't have disadvantage on the attack roll.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The spy makes two melee attacks. </p><p><em><strong>Shortsword.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d6 + 2) piercing damage. </p><p><em><strong>Hand Crossbow.</strong></em> <em>Ranged Weapon Attack:</em> +4 to hit, range 30/120 ft., one target. <em>Hit:</em> 5 (1d6 + 2) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
        id: 268
    },
    {
        slug: "steam_mephit",
        name: "Steam Mephit",
        type: "small elemental",
        alignment: "neutral evil",
        ac: "10",
        hp: {
            default: 21,
            rng: [
                6,
                6,
                0
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                5,
                -3
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                10,
                0
            ],
            INT: [
                11,
                0
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                12,
                1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            "aquan",
            "ignan"
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3><p><em><strong>Death Burst.</strong></em> When the mephit dies, it explodes in a cloud of steam. Each creature within 5 feet of the mephit must succeed on a DC 10 Dexterity saving throw or take 4 (1d8) fire damage. </p><p><em><strong>Innate Spellcasting.</strong></em>(1/Day). The mephit can innately cast blur, requiring no material components. Its innate spellcasting ability is Charisma.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +2 to hit, reach 5 ft., one creature. <em>Hit:</em> 2 (1d4) slashing damage plus 2 (1d4) fire damage. </p><p><em><strong>Steam Breath (Recharge 6).</strong></em> The mephit exhales a 15- foot cone of scalding steam. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 4 (1d8) fire damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/113/315/315/636252745841820724.jpeg",
        id: 269
    },
    {
        slug: "stirge",
        name: "Stirge",
        type: "tiny beast",
        alignment: "unaligned",
        ac: "14 (natural armor)",
        hp: {
            default: 2,
            rng: [
                1,
                4,
                0
            ]
        },
        speed: {
            base: 10,
            unit: "ft."
        },
        stats: {
            STR: [
                4,
                -3
            ],
            DEX: [
                16,
                3
            ],
            CON: [
                11,
                0
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                8,
                -1
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 9"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.125,
        xp: 25,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Blood Drain.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one creature. <em>Hit:</em> 5 (1d4 + 3) piercing damage, and the stirge attaches to the target. While attached, the stirge doesn't attack. Instead, at the start of each of the stirge's turns, the target loses 5 (1d4 + 3) hit points due to blood loss.</p><p>The stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/111/1000/1000/636252745395103202.jpeg",
        id: 270
    },
    {
        slug: "stone_giant",
        name: "Stone Giant",
        type: "huge giant",
        alignment: "neutral",
        ac: "17 (natural armor)",
        hp: {
            default: 126,
            rng: [
                11,
                12,
                55
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                23,
                6
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                20,
                5
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                9,
                -1
            ]
        },
        saving_throws: [
            "DEX +5",
            "CON +8",
            "WIS +4"
        ],
        skills: [
            "athletics +12",
            "perception +4"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 14"
        ],
        languages: [
            "giant"
        ],
        challenge_lvl: "7",
        xp: 2900,
        traits_html: "<h3> Traits </h3><p><em><strong>Stone Camouflage.</strong></em> The giant has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The giant makes two greatclub attacks. Greatclub. <em>Melee Weapon Attack:</em> +9 to hit, reach 15 ft., one target. <em>Hit:</em> 19 (3d8 + 6) bludgeoning damage. </p><p><em><strong>Rock.</strong></em> <em>Ranged Weapon Attack:</em> +9 to hit, range 60/240 ft., one target. <em>Hit:</em> 28 (4d10 + 6) bludgeoning damage. If the target is a creature, it must succeed on a DC 17 Strength saving throw or be knocked prone.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/109/315/315/636252744518731463.jpeg",
        id: 271
    },
    {
        slug: "stone_golem",
        name: "Stone Golem",
        type: "large construct",
        alignment: "unaligned",
        ac: "17 (natural armor)",
        hp: {
            default: 178,
            rng: [
                17,
                10,
                85
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                22,
                6
            ],
            DEX: [
                9,
                -1
            ],
            CON: [
                20,
                5
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                1,
                -5
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 10"
        ],
        languages: [
            "understands the languages of its creator but can't speak"
        ],
        challenge_lvl: "10",
        xp: 5900,
        traits_html: "<h3> Traits </h3><p><em><strong>Immutable Form.</strong></em> The golem is immune to any spell or effect that would alter its form. </p><p><em><strong>Magic Resistance.</strong></em> The golem has advantage on saving throws against spells and other magical effects. </p><p><em><strong>Magic Weapons.</strong></em> The golem's weapon attacks are magical.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The golem makes two slam attacks. </p><p><em><strong>Slam.</strong></em> <em>Melee Weapon Attack:</em> +10 to hit, reach 5 ft., one target. <em>Hit:</em> 19 (3d8 + 6) bludgeoning damage. </p><p><em><strong>Slow (Recharge 5\u20136).</strong></em> The golem targets one or more creatures it can see within 10 feet of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/107/315/315/636252743780112834.jpeg",
        id: 272
    },
    {
        slug: "storm_giant",
        name: "Storm Giant",
        type: "huge giant",
        alignment: "chaotic good",
        ac: "16 (scale mail)",
        hp: {
            default: 230,
            rng: [
                20,
                12,
                100
            ]
        },
        speed: {
            base: 50,
            unit: "ft."
        },
        stats: {
            STR: [
                29,
                9
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                20,
                5
            ],
            INT: [
                16,
                3
            ],
            WIS: [
                18,
                4
            ],
            CHA: [
                18,
                4
            ]
        },
        saving_throws: [
            "STR +14",
            "CON +10",
            "WIS +9",
            "CHA +9"
        ],
        skills: [
            "arcana +8",
            "athletics +14",
            "history +8",
            "perception +9"
        ],
        senses: [
            "passive perception 19"
        ],
        languages: [
            "common",
            "giant"
        ],
        challenge_lvl: "13",
        xp: 10000,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The giant can breathe air and water. </p><p><em><strong>Innate Spellcasting.</strong></em> The giant's innate spellcasting ability is Charisma (spell save DC 17). It can innately cast the following spells, requiring no materialcomponent: </p><p>Atwil: detect magic, feather fall, levitate, light </p><p>3/dayeac: control weather, water breathing</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The giant makes two greatsword attacks. </p><p><em><strong>Greatsword.</strong></em> <em>Melee Weapon Attack:</em> +14 to hit, reach 10 ft., one target. <em>Hit:</em> 30 (6d6 + 9) slashing damage. </p><p><em><strong>Rock.</strong></em> <em>Ranged Weapon Attack:</em> +14 to hit, range 60/240 ft., one target. <em>Hit:</em> 35 (4d12 + 9) bludgeoning damage. </p><p><em><strong>Lightning Strike (Recharge 5\u20136).</strong></em> The giant hurls a magical lightning bolt at a point it can see within 500 feet of it. Each creature within 10 feet of that point must make a DC 17 Dexterity saving throw, taking 54 (12d8) lightning damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/105/315/315/636252743254029469.jpeg",
        id: 273
    },
    {
        slug: "succubus_incubus",
        name: "Succubus/Incubus",
        type: "medium fiend",
        alignment: "neutral evil",
        ac: "15 (natural armor)",
        hp: {
            default: 66,
            rng: [
                12,
                8,
                12
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                8,
                -1
            ],
            DEX: [
                17,
                3
            ],
            CON: [
                13,
                1
            ],
            INT: [
                15,
                2
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                20,
                5
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "deception +9",
            "insight +5",
            "perception +5",
            "persuasion +9",
            "stealth +7"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 15"
        ],
        languages: [
            "abyssal",
            "common",
            "infernal",
            "telepathy 60 ft."
        ],
        challenge_lvl: "4",
        xp: 1100,
        traits_html: "<h3> Traits </h3><p><em><strong>Telepathic Bond.</strong></em> The fiend ignores the range restriction on its telepathy when communicating with a creature it has charmed. The two don't even need to be on the same plane of existence. </p><p><em><strong>Shapechanger.</strong></em> The fiend can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Without wings, the fiend loses its flying speed. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Claw (Fiend Form Only).</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (1d6 + 3) slashing damage. </p><p><em><strong>Charm.</strong></em> One humanoid the fiend can see within 30 feet of it must succeed on a DC 15 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the fiend's verbal or telepathic commands. If the target suffers any harm or receives a suicidal command, it can repeat the saving throw, ending the effect on a success. If the target successfully saves against the effect, or if the effect on it ends, the target is immune to this fiend's Charm for the next 24 hours.</p><p>The fiend can have only one target charmed at a time. If it charms another, the effect on the previous target ends. </p><p><em><strong>Draining Kiss.</strong></em> The fiend kisses a creature charmed by it or a willing creature. The target must make a DC 15 Constitution saving throw against this magic, taking 32 (5d10 + 5) psychic damage on a failed save, or half as much damage on a successful one. The target's hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. </p><p><em><strong>Etherealness.</strong></em> The fiend magically enters the Ethereal Plane from the Material Plane, or vice versa.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/103/315/315/636252742573312994.jpeg",
        id: 274
    },
    {
        slug: "swarm_of_bats",
        name: "Swarm of Bats",
        type: "medium beast",
        alignment: "unaligned",
        ac: "12",
        hp: {
            default: 22,
            rng: [
                5,
                8,
                0
            ]
        },
        speed: {
            base: 0,
            unit: "ft."
        },
        stats: {
            STR: [
                5,
                -3
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                10,
                0
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                4,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "blindsight 60 ft.",
            " passive perception 11"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3><p><em><strong>Echolocation.</strong></em> The swarm can\u2019t use its blindsight while deafened.</p><p><em><strong>Keen Hearing.</strong></em> The swarm has advantage on Wisdom (Perception) checks that rely on hearing.</p><p><em><strong>Swarm.</strong></em> The swarm can occupy another creature\u2019s space and vice versa, and the swarm can move through any opening large enough for a Tiny bat. The swarm can\u2019t regain hit points or gain temporary hit points.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.\u00a0</strong></em><em>Melee Weapon Attack:</em> +4 to hit, reach 0 ft., one creature in the swarm's space. <em>Hit:</em> 5 (2d4) piercing damage, or 2 (1d4) piercing damage if the swarm has half of its hit points or fewer.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/906/315/315/636334289313689439.jpeg",
        id: 275
    },
    {
        slug: "swarm_of_insects",
        name: "Swarm of Insects",
        type: "medium beast",
        alignment: "unaligned",
        ac: "12 (natural armor)",
        hp: {
            default: 22,
            rng: [
                5,
                8,
                0
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                3,
                -4
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                10,
                0
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                7,
                -2
            ],
            CHA: [
                1,
                -5
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "blindsight 10 ft.",
            " passive perception 8"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3><p><em><strong>Swarm.</strong></em> The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite. </strong></em><em>Melee Weapon Attack:</em> +3 to hit, reach 0 ft., one target in the swarm's space. <em>Hit:</em> 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 276
    },
    {
        slug: "swarm_of_poisonous_snakes",
        name: "Swarm of Poisonous Snakes",
        type: "medium beast",
        alignment: "unaligned",
        ac: "14",
        hp: {
            default: 36,
            rng: [
                8,
                8,
                0
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                8,
                -1
            ],
            DEX: [
                18,
                4
            ],
            CON: [
                11,
                0
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                3,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "blindsight 10 ft.",
            " passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Swarm.</strong></em> The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny snake. The swarm can't regain hit points or gain temporary hit points.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em>. <em>Melee Weapon Attack:</em> +6 to hit, reach 0 ft., one creature in the swarm's space. <em>Hit:</em> 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer. The target must make a DC 10 Constitution saving throw, taking 14 (4d6) poison damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 277
    },
    {
        slug: "swarm_of_quippers",
        name: "Swarm of Quippers",
        type: "medium beast",
        alignment: "unaligned",
        ac: "13",
        hp: {
            default: 28,
            rng: [
                8,
                8,
                -8
            ]
        },
        speed: {
            base: 0,
            unit: "ft."
        },
        stats: {
            STR: [
                13,
                1
            ],
            DEX: [
                16,
                3
            ],
            CON: [
                9,
                -1
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                7,
                -2
            ],
            CHA: [
                2,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 8"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "1",
        xp: 200,
        traits_html: "<h3> Traits </h3><p><em><strong>Blood Frenzy.</strong></em> The swarm has advantage on melee attack rolls against any creature that doesn't have all its hit points. </p><p><em><strong>Swarm.</strong></em> The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny quipper. The swarm can't regain hit points or gain temporary hit points. </p><p><em><strong>Water Breathing.</strong></em> The swarm can breathe only underwater.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em>. <em>Melee Weapon Attack:</em> +5 to hit, reach 0 ft., one creature in the swarm's space. <em>Hit:</em> 14 (4d6) piercing damage, or 7 (2d6) piercing damage if the swarm has half of its hit points or fewer.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/18/276/315/315/636379781035768521.jpeg",
        id: 278
    },
    {
        slug: "swarm_of_rats",
        name: "Swarm of Rats",
        type: "medium beast",
        alignment: "unaligned",
        ac: "10",
        hp: {
            default: 24,
            rng: [
                7,
                8,
                -7
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                9,
                -1
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                9,
                -1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                3,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 30 ft.",
            " passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Smell.</strong></em> The swarm has advantage on Wisdom (Perception) checks that rely on smell. </p><p><em><strong>Swarm.</strong></em> The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain hit points or gain temporary hit points.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em>. <em>Melee Weapon Attack:</em> +2 to hit, reach 0 ft., one target in the swarm's space. <em>Hit:</em> 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/908/315/315/636334289541603972.jpeg",
        id: 279
    },
    {
        slug: "swarm_of_ravens",
        name: "Swarm of Ravens",
        type: "medium beast",
        alignment: "unaligned",
        ac: "12",
        hp: {
            default: 24,
            rng: [
                7,
                8,
                -7
            ]
        },
        speed: {
            base: 10,
            unit: "ft."
        },
        stats: {
            STR: [
                6,
                -2
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                8,
                -1
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +5"
        ],
        senses: [
            "passive perception 15"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3><p><em><strong>Swarm.</strong></em> The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny raven. The swarm can't regain hit points or gain temporary hit points.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Beaks.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target in the swarm's space. <em>Hit:</em> 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/555/315/315/636376341743427326.jpeg",
        id: 280
    },
    {
        slug: "tarrasque",
        name: "Tarrasque",
        type: "gargantuan monstrosity",
        alignment: "unaligned",
        ac: "25 (natural armor)",
        hp: {
            default: 676,
            rng: [
                33,
                20,
                330
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                30,
                10
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                30,
                10
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                11,
                0
            ]
        },
        saving_throws: [
            "INT +5",
            "WIS +9",
            "CHA +9"
        ],
        skills: [
            ""
        ],
        senses: [
            "blindsight 120 ft.",
            " passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "30",
        xp: 155000,
        traits_html: "<h3> Traits </h3><p><em><strong>Legendary Resistance (3/Day).</strong></em> If the tarrasque fails a saving throw, it can choose to succeed instead. </p><p><em><strong>Magic Resistance.</strong></em> The tarrasque has advantage on saving throws against spells and other magical effects. </p><p><em><strong>Reflective Carapace.</strong></em> Any time the tarrasque is targeted by a magic missile spell, a line spell, or a spell that requires a ranged attack roll, roll a d6. On a 1 to 5, the tarrasque is unaffected. On a 6, the tarrasque is unaffected, and the effect is reflected back at the caster as though it originated from the tarrasque, turning the caster into the target. </p><p><em><strong>Siege Monster.</strong></em> The tarrasque deals double damage to objects and structures.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The tarrasque can use its Frightful Presence. It then makes fiveattack: one with its bite, two with its claws, one with its horns, and one with its tail. It can use its Swallow instead of its bite. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +19 to hit, reach 10 ft., one target. <em>Hit:</em> 36 (4d12 + 10) piercing damage. If the target is a creature, it is grappled (escape DC 20). Until this grapple ends, the target is restrained, and the tarrasque can't bite another target. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +19 to hit, reach 15ft., one target. <em>Hit:</em> 28 (4d8 + 10) slashing damage. </p><p><em><strong>Horns.</strong></em> <em>Melee Weapon Attack:</em> +19 to hit, reach 10ft., one target. <em>Hit:</em> 32 (4d10 + 10) piercing damage. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +19 to hit, reach 20ft., one target. <em>Hit:</em> 24 (4d6 + 10) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be knocked prone. </p><p><em><strong>Frightful Presence.</strong></em> Each creature of the tarrasque's choice within 120 feet of it and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the tarrasque is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the tarrasque's Frightful Presence for the next 24 hours. </p><p><em><strong>Swallow.</strong></em> The tarrasque makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target takes the bite's damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the tarrasque, and it takes 56 (16d6) acid damage at the start of each of the tarrasque's turns.</p><p>If the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the tarrasque. If the tarrasque dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 30 feet of movement, exiting prone.</p><h3> LEGENDARY ACTIONS </h3><p>The tarrasque can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The tarrasque regains spent legendary actions at the start of its turn.</p><p><em><strong>Attack.</strong></em> The tarrasque makes one claw attack or tail attack. </p><p><em><strong>Move.</strong></em> The tarrasque moves up to half its speed. </p><p><em><strong>Chomp (Costs 2 Actions).</strong></em> The tarrasque makes one bite attack or uses its Swallow.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/101/1000/1000/636252741877524077.jpeg",
        id: 281
    },
    {
        slug: "thug",
        name: "Thug",
        type: "medium humanoid",
        alignment: "any",
        ac: "11 (leather armor)",
        hp: {
            default: 32,
            rng: [
                5,
                8,
                10
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                15,
                2
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                14,
                2
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                11,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "intimidation +2"
        ],
        senses: [
            "passive perception 10"
        ],
        languages: [
            "any one language (usually common)"
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3><p><em><strong>Pack Tactics.</strong></em> The thug has advantage on an attack roll against a creature if at least one of the thug's allies is within 5 feet of the creature and the ally isn't incapacitated.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The thug makes two melee attacks. </p><p><em><strong>Mace.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one creature. <em>Hit:</em> 5 (1d6 + 2) bludgeoning damage. </p><p><em><strong>Heavy Crossbow.</strong></em> <em>Ranged Weapon Attack:</em> +2 to hit, range 100/400 ft., one target. <em>Hit:</em> 5 (1d10) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/99/1000/1000/636252741335519081.jpeg",
        id: 282
    },
    {
        slug: "tiger",
        name: "Tiger",
        type: "large beast",
        alignment: "unaligned",
        ac: "12",
        hp: {
            default: 37,
            rng: [
                5,
                10,
                10
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                17,
                3
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                14,
                2
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                8,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3",
            "stealth +6"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 13"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "1",
        xp: 200,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Smell.</strong></em> The tiger has advantage on Wisdom (Perception) checks that rely on smell. </p><p><em><strong>Pounce.</strong></em> If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 8 (1d10 + 3) piercing damage.</p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d8 + 3) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 283
    },
    {
        slug: "treant",
        name: "Treant",
        type: "huge plant",
        alignment: "chaotic good",
        ac: "16 (natural armor)",
        hp: {
            default: 138,
            rng: [
                12,
                12,
                60
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                23,
                6
            ],
            DEX: [
                8,
                -1
            ],
            CON: [
                21,
                5
            ],
            INT: [
                12,
                1
            ],
            WIS: [
                16,
                3
            ],
            CHA: [
                12,
                1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            "common",
            "druidic",
            "elvish",
            "sylvan"
        ],
        challenge_lvl: "9",
        xp: 5000,
        traits_html: "<h3> Traits </h3><p><em><strong>False Appearance.</strong></em> While the treant remains motionless, it is indistinguishable from a normal tree. </p><p><em><strong>Siege Monster.</strong></em> The treant deals double damage to objects and structures.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The treant makes two slam attacks. </p><p><em><strong>Slam.</strong></em> <em>Melee Weapon Attack:</em> +10 to hit, reach 5 ft., one target. <em>Hit:</em> 16 (3d6 + 6) bludgeoning damage. </p><p><em><strong>Rock.</strong></em> <em>Ranged Weapon Attack:</em> +10 to hit, range 60/180 ft., one target. <em>Hit:</em> 28 (4d10 + 6) bludgeoning damage. </p><p><em><strong>Animate Trees (1/Day).</strong></em> The treant magically animates one or two trees it can see within 60 feet of it. These trees have the same statistics as a treant, except they have Intelligence and Charisma scores of 1, they can't speak, and they have only the Slam action option. An animated tree acts as an ally of the treant. The tree remains animate for 1 day or until it dies; until the treant dies or is more than 120 feet from the tree; or until the treant takes a bonus action to turn it back into an inanimate tree. The tree then takes root if possible.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/97/315/315/636252740537990664.jpeg",
        id: 284
    },
    {
        slug: "tribal_warrior",
        name: "Tribal Warrior",
        type: "medium humanoid",
        alignment: "any",
        ac: "12 (hide armor)",
        hp: {
            default: 11,
            rng: [
                2,
                8,
                2
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                13,
                1
            ],
            DEX: [
                11,
                0
            ],
            CON: [
                12,
                1
            ],
            INT: [
                8,
                -1
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                8,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 10"
        ],
        languages: [
            "any one language"
        ],
        challenge_lvl: 0.125,
        xp: 25,
        traits_html: "<h3> Traits </h3><p><em><strong>Pack Tactics.</strong></em> The warrior has advantage on an attack roll against a creature if at least one of the warrior's allies is within 5 feet of the creature and the ally isn't incapacitated.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Spear.</strong></em> <em>Melee or <em>Ranged Weapon Attack:</em></em> +3 to hit, reach 5 ft. or range 20/60 ft., one target. <em>Hit:</em> 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
        id: 285
    },
    {
        slug: "triceratops",
        name: "Triceratops",
        type: "huge beast",
        alignment: "unaligned",
        ac: "13 (natural armor)",
        hp: {
            default: 95,
            rng: [
                10,
                12,
                30
            ]
        },
        speed: {
            base: 50,
            unit: "ft."
        },
        stats: {
            STR: [
                22,
                6
            ],
            DEX: [
                9,
                -1
            ],
            CON: [
                17,
                3
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 10"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "5",
        xp: 1800,
        traits_html: "<h3> Traits </h3><p><em><strong>Trampling Charge.</strong></em> If the triceratops moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the triceratops can make one stomp attack against it as a bonus action.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Gore.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 5 ft., one target. <em>Hit:</em> 24 (4d8 + 6) piercing damage. </p><p><em><strong>Stomp.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 5 ft., one prone creature. <em>Hit:</em> 22 (3d10 + 6) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 286
    },
    {
        slug: "troll",
        name: "Troll",
        type: "large giant",
        alignment: "chaotic evil",
        ac: "15 (natural armor)",
        hp: {
            default: 84,
            rng: [
                8,
                10,
                40
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                20,
                5
            ],
            INT: [
                7,
                -2
            ],
            WIS: [
                9,
                -1
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +2"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 12"
        ],
        languages: [
            "giant"
        ],
        challenge_lvl: "5",
        xp: 1800,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Smell.</strong></em> The troll has advantage on Wisdom (Perception) checks that rely on smell. </p><p><em><strong>Regeneration.</strong></em> The troll regains 10 hit points at the start of its turn. If the troll takes acid or fire damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The troll makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d6 + 4) piercing damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 11 (2d6 + 4) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/95/315/315/636252739682234623.jpeg",
        id: 287
    },
    {
        slug: "twig_blight",
        name: "Twig Blight",
        type: "small plant",
        alignment: "neutral evil",
        ac: "13 natural armor",
        hp: {
            default: 4,
            rng: [
                1,
                6,
                1
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                6,
                -2
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                12,
                1
            ],
            INT: [
                4,
                -3
            ],
            WIS: [
                8,
                -1
            ],
            CHA: [
                3,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "stealth +3"
        ],
        senses: [
            "blindsight 60 ft. (blind beyond this radius)",
            " passive perception 9"
        ],
        languages: [
            "common understands but can\u00e2\u0080\u0099t speak"
        ],
        challenge_lvl: 0.125,
        xp: 25,
        traits_html: "<h3> Traits </h3><p><em><strong>False Appearance.</strong></em> While the blight remains motionless, it is indistinguishable from a dead shrub.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 3 (1d4 + 1) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/464/1000/1000/636376286997771487.png",
        id: 288
    },
    {
        slug: "tyrannosaurus_rex",
        name: "Tyrannosaurus Rex",
        type: "huge beast",
        alignment: "unaligned",
        ac: "13 (natural armor)",
        hp: {
            default: 136,
            rng: [
                13,
                12,
                52
            ]
        },
        speed: {
            base: 50,
            unit: "ft."
        },
        stats: {
            STR: [
                25,
                7
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                19,
                4
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                9,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +4"
        ],
        senses: [
            "passive perception 14"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "8",
        xp: 3900,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The tyrannosaurus makes twoattack: one with its bite and one with its tail. It can't make both attacks against the same target. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +10 to hit, reach 10 ft., one target. <em>Hit:</em> 33 (4d12 + 7) piercing damage. If the target is a Medium or smaller creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the tyrannosaurus can't bite another target. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +10 to hit, reach 10 ft., one target. <em>Hit:</em> 20 (3d8 + 7) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/594/1000/1000/636376369004412963.jpeg",
        id: 289
    },
    {
        slug: "unicorn",
        name: "Unicorn",
        type: "large celestial",
        alignment: "lawful good",
        ac: "12",
        hp: {
            default: 67,
            rng: [
                9,
                10,
                18
            ]
        },
        speed: {
            base: 50,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                15,
                2
            ],
            INT: [
                11,
                0
            ],
            WIS: [
                17,
                3
            ],
            CHA: [
                16,
                3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 13"
        ],
        languages: [
            "celestial",
            "elvish",
            "sylvan",
            "telepathy 60 ft."
        ],
        challenge_lvl: "5",
        xp: 1800,
        traits_html: "<h3> Traits </h3><p><em><strong>Charge.</strong></em> If the unicorn moves at least 20 feet straight toward a target and then hits it with a horn attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone. </p><p><em><strong>Innate Spellcasting.</strong></em> The unicorn's innate spellcasting ability is Charisma (spell save DC 14). The unicorn can innately cast the following spells, requiring nocomponent: </p><p>Atwil: detect evil and good, druidcraft, pass without trace </p><p>1/dayeac: calm emotions, dispel evil and good, entangle </p><p><em><strong>Magic Resistance.</strong></em> The unicorn has advantage on saving throws against spells and other magical effects. </p><p><em><strong>Magic Weapons.</strong></em> The unicorn's weapon attacks are magical.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The unicorn makes twoattack: one with its hooves and one with its horn. </p><p><em><strong>Hooves.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 11 (2d6 + 4) bludgeoning damage. </p><p><em><strong>Horn.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 8 (1d8 + 4) piercing damage. </p><p><em><strong>Healing Touch (3/Day).</strong></em> The unicorn touches another creature with its horn. The target magically regains 11 (2d8 + 2) hit points. In addition, the touch removes all diseases and neutralizes all poisons afflicting the target. </p><p><em><strong>Teleport (1/Day).</strong></em> The unicorn magically teleports itself and up to three willing creatures it can see within 5 feet of it, along with any equipment they are wearing or carrying, to a location the unicorn is familiar with, up to 1 mile away.</p><h3> LEGENDARY ACTIONS </h3><p>The unicorn can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The unicorn regains spent legendary actions at the start of its turn. </p><p><em><strong>Hooves.</strong></em> The unicorn makes one attack with its hooves. </p><p><em><strong>Shimmering Shield (Costs 2 Actions).</strong></em> The unicorn creates a shimmering, magical field around itself or another creature it can see within 60 feet of it. The target gains a +2 bonus to AC until the end of the unicorn's next turn. </p><p><em><strong>Heal Self (Costs 3 Actions).</strong></em> The unicorn magically regains 11 (2d8 + 2) hit points.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/93/1000/1000/636252739248798123.jpeg",
        id: 290
    },
    {
        slug: "vampire",
        name: "Vampire",
        type: "medium undead",
        alignment: "lawful evil",
        ac: "16 (natural armor)",
        hp: {
            default: 144,
            rng: [
                17,
                8,
                68
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                18,
                4
            ],
            CON: [
                18,
                4
            ],
            INT: [
                17,
                3
            ],
            WIS: [
                15,
                2
            ],
            CHA: [
                18,
                4
            ]
        },
        saving_throws: [
            "DEX +9",
            "WIS +7",
            "CHA +9"
        ],
        skills: [
            "perception +7",
            "stealth +9"
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 17"
        ],
        languages: [
            "the languages it knew in life"
        ],
        challenge_lvl: "13",
        xp: 10000,
        traits_html: "<h3> Traits </h3><p><em><strong>Shapechanger.</strong></em> If the vampire isn't in sunlight or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form.</p><p>While in bat form, the vampire can't speak, its walking speed is 5 feet, and it has a flying speed of 30 feet. Its statistics, other than its size and speed, are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies.</p><p>While in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can\u2019t pass through water. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight. </p><p><em><strong>Legendary Resistance (3/Day).</strong></em> If the vampire fails a saving throw, it can choose to succeed instead. </p><p><em><strong>Misty Escape.</strong></em> When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed.</p><p>While it has 0 hit points in mist form, it can't revert to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it reverts to its vampire form. It is then paralyzed until it regains at least 1 hit point. After spending 1 hour in its resting place with 0 hit points, it regains 1 hit point. </p><p><em><strong>Regeneration.</strong></em> The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn. </p><p><em><strong>Spider Climb.</strong></em> The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check. </p><p><em><strong>Vampire Weaknesses.</strong></em> The vampire has the followingflaw: </p><p><em>Forbiddance.</em> The vampire can't enter a residence without an invitation from one of the occupants. </p><p><em>Harmed by Running Water.</em> The vampire takes 20 acid damage if it ends its turn in running water. </p><p><em>Stake to the Heart.</em> If a piercing weapon made of wood is driven into the vampire's heart while the vampire is incapacitated in its resting place, the vampire is paralyzed until the stake is removed. </p><p><em>Sunlight Hypersensitivity.</em> The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack. (Vampire Form Only).</strong></em> The vampire makes two attacks, only one of which can be a bite attack. </p><p><em><strong>Unarmed Strike (Vampire Form Only).</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 5 ft., one creature. <em>Hit:</em> 8 (1d8 + 4) bludgeoning damage. Instead of dealing damage, the vampire can grapple the target (escape DC 18). </p><p><em><strong>Bite. (Bat or Vampire Form Only).</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. <em>Hit:</em> 7 (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control. </p><p><em><strong>Charm.</strong></em> The vampire targets one humanoid it can see within 30 feet of it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bite attack.</p><p>Each time the vampire or the vampire's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect. </p><p><em><strong>Children of the Night (1/Day).</strong></em> The vampire magically calls 2d4 swarms of bats or rats (swarm of bats, swarm of rats), provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolves (wolf) instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action.</p><h3> LEGENDARY ACTIONS </h3><p>The vampire can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The vampire regains spent legendary actions at the start of its turn. </p><p><em><strong>Move.</strong></em> The vampire moves up to its speed without provoking opportunity attacks. </p><p><em><strong>Unarmed Strike.</strong></em> The vampire makes one unarmed strike. </p><p><em><strong>Bite.</strong></em>(Costs 2 Actions). The vampire makes one bite attack.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/91/1000/1000/636252738665379794.jpeg",
        id: 291
    },
    {
        slug: "vampire_spawn",
        name: "Vampire Spawn",
        type: "medium undead",
        alignment: "neutral evil",
        ac: "15 (natural armor)",
        hp: {
            default: 82,
            rng: [
                11,
                8,
                33
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                16,
                3
            ],
            CON: [
                16,
                3
            ],
            INT: [
                11,
                0
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                12,
                1
            ]
        },
        saving_throws: [
            "DEX +6",
            "WIS +3"
        ],
        skills: [
            "perception +3",
            "stealth +6"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 13"
        ],
        languages: [
            "the languages it knew in life"
        ],
        challenge_lvl: "5",
        xp: 1800,
        traits_html: "<h3> Traits </h3><p><em><strong>Regeneration.</strong></em> The vampire regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn. </p><p><em><strong>Spider Climb.</strong></em> The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check. </p><p><em><strong>Vampire Weaknesses.</strong></em> The vampire has the followingflaw: </p><p><em>Forbiddance.</em> The vampire can't enter a residence without an invitation from one of the occupants. </p><p><em>Harmed by Running Water.</em> The vampire takes 20 acid damage when it ends its turn in running water. </p><p><em>Stake to the Heart.</em> The vampire is destroyed if a piercing weapon made of wood is driven into its heart while it is incapacitated in its resting place. </p><p><em>Sunlight Hypersensitivity.</em> The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The vampire makes two attacks, only one of which can be a bite attack. </p><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one creature. <em>Hit:</em> 8 (2d4 + 3) slashing damage. Instead of dealing damage, the vampire can grapple the target (escape DC 13). </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. <em>Hit:</em> 6 (1d6 + 3) piercing damage plus 7 (2d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/89/1000/1000/636252738148839638.jpeg",
        id: 292
    },
    {
        slug: "veteran",
        name: "Veteran",
        type: "medium humanoid",
        alignment: "any",
        ac: "17 (splint)",
        hp: {
            default: 58,
            rng: [
                9,
                8,
                18
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                14,
                2
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                10,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "athletics +5",
            "perception +2"
        ],
        senses: [
            "passive perception 12"
        ],
        languages: [
            "any one language (usually common)"
        ],
        challenge_lvl: "3",
        xp: 700,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack. </p><p><em><strong>Longsword.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands. </p><p><em><strong>Shortsword.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (1d6 + 3) piercing damage. </p><p><em><strong>Heavy Crossbow.</strong></em> <em>Ranged Weapon Attack:</em> +3 to hit, range 100/400 ft., one target. <em>Hit:</em> 6 (1d10 + 1) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
        id: 293
    },
    {
        slug: "violet_fungus",
        name: "Violet Fungus",
        type: "medium plant",
        alignment: "unaligned",
        ac: "5",
        hp: {
            default: 18,
            rng: [
                4,
                8,
                0
            ]
        },
        speed: {
            base: 5,
            unit: "ft."
        },
        stats: {
            STR: [
                3,
                -4
            ],
            DEX: [
                1,
                -5
            ],
            CON: [
                10,
                0
            ],
            INT: [
                1,
                -5
            ],
            WIS: [
                3,
                -4
            ],
            CHA: [
                1,
                -5
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "blindsight 30 ft.",
            " passive perception 6"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3><p><em><strong>False Appearance.</strong></em> While the violet fungus remains motionless, it is indistinguishable from an ordinary fungus.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The fungus makes 1d4 Rotting Touch attacks.</p><p><em><strong>Rotting Touch.</strong></em> <em>Melee Weapon Attack:</em> +2 to hit, reach 10 ft., one creature. <em>Hit:</em> 4 (1d8) necrotic damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/573/315/315/636376357964412799.jpeg",
        id: 294
    },
    {
        slug: "vrock",
        name: "Vrock",
        type: "large fiend",
        alignment: "chaotic evil",
        ac: "15 (natural armor)",
        hp: {
            default: 104,
            rng: [
                11,
                10,
                44
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                17,
                3
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                18,
                4
            ],
            INT: [
                8,
                -1
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                8,
                -1
            ]
        },
        saving_throws: [
            "DEX +5",
            "WIS +4",
            "CHA +2"
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 11"
        ],
        languages: [
            "abyssal",
            "telepathy 120 ft."
        ],
        challenge_lvl: "6",
        xp: 2300,
        traits_html: "<h3> Traits </h3><p><em><strong>Magic Resistance.</strong></em> The vrock has advantage on saving throws against spells and other magical effects.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The vrock makes twoattack: one with its beak and one with its talons. </p><p><em><strong>Beak.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 10 (2d6 + 3) piercing damage. </p><p><em><strong>Talons.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 14 (2d10 + 3) slashing damage. </p><p><em><strong>Spores (Recharge 6).</strong></em> A 15\u00ad-foot\u00ad-radius cloud of toxic spores extends out from the vrock. The spores spread around corners. Each creature in that area must succeed on a DC 14 Constitution saving throw or become poisoned. While poisoned in this way, a target takes 5 (1d10) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Emptying a vial of holy water on the target also ends the effect on it. </p><p><em><strong>Stunning Screech (1/Day).</strong></em> The vrock emits a horrific screech. Each creature within 20 feet of it that can hear it and that isn't a demon must succeed on a DC 14 Constitution saving throw or be stunned until the end of the vrock's next turn.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/87/315/315/636252737538172594.jpeg",
        id: 295
    },
    {
        slug: "vulture",
        name: "Vulture",
        type: "medium beast",
        alignment: "unaligned",
        ac: "10",
        hp: {
            default: 5,
            rng: [
                1,
                8,
                1
            ]
        },
        speed: {
            base: 10,
            unit: "ft."
        },
        stats: {
            STR: [
                7,
                -2
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                13,
                1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                4,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3"
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Sight and Smell.</strong></em> The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell. </p><p><em><strong>Pack Tactics.</strong></em> The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 feet of the creature and the ally isn't incapacitated.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Beak.</strong></em> <em>Melee Weapon Attack:</em> +2 to hit, reach 5 ft., one target. <em>Hit:</em> 2 (1d4) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 296
    },
    {
        slug: "warhorse",
        name: "Warhorse",
        type: "large beast",
        alignment: "unaligned",
        ac: "11",
        hp: {
            default: 19,
            rng: [
                3,
                10,
                3
            ]
        },
        speed: {
            base: 60,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                13,
                1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "passive perception 11"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3><p><em><strong>Trampling Charge.</strong></em> If the horse moves at least 20 feet straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the horse can make another attack with its hooves against it as a bonus action.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Hooves.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 11 (2d6 + 4) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 297
    },
    {
        slug: "warhorse_skeleton",
        name: "Warhorse Skeleton",
        type: "large undead",
        alignment: "lawful evil",
        ac: "13 (barding scraps)",
        hp: {
            default: 22,
            rng: [
                3,
                10,
                6
            ]
        },
        speed: {
            base: 60,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                15,
                2
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                8,
                -1
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 9"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Hooves.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 11 (2d6 + 4) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/660/undead.jpg",
        id: 298
    },
    {
        slug: "water_elemental",
        name: "Water Elemental",
        type: "large elemental",
        alignment: "neutral",
        ac: "14 (natural armor)",
        hp: {
            default: 114,
            rng: [
                12,
                10,
                48
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                18,
                4
            ],
            INT: [
                5,
                -3
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                8,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 10"
        ],
        languages: [
            "aquan"
        ],
        challenge_lvl: "5",
        xp: 1800,
        traits_html: "<h3> Traits </h3><p><em><strong>Water Form.</strong></em> The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing. </p><p><em><strong>Freeze.</strong></em> If the elemental takes cold damage, it partially freezes; its speed is reduced by 20 feet until the end of its next turn.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The elemental makes two slam attacks. </p><p><em><strong>Slam.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d8 + 4) bludgeoning damage. </p><p><em><strong>Whelm (Recharge 4\u20136).</strong></em> Each creature in the elemental's space must make a DC 15 Strength saving throw. On a failure, a target takes 13 (2d8 + 4) bludgeoning damage. If it is Large or smaller, it is also grappled (escape DC 14). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space.</p><p>The elemental can grapple one Large creature or up to two Medium or smaller creatures at one time. At the start of each of the elemental's turns, each target grappled by it takes 13 (2d8 + 4) bludgeoning damage. A creature within 5 feet of the elemental can pull a creature or object out of it by taking an action to make a DC 14 Strength and succeeding.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/84/315/315/636252736680781387.jpeg",
        id: 299
    },
    {
        slug: "weasel",
        name: "Weasel",
        type: "tiny beast",
        alignment: "unaligned",
        ac: "13",
        hp: {
            default: 1,
            rng: [
                1,
                4,
                -1
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                3,
                -4
            ],
            DEX: [
                16,
                3
            ],
            CON: [
                8,
                -1
            ],
            INT: [
                2,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                3,
                -4
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3",
            "stealth +5"
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "0",
        xp: 10,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Hearing and Smell.</strong></em> The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 1 piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
        id: 300
    },
    {
        slug: "werebear",
        name: "Werebear",
        type: "medium humanoid",
        alignment: "neutral good",
        ac: "10 in humanoid form, 11 in bear and hybrid form",
        hp: {
            default: 135,
            rng: [
                18,
                8,
                54
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                19,
                4
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                17,
                3
            ],
            INT: [
                11,
                0
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                12,
                1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +7"
        ],
        senses: [
            "passive perception 17"
        ],
        languages: [
            "common (can't speak in bear form)"
        ],
        challenge_lvl: "5",
        xp: 1800,
        traits_html: "<h3> Traits </h3><p><em><strong>Shapechanger.</strong></em> The werebear can use its action to polymorph into a Large bear-humanoid hybrid or into a Large bear, or back into its true form, which is humanoid. Its statistics, other than its size and AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies. </p><p><em><strong>Keen Smell.</strong></em> The werebear has advantage on Wisdom (Perception) checks that rely on smell.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> In bear form, the werebear makes two claw attacks. In humanoid form, it makes two greataxe attacks. In hybrid form, it can attack like a bear or a humanoid. </p><p><em><strong>Bite (Bear or Hybrid Form Only).</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 15 (2d10 + 4) piercing damage. If the target is a humanoid, it must succeed on a DC 14 Constitution saving throw or be cursed with werebear lycanthropy. </p><p><em><strong>Claw (Bear or Hybrid Form Only).</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d8 + 4) slashing damage. </p><p><em><strong>Greataxe (Humanoid or Hybrid Form Only).</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 10 (1d12 + 4) slashing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/82/1000/1000/636252736005297867.jpeg",
        id: 301
    },
    {
        slug: "wereboar",
        name: "Wereboar",
        type: "medium humanoid",
        alignment: "neutral evil",
        ac: "10 in humanoid form, 11 in boar or hybrid form",
        hp: {
            default: 78,
            rng: [
                12,
                8,
                24
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                17,
                3
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                15,
                2
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                8,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +2"
        ],
        senses: [
            "passive perception 12"
        ],
        languages: [
            "common (can't speak in boar form)"
        ],
        challenge_lvl: "4",
        xp: 1100,
        traits_html: "<h3> Traits </h3><p><em><strong>Shapechanger.</strong></em> The wereboar can use its action to polymorph into a boar-humanoid hybrid or into a boar, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies. </p><p><em><strong>Charge (Boar or Hybrid Form Only).</strong></em> If the wereboar moves at least 15 feet straight toward a target and then hits it with its tusks on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone. </p><p><em><strong>Relentless (Recharges after a Short or Long Rest).</strong></em> If the wereboar takes 14 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack (Humanoid or Hybrid Form Only).</strong></em> The wereboar makes two attacks, only one of which can be with its tusks. </p><p><em><strong>Maul (Humanoid or Hybrid Form Only).</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 10 (2d6 + 3) bludgeoning damage. </p><p><em><strong>Tusks (Boar or Hybrid Form Only).</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 10 (2d6 + 3) slashing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with wereboar lycanthropy.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/80/315/315/636252735506840152.jpeg",
        id: 302
    },
    {
        slug: "wererat",
        name: "Wererat",
        type: "medium humanoid",
        alignment: "lawful evil",
        ac: "12",
        hp: {
            default: 33,
            rng: [
                6,
                8,
                6
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                10,
                0
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                12,
                1
            ],
            INT: [
                11,
                0
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                8,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +2",
            "stealth +4"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 12"
        ],
        languages: [
            "common (can't speak in rat form)"
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Shapechanger.</strong></em> The wererat can use its action to polymorph into a rat-humanoid hybrid or into a giant rat, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies. </p><p><em><strong>Keen Smell.</strong></em> The wererat has advantage on Wisdom (Perception) checks that rely on smell.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack (Humanoid or Hybrid Form Only).</strong></em> The wererat makes two attacks, only one of which can be a bite. </p><p><em><strong>Bite (Rat or Hybrid Form Only).</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 4 (1d4 + 2) piercing damage. If the target is a humanoid, it must succeed on a DC 11 Constitution saving throw or be cursed with wererat lycanthropy. </p><p><em><strong>Shortsword (Humanoid or Hybrid Form Only).</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 5 (1d6 + 2) piercing damage. </p><p><em><strong>Hand Crossbow (Humanoid or Hybrid Form Only).</strong></em> <em>Ranged Weapon Attack:</em> +4 to hit, range 30/120 ft., one target. <em>Hit:</em> 5 (1d6 + 2) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/78/1000/1000/636252735121410517.jpeg",
        id: 303
    },
    {
        slug: "weretiger",
        name: "Weretiger",
        type: "medium humanoid",
        alignment: "neutral",
        ac: "12",
        hp: {
            default: 120,
            rng: [
                16,
                8,
                48
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                17,
                3
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                16,
                3
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                11,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +5",
            "stealth +4"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 15"
        ],
        languages: [
            "common (can't speak in tiger form)"
        ],
        challenge_lvl: "4",
        xp: 1100,
        traits_html: "<h3> Traits </h3><p><em><strong>Shapechanger.</strong></em> The weretiger can use its action to polymorph into a tiger-humanoid hybrid or into a tiger, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies. </p><p><em><strong>Keen Hearing and Smell.</strong></em> The weretiger has advantage on Wisdom (Perception) checks that rely on hearing or smell. </p><p><em><strong>Pounce (Tiger or Hybrid Form Only).</strong></em> If the weretiger moves at least 15 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the weretiger can make one bite attack against it as a bonus action.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack (Humanoid or Hybrid Form Only).</strong></em> In humanoid form, the weretiger makes two scimitar attacks or two longbow attacks. In hybrid form, it can attack like a humanoid or make two claw attacks. </p><p><em><strong>Bite (Tiger or Hybrid Form Only).</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 8 (1d10 + 3) piercing damage. If the target is a humanoid, it must succeed on a DC 13 Constitution saving throw or be cursed with weretiger lycanthropy. </p><p><em><strong>Claw (Tiger or Hybrid Form Only).</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d8 + 3) slashing damage. </p><p><em><strong>Scimitar (Humanoid or Hybrid Form Only).</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (1d6 + 3) slashing damage.</p><p><em><strong>Longbow (Humanoid or Hybrid Form Only).</strong></em> <em>Ranged Weapon Attack:</em> +4 to hit, range 150/600 ft., one target. <em>Hit:</em> 6 (1d8 + 2) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/76/1000/1000/636252734783831163.jpeg",
        id: 304
    },
    {
        slug: "werewolf",
        name: "Werewolf",
        type: "medium humanoid",
        alignment: "chaotic evil",
        ac: "11 in humanoid form, 12 in wolf or hybrid form",
        hp: {
            default: 58,
            rng: [
                9,
                8,
                18
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                15,
                2
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                14,
                2
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                10,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +4",
            "stealth +3"
        ],
        senses: [
            "passive perception 14"
        ],
        languages: [
            "common (can't speak in wolf form)"
        ],
        challenge_lvl: "3",
        xp: 700,
        traits_html: "<h3> Traits </h3><p><em><strong>Shapechanger.</strong></em> The werewolf can use its action to polymorph into a wolf-humanoid hybrid or into a wolf, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies. </p><p><em><strong>Keen Hearing and Smell.</strong></em> The werewolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack. (Humanoid or Hybrid Form Only).</strong></em> The werewolf makes twoattack: one with its bite and one with its claws or spear. </p><p><em><strong>Bite (Wolf or Hybrid Form Only).</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (1d8 + 2) piercing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with werewolf lycanthropy. </p><p><em><strong>Claws. (Hybrid Form Only).</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one creature. <em>Hit:</em> 7 (2d4 + 2) slashing damage. </p><p><em><strong>Spear (Humanoid Form Only).</strong></em> <em>Melee or <em>Ranged Weapon Attack:</em></em> +4 to hit, reach 5 ft. or range 20/60 ft., one creature. <em>Hit:</em> 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/74/1000/1000/636252734224239957.jpeg",
        id: 305
    },
    {
        slug: "white_dragon_wyrmling",
        name: "White Dragon Wyrmling",
        type: "medium dragon",
        alignment: "chaotic evil",
        ac: "16 (natural armor)",
        hp: {
            default: 32,
            rng: [
                5,
                8,
                10
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                14,
                2
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                14,
                2
            ],
            INT: [
                5,
                -3
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                11,
                0
            ]
        },
        saving_throws: [
            "DEX +2",
            "CON +4",
            "WIS +2",
            "CHA +2"
        ],
        skills: [
            "perception +4",
            "stealth +2"
        ],
        senses: [
            "blindsight 10 ft.",
            "darkvision 60 ft.",
            " passive perception 14"
        ],
        languages: [
            "draconic"
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d10 + 2) piercing damage plus 2 (1d4) cold damage. </p><p><em><strong>Cold Breath (Recharge 5\u20136).</strong></em> The dragon exhales an icy blast of hail in a 15-foot cone. Each creature in that area must make a DC 12 Constitution saving throw, taking 22 (5d8) cold damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/415/1000/1000/636252789083357808.jpeg",
        id: 306
    },
    {
        slug: "wight",
        name: "Wight",
        type: "medium undead",
        alignment: "neutral evil",
        ac: "14 (studded leather)",
        hp: {
            default: 45,
            rng: [
                6,
                8,
                18
            ]
        },
        speed: {
            base: 30,
            unit: "ft."
        },
        stats: {
            STR: [
                15,
                2
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                16,
                3
            ],
            INT: [
                10,
                0
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                15,
                2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3",
            "stealth +4"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 13"
        ],
        languages: [
            "the languages it knew in life"
        ],
        challenge_lvl: "3",
        xp: 700,
        traits_html: "<h3> Traits </h3><p><em><strong>Sunlight Sensitivity.</strong></em> While in sunlight, the wight has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The wight makes two longsword attacks or two longbow attacks. It can use its Life Drain in place of one longsword attack. </p><p><em><strong>Life Drain.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one creature. <em>Hit:</em> 5 (1d6 + 2) necrotic damage. The target must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.</p><p>A humanoid slain by this attack rises 24 hours later as a zombie under the wight's control, unless the humanoid is restored to life or its body is destroyed. The wight can have no more than twelve zombies under its control at one time. </p><p><em><strong>Longsword.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (1d8 + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands. </p><p><em><strong>Longbow.</strong></em> <em>Ranged Weapon Attack:</em> +4 to hit, range 150/600 ft., one target. <em>Hit:</em> 6 (1d8 + 2) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/56/315/315/636252726349692861.jpeg",
        id: 307
    },
    {
        slug: "will_o_wisp",
        name: "Will-o'-Wisp",
        type: "tiny undead",
        alignment: "chaotic evil",
        ac: "19",
        hp: {
            default: 22,
            rng: [
                9,
                4,
                0
            ]
        },
        speed: {
            base: 0,
            unit: "ft."
        },
        stats: {
            STR: [
                1,
                -5
            ],
            DEX: [
                28,
                9
            ],
            CON: [
                10,
                0
            ],
            INT: [
                13,
                1
            ],
            WIS: [
                14,
                2
            ],
            CHA: [
                11,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 120 ft.",
            " passive perception 12"
        ],
        languages: [
            "the languages it knew in life"
        ],
        challenge_lvl: "2",
        xp: 450,
        traits_html: "<h3> Traits </h3><p><em><strong>Consume Life.</strong></em> As a bonus action, the will-o'-wisp can target one creature it can see within 5 feet of it that has 0 hit points and is still alive. The target must succeed on a DC 10 Constitution saving throw against this magic or die. If the target dies, the will-o'-wisp regains 10 (3d6) hit points. </p><p><em><strong>Ephemeral.</strong></em> The will-o'-wisp can't wear or carry anything. </p><p><em><strong>Incorporeal Movement.</strong></em> The will-o'-wisp can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object. </p><p><em><strong>Variable Illumination.</strong></em> The will-o'-wisp sheds bright light in a 5- to 20-foot radius and dim light for an additional number of feet equal to the chosen radius. The will-o'-wisp can alter the radius as a bonus action.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Shock.</strong></em> Melee SpellAttac: +4 to hit, reach 5 ft., one creature. <em>Hit:</em> 9 (2d8) lightning damage. </p><p><em><strong>Invisibility.</strong></em> The will-o'-wisp and its light magically become invisible until it attacks or uses its Consume Life, or until its concentration ends (as if concentrating on a spell).</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/585/315/315/636376363763232290.jpeg",
        id: 308
    },
    {
        slug: "winter_wolf",
        name: "Winter Wolf",
        type: "large monstrosity",
        alignment: "neutral evil",
        ac: "13 (natural armor)",
        hp: {
            default: 75,
            rng: [
                10,
                10,
                20
            ]
        },
        speed: {
            base: 50,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                14,
                2
            ],
            INT: [
                7,
                -2
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                8,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +5",
            "stealth +3"
        ],
        senses: [
            "passive perception 15"
        ],
        languages: [
            "common",
            "giant",
            "winter wolf"
        ],
        challenge_lvl: "3",
        xp: 700,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Hearing and Smell.</strong></em> The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell. </p><p><em><strong>Pack Tactics.</strong></em> The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated. </p><p><em><strong>Snow Camouflage.</strong></em> The wolf has advantage on Dexterity (Stealth) checks made to hide in snowy terrain.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 11 (2d6 + 4) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone. </p><p><em><strong>Cold Breath (Recharge 5\u20136).</strong></em> The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/54/315/315/636252725270715296.jpeg",
        id: 309
    },
    {
        slug: "wolf",
        name: "Wolf",
        type: "medium beast",
        alignment: "unaligned",
        ac: "13 (natural armor)",
        hp: {
            default: 11,
            rng: [
                2,
                8,
                2
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                12,
                1
            ],
            DEX: [
                15,
                2
            ],
            CON: [
                12,
                1
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3",
            "stealth +4"
        ],
        senses: [
            "passive perception 13"
        ],
        languages: [
            ""
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Hearing and Smell.</strong></em> The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.</p><p><em><strong>Pack Tactics.</strong></em> The wolf has advantage on attack rolls against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +4 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (2d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/482/1000/1000/636376300223855327.jpeg",
        id: 310
    },
    {
        slug: "worg",
        name: "Worg",
        type: "large monstrosity",
        alignment: "neutral evil",
        ac: "13 (natural armor)",
        hp: {
            default: 26,
            rng: [
                4,
                10,
                4
            ]
        },
        speed: {
            base: 50,
            unit: "ft."
        },
        stats: {
            STR: [
                16,
                3
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                13,
                1
            ],
            INT: [
                7,
                -2
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                8,
                -1
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +4"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 14"
        ],
        languages: [
            "goblin",
            "worg"
        ],
        challenge_lvl: 0.5,
        xp: 100,
        traits_html: "<h3> Traits </h3><p><em><strong>Keen Hearing and Smell.</strong></em> The worg has advantage on Wisdom (Perception) checks that rely on hearing or smell.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/52/1000/1000/636252724662073178.jpeg",
        id: 311
    },
    {
        slug: "wraith",
        name: "Wraith",
        type: "medium undead",
        alignment: "neutral evil",
        ac: "13",
        hp: {
            default: 67,
            rng: [
                9,
                8,
                27
            ]
        },
        speed: {
            base: 0,
            unit: "ft."
        },
        stats: {
            STR: [
                6,
                -2
            ],
            DEX: [
                16,
                3
            ],
            CON: [
                16,
                3
            ],
            INT: [
                12,
                1
            ],
            WIS: [
                14,
                2
            ],
            CHA: [
                15,
                2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 12"
        ],
        languages: [
            "the languages it knew in life"
        ],
        challenge_lvl: "5",
        xp: 1800,
        traits_html: "<h3> Traits </h3><p><em><strong>Incorporeal Movement.</strong></em> The wraith can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object. </p><p><em><strong>Sunlight Sensitivity.</strong></em> While in sunlight, the wraith has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Life Drain.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one creature. <em>Hit:</em> 21 (4d8 + 3) necrotic damage. The target must succeed on a DC 14 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. </p><p><em><strong>Create Specter.</strong></em> The wraith targets a humanoid within 10 feet of it that has been dead for no longer than 1 minute and died violently. The target's spirit rises as a specter in the space of its corpse or in the nearest unoccupied space. The specter is under the wraith's control. The wraith can have no more than seven specters under its control at one time.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/50/1000/1000/636252724191790008.jpeg",
        id: 312
    },
    {
        slug: "wyvern",
        name: "Wyvern",
        type: "large dragon",
        alignment: "unaligned",
        ac: "13 (natural armor)",
        hp: {
            default: 110,
            rng: [
                13,
                10,
                39
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                19,
                4
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                16,
                3
            ],
            INT: [
                5,
                -3
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                6,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +4"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 14"
        ],
        languages: [
            ""
        ],
        challenge_lvl: "6",
        xp: 2300,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The wyvern makes twoattack: one with its bite and one with its stinger. While flying, it can use its claws in place of one other attack. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 10 ft., one creature. <em>Hit:</em> 11 (2d6 + 4) piercing damage. </p><p><em><strong>Claws.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d8 + 4) slashing damage. </p><p><em><strong>Stinger.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 10 ft., one creature. <em>Hit:</em> 11 (2d6 + 4) piercing damage. The target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/48/315/315/636252723695596000.jpeg",
        id: 313
    },
    {
        slug: "xorn",
        name: "Xorn",
        type: "medium elemental",
        alignment: "neutral",
        ac: "19 (natural armor)",
        hp: {
            default: 73,
            rng: [
                7,
                8,
                42
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                17,
                3
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                22,
                6
            ],
            INT: [
                11,
                0
            ],
            WIS: [
                10,
                0
            ],
            CHA: [
                11,
                0
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +6",
            "stealth +3"
        ],
        senses: [
            "darkvision 60 ft.",
            "tremorsense 60 ft.",
            " passive perception 16"
        ],
        languages: [
            "terran"
        ],
        challenge_lvl: "5",
        xp: 1800,
        traits_html: "<h3> Traits </h3><p><em><strong>Earth Glide.</strong></em> The xorn can burrow through nonmagical, unworked earth and stone. While doing so, the xorn doesn't disturb the material it moves through. </p><p><em><strong>Stone Camouflage.</strong></em> The xorn has advantage on Dexterity (Stealth) checks made to hide in rocky terrain. </p><p><em><strong>Treasure Sense.</strong></em> The xorn can pinpoint, by scent, the location of precious metals and stones, such as coins and gems, within 60 feet of it.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The xorn makes three claw attacks and one bite attack.</p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 6 (1d6 + 3) slashing damage. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (3d6 + 3) piercing damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/46/1000/1000/636252723241554579.jpeg",
        id: 314
    },
    {
        slug: "yeti",
        name: "Yeti",
        type: "large monstrosity",
        alignment: "chaotic evil",
        ac: "12 natural armor",
        hp: {
            default: 51,
            rng: [
                6,
                10,
                18
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                13,
                1
            ],
            CON: [
                16,
                3
            ],
            INT: [
                8,
                -1
            ],
            WIS: [
                12,
                1
            ],
            CHA: [
                7,
                -2
            ]
        },
        saving_throws: [
            ""
        ],
        skills: [
            "perception +3",
            "stealth +3"
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 13"
        ],
        languages: [
            "yeti"
        ],
        challenge_lvl: "3",
        xp: 700,
        traits_html: "<h3> Traits </h3><div>\n<p><em><strong>Fear of Fire.</strong></em> If the yeti takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn.</p>\n<p><em><strong>Keen Smell.</strong></em> The yeti has advantage on Wisdom (Perception) checks that rely on smell.</p>\n<p><em><strong>Snow Camouflage.</strong></em> The yeti has advantage on Dexterity (Stealth) checks made to hide in snowy terrain.</p>\n</div>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The yeti can use its Chilling Gaze and makes two claw attacks.</p><p><em><strong>Claw.</strong></em> Melee WeaponAttac: +6 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d6 + 4) slashing damage plus 3 (1d6) cold damage.</p><p><em><strong>Chilling Gaze.</strong></em> The yeti targets one creature it can see within 30 feet of it. If the target can see the yeti, the target must succeed on a DC 13 Constitution saving throw against this magic or take 10 (3d6) cold damage and then be paralyzed for 1 minute, unless it is immune to cold damage. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target\u2019s saving throw is successful, or if the effect ends on it, the target is immune to the Chilling Gaze of all yetis (but not abominable yetis) for 1 hour.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/662/1000/1000/636313413410825930.jpeg",
        id: 315
    },
    {
        slug: "young_black_dragon",
        name: "Young Black Dragon",
        type: "large dragon",
        alignment: "chaotic evil",
        ac: "18 (natural armor)",
        hp: {
            default: 127,
            rng: [
                15,
                10,
                45
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                19,
                4
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                17,
                3
            ],
            INT: [
                12,
                1
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                15,
                2
            ]
        },
        saving_throws: [
            "DEX +5",
            "CON +6",
            "WIS +3",
            "CHA +5"
        ],
        skills: [
            "perception +6",
            "stealth +5"
        ],
        senses: [
            "blindsight 30 ft.",
            "darkvision 120 ft.",
            " passive perception 16"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "7",
        xp: 2900,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The dragon can breathe air and water.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 10 ft., one target. <em>Hit:</em> 15 (2d10 + 4) piercing damage plus 4 (1d8) acid damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 11 (2d6 + 4) slashing damage. </p><p><em><strong>Acid Breath (Recharge 5\u20136).</strong></em> The dragon exhales acid in a 30\u00ad-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 49 (11d8) acid damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/70/1000/1000/636252732861675698.jpeg",
        id: 316
    },
    {
        slug: "young_blue_dragon",
        name: "Young Blue Dragon",
        type: "large dragon",
        alignment: "lawful evil",
        ac: "18 (natural armor)",
        hp: {
            default: 152,
            rng: [
                16,
                10,
                64
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                21,
                5
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                19,
                4
            ],
            INT: [
                14,
                2
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                17,
                3
            ]
        },
        saving_throws: [
            "DEX +4",
            "CON +8",
            "WIS +5",
            "CHA +7"
        ],
        skills: [
            "perception +9",
            "stealth +4"
        ],
        senses: [
            "blindsight 30 ft.",
            "darkvision 120 ft.",
            " passive perception 19"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "9",
        xp: 5000,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft., one target. <em>Hit:</em> 16 (2d10 + 5) piercing damage plus 5 (1d10) lightning damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 5 ft., one target. <em>Hit:</em> 12 (2d6 + 5) slashing damage. </p><p><em><strong>Lightning Breath (Recharge 5\u20136).</strong></em> The dragon exhales lightning in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 55 (10d10) lightning damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/68/1000/1000/636252732434296782.jpeg",
        id: 317
    },
    {
        slug: "young_brass_dragon",
        name: "Young Brass Dragon",
        type: "large dragon",
        alignment: "chaotic good",
        ac: "17 (natural armor)",
        hp: {
            default: 110,
            rng: [
                13,
                10,
                39
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                19,
                4
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                17,
                3
            ],
            INT: [
                12,
                1
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                15,
                2
            ]
        },
        saving_throws: [
            "DEX +3",
            "CON +6",
            "WIS +3",
            "CHA +5"
        ],
        skills: [
            "perception +6",
            "persuasion +5",
            "stealth +3"
        ],
        senses: [
            "blindsight 30 ft.",
            "darkvision 120 ft.",
            " passive perception 16"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "6",
        xp: 2300,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 10 ft., one target. <em>Hit:</em> 15 (2d10 + 4) piercing damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 11 (2d6 + 4) slashing damage. </p><p><em><strong>Breath Weapons (Recharge 5\u20136).</strong></em> The dragon uses one of the following breath weapons. </p><p><em><strong>Fire Breath.</strong></em> The dragon exhales fire in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 42 (12d6) fire damage on a failed save, or half as much damage on a successful one. </p><p><em><strong>Sleep Breath.</strong></em> The dragon exhales sleep gas in a 30-foot cone. Each creature in that area must succeed on a DC 14 Constitution saving throw or fall unconscious for 5 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/66/1000/1000/636252731911060874.jpeg",
        id: 318
    },
    {
        slug: "young_bronze_dragon",
        name: "Young Bronze Dragon",
        type: "large dragon",
        alignment: "lawful good",
        ac: "18 (natural armor)",
        hp: {
            default: 142,
            rng: [
                15,
                10,
                60
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                21,
                5
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                19,
                4
            ],
            INT: [
                14,
                2
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                17,
                3
            ]
        },
        saving_throws: [
            "DEX +3",
            "CON +7",
            "WIS +4",
            "CHA +6"
        ],
        skills: [
            "insight +4",
            "perception +7",
            "stealth +3"
        ],
        senses: [
            "blindsight 30 ft.",
            "darkvision 120 ft.",
            " passive perception 17"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "8",
        xp: 3900,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The dragon can breathe air and water.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon makes threeattack: one with its bite and two with its claws.</p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +8 to hit, reach 10 ft., one target. <em>Hit:</em> 16 (2d10 + 5) piercing damage.</p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +8 to hit, reach 5 ft., one target. <em>Hit:</em> 12 (2d6 + 5) slashing damage.</p><p><em><strong>Breath Weapons (Recharge 5\u20136).</strong></em> The dragon uses one of the following breath weapons.</p><p><em><strong>Lightning Breath.</strong></em> The dragon exhales lightning in a 60- foot line that is 5 feet wide. Each creature in that line must make a DC 15 Dexterity saving throw, taking 55 (10d10) lightning damage on a failed save, or half as much damage on a successful one.</p><p><em><strong>Repulsion Breath.</strong></em> The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 15 Strength saving throw. On a failed save, the creature is pushed 40 feet away from the dragon.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/64/315/315/636252731269768088.jpeg",
        id: 319
    },
    {
        slug: "young_copper_dragon",
        name: "Young Copper Dragon",
        type: "large dragon",
        alignment: "chaotic good",
        ac: "17 (natural armor)",
        hp: {
            default: 119,
            rng: [
                14,
                10,
                42
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                19,
                4
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                17,
                3
            ],
            INT: [
                16,
                3
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                15,
                2
            ]
        },
        saving_throws: [
            "DEX +4",
            "CON +6",
            "WIS +4",
            "CHA +5"
        ],
        skills: [
            "deception +5",
            "perception +7",
            "stealth +4"
        ],
        senses: [
            "blindsight 30 ft.",
            "darkvision 120 ft.",
            " passive perception 17"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "7",
        xp: 2900,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 10 ft., one target. <em>Hit:</em> 15 (2d10 + 4) piercing damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 11 (2d6 + 4) slashing damage. </p><p><em><strong>Breath Weapons (Recharge 5\u20136).</strong></em> The dragon uses one of the following breath weapons. </p><p><em><strong>Acid Breath.</strong></em> The dragon exhales acid in an 40-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 40 (9d8) acid damage on a failed save, or half as much damage on a successful one. </p><p><em><strong>Slowing Breath.</strong></em> The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 14 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/62/1000/1000/636252729761648292.jpeg",
        id: 320
    },
    {
        slug: "young_gold_dragon",
        name: "Young Gold Dragon",
        type: "large dragon",
        alignment: "lawful good",
        ac: "18 (natural armor)",
        hp: {
            default: 178,
            rng: [
                17,
                10,
                85
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                23,
                6
            ],
            DEX: [
                14,
                2
            ],
            CON: [
                21,
                5
            ],
            INT: [
                16,
                3
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                20,
                5
            ]
        },
        saving_throws: [
            "DEX +6",
            "CON +9",
            "WIS +5",
            "CHA +9"
        ],
        skills: [
            "insight +5",
            "perception +9",
            "persuasion +9",
            "stealth +6"
        ],
        senses: [
            "blindsight 30 ft.",
            "darkvision 120 ft.",
            " passive perception 19"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "10",
        xp: 5900,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The dragon can breathe air and water.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +10 to hit, reach 10 ft., one target. <em>Hit:</em> 17 (2d10 + 6) piercing damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +10 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d6 + 6) slashing damage. </p><p><em><strong>Breath Weapons (Recharge 5\u20136).</strong></em> The dragon uses one of the following breath weapons. </p><p><em><strong>Fire Breath.</strong></em> The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 55 (10d10) fire damage on a failed save, or half as much damage on a successful one. </p><p><em><strong>Weakening Breath.</strong></em> The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 17 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/60/1000/1000/636252729283446963.jpeg",
        id: 321
    },
    {
        slug: "young_green_dragon",
        name: "Young Green Dragon",
        type: "large dragon",
        alignment: "lawful evil",
        ac: "18 (natural armor)",
        hp: {
            default: 136,
            rng: [
                16,
                10,
                48
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                19,
                4
            ],
            DEX: [
                12,
                1
            ],
            CON: [
                17,
                3
            ],
            INT: [
                16,
                3
            ],
            WIS: [
                13,
                1
            ],
            CHA: [
                15,
                2
            ]
        },
        saving_throws: [
            "DEX +4",
            "CON +6",
            "WIS +4",
            "CHA +5"
        ],
        skills: [
            "deception +5",
            "perception +7",
            "stealth +4"
        ],
        senses: [
            "blindsight 30 ft.",
            "darkvision 120 ft.",
            " passive perception 17"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "8",
        xp: 3900,
        traits_html: "<h3> Traits </h3><p><em><strong>Amphibious.</strong></em> The dragon can breathe air and water.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 10 ft., one target. <em>Hit:</em> 15 (2d10 + 4) piercing damage plus 7 (2d6) poison damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 11 (2d6 + 4) slashing damage. </p><p><em><strong>Poison Breath (Recharge 5\u20136).</strong></em> The dragon exhales poisonous gas in a 30-foot cone. Each creature in that area must make a DC 14 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/58/315/315/636252728834677623.jpeg",
        id: 322
    },
    {
        slug: "young_red_dragon",
        name: "Young Red Dragon",
        type: "large dragon",
        alignment: "chaotic evil",
        ac: "18 (natural armor)",
        hp: {
            default: 178,
            rng: [
                17,
                10,
                85
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                23,
                6
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                21,
                5
            ],
            INT: [
                14,
                2
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                19,
                4
            ]
        },
        saving_throws: [
            "DEX +4",
            "CON +9",
            "WIS +4",
            "CHA +8"
        ],
        skills: [
            "perception +8",
            "stealth +4"
        ],
        senses: [
            "blindsight 30 ft.",
            "darkvision 120 ft.",
            " passive perception 18"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "10",
        xp: 5900,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +10 to hit, reach 10 ft., one target. <em>Hit:</em> 17 (2d10 + 6) piercing damage plus 3 (1d6) fire damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +10 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d6 + 6) slashing damage. </p><p><em><strong>Fire Breath (Recharge 5\u20136).</strong></em> The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/399/315/315/636252784386259001.jpeg",
        id: 323
    },
    {
        slug: "young_silver_dragon",
        name: "Young Silver Dragon",
        type: "large dragon",
        alignment: "lawful good",
        ac: "18 (natural armor)",
        hp: {
            default: 168,
            rng: [
                16,
                10,
                80
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                23,
                6
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                21,
                5
            ],
            INT: [
                14,
                2
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                19,
                4
            ]
        },
        saving_throws: [
            "DEX +4",
            "CON +9",
            "WIS +4",
            "CHA +8"
        ],
        skills: [
            "arcana +6",
            "history +6",
            "perception +8",
            "stealth +4"
        ],
        senses: [
            "blindsight 30 ft.",
            "darkvision 120 ft.",
            " passive perception 18"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "9",
        xp: 5000,
        traits_html: "<h3> Traits </h3>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +10 to hit, reach 10 ft., one target. <em>Hit:</em> 17 (2d10 + 6) piercing damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +10 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d6 + 6) slashing damage. </p><p><em><strong>Breath Weapons (Recharge 5\u20136).</strong></em> The dragon uses one of the following breath weapons. </p><p><em><strong>Cold Breath.</strong></em> The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 17 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one. </p><p><em><strong>Paralyzing Breath.</strong></em> The dragon exhales paralyzing gas in a 30-foot cone. Each creature in that area must succeed on a DC 17 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/401/315/315/636252784740667730.jpeg",
        id: 324
    },
    {
        slug: "young_white_dragon",
        name: "Young White Dragon",
        type: "large dragon",
        alignment: "chaotic evil",
        ac: "17 (natural armor)",
        hp: {
            default: 133,
            rng: [
                14,
                10,
                56
            ]
        },
        speed: {
            base: 40,
            unit: "ft."
        },
        stats: {
            STR: [
                18,
                4
            ],
            DEX: [
                10,
                0
            ],
            CON: [
                18,
                4
            ],
            INT: [
                6,
                -2
            ],
            WIS: [
                11,
                0
            ],
            CHA: [
                12,
                1
            ]
        },
        saving_throws: [
            "DEX +3",
            "CON +7",
            "WIS +3",
            "CHA +4"
        ],
        skills: [
            "perception +6",
            "stealth +3"
        ],
        senses: [
            "blindsight 30 ft.",
            "darkvision 120 ft.",
            " passive perception 16"
        ],
        languages: [
            "common",
            "draconic"
        ],
        challenge_lvl: "6",
        xp: 2300,
        traits_html: "<h3> Traits </h3><p><em><strong>Ice Walk.</strong></em> The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Multiattack.</strong></em> The dragon makes threeattack: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 10 ft., one target. <em>Hit:</em> 15 (2d10 + 4) piercing damage plus 4 (1d8) cold damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +7 to hit, reach 5 ft., one target. <em>Hit:</em> 11 (2d6 + 4) slashing damage. </p><p><em><strong>Cold Breath (Recharge 5\u20136).</strong></em> The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 15 Constitution saving throw, taking 45 (10d8) cold damage on a failed save, or half as much damage on a successful one.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/403/1000/1000/636252785358767533.jpeg",
        id: 325
    },
    {
        slug: "zombie",
        name: "Zombie",
        type: "medium undead",
        alignment: "neutral evil",
        ac: "8",
        hp: {
            default: 22,
            rng: [
                3,
                8,
                9
            ]
        },
        speed: {
            base: 20,
            unit: "ft."
        },
        stats: {
            STR: [
                13,
                1
            ],
            DEX: [
                6,
                -2
            ],
            CON: [
                16,
                3
            ],
            INT: [
                3,
                -4
            ],
            WIS: [
                6,
                -2
            ],
            CHA: [
                5,
                -3
            ]
        },
        saving_throws: [
            "WIS +0"
        ],
        skills: [
            ""
        ],
        senses: [
            "darkvision 60 ft.",
            " passive perception 8"
        ],
        languages: [
            "understands the languages of its creator but can't speak"
        ],
        challenge_lvl: 0.25,
        xp: 50,
        traits_html: "<h3> Traits </h3><p><em><strong>Undead Fortitude.</strong></em> If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead.</p>",
        actions_html: "<h3> ACTIONS </h3><p><em><strong>Slam.</strong></em> <em>Melee Weapon Attack:</em> +3 to hit, reach 5 ft., one target. <em>Hit:</em> 4 (1d6 + 1) bludgeoning damage.</p>",
        img_url: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/71/1000/1000/636252733510786769.jpeg",
        id: 326
    }
]