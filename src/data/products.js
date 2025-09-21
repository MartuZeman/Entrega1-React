const productos = [
  {
    id: 1,
    title: "Auriculares Inalámbricos",
    price: 29999,
    imgURL: "https://picsum.photos/seed/headphones/400/400",
    stock: 15,
    category: "Tecnologia",
    description: "Auriculares Bluetooth con cancelación de ruido y hasta 20 horas de bateria."
  },
  {
    id: 2,
    title: "Notebook Gamer",
    price: 599999,
    imgURL: "https://picsum.photos/seed/laptop/400/400",
    stock: 8,
    category: "Tecnologia",
    description: "Notebook con procesador i7, 16GB RAM y RTX 3060."
  },
  {
    id: 3,
    title: "Cámara Fotográfica",
    price: 199999,
    imgURL: "https://picsum.photos/seed/camera/400/400",
    stock: 5,
    category: "Fotografia",
    description: "Cámara digital de alta resolución, ideal para profesionales."
  },
  {
    id: 4,
    title: "Smartphone Android",
    price: 249999,
    imgURL: "https://picsum.photos/seed/smartphone/400/400",
    stock: 12,
    category: "Tecnologia",
    description: "Pantalla AMOLED, cámara triple y 128GB de almacenamiento."
  },
  {
    id: 5,
    title: "Smartwatch Deportivo",
    price: 49999,
    imgURL: "https://picsum.photos/seed/smartwatch/400/400",
    stock: 20,
    category: "Tecnologia",
    description: "Reloj inteligente con GPS, sensor cardiaco y resistencia al agua."
  },
  {
    id: 6,
    title: "Silla Gamer",
    price: 89999,
    imgURL: "https://picsum.photos/seed/gaming-chair/400/400",
    stock: 10,
    category: "Hogar",
    description: "Silla ergonómica con apoyabrazos ajustables y respaldo reclinable."
  },
  {
    id: 7,
    title: "Zapatillas Running",
    price: 45999,
    imgURL: "https://picsum.photos/seed/sneakers/400/400",
    stock: 25,
    category: "Deportes",
    description: "Zapatillas deportivas con amortiguación y diseño liviano."
  },
  {
    id: 8,
    title: "Cafetera Espresso",
    price: 79999,
    imgURL: "https://picsum.photos/seed/coffee/400/400",
    stock: 7,
    category: "Hogar",
    description: "Cafetera automática para espresso y cappuccino."
  },
  {
    id: 9,
    title: "Mochila Urbana",
    price: 25999,
    imgURL: "https://picsum.photos/seed/backpack/400/400",
    stock: 18,
    category: "Accesorios",
    description: "Mochila resistente al agua con compartimiento para notebook."
  },
  {
    id: 10,
    title: "Parlante Bluetooth",
    price: 34999,
    imgURL: "https://picsum.photos/seed/speaker/400/400",
    stock: 22,
    category: "Tecnologia",
    description: "Sonido estéreo portátil con bateria de hasta 10 horas."
  },
  {
    id: 11,
    title: "Teclado Mecánico",
    price: 59999,
    imgURL: "https://picsum.photos/seed/keyboard/400/400",
    stock: 14,
    category: "Tecnologia",
    description: "Teclado gamer RGB con switches mecánicos de alta durabilidad."
  },
  {
    id: 12,
    title: "Mouse Gamer",
    price: 19999,
    imgURL: "https://picsum.photos/seed/mouse/400/400",
    stock: 30,
    category: "Tecnologia",
    description: "Mouse óptico con hasta 12 botones programables."
  },
  {
    id: 13,
    title: "Monitor 27''",
    price: 159999,
    imgURL: "https://picsum.photos/seed/monitor/400/400",
    stock: 9,
    category: "Tecnologia",
    description: "Monitor 2K IPS con 144Hz de refresco."
  },
  {
    id: 14,
    title: "Televisor 55'' 4K",
    price: 299999,
    imgURL: "https://picsum.photos/seed/television/400/400",
    stock: 6,
    category: "Tecnologia",
    description: "TV Smart 4K UHD con HDR y compatibilidad con apps de streaming."
  },
  {
    id: 15,
    title: "Bicicleta de Montaña",
    price: 199999,
    imgURL: "https://picsum.photos/seed/mountain-bike/400/400",
    stock: 11,
    category: "Deportes",
    description: "Bicicleta con cuadro de aluminio y frenos de disco hidráulicos."
  },
  {
    id: 16,
    title: "Patineta",
    price: 39999,
    imgURL: "https://picsum.photos/seed/skateboard/400/400",
    stock: 17,
    category: "Deportes",
    description: "Skateboard de madera con ruedas resistentes."
  },
  {
    id: 17,
    title: "Raqueta de Tenis",
    price: 29999,
    imgURL: "https://picsum.photos/seed/tennis/400/400",
    stock: 21,
    category: "Deportes",
    description: "Raqueta ligera con marco de grafito."
  },
  {
    id: 18,
    title: "Guitarra Acústica",
    price: 89999,
    imgURL: "https://picsum.photos/seed/guitar/400/400",
    stock: 8,
    category: "Música",
    description: "Guitarra de madera con un sonido cálido y resonante."
  },
  {
    id: 19,
    title: "Teclado Musical",
    price: 129999,
    imgURL: "https://picsum.photos/seed/piano/400/400",
    stock: 6,
    category: "Música",
    description: "Teclado digital con 61 teclas y múltiples sonidos."
  },
  {
    id: 20,
    title: "Bateria Electrónica",
    price: 249999,
    imgURL: "https://picsum.photos/seed/drums/400/400",
    stock: 4,
    category: "Música",
    description: "Bateria electrónica compacta con conectividad MIDI."
  },
  {
    id: 21,
    title: "Lámpara de Escritorio",
    price: 14999,
    imgURL: "https://picsum.photos/seed/lamp/400/400",
    stock: 28,
    category: "Hogar",
    description: "Lámpara LED ajustable con puerto USB."
  },
  {
    id: 22,
    title: "Reloj de Pared",
    price: 9999,
    imgURL: "https://picsum.photos/seed/clock/400/400",
    stock: 35,
    category: "Hogar",
    description: "Reloj minimalista con diseño moderno."
  },
  {
    id: 23,
    title: "Juego de Ollas",
    price: 69999,
    imgURL: "https://picsum.photos/seed/cookware/400/400",
    stock: 10,
    category: "Hogar",
    description: "Set de ollas de acero inoxidable con tapas de vidrio."
  },
  {
    id: 24,
    title: "Colchón Queen Size",
    price: 249999,
    imgURL: "https://picsum.photos/seed/bed/400/400",
    stock: 5,
    category: "Hogar",
    description: "Colchón ortopédico con resortes encapsulados."
  },
  {
    id: 25,
    title: "Mesa de Comedor",
    price: 179999,
    imgURL: "https://picsum.photos/seed/dining-table/400/400",
    stock: 3,
    category: "Hogar",
    description: "Mesa de madera maciza para seis personas."
  },
  {
    id: 26,
    title: "Sofá 3 Cuerpos",
    price: 229999,
    imgURL: "https://picsum.photos/seed/sofa/400/400",
    stock: 4,
    category: "Hogar",
    description: "Sofá tapizado en tela resistente con almohadones incluidos."
  },
  {
    id: 27,
    title: "Vestido de Verano",
    price: 34999,
    imgURL: "https://picsum.photos/seed/dress/400/400",
    stock: 20,
    category: "Moda",
    description: "Vestido ligero y elegante para ocasiones casuales."
  },
  {
    id: 28,
    title: "Campera de Cuero",
    price: 99999,
    imgURL: "https://picsum.photos/seed/jacket/400/400",
    stock: 7,
    category: "Moda",
    description: "Campera de cuero genuino con diseño clásico."
  },
  {
    id: 29,
    title: "Bolso de Mano",
    price: 45999,
    imgURL: "https://picsum.photos/seed/handbag/400/400",
    stock: 13,
    category: "Moda",
    description: "Bolso elegante de cuero sintético con compartimientos internos."
  },
  {
    id: 30,
    title: "Gorra Casual",
    price: 14999,
    imgURL: "https://picsum.photos/seed/cap/400/400",
    stock: 19,
    category: "Moda",
    description: "Gorra ajustable estilo urbano para uso diario."
  }
];

export default productos;
