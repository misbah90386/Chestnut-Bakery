import { MenuItem, Testimonial, GalleryItem } from './types';

export const CATEGORIES = [
  { id: 'all', name: 'All Items', arabicName: 'كل الأصناف' },
  { id: 'bakery', name: 'Bakery & Pastries', arabicName: 'المخبوزات والحلويات' },
  { id: 'breakfast', name: 'Artisan Breakfast', arabicName: 'الفطور المتميز' },
  { id: 'sandwiches', name: 'Handcrafted Sandwiches', arabicName: 'السندوتشات' },
  { id: 'pizza', name: 'Neapolitan Pizza', arabicName: 'البيتزا' },
  { id: 'desserts', name: 'Premium Desserts', arabicName: 'الحلويات الفاخرة' },
  { id: 'coffee', name: 'Specialty Coffee', arabicName: 'القهوة المختصة' },
  { id: 'cold-drinks', name: 'Cold Drinks', arabicName: 'المشروبات الباردة' }
];

export const MENU_ITEMS: MenuItem[] = [
  // --- BAKERY & PASTRIES ---
  {
    id: 'bak-1',
    name: 'Butter Croissant',
    arabicName: 'كرواسون الزبدة',
    description: 'Flaky, buttery, traditional French croissant baked fresh daily with premium European butter.',
    arabicDescription: 'كرواسون فرنسي كلاسيكي هش وغني بالزبدة الأوروبية الفاخرة، يخبز طازجاً يومياً.',
    price: 16,
    category: 'bakery',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true
  },
  {
    id: 'bak-2',
    name: 'Artisan Sourdough Bread',
    arabicName: 'خبز الساوردو الحرفي',
    description: 'Our signature 48-hour slow-fermented sourdough bread with a wild yeast starter, thick crust, and airy crumb.',
    arabicDescription: 'خبز الساوردو المميز بتخمير بطيء لمدة 48 ساعة بخميرة طبيعية، قشرة مقرمشة ولب رطب وغني.',
    price: 24,
    category: 'bakery',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'bak-3',
    name: 'Everything Sesame Bagel',
    arabicName: 'باجل السمسم المشكل',
    description: 'Chewy artisan bagel boiled and baked fresh, coated in our signature everything seasoning mix.',
    arabicDescription: 'باجل كلاسيكي مخبوز ومغلي بطريقة تقليدية، مغطى بخلطة السمسم والتوابل الخاصة بنا.',
    price: 14,
    category: 'bakery',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'bak-4',
    name: 'Almond & Pistachio Danish',
    arabicName: 'دانيش اللوز والفستق',
    description: 'Delicate puff pastry with custard cream filling, toasted almond flakes, and crushed local premium pistachios.',
    arabicDescription: 'رقائق الدانيش الهشة محشوة بكريمة الكاسترد الغنية، اللوز المحمص والفستق الحلبي الفاخر.',
    price: 21,
    category: 'bakery',
    image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'bak-5',
    name: 'Valrhona Chocolate Cookie',
    arabicName: 'كوكيز شوكولاتة فالرونا',
    description: 'Soft-baked cookies with chunks of premium Valrhona dark chocolate and a sprinkle of Maldon sea salt flakes.',
    arabicDescription: 'كوكيز مخبوز بعناية غني بقطع شوكولاتة فالرونا الداكنة الفاخرة مع رشات من ملح مالدون البحري.',
    price: 15,
    category: 'bakery',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'bak-6',
    name: 'Red Velvet White Chocolate Cake',
    arabicName: 'كيك الريد فيلفيت بالشوكولاتة البيضاء',
    description: 'Moist red velvet cake layers with smooth white chocolate cream cheese frosting and raspberry garnish.',
    arabicDescription: 'طبقات كيك الريد فيلفيت الهشة مع كريمة الجبن المخفوقة بالشوكولاتة البيضاء ومزينة بقطع التوت.',
    price: 32,
    category: 'bakery',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600'
  },

  // --- BREAKFAST ---
  {
    id: 'brk-1',
    name: 'Soaked French Toast',
    arabicName: 'فرنش توست غني',
    description: 'Brioche bread soaked in rich vanilla bean custard, pan-caramelized, served with fresh berries and maple syrup.',
    arabicDescription: 'خبز البريوش الفاخر المنقوع بكريمة الفانيليا الطبيعية، مكرمل ويقدم مع التوت البري الطازج وشراب القيقب الأصلي.',
    price: 48,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true
  },
  {
    id: 'brk-2',
    name: 'Grilled Halloumi Plate',
    arabicName: 'طبق الحلوم المشوي',
    description: 'Grilled Cypriot halloumi cheese with fresh garden cherry tomatoes, cucumber, mint, Kalamata olives, and pomegranate molasses.',
    arabicDescription: 'جبنة الحلوم القبرصية المشوية تقدم مع طماطم كرزية طازجة، خيار، نعناع، زيتون كالاماتا ودبس الرمان الفاخر.',
    price: 42,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1510627802771-333e89d55b37?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true
  },
  {
    id: 'brk-3',
    name: 'Spiced Lahmacun',
    arabicName: 'لحم بعجين متبل',
    description: 'Traditional thin and crispy flatbread topped with minced spiced lamb, tomatoes, onions, parsley, and fresh lemon wedges.',
    arabicDescription: 'عجين مفرود مقرمش مغطى باللحم المفروم المتبل، طماطم، بصل، بقدونس ويقدم مع ليمون طازج.',
    price: 35,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1594007654729-407ededc414a?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true
  },
  {
    id: 'brk-4',
    name: 'Zaatar & Cheese Manakeesh',
    arabicName: 'مناقيش الزعتر والجبن',
    description: 'Freshly baked flatbread split with premium Lebanese zaatar thyme and melty Akkawi and Mozzarella cheese.',
    arabicDescription: 'مناقيش تخبز على الطلب بنصف زعتر لبناني فاخر ونصف مزيج من جبنة العكاوي والموزاريلا الغنية.',
    price: 28,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'brk-5',
    name: 'Avocado Poached Eggs',
    arabicName: 'أفوكادو وبيض بوشيه',
    description: 'Two organic poached eggs over mashed avocado on toasted sourdough, sprinkled with microgreens and chili flakes.',
    arabicDescription: 'بيضتان عضويتان مطهوتان بعناية (بوشيه) على طبقة غنية من الأفوكادو المهروس فوق خبز الساوردو المحمص.',
    price: 46,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'brk-6',
    name: 'Chestnut Breakfast Platter',
    arabicName: 'فطور تشسنت الفاخر',
    description: 'An elegant selection of shakshuka eggs, grilled halloumi, labneh with olive oil, fresh honey, butter, and warm artisan breads.',
    arabicDescription: 'تشكيلة فاخرة من بيض الشكشوكة، الحلوم المشوي، اللبنة بالزيت، العسل الطبيعي، الزبدة مع سلة مخبوزاتنا الحرفية الساخنة.',
    price: 75,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=600'
  },

  // --- SANDWICHES ---
  {
    id: 'snd-1',
    name: 'Roast Beef Bagel Sandwich',
    arabicName: 'ساندوتش روست بيف باجل',
    description: 'Tender slices of premium roast beef, sharp cheddar, arugula, pickles, and signature mustard-mayo on a fresh bagel.',
    arabicDescription: 'شرائح لحم الروست بيف الفاخر الطري، جبنة تشيدر قوية، جرجير، مخلل، وصلصة الخردل والمايونيز المميزة في باجل طازج.',
    price: 49,
    category: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true
  },
  {
    id: 'snd-2',
    name: 'Smoked Pastrami Melt',
    arabicName: 'ساندوتش باسترامي ذائبة',
    description: 'House-smoked pastrami layered with melted Swiss cheese, sauerkraut, and Russian dressing on artisanal rye sourdough.',
    arabicDescription: 'باسترامي مدخنة محلياً ببطء مع جبنة سويسرية ذائبة، كرنب مخلل، وصلصة روسية في خبز الساوردو الريفي الأسمر.',
    price: 54,
    category: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1539252554453-80ab65cc3586?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true
  },
  {
    id: 'snd-3',
    name: 'Mediterranean Halloumi Panini',
    arabicName: 'بانيني الحلوم المتوسطي',
    description: 'Warm panini bread filled with grilled halloumi, basil pesto, sun-dried tomatoes, and crisp baby spinach.',
    arabicDescription: 'خبز البانيني الساخن محشو بجبنة الحلوم المشوية، بيستو الريحان العطري، طماطم مجففة وسبانخ صغيرة.',
    price: 38,
    category: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1540713434306-53f2c2115094?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'snd-4',
    name: 'Gourmet Grilled Chicken Club',
    arabicName: 'كلوب ساندوتش الدجاج الفاخر',
    description: 'Sous-vide grilled chicken breast, beef bacon, organic egg, sliced tomatoes, avocado, and herb aioli on toasted brioche.',
    arabicDescription: 'صدر دجاج مشوي مطهو ببطء، بيكون بقري، بيض عضوي، شرائح طماطم، أفوكادو، ومايونيز الأعشاب في بريوش محمص.',
    price: 46,
    category: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&q=80&w=600'
  },

  // --- PIZZA ---
  {
    id: 'piz-1',
    name: 'Truffle Mushroom Pizza',
    arabicName: 'بيتزا الفطر والكمأة',
    description: 'Artisanal sourdough crust topped with white truffle cream, wild mushrooms, fresh mozzarella, and aromatic rosemary oil.',
    arabicDescription: 'عجينة بيتزا ساوردو حرفية مغطاة بكريمة الكمأة البيضاء، الفطر البري، جبنة الموزاريلا الطازجة وزيت الروزماري العطري.',
    price: 64,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true
  },
  {
    id: 'piz-2',
    name: 'Classic Margherita Sourdough',
    arabicName: 'بيتزا مارغريتا الكلاسيكية',
    description: 'San Marzano tomato sauce, fresh buffalo mozzarella, aromatic basil leaves, and cold-pressed extra virgin olive oil.',
    arabicDescription: 'صلصة طماطم سان مارزانو الإيطالية، موزاريلا بوفالو طازجة، أوراق ريحان عطرة وزيت زيتون بكر ممتاز معصور على البارد.',
    price: 48,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600'
  },

  // --- DESSERTS ---
  {
    id: 'des-1',
    name: 'Salted Caramel Pecan Brownie',
    arabicName: 'براوني بيكان كراميل المملح',
    description: 'Fudgy, rich Belgian chocolate brownie loaded with toasted pecans and swirled with house-made salted caramel sauce.',
    arabicDescription: 'براوني غني ورطب بالشوكولاتة البلجيكية، محمل بقطع البيكان المحمص ومغطى بصلصة الكراميل المملح المصنوعة لدينا.',
    price: 24,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'des-2',
    name: 'New York San Sebastian Cheesecake',
    arabicName: 'سان سيباستيان تشيز كيك',
    description: 'Crustless Basque-style cheesecake with a perfectly burnt caramelized top and an incredibly creamy, custardy center.',
    arabicDescription: 'تشيز كيك على الطريقة الباسكية الفاخرة، تتميز بسطح مكرمل محروق بدقة ومركز كريمي ناعم يذوب في الفم.',
    price: 34,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'des-3',
    name: 'Fresh Mixed Berry Tart',
    arabicName: 'تارت التوت البري الطازج',
    description: 'Sweet pastry shell filled with vanilla pastry cream and crowned with raspberries, blueberries, and blackberries.',
    arabicDescription: 'قالب تارت حلو مقرمش محشو بكريمة الفانيليا الغنية ومغطى بتشكيلة متميزة من التوت البري والأسود الطازج.',
    price: 28,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'des-4',
    name: 'Gold Leaf Chocolate Fudge Cake',
    arabicName: 'كيك الشوكولاتة الفاخر بوجقات الذهب',
    description: 'Luxurious triple-layered chocolate fudge cake, glazed with premium ganache and adorned with edible gold leaf flakes.',
    arabicDescription: 'كيك شوكولاتة غني ثلاثي الطبقات، مغطى بطبقة جناش فاخرة ومزين بأوراق الذهب الصالحة للأكل لفخامة لا تقاوم.',
    price: 36,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80&w=600'
  },

  // --- SPECIALTY COFFEE ---
  {
    id: 'cof-1',
    name: 'Gold Velvet Cappuccino',
    arabicName: 'كابتشينو القطيفة الذهبي',
    description: 'Single-origin espresso blended with micro-foamed organic milk and a gentle dusting of organic cocoa.',
    arabicDescription: 'إسبريسو من مصدر واحد مع حليب عضوي مبخر برغوة مخملية مثالية ولمسة خفيفة من الكاكاو العضوي.',
    price: 19,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true
  },
  {
    id: 'cof-2',
    name: 'Signature Flat White',
    arabicName: 'فلات وايت المتميز',
    description: 'Double shot of our seasonal espresso blend with velvety wet milk foam, giving a strong and smooth profile.',
    arabicDescription: 'جرعة مزدوجة من إسبريسو حبوبنا الموسمية مع رغوة حليب ناعمة وقليلة، لتوازن ممتاز بين نكهة القهوة والحليب.',
    price: 20,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cof-3',
    name: 'Caffè Latte',
    arabicName: 'لاتيه كلاسيك',
    description: 'Gentle and comforting espresso shot topped with plenty of steamed milk and structured milk art.',
    arabicDescription: 'إسبريسو هادئ ومتكامل مغطى بكمية وافرة من الحليب الساخن المنسق بفن اللاتيه الأنيق.',
    price: 19,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cof-4',
    name: 'Artisan Americano',
    arabicName: 'أمريكانو حرفي',
    description: 'Two shots of rich espresso diluted with hot purified water, preserving the coffee bean aromatic crema.',
    arabicDescription: 'جرعتان من إسبريسو حبوبنا الفاخرة ممددة بالماء الساخن النقي، للحفاظ على نكهة وحلاوة الكريما الطبيعية.',
    price: 15,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cof-5',
    name: 'Classic Espresso Single',
    arabicName: 'إسبريسو فردي كلاسيكي',
    description: 'Expertly pulled shot of our premium specialty Arabica blend, showcasing dense crema and sweet acidity.',
    arabicDescription: 'جرعة إسبريسو كلاسيكية مستخلصة باحتراف من مزيج قهوة أرابيكا المختصة، متميزة بكريما كثيفة وحموضة متزنة.',
    price: 12,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cof-6',
    name: 'Premium Caffè Mocha',
    arabicName: 'موكا كافيه فاخرة',
    description: 'Rich single-origin espresso swirled with dark Belgian chocolate sauce and steamed organic milk.',
    arabicDescription: 'إسبريسو غني ممزوج بصلصة الشوكولاتة البلجيكية الداكنة والحليب العضوي الساخن لمذاق فريد.',
    price: 22,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1596078841242-12f73dc698c6?auto=format&fit=crop&q=80&w=600'
  },

  // --- COLD DRINKS ---
  {
    id: 'cld-1',
    name: 'Spanish Iced Latte',
    arabicName: 'سبانش آيس لاتيه',
    description: 'Double espresso pulled over chilled organic milk with a touch of premium condensed sweet milk and ice.',
    arabicDescription: 'جرعة إسبريسو مزدوجة تقدم مع حليب بارد ولمسة متزنة من الحليب المكثف المحلى الفاخر والثلج.',
    price: 22,
    category: 'cold-drinks',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cld-2',
    name: 'Freshly Squeezed Orange Juice',
    arabicName: 'عصير برتقال طازج معصور',
    description: '100% natural, freshly squeezed sweet valencia oranges loaded with vitamin C. Cold and refreshing.',
    arabicDescription: 'طبيعي 100% بدون إضافات، معصور بارداً من حبات البرتقال الحلوة ومحمل بفيتامين سي المنعش.',
    price: 18,
    category: 'cold-drinks',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cld-3',
    name: 'Forest Berry Smoothie',
    arabicName: 'سموذي توت الغابة المنعش',
    description: 'A vibrant blend of fresh strawberries, blueberries, blackberries, and Greek yogurt with a drizzle of honey.',
    arabicDescription: 'مزيج حيوي من الفراولة، التوت الأزرق، التوت الأسود، والزبادي اليوناني الغني مع لمسة عسل طبيعي.',
    price: 24,
    category: 'cold-drinks',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cld-4',
    name: 'Artisanal Cold Brew Coffee',
    arabicName: 'كولد برو حرفي بارد',
    description: 'Single-origin beans steeped cold for 16 hours, resulting in an incredibly smooth, low-acid, clean glass of coffee.',
    arabicDescription: 'حبوب قهوة أحادية المصدر منقوعة بالماء البارد لمدة 16 ساعة لتجربة قهوة باردة ونظيفة قليلة الحموضة وممتلئة النكهة.',
    price: 23,
    category: 'cold-drinks',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Sarah Al-Otaibi',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    comment: 'Beautiful atmosphere with amazing pastries and excellent coffee.',
    arabicComment: 'أجواء في غاية الجمال والروعة مع معجنات ممتازة ومثالية، والقهوة مذهلة ومتزنة جداً.',
    date: '3 days ago'
  },
  {
    id: 'rev-2',
    name: 'Mohammed Al-Dosari',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    comment: 'The sandwiches are outstanding and the service is exceptional.',
    arabicComment: 'السندوتشات لديهم لا يُعلى عليها، الحشوات فاخرة ومبتكرة والخدمة استثنائية وسريعة جداً.',
    date: '1 week ago'
  },
  {
    id: 'rev-3',
    name: 'Lina Al-Fahad',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    comment: 'One of the best bakery cafés in Riyadh. The French toast is out of this world.',
    arabicComment: 'من أرقى وأفضل المقاهي والمخابز في الرياض. الفرنش توست خيالي ويستحق التجربة مراراً.',
    date: '2 weeks ago'
  },
  {
    id: 'rev-4',
    name: 'Abdulaziz Bin Khalid',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    comment: 'Excellent sourdough quality and perfect cappuccino. Perfect spot for business breakfasts.',
    arabicComment: 'جودة الساوردو مذهلة والكرواسون هش جداً، والكابتشينو متقن. مكان ممتاز جداً للقاءات العمل الصباحية.',
    date: '1 month ago'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Warm & Luxurious Interior',
    arabicTitle: 'التصميم الداخلي الفاخر والمريح',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-2',
    title: 'Freshly Baked Croissants',
    arabicTitle: 'كرواسون طازج وهش يومياً',
    category: 'bakery',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-3',
    title: 'Cozy Outdoor Seating',
    arabicTitle: 'الجلسات الخارجية الدافئة والمريحة',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-4',
    title: 'Specialty Latte Art',
    arabicTitle: 'فن اللاتيه المحضر بأيدي بارتستا محترفين',
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-5',
    title: 'Our Signature French Toast',
    arabicTitle: 'طبق الفرنش توست المميز والغني بالكراميل',
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-6',
    title: 'Artisan Pastrami Melt Sandwich',
    arabicTitle: 'ساندوتش الباسترامي الساخنة والمحشوة بغزارة',
    category: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1539252554453-80ab65cc3586?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-7',
    title: 'Elegant Dessert Tarts',
    arabicTitle: 'حلويات وتارت الفواكه الفاخرة',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-8',
    title: 'Joyful Moments in Café',
    arabicTitle: 'لحظات سعيدة وذكريات دافئة في مقهانا',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-9',
    title: 'Handcrafted Truffle Sourdough Pizza',
    arabicTitle: 'بيتزا الساوردو الإيطالية الحرفية بالكمأة',
    category: 'sandwiches', // representing savory/pizza here
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=800'
  }
];

export const CORE_PILLARS = [
  {
    id: 'pil-1',
    title: 'Freshly Baked Daily',
    arabicTitle: 'خبز طازج يومياً',
    description: 'We wake up early to bake your favorite pastries and bread, guaranteeing warm, soft, and delicious bites every morning.',
    arabicDescription: 'نستيقظ فجراً لنخبز معجناتكم المفضلة، لنضمن لكم لدغات طازجة وساخنة تليق بصباحكم كل يوم.'
  },
  {
    id: 'pil-2',
    title: 'Premium Ingredients',
    arabicTitle: 'مكونات فاخرة وممتازة',
    description: 'We source high-grade European butter, flour, organic eggs, and organic milk, combined with premium local components.',
    arabicDescription: 'نستورد أفخر أنواع الزبدة والدقيق الأوروبية والشوكولاتة البلجيكية، وندمجها مع أفضل المكونات المحلية الطازجة.'
  },
  {
    id: 'pil-3',
    title: 'Specialty Coffee',
    arabicTitle: 'قهوة مختصة ممتازة',
    description: 'Our coffee is carefully sourced from ethical single-origin farms, roasted with perfection, and extracted flawlessly.',
    arabicDescription: 'حبوب قهوة مختصة مختارة بعناية من مزارع فردية ومستدامة، محمصة باحتراف ومستخلصة بلمسة فنية.'
  },
  {
    id: 'pil-4',
    title: 'Artisan Sandwiches',
    arabicTitle: 'سندوتشات حرفية فاخرة',
    description: 'Fresh bagels and sourdough stuffed with gourmet roast beef, cured pastrami, fresh greens, and chef-made sauces.',
    arabicDescription: 'أرغفة خبز الباجل والساوردو المخبوزة لدينا، محشوة بالروست بيف المدخن والباسترامي مع صلصات مبتكرة.'
  },
  {
    id: 'pil-5',
    title: 'Friendly Staff',
    arabicTitle: 'فريق عمل ودود ومحترف',
    description: 'Our skilled baristas and bakers are dedicated to crafting each item with passion, serving you with a warm smile.',
    arabicDescription: 'صناع القهوة والخبازون لدينا يكرسون شغفهم لتحضير كل صنف، ويسعدون بتقديمها لكم بابتسامة دافئة ترحيبية.'
  },
  {
    id: 'pil-6',
    title: 'Comfortable Seating',
    arabicTitle: 'جلسات مريحة وراقية',
    description: 'A luxurious combination of velvet chairs, wooden accents, soft lighting, and serene outdoor patios to lounge in.',
    arabicDescription: 'مزيج فاخر من مقاعد المخمل الناعمة، اللمسات الخشبية الدافئة، الإضاءة المريحة، مع فناء خارجي هادئ للراحة.'
  },
  {
    id: 'pil-7',
    title: 'Fast Service',
    arabicTitle: 'خدمة سريعة ومميزة',
    description: 'Your time is valuable. We utilize highly efficient workflow mechanics to serve your coffee and artisan plates promptly.',
    arabicDescription: 'وقتكم ثمين لدينا. نعتمد على خطوات عمل بالغة الكفاءة لتقديم قهوتكم وأطباقكم الحرفية الساخنة دون تأخير.'
  },
  {
    id: 'pil-8',
    title: 'Delivery & Takeaway',
    arabicTitle: 'توصيل واستلام سريع',
    description: 'Enjoy our delicacies at home or on-the-go. Perfect packaging preserves heat, flavor, and visual aesthetic.',
    arabicDescription: 'استمتعوا بمنتجاتنا أينما كنتم. تغليف محكم وأنيق يحفظ الحرارة، المذاق والجمال البصري للمأكولات.'
  }
];
