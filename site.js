const PRODUCTS = [
  {
    id: "huile-jaune",
    name: "Huile Jaune",
    category: "Body care",
    description: "Traditional aromatic massage oil · 15 ml",
    image: "IMG_1289.JPG",
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
    description: "Facial soap and hydrating serum set",
    image: "WhatsApp Image 2026-11-11 at 01.47.05.jpeg",
    details: ["Hyaloe Hydropower Soap · 100 g", "Hyaloe Hydropower Serum · 30 ml, with hyaluronic acid"],
  },
  {
    id: "thailande-deni-lightening-salt-scrub",
    name: "Thaïlande Deni Spa Lightening Salt Scrub",
    category: "Body care",
    description: "Fruit extract body scrub",
    image: "lightening-salt-scrub.jpeg",
    details: ["A salt scrub described as exfoliating and refreshing the skin", "The supplied notes list cantaloupe, carrot, Mahad and mixed fruit extracts"],
  },
  {
    id: "precious-skin-gold-soap",
    name: "Precious Skin 24K Gold Soap",
    category: "Skincare",
    description: "Face and body cleansing bar",
    image: "WhatsApp Image 2026-11-11 at 01.52.01 (1).jpeg",
    details: ["Described as containing 24K gold, collagen, niacinamide, alpha arbutin, vitamin E and glycerin", "Presented as a cleansing bar that helps skin feel soft and hydrated"],
  },
  {
    id: "precious-skin-gold-serum",
    name: "Precious Skin Gold 24K Whitening Serum",
    category: "Skincare",
    description: "Facial serum · 3500 XOF",
    image: "WhatsApp Image 2026-11-11 at 01.53.34.jpeg",
    price: { amount: 3500, currency: "XOF" },
    details: ["Marketed for a brighter-looking, more even complexion", "The supplied notes list niacinamide, vitamin C, 24K gold, collagen and Galactomyces ferment"],
  },
  {
    id: "precious-skin-anti-melasma-cream",
    name: "Precious Skin Gold 24K Anti-Melasma Cream",
    category: "Skincare",
    description: "Facial cream · 15 g",
    image: "WhatsApp Image 2026-11-11 at 01.52.02.jpeg",
    details: ["A travel-size facial cream made in Thailand", "The supplied notes list 24K gold, kojic acid dipalmitate, niacinamide and alpha arbutin"],
  },
  {
    id: "my-bo-herbal-mask-soap",
    name: "My Bo Herbal Mousse Mask Soap",
    category: "Skincare",
    description: "Thai facial cleansing soap and mask",
    image: "WhatsApp Image 2026-11-11 at 02.11.08.jpeg",
    details: ["Typically listed as 50 g; some versions may differ", "The supplied notes describe a mousse-like lather used with a foaming net"],
  },
  {
    id: "bear-cuffee-coffee-scrub-soap",
    name: "Bear Cuffee Coffee Scrub Soap",
    category: "Body care",
    description: "Coffee exfoliating soap · 60 g · 3500 XOF",
    image: "WhatsApp Image 2026-11-11 at 02.16.30 (1).jpeg",
    price: { amount: 3500, currency: "XOF" },
    details: ["The supplied notes list roasted coffee, tamarind, honey, coconut oil and turmeric", "A 2-in-1 soap and scrub described for all skin types"],
  },
  {
    id: "araya-moringa-ginger-tea",
    name: "Araya Herb Moringa & Ginger Tea",
    category: "Tea & wellness",
    description: "Caffeine-free herbal infusion",
    image: "WhatsApp Image 2026-11-11 at 02.23.41.jpeg",
    details: ["Combines moringa leaves and ginger", "For ingredients, preparation and precautions, follow the product packaging"],
  },
  {
    id: "araya-tea-for-you",
    name: "Araya Tea For You",
    category: "Tea & wellness",
    description: "Rose-infused Thai herbal tea",
    image: "WhatsApp Image 2026-11-11 at 02.32.46.jpeg",
    details: ["The supplied notes list white kwao krua, sappan wood, Curcuma comosa, safflower, repair grass, shatavari, stevia, chamomile and roselle", "Marketed for women's wellness; health claims have not been independently verified"],
  },
  {
    id: "lady-finzy",
    name: "LF Lady Finzy",
    category: "Personal care",
    description: "Intimate-care product",
    image: "WhatsApp Image 2026-11-11 at 02.39.39.jpeg",
    details: ["The supplied notes describe a serum or vitamin capsule product", "Check the package and consult a qualified health professional before use; no use method is provided here"],
  },
  {
    id: "kyra-alpha-arbutin",
    name: "Kyra Alpha Arbutin",
    category: "Skincare",
    description: "Single-use skincare booster capsules",
    image: "WhatsApp Image 2026-11-11 at 02.46.00 (1).jpeg",
    details: ["Typically 20 capsules per box, 250 mg each, according to the supplied notes", "Check the product packaging for ingredients and directions before mixing with other products"],
  },
  {
    id: "melasma-breakdown-serum",
    name: "Melasma Breakdown Serum",
    category: "Skincare",
    description: "Facial serum · commonly listed as 30 or 40 ml",
    image: "WhatsApp Image 2026-11-11 at 03.04.24.jpeg",
    details: ["Marketed for the appearance of dark spots and uneven tone", "The supplied notes list ingredients such as glycerin, vitamins C and E, niacinamide, aloe vera and collagen; check the current label"],
  },
  {
    id: "mikeo-blood-orange-collagen",
    name: "Mikeo Blood Orange Collagen Vitamin C Mix Plus",
    category: "Tea & wellness",
    description: "Blood orange drink mix",
    image: "WhatsApp Image 2026-11-11 at 03.46.05.jpeg",
    details: ["The supplied notes describe a vitamin C and collagen drink mix", "Ingredients and sugar content can vary; check the package for current product details"],
  },
  {
    id: "mikeo-gluta-sakura-peach",
    name: "Mikeo Gluta Sakura Peach",
    category: "Tea & wellness",
    description: "Sugar-free beauty drink mix · 20000 XOF",
    image: "WhatsApp Image 2026-11-11 at 03.50.19 (1).jpeg",
    price: { amount: 20000, currency: "XOF" },
    details: ["The supplied notes list glutathione, sakura extract, collagen, hyaluronic acid and vitamin C", "Use only as directed on the package; supplement claims are not medical advice"],
  },
  {
    id: "mikeo-gluta-tomato",
    name: "Mikeo Gluta Tomato",
    category: "Tea & wellness",
    description: "Tomato drink mix · 20000 XOF",
    image: "WhatsApp Image 2026-11-11 at 03.53.38.jpeg",
    price: { amount: 20000, currency: "XOF" },
    details: ["The supplied notes list glutathione, tomato extract, lycopene, acerola cherry and vitamin C", "Use only as directed on the package; supplement claims are not medical advice"],
  },
  {
    id: "mikeo-fiber-xs",
    name: "Mikeo Fiber XS",
    category: "Tea & wellness",
    description: "Fiber drink mix · 30 sachets · 20000 XOF",
    image: "WhatsApp Image 2026-11-11 at 04.00.19.jpeg",
    price: { amount: 20000, currency: "XOF" },
    details: ["Flavors listed in the supplied notes: Green Apple and 7-Berry", "The notes list fiber, prebiotics and probiotics; mix and use only as directed on the package"],
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
  "Thaïlande Deni home": "Accueil Thaïlande Deni",
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
  "Botanical theme": "Thème botanique",
  "Saffron theme": "Thème safran",
  "Lotus theme": "Thème lotus",
  "Choose a theme": "Choisir un thème",
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
  "Thaïlande Deni brand image with Thai-inspired artwork": "Visuel de Thaïlande Deni avec une illustration inspirée de la Thaïlande",
  "Founded by Malian entrepreneur Miss Coumba Diawara": "Fondée par l'entrepreneure malienne Mlle Coumba Diawara",
  "5 out of 5 stars": "5 étoiles sur 5",
  "Discover Thaïlande Deni Huile Jaune": "Découvrir Huile Jaune de Thaïlande Deni",
  "Thaïlande Deni Huile Jaune product poster, showing the golden 15 ml bottle and its ingredients": "Affiche du produit Huile Jaune de Thaïlande Deni, avec le flacon doré de 15 ml et ses ingrédients",
  "Thaïlande Deni Huile Jaune, golden massage oil in a 15 ml dropper bottle": "Huile de massage dorée Huile Jaune de Thaïlande Deni, dans un flacon compte-gouttes de 15 ml",
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
  "Product not found — Thaïlande Deni": "Produit introuvable — Thaïlande Deni",
  "We couldn't find that product.": "Nous n'avons pas trouvé ce produit.",
  "THAÏLANDE DENI SHOP": "BOUTIQUE THAÏLANDE DENI",
  "A thoughtfully selected product from Thaïlande Deni's collection of Thai beauty, skincare and wellness finds.": "Un produit soigneusement choisi parmi la sélection thaïlandaise de beauté, de soins et de bien-être de Thaïlande Deni.",
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
  "THE THAÏLANDE DENI STORY": "L'HISTOIRE DE THAÏLANDE DENI",
  "A Malian founder.": "Une fondatrice malienne.",
  "A Thai discovery.": "Des découvertes thaïlandaises.",
  "Thaïlande Deni was started by Miss Coumba Diawara, a Malian businesswoman and entrepreneur. Built on her interest in Thai beauty and wellness, the shop brings a carefully selected range of skincare, body care, teas and wellness finds to customers in Mali and beyond.": "Thaïlande Deni a été créée par Mlle Coumba Diawara, femme d'affaires et entrepreneure malienne. Portée par son intérêt pour la beauté et le bien-être thaïlandais, la boutique propose une sélection de soins pour la peau et le corps, de thés et de produits bien-être aux clients du Mali et d'ailleurs.",
  "Founded in Mali": "Fondée au Mali",
  "Founded by Malian entrepreneur Miss Coumba Diawara, Thaïlande Deni connects customers with beauty and wellness products from Thailand.": "Fondée par l'entrepreneure malienne Mlle Coumba Diawara, Thaïlande Deni fait découvrir aux clients des produits de beauté et de bien-être venus de Thaïlande.",
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
  "Review your Thaïlande Deni order.": "Consultez votre commande Thaïlande Deni.",
  "Get in touch with Thaïlande Deni about Thai beauty products and your order.": "Contactez Thaïlande Deni au sujet des produits de beauté thaïlandais et de votre commande.",
  "Explore product details from Thaïlande Deni's Thai beauty, skincare and wellness collection.": "Découvrez les détails des produits de beauté, de soin et de bien-être thaïlandais de Thaïlande Deni.",
  "Meet Miss Coumba Diawara, the Malian businesswoman and entrepreneur who started Thaïlande Deni.": "Découvrez Mlle Coumba Diawara, femme d'affaires et entrepreneure malienne à l'origine de Thaïlande Deni.",
  "Discover Thai beauty, skincare and wellness at Thaïlande Deni, founded by Malian entrepreneur Coumba Diawara.": "Découvrez chez Thaïlande Deni une sélection de produits thaïlandais de beauté, de soin et de bien-être, fondée par l'entrepreneure malienne Coumba Diawara.",
  "Miss Coumba Diawara, Malian businesswoman and founder of Thaïlande Deni": "Mlle Coumba Diawara, femme d'affaires malienne et fondatrice de Thaïlande Deni",
  "Shop Thai beauty & wellness — Thaïlande Deni": "Beauté et bien-être thaïlandais — Thaïlande Deni",
  "Order request: Thaïlande Deni": "Demande de commande : Thaïlande Deni",
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
  "Get in touch — Thaïlande Deni": "Nous contacter — Thaïlande Deni",
  "Our story — Thaïlande Deni": "Notre histoire — Thaïlande Deni",
  "Your bag — Thaïlande Deni": "Votre panier — Thaïlande Deni",
  "Product details — Thaïlande Deni": "Détails du produit — Thaïlande Deni",
  "Thai beauty & wellness": "Beauté et bien-être thaïlandais",
  "Thaïlande Deni — Thai beauty & wellness": "Thaïlande Deni — beauté et bien-être thaïlandais",
  "THE WOMAN BEHIND THE BRAND": "LA FEMME DERRIÈRE LA MARQUE",
  "Founded with care": "Une marque créée avec soin",
  "by Coumba Diawara.": "par Coumba Diawara.",
  "Thaïlande Deni was started by Miss Coumba Diawara, a Malian businesswoman and entrepreneur. Her vision brings Thai beauty and wellness discoveries to customers in Mali and beyond.": "Thaïlande Deni a été créée par Mlle Coumba Diawara, femme d'affaires et entrepreneure malienne. Sa vision fait découvrir des produits thaïlandais de beauté et de bien-être aux clients du Mali et d'ailleurs.",
  "Meet the founder": "Rencontrer la fondatrice",
  "Thaïlande Deni Huile Jaune, a traditional massage oil made in Thailand": "Huile Jaune de Thaïlande Deni, une huile de massage traditionnelle fabriquée en Thaïlande",
  "Thaïlande Deni Huile Jaune label and golden 15 ml bottle": "Étiquette Huile Jaune de Thaïlande Deni et flacon doré de 15 ml",
  "Meet the founder of Thaïlande Deni": "Découvrez la fondatrice de Thaïlande Deni",
};

const LANGUAGE = {
  en: "en",
  fr: "fr",
};
let currentLanguage = localStorage.getItem(LANGUAGE_KEY) === LANGUAGE.en ? LANGUAGE.en : LANGUAGE.fr;
let currentTheme = THEMES.includes(localStorage.getItem(THEME_KEY)) ? localStorage.getItem(THEME_KEY) : THEMES[0];
document.documentElement.dataset.theme = currentTheme;

function translate(value) {
  return currentLanguage === LANGUAGE.fr ? (FRENCH[value] ?? value) : value;
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("title, meta[name='description']").forEach((element) => {
    const source = element.dataset.sourceText ?? (element instanceof HTMLMetaElement ? element.content : element.textContent);
    element.dataset.sourceText = source;
    if (element instanceof HTMLMetaElement) element.content = translate(source);
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
  document.querySelectorAll("[data-theme-option]").forEach((button) => {
    const themeLabel = `${button.dataset.themeOption[0].toUpperCase()}${button.dataset.themeOption.slice(1)} theme`;
    button.setAttribute("aria-label", translate(themeLabel));
    button.setAttribute("title", translate(themeLabel));
    button.setAttribute("aria-pressed", String(button.dataset.themeOption === currentTheme));
  });
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
  document.querySelectorAll("[data-theme-option]").forEach((button) => {
    const selected = button.dataset.themeOption === currentTheme;
    button.setAttribute("aria-pressed", String(selected));
  });
}

function formatPrice(product) {
  if (!product.price) return translate("Price on request");
  return `${product.price.amount.toLocaleString("fr-FR")} XOF`;
}

const headerMarkup = `
  <a class="skip-link" href="#main-content">Skip to content</a>
  <header class="site-header">
    <div class="header-inner">
      <a class="wordmark" href="index.html" aria-label="Thaïlande Deni home"><span class="wordmark-flower" aria-hidden="true">✿</span><span>Thaïlande Deni</span></a>
      <nav class="primary-nav" id="primary-nav" aria-label="Main navigation">
        <a href="index.html" ${page === "home" ? 'aria-current="page"' : ""}>Home</a>
        <a href="shop.html" ${page === "shop" || page === "product" ? 'aria-current="page"' : ""}>Shop</a>
        <a href="story.html" ${page === "story" ? 'aria-current="page"' : ""}>Our story</a>
        <a href="contact.html" ${page === "contact" ? 'aria-current="page"' : ""}>Contact</a>
        <div class="theme-control" role="group" aria-label="Choose a theme">
          <span class="theme-control-label">Theme</span>
          <button class="theme-option" type="button" data-theme-option="botanical" aria-label="Botanical theme" title="Botanical theme" aria-pressed="true"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.5 4.5C11 4.5 5 7.5 5 13a5 5 0 0 0 5 5c5.5 0 8.5-6 9.5-13.5Z"/><path d="M4 21c3-5 7-8 12-11"/></svg></button>
          <button class="theme-option" type="button" data-theme-option="saffron" aria-label="Saffron theme" title="Saffron theme" aria-pressed="false"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v3m0 14v3M4.93 4.93l2.12 2.12m9.9 9.9 2.12 2.12M2 12h3m14 0h3M4.93 19.07l2.12-2.12m9.9-9.9 2.12-2.12"/></svg></button>
          <button class="theme-option" type="button" data-theme-option="lotus" aria-label="Lotus theme" title="Lotus theme" aria-pressed="false"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20c-4-2-6-5-6-9 3 0 5 2 6 5 1-3 3-5 6-5 0 4-2 7-6 9Z"/><path d="M12 16c-3-3-4-6-2-10 2 2 3 4 2 7 1-3 2-5 4-7 2 4 1 7-2 10M4 18c2 0 4 0 6 2m10-2c-2 0-4 0-6 2"/></svg></button>
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
        <a class="wordmark" href="index.html"><span class="wordmark-flower" aria-hidden="true">✿</span><span>Thaïlande Deni</span></a>
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
    <div class="footer-bottom"><span>© ${new Date().getFullYear()} Thaïlande Deni</span><span>Take care of your body, naturally.</span></div>
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
      <a class="catalog-card-image" href="product.html?id=${encodeURIComponent(product.id)}" aria-label="View ${product.name}">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
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
  track.innerHTML = PRODUCTS.map((product) => `
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
    document.title = "Product not found — Thaïlande Deni";
    container.innerHTML = `<section class="product-not-found"><p class="eyebrow">THAÏLANDE DENI SHOP</p><h1>We couldn't find that product.</h1><a class="button button-dark" href="shop.html">Explore the collection <span aria-hidden="true">→</span></a></section>`;
    return;
  }
  const usageMarkup = product.usage ? `
    <section class="how-to-section" id="how-to-use">
      <div class="how-to-heading"><p class="eyebrow">A MOMENT, JUST FOR YOU</p><h2>How to use<br><em>${product.name}.</em></h2></div>
      <div class="how-to-steps">${product.usage.map(([heading, description], index) => `
        <div class="how-to-step"><span>${String(index + 1).padStart(2, "0")}</span><div><h3>${heading}</h3><p>${description}</p></div></div>
      `).join("")}</div>
    </section>
  ` : "";
  const safetyCopy = product.safety || "Descriptions reflect the supplied product notes and may include manufacturer or distributor claims; they have not been independently verified. Packaging can vary. Always check the current label for ingredients, directions, precautions and suitability. Food supplements are not a substitute for medical advice.";
  document.title = `${product.name} — Thaïlande Deni`;
  container.innerHTML = `
    <div class="breadcrumb"><a href="index.html">Home</a><span aria-hidden="true">/</span><a href="shop.html">Shop</a><span aria-hidden="true">/</span><span>${product.name}</span></div>
    <section class="product-detail">
      <div class="product-detail-image image-frame">
        <img src="${product.image}" alt="${product.name}">
        <span class="image-stamp"><span>THAI</span><strong>BEAUTY</strong><span>& WELLNESS</span></span>
      </div>
      <div class="product-detail-copy">
        <p class="eyebrow">${product.category}</p>
        <h1>${product.name}</h1>
        <p class="product-subtitle">${product.description}</p>
        <p class="product-price">${formatPrice(product)}</p>
        <p class="product-lede">A thoughtfully selected product from Thaïlande Deni's collection of Thai beauty, skincare and wellness finds.</p>
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

  const themeButton = target.closest("[data-theme-option]");
  if (themeButton) setTheme(themeButton.dataset.themeOption);

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
    ? `Demande de commande : Thaïlande Deni (${items.length} produit${items.length === 1 ? "" : "s"})`
    : `Order request: Thaïlande Deni (${items.length} products)`;
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
  const subject = `${details.get("subject")} — Thaïlande Deni`;
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
