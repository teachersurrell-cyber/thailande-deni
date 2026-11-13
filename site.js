const PRODUCTS = [
  {
    id: "huile-jaune",
    name: "Huile Jaune",
    category: "Body care",
    description: "Traditional aromatic massage oil · 15 ml · 20000 XOF",
    image: "IMG_1289.JPG",
    price: { amount: 20000, currency: "XOF" },
    details: ["A compact massage oil made in Thailand", "Menthol, camphor, borneol, cajeput, clove and eucalyptus oils are listed on the supplied product image"],
    usage: [
      ["Apply a few drops", "Use a small amount on the area you wish to massage, following the product label."],
      ["Massage gently", "Work the oil into the skin with gentle, circular movements."],
      ["Use as needed", "The label suggests using one to three times daily. Follow the directions and precautions on your bottle."],
    ],
    safety: "For external use only. Check the product packaging for directions, warnings, and suitability. Avoid contact with eyes and discontinue use if irritation occurs. The product image includes traditional relief claims; these have not been independently verified and are not medical advice.",
  },
  {
    id: "madame-heng-hyaloe-kit",
    name: "Madame Heng Hyaloe Hydropower Kit",
    category: "Skincare",
    description: "Facial soap and hydrating serum set · 6500 XOF",
    image: "WhatsApp Image 2026-11-11 at 01.47.05.jpeg",
    price: { amount: 6500, currency: "XOF" },
    details: [
      "Hyaloe Hydropower Soap · 100 g and Hyaloe Hydropower Serum · 30 ml",
      "The soap is intended to cleanse while helping skin retain moisture; the serum contains hyaluronic acid",
      "Check the current packaging for the complete ingredient list and product directions",
    ],
  },
  {
    id: "thailande-deni-lightening-salt-scrub",
    name: "Thailande Deni Shop Spa Lightening Salt Scrub",
    category: "Body care",
    description: "Fruit extract body scrub · 10000 XOF",
    image: "lightening-salt-scrub.jpeg",
    price: { amount: 10000, currency: "XOF" },
    details: [
      "Fine salt provides physical exfoliation to help remove surface buildup and smooth rough-feeling skin",
      "The supplied notes list cantaloupe, carrot, Mahad, mixed fruit extracts, vitamins C and E, and AHA; check the current label",
      "Marketed to leave skin feeling refreshed and soft; avoid irritated or freshly shaved skin",
    ],
  },
  {
    id: "precious-skin-gold-soap",
    name: "Precious Skin 24K Gold Soap",
    category: "Skincare",
    description: "Face and body cleansing bar · 3000 XOF",
    image: "WhatsApp Image 2026-11-11 at 01.52.01 (1).jpeg",
    price: { amount: 3000, currency: "XOF" },
    details: [
      "The supplied notes describe a face and body cleansing bar with 24K gold, collagen, niacinamide, alpha arbutin, vitamin E and glycerin",
      "Marketed to cleanse while helping skin feel soft and hydrated; cosmetic claims have not been independently verified",
      "Check the current package for ingredients, directions and suitability",
    ],
  },
  {
    id: "precious-skin-gold-serum",
    name: "Precious Skin Gold 24K Whitening Serum",
    category: "Skincare",
    description: "Facial serum · 3500 XOF",
    image: "WhatsApp Image 2026-11-11 at 01.53.34.jpeg",
    price: { amount: 3500, currency: "XOF" },
    details: [
      "50 ml facial serum, according to the supplied product notes",
      "The supplied notes list niacinamide, vitamin C, 24K gold, collagen and Galactomyces ferment",
      "Marketed to support a brighter-looking, more even complexion; results vary and claims are not independently verified",
    ],
    usage: [
      ["Cleanse and dry", "Apply to clean, dry skin."],
      ["Apply a small amount", "Smooth 2 to 3 drops over the face and neck, avoiding the eyes."],
      ["Follow with moisturizer", "Allow the serum to absorb, then use a moisturizer. Check the package for directions and frequency."],
    ],
    safety: "For external use only. Check the current package for ingredients and directions. Patch test before first use, avoid contact with eyes, and discontinue if irritation occurs. Use sunscreen during the day when using products marketed for dark spots.",
  },
  {
    id: "precious-skin-anti-melasma-cream",
    name: "Precious Skin Thailand Gold 24K Whitening Anti-Melasma Facial Cream",
    category: "Skincare",
    description: "Facial cream · 15 g · 5500 XOF",
    image: "assets/products/precious-skin-gold-anti-melasma-01.webp",
    gallery: [
      "assets/products/precious-skin-gold-anti-melasma-02.webp",
      "assets/products/precious-skin-gold-anti-melasma-03.webp",
    ],
    price: { amount: 5500, currency: "XOF" },
    details: [
      "A travel-size facial cream made in Thailand; the supplied product information describes a 15 g package",
      "Product descriptions mention niacinamide, alpha arbutin, tranexamic acid, kojic acid dipalmitate, snail secretion filtrate, glycerin, allantoin and Panax ginseng; verify the exact formula on the current label",
      "Marketed for the appearance of dark spots and uneven tone; cosmetic effects vary, and this product is not a medical treatment for melasma",
    ],
    usage: [
      ["Apply a thin layer", "Apply a small amount to clean, dry face and neck skin, following the package directions."],
      ["Protect during the day", "Use broad-spectrum sunscreen every morning and reapply as directed."],
    ],
    safety: "For external use only. Patch test before first use and discontinue if irritation occurs. Follow package directions and avoid combining with strong exfoliants unless advised by a qualified professional. Broad-spectrum SPF 30+ and consistent sun protection are important for managing the appearance of pigmentation.",
  },
  {
    id: "plantnery-glycolic-bright-body-toner",
    name: "Plantnery Natural Glycolic Bright Body Toner",
    category: "Body care",
    description: "7% glycolic acid body toner · 250 ml · 5000 XOF",
    image: "assets/products/plantnery-glycolic-body-toner-01.webp",
    gallery: [
      "assets/products/plantnery-glycolic-body-toner-02.webp",
      "assets/products/plantnery-glycolic-body-toner-03.webp",
      "assets/products/plantnery-glycolic-body-toner-04.webp",
    ],
    price: { amount: 5000, currency: "XOF" },
    details: [
      "Leave-on body exfoliant described as containing 7% glycolic acid; verify the concentration and instructions on the current bottle",
      "The supplied product information mentions Japanese persimmon, fruit extracts, centella, chamomile, niacinamide, panthenol and sodium hyaluronate; check the current ingredient list",
      "Marketed for rough texture, dark spots and body odor; cosmetic results vary and odor-control claims are not guaranteed",
    ],
    usage: [
      ["Apply to clean, dry skin", "Use a small amount on a cotton pad or clean hands and apply to the intended body area in the evening."],
      ["Start gradually", "Begin 2–3 times weekly and increase only if tolerated. Do not rinse; follow with moisturizer."],
    ],
    safety: "For external use only. Patch test first; avoid eyes, mucous membranes, intimate areas, broken or irritated skin, and recently shaved or waxed skin. Glycolic acid may increase sun sensitivity: protect exposed areas with broad-spectrum sunscreen. Stop if irritation occurs and follow the current label.",
  },
  {
    id: "yanhee-premium-serum",
    name: "Yanhee Premium Serum",
    category: "Skincare",
    description: "Facial serum · 30 ml · 4000 XOF",
    image: "assets/products/yanhee-premium-serum-01.webp",
    gallery: ["assets/products/yanhee-premium-serum-02.webp"],
    price: { amount: 4000, currency: "XOF" },
    details: [
      "30 ml facial serum; check the package for its current ingredients and suitability",
      "The supplied notes mention licorice, niacinamide, aloe vera and tranexamic acid; verify these ingredients on the label",
      "Marketed for blemishes and the appearance of uneven tone; results vary, and the serum is not a treatment for acne or melasma",
    ],
    usage: [
      ["Apply to clean skin", "Smooth a small amount over the face and neck in the morning or evening, following the label directions."],
      ["Use daytime sun protection", "Use broad-spectrum sunscreen during the day, especially when addressing the appearance of dark spots."],
    ],
    safety: "For external use only. Patch test before first use, avoid the eye area and discontinue if irritation occurs. Check the current package for directions, ingredients and suitability for sensitive skin.",
  },
  {
    id: "meyyong-seaweed-serum",
    name: "Meyyong Seaweed Serum",
    category: "Skincare",
    description: "Facial serum · 30 ml · 4000 XOF",
    image: "assets/products/meyyong-seaweed-serum-01.webp",
    gallery: ["assets/products/meyyong-seaweed-serum-02.webp"],
    price: { amount: 4000, currency: "XOF" },
    details: [
      "30 ml facial serum; the brand is also spelled Meiyong in some listings",
      "The supplied notes describe a seaweed-based serum; check the current package for its full ingredient list and formula",
      "Hydrating, soothing and tone-evening statements are cosmetic claims and are not guaranteed",
    ],
    usage: [
      ["Apply a few drops", "Apply 2–3 drops to clean, slightly damp face and neck skin, avoiding the eyes."],
      ["Seal in moisture", "Follow with a moisturizer and use broad-spectrum SPF 30 or higher during the day."],
    ],
    safety: "For external use only. Check the current label for ingredients and directions. Patch test before first use, avoid the eyes and discontinue if irritation occurs.",
  },
  {
    id: "my-bo-herbal-mask-soap",
    name: "My Bo Herbal Mousse Mask Soap",
    category: "Skincare",
    description: "Thai facial cleansing soap and mask · 2500 XOF",
    image: "WhatsApp Image 2026-11-11 at 02.11.08.jpeg",
    price: { amount: 2500, currency: "XOF" },
    details: [
      "Typically listed as 50 g, though sizes may vary by version",
      "The supplied notes describe a dense, mousse-like lather made with a foaming net",
      "Marketed for cleansing and the appearance of blemishes and uneven tone; claims are not independently verified",
    ],
    usage: [
      ["Create a soft lather", "Lather the soap in your hands or with its foaming net."],
      ["Cleanse gently", "Apply the foam gently to the face, avoiding the eyes."],
      ["Rinse", "Rinse thoroughly. If using as a mask, follow the package directions and do not leave it on longer than instructed."],
    ],
    safety: "For external use only. Avoid contact with eyes and discontinue use if irritation occurs. Follow the directions on the current package; do not use as a mask unless the label instructs you to do so.",
  },
  {
    id: "bear-cuffee-coffee-scrub-soap",
    name: "Bear Cuffee Coffee Scrub Soap",
    category: "Body care",
    description: "Coffee exfoliating soap · 60 g · 3500 XOF",
    image: "WhatsApp Image 2026-11-11 at 02.16.30 (1).jpeg",
    price: { amount: 3500, currency: "XOF" },
    details: [
      "Typically sold as a 60 g bar",
      "The supplied notes list roasted coffee, tamarind, honey, coconut oil and turmeric; confirm the current ingredients on the label",
      "A 2-in-1 cleansing and exfoliating bar marketed to smooth rough-feeling skin and improve the appearance of dullness",
    ],
    usage: [
      ["Wet skin and bar", "Use the bar on wet skin or work it into a lather in your hands."],
      ["Massage gently", "Apply in light circular motions. Avoid scrubbing hard, especially on sensitive areas."],
      ["Rinse well", "Rinse thoroughly and follow with moisturizer if needed."],
    ],
    safety: "For external use only. Avoid broken or irritated skin and contact with eyes. Patch test before first use and discontinue if irritation occurs.",
  },
  {
    id: "pontina-herbal-soap",
    name: "Pontina Herbal Soap",
    category: "Body care",
    description: "Turmeric-infused Thai herbal soap · Mali 🇲🇱",
    image: "pontina-herbal-soap.png",
    price: { amount: 6000, currency: "XOF" },
    details: [
      "A Thai herbal cleansing bar featuring turmeric; Pontina formulas may also include botanicals such as ginseng, depending on the variant",
      "Marketed to cleanse deeply while helping skin feel smoother and nourished",
      "Turmeric body-care claims include helping pores feel clear and improving the appearance of dullness, dark marks and uneven tone; individual results vary",
      "Check the current package for the exact ingredients and claims for this variant",
    ],
    safety: "For external use only. Check the current package for directions and precautions, and patch test before first use. Avoid contact with eyes and discontinue use if irritation occurs. Skin brightening, acne and other benefit claims have not been independently verified and are not medical advice.",
  },
  {
    id: "pontina-coffee-tamarind-scrub",
    name: "Pontina Coffee Tamarind Scrub",
    category: "Body care",
    description: "Thai coffee and tamarind exfoliating scrub · Mali 🇲🇱",
    image: "pontina-coffee-tamarind-scrub.png",
    price: { amount: 6000, currency: "XOF" },
    details: [
      "Coffee and tamarind scrub formulated to exfoliate and smooth rough-feeling skin",
      "Herbal ingredients can vary by bar or package variant; check the current label",
      "Often used on rough-feeling areas such as elbows, knees and joints",
      "Marketed to help skin look brighter and smoother; results vary and are not guaranteed",
    ],
    usage: [
      ["Wet your skin", "Use the bar on wet skin in the shower or bath."],
      ["Massage gently", "Glide the bar over the skin or lather it with a loofah. Avoid scrubbing hard."],
      ["Rinse thoroughly", "The supplied directions suggest leaving the lather on for 3 to 5 minutes, then rinsing well. Follow the directions on your package."],
    ],
    safety: "For external use only. Avoid the face, broken or irritated skin, and contact with eyes. Patch test before first use and discontinue if irritation occurs. Follow the directions and precautions on the current package.",
  },
  {
    id: "araya-moringa-ginger-tea",
    name: "Araya Herb Moringa & Ginger Tea",
    category: "Tea & wellness",
    description: "Caffeine-free herbal infusion · 8500 XOF",
    image: "WhatsApp Image 2026-11-11 at 02.23.41.jpeg",
    price: { amount: 8500, currency: "XOF" },
    details: [
      "A caffeine-free infusion combining moringa leaves and ginger",
      "Ginger is traditionally enjoyed in warm drinks; wellness effects are not guaranteed",
      "Brew one tea bag or the package-recommended amount in hot water; steep for the time on the label",
    ],
    usage: [
      ["Add hot water", "Place one tea bag in a cup and pour over hot water."],
      ["Steep", "Cover and steep for 3 to 5 minutes, or follow the package directions."],
      ["Enjoy", "Drink warm or chilled. Honey or lemon may be added if desired."],
    ],
    safety: "Check the current package for ingredients and directions. The supplied notes advise avoiding moringa tea during pregnancy and consulting a healthcare professional if you take blood-pressure or heart medication. This tea is not a treatment for a medical condition.",
  },
  {
    id: "araya-tea-for-you",
    name: "Araya Tea For You",
    category: "Tea & wellness",
    description: "Rose-infused Thai herbal tea · 8500 XOF",
    image: "WhatsApp Image 2026-11-11 at 02.32.46.jpeg",
    price: { amount: 8500, currency: "XOF" },
    details: [
      "The supplied notes list white kwao krua, sappan wood, Curcuma comosa, safflower, repair grass, shatavari, stevia, chamomile and roselle",
      "Marketed for women's wellness; claims about hormones, menstruation, sleep or other health effects have not been independently verified",
    ],
    usage: [
      ["Steep one tea bag", "Add one tea bag to 100–250 ml of hot water, or follow the package directions."],
      ["Wait and enjoy", "Steep for 2 to 3 minutes, then drink warm or add ice."],
    ],
    safety: "Check the current ingredient list and directions. If pregnant, breastfeeding, taking medication, or managing a health condition, consult a qualified healthcare professional before using herbal supplements.",
  },
  {
    id: "lady-finzy",
    name: "LF Lady Finzy",
    category: "Personal care",
    description: "Intimate-care capsules · 8000 XOF",
    image: "WhatsApp Image 2026-11-11 at 02.39.39.jpeg",
    price: { amount: 8000, currency: "XOF" },
    details: [
      "The supplied notes describe fast-dissolving intimate-care capsules with plant extracts and a strawberry fragrance",
      "Odor, discharge, tightening and hydration benefits are marketing claims, not verified medical effects",
      "Confirm the product type and ingredients on the package before use",
    ],
    safety: "Do not insert or apply this product unless the package clearly identifies the route and provides appropriate directions. Vaginal discharge or odor can have medical causes; consult a qualified healthcare professional rather than relying on a cosmetic product. Stop use and seek advice if irritation occurs.",
  },
  {
    id: "kyra-alpha-arbutin",
    name: "Kyra Alpha Arbutin",
    category: "Skincare",
    description: "Single-use skincare booster capsules",
    image: "WhatsApp Image 2026-11-11 at 02.46.00 (1).jpeg",
    price: { amount: 10000, currency: "XOF" },
    details: [
      "The supplied notes describe 20 single-use capsules per box, typically 250 mg each",
      "Alpha arbutin, rice ferment, barley grass and allantoin/comfrey extracts are listed in the supplied notes; verify the current label",
      "Marketed for the appearance of dark spots and uneven tone; cosmetic effects vary and are not guaranteed",
    ],
    usage: [
      ["Check the label", "Follow the package directions and confirm the product is intended to be mixed into another cosmetic."],
      ["Mix before use", "If the label allows, mix one capsule into a small amount of lotion, cream or serum immediately before application."],
      ["Patch test", "Test on a small area first and discontinue if irritation occurs."],
    ],
    safety: "For topical cosmetic use only if the product label confirms this use. Do not swallow or apply the powder directly unless the package instructs you to. Avoid eyes and irritated skin, and patch test before first use.",
  },
  {
    id: "melasma-breakdown-serum",
    name: "Melasma Breakdown Serum",
    category: "Skincare",
    description: "Facial serum · 30–40 ml · 3500 XOF",
    image: "WhatsApp Image 2026-11-11 at 03.04.24.jpeg",
    price: { amount: 3500, currency: "XOF" },
    details: [
      "Commonly listed in 30 ml or 40 ml sizes; check the package for the exact volume",
      "The supplied notes list glycerin, vitamins C and E, niacinamide, aloe vera, collagen and plant extracts; formulations may vary",
      "Marketed for the appearance of dark spots and uneven tone; it is a cosmetic product, not a medical treatment for melasma",
    ],
    usage: [
      ["Cleanse", "Apply to clean, dry skin."],
      ["Apply serum", "Smooth a small amount over the face and neck, following the package directions."],
      ["Moisturize and protect", "Follow with moisturizer. Use broad-spectrum sunscreen during the day."],
    ],
    safety: "For external use only. Check the current label for ingredients and directions. Patch test first, avoid the eye area and discontinue if irritation occurs. Use sun protection during the day; seek professional advice for persistent or changing pigmentation.",
  },
  {
    id: "melasma-breakdown-cream",
    name: "Perfect Skin Lady Melasma Breakdown Cream",
    category: "Skincare",
    description: "Night cream · 20 g · 3500 XOF",
    image: "WhatsApp Image 2026-11-11 at 03.06.19 (1).jpeg",
    price: { amount: 3500, currency: "XOF" },
    details: [
      "A night cream marketed for the appearance of freckles, dark spots and uneven tone",
      "The supplied notes mention niacinamide, kojic acid, alpha arbutin and vitamin C as common brightening ingredients; check this product's current ingredient label",
      "A daytime pigmentation-care routine should include broad-spectrum SPF 30+; a tinted sunscreen may also help protect against visible light",
      "Use with daytime sun protection; no cosmetic cream can guarantee treatment or removal of melasma",
    ],
    usage: [
      ["Apply at night", "Apply a small amount to clean, dry skin, following the directions on the package."],
      ["Layer carefully", "If tolerated, apply after a treatment serum and follow with moisturizer."],
      ["Protect during the day", "Use broad-spectrum SPF 30+ each morning and reapply as directed."],
    ],
    safety: "For external use only. Check the exact ingredients and directions on the current package; formulations may differ. Patch test first and avoid combining with strong exfoliants or retinoids unless advised by a qualified professional. Stop if irritation occurs. Daily sun protection is important for pigmentation concerns.",
  },
  {
    id: "melasma-breakdown-soap",
    name: "Perfect Skin Lady Melasma Breakdown Soap",
    category: "Skincare",
    description: "Thai cleansing bar · 80 g · 3500 XOF",
    image: "WhatsApp Image 2026-11-11 at 03.03.19.jpeg",
    price: { amount: 3500, currency: "XOF" },
    details: [
      "An 80 g cleansing bar marketed for dark spots, freckles and uneven-looking tone",
      "Designed to cleanse and exfoliate surface buildup; claims about fading pigmentation or stimulating collagen are not independently verified",
      "Check the current package for the ingredient list and directions",
    ],
    usage: [
      ["Wet and lather", "Lather the bar in your hands with water."],
      ["Cleanse gently", "Apply the lather to face or body without scrubbing hard; avoid the eye area."],
      ["Rinse thoroughly", "Rinse well and follow with moisturizer. Use only as directed on the package."],
    ],
    safety: "For external use only. Avoid the eye area, broken skin and irritated areas. Patch test before first use and discontinue if irritation occurs. Seek professional advice for persistent pigmentation concerns.",
  },
  {
    id: "pothong-green-herbal-balm",
    name: "PoThong Thai Herbal Green Cooling Massage Balm",
    category: "Body care",
    description: "Cooling herbal massage balm · 15 g or 50 g · 5500 XOF",
    image: "WhatsApp Image 2026-11-11 at 02.50.40 (1).jpeg",
    price: { amount: 5500, currency: "XOF" },
    details: [
      "A traditional Thai green balm, commonly offered in 15 g and 50 g jars; confirm the size available",
      "The supplied notes list a petrolatum/paraffin base, menthol, camphor, mint, eucalyptus and peppermint oils; check the current label",
      "Marketed to provide a cooling sensation when massaged onto the skin; relief claims are not independently verified",
    ],
    usage: [
      ["Apply a small amount", "Use a small amount on the desired area of intact skin."],
      ["Massage gently", "Massage into the skin, following the package directions."],
      ["Wash hands", "Wash hands after use and avoid touching the eyes or face."],
    ],
    safety: "For external use only. Do not swallow or apply inside the nose, near eyes, to mucous membranes, broken skin or under a tight covering. Keep away from children and heat. Stop if irritation occurs and follow all package warnings.",
  },
  {
    id: "jeju-mini-soap",
    name: "Jeju Mini Soap",
    category: "Skincare",
    description: "Mini Thai cleansing bar · 550 XOF",
    image: "WhatsApp Image 2026-11-11 at 02.00.27.jpeg",
    price: { amount: 550, currency: "XOF" },
    details: [
      "Small individually wrapped bars, commonly around 25–35 g; exact weight and variants may differ",
      "The supplied notes mention fruit, vitamin, charcoal and other variants; check the available bar's label",
      "Marketed for cleansing and specific skin concerns depending on variant; benefits are not guaranteed",
    ],
    usage: [
      ["Wet and lather", "Wet the bar and create a lather in your hands."],
      ["Cleanse gently", "Apply the lather to wet skin and avoid the eyes."],
      ["Rinse", "Rinse thoroughly and allow the bar to dry between uses."],
    ],
    safety: "For external use only. Check the specific variant's ingredients and directions. Avoid contact with eyes and discontinue use if irritation occurs.",
  },
  {
    id: "mikeo-blood-orange-collagen",
    name: "Mikeo Blood Orange Collagen Vitamin C Mix Plus",
    category: "Tea & wellness",
    description: "Blood orange collagen and vitamin C drink mix · 20000 XOF",
    image: "WhatsApp Image 2026-11-11 at 03.46.05.jpeg",
    gallery: [
      "assets/products/mikeo-blood-orange-collagen-01.webp",
      "assets/products/mikeo-blood-orange-collagen-02.webp",
      "assets/products/mikeo-blood-orange-collagen-03.webp",
      "assets/products/mikeo-blood-orange-collagen-04.webp",
      "assets/products/mikeo-blood-orange-collagen-05.webp",
    ],
    price: { amount: 20000, currency: "XOF" },
    details: [
      "The supplied notes describe a blood-orange drink mix with collagen and 1000 mg vitamin C; confirm the amount on the current label",
      "Marketed for antioxidant and beauty support; these supplement claims have not been independently verified and it is not a treatment for skin or joint conditions",
      "Sugar content and ingredients can vary by version; check the package",
    ],
    usage: [
      ["Mix one serving", "Dissolve one packet or the package-recommended serving in cold or room-temperature water."],
      ["Stir and drink", "Stir or shake until dissolved and use as directed on the label."],
    ],
    safety: "Use only as directed on the package. Check for allergens, including collagen source, and consult a qualified healthcare professional before use if pregnant, breastfeeding, taking medication or managing a health condition. Supplements do not replace a balanced diet or medical care.",
  },
  {
    id: "mikeo-gluta-sakura-peach",
    name: "Mikeo Gluta Sakura Peach",
    category: "Tea & wellness",
    description: "Sugar-free beauty drink mix · 20000 XOF",
    image: "WhatsApp Image 2026-11-11 at 03.50.19 (1).jpeg",
    price: { amount: 20000, currency: "XOF" },
    details: [
      "The supplied notes list 250 mg L-glutathione, sakura flower extract, fish collagen peptides, hyaluronic acid and vitamin C; verify all amounts and ingredients on the current label",
      "Marketed as a sugar-free beauty drink for skin radiance and hydration; results are not guaranteed and claims are not medical advice",
    ],
    usage: [
      ["Prepare a glass", "Add 100–120 ml of cold or room-temperature water, or follow the package directions."],
      ["Mix one sachet", "Pour in one sachet and stir for 10 to 15 seconds until dissolved."],
      ["Drink promptly", "Consume after mixing and use no more often than directed on the label."],
    ],
    safety: "Use only as directed on the package. Check for fish or other allergens and consult a qualified healthcare professional before use if pregnant, breastfeeding, taking medication or managing a health condition. Supplement and skin-brightening claims have not been independently verified.",
  },
  {
    id: "mikeo-gluta-tomato",
    name: "Mikeo Gluta Tomato",
    category: "Tea & wellness",
    description: "Tomato drink mix · 20000 XOF",
    image: "WhatsApp Image 2026-11-11 at 03.53.38.jpeg",
    price: { amount: 20000, currency: "XOF" },
    details: [
      "The supplied notes list L-glutathione, tomato extract/lycopene, acerola cherry and vitamin C; confirm the ingredient amounts and sugar content on the current label",
      "The supplied notes describe a zero-added-sugar formula; check the current package to confirm",
      "Marketed for antioxidant support and skin radiance; claims about acne, inflammation, melasma or UV protection have not been independently verified",
      "A drink supplement does not replace sunscreen or treatment recommended by a healthcare professional",
    ],
    usage: [
      ["Add one sachet", "Empty one sachet into a glass."],
      ["Add a drink", "Add water or another beverage as directed on the package."],
      ["Stir and consume", "Stir until dissolved and use only as directed on the label."],
    ],
    safety: "Use only as directed on the package. Check ingredients and consult a qualified healthcare professional before use if pregnant, breastfeeding, taking medication or managing a health condition. Do not rely on supplements for UV protection; use appropriate sunscreen and protective clothing.",
  },
  {
    id: "mikeo-fiber-xs",
    name: "Mikeo Fiber XS",
    category: "Tea & wellness",
    description: "Sugar-free fiber drink mix · 30 sachets · 20000 XOF",
    image: "WhatsApp Image 2026-11-11 at 04.00.19.jpeg",
    price: { amount: 20000, currency: "XOF" },
    details: [
      "Powdered drink mix in a 30-sachet box; flavors listed are Green Apple and 7-Berry (Mixed Berry)",
      "The supplied notes list dietary fiber such as psyllium and chicory-root fiber, prebiotics (FOS/inulin), Bacillus coagulans, green tea, cactus and white kidney bean; formulations may vary",
      "Marketed to support digestion and satiety; constipation and weight-management claims have not been independently verified",
    ],
    usage: [
      ["Mix one sachet", "Stir one sachet into water, following the mixing instructions on the label."],
      ["Drink as directed", "The supplied notes suggest once daily, often in the evening. Do not exceed the package directions."],
      ["Stay hydrated", "Drink adequate water and maintain a balanced diet."],
    ],
    safety: "Use only as directed on the package and drink sufficient water. Fiber supplements may affect medication absorption; ask a healthcare professional about timing if you take medicines. Seek medical advice for ongoing constipation or digestive symptoms. Weight-management and digestive claims have not been independently verified.",
  },
  {
    id: "niacinamide-b3-collagen",
    name: "Venut White Niacinamide Collagen Capsules Serum",
    category: "Skincare",
    description: "Topical body and neck serum · 10 capsules · 0.34 g each · 5000 XOF",
    image: "assets/products/niacinamide-b3-collagen-01.webp",
    price: { amount: 5000, currency: "XOF" },
    gallery: [
      "assets/products/niacinamide-b3-collagen-02.webp",
      "assets/products/niacinamide-b3-collagen-03.webp",
      "assets/products/niacinamide-b3-collagen-04.webp",
    ],
    details: [
      "10 twist-off capsules, 0.34 g each, for topical use on the body and neck",
      "Niacinamide (vitamin B3) and collagen are highlighted; supportive vitamins may vary, so check the current ingredient label",
      "Marketed for hydration, smoothing and a more even-looking complexion; cosmetic results vary and are not guaranteed",
    ],
    usage: [
      ["Prepare one capsule", "Twist or snip off the tip of a single capsule."],
      ["Apply to clean skin", "Gently smooth the serum over clean body and neck skin; avoid the eyes and face unless the label says otherwise."],
    ],
    safety: "For external use only; do not swallow. Patch test before first use, avoid irritated or broken skin, and discontinue if irritation occurs. Follow the directions and precautions on the current package.",
  },
  {
    id: "abutin-3c3-serum",
    name: "Venut White Abutine 3C3 Gluta Super White Plus",
    category: "Skincare",
    description: "Topical booster set · 10 capsules · 5500 XOF",
    image: "assets/products/abutin-3c3-serum-01.webp",
    price: { amount: 5500, currency: "XOF" },
    gallery: [
      "assets/products/abutin-3c3-serum-02.webp",
      "assets/products/abutin-3c3-serum-03.webp",
      "assets/products/abutin-3c3-serum-04.webp",
      "assets/products/abutin-3c3-serum-05.webp",
    ],
    details: [
      "10 concentrated capsules/ampoules intended as a topical booster additive",
      "The supplied product notes mention alpha-arbutin and glutathione, with collagen, vitamin C, or niacinamide; verify the exact formula on the current label",
      "Use only with a lotion, cream, or serum if the package specifically instructs this; do not apply or mix the concentrated capsules otherwise",
      "Marketed for a brighter-looking, more even complexion; these cosmetic claims are not guaranteed",
    ],
    usage: [
      ["Check the directions", "Confirm the product is intended to be mixed into a topical cosmetic and follow the package directions."],
      ["Mix as directed", "If the label allows, mix one capsule into the specified amount of lotion, cream, or serum immediately before use."],
      ["Patch test", "Test the mixture on a small area first; avoid the eyes and discontinue if irritation occurs."],
    ],
    safety: "For external use only if the product label confirms this route. Do not swallow or use undiluted unless the package explicitly directs it. Check the full ingredient list, patch test first, and use sun protection during the day.",
  },
  {
    id: "collagen-aura-white",
    name: "Perfect Skin Lady Collagen Aura Plus White",
    category: "Skincare",
    description: "Skincare line · serum 40 ml or cleansing foam 150 g · 8000 XOF",
    image: "assets/products/collagen-aura-white-01.webp",
    price: { amount: 8000, currency: "XOF" },
    gallery: ["assets/products/collagen-aura-white-02.webp"],
    details: [
      "The product line includes a Collagen Aura Pure White facial serum (typically 40 ml) and a Collagen Super Aura Plus cleansing foam (typically 150 g)",
      "The 8,000 XOF price is supplied for this listing; confirm which product/variant is available before ordering",
      "Claims about smoothing, fine lines, oil control, or brighter-looking skin are cosmetic claims and are not guaranteed",
    ],
    safety: "For external use only. Check the selected product's ingredient list and directions, patch test before first use, avoid the eyes, and discontinue use if irritation occurs.",
  },
  {
    id: "kojic-acid-face-care",
    name: "Perfect Skin Lady Kojie Acid Skin Whitening X10 Serum",
    category: "Skincare",
    description: "Facial serum · 40 ml · 8000 XOF",
    image: "assets/products/kojic-acid-face-care-01.webp",
    price: { amount: 8000, currency: "XOF" },
    gallery: ["assets/products/kojic-acid-face-care-02.webp"],
    details: [
      "40 ml lightweight facial serum, according to the supplied product notes",
      "The supplied notes list kojic acid, glutathione, niacinamide, and ascorbic acid (vitamin C); verify the current ingredient label",
      "Marketed for hydration and the appearance of dark spots and acne marks; cosmetic results vary and are not guaranteed",
    ],
    usage: [
      ["Apply to clean skin", "Smooth a small amount over clean, dry facial skin, avoiding the eyes."],
      ["Follow the label", "Use in the morning or evening only as directed on the package; apply moisturizer as needed."],
      ["Protect your skin", "Use broad-spectrum sunscreen during the day, especially when using products marketed for uneven tone."],
    ],
    safety: "For external use only. Patch test before first use, avoid the eyes and irritated or broken skin, and discontinue if irritation occurs. Follow the package frequency and use sun protection during the day.",
  },
  {
    id: "alpha3-arbutin-serum",
    name: "Alpha3 Arbutin Serum",
    category: "Skincare",
    description: "Facial serum",
    image: "assets/products/alpha3-arbutin-serum-01.webp",
    gallery: [
      "assets/products/alpha3-arbutin-serum-02.webp",
      "assets/products/alpha3-arbutin-serum-03.webp",
    ],
    details: [
      "The supplied product images identify this as an Alpha3 Arbutin serum",
      "Check the current package for the full ingredient list, size, and directions",
      "Marketed for a brighter-looking, more even complexion; cosmetic results vary",
    ],
    safety: "For external use only if confirmed by the product label. Patch test before first use, avoid the eyes and irritated skin, and discontinue if irritation occurs. Use sun protection during the day.",
  },
  {
    id: "gluta-milk",
    name: "Gluta Milk",
    category: "Tea & wellness",
    description: "Beauty drink mix",
    image: "assets/products/gluta-milk-01.webp",
    gallery: [
      "assets/products/gluta-milk-02.webp",
      "assets/products/gluta-milk-03.webp",
    ],
    details: [
      "The supplied images show Gluta Milk drink-mix packaging",
      "Check the current label for ingredients, allergens, serving size, and sugar content",
      "Beauty and skin-brightening claims are not medical advice and have not been independently verified",
    ],
    safety: "Use only as directed on the package. Check for allergens and consult a qualified healthcare professional before use if pregnant, breastfeeding, taking medication, or managing a health condition. Supplements are not a substitute for medical care.",
  },
  {
    id: "alpha-arbutin-3-plus-serum",
    name: "Perfect Skin Lady Alpha Arbutin 3 Plus Serum",
    category: "Skincare",
    description: "Facial serum · 40 ml · 8000 XOF",
    image: "assets/products/alpha3-arbutin-serum-01.webp",
    gallery: [
      "assets/products/alpha3-arbutin-serum-02.webp",
      "assets/products/alpha3-arbutin-serum-03.webp",
    ],
    price: { amount: 8000, currency: "XOF" },
    details: [
      "40 ml face serum; check the current package for the exact ingredients and formula",
      "The supplied notes list alpha arbutin, allantoin, vitamins B and E, lycopene and lactic acid",
      "Marketed for the appearance of dark spots and uneven tone; results and timelines vary and are not guaranteed",
    ],
    usage: [
      ["Apply to clean skin", "Smooth over the face and neck in the morning or evening, following the package directions."],
      ["Use daytime sun protection", "Use a broad-spectrum sunscreen during the day, especially when addressing the appearance of dark spots."],
    ],
    safety: "For external use only. Check the current label, patch test before first use, avoid the eye area and discontinue if irritation occurs. Cosmetic results vary; this product is not a treatment for melasma or acne scars.",
  },
  {
    id: "abutin-3c3-whitening-lotion",
    name: "Abutine 3C3 Super Extra Whitening Lotion",
    category: "Body care",
    description: "Body lotion · 500 ml · 9500 XOF",
    image: "assets/products/product-photo-coming-soon.svg",
    price: { amount: 9500, currency: "XOF" },
    details: [
      "The supplied notes describe a 500 ml body lotion; verify the size and current formula on the bottle",
      "Arbutin, glutathione, vitamins C and E, and UV protection are mentioned in product descriptions, but formulations and sun-protection claims may vary",
      "Moisturizing and tone-evening claims are cosmetic claims and are not guaranteed",
    ],
    usage: [
      ["Apply to the body", "Apply to clean skin and follow the directions on the current bottle."],
      ["Use sun protection", "Do not rely on a body lotion for sun protection unless its label confirms an SPF and gives application directions."],
    ],
    safety: "For external use only. Check the current ingredient list and any SPF claim on the bottle. Patch test first, avoid contact with eyes and discontinue if irritation occurs.",
  },
  {
    id: "snail-white-gluta-milk-soap",
    name: "Perfect Skin Lady Snail White Gluta Milk Soap",
    category: "Skincare",
    description: "Cleansing bar · 65 g · 1250 XOF each",
    image: "assets/products/product-photo-coming-soon.svg",
    price: { amount: 1250, currency: "XOF" },
    details: [
      "65 g cleansing bar; the supplied price is 1,250 XOF per bar or 10,000 XOF for 8 bars",
      "The supplied notes mention glutathione, snail extract and milk extracts; check the current package for the full ingredients",
      "Cleansing, moisturizing and brightening descriptions are cosmetic claims and are not guaranteed",
    ],
    usage: [
      ["Wet and lather", "Wet the skin and work the soap into a lather in your hands or with a clean foaming net."],
      ["Cleanse gently", "Massage the foam gently over face or body, avoiding the eyes, then rinse thoroughly."],
    ],
    safety: "For external use only. Patch test first, avoid the eyes and irritated skin, and discontinue if irritation occurs. Follow the directions on the current package.",
  },
  {
    id: "jamsai-blood-orange-c",
    name: "Jamsai Blood Orange C",
    category: "Tea & wellness",
    description: "Blood orange and vitamin C drink mix · 30 sachets · 20000 XOF",
    image: "assets/products/product-photo-coming-soon.svg",
    price: { amount: 20000, currency: "XOF" },
    details: [
      "Powdered dietary supplement, typically sold in a 30-sachet box; check the current package for serving size and nutrition details",
      "The supplied notes list vitamin C, red orange complex, elderberry, fish collagen, glutathione, CoQ10 and tomato extract; verify the ingredients and amounts on the label",
      "Sugar-free and other wellness claims should be confirmed on the current package; supplement claims are not medical advice",
    ],
    usage: [
      ["Mix as directed", "Dissolve a sachet in water, following the serving size and directions on the current label."],
    ],
    safety: "Check for fish and other allergens. The supplied notes warn against use by pregnant individuals and children; confirm the current package warnings and consult a qualified healthcare professional if uncertain. Do not exceed the labeled serving.",
  },
  {
    id: "clear-nose-moist-skin-barrier-gel",
    name: "Clear Nose Moist Skin Barrier Moisturizing Gel",
    category: "Skincare",
    description: "Facial moisturizing gel · 10 ml · 2000 XOF",
    image: "assets/products/product-photo-coming-soon.svg",
    price: { amount: 2000, currency: "XOF" },
    details: [
      "10 ml travel-size gel for the face and neck",
      "The supplied notes mention ceramides, squalane, niacinamide, hyaluronic acid and panthenol; verify the full ingredient list on the current package",
      "Lightweight texture and barrier-support descriptions are not a guarantee of results or suitability for every skin type",
    ],
    usage: [
      ["Apply a small amount", "Smooth a pea-sized amount over clean face and neck skin, following the label directions."],
    ],
    safety: "For external use only. Patch test before first use, avoid contact with eyes and discontinue if irritation occurs. Check the label for ingredients and suitability, especially if you have sensitive skin.",
  },
  {
    id: "pro-skin-vitamin-a-e-capsules",
    name: "Pro Skin Maryln Vitamin A & E Capsules",
    category: "Skincare",
    description: "Topical face capsules · 3000 XOF",
    image: "assets/products/product-photo-coming-soon.svg",
    price: { amount: 3000, currency: "XOF" },
    details: [
      "Pre-measured capsules containing a topical oil blend described as vitamins A and E; check the current label for ingredients and capsule count",
      "Marketed to moisturize and soften the appearance of fine lines and blemishes; cosmetic results vary and are not guaranteed",
      "The supplied notes describe the product as fragrance-free; confirm this on the package",
    ],
    usage: [
      ["Open one capsule", "Twist the tab to open one capsule and squeeze the contents onto clean fingertips."],
      ["Smooth onto skin", "Gently apply over the face and neck, following the package directions."],
    ],
    safety: "For external use only. Do not swallow. Patch test before first use, avoid the eyes and discontinue if irritation occurs. Use only as directed on the current package.",
  },
  {
    id: "vitamin-e-gold-soap",
    name: "Perfect Skin Lady Vitamin E Gold Collagen Soap",
    category: "Skincare",
    description: "Cleansing bar · 80 g · 2000 XOF",
    image: "assets/products/vitamin-e-gold-soap-01.webp",
    gallery: [
      "assets/products/vitamin-e-gold-soap-02.webp",
      "assets/products/vitamin-e-gold-soap-03.webp",
    ],
    price: { amount: 2000, currency: "XOF" },
    details: [
      "Typically sold as an 80 g cleansing bar",
      "The supplied notes mention vitamin E, collagen and gold; check the current package for the exact ingredients",
      "Hydrating, anti-aging and brightening statements are cosmetic claims and are not guaranteed",
    ],
    safety: "For external use only. Avoid the eyes and irritated or broken skin. Patch test before first use and discontinue if irritation occurs. Follow the directions on the current package.",
  },
  {
    id: "bonne-lacticare-lotion",
    name: "A Bonne Lacticare Lotion",
    category: "Body care",
    description: "Body lotion",
    image: "assets/products/bonne-lacticare-lotion-01.webp",
    details: [
      "The supplied promotional image identifies this as A Bonne Lacticare body lotion",
      "Check the bottle for the current ingredients, size, and directions",
      "Cosmetic claims shown in promotional material have not been independently verified",
    ],
    safety: "For external use only. Patch test first and discontinue if irritation occurs. Avoid contact with eyes and follow the directions on the bottle.",
  },
  {
    id: "bonne-collagen-lotion",
    name: "A Bonne Milk Power Lightening Lotion 3X Collagen",
    category: "Body care",
    description: "Milk and collagen body lotion · 500 ml · 10000 XOF",
    image: "assets/products/bonne-collagen-lotion-01.webp",
    price: { amount: 10000, currency: "XOF" },
    details: [
      "The supplied notes describe a 500 ml lotion; smaller sizes may also be available",
      "Marketed with milk and yogurt proteins, collagen and UV protection; check the current bottle for the exact ingredients and any verified SPF",
      "Moisturizing, firming and brightening statements are cosmetic claims and are not guaranteed",
    ],
    usage: [["Apply to the body", "Apply to clean skin after bathing or when needed, following the bottle directions."]],
    safety: "For external use only. Patch test first, avoid contact with eyes and discontinue if irritation occurs. Do not rely on the lotion for sun protection unless its label confirms an SPF and explains how to use it.",
  },
  {
    id: "bonne-tomato-lotion",
    name: "A Bonné Miracle Spa Milk UV White Lotion with Tomato Extract",
    category: "Body care",
    description: "Tomato extract body lotion · 500 ml · 10000 XOF",
    image: "assets/products/bonne-tomato-lotion-01.webp",
    price: { amount: 10000, currency: "XOF" },
    gallery: [
      "assets/products/bonne-tomato-lotion-02.webp",
      "assets/products/bonne-tomato-lotion-03.webp",
      "assets/products/bonne-tomato-lotion-04.webp",
    ],
    details: [
      "The supplied notes describe a 500 ml body lotion with tomato extract and milk protein",
      "Nano-white glutathione, kojic acid and UV protection are mentioned in product descriptions; check the current bottle for the exact formula and any SPF",
      "Moisturizing, tone-evening and brightening statements are cosmetic claims and are not guaranteed",
    ],
    usage: [["Apply to clean skin", "Massage onto clean, dry or slightly damp skin, following the label directions."]],
    safety: "For external use only. Patch test first, avoid contact with eyes and irritated skin, and discontinue if irritation occurs. Use sun protection during the day.",
  },
  {
    id: "bonne-carrot-lotion",
    name: "A Bonne Perfume Whitening Lotion Carrot & Peach",
    category: "Body care",
    description: "Carrot and peach body lotion · 500 ml · 12000 XOF",
    image: "assets/products/bonne-carrot-lotion-01.webp",
    price: { amount: 12000, currency: "XOF" },
    gallery: [
      "assets/products/bonne-carrot-lotion-02.webp",
      "assets/products/bonne-carrot-lotion-03.webp",
      "assets/products/bonne-carrot-lotion-04.webp",
    ],
    details: [
      "The supplied notes describe a 500 ml lotion with carrot and peach extracts; verify size and formula on the bottle",
      "Glutathione, niacinamide and a vitamin complex are mentioned in product descriptions; check the current label for ingredients",
      "Hydrating and brightening statements and fragrance descriptions are not guaranteed",
    ],
    usage: [["Apply to the body", "Apply to clean skin and massage until absorbed, following the bottle directions."]],
    safety: "For external use only. Patch test first, avoid contact with eyes, and discontinue if irritation occurs. Use sun protection during the day.",
  },
  {
    id: "bonne-papaya-turmeric-lotion",
    name: "A Bonne Perfume Whitening Lotion Papaya & Turmeric",
    category: "Body care",
    description: "Papaya and turmeric body lotion · 500 ml · 12000 XOF",
    image: "assets/products/bonne-papaya-turmeric-lotion-01.webp",
    price: { amount: 12000, currency: "XOF" },
    gallery: [
      "assets/products/bonne-papaya-turmeric-lotion-02.webp",
      "assets/products/bonne-papaya-turmeric-lotion-03.webp",
    ],
    details: [
      "The supplied notes describe a 500 ml lotion with papaya and turmeric extracts; verify size and formula on the bottle",
      "Arbutin and UV protection are mentioned in product descriptions; check the current label for the exact ingredients and any SPF",
      "Exfoliating, soothing and brightening statements are cosmetic claims and are not guaranteed",
    ],
    usage: [["Apply to clean skin", "Apply over clean, slightly damp skin and massage until absorbed, following the bottle directions."]],
    safety: "For external use only. Patch test first, avoid contact with eyes and irritated skin, and discontinue if irritation occurs. Use sun protection during the day.",
  },
  {
    id: "clear-nose-sun-serum",
    name: "Clear Nose UV Sun Serum SPF 50+",
    category: "Skincare",
    description: "Face sunscreen serum · SPF 50+ PA++++ · 2000 XOF",
    image: "assets/products/clear-nose-sun-serum-01.webp",
    price: { amount: 2000, currency: "XOF" },
    gallery: [
      "assets/products/clear-nose-sun-serum-02.webp",
      "assets/products/clear-nose-sun-serum-03.webp",
      "assets/products/clear-nose-sun-serum-04.webp",
      "assets/products/clear-nose-sun-serum-05.webp",
      "assets/products/clear-nose-sun-serum-06.webp",
    ],
    details: [
      "The supplied images show Clear Nose UV Sun Serum with SPF 50+ PA++++",
      "Check the current package for the amount, ingredients, and application directions",
      "Sunscreen should be applied and reapplied as directed on its label",
    ],
    safety: "For external use only. Avoid contact with eyes and discontinue if irritation occurs. Follow the label's application and reapplication directions; sunscreen does not eliminate all UV risk.",
  },
  {
    id: "r-skin-gluta-capsules",
    name: "R-Skin Gluta Capsules",
    category: "Tea & wellness",
    description: "Gluta capsule supplement",
    image: "assets/products/r-skin-gluta-capsules-01.webp",
    gallery: [
      "assets/products/r-skin-gluta-capsules-02.webp",
      "assets/products/r-skin-gluta-capsules-03.webp",
      "assets/products/r-skin-gluta-capsules-04.webp",
    ],
    details: [
      "The supplied images identify the product as R-Skin Gluta capsules",
      "Check the current package for ingredients, serving size, allergens, and directions",
      "Skin-lightening and other wellness claims shown in promotions have not been independently verified",
    ],
    safety: "Use only as directed on the current package. Consult a qualified healthcare professional before use if pregnant, breastfeeding, taking medication, or managing a health condition. Supplements are not a substitute for medical care.",
  },
  {
    id: "collagen-plus-drink",
    name: "Araya Collagen Mix Plus",
    category: "Tea & wellness",
    description: "Berry collagen drink mix · 22500 XOF",
    image: "assets/products/araya-collagen-mix-plus-01.webp",
    price: { amount: 22500, currency: "XOF" },
    gallery: [
      "assets/products/araya-collagen-mix-plus-02.webp",
      "assets/products/araya-collagen-mix-plus-03.webp",
    ],
    details: [
      "Strawberry/mixed berry flavours and 15- or 30-sachet pack formats are described; confirm the available version and net weight on the package",
      "The supplied notes list fish collagen peptides, astaxanthin, CoQ10, acerola, rosehip and hyaluronic acid; verify the current formula and amounts on the label",
      "Beauty and wellness claims are not medical advice and have not been independently verified",
    ],
    usage: [["Mix one sachet", "Mix with water according to the serving size and directions on the current label."]],
    safety: "Check for fish and other allergens. The supplied notes advise against use by children and during pregnancy or breastfeeding; verify the current package warnings and consult a qualified healthcare professional if uncertain. Use only as directed.",
  },
  {
    id: "deva-collagen-lychee",
    name: "Deva Collagen Plus Lychee",
    category: "Tea & wellness",
    description: "Lychee collagen drink mix · 30 sachets · 18000 XOF",
    image: "assets/products/deva-collagen-lychee-01.webp",
    gallery: ["assets/products/deva-collagen-lychee-02.webp"],
    price: { amount: 18000, currency: "XOF" },
    details: [
      "The supplied notes describe a lychee-flavoured pack of 30 sachets",
      "Collagen, CoQ10 and glutathione are mentioned in product descriptions; check the current label for the full ingredients and amounts",
      "Beauty and wellness claims are not medical advice and have not been independently verified",
    ],
    usage: [["Prepare a serving", "Mix one sachet with water as directed on the current package; do not exceed the labeled serving."], ["Check precautions", "Check the product label for allergens, serving frequency and warnings before use."]],
    safety: "Check for fish and other allergens. Ask a qualified healthcare professional before use if pregnant, breastfeeding, taking medication, or managing a health condition. Use only as directed on the package.",
  },
  {
    id: "devac-plus-collagen-orange",
    name: "DevaC Plus Collagen",
    category: "Tea & wellness",
    description: "Orange collagen drink mix · 30 sachets · 20000 XOF",
    image: "assets/products/devac-orange-collagen-01.webp",
    price: { amount: 20000, currency: "XOF" },
    gallery: [
      "assets/products/devac-orange-collagen-02.webp",
      "assets/products/devac-orange-collagen-03.webp",
    ],
    details: [
      "The supplied notes describe a 30-sachet powdered drink mix",
      "Fish collagen peptides, vitamin C, glutathione and fruit extracts are mentioned; check the current package for the full ingredients, amounts, and serving size",
      "Beauty and wellness claims shown in promotions have not been independently verified",
    ],
    usage: [["Mix one sachet", "Dissolve a sachet in water according to the current package directions."]],
    safety: "Use only as directed on the current package. Check for allergens and consult a qualified healthcare professional before use if pregnant, breastfeeding, taking medication, or managing a health condition. Supplements are not a substitute for medical care.",
  },
  {
    id: "araya-duo-set",
    name: "ARAYA Duo Set Ceramide Collagen+ & Gluta Strawberry Plus",
    category: "Tea & wellness",
    description: "Beauty drink mix set · 30 sachets · 22500 XOF",
    image: "assets/products/araya-duo-set-01.webp",
    gallery: [
      "assets/products/araya-duo-set-02.webp",
      "assets/products/araya-duo-set-03.webp",
    ],
    price: { amount: 22500, currency: "XOF" },
    details: [
      "30 sachets total, typically split into 15 Ceramide Collagen+ and 15 Gluta Strawberry Plus; the supplied notes describe 10 g sachets or mixed portions, so confirm the exact net weight and contents on the current package",
      "Ceramide Collagen+ is marketed for skin hydration and elasticity; Gluta Strawberry Plus is marketed for antioxidant support and radiance. These claims are not guaranteed",
      "Check each sachet's full ingredient list, allergens and serving instructions before use",
    ],
    usage: [
      ["Follow the sachet directions", "Mix and take each product only according to its own package instructions."],
    ],
    safety: "Check for allergens and follow the package precautions. The supplied notes advise against use by children and recommend medical advice during pregnancy or breastfeeding. Consult a qualified healthcare professional if you take medication or manage a health condition.",
  },
];

const CART_KEY = "thailand-deni-cart";
const LANGUAGE_KEY = "thailand-deni-language";
const THEME_KEY = "thailand-deni-theme";
const THEMES = ["botanical", "saffron", "lotus"];
const page = document.body.dataset.page;
const getProduct = (id) => PRODUCTS.find((product) => product.id === id);

const FRENCH = {
  "Skip to content": "Passer au contenu",
  "Thailande Deni Shop home": "Accueil Thailande Deni Shop",
  "Main navigation": "Navigation principale",
  Home: "Accueil",
  Shop: "Boutique",
  "Our story": "Notre histoire",
  Contact: "Contact",
  Bag: "Panier",
  "Shopping bag": "Panier",
  "Open menu": "Ouvrir le menu",
  "Close menu": "Fermer le menu",
  "Switch language to English": "Passer le site en anglais",
  "Switch language to French": "Passer le site en français",
  Theme: "Thème",
  "Switch to botanical theme": "Passer au thème botanique",
  "Switch to saffron theme": "Passer au thème safran",
  "Switch to lotus theme": "Passer au thème lotus",
  "REVIEWS — MOCKUP": "AVIS — MAQUETTE",
  "Kind words,": "De jolis mots,",
  "in the making.": "à venir.",
  "A lovely addition to my evening routine.": "Un joli complément à ma routine du soir.",
  "The scent is so comforting, and the bottle is easy to keep in my bag.": "Le parfum est très agréable et le flacon se glisse facilement dans mon sac.",
  "I enjoyed discovering these Thai beauty products.": "J'ai aimé découvrir ces produits de beauté thaïlandais.",
  "Example only": "Exemple uniquement",
  "WhatsApp orders": "Commandes WhatsApp",
  "WhatsApp orders: +223 93 24 34 01": "Commandes WhatsApp : +223 93 24 34 01",
  "Business location": "Adresse de la boutique",
  "Social media": "Réseaux sociaux",
  "Coming soon": "Bientôt",
  "Contact details": "Coordonnées",
  "Thailande Deni Shop brand image with Thai-inspired artwork": "Visuel de Thailande Deni Shop avec une illustration inspirée de la Thaïlande",
  "Founded by Malian entrepreneur Miss Coumba Diawara": "Fondée par l'entrepreneure malienne Mlle Coumba Diawara",
  "5 out of 5 stars": "5 étoiles sur 5",
  "Discover Thailande Deni Shop Huile Jaune": "Découvrir Huile Jaune de Thailande Deni Shop",
  "Thailande Deni Shop Huile Jaune product poster, showing the golden 15 ml bottle and its ingredients": "Affiche du produit Huile Jaune de Thailande Deni Shop, avec le flacon doré de 15 ml et ses ingrédients",
  "Thailande Deni Shop Huile Jaune, golden massage oil in a 15 ml dropper bottle": "Huile de massage dorée Huile Jaune de Thailande Deni Shop, dans un flacon compte-gouttes de 15 ml",
  "Thai beauty, skincare and wellness finds, thoughtfully selected for your routine.": "Des produits thaïlandais de beauté, de soin et de bien-être, choisis avec soin pour votre routine.",
  Explore: "Découvrir",
  "Shop all products": "Voir tous les produits",
  "Featured product": "Produit à la une",
  "Need a hand?": "Besoin d'aide ?",
  "Get in touch": "Nous contacter",
  "Your shopping bag": "Votre panier",
  "Take care of your body, naturally.": "Prenez soin de votre corps, naturellement.",
  "A THOUGHTFUL BODY-CARE RITUAL": "UN RITUEL DE SOIN POUR LE CORPS",
  "A little oil.": "Un peu d'huile.",
  "A lovely ritual.": "Un joli rituel.",
  "Meet Huile Jaune: an aromatic massage oil made in Thailand, created to bring a moment of care to your everyday.": "Découvrez Huile Jaune : une huile de massage aromatique fabriquée en Thaïlande, pour ajouter une pause bien-être à votre quotidien.",
  "Discover the oil": "Découvrir l'huile",
  "Made in Thailand": "Fabriquée en Thaïlande",
  "MADE IN": "FABRIQUÉ EN",
  THAILAND: "THAÏLANDE",
  "A daily moment, made yours": "Un moment rien qu'à vous",
  "Product highlights": "Les atouts du produit",
  "MADE IN THAILAND": "FABRIQUÉ EN THAÏLANDE",
  "15 ML OF AROMATIC CARE": "15 ML DE SOIN AROMATIQUE",
  "YOUR BODY, YOUR RITUAL": "VOTRE CORPS, VOTRE RITUEL",
  "THE SIGNATURE BLEND": "LE MÉLANGE SIGNATURE",
  "Meet your new": "Découvrez votre nouveau",
  "moment of care.": "moment de bien-être.",
  "A compact bottle with a distinctive herbal aroma. Massage a few drops into the skin as part of your body-care routine, and let the familiar ritual be a moment just for you.": "Un petit flacon au parfum herbacé singulier. Massez quelques gouttes sur la peau dans le cadre de votre routine et faites de ce rituel un moment rien qu'à vous.",
  "Get to know Huile Jaune": "En savoir plus sur Huile Jaune",
  "OUR SIGNATURE OIL": "NOTRE HUILE SIGNATURE",
  "Herbal massage oil · 15 ml": "Huile de massage aux plantes · 15 ml",
  "The Huile Jaune bottle and illustrated directions for use": "Le flacon Huile Jaune et son mode d'emploi illustré",
  "A SIMPLE LITTLE RITUAL": "UN PETIT RITUEL TOUT SIMPLE",
  "Pause.": "Faites une pause.",
  "Apply. Unwind.": "Appliquez. Détendez-vous.",
  "Warm a few drops between your hands, then massage gently into the area of your choice. Use as needed, following the directions on the product label.": "Réchauffez quelques gouttes entre vos mains, puis massez doucement la zone souhaitée. Utilisez selon vos besoins et suivez les instructions de l'étiquette.",
  "How to use": "Mode d'emploi",
  "A LITTLE MORE TO EXPLORE": "ET BIEN PLUS À DÉCOUVRIR",
  "Thai beauty, skincare": "Beauté, soins de la peau",
  "& everyday wellness.": "et bien-être au quotidien.",
  "From skincare and body care to herbal teas and wellness finds, explore a collection inspired by the products and rituals of Thailand.": "Des soins du visage et du corps aux tisanes et produits bien-être, découvrez une sélection inspirée des produits et rituels thaïlandais.",
  "Explore the collection": "Découvrir la collection",
  "A FEW THINGS WE LOVE": "QUELQUES COUPS DE CŒUR",
  "Explore the": "Découvrez la",
  "collection.": "collection.",
  "Show previous products": "Afficher les produits précédents",
  "Show next products": "Afficher les produits suivants",
  "Product gallery": "Galerie de produits",
  "A BOTANICAL-INSPIRED BLEND": "UN MÉLANGE AUX INSPIRATIONS BOTANIQUES",
  "Herbal notes.": "Des notes herbacées.",
  "Golden moments.": "Des instants dorés.",
  "Huile Jaune brings together a distinctive aromatic blend. The ingredient names below are transcribed from the product image; always check the packaging for the complete, current ingredient information.": "Huile Jaune réunit un mélange aromatique singulier. Les ingrédients ci-dessous sont retranscrits depuis la photo du produit ; consultez toujours l'emballage pour obtenir la liste complète et à jour.",
  "Explore the ingredients": "Découvrir les ingrédients",
  "Cajeput oil": "Huile de cajeput",
  "Clove oil": "Huile de girofle",
  "Eucalyptus oil": "Huile d'eucalyptus",
  "Coptis chinensis extract": "Extrait de Coptis chinensis",
  Camphor: "Camphre",
  Borneol: "Bornéol",
  "A LITTLE SOMETHING FOR YOUR ROUTINE": "UNE PETITE TOUCHE POUR VOTRE ROUTINE",
  "Make room for": "Faites place à",
  "a moment of care.": "un moment de bien-être.",
  "Shop the collection": "Voir la collection",
  "BEAUTY & WELLNESS FROM THAILAND": "BEAUTÉ ET BIEN-ÊTRE DE THAÏLANDE",
  "Discover your": "Découvrez votre",
  "Thai beauty ritual.": "rituel beauté thaïlandais.",
  "A considered collection of Thai skincare, body care, teas and wellness finds. Explore the products and their details below.": "Une sélection de soins thaïlandais pour le visage et le corps, de thés et de produits bien-être. Découvrez les produits et leurs détails ci-dessous.",
  "Prices are shown only where provided, in XOF. Please contact the shop to confirm current availability, prices and shipping.": "Les prix sont affichés en XOF lorsqu'ils ont été communiqués. Contactez la boutique pour confirmer les disponibilités, les prix et la livraison.",
  "Thai beauty & wellness": "Beauté et bien-être thaïlandais",
  "Curated product selection": "Une sélection de produits avec soin",
  "Product details": "Détails des produits",
  "Explore each item before ordering": "Consultez chaque fiche avant de commander",
  "Prices confirmed directly": "Prix à confirmer directement",
  "Contact us about your order": "Contactez-nous pour votre commande",
  "Product not found — Thailande Deni Shop": "Produit introuvable — Thailande Deni Shop",
  "We couldn't find that product.": "Nous n'avons pas trouvé ce produit.",
  "THAILANDE DENI SHOP": "BOUTIQUE THAILANDE DENI SHOP",
  "A thoughtfully selected product from Thailande Deni Shop's collection of Thai beauty, skincare and wellness finds.": "Un produit soigneusement choisi parmi la sélection thaïlandaise de beauté, de soins et de bien-être de Thailande Deni Shop.",
  "Product information": "Informations sur le produit",
  "THAI": "THAÏ",
  "BEAUTY": "BEAUTÉ",
  "& WELLNESS": "ET BIEN-ÊTRE",
  "A note on use": "Conseils d'utilisation",
  "A note on product information": "À propos des informations produit",
  "Descriptions reflect the supplied product notes and may include manufacturer or distributor claims; they have not been independently verified. Packaging can vary. Always check the current label for ingredients, directions, precautions and suitability. Food supplements are not a substitute for medical advice.": "Les descriptions s'appuient sur les informations fournies et peuvent reprendre les indications du fabricant ou du distributeur ; elles n'ont pas été vérifiées de manière indépendante. L'emballage peut varier. Consultez l'étiquette actuelle pour connaître les ingrédients, le mode d'emploi, les précautions et la compatibilité. Les compléments alimentaires ne remplacent pas un avis médical.",
  "EXPLORE THE COLLECTION": "DÉCOUVREZ LA COLLECTION",
  "Find a little something": "Trouvez ce petit quelque chose",
  "for your routine.": "pour votre routine.",
  "Back to the shop": "Retour à la boutique",
  "A compact massage oil made in Thailand": "Une huile de massage compacte fabriquée en Thaïlande",
  "Menthol, camphor, borneol, cajeput, clove and eucalyptus oils are listed on the supplied product image": "La photo fournie mentionne du menthol, du camphre, du bornéol, des huiles de cajeput, de girofle et d'eucalyptus",
  "Apply a few drops": "Appliquez quelques gouttes",
  "Use a small amount on the area you wish to massage, following the product label.": "Appliquez une petite quantité sur la zone à masser, conformément aux instructions figurant sur le produit.",
  "Massage gently": "Massez délicatement",
  "Work the oil into the skin with gentle, circular movements.": "Faites pénétrer l'huile par de légers mouvements circulaires.",
  "Use as needed": "Utilisez selon vos besoins",
  "The label suggests using one to three times daily. Follow the directions and precautions on your bottle.": "L'étiquette suggère une à trois utilisations par jour. Respectez le mode d'emploi et les précautions indiqués sur votre flacon.",
  "For external use only. Check the product packaging for directions, warnings, and suitability. Avoid contact with eyes and discontinue use if irritation occurs. The product image includes traditional relief claims; these have not been independently verified and are not medical advice.": "Usage externe uniquement. Consultez l'emballage pour le mode d'emploi, les avertissements et les précautions. Évitez tout contact avec les yeux et cessez l'utilisation en cas d'irritation. La photo du produit comporte des allégations traditionnelles de soulagement qui n'ont pas été vérifiées de manière indépendante et ne constituent pas un avis médical.",
  "Price on request": "Prix sur demande",
  "Body care": "Soin du corps",
  Skincare: "Soin de la peau",
  "Tea & wellness": "Thés et bien-être",
  "Personal care": "Hygiène et soin personnel",
  "Traditional aromatic massage oil · 15 ml": "Huile de massage aromatique traditionnelle · 15 ml",
  "Facial soap and hydrating serum set": "Coffret savon visage et sérum hydratant",
  "Fruit extract body scrub": "Gommage corporel aux extraits de fruits",
  "Face and body cleansing bar": "Savon nettoyant pour le visage et le corps",
  "Facial serum · 3500 XOF": "Sérum visage · 3 500 XOF",
  "Facial cream · 15 g": "Crème visage · 15 g",
  "Thai facial cleansing soap and mask": "Savon nettoyant et masque visage thaïlandais",
  "Coffee exfoliating soap · 60 g · 3500 XOF": "Savon exfoliant au café · 60 g · 3 500 XOF",
  "Caffeine-free herbal infusion": "Infusion aux plantes sans caféine",
  "Rose-infused Thai herbal tea": "Tisane thaïlandaise à la rose",
  "Intimate-care product": "Produit de soin intime",
  "Single-use skincare booster capsules": "Capsules à usage unique pour les soins de la peau",
  "Facial serum · commonly listed as 30 or 40 ml": "Sérum visage · généralement proposé en 30 ou 40 ml",
  "Blood orange drink mix": "Boisson en poudre à l'orange sanguine",
  "Sugar-free beauty drink mix · 20000 XOF": "Boisson beauté sans sucre · 20 000 XOF",
  "Tomato drink mix · 20000 XOF": "Boisson en poudre à la tomate · 20 000 XOF",
  "Fiber drink mix · 30 sachets · 20000 XOF": "Boisson aux fibres · 30 sachets · 20 000 XOF",
  "A salt scrub described as exfoliating and refreshing the skin": "Un gommage au sel décrit comme exfoliant et rafraîchissant pour la peau",
  "The supplied notes list cantaloupe, carrot, Mahad and mixed fruit extracts": "Les notes fournies mentionnent des extraits de cantaloup, de carotte, de Mahad et de fruits",
  "Hyaloe Hydropower Soap · 100 g": "Savon Hyaloe Hydropower · 100 g",
  "Hyaloe Hydropower Serum · 30 ml, with hyaluronic acid": "Sérum Hyaloe Hydropower · 30 ml, à l'acide hyaluronique",
  "Described as containing 24K gold, collagen, niacinamide, alpha arbutin, vitamin E and glycerin": "Décrit comme contenant de l'or 24 carats, du collagène, de la niacinamide, de l'alpha-arbutine, de la vitamine E et de la glycérine",
  "Presented as a cleansing bar that helps skin feel soft and hydrated": "Présenté comme un savon nettoyant qui aide à laisser la peau douce et hydratée",
  "Marketed for a brighter-looking, more even complexion": "Présenté pour un teint d'apparence plus lumineuse et uniforme",
  "The supplied notes list niacinamide, vitamin C, 24K gold, collagen and Galactomyces ferment": "Les notes fournies mentionnent de la niacinamide, de la vitamine C, de l'or 24 carats, du collagène et du ferment Galactomyces",
  "A travel-size facial cream made in Thailand": "Une crème visage format voyage fabriquée en Thaïlande",
  "The supplied notes list 24K gold, kojic acid dipalmitate, niacinamide and alpha arbutin": "Les notes fournies mentionnent de l'or 24 carats, du dipalmitate d'acide kojique, de la niacinamide et de l'alpha-arbutine",
  "Typically listed as 50 g; some versions may differ": "Généralement annoncé à 50 g ; le poids peut varier selon les versions",
  "The supplied notes describe a mousse-like lather used with a foaming net": "Les notes fournies décrivent une mousse onctueuse à utiliser avec un filet moussant",
  "The supplied notes list roasted coffee, tamarind, honey, coconut oil and turmeric": "Les notes fournies mentionnent du café torréfié, du tamarin, du miel, de l'huile de coco et du curcuma",
  "A 2-in-1 soap and scrub described for all skin types": "Un savon-gommage 2-en-1 décrit pour tous les types de peau",
  "Combines moringa leaves and ginger": "Associe des feuilles de moringa et du gingembre",
  "For ingredients, preparation and precautions, follow the product packaging": "Pour les ingrédients, la préparation et les précautions, suivez les indications de l'emballage",
  "The supplied notes list white kwao krua, sappan wood, Curcuma comosa, safflower, repair grass, shatavari, stevia, chamomile and roselle": "Les notes fournies mentionnent du kwao krua blanc, du bois de sappan, du Curcuma comosa, du carthame, de l'herbe repair, du shatavari, de la stévia, de la camomille et de la roselle",
  "Marketed for women's wellness; health claims have not been independently verified": "Présenté pour le bien-être féminin ; les allégations de santé n'ont pas été vérifiées de manière indépendante",
  "The supplied notes describe a serum or vitamin capsule product": "Les notes fournies décrivent un produit sous forme de sérum ou de capsules vitaminées",
  "Check the package and consult a qualified health professional before use; no use method is provided here": "Consultez l'emballage et un professionnel de santé qualifié avant utilisation ; aucun mode d'emploi n'est fourni ici",
  "Typically 20 capsules per box, 250 mg each, according to the supplied notes": "Selon les notes fournies, généralement 20 capsules de 250 mg par boîte",
  "Check the product packaging for ingredients and directions before mixing with other products": "Consultez les ingrédients et le mode d'emploi sur l'emballage avant de mélanger ce produit à d'autres",
  "Marketed for the appearance of dark spots and uneven tone": "Présenté pour l'apparence des taches pigmentaires et du teint irrégulier",
  "The supplied notes list ingredients such as glycerin, vitamins C and E, niacinamide, aloe vera and collagen; check the current label": "Les notes fournies mentionnent notamment de la glycérine, des vitamines C et E, de la niacinamide, de l'aloe vera et du collagène ; consultez l'étiquette actuelle",
  "The supplied notes describe a vitamin C and collagen drink mix": "Les notes fournies décrivent une boisson en poudre à la vitamine C et au collagène",
  "Ingredients and sugar content can vary; check the package for current product details": "Les ingrédients et la teneur en sucre peuvent varier ; consultez l'emballage pour les informations à jour",
  "The supplied notes list glutathione, sakura extract, collagen, hyaluronic acid and vitamin C": "Les notes fournies mentionnent du glutathion, de l'extrait de sakura, du collagène, de l'acide hyaluronique et de la vitamine C",
  "Use only as directed on the package; supplement claims are not medical advice": "Respectez le mode d'emploi figurant sur l'emballage ; les allégations sur les compléments ne constituent pas un avis médical",
  "The supplied notes list glutathione, tomato extract, lycopene, acerola cherry and vitamin C": "Les notes fournies mentionnent du glutathion, de l'extrait de tomate, du lycopène, de l'acérola et de la vitamine C",
  "Flavors listed in the supplied notes: Green Apple and 7-Berry": "Saveurs indiquées dans les notes fournies : pomme verte et 7 fruits rouges",
  "The notes list fiber, prebiotics and probiotics; mix and use only as directed on the package": "Les notes mentionnent des fibres, des prébiotiques et des probiotiques ; préparez et consommez selon les instructions de l'emballage",
  "View ": "Voir ",
  "Added to bag": "Ajouté au panier",
  "Add to bag": "Ajouter au panier",
  "Your bag is taking a little pause.": "Votre panier prend une petite pause.",
  "There's nothing here just yet. Explore our Thai beauty and wellness collection.": "Votre panier est vide pour le moment. Découvrez notre collection beauté et bien-être de Thaïlande.",
  "Explore the shop": "Découvrir la boutique",
  "Subtotal": "Sous-total",
  Shipping: "Livraison",
  "To be confirmed": "À confirmer",
  "All listed prices are in XOF. Prices for unpriced items will be confirmed with the shop. Shipping and payment are not configured.": "Tous les prix affichés sont en XOF. Les prix des articles non tarifés seront confirmés par la boutique. La livraison et le paiement ne sont pas encore configurés.",
  "Request to order": "Demander à commander",
  "Change quantity": "Modifier la quantité",
  "Decrease quantity": "Diminuer la quantité",
  "Increase quantity": "Augmenter la quantité",
  Remove: "Retirer",
  "Your name": "Votre nom",
  "Your email": "Votre adresse e-mail",
  "Prepare order request": "Préparer la demande de commande",
  "YOUR LITTLE RITUAL": "VOTRE PETIT RITUEL",
  "Your bag": "Votre panier",
  "THE THAILANDE DENI SHOP STORY": "L'HISTOIRE DE THAILANDE DENI SHOP",
  "A Malian founder.": "Une fondatrice malienne.",
  "A Thai discovery.": "Des découvertes thaïlandaises.",
  "Thailande Deni Shop was started by Miss Coumba Diawara, a Malian businesswoman and entrepreneur. Built on her interest in Thai beauty and wellness, the shop brings a carefully selected range of skincare, body care, teas and wellness finds to customers in Mali and beyond.": "Thailande Deni Shop a été créée par Mlle Coumba Diawara, femme d'affaires et entrepreneure malienne. Portée par son intérêt pour la beauté et le bien-être thaïlandais, la boutique propose une sélection de soins pour la peau et le corps, de thés et de produits bien-être aux clients du Mali et d'ailleurs.",
  "Founded in Mali": "Fondée au Mali",
  "Founded by Malian entrepreneur Miss Coumba Diawara, Thailande Deni Shop connects customers with beauty and wellness products from Thailand.": "Fondée par l'entrepreneure malienne Mlle Coumba Diawara, Thailande Deni Shop fait découvrir aux clients des produits de beauté et de bien-être venus de Thaïlande.",
  "Inspired by Thailand": "Inspirée par la Thaïlande",
  "Discover a considered selection of Thai skincare, body care, herbal teas and wellness finds for your everyday routine.": "Découvrez une sélection soignée de soins thaïlandais pour la peau et le corps, de tisanes et de produits bien-être pour votre quotidien.",
  "Know what you use": "Sachez ce que vous utilisez",
  "Product details are shared as a guide. Always check the current packaging for the full ingredient list, directions, precautions and suitability.": "Les détails des produits sont fournis à titre indicatif. Consultez toujours l'emballage actuel pour connaître la liste complète des ingrédients, le mode d'emploi et les précautions.",
  "Take care of your body, naturally.": "Prenez soin de votre corps, naturellement.",
  "A MOMENT FOR YOU": "UN MOMENT POUR VOUS",
  "A MOMENT, JUST FOR YOU": "UN MOMENT RIEN QUE POUR VOUS",
  "Discover the Thai": "Découvrez la beauté",
  "beauty collection.": "thaïlandaise.",
  "WE'RE HERE TO HELP": "NOUS SOMMES LÀ POUR VOUS AIDER",
  "Let's": "Parlons",
  "talk.": "ensemble.",
  "Questions about our products or your order? Send us a note and we'll be happy to help.": "Une question sur nos produits ou votre commande ? Écrivez-nous, nous serons ravis de vous aider.",
  "For product directions or ingredient details, please check the information printed on your bottle.": "Pour le mode d'emploi et les ingrédients, consultez les informations figurant sur l'emballage.",
  "Your name": "Votre nom",
  "Email address": "Adresse e-mail",
  "What can we help with?": "Comment pouvons-nous vous aider ?",
  "Product question": "Question sur un produit",
  "Order question": "Question sur une commande",
  "Something else": "Autre demande",
  "Your message": "Votre message",
  "Prepare your message": "Préparer votre message",
  "Your email app will open with your message addressed to info@thailandedeni.com.": "Votre application de messagerie s'ouvrira avec un message adressé à info@thailandedeni.com.",
  "Your email app should open with the message draft addressed to info@thailandedeni.com.": "Votre application de messagerie devrait s'ouvrir avec un brouillon adressé à info@thailandedeni.com.",
  "A LITTLE CARE GOES A LONG WAY": "UN PEU D'ATTENTION FAIT BEAUCOUP",
  "Explore Huile Jaune": "Découvrir Huile Jaune",
  "Review your Thailande Deni Shop order.": "Consultez votre commande Thailande Deni Shop.",
  "Get in touch with Thailande Deni Shop about Thai beauty products and your order.": "Contactez Thailande Deni Shop au sujet des produits de beauté thaïlandais et de votre commande.",
  "Explore product details from Thailande Deni Shop's Thai beauty, skincare and wellness collection.": "Découvrez les détails des produits de beauté, de soin et de bien-être thaïlandais de Thailande Deni Shop.",
  "Meet Miss Coumba Diawara, the Malian businesswoman and entrepreneur who started Thailande Deni Shop.": "Découvrez Mlle Coumba Diawara, femme d'affaires et entrepreneure malienne à l'origine de Thailande Deni Shop.",
  "Discover Thai beauty, skincare and wellness at Thailande Deni Shop, founded by Malian entrepreneur Coumba Diawara.": "Découvrez chez Thailande Deni Shop une sélection de produits thaïlandais de beauté, de soin et de bien-être, fondée par l'entrepreneure malienne Coumba Diawara.",
  "Miss Coumba Diawara, Malian businesswoman and founder of Thailande Deni Shop": "Mlle Coumba Diawara, femme d'affaires malienne et fondatrice de Thailande Deni Shop",
  "Shop Thai beauty & wellness — Thailande Deni Shop": "Beauté et bien-être thaïlandais — Thailande Deni Shop",
  "Order request: Thailande Deni Shop": "Demande de commande : Thailande Deni Shop",
  "Hello, I would like to request an order.": "Bonjour, je souhaite passer une commande.",
  "Please confirm availability, final prices, shipping, and payment options.": "Merci de confirmer la disponibilité, les prix définitifs, la livraison et les modalités de paiement.",
  "Please confirm availability, shipping, final price, and payment options.": "Merci de confirmer la disponibilité, le prix définitif, la livraison et les modalités de paiement.",
  "price to confirm": "prix à confirmer",
  Name: "Nom",
  Email: "E-mail",
  Product: "Produit",
  Quantity: "Quantité",
  "Preview subtotal": "Sous-total provisoire",
  "Email address": "Adresse e-mail",
  "Get in touch — Thailande Deni Shop": "Nous contacter — Thailande Deni Shop",
  "Our story — Thailande Deni Shop": "Notre histoire — Thailande Deni Shop",
  "Your bag — Thailande Deni Shop": "Votre panier — Thailande Deni Shop",
  "Product details — Thailande Deni Shop": "Détails du produit — Thailande Deni Shop",
  "Thai beauty & wellness": "Beauté et bien-être thaïlandais",
  "Thailande Deni Shop — Thai beauty & wellness": "Thailande Deni Shop — beauté et bien-être thaïlandais",
  "THE WOMAN BEHIND THE BRAND": "LA FEMME DERRIÈRE LA MARQUE",
  "Founded with care": "Une marque créée avec soin",
  "by Coumba Diawara.": "par Coumba Diawara.",
  "Thailande Deni Shop was started by Miss Coumba Diawara, a Malian businesswoman and entrepreneur. Her vision brings Thai beauty and wellness discoveries to customers in Mali and beyond.": "Thailande Deni Shop a été créée par Mlle Coumba Diawara, femme d'affaires et entrepreneure malienne. Sa vision fait découvrir des produits thaïlandais de beauté et de bien-être aux clients du Mali et d'ailleurs.",
  "Meet the founder": "Rencontrer la fondatrice",
  "Thailande Deni Shop Huile Jaune, a traditional massage oil made in Thailand": "Huile Jaune de Thailande Deni Shop, une huile de massage traditionnelle fabriquée en Thaïlande",
  "Thailande Deni Shop Huile Jaune label and golden 15 ml bottle": "Étiquette Huile Jaune de Thailande Deni Shop et flacon doré de 15 ml",
  "Meet the founder of Thailande Deni Shop": "Découvrez la fondatrice de Thailande Deni Shop",
  "40 ml face serum; check the current package for the exact ingredients and formula": "Sérum visage de 40 ml ; consultez l'emballage actuel pour connaître les ingrédients et la formule exacts",
  "The supplied notes list alpha arbutin, allantoin, vitamins B and E, lycopene and lactic acid": "Les notes fournies mentionnent de l'alpha-arbutine, de l'allantoïne, des vitamines B et E, du lycopène et de l'acide lactique",
  "Marketed for the appearance of dark spots and uneven tone; results and timelines vary and are not guaranteed": "Présenté pour l'apparence des taches et du teint irrégulier ; les résultats et les délais varient et ne sont pas garantis",
  "Apply to clean skin": "Appliquez sur une peau propre",
  "Smooth over the face and neck in the morning or evening, following the package directions.": "Appliquez sur le visage et le cou matin ou soir, en suivant les instructions de l'emballage.",
  "Use daytime sun protection": "Protégez-vous du soleil pendant la journée",
  "Use a broad-spectrum sunscreen during the day, especially when addressing the appearance of dark spots.": "Utilisez une protection solaire à large spectre pendant la journée, notamment si vous ciblez l'apparence des taches.",
  "The supplied notes describe a 500 ml body lotion; verify the size and current formula on the bottle": "Les notes fournies décrivent une lotion corporelle de 500 ml ; vérifiez la contenance et la formule actuelle sur le flacon",
  "Arbutin, glutathione, vitamins C and E, and UV protection are mentioned in product descriptions, but formulations and sun-protection claims may vary": "L'arbutine, le glutathion, les vitamines C et E et une protection UV sont mentionnés dans les descriptions ; les formules et les allégations solaires peuvent varier",
  "Moisturizing and tone-evening claims are cosmetic claims and are not guaranteed": "Les allégations hydratantes et d'uniformisation du teint sont cosmétiques et ne sont pas garanties",
  "The current ingredient list and any SPF claim on the bottle": "La liste actuelle des ingrédients et toute allégation SPF figurant sur le flacon",
  "Check the current ingredient list and any SPF claim on the bottle. Patch test first, avoid contact with eyes and discontinue if irritation occurs.": "Vérifiez la liste actuelle des ingrédients et toute allégation SPF sur le flacon. Faites un essai cutané, évitez les yeux et cessez en cas d'irritation.",
  "65 g cleansing bar; the supplied price is 1,250 XOF per bar or 10,000 XOF for 8 bars": "Savon nettoyant de 65 g ; prix fourni : 1 250 XOF le savon ou 10 000 XOF les 8 savons",
  "The supplied notes mention glutathione, snail extract and milk extracts; check the current package for the full ingredients": "Les notes fournies mentionnent du glutathion, de l'extrait d'escargot et des extraits de lait ; consultez l'emballage actuel pour la liste complète des ingrédients",
  "Cleansing, moisturizing and brightening descriptions are cosmetic claims and are not guaranteed": "Les descriptions nettoyantes, hydratantes et éclaircissantes sont des allégations cosmétiques non garanties",
  "Wet and lather": "Mouillez et faites mousser",
  "Wet the skin and work the soap into a lather in your hands or with a clean foaming net.": "Mouillez la peau et faites mousser le savon entre vos mains ou avec un filet propre.",
  "Cleanse gently": "Nettoyez délicatement",
  "Massage the foam gently over face or body, avoiding the eyes, then rinse thoroughly.": "Massez délicatement la mousse sur le visage ou le corps, en évitant les yeux, puis rincez abondamment.",
  "Powdered dietary supplement, typically sold in a 30-sachet box; check the current package for serving size and nutrition details": "Complément alimentaire en poudre, généralement vendu en boîte de 30 sachets ; vérifiez la portion et les informations nutritionnelles sur l'emballage actuel",
  "The supplied notes list vitamin C, red orange complex, elderberry, fish collagen, glutathione, CoQ10 and tomato extract; verify the ingredients and amounts on the label": "Les notes fournies mentionnent de la vitamine C, un complexe d'orange sanguine, du sureau, du collagène de poisson, du glutathion, du CoQ10 et de l'extrait de tomate ; vérifiez les ingrédients et les quantités sur l'étiquette",
  "Sugar-free and other wellness claims should be confirmed on the current package; supplement claims are not medical advice": "Vérifiez les allégations sans sucre et autres bienfaits sur l'emballage actuel ; les allégations sur les compléments ne constituent pas un avis médical",
  "Mix as directed": "Mélangez selon les instructions",
  "Dissolve a sachet in water, following the serving size and directions on the current label.": "Dissolvez un sachet dans de l'eau en respectant la portion et le mode d'emploi de l'étiquette actuelle.",
  "Check for fish and other allergens. The supplied notes warn against use by pregnant individuals and children; confirm the current package warnings and consult a qualified healthcare professional if uncertain. Do not exceed the labeled serving.": "Vérifiez la présence de poisson et d'autres allergènes. Les notes fournies déconseillent l'usage pendant la grossesse et chez les enfants ; vérifiez les avertissements de l'emballage actuel et demandez conseil à un professionnel de santé en cas de doute. Ne dépassez pas la portion indiquée.",
  "Typically sold as an 80 g cleansing bar": "Généralement vendu en pain nettoyant de 80 g",
  "The supplied notes mention vitamin E, collagen and gold; check the current package for the exact ingredients": "Les notes fournies mentionnent de la vitamine E, du collagène et de l'or ; vérifiez les ingrédients exacts sur l'emballage actuel",
  "Hydrating, anti-aging and brightening statements are cosmetic claims and are not guaranteed": "Les allégations hydratantes, anti-âge et éclaircissantes sont cosmétiques et ne sont pas garanties",
  "The supplied notes describe a 500 ml lotion; smaller sizes may also be available": "Les notes fournies décrivent une lotion de 500 ml ; des formats plus petits peuvent également être disponibles",
  "Marketed with milk and yogurt proteins, collagen and UV protection; check the current bottle for the exact ingredients and any verified SPF": "Présentée avec des protéines de lait et de yaourt, du collagène et une protection UV ; vérifiez les ingrédients exacts et le SPF sur le flacon actuel",
  "For external use only. Patch test first, avoid contact with eyes and discontinue if irritation occurs. Do not rely on the lotion for sun protection unless its label confirms an SPF and explains how to use it.": "Usage externe uniquement. Faites un essai cutané, évitez les yeux et cessez en cas d'irritation. Ne comptez pas sur la lotion pour vous protéger du soleil, sauf si l'étiquette confirme un SPF et explique son utilisation.",
  "The supplied notes describe a 500 ml body lotion with tomato extract and milk protein": "Les notes fournies décrivent une lotion corporelle de 500 ml à l'extrait de tomate et aux protéines de lait",
  "Nano-white glutathione, kojic acid and UV protection are mentioned in product descriptions; check the current bottle for the exact formula and any SPF": "Le glutathion nano-white, l'acide kojique et une protection UV sont mentionnés ; vérifiez la formule exacte et le SPF éventuel sur le flacon actuel",
  "Moisturizing, tone-evening and brightening statements are cosmetic claims and are not guaranteed": "Les allégations hydratantes, d'uniformisation du teint et d'éclat sont cosmétiques et ne sont pas garanties",
  "Massage onto clean, dry or slightly damp skin, following the label directions.": "Massez sur une peau propre et sèche ou légèrement humide, en suivant les instructions de l'étiquette.",
  "The supplied notes describe a 500 ml lotion with carrot and peach extracts; verify size and formula on the bottle": "Les notes fournies décrivent une lotion de 500 ml aux extraits de carotte et de pêche ; vérifiez le format et la formule sur le flacon",
  "Glutathione, niacinamide and a vitamin complex are mentioned in product descriptions; check the current label for ingredients": "Le glutathion, la niacinamide et un complexe vitaminé sont mentionnés ; vérifiez les ingrédients sur l'étiquette actuelle",
  "Hydrating and brightening statements and fragrance descriptions are not guaranteed": "Les allégations hydratantes et éclaircissantes ainsi que les descriptions du parfum ne sont pas garanties",
  "Massage until absorbed": "Massez jusqu'à absorption",
  "Apply to clean skin and massage until absorbed, following the bottle directions.": "Appliquez sur une peau propre et massez jusqu'à absorption, en suivant les instructions du flacon.",
  "The supplied notes describe a 500 ml lotion with papaya and turmeric extracts; verify size and formula on the bottle": "Les notes fournies décrivent une lotion de 500 ml aux extraits de papaye et de curcuma ; vérifiez le format et la formule sur le flacon",
  "Arbutin and UV protection are mentioned in product descriptions; check the current label for the exact ingredients and any SPF": "L'arbutine et une protection UV sont mentionnées ; vérifiez les ingrédients exacts et le SPF éventuel sur l'étiquette actuelle",
  "Exfoliating, soothing and brightening statements are cosmetic claims and are not guaranteed": "Les allégations exfoliantes, apaisantes et éclaircissantes sont cosmétiques et ne sont pas garanties",
  "Apply over clean, slightly damp skin and massage until absorbed, following the bottle directions.": "Appliquez sur une peau propre et légèrement humide, puis massez jusqu'à absorption en suivant les instructions du flacon.",
  "10 ml travel-size gel for the face and neck": "Gel format voyage de 10 ml pour le visage et le cou",
  "The supplied notes mention ceramides, squalane, niacinamide, hyaluronic acid and panthenol; verify the full ingredient list on the current package": "Les notes fournies mentionnent des céramides, du squalane, de la niacinamide, de l'acide hyaluronique et du panthénol ; vérifiez la liste complète sur l'emballage actuel",
  "Lightweight texture and barrier-support descriptions are not a guarantee of results or suitability for every skin type": "La texture légère et le soutien de la barrière cutanée décrits ne garantissent ni résultat ni compatibilité avec tous les types de peau",
  "Smooth a pea-sized amount over clean face and neck skin, following the label directions.": "Appliquez une quantité de la taille d'un petit pois sur le visage et le cou propres, en suivant l'étiquette.",
  "Pre-measured capsules containing a topical oil blend described as vitamins A and E; check the current label for ingredients and capsule count": "Capsules pré-dosées contenant un mélange huileux topique décrit comme contenant des vitamines A et E ; vérifiez les ingrédients et le nombre de capsules sur l'étiquette actuelle",
  "Marketed to moisturize and soften the appearance of fine lines and blemishes; cosmetic results vary and are not guaranteed": "Présentées pour hydrater et atténuer l'apparence des ridules et des imperfections ; les résultats cosmétiques varient et ne sont pas garantis",
  "The supplied notes describe the product as fragrance-free; confirm this on the package": "Les notes fournies décrivent un produit sans parfum ; vérifiez cette information sur l'emballage",
  "Open one capsule": "Ouvrez une capsule",
  "Twist the tab to open one capsule and squeeze the contents onto clean fingertips.": "Tournez la languette pour ouvrir une capsule et pressez son contenu sur le bout des doigts propres.",
  "Smooth onto skin": "Appliquez sur la peau",
  "Gently apply over the face and neck, following the package directions.": "Appliquez délicatement sur le visage et le cou en suivant les instructions de l'emballage.",
  "The supplied notes describe a lychee-flavoured pack of 30 sachets": "Les notes fournies décrivent un paquet de 30 sachets à la saveur litchi",
  "Collagen, CoQ10 and glutathione are mentioned in product descriptions; check the current label for the full ingredients and amounts": "Le collagène, le CoQ10 et le glutathion sont mentionnés ; vérifiez les ingrédients et quantités sur l'étiquette actuelle",
  "Prepare a serving": "Préparez une portion",
  "Mix one sachet with water as directed on the current package; do not exceed the labeled serving.": "Mélangez un sachet avec de l'eau selon l'emballage actuel ; ne dépassez pas la portion indiquée.",
  "Check precautions": "Vérifiez les précautions",
  "Check the product label for allergens, serving frequency and warnings before use.": "Avant utilisation, vérifiez les allergènes, la fréquence de prise et les avertissements sur l'étiquette.",
  "The supplied notes describe a 30-sachet powdered drink mix": "Les notes fournies décrivent une boisson en poudre de 30 sachets",
  "Fish collagen peptides, vitamin C, glutathione and fruit extracts are mentioned; check the current package for the full ingredients, amounts, and serving size": "Des peptides de collagène de poisson, de la vitamine C, du glutathion et des extraits de fruits sont mentionnés ; vérifiez les ingrédients, quantités et portions sur l'emballage actuel",
  "Dissolve a sachet in water according to the current package directions.": "Dissolvez un sachet dans de l'eau selon les instructions de l'emballage actuel.",
  "Strawberry/mixed berry flavours and 15- or 30-sachet pack formats are described; confirm the available version and net weight on the package": "Les saveurs fraise/fruits rouges et les formats de 15 ou 30 sachets sont décrits ; vérifiez la version disponible et le poids net sur l'emballage",
  "The supplied notes list fish collagen peptides, astaxanthin, CoQ10, acerola, rosehip and hyaluronic acid; verify the current formula and amounts on the label": "Les notes fournies mentionnent des peptides de collagène de poisson, de l'astaxanthine, du CoQ10, de l'acérola, de l'églantier et de l'acide hyaluronique ; vérifiez la formule et les quantités sur l'étiquette actuelle",
  "Mix one sachet": "Mélangez un sachet",
  "Mix with water according to the serving size and directions on the current label.": "Mélangez avec de l'eau selon la portion et le mode d'emploi de l'étiquette actuelle.",
  "Check for fish and other allergens. The supplied notes advise against use by children and during pregnancy or breastfeeding; verify the current package warnings and consult a qualified healthcare professional if uncertain. Use only as directed.": "Vérifiez la présence de poisson et d'autres allergènes. Les notes fournies déconseillent l'usage chez les enfants et pendant la grossesse ou l'allaitement ; vérifiez les avertissements de l'emballage et demandez conseil à un professionnel de santé en cas de doute. Respectez le mode d'emploi.",
  "The supplied notes describe a 30-sachet set, typically split between Ceramide Collagen+ and Gluta Strawberry Plus; confirm the contents and sachet weights on the current package": "Les notes fournies décrivent un coffret de 30 sachets, généralement répartis entre Ceramide Collagen+ et Gluta Strawberry Plus ; vérifiez le contenu et le poids des sachets sur l'emballage actuel",
  "Hydration, elasticity and radiance statements are product claims and are not guaranteed": "Les promesses d'hydratation, d'élasticité et d'éclat sont des allégations produit non garanties",
  "Check each sachet's full ingredient list, allergens and serving instructions before use": "Avant utilisation, vérifiez la liste complète des ingrédients, les allergènes et les instructions de prise de chaque sachet",
  "Follow the sachet directions": "Suivez les instructions des sachets",
  "Mix and take each product only according to its own package instructions.": "Mélangez et prenez chaque produit uniquement selon les instructions de son emballage.",
  "Check for allergens and follow the package precautions. The supplied notes advise against use by children and recommend medical advice during pregnancy or breastfeeding. Consult a qualified healthcare professional if you take medication or manage a health condition.": "Vérifiez les allergènes et respectez les précautions de l'emballage. Les notes fournies déconseillent l'usage chez les enfants et recommandent un avis médical pendant la grossesse ou l'allaitement. Consultez un professionnel de santé si vous prenez des médicaments ou avez un problème de santé.",
};

const PRODUCT_FRENCH = {
  "Perfect Skin Lady Alpha Arbutin 3 Plus Serum": "Sérum Perfect Skin Lady Alpha Arbutin 3 Plus",
  "Facial serum · 40 ml · 8000 XOF": "Sérum visage · 40 ml · 8 000 XOF",
  "Abutine 3C3 Super Extra Whitening Lotion": "Lotion Abutine 3C3 Super Extra Whitening",
  "Body lotion · 500 ml · 9500 XOF": "Lotion corporelle · 500 ml · 9 500 XOF",
  "Perfect Skin Lady Snail White Gluta Milk Soap": "Savon Perfect Skin Lady Snail White Gluta Milk",
  "Cleansing bar · 65 g · 1250 XOF each": "Savon nettoyant · 65 g · 1 250 XOF l'unité",
  "Blood orange and vitamin C drink mix · 30 sachets · 20000 XOF": "Boisson en poudre à l'orange sanguine et vitamine C · 30 sachets · 20 000 XOF",
  "Jamsai Blood Orange C": "Jamsai Blood Orange C",
  "Perfect Skin Lady Vitamin E Gold Collagen Soap": "Savon Perfect Skin Lady Vitamin E Gold Collagen",
  "Cleansing bar · 80 g · 2000 XOF": "Savon nettoyant · 80 g · 2 000 XOF",
  "A Bonne Milk Power Lightening Lotion 3X Collagen": "Lotion A Bonne Milk Power Lightening 3X Collagen",
  "Milk and collagen body lotion · 500 ml · 10000 XOF": "Lotion corporelle au lait et au collagène · 500 ml · 10 000 XOF",
  "A Bonné Miracle Spa Milk UV White Lotion with Tomato Extract": "Lotion A Bonné Miracle Spa Milk UV White à l'extrait de tomate",
  "Tomato extract body lotion · 500 ml · 10000 XOF": "Lotion corporelle à l'extrait de tomate · 500 ml · 10 000 XOF",
  "A Bonne Perfume Whitening Lotion Carrot & Peach": "Lotion A Bonne Perfume Whitening Carotte et Pêche",
  "Carrot and peach body lotion · 500 ml · 12000 XOF": "Lotion corporelle carotte et pêche · 500 ml · 12 000 XOF",
  "A Bonne Perfume Whitening Lotion Papaya & Turmeric": "Lotion A Bonne Perfume Whitening Papaye et Curcuma",
  "Papaya and turmeric body lotion · 500 ml · 12000 XOF": "Lotion corporelle papaye et curcuma · 500 ml · 12 000 XOF",
  "Face sunscreen serum · SPF 50+ PA++++ · 2000 XOF": "Sérum solaire visage · SPF 50+ PA++++ · 2 000 XOF",
  "Clear Nose Moist Skin Barrier Moisturizing Gel": "Gel hydratant Clear Nose Moist Skin Barrier",
  "Facial moisturizing gel · 10 ml · 2000 XOF": "Gel hydratant visage · 10 ml · 2 000 XOF",
  "Pro Skin Maryln Vitamin A & E Capsules": "Capsules Pro Skin Maryln aux vitamines A et E",
  "Topical face capsules · 3000 XOF": "Capsules topiques pour le visage · 3 000 XOF",
  "Araya Collagen Mix Plus": "Araya Collagen Mix Plus",
  "Berry collagen drink mix · 22500 XOF": "Boisson au collagène et aux fruits rouges · 22 500 XOF",
  "Deva Collagen Plus Lychee": "Deva Collagen Plus Lychee",
  "Lychee collagen drink mix · 30 sachets · 18000 XOF": "Boisson au collagène saveur litchi · 30 sachets · 18 000 XOF",
  "DevaC Plus Collagen": "DevaC Plus Collagen",
  "Orange collagen drink mix · 30 sachets · 20000 XOF": "Boisson au collagène saveur orange · 30 sachets · 20 000 XOF",
  "ARAYA Duo Set Ceramide Collagen+ & Gluta Strawberry Plus": "Coffret ARAYA Duo Ceramide Collagen+ et Gluta Strawberry Plus",
  "Beauty drink mix set · 30 sachets · 22500 XOF": "Coffret de boissons beauté en poudre · 30 sachets · 22 500 XOF",
  "Precious Skin Thailand Gold 24K Whitening Anti-Melasma Facial Cream": "Crème visage Precious Skin Thailand Gold 24K Whitening Anti-Melasma",
  "Facial cream · 15 g · 5500 XOF": "Crème visage · 15 g · 5 500 XOF",
  "A travel-size facial cream made in Thailand; the supplied product information describes a 15 g package": "Une crème visage format voyage fabriquée en Thaïlande ; les informations fournies décrivent un format de 15 g",
  "Product descriptions mention niacinamide, alpha arbutin, tranexamic acid, kojic acid dipalmitate, snail secretion filtrate, glycerin, allantoin and Panax ginseng; verify the exact formula on the current label": "Les descriptions mentionnent de la niacinamide, de l'alpha-arbutine, de l'acide tranexamique, du dipalmitate d'acide kojique, du filtrat de sécrétion d'escargot, de la glycérine, de l'allantoïne et du Panax ginseng ; vérifiez la formule exacte sur l'étiquette actuelle",
  "Marketed for the appearance of dark spots and uneven tone; cosmetic effects vary, and this product is not a medical treatment for melasma": "Présentée pour l'apparence des taches et du teint irrégulier ; les effets cosmétiques varient et ce produit ne traite pas médicalement le mélasma",
  "Apply a thin layer": "Appliquez une fine couche",
  "Apply a small amount to clean, dry face and neck skin, following the package directions.": "Appliquez une petite quantité sur le visage et le cou propres et secs, en suivant les instructions de l'emballage.",
  "Plantnery Natural Glycolic Bright Body Toner": "Tonique corporel Plantnery Natural Glycolic Bright",
  "7% glycolic acid body toner · 250 ml · 5000 XOF": "Tonique corporel à 7 % d'acide glycolique · 250 ml · 5 000 XOF",
  "Leave-on body exfoliant described as containing 7% glycolic acid; verify the concentration and instructions on the current bottle": "Exfoliant corporel sans rinçage décrit comme contenant 7 % d'acide glycolique ; vérifiez la concentration et le mode d'emploi sur le flacon actuel",
  "The supplied product information mentions Japanese persimmon, fruit extracts, centella, chamomile, niacinamide, panthenol and sodium hyaluronate; check the current ingredient list": "Les informations fournies mentionnent du kaki japonais, des extraits de fruits, de la centella, de la camomille, de la niacinamide, du panthénol et de l'hyaluronate de sodium ; consultez la liste actuelle des ingrédients",
  "Marketed for rough texture, dark spots and body odor; cosmetic results vary and odor-control claims are not guaranteed": "Présenté pour la texture rugueuse, les taches et les odeurs corporelles ; les résultats cosmétiques varient et le contrôle des odeurs n'est pas garanti",
  "Apply to clean, dry skin": "Appliquez sur une peau propre et sèche",
  "Use a small amount on a cotton pad or clean hands and apply to the intended body area in the evening.": "Le soir, appliquez une petite quantité avec un coton ou les mains propres sur la zone souhaitée du corps.",
  "Start gradually": "Commencez progressivement",
  "Begin 2–3 times weekly and increase only if tolerated. Do not rinse; follow with moisturizer.": "Commencez 2 à 3 fois par semaine et augmentez uniquement si votre peau le tolère. Ne rincez pas ; appliquez ensuite une crème hydratante.",
  "For external use only. Patch test first; avoid eyes, mucous membranes, intimate areas, broken or irritated skin, and recently shaved or waxed skin. Glycolic acid may increase sun sensitivity: protect exposed areas with broad-spectrum sunscreen. Stop if irritation occurs and follow the current label.": "Usage externe uniquement. Faites un essai cutané ; évitez les yeux, les muqueuses, les zones intimes, la peau lésée ou irritée et les zones récemment rasées ou épilées. L'acide glycolique peut augmenter la sensibilité au soleil : protégez les zones exposées avec une protection solaire à large spectre. Cessez en cas d'irritation et suivez l'étiquette actuelle.",
  "Yanhee Premium Serum": "Sérum Yanhee Premium",
  "Facial serum · 30 ml · 4000 XOF": "Sérum visage · 30 ml · 4 000 XOF",
  "30 ml facial serum; check the package for its current ingredients and suitability": "Sérum visage de 30 ml ; consultez l'emballage pour connaître les ingrédients actuels et les précautions d'emploi",
  "The supplied notes mention licorice, niacinamide, aloe vera and tranexamic acid; verify these ingredients on the label": "Les notes fournies mentionnent de la réglisse, de la niacinamide, de l'aloe vera et de l'acide tranexamique ; vérifiez ces ingrédients sur l'étiquette",
  "Marketed for blemishes and the appearance of uneven tone; results vary, and the serum is not a treatment for acne or melasma": "Présenté pour les imperfections et l'apparence du teint irrégulier ; les résultats varient et ce sérum ne traite ni l'acné ni le mélasma",
  "Smooth a small amount over the face and neck in the morning or evening, following the label directions.": "Appliquez une petite quantité sur le visage et le cou matin ou soir, en suivant les instructions de l'étiquette.",
  "Use broad-spectrum sunscreen during the day, especially when addressing the appearance of dark spots.": "Utilisez une protection solaire à large spectre pendant la journée, notamment si vous ciblez l'apparence des taches.",
  "For external use only. Patch test before first use, avoid the eye area and discontinue if irritation occurs. Check the current package for directions, ingredients and suitability for sensitive skin.": "Usage externe uniquement. Faites un essai cutané avant la première utilisation, évitez le contour des yeux et cessez en cas d'irritation. Consultez l'emballage actuel pour connaître le mode d'emploi, les ingrédients et la compatibilité avec les peaux sensibles.",
  "Meyyong Seaweed Serum": "Sérum aux algues Meyyong",
  "30 ml facial serum; the brand is also spelled Meiyong in some listings": "Sérum visage de 30 ml ; le nom de la marque est parfois orthographié Meiyong",
  "The supplied notes describe a seaweed-based serum; check the current package for its full ingredient list and formula": "Les notes fournies décrivent un sérum à base d'algues ; consultez l'emballage actuel pour connaître sa formule et la liste complète des ingrédients",
  "Hydrating, soothing and tone-evening statements are cosmetic claims and are not guaranteed": "Les allégations hydratantes, apaisantes et d'uniformisation du teint sont cosmétiques et ne sont pas garanties",
  "Apply a few drops": "Appliquez quelques gouttes",
  "Apply 2–3 drops to clean, slightly damp face and neck skin, avoiding the eyes.": "Appliquez 2 à 3 gouttes sur le visage et le cou propres et légèrement humides, en évitant les yeux.",
  "Seal in moisture": "Préservez l'hydratation",
  "Follow with a moisturizer and use broad-spectrum SPF 30 or higher during the day.": "Appliquez ensuite une crème hydratante et utilisez le jour une protection à large spectre SPF 30 ou plus.",
  "For external use only. Check the current label for ingredients and directions. Patch test before first use, avoid the eyes and discontinue if irritation occurs.": "Usage externe uniquement. Consultez l'étiquette actuelle pour connaître les ingrédients et le mode d'emploi. Faites un essai cutané avant la première utilisation, évitez les yeux et cessez en cas d'irritation.",
  "30 sachets total, typically split into 15 Ceramide Collagen+ and 15 Gluta Strawberry Plus; the supplied notes describe 10 g sachets or mixed portions, so confirm the exact net weight and contents on the current package": "30 sachets au total, généralement répartis en 15 Ceramide Collagen+ et 15 Gluta Strawberry Plus ; les notes fournies indiquent des sachets de 10 g ou des portions mélangées, vérifiez donc le poids net exact et le contenu sur l'emballage actuel",
  "Ceramide Collagen+ is marketed for skin hydration and elasticity; Gluta Strawberry Plus is marketed for antioxidant support and radiance. These claims are not guaranteed": "Ceramide Collagen+ est présenté pour l'hydratation et l'élasticité de la peau ; Gluta Strawberry Plus est présenté pour le soutien antioxydant et l'éclat. Ces allégations ne sont pas garanties",
  "Traditional aromatic massage oil · 15 ml · 20000 XOF": "Huile de massage aromatique traditionnelle · 15 ml · 20 000 XOF",
  "Facial soap and hydrating serum set · 6500 XOF": "Coffret savon visage et sérum hydratant · 6 500 XOF",
  "Fruit extract body scrub · 10000 XOF": "Gommage corporel aux extraits de fruits · 10 000 XOF",
  "Face and body cleansing bar · 3000 XOF": "Savon nettoyant pour le visage et le corps · 3 000 XOF",
  "Facial cream · 15 g · 3500 XOF": "Crème visage · 15 g · 3 500 XOF",
  "Thai facial cleansing soap and mask · 2500 XOF": "Savon nettoyant et masque visage thaïlandais · 2 500 XOF",
  "Coffee exfoliating soap · 60 g · 3500 XOF": "Savon exfoliant au café · 60 g · 3 500 XOF",
  "Turmeric-infused Thai herbal soap · Mali 🇲🇱": "Savon thaïlandais aux plantes et au curcuma · Mali 🇲🇱",
  "Thai coffee and tamarind exfoliating scrub · Mali 🇲🇱": "Gommage thaïlandais au café et au tamarin · Mali 🇲🇱",
  "Caffeine-free herbal infusion · 8500 XOF": "Infusion aux plantes sans caféine · 8 500 XOF",
  "Rose-infused Thai herbal tea · 8500 XOF": "Tisane thaïlandaise à la rose · 8 500 XOF",
  "Intimate-care capsules · 8000 XOF": "Capsules de soin intime · 8 000 XOF",
  "Facial serum · 30–40 ml · 3500 XOF": "Sérum visage · 30–40 ml · 3 500 XOF",
  "Night cream · 20 g · 3500 XOF": "Crème de nuit · 20 g · 3 500 XOF",
  "Thai cleansing bar · 80 g · 3500 XOF": "Savon nettoyant thaïlandais · 80 g · 3 500 XOF",
  "Cooling herbal massage balm · 15 g or 50 g · 5500 XOF": "Baume de massage rafraîchissant aux plantes · 15 g ou 50 g · 5 500 XOF",
  "Mini Thai cleansing bar · 550 XOF": "Mini-savon nettoyant thaïlandais · 550 XOF",
  "Blood orange collagen and vitamin C drink mix · 20000 XOF": "Boisson en poudre à l'orange sanguine, au collagène et à la vitamine C · 20 000 XOF",
  "Tomato drink mix · 20000 XOF": "Boisson en poudre à la tomate · 20 000 XOF",
  "Sugar-free fiber drink mix · 30 sachets · 20000 XOF": "Boisson aux fibres sans sucre · 30 sachets · 20 000 XOF",
  "Hyaloe Hydropower Soap · 100 g and Hyaloe Hydropower Serum · 30 ml": "Savon Hyaloe Hydropower · 100 g et sérum Hyaloe Hydropower · 30 ml",
  "The soap is intended to cleanse while helping skin retain moisture; the serum contains hyaluronic acid": "Le savon nettoie la peau tout en aidant à préserver son hydratation ; le sérum contient de l'acide hyaluronique",
  "Check the current packaging for the complete ingredient list and product directions": "Consultez l'emballage actuel pour connaître la liste complète des ingrédients et le mode d'emploi",
  "Fine salt provides physical exfoliation to help remove surface buildup and smooth rough-feeling skin": "Les grains fins de sel exfolient la peau afin d'éliminer les impuretés en surface et d'adoucir les zones rugueuses",
  "The supplied notes list cantaloupe, carrot, Mahad, mixed fruit extracts, vitamins C and E, and AHA; check the current label": "Les notes fournies mentionnent du cantaloup, de la carotte, du Mahad, des extraits de fruits, des vitamines C et E et des AHA ; consultez l'étiquette actuelle",
  "Marketed to leave skin feeling refreshed and soft; avoid irritated or freshly shaved skin": "Présenté comme laissant la peau fraîche et douce ; évitez les zones irritées ou fraîchement rasées",
  "The supplied notes describe a face and body cleansing bar with 24K gold, collagen, niacinamide, alpha arbutin, vitamin E and glycerin": "Les notes fournies décrivent un savon pour le visage et le corps contenant de l'or 24 carats, du collagène, de la niacinamide, de l'alpha-arbutine, de la vitamine E et de la glycérine",
  "Marketed to cleanse while helping skin feel soft and hydrated; cosmetic claims have not been independently verified": "Présenté comme nettoyant la peau tout en la laissant douce et hydratée ; ces allégations cosmétiques n'ont pas été vérifiées de manière indépendante",
  "Check the current package for ingredients, directions and suitability": "Consultez l'emballage actuel pour connaître les ingrédients, le mode d'emploi et les précautions",
  "50 ml facial serum, according to the supplied product notes": "Sérum visage de 50 ml, selon les informations fournies",
  "The supplied notes list niacinamide, vitamin C, 24K gold, collagen and Galactomyces ferment": "Les notes fournies mentionnent de la niacinamide, de la vitamine C, de l'or 24 carats, du collagène et du ferment Galactomyces",
  "Marketed to support a brighter-looking, more even complexion; results vary and claims are not independently verified": "Présenté comme favorisant un teint d'apparence plus lumineux et uniforme ; les résultats varient et ces allégations n'ont pas été vérifiées de manière indépendante",
  "Cleanse and dry": "Nettoyez et séchez",
  "Apply to clean, dry skin.": "Appliquez sur une peau propre et sèche.",
  "Apply a small amount": "Appliquez une petite quantité",
  "Smooth 2 to 3 drops over the face and neck, avoiding the eyes.": "Étalez 2 à 3 gouttes sur le visage et le cou en évitant les yeux.",
  "Follow with moisturizer": "Appliquez ensuite une crème hydratante",
  "Allow the serum to absorb, then use a moisturizer. Check the package for directions and frequency.": "Laissez le sérum pénétrer, puis appliquez une crème hydratante. Consultez l'emballage pour connaître le mode d'emploi et la fréquence d'utilisation.",
  "For external use only. Check the current package for ingredients and directions. Patch test before first use, avoid contact with eyes, and discontinue if irritation occurs. Use sunscreen during the day when using products marketed for dark spots.": "Usage externe uniquement. Consultez l'emballage actuel pour connaître les ingrédients et le mode d'emploi. Faites un essai sur une petite zone avant la première utilisation, évitez tout contact avec les yeux et cessez l'utilisation en cas d'irritation. Utilisez une protection solaire le jour avec les produits présentés pour les taches pigmentaires.",
  "A travel-size facial cream made in Thailand": "Une crème visage format voyage fabriquée en Thaïlande",
  "The supplied notes list 24K gold, kojic acid dipalmitate, niacinamide, alpha arbutin, snail secretion filtrate and Panax ginseng root extract; check the current label": "Les notes fournies mentionnent de l'or 24 carats, du dipalmitate d'acide kojique, de la niacinamide, de l'alpha-arbutine, du filtrat de sécrétion d'escargot et de l'extrait de racine de Panax ginseng ; consultez l'étiquette actuelle",
  "Marketed for the appearance of dark spots and uneven tone; this cosmetic is not a treatment for melasma": "Présenté pour l'apparence des taches pigmentaires et du teint irrégulier ; ce produit cosmétique ne traite pas le mélasma",
  "Apply to clean skin": "Appliquez sur une peau propre",
  "Use a small amount on clean, dry skin, following the package directions.": "Appliquez une petite quantité sur une peau propre et sèche, conformément aux instructions de l'emballage.",
  "Use sun protection": "Protégez votre peau du soleil",
  "If used in the daytime, apply broad-spectrum sunscreen as the final skincare step.": "En journée, terminez votre routine par une protection solaire à large spectre.",
  "For external use only. Patch test before first use and discontinue if irritation occurs. Follow package directions and avoid combining with strong exfoliants unless advised by a qualified professional. Broad-spectrum SPF 30+ and consistent sun protection are important for managing the appearance of pigmentation.": "Usage externe uniquement. Faites un essai sur une petite zone avant la première utilisation et cessez en cas d'irritation. Suivez les instructions de l'emballage et évitez d'associer ce produit à des exfoliants puissants, sauf avis d'un professionnel qualifié. Une protection solaire régulière à large spectre, SPF 30 ou plus, est importante pour limiter l'apparence des taches pigmentaires.",
  "Typically listed as 50 g, though sizes may vary by version": "Généralement annoncé à 50 g, mais le poids peut varier selon la version",
  "The supplied notes describe a dense, mousse-like lather made with a foaming net": "Les notes fournies décrivent une mousse dense et onctueuse obtenue à l'aide d'un filet moussant",
  "Marketed for cleansing and the appearance of blemishes and uneven tone; claims are not independently verified": "Présenté pour nettoyer la peau et améliorer l'apparence des imperfections et du teint irrégulier ; ces allégations n'ont pas été vérifiées de manière indépendante",
  "Create a soft lather": "Faites mousser",
  "Lather the soap in your hands or with its foaming net.": "Faites mousser le savon entre vos mains ou à l'aide de son filet moussant.",
  "Cleanse gently": "Nettoyez délicatement",
  "Apply the foam gently to the face, avoiding the eyes.": "Appliquez délicatement la mousse sur le visage en évitant les yeux.",
  Rinse: "Rincez",
  "Rinse thoroughly. If using as a mask, follow the package directions and do not leave it on longer than instructed.": "Rincez abondamment. Pour une utilisation en masque, suivez les instructions de l'emballage et ne dépassez pas le temps de pose indiqué.",
  "For external use only. Avoid contact with eyes and discontinue use if irritation occurs. Follow the directions on the current package; do not use as a mask unless the label instructs you to do so.": "Usage externe uniquement. Évitez tout contact avec les yeux et cessez l'utilisation en cas d'irritation. Suivez les instructions de l'emballage actuel ; n'utilisez pas le produit en masque sauf si l'étiquette le précise.",
  "Typically sold as a 60 g bar": "Généralement vendu en pain de 60 g",
  "The supplied notes list roasted coffee, tamarind, honey, coconut oil and turmeric; confirm the current ingredients on the label": "Les notes fournies mentionnent du café torréfié, du tamarin, du miel, de l'huile de coco et du curcuma ; vérifiez les ingrédients actuels sur l'étiquette",
  "A 2-in-1 cleansing and exfoliating bar marketed to smooth rough-feeling skin and improve the appearance of dullness": "Un savon exfoliant 2-en-1 présenté comme lissant les zones rugueuses et améliorant l'apparence du teint terne",
  "Wet skin and bar": "Mouillez la peau et le savon",
  "Use the bar on wet skin or work it into a lather in your hands.": "Passez le savon sur la peau mouillée ou faites-le mousser entre vos mains.",
  "Apply in light circular motions. Avoid scrubbing hard, especially on sensitive areas.": "Appliquez par légers mouvements circulaires. Ne frottez pas fort, surtout sur les zones sensibles.",
  "Rinse well": "Rincez abondamment",
  "Rinse thoroughly and follow with moisturizer if needed.": "Rincez abondamment et appliquez une crème hydratante si nécessaire.",
  "For external use only. Avoid broken or irritated skin and contact with eyes. Patch test before first use and discontinue if irritation occurs.": "Usage externe uniquement. Évitez les zones lésées ou irritées et tout contact avec les yeux. Faites un essai sur une petite zone avant la première utilisation et cessez en cas d'irritation.",
  "A Thai herbal cleansing bar featuring turmeric; Pontina formulas may also include botanicals such as ginseng, depending on the variant": "Un savon nettoyant thaïlandais aux plantes et au curcuma ; selon la version, les formules Pontina peuvent aussi contenir des plantes comme le ginseng",
  "Marketed to cleanse deeply while helping skin feel smoother and nourished": "Présenté comme nettoyant la peau en profondeur tout en la laissant plus lisse et nourrie",
  "Turmeric body-care claims include helping pores feel clear and improving the appearance of dullness, dark marks and uneven tone; individual results vary": "Le curcuma est présenté comme aidant à purifier les pores et à améliorer l'apparence du teint terne, des taches foncées et du teint irrégulier ; les résultats varient selon les personnes",
  "Check the current package for the exact ingredients and claims for this variant": "Consultez l'emballage actuel pour connaître les ingrédients et les allégations propres à cette version",
  "For external use only. Check the current package for directions and precautions, and patch test before first use. Avoid contact with eyes and discontinue use if irritation occurs. Skin brightening, acne and other benefit claims have not been independently verified and are not medical advice.": "Usage externe uniquement. Consultez l'emballage actuel pour le mode d'emploi et les précautions, et faites un essai sur une petite zone avant la première utilisation. Évitez tout contact avec les yeux et cessez en cas d'irritation. Les allégations concernant l'éclat de la peau, l'acné et les autres bienfaits n'ont pas été vérifiées de manière indépendante et ne constituent pas un avis médical.",
  "Coffee and tamarind scrub formulated to exfoliate and smooth rough-feeling skin": "Gommage au café et au tamarin conçu pour exfolier et lisser les zones rugueuses",
  "Herbal ingredients can vary by bar or package variant; check the current label": "Les ingrédients végétaux peuvent varier selon le savon ou la version ; consultez l'étiquette actuelle",
  "Often used on rough-feeling areas such as elbows, knees and joints": "Souvent utilisé sur les zones rugueuses comme les coudes, les genoux et les articulations",
  "Marketed to help skin look brighter and smoother; results vary and are not guaranteed": "Présenté comme aidant à rendre la peau plus lumineuse et plus lisse ; les résultats varient et ne sont pas garantis",
  "Wet your skin": "Mouillez votre peau",
  "Use the bar on wet skin in the shower or bath.": "Passez le savon sur la peau mouillée sous la douche ou dans le bain.",
  "Glide the bar over the skin or lather it with a loofah. Avoid scrubbing hard.": "Passez le savon sur la peau ou faites-le mousser avec un gant. Évitez de frotter fort.",
  "Rinse thoroughly": "Rincez abondamment",
  "The supplied directions suggest leaving the lather on for 3 to 5 minutes, then rinsing well. Follow the directions on your package.": "Les instructions fournies suggèrent de laisser agir la mousse pendant 3 à 5 minutes, puis de bien rincer. Suivez les indications figurant sur votre emballage.",
  "For external use only. Avoid the face, broken or irritated skin, and contact with eyes. Patch test before first use and discontinue if irritation occurs. Follow the directions and precautions on the current package.": "Usage externe uniquement. Évitez le visage, les zones lésées ou irritées et tout contact avec les yeux. Faites un essai sur une petite zone avant la première utilisation et cessez en cas d'irritation. Suivez le mode d'emploi et les précautions de l'emballage actuel.",
  "A caffeine-free infusion combining moringa leaves and ginger": "Une infusion sans caféine qui associe des feuilles de moringa et du gingembre",
  "Ginger is traditionally enjoyed in warm drinks; wellness effects are not guaranteed": "Le gingembre est traditionnellement consommé en boisson chaude ; aucun effet sur le bien-être n'est garanti",
  "Brew one tea bag or the package-recommended amount in hot water; steep for the time on the label": "Faites infuser un sachet ou la quantité indiquée sur l'emballage dans de l'eau chaude, en respectant le temps d'infusion indiqué",
  "Add hot water": "Ajoutez de l'eau chaude",
  "Place one tea bag in a cup and pour over hot water.": "Placez un sachet de thé dans une tasse et versez de l'eau chaude.",
  Steep: "Laissez infuser",
  "Cover and steep for 3 to 5 minutes, or follow the package directions.": "Couvrez et laissez infuser 3 à 5 minutes, ou suivez les instructions de l'emballage.",
  Enjoy: "Dégustez",
  "Drink warm or chilled. Honey or lemon may be added if desired.": "À boire chaud ou froid. Ajoutez du miel ou du citron selon vos préférences.",
  "Check the current package for ingredients and directions. The supplied notes advise avoiding moringa tea during pregnancy and consulting a healthcare professional if you take blood-pressure or heart medication. This tea is not a treatment for a medical condition.": "Consultez l'emballage actuel pour connaître les ingrédients et le mode d'emploi. Les notes fournies déconseillent le thé au moringa pendant la grossesse et recommandent de consulter un professionnel de santé en cas de prise de médicaments pour la tension ou le cœur. Ce thé ne traite aucune maladie.",
  "The supplied notes list white kwao krua, sappan wood, Curcuma comosa, safflower, repair grass, shatavari, stevia, chamomile and roselle": "Les notes fournies mentionnent du kwao krua blanc, du bois de sappan, du Curcuma comosa, du carthame, de l'herbe repair, du shatavari, de la stévia, de la camomille et de la roselle",
  "Marketed for women's wellness; claims about hormones, menstruation, sleep or other health effects have not been independently verified": "Présenté pour le bien-être féminin ; les allégations concernant les hormones, les règles, le sommeil ou d'autres effets sur la santé n'ont pas été vérifiées de manière indépendante",
  "Steep one tea bag": "Faites infuser un sachet",
  "Add one tea bag to 100–250 ml of hot water, or follow the package directions.": "Ajoutez un sachet à 100–250 ml d'eau chaude, ou suivez les instructions de l'emballage.",
  "Wait and enjoy": "Laissez infuser puis dégustez",
  "Steep for 2 to 3 minutes, then drink warm or add ice.": "Laissez infuser 2 à 3 minutes, puis dégustez chaud ou ajoutez des glaçons.",
  "Check the current ingredient list and directions. If pregnant, breastfeeding, taking medication, or managing a health condition, consult a qualified healthcare professional before using herbal supplements.": "Consultez la liste actuelle des ingrédients et le mode d'emploi. En cas de grossesse, d'allaitement, de prise de médicaments ou de problème de santé, demandez conseil à un professionnel de santé qualifié avant d'utiliser des compléments à base de plantes.",
  "The supplied notes describe fast-dissolving intimate-care capsules with plant extracts and a strawberry fragrance": "Les notes fournies décrivent des capsules de soin intime à dissolution rapide, aux extraits de plantes et au parfum de fraise",
  "Odor, discharge, tightening and hydration benefits are marketing claims, not verified medical effects": "Les effets annoncés sur les odeurs, les pertes, le raffermissement et l'hydratation sont des arguments commerciaux, et non des effets médicaux vérifiés",
  "Confirm the product type and ingredients on the package before use": "Avant utilisation, vérifiez la nature du produit et ses ingrédients sur l'emballage",
  "Do not insert or apply this product unless the package clearly identifies the route and provides appropriate directions. Vaginal discharge or odor can have medical causes; consult a qualified healthcare professional rather than relying on a cosmetic product. Stop use and seek advice if irritation occurs.": "N'insérez pas et n'appliquez pas ce produit si l'emballage ne précise pas clairement le mode d'utilisation. Les pertes vaginales ou les odeurs peuvent avoir une cause médicale ; consultez un professionnel de santé qualifié plutôt que de compter sur un produit cosmétique. En cas d'irritation, cessez l'utilisation et demandez conseil.",
  "The supplied notes describe 20 single-use capsules per box, typically 250 mg each": "Les notes fournies indiquent généralement 20 capsules à usage unique par boîte, de 250 mg chacune",
  "Alpha arbutin, rice ferment, barley grass and allantoin/comfrey extracts are listed in the supplied notes; verify the current label": "Les notes fournies mentionnent de l'alpha-arbutine, du ferment de riz, de l'herbe d'orge et des extraits d'allantoïne/consoude ; vérifiez l'étiquette actuelle",
  "Marketed for the appearance of dark spots and uneven tone; cosmetic effects vary and are not guaranteed": "Présenté pour l'apparence des taches pigmentaires et du teint irrégulier ; les effets cosmétiques varient et ne sont pas garantis",
  "Check the label": "Consultez l'étiquette",
  "Follow the package directions and confirm the product is intended to be mixed into another cosmetic.": "Suivez les instructions de l'emballage et vérifiez que le produit peut être mélangé à un autre cosmétique.",
  "Mix before use": "Mélangez avant utilisation",
  "If the label allows, mix one capsule into a small amount of lotion, cream or serum immediately before application.": "Si l'étiquette l'autorise, mélangez une capsule à une petite quantité de lait, de crème ou de sérum juste avant l'application.",
  "Patch test": "Faites un essai cutané",
  "Test on a small area first and discontinue if irritation occurs.": "Testez d'abord sur une petite zone et cessez en cas d'irritation.",
  "For topical cosmetic use only if the product label confirms this use. Do not swallow or apply the powder directly unless the package instructs you to. Avoid eyes and irritated skin, and patch test before first use.": "À utiliser comme cosmétique topique uniquement si l'étiquette le confirme. N'avalez pas le produit et n'appliquez pas la poudre directement, sauf indication de l'emballage. Évitez les yeux et les zones irritées, et faites un essai cutané avant la première utilisation.",
  "Commonly listed in 30 ml or 40 ml sizes; check the package for the exact volume": "Généralement proposé en 30 ou 40 ml ; consultez l'emballage pour connaître le volume exact",
  "The supplied notes list glycerin, vitamins C and E, niacinamide, aloe vera, collagen and plant extracts; formulations may vary": "Les notes fournies mentionnent de la glycérine, des vitamines C et E, de la niacinamide, de l'aloe vera, du collagène et des extraits végétaux ; la formule peut varier",
  "Marketed for the appearance of dark spots and uneven tone; it is a cosmetic product, not a medical treatment for melasma": "Présenté pour l'apparence des taches pigmentaires et du teint irrégulier ; il s'agit d'un cosmétique, et non d'un traitement médical contre le mélasma",
  Cleanse: "Nettoyez",
  "Apply serum": "Appliquez le sérum",
  "Smooth a small amount over the face and neck, following the package directions.": "Appliquez une petite quantité sur le visage et le cou en suivant les instructions de l'emballage.",
  "Moisturize and protect": "Hydratez et protégez",
  "Follow with moisturizer. Use broad-spectrum sunscreen during the day.": "Appliquez ensuite une crème hydratante. Utilisez une protection solaire à large spectre pendant la journée.",
  "For external use only. Check the current label for ingredients and directions. Patch test first, avoid the eye area and discontinue if irritation occurs. Use sun protection during the day; seek professional advice for persistent or changing pigmentation.": "Usage externe uniquement. Consultez l'étiquette actuelle pour connaître les ingrédients et le mode d'emploi. Faites un essai cutané, évitez le contour des yeux et cessez en cas d'irritation. Protégez votre peau du soleil pendant la journée et consultez un professionnel si les taches persistent ou évoluent.",
  "A night cream marketed for the appearance of freckles, dark spots and uneven tone": "Une crème de nuit présentée pour l'apparence des taches de rousseur, des taches foncées et du teint irrégulier",
  "The supplied notes mention niacinamide, kojic acid, alpha arbutin and vitamin C as common brightening ingredients; check this product's current ingredient label": "Les notes fournies mentionnent la niacinamide, l'acide kojique, l'alpha-arbutine et la vitamine C parmi les ingrédients éclaircissants courants ; vérifiez la liste actuelle des ingrédients de ce produit",
  "A daytime pigmentation-care routine should include broad-spectrum SPF 30+; a tinted sunscreen may also help protect against visible light": "Une routine de jour contre les taches pigmentaires devrait inclure une protection solaire à large spectre SPF 30 ou plus ; une crème solaire teintée peut aussi aider à protéger de la lumière visible",
  "Use with daytime sun protection; no cosmetic cream can guarantee treatment or removal of melasma": "À utiliser avec une protection solaire le jour ; aucune crème cosmétique ne peut garantir le traitement ou la disparition du mélasma",
  "Apply at night": "Appliquez le soir",
  "Apply a small amount to clean, dry skin, following the directions on the package.": "Appliquez une petite quantité sur une peau propre et sèche, en suivant les instructions de l'emballage.",
  "Layer carefully": "Superposez les soins avec précaution",
  "If tolerated, apply after a treatment serum and follow with moisturizer.": "Si votre peau le tolère, appliquez après un sérum de soin puis utilisez une crème hydratante.",
  "Protect during the day": "Protégez votre peau le jour",
  "Use broad-spectrum SPF 30+ each morning and reapply as directed.": "Chaque matin, utilisez une protection à large spectre SPF 30 ou plus et renouvelez l'application selon les indications.",
  "For external use only. Check the exact ingredients and directions on the current package; formulations may differ. Patch test first and avoid combining with strong exfoliants or retinoids unless advised by a qualified professional. Stop if irritation occurs. Daily sun protection is important for pigmentation concerns.": "Usage externe uniquement. Vérifiez les ingrédients et le mode d'emploi exacts sur l'emballage actuel ; les formules peuvent varier. Faites un essai cutané et évitez d'associer ce produit à des exfoliants puissants ou à des rétinoïdes sauf avis d'un professionnel qualifié. Cessez en cas d'irritation. Une protection solaire quotidienne est importante en cas de taches pigmentaires.",
  "An 80 g cleansing bar marketed for dark spots, freckles and uneven-looking tone": "Un savon nettoyant de 80 g présenté pour les taches foncées, les taches de rousseur et le teint irrégulier",
  "Designed to cleanse and exfoliate surface buildup; claims about fading pigmentation or stimulating collagen are not independently verified": "Conçu pour nettoyer et exfolier les impuretés en surface ; les allégations sur l'atténuation de la pigmentation ou la stimulation du collagène n'ont pas été vérifiées de manière indépendante",
  "Check the current package for the ingredient list and directions": "Consultez l'emballage actuel pour connaître la liste des ingrédients et le mode d'emploi",
  "Wet and lather": "Mouillez et faites mousser",
  "Lather the bar in your hands with water.": "Faites mousser le savon entre vos mains avec de l'eau.",
  "Apply the lather to face or body without scrubbing hard; avoid the eye area.": "Appliquez la mousse sur le visage ou le corps sans frotter fort ; évitez le contour des yeux.",
  "Rinse well and follow with moisturizer. Use only as directed on the package.": "Rincez abondamment puis appliquez une crème hydratante. Utilisez uniquement selon les instructions de l'emballage.",
  "For external use only. Avoid the eye area, broken skin and irritated areas. Patch test before first use and discontinue if irritation occurs. Seek professional advice for persistent pigmentation concerns.": "Usage externe uniquement. Évitez le contour des yeux, les plaies et les zones irritées. Faites un essai cutané avant la première utilisation et cessez en cas d'irritation. Consultez un professionnel pour toute préoccupation persistante concernant la pigmentation.",
  "A traditional Thai green balm, commonly offered in 15 g and 50 g jars; confirm the size available": "Un baume vert traditionnel thaïlandais, généralement proposé en pots de 15 g ou 50 g ; confirmez le format disponible",
  "The supplied notes list a petrolatum/paraffin base, menthol, camphor, mint, eucalyptus and peppermint oils; check the current label": "Les notes fournies mentionnent une base de vaseline/paraffine, du menthol, du camphre, de la menthe, de l'eucalyptus et de l'huile de menthe poivrée ; consultez l'étiquette actuelle",
  "Marketed to provide a cooling sensation when massaged onto the skin; relief claims are not independently verified": "Présenté comme procurant une sensation de fraîcheur lors du massage sur la peau ; les allégations de soulagement n'ont pas été vérifiées de manière indépendante",
  "Use a small amount on the desired area of intact skin.": "Appliquez une petite quantité sur la zone souhaitée, sur une peau intacte.",
  "Massage into the skin, following the package directions.": "Massez sur la peau en suivant les instructions de l'emballage.",
  "Wash hands": "Lavez-vous les mains",
  "Wash hands after use and avoid touching the eyes or face.": "Lavez-vous les mains après utilisation et évitez de toucher les yeux ou le visage.",
  "For external use only. Do not swallow or apply inside the nose, near eyes, to mucous membranes, broken skin or under a tight covering. Keep away from children and heat. Stop if irritation occurs and follow all package warnings.": "Usage externe uniquement. Ne pas avaler ni appliquer dans le nez, près des yeux, sur les muqueuses ou une peau lésée, ni sous un bandage serré. Tenir hors de portée des enfants et à l'écart de la chaleur. Cesser en cas d'irritation et respecter tous les avertissements de l'emballage.",
  "Small individually wrapped bars, commonly around 25–35 g; exact weight and variants may differ": "Petits savons emballés individuellement, généralement d'environ 25–35 g ; le poids et les variantes peuvent différer",
  "The supplied notes mention fruit, vitamin, charcoal and other variants; check the available bar's label": "Les notes fournies mentionnent des variantes aux fruits, aux vitamines, au charbon et autres ; consultez l'étiquette du savon disponible",
  "Marketed for cleansing and specific skin concerns depending on variant; benefits are not guaranteed": "Présenté pour le nettoyage et certains besoins de la peau selon la variante ; les bienfaits ne sont pas garantis",
  "Wet the bar and create a lather in your hands.": "Mouillez le savon et faites-le mousser entre vos mains.",
  "Apply the lather to wet skin and avoid the eyes.": "Appliquez la mousse sur la peau mouillée en évitant les yeux.",
  "Rinse thoroughly and allow the bar to dry between uses.": "Rincez abondamment et laissez sécher le savon entre deux utilisations.",
  "For external use only. Check the specific variant's ingredients and directions. Avoid contact with eyes and discontinue use if irritation occurs.": "Usage externe uniquement. Consultez les ingrédients et le mode d'emploi de la variante concernée. Évitez tout contact avec les yeux et cessez l'utilisation en cas d'irritation.",
  "The supplied notes describe a blood-orange drink mix with collagen and 1000 mg vitamin C; confirm the amount on the current label": "Les notes fournies décrivent une boisson en poudre à l'orange sanguine contenant du collagène et 1 000 mg de vitamine C ; vérifiez la quantité sur l'étiquette actuelle",
  "Marketed for antioxidant and beauty support; these supplement claims have not been independently verified and it is not a treatment for skin or joint conditions": "Présenté pour ses effets antioxydants et beauté ; ces allégations sur le complément n'ont pas été vérifiées de manière indépendante et il ne traite pas les problèmes de peau ou d'articulations",
  "Sugar content and ingredients can vary by version; check the package": "La teneur en sucre et les ingrédients peuvent varier selon la version ; consultez l'emballage",
  "Mix one serving": "Préparez une dose",
  "Dissolve one packet or the package-recommended serving in cold or room-temperature water.": "Dissolvez un sachet ou la dose recommandée sur l'emballage dans de l'eau froide ou à température ambiante.",
  "Stir and drink": "Mélangez et buvez",
  "Stir or shake until dissolved and use as directed on the label.": "Remuez ou secouez jusqu'à dissolution et suivez le mode d'emploi de l'étiquette.",
  "Use only as directed on the package. Check for allergens, including collagen source, and consult a qualified healthcare professional before use if pregnant, breastfeeding, taking medication or managing a health condition. Supplements do not replace a balanced diet or medical care.": "Utilisez uniquement selon les instructions de l'emballage. Vérifiez les allergènes, notamment l'origine du collagène, et consultez un professionnel de santé qualifié avant utilisation en cas de grossesse, d'allaitement, de prise de médicaments ou de problème de santé. Les compléments ne remplacent ni une alimentation équilibrée ni des soins médicaux.",
  "The supplied notes list 250 mg L-glutathione, sakura flower extract, fish collagen peptides, hyaluronic acid and vitamin C; verify all amounts and ingredients on the current label": "Les notes fournies mentionnent 250 mg de L-glutathion, de l'extrait de fleur de sakura, des peptides de collagène de poisson, de l'acide hyaluronique et de la vitamine C ; vérifiez les quantités et ingrédients sur l'étiquette actuelle",
  "Marketed as a sugar-free beauty drink for skin radiance and hydration; results are not guaranteed and claims are not medical advice": "Présenté comme une boisson beauté sans sucre pour l'éclat et l'hydratation de la peau ; les résultats ne sont pas garantis et ces allégations ne constituent pas un avis médical",
  "Prepare a glass": "Préparez un verre",
  "Add 100–120 ml of cold or room-temperature water, or follow the package directions.": "Ajoutez 100 à 120 ml d'eau froide ou à température ambiante, ou suivez les instructions de l'emballage.",
  "Mix one sachet": "Mélangez un sachet",
  "Pour in one sachet and stir for 10 to 15 seconds until dissolved.": "Versez un sachet et remuez pendant 10 à 15 secondes jusqu'à dissolution.",
  "Drink promptly": "Buvez sans attendre",
  "Consume after mixing and use no more often than directed on the label.": "Buvez après préparation et ne dépassez pas la fréquence indiquée sur l'étiquette.",
  "Use only as directed on the package. Check for fish or other allergens and consult a qualified healthcare professional before use if pregnant, breastfeeding, taking medication or managing a health condition. Supplement and skin-brightening claims have not been independently verified.": "Utilisez uniquement selon les instructions de l'emballage. Vérifiez la présence de poisson ou d'autres allergènes et consultez un professionnel de santé qualifié avant utilisation en cas de grossesse, d'allaitement, de prise de médicaments ou de problème de santé. Les allégations sur le complément et l'éclat de la peau n'ont pas été vérifiées de manière indépendante.",
  "The supplied notes list L-glutathione, tomato extract/lycopene, acerola cherry and vitamin C; confirm the ingredient amounts and sugar content on the current label": "Les notes fournies mentionnent du L-glutathion, de l'extrait de tomate/lycopène, de l'acérola et de la vitamine C ; vérifiez les quantités et la teneur en sucre sur l'étiquette actuelle",
  "The supplied notes describe a zero-added-sugar formula; check the current package to confirm": "Les notes fournies décrivent une formule sans sucres ajoutés ; vérifiez cette information sur l'emballage actuel",
  "Marketed for antioxidant support and skin radiance; claims about acne, inflammation, melasma or UV protection have not been independently verified": "Présenté pour ses effets antioxydants et l'éclat de la peau ; les allégations concernant l'acné, l'inflammation, le mélasma ou la protection contre les UV n'ont pas été vérifiées de manière indépendante",
  "A drink supplement does not replace sunscreen or treatment recommended by a healthcare professional": "Une boisson complément alimentaire ne remplace ni une protection solaire ni un traitement recommandé par un professionnel de santé",
  "Add one sachet": "Ajoutez un sachet",
  "Empty one sachet into a glass.": "Versez un sachet dans un verre.",
  "Add a drink": "Ajoutez un liquide",
  "Add water or another beverage as directed on the package.": "Ajoutez de l'eau ou une autre boisson selon les instructions de l'emballage.",
  "Stir and consume": "Mélangez et consommez",
  "Stir until dissolved and use only as directed on the label.": "Remuez jusqu'à dissolution et respectez le mode d'emploi de l'étiquette.",
  "Use only as directed on the package. Check ingredients and consult a qualified healthcare professional before use if pregnant, breastfeeding, taking medication or managing a health condition. Do not rely on supplements for UV protection; use appropriate sunscreen and protective clothing.": "Utilisez uniquement selon les instructions de l'emballage. Vérifiez les ingrédients et consultez un professionnel de santé qualifié avant utilisation en cas de grossesse, d'allaitement, de prise de médicaments ou de problème de santé. Ne comptez pas sur les compléments pour vous protéger des UV ; utilisez une protection solaire adaptée et des vêtements couvrants.",
  "Sugar-free fiber drink mix · 30 sachets · 20000 XOF": "Boisson aux fibres sans sucre · 30 sachets · 20 000 XOF",
  "Powdered drink mix in a 30-sachet box; flavors listed are Green Apple and 7-Berry (Mixed Berry)": "Boisson en poudre en boîte de 30 sachets ; saveurs indiquées : pomme verte et 7 fruits rouges",
  "The supplied notes list dietary fiber such as psyllium and chicory-root fiber, prebiotics (FOS/inulin), Bacillus coagulans, green tea, cactus and white kidney bean; formulations may vary": "Les notes fournies mentionnent des fibres alimentaires comme le psyllium et les fibres de racine de chicorée, des prébiotiques (FOS/inuline), Bacillus coagulans, du thé vert, du cactus et du haricot blanc ; la formule peut varier",
  "Marketed to support digestion and satiety; constipation and weight-management claims have not been independently verified": "Présenté comme favorisant la digestion et la satiété ; les allégations concernant la constipation et la gestion du poids n'ont pas été vérifiées de manière indépendante",
  "Mix one sachet": "Mélangez un sachet",
  "Stir one sachet into water, following the mixing instructions on the label.": "Mélangez un sachet dans de l'eau en suivant les instructions de préparation figurant sur l'étiquette.",
  "Drink as directed": "Buvez selon les indications",
  "The supplied notes suggest once daily, often in the evening. Do not exceed the package directions.": "Les notes fournies suggèrent une prise par jour, souvent le soir. Ne dépassez pas les indications de l'emballage.",
  "Stay hydrated": "Veillez à bien vous hydrater",
  "Drink adequate water and maintain a balanced diet.": "Buvez suffisamment d'eau et adoptez une alimentation équilibrée.",
  "Use only as directed on the package and drink sufficient water. Fiber supplements may affect medication absorption; ask a healthcare professional about timing if you take medicines. Seek medical advice for ongoing constipation or digestive symptoms. Weight-management and digestive claims have not been independently verified.": "Utilisez uniquement selon les instructions de l'emballage et buvez suffisamment d'eau. Les compléments de fibres peuvent modifier l'absorption de médicaments ; si vous prenez des médicaments, demandez conseil à un professionnel de santé sur le moment de la prise. Consultez un professionnel de santé en cas de constipation ou de troubles digestifs persistants. Les allégations concernant la digestion et la gestion du poids n'ont pas été vérifiées de manière indépendante.",
  "Product image": "Photo du produit",
  "Venut White Niacinamide Collagen Capsules Serum": "Sérum en capsules Venut White Niacinamide Collagen",
  "Topical body and neck serum · 10 capsules · 0.34 g each · 5000 XOF": "Sérum topique pour le corps et le cou · 10 capsules · 0,34 g chacune · 5 000 XOF",
  "10 twist-off capsules, 0.34 g each, for topical use on the body and neck": "10 capsules à embout à tourner, de 0,34 g chacune, pour application sur le corps et le cou",
  "Niacinamide (vitamin B3) and collagen are highlighted; supportive vitamins may vary, so check the current ingredient label": "La niacinamide (vitamine B3) et le collagène sont mis en avant ; les vitamines complémentaires peuvent varier, consultez l'étiquette actuelle",
  "Marketed for hydration, smoothing and a more even-looking complexion; cosmetic results vary and are not guaranteed": "Présenté pour l'hydratation, une peau plus lisse et un teint d'apparence plus uniforme ; les résultats cosmétiques varient et ne sont pas garantis",
  "Prepare one capsule": "Préparez une capsule",
  "Twist or snip off the tip of a single capsule.": "Tournez ou coupez l'embout d'une capsule.",
  "Apply to clean skin": "Appliquez sur une peau propre",
  "Gently smooth the serum over clean body and neck skin; avoid the eyes and face unless the label says otherwise.": "Étalez délicatement le sérum sur la peau propre du corps et du cou ; évitez les yeux et le visage sauf indication contraire de l'étiquette.",
  "For external use only; do not swallow. Patch test before first use, avoid irritated or broken skin, and discontinue if irritation occurs. Follow the directions and precautions on the current package.": "Usage externe uniquement ; ne pas avaler. Faites un essai cutané avant la première utilisation, évitez les zones irritées ou lésées et cessez en cas d'irritation. Suivez le mode d'emploi et les précautions de l'emballage actuel.",
  "Venut White Abutine 3C3 Gluta Super White Plus": "Venut White Abutine 3C3 Gluta Super White Plus",
  "Topical booster set · 10 capsules · 5500 XOF": "Coffret booster topique · 10 capsules · 5 500 XOF",
  "10 concentrated capsules/ampoules intended as a topical booster additive": "10 capsules/ampoules concentrées destinées à être ajoutées à un soin topique",
  "The supplied product notes mention alpha-arbutin and glutathione, with collagen, vitamin C, or niacinamide; verify the exact formula on the current label": "Les informations fournies mentionnent de l'alpha-arbutine et du glutathion, ainsi que du collagène, de la vitamine C ou de la niacinamide ; vérifiez la formule exacte sur l'étiquette actuelle",
  "Use only with a lotion, cream, or serum if the package specifically instructs this; do not apply or mix the concentrated capsules otherwise": "À mélanger à une lotion, une crème ou un sérum uniquement si l'emballage le précise ; sinon, ne pas appliquer ni mélanger les capsules concentrées",
  "Marketed for a brighter-looking, more even complexion; these cosmetic claims are not guaranteed": "Présenté pour un teint d'apparence plus lumineux et uniforme ; ces allégations cosmétiques ne sont pas garanties",
  "Check the directions": "Vérifiez le mode d'emploi",
  "Confirm the product is intended to be mixed into a topical cosmetic and follow the package directions.": "Vérifiez que le produit est destiné à être mélangé à un cosmétique topique et suivez le mode d'emploi de l'emballage.",
  "Mix as directed": "Mélangez selon les instructions",
  "If the label allows, mix one capsule into the specified amount of lotion, cream, or serum immediately before use.": "Si l'étiquette l'autorise, mélangez une capsule à la quantité indiquée de lotion, de crème ou de sérum juste avant utilisation.",
  "Patch test": "Faites un essai cutané",
  "Test the mixture on a small area first; avoid the eyes and discontinue if irritation occurs.": "Testez d'abord le mélange sur une petite zone ; évitez les yeux et cessez en cas d'irritation.",
  "For external use only if the product label confirms this route. Do not swallow or use undiluted unless the package explicitly directs it. Check the full ingredient list, patch test first, and use sun protection during the day.": "Usage externe uniquement si l'étiquette confirme cette voie. Ne pas avaler ni utiliser pur, sauf indication explicite de l'emballage. Vérifiez la liste complète des ingrédients, faites un essai cutané et protégez-vous du soleil pendant la journée.",
  "Perfect Skin Lady Collagen Aura Plus White": "Perfect Skin Lady Collagen Aura Plus White",
  "Skincare line · serum 40 ml or cleansing foam 150 g · 8000 XOF": "Gamme de soins · sérum 40 ml ou mousse nettoyante 150 g · 8 000 XOF",
  "The product line includes a Collagen Aura Pure White facial serum (typically 40 ml) and a Collagen Super Aura Plus cleansing foam (typically 150 g)": "La gamme comprend un sérum visage Collagen Aura Pure White (généralement 40 ml) et une mousse nettoyante Collagen Super Aura Plus (généralement 150 g)",
  "The 8,000 XOF price is supplied for this listing; confirm which product/variant is available before ordering": "Le prix de 8 000 XOF est indiqué pour cette fiche ; confirmez le produit ou la variante disponible avant de commander",
  "Claims about smoothing, fine lines, oil control, or brighter-looking skin are cosmetic claims and are not guaranteed": "Les allégations concernant le lissage, les ridules, le contrôle du sébum ou l'éclat de la peau sont cosmétiques et ne sont pas garanties",
  "For external use only. Check the selected product's ingredient list and directions, patch test before first use, avoid the eyes, and discontinue use if irritation occurs.": "Usage externe uniquement. Consultez la liste des ingrédients et le mode d'emploi du produit choisi, faites un essai avant la première utilisation, évitez les yeux et cessez en cas d'irritation.",
  "Perfect Skin Lady Kojie Acid Skin Whitening X10 Serum": "Sérum Perfect Skin Lady Kojie Acid Skin Whitening X10",
  "Facial serum · 40 ml · 8000 XOF": "Sérum visage · 40 ml · 8 000 XOF",
  "40 ml lightweight facial serum, according to the supplied product notes": "Sérum visage léger de 40 ml, selon les informations fournies",
  "The supplied notes list kojic acid, glutathione, niacinamide, and ascorbic acid (vitamin C); verify the current ingredient label": "Les informations fournies mentionnent de l'acide kojique, du glutathion, de la niacinamide et de l'acide ascorbique (vitamine C) ; vérifiez l'étiquette actuelle",
  "Marketed for hydration and the appearance of dark spots and acne marks; cosmetic results vary and are not guaranteed": "Présenté pour l'hydratation et l'apparence des taches pigmentaires et marques d'acné ; les résultats cosmétiques varient et ne sont pas garantis",
  "Smooth a small amount over clean, dry facial skin, avoiding the eyes.": "Appliquez une petite quantité sur le visage propre et sec en évitant les yeux.",
  "Follow the label": "Suivez l'étiquette",
  "Use in the morning or evening only as directed on the package; apply moisturizer as needed.": "Utilisez matin ou soir uniquement selon le mode d'emploi de l'emballage ; appliquez une crème hydratante si nécessaire.",
  "Protect your skin": "Protégez votre peau",
  "Use broad-spectrum sunscreen during the day, especially when using products marketed for uneven tone.": "Utilisez une protection solaire à large spectre le jour, surtout avec les produits présentés pour le teint irrégulier.",
  "For external use only. Patch test before first use, avoid the eyes and irritated or broken skin, and discontinue if irritation occurs. Follow the package frequency and use sun protection during the day.": "Usage externe uniquement. Faites un essai cutané avant la première utilisation, évitez les yeux et les zones irritées ou lésées et cessez en cas d'irritation. Respectez la fréquence indiquée sur l'emballage et protégez-vous du soleil le jour.",
  "Alpha3 Arbutin Serum": "Sérum Alpha3 Arbutin",
  "Facial serum": "Sérum visage",
  "The supplied product images identify this as an Alpha3 Arbutin serum": "Les images fournies identifient un sérum Alpha3 Arbutin",
  "Check the current package for the full ingredient list, size, and directions": "Consultez l'emballage actuel pour connaître la liste complète des ingrédients, le format et le mode d'emploi",
  "Marketed for a brighter-looking, more even complexion; cosmetic results vary": "Présenté pour un teint d'apparence plus lumineux et uniforme ; les résultats cosmétiques varient",
  "For external use only if confirmed by the product label. Patch test before first use, avoid the eyes and irritated skin, and discontinue if irritation occurs. Use sun protection during the day.": "Usage externe uniquement si l'étiquette du produit le confirme. Faites un essai avant la première utilisation, évitez les yeux et les zones irritées et cessez en cas d'irritation. Protégez-vous du soleil pendant la journée.",
  "Gluta Milk": "Gluta Milk",
  "Beauty drink mix": "Boisson beauté en poudre",
  "The supplied images show Gluta Milk drink-mix packaging": "Les images fournies montrent l'emballage d'une boisson en poudre Gluta Milk",
  "Check the current label for ingredients, allergens, serving size, and sugar content": "Consultez l'étiquette actuelle pour connaître les ingrédients, les allergènes, la portion et la teneur en sucre",
  "Beauty and skin-brightening claims are not medical advice and have not been independently verified": "Les allégations beauté et éclaircissantes ne constituent pas un avis médical et n'ont pas été vérifiées de manière indépendante",
  "Use only as directed on the package. Check for allergens and consult a qualified healthcare professional before use if pregnant, breastfeeding, taking medication, or managing a health condition. Supplements are not a substitute for medical care.": "Utilisez uniquement selon les instructions de l'emballage. Vérifiez les allergènes et consultez un professionnel de santé qualifié avant utilisation en cas de grossesse, d'allaitement, de prise de médicaments ou de problème de santé. Les compléments ne remplacent pas les soins médicaux.",
  "Vitamin E Gold Collagen Soap": "Savon Vitamin E Gold Collagen",
  "Vitamin E and collagen cleansing soap": "Savon nettoyant à la vitamine E et au collagène",
  "The supplied images identify this as a Vitamin E Gold Collagen soap": "Les images fournies identifient ce produit comme un savon Vitamin E Gold Collagen",
  "Cleansing and skin-brightening claims shown in promotional material are not guaranteed": "Les allégations nettoyantes et éclaircissantes des supports promotionnels ne sont pas garanties",
  "For external use only. Avoid the eyes and irritated or broken skin. Patch test before first use and discontinue if irritation occurs. Follow the directions on the current package.": "Usage externe uniquement. Évitez les yeux et les zones irritées ou lésées. Faites un essai avant la première utilisation et cessez en cas d'irritation. Suivez le mode d'emploi de l'emballage actuel.",
  "A Bonne Lacticare Lotion": "Lotion A Bonne Lacticare",
  "Body lotion": "Lotion pour le corps",
  "The supplied promotional image identifies this as A Bonne Lacticare body lotion": "L'image promotionnelle fournie identifie cette lotion pour le corps comme A Bonne Lacticare",
  "Check the bottle for the current ingredients, size, and directions": "Consultez le flacon pour connaître les ingrédients, le format et le mode d'emploi actuels",
  "Cosmetic claims shown in promotional material have not been independently verified": "Les allégations cosmétiques des supports promotionnels n'ont pas été vérifiées de manière indépendante",
  "For external use only. Patch test first and discontinue if irritation occurs. Avoid contact with eyes and follow the directions on the bottle.": "Usage externe uniquement. Faites un essai préalable et cessez en cas d'irritation. Évitez tout contact avec les yeux et suivez le mode d'emploi du flacon.",
  "A Bonne Collagen Milk Lotion": "Lotion A Bonne Collagen Milk",
  "Collagen milk body lotion": "Lotion pour le corps au lait et au collagène",
  "The supplied image identifies this as an A Bonne collagen milk lotion": "L'image fournie identifie cette lotion au lait et au collagène comme un produit A Bonne",
  "Claims about skin whitening or brightening are cosmetic marketing claims and are not guaranteed": "Les effets blanchissants ou éclaircissants sont des allégations cosmétiques qui ne sont pas garanties",
  "For external use only. Patch test first, avoid contact with eyes, and discontinue if irritation occurs. Use only as directed on the bottle.": "Usage externe uniquement. Faites un essai préalable, évitez tout contact avec les yeux et cessez en cas d'irritation. Utilisez uniquement selon le mode d'emploi du flacon.",
  "A Bonne Tomato Extract Lotion": "Lotion A Bonne à l'extrait de tomate",
  "Tomato extract body lotion": "Lotion pour le corps à l'extrait de tomate",
  "The supplied images identify tomato extract and lycopene on the A Bonne lotion packaging": "Les images fournies mentionnent l'extrait de tomate et le lycopène sur l'emballage de la lotion A Bonne",
  "Promotional tone-evening and brightening claims are cosmetic claims and are not guaranteed": "Les effets unifiants et éclaircissants présentés sont des allégations cosmétiques non garanties",
  "For external use only. Patch test first, avoid contact with eyes and irritated skin, and discontinue if irritation occurs. Use sun protection during the day.": "Usage externe uniquement. Faites un essai préalable, évitez les yeux et les zones irritées et cessez en cas d'irritation. Utilisez une protection solaire le jour.",
  "A Bonne Perfume Carrot Lotion": "Lotion A Bonne Perfume Carrot",
  "Carrot extract body lotion": "Lotion pour le corps à l'extrait de carotte",
  "The supplied images identify this as an A Bonne Perfume Carrot lotion": "Les images fournies identifient ce produit comme une lotion A Bonne Perfume Carrot",
  "A Bonne Papaya Turmeric Lotion": "Lotion A Bonne Papaya Turmeric",
  "Papaya and turmeric body lotion": "Lotion pour le corps à la papaye et au curcuma",
  "The supplied images identify papaya and turmeric on the A Bonne lotion packaging": "Les images fournies mentionnent la papaye et le curcuma sur l'emballage de la lotion A Bonne",
  "Promotional skin-brightening claims are not independently verified": "Les allégations éclaircissantes promotionnelles n'ont pas été vérifiées de manière indépendante",
  "Clear Nose UV Sun Serum SPF 50+": "Sérum solaire Clear Nose UV SPF 50+",
  "Face sunscreen serum · SPF 50+ PA++++": "Sérum solaire visage · SPF 50+ PA++++",
  "The supplied images show Clear Nose UV Sun Serum with SPF 50+ PA++++": "Les images fournies montrent le sérum solaire Clear Nose UV SPF 50+ PA++++",
  "Check the current package for the amount, ingredients, and application directions": "Consultez l'emballage actuel pour connaître la quantité, les ingrédients et le mode d'application",
  "Sunscreen should be applied and reapplied as directed on its label": "Appliquez et renouvelez la protection solaire selon les instructions de l'étiquette",
  "For external use only. Avoid contact with eyes and discontinue if irritation occurs. Follow the label's application and reapplication directions; sunscreen does not eliminate all UV risk.": "Usage externe uniquement. Évitez tout contact avec les yeux et cessez en cas d'irritation. Respectez le mode d'application et de renouvellement indiqué sur l'étiquette ; une protection solaire n'élimine pas tous les risques liés aux UV.",
  "R-Skin Gluta Capsules": "Capsules R-Skin Gluta",
  "Gluta capsule supplement": "Complément alimentaire en capsules Gluta",
  "The supplied images identify the product as R-Skin Gluta capsules": "Les images fournies identifient ce produit comme des capsules R-Skin Gluta",
  "Check the current package for ingredients, serving size, allergens, and directions": "Consultez l'emballage actuel pour connaître les ingrédients, la portion, les allergènes et le mode d'emploi",
  "Skin-lightening and other wellness claims shown in promotions have not been independently verified": "Les allégations éclaircissantes et autres bienfaits présentés dans les promotions n'ont pas été vérifiés de manière indépendante",
  "Use only as directed on the current package. Consult a qualified healthcare professional before use if pregnant, breastfeeding, taking medication, or managing a health condition. Supplements are not a substitute for medical care.": "Utilisez uniquement selon les instructions de l'emballage actuel. Consultez un professionnel de santé qualifié avant utilisation en cas de grossesse, d'allaitement, de prise de médicaments ou de problème de santé. Les compléments ne remplacent pas les soins médicaux.",
  "Araya Collagen Mix Plus": "Araya Collagen Mix Plus",
  "Berry collagen drink mix · 30 sachets · 300 g": "Boisson au collagène et aux fruits rouges · 30 sachets · 300 g",
  "The supplied product images show a berry-flavoured pack with 30 sachets and 300 g net weight": "Les images fournies montrent un produit aux fruits rouges en 30 sachets, pour un poids net de 300 g",
  "The promotional ingredient graphic lists collagen peptides, glutathione, vitamin C and other ingredients; check the current label for the complete formula and amounts": "L'infographie promotionnelle mentionne des peptides de collagène, du glutathion, de la vitamine C et d'autres ingrédients ; consultez l'étiquette actuelle pour connaître la formule complète et les quantités",
  "Deva Collagen Plus Lychee": "Deva Collagen Plus Lychee",
  "Lychee collagen drink mix": "Boisson au collagène saveur litchi",
  "The supplied images identify this as Deva Collagen Plus with lychee flavour": "Les images fournies identifient ce produit comme Deva Collagen Plus saveur litchi",
  "The ingredient graphic lists collagen peptides, lychee, glutathione, vitamin C, niacinamide, and other ingredients; verify the complete formula and amounts on the current label": "L'infographie mentionne des peptides de collagène, du litchi, du glutathion, de la vitamine C, de la niacinamide et d'autres ingrédients ; vérifiez la formule complète et les quantités sur l'étiquette actuelle",
  "DevaC Plus Collagen": "DevaC Plus Collagen",
  "Orange collagen drink mix": "Boisson au collagène saveur orange",
  "The supplied images identify this as DevaC Plus Collagen with orange flavour": "Les images fournies identifient ce produit comme DevaC Plus Collagen saveur orange",
  "Promotional material highlights collagen, vitamin C, and glutathione; check the current package for the full ingredients, amounts, and serving size": "Les visuels promotionnels mettent en avant le collagène, la vitamine C et le glutathion ; consultez l'emballage actuel pour connaître tous les ingrédients, les quantités et la portion",
  "Beauty and wellness claims are not medical advice and have not been independently verified": "Les allégations beauté et bien-être ne constituent pas un avis médical et n'ont pas été vérifiées de manière indépendante",
  "Beauty and wellness claims shown in promotions have not been independently verified": "Les allégations beauté et bien-être présentées dans les promotions n'ont pas été vérifiées de manière indépendante",
};

const LANGUAGE = {
  en: "en",
  fr: "fr",
};
let currentLanguage = localStorage.getItem(LANGUAGE_KEY) === LANGUAGE.en ? LANGUAGE.en : LANGUAGE.fr;
let currentTheme = THEMES.includes(localStorage.getItem(THEME_KEY)) ? localStorage.getItem(THEME_KEY) : THEMES[0];
document.documentElement.dataset.theme = currentTheme;

const THEME_ICONS = {
  botanical: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.5 4.5C11 4.5 5 7.5 5 13a5 5 0 0 0 5 5c5.5 0 8.5-6 9.5-13.5Z"/><path d="M4 21c3-5 7-8 12-11"/></svg>',
  saffron: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v3m0 14v3M4.93 4.93l2.12 2.12m9.9 9.9 2.12 2.12M2 12h3m14 0h3M4.93 19.07l2.12-2.12m9.9-9.9 2.12-2.12"/></svg>',
  lotus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20c-4-2-6-5-6-9 3 0 5 2 6 5 1-3 3-5 6-5 0 4-2 7-6 9Z"/><path d="M12 16c-3-3-4-6-2-10 2 2 3 4 2 7 1-3 2-5 4-7 2 4 1 7-2 10M4 18c2 0 4 0 6 2m10-2c-2 0-4 0-6 2"/></svg>',
};

function translate(value) {
  return currentLanguage === LANGUAGE.fr ? (FRENCH[value] ?? PRODUCT_FRENCH[value] ?? value) : value;
}

function updateThemeControl() {
  const button = document.querySelector("[data-theme-toggle]");
  if (!button) return;
  const nextTheme = THEMES[(THEMES.indexOf(currentTheme) + 1) % THEMES.length];
  const label = `Switch to ${nextTheme} theme`;
  button.innerHTML = THEME_ICONS[currentTheme];
  button.setAttribute("aria-label", translate(label));
  button.setAttribute("title", translate(label));
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("title, meta[name='description']").forEach((element) => {
    const source = element.dataset.sourceText ?? (element instanceof HTMLMetaElement ? element.content : element.textContent);
    element.dataset.sourceText = source;
    if (element instanceof HTMLTitleElement && page === "product") {
      const productId = new URLSearchParams(window.location.search).get("id") || "huile-jaune";
      const product = getProduct(productId);
      element.textContent = product
        ? `${translate(product.name)} — Thailande Deni Shop`
        : translate("Product not found — Thailande Deni Shop");
    } else if (element instanceof HTMLMetaElement) element.content = translate(source);
    else element.textContent = translate(source);
  });
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (!node.nodeValue?.trim()) continue;
    const source = node.__sourceText ?? node.nodeValue;
    node.__sourceText = source;
    const leading = source.match(/^\s*/)?.[0] ?? "";
    const trailing = source.match(/\s*$/)?.[0] ?? "";
    node.nodeValue = `${leading}${translate(source.trim())}${trailing}`;
  }
  document.querySelectorAll("[aria-label]").forEach((element) => {
    const source = element.dataset.sourceAriaLabel ?? element.getAttribute("aria-label");
    element.dataset.sourceAriaLabel = source;
    if (element.matches(".header-bag")) {
      const count = Number(element.querySelector(".bag-count")?.textContent) || 0;
      const itemLabel = currentLanguage === LANGUAGE.fr ? `article${count === 1 ? "" : "s"}` : count === 1 ? "item" : "items";
      element.setAttribute("aria-label", `${translate("Shopping bag")}, ${count} ${itemLabel}`);
    } else {
      const localizedLabel = source.startsWith("View ") && currentLanguage === LANGUAGE.fr
        ? `${translate("View ")}${source.slice(5)}`
        : translate(source);
      element.setAttribute("aria-label", localizedLabel);
    }
  });
  document.querySelectorAll("img[alt]").forEach((image) => {
    const source = image.dataset.sourceAlt ?? image.getAttribute("alt");
    image.dataset.sourceAlt = source;
    image.setAttribute("alt", translate(source));
  });
  const toggle = document.querySelector("[data-language-toggle]");
  if (toggle) {
    toggle.textContent = currentLanguage === LANGUAGE.fr ? "EN" : "FR";
    toggle.setAttribute("aria-label", translate(currentLanguage === LANGUAGE.fr ? "Switch language to English" : "Switch language to French"));
    toggle.setAttribute("title", translate(currentLanguage === LANGUAGE.fr ? "Switch language to English" : "Switch language to French"));
  }
  updateThemeControl();
}

function setLanguage(language) {
  currentLanguage = language === LANGUAGE.en ? LANGUAGE.en : LANGUAGE.fr;
  localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  applyLanguage();
}

function setTheme(theme) {
  if (!THEMES.includes(theme)) return;
  currentTheme = theme;
  localStorage.setItem(THEME_KEY, currentTheme);
  document.documentElement.dataset.theme = currentTheme;
  updateThemeControl();
}

function formatPrice(product) {
  if (!product.price) return translate("Price on request");
  return `${product.price.amount.toLocaleString("fr-FR")} XOF`;
}

const headerMarkup = `
  <a class="skip-link" href="#main-content">Skip to content</a>
  <header class="site-header">
    <div class="header-inner">
      <a class="wordmark" href="index.html" aria-label="Thailande Deni Shop home"><span class="wordmark-flower" aria-hidden="true">✿</span><span>Thailande Deni Shop</span></a>
      <nav class="primary-nav" id="primary-nav" aria-label="Main navigation">
        <a href="index.html" ${page === "home" ? 'aria-current="page"' : ""}>Home</a>
        <a href="shop.html" ${page === "shop" || page === "product" ? 'aria-current="page"' : ""}>Shop</a>
        <a href="story.html" ${page === "story" ? 'aria-current="page"' : ""}>Our story</a>
        <a href="contact.html" ${page === "contact" ? 'aria-current="page"' : ""}>Contact</a>
        <div class="theme-control">
          <span class="theme-control-label">Theme</span>
          <button class="theme-option" type="button" data-theme-toggle aria-label="Switch to saffron theme" title="Switch to saffron theme"></button>
        </div>
      </nav>
      <button class="language-toggle" type="button" data-language-toggle aria-label="Switch language to English" title="Switch language to English">EN</button>
      <a class="header-bag" href="cart.html" aria-label="Shopping bag, 0 items">Bag <span class="bag-count" aria-hidden="true">0</span></a>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="primary-nav">☰</button>
    </div>
  </header>`;

const footerMarkup = `
  <footer class="site-footer">
    <div class="footer-main">
      <div class="footer-brand">
        <a class="wordmark" href="index.html"><span class="wordmark-flower" aria-hidden="true">✿</span><span>Thailande Deni Shop</span></a>
        <p>Thai beauty, skincare and wellness finds, thoughtfully selected for your routine.</p>
      </div>
      <div>
        <p class="footer-heading">Explore</p>
        <div class="footer-links"><a href="shop.html">Shop all products</a><a href="product.html">Featured product</a><a href="story.html">Our story</a></div>
      </div>
      <div>
        <p class="footer-heading">Need a hand?</p>
        <div class="footer-links"><a href="contact.html">Get in touch</a><a href="cart.html">Your shopping bag</a></div>
      </div>
      <div>
        <p class="footer-heading">Contact details</p>
        <div class="footer-links">
          <a href="https://wa.me/22393243401">WhatsApp orders: +223 93 24 34 01</a>
          <a href="mailto:info@thailandedeni.com">info@thailandedeni.com</a>
          <span>Bamako, Mali</span>
        </div>
      </div>
      <div>
        <p class="footer-heading">Social media</p>
        <div class="footer-links social-placeholders">
          <span>Instagram <small>Coming soon</small></span>
          <span>TikTok <small>Coming soon</small></span>
          <span>Facebook <small>Coming soon</small></span>
          <span>Threads <small>Coming soon</small></span>
        </div>
      </div>
    </div>
    <div class="footer-bottom"><span>© ${new Date().getFullYear()} Thailande Deni Shop</span><span>Take care of your body, naturally.</span></div>
  </footer>`;

document.getElementById("site-header").innerHTML = headerMarkup;
document.getElementById("site-footer").innerHTML = footerMarkup;
document.querySelector("main")?.setAttribute("id", "main-content");

function getCart() {
  const saved = localStorage.getItem(CART_KEY);
  if (!saved) return {};
  const parsed = JSON.parse(saved);
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new TypeError("The saved shopping bag is not valid.");
  }
  return parsed;
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateBagCount();
}

function updateBagCount() {
  const cart = getCart();
  const count = Object.values(cart).reduce((total, quantity) => total + (Number(quantity) || 0), 0);
  document.querySelectorAll(".bag-count").forEach((badge) => { badge.textContent = String(count); });
  document.querySelectorAll(".header-bag").forEach((link) => {
    link.setAttribute("aria-label", `Shopping bag, ${count} ${count === 1 ? "item" : "items"}`);
  });
  const headingCount = document.getElementById("cart-heading-count");
  if (headingCount) headingCount.textContent = `(${count})`;
}

function addToCart(productId, quantity = 1) {
  const product = getProduct(productId);
  if (!product) throw new RangeError(`Unknown product: ${productId}`);
  const amount = Math.max(1, Math.min(99, Number.parseInt(quantity, 10) || 1));
  const cart = getCart();
  cart[product.id] = Math.min(99, (Number(cart[product.id]) || 0) + amount);
  saveCart(cart);
  const button = document.querySelector(`[data-add-to-cart][data-product-id="${product.id}"]`);
  if (button) {
    button.innerHTML = `${translate("Added to bag")} <span aria-hidden="true">✓</span>`;
    button.setAttribute("aria-live", "polite");
    window.setTimeout(() => { button.innerHTML = `${translate("Add to bag")} <span aria-hidden="true">＋</span>`; }, 1600);
  }
}

function renderCart() {
  const container = document.getElementById("cart-content");
  if (!container) return;
  const cart = getCart();
  const items = PRODUCTS
    .map((product) => ({ product, quantity: Math.min(99, Math.max(0, Number(cart[product.id]) || 0)) }))
    .filter((item) => item.quantity > 0);
  updateBagCount();

  if (!items.length) {
    container.innerHTML = `<div class="cart-empty"><span aria-hidden="true">✳</span><h2>Your bag is taking a little pause.</h2><p>There's nothing here just yet. Explore our Thai beauty and wellness collection.</p><a class="button button-dark" href="shop.html">Explore the shop <span aria-hidden="true">→</span></a></div>`;
    return;
  }

  const subtotal = items.reduce((total, { product, quantity }) => total + (product.price ? quantity * product.price.amount : 0), 0);
  const subtotalMarkup = subtotal ? `<p>${translate("Subtotal")} (XOF)</p><strong>${subtotal.toLocaleString("fr-FR")} XOF</strong>` : "";
  container.innerHTML = `
    ${items.map(({ product, quantity }) => `
      <div class="cart-row">
        <div class="cart-row-image"><img src="${product.image}" alt="${product.name}" loading="lazy"></div>
        <div class="cart-row-info">
          <h2>${product.name}</h2><p>${product.description}</p>
          <div class="cart-row-controls" aria-label="Change quantity">
            <button type="button" data-product-id="${product.id}" data-cart-change="-1" aria-label="Decrease quantity">−</button>
            <span>${quantity}</span>
            <button type="button" data-product-id="${product.id}" data-cart-change="1" aria-label="Increase quantity">＋</button>
            <button type="button" class="remove-item" data-product-id="${product.id}" data-cart-remove>Remove</button>
          </div>
        </div>
        <span class="cart-row-price">${product.price ? `${(product.price.amount * quantity).toLocaleString("fr-FR")} XOF` : translate("Price on request")}</span>
      </div>
    `).join("")}
    <div class="cart-summary">
      ${subtotalMarkup}
      <p>Shipping</p><p>To be confirmed</p>
      <p class="cart-disclaimer">All listed prices are in XOF. Prices for unpriced items will be confirmed with the shop. Shipping and payment are not configured.</p>
      <button class="button button-dark cart-checkout" type="button" id="request-order">Request to order <span aria-hidden="true">→</span></button>
      <form class="cart-order-form" id="order-form" hidden>
        <label>Your name<input name="name" autocomplete="name" required></label>
        <label>Your email<input name="email" type="email" autocomplete="email" required></label>
        <button class="button button-dark" type="submit">Prepare order request <span aria-hidden="true">→</span></button>
      </form>
    </div>`;
}

function renderShop() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map((product) => `
    <article class="catalog-card">
      <a class="catalog-card-image${product.id === "huile-jaune" ? " huile-jaune-image" : ""}" href="product.html?id=${encodeURIComponent(product.id)}" aria-label="View ${translate(product.name)}">
        <img src="${product.image}" alt="${translate(product.name)}" loading="lazy">
      </a>
      <div class="catalog-card-info">
        <p class="eyebrow">${product.category}</p>
        <h2><a href="product.html?id=${encodeURIComponent(product.id)}">${product.name}</a></h2>
        <p>${product.description}</p>
        <strong class="shop-price">${formatPrice(product)}</strong>
      </div>
      <button class="button button-dark button-wide" type="button" data-add-to-cart data-product-id="${product.id}">Add to bag <span aria-hidden="true">＋</span></button>
    </article>
  `).join("");
}

function updateHomeCarouselControls() {
  const track = document.getElementById("home-product-track");
  if (!track) return;
  const maxScroll = track.scrollWidth - track.clientWidth;
  const previous = document.querySelector('[data-carousel-step="-1"]');
  const next = document.querySelector('[data-carousel-step="1"]');
  if (previous) previous.disabled = track.scrollLeft <= 4;
  if (next) next.disabled = track.scrollLeft >= maxScroll - 4;
}

function renderHomeCarousel() {
  const track = document.getElementById("home-product-track");
  if (!track) return;
  track.innerHTML = PRODUCTS.filter((product) => product.id !== "huile-jaune").map((product) => `
    <article class="home-product-card">
      <a class="home-product-image" href="product.html?id=${encodeURIComponent(product.id)}" aria-label="View ${product.name}">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </a>
      <div class="home-product-info">
        <p class="eyebrow">${product.category}</p>
        <h3><a href="product.html?id=${encodeURIComponent(product.id)}">${product.name}</a></h3>
        <p>${product.description}</p>
        <strong>${formatPrice(product)}</strong>
      </div>
    </article>
  `).join("");
  track.addEventListener("scroll", updateHomeCarouselControls, { passive: true });
  window.addEventListener("resize", updateHomeCarouselControls);
  updateHomeCarouselControls();
}

function renderProductDetail() {
  const container = document.getElementById("product-detail-content");
  if (!container) return;
  const productId = new URLSearchParams(window.location.search).get("id") || "huile-jaune";
  const product = getProduct(productId);
  if (!product) {
    document.title = "Product not found — Thailande Deni Shop";
    container.innerHTML = `<section class="product-not-found"><p class="eyebrow">THAILANDE DENI SHOP</p><h1>We couldn't find that product.</h1><a class="button button-dark" href="shop.html">Explore the collection <span aria-hidden="true">→</span></a></section>`;
    return;
  }
  const usageMarkup = product.usage ? `
    <section class="how-to-section" id="how-to-use">
      <div class="how-to-heading"><p class="eyebrow">A MOMENT, JUST FOR YOU</p><h2>How to use<br><em>${product.name}</em><span aria-hidden="true">.</span></h2></div>
      <div class="how-to-steps">${product.usage.map(([heading, description], index) => `
        <div class="how-to-step"><span>${String(index + 1).padStart(2, "0")}</span><div><h3>${heading}</h3><p>${description}</p></div></div>
      `).join("")}</div>
    </section>
  ` : "";
  const safetyCopy = product.safety || "Descriptions reflect the supplied product notes and may include manufacturer or distributor claims; they have not been independently verified. Packaging can vary. Always check the current label for ingredients, directions, precautions and suitability. Food supplements are not a substitute for medical advice.";
  const galleryMarkup = product.gallery?.length ? `
    <div class="product-detail-gallery" role="group" aria-label="${translate("Product gallery")}">
      ${product.gallery.map((image, index) => `
        <img src="${image}" alt="${product.name} — Product image ${index + 2}" loading="lazy">
      `).join("")}
    </div>
  ` : "";
  document.title = `${product.name} — Thailande Deni Shop`;
  container.innerHTML = `
    <div class="breadcrumb"><a href="index.html">Home</a><span aria-hidden="true">/</span><a href="shop.html">Shop</a><span aria-hidden="true">/</span><span>${product.name}</span></div>
    <section class="product-detail">
      <div class="product-detail-visuals">
      <div class="product-detail-image image-frame${product.id === "huile-jaune" ? " huile-jaune-image" : ""}">
        <img src="${product.image}" alt="${product.name}">
        ${product.id === "huile-jaune" ? "" : '<span class="image-stamp"><span>THAI</span><strong>BEAUTY</strong><span>& WELLNESS</span></span>'}
      </div>
      ${galleryMarkup}
      </div>
      <div class="product-detail-copy">
        <p class="eyebrow">${product.category}</p>
        <h1>${product.name}</h1>
        <p class="product-subtitle">${product.description}</p>
        <p class="product-price">${formatPrice(product)}</p>
        <p class="product-lede">A thoughtfully selected product from Thailande Deni Shop's collection of Thai beauty, skincare and wellness finds.</p>
        <div class="product-buy-row">
          <label class="quantity-label" for="quantity">Quantity</label>
          <input id="quantity" class="quantity-input" type="number" min="1" max="99" value="1" inputmode="numeric">
          <button class="button button-dark" type="button" data-add-to-cart data-product-id="${product.id}">Add to bag <span aria-hidden="true">＋</span></button>
        </div>
        <div class="product-accordion" id="ingredients">
          <h2>Product information</h2>
          <ul>${product.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>
        </div>
      </div>
    </section>
    ${usageMarkup}
    <aside class="safety-note"><strong>${product.safety ? "A note on use" : "A note on product information"}</strong><p>${safetyCopy}</p></aside>
    <section class="product-last-cta"><p class="eyebrow">EXPLORE THE COLLECTION</p><h2>Find a little something<br><em>for your routine.</em></h2><a class="button button-dark" href="shop.html">Back to the shop <span aria-hidden="true">→</span></a></section>
  `;
}

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const addButton = target.closest("[data-add-to-cart]");
  if (addButton) {
    const quantity = document.getElementById("quantity")?.value ?? 1;
    addToCart(addButton.getAttribute("data-product-id"), quantity);
  }

  const changeButton = target.closest("[data-cart-change]");
  if (changeButton) {
    const productId = changeButton.getAttribute("data-product-id");
    if (!getProduct(productId)) throw new RangeError(`Unknown product: ${productId}`);
    const cart = getCart();
    cart[productId] = Math.min(99, Math.max(0, (Number(cart[productId]) || 0) + Number(changeButton.getAttribute("data-cart-change"))));
    if (!cart[productId]) delete cart[productId];
    saveCart(cart);
    renderCart();
  }

  const removeButton = target.closest("[data-cart-remove]");
  if (removeButton) {
    const productId = removeButton.getAttribute("data-product-id");
    const cart = getCart();
    delete cart[productId];
    saveCart(cart);
    renderCart();
  }

  if (target.closest("#request-order")) {
    const form = document.getElementById("order-form");
    if (form) {
      form.hidden = false;
      form.querySelector("input")?.focus();
    }
  }

  const menuButton = target.closest(".menu-toggle");
  if (menuButton) {
    const nav = document.getElementById("primary-nav");
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", translate(isOpen ? "Open menu" : "Close menu"));
    nav?.classList.toggle("is-open", !isOpen);
  }

  if (target.closest("[data-language-toggle]")) {
    setLanguage(currentLanguage === LANGUAGE.fr ? LANGUAGE.en : LANGUAGE.fr);
  }

  if (target.closest("[data-theme-toggle]")) {
    const nextTheme = THEMES[(THEMES.indexOf(currentTheme) + 1) % THEMES.length];
    setTheme(nextTheme);
  }

  const carouselButton = target.closest("[data-carousel-step]");
  if (carouselButton) {
    const track = document.getElementById("home-product-track");
    const firstCard = track?.querySelector(".home-product-card");
    if (track && firstCard) {
      const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
      const direction = Number(carouselButton.dataset.carouselStep);
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
      track.scrollBy({ left: direction * (firstCard.getBoundingClientRect().width + gap), behavior });
    }
  }
});

document.getElementById("order-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!(form instanceof HTMLFormElement) || !form.reportValidity()) return;
  const details = new FormData(form);
  const cart = getCart();
  const items = PRODUCTS
    .map((product) => ({ product, quantity: Math.min(99, Math.max(0, Number(cart[product.id]) || 0)) }))
    .filter((item) => item.quantity > 0);
  const subject = currentLanguage === LANGUAGE.fr
    ? `Demande de commande : Thailande Deni Shop (${items.length} produit${items.length === 1 ? "" : "s"})`
    : `Order request: Thailande Deni Shop (${items.length} products)`;
  const body = [
    translate("Hello, I would like to request an order."),
    ``,
    `${translate("Name")}: ${details.get("name")}`,
    `${translate("Email")}: ${details.get("email")}`,
    ``,
    ...items.map(({ product, quantity }) => `${translate("Product")}: ${product.name} — ${translate("Quantity")}: ${quantity} × ${product.price ? formatPrice(product) : translate("price to confirm")}`),
    ``,
    translate("Please confirm availability, final prices, shipping, and payment options."),
  ].join("\n");
  window.location.href = `mailto:info@thailandedeni.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.getElementById("contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!(form instanceof HTMLFormElement) || !form.reportValidity()) return;
  const details = new FormData(form);
  const subject = `${details.get("subject")} — Thailande Deni Shop`;
  const body = [
    `${translate("Name")}: ${details.get("name")}`,
    `${translate("Email")}: ${details.get("email")}`,
    ``,
    String(details.get("message")),
  ].join("\n");
  window.location.href = `mailto:info@thailandedeni.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const status = document.getElementById("contact-status");
  if (status) status.textContent = translate("Your email app should open with the message draft addressed to info@thailandedeni.com.");
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const nav = document.getElementById("primary-nav");
  const button = document.querySelector(".menu-toggle");
  if (nav?.classList.contains("is-open") && button) {
    nav.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", translate("Open menu"));
    button.focus();
  }
});

updateBagCount();
renderShop();
renderHomeCarousel();
renderProductDetail();
renderCart();
applyLanguage();
