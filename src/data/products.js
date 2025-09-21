const productos = [
  {
    id: 1,
    title: "Auriculares Inalámbricos",
    price: 29999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_838472-MLA81033220636_122024-F.webp",
    stock: 15,
    category: "Tecnologia",
    description: "Auriculares Bluetooth con cancelación de ruido y hasta 20 horas de bateria."
  },
  {
    id: 2,
    title: "Notebook Gamer",
    price: 599999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_916839-MLA91572565934_092025-F.webp",
    stock: 8,
    category: "Tecnologia",
    description: "Notebook con procesador i7, 16GB RAM y RTX 3060."
  },
  {
    id: 3,
    title: "Cámara Fotográfica",
    price: 199999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_789131-MLA91558366332_092025-F.webp",
    stock: 5,
    category: "Fotografia",
    description: "Cámara digital de alta resolución, ideal para profesionales."
  },
  {
    id: 4,
    title: "Smartphone Android",
    price: 249999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_810143-MLU74221484629_012024-F.webp",
    stock: 12,
    category: "Tecnologia",
    description: "Pantalla AMOLED, cámara triple y 128GB de almacenamiento."
  },
  {
    id: 5,
    title: "Smartwatch Deportivo",
    price: 49999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_757003-MLA88557031760_072025-F.webp",
    stock: 20,
    category: "Tecnologia",
    description: "Reloj inteligente con GPS, sensor cardiaco y resistencia al agua."
  },
  {
    id: 6,
    title: "Silla Gamer",
    price: 89999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_600970-MLA83034915877_032025-F.webp",
    stock: 10,
    category: "Hogar",
    description: "Silla ergonómica con apoyabrazos ajustables y respaldo reclinable."
  },
  {
    id: 7,
    title: "Zapatillas Running",
    price: 45999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_852969-MLA82476276871_022025-F.webp",
    stock: 25,
    category: "Deportes",
    description: "Zapatillas deportivas con amortiguación y diseño liviano."
  },
  {
    id: 8,
    title: "Cafetera Espresso",
    price: 79999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_943076-MLU77738040185_072024-F.webp",
    stock: 7,
    category: "Hogar",
    description: "Cafetera automática para espresso y cappuccino."
  },
  {
    id: 9,
    title: "Mochila Urbana",
    price: 25999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_968727-MLA83622632297_042025-F.webp",
    stock: 18,
    category: "Accesorios",
    description: "Mochila resistente al agua con compartimiento para notebook."
  },
  {
    id: 10,
    title: "Parlante Bluetooth",
    price: 34999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_932549-MLA91921503599_092025-F.webp",
    stock: 22,
    category: "Tecnologia",
    description: "Sonido estéreo portátil con bateria de hasta 10 horas."
  },
  {
    id: 11,
    title: "Teclado Mecánico",
    price: 59999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_814470-MLA74651536320_022024-F.webp",
    stock: 14,
    category: "Tecnologia",
    description: "Teclado gamer RGB con switches mecánicos de alta durabilidad."
  },
  {
    id: 12,
    title: "Mouse Gamer",
    price: 19999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_975532-MLA82267016152_022025-F.webp",
    stock: 30,
    category: "Tecnologia",
    description: "Mouse óptico con hasta 12 botones programables."
  },
  {
    id: 13,
    title: "Monitor 27''",
    price: 159999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_774337-MLA79436259346_102024-F.webp",
    stock: 9,
    category: "Tecnologia",
    description: "Monitor 2K IPS con 144Hz de refresco."
  },
  {
    id: 14,
    title: "Televisor 55'' 4K",
    price: 299999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_929985-MLA90140556206_082025-F.webp",
    stock: 6,
    category: "Tecnologia",
    description: "TV Smart 4K UHD con HDR y compatibilidad con apps de streaming."
  },
  {
    id: 15,
    title: "Bicicleta de Montaña",
    price: 199999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_813861-MLA71588894063_092023-F.webp",
    stock: 11,
    category: "Deportes",
    description: "Bicicleta con cuadro de aluminio y frenos de disco hidráulicos."
  },
  {
    id: 16,
    title: "Patineta",
    price: 39999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_737208-MLA91840754212_092025-F.webp",
    stock: 17,
    category: "Deportes",
    description: "Skateboard de madera con ruedas resistentes."
  },
  {
    id: 17,
    title: "Raqueta de Tenis",
    price: 29999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_919861-MLU74049185490_012024-F.webp",
    stock: 21,
    category: "Deportes",
    description: "Raqueta ligera con marco de grafito."
  },
  {
    id: 18,
    title: "Guitarra Acústica",
    price: 89999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_828746-MLA84852630219_052025-F.webp",
    stock: 8,
    category: "Música",
    description: "Guitarra de madera con un sonido cálido y resonante."
  },
  {
    id: 19,
    title: "Teclado Musical",
    price: 129999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_993848-MLA89472501109_082025-F.webp",
    stock: 6,
    category: "Música",
    description: "Teclado digital con 61 teclas y múltiples sonidos."
  },
  {
    id: 20,
    title: "Bateria Electrónica",
    price: 249999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_960603-MLA84856301863_052025-F.webp",
    stock: 4,
    category: "Música",
    description: "Bateria electrónica compacta con conectividad MIDI."
  },
  {
    id: 21,
    title: "Lámpara de Escritorio",
    price: 14999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_681895-MLA84620625663_052025-F.webp",
    stock: 28,
    category: "Hogar",
    description: "Lámpara LED ajustable con puerto USB."
  },
  {
    id: 22,
    title: "Reloj de Pared",
    price: 9999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_680582-MLU73201363385_122023-F.webp",
    stock: 35,
    category: "Hogar",
    description: "Reloj minimalista con diseño moderno."
  },
  {
    id: 23,
    title: "Juego de Ollas",
    price: 69999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_675772-MLU78704781736_092024-F.webp",
    stock: 10,
    category: "Hogar",
    description: "Set de ollas de acero inoxidable con tapas de vidrio."
  },
  {
    id: 24,
    title: "Colchón Queen Size",
    price: 249999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_825322-MLA86398215490_062025-F.webp",
    stock: 5,
    category: "Hogar",
    description: "Colchón ortopédico con resortes encapsulados."
  },
  {
    id: 25,
    title: "Mesa de Comedor",
    price: 179999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_803557-MLA91541658702_092025-F.webp",
    stock: 3,
    category: "Hogar",
    description: "Mesa de madera maciza para seis personas."
  },
  {
    id: 26,
    title: "Sofá 3 Cuerpos",
    price: 229999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_774414-MLA81633524907_122024-F.webp",
    stock: 4,
    category: "Hogar",
    description: "Sofá tapizado en tela resistente con almohadones incluidos."
  },
  {
    id: 27,
    title: "Vestido de Verano",
    price: 34999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_846276-MLA80309008823_102024-F.webp",
    stock: 20,
    category: "Moda",
    description: "Vestido ligero y elegante para ocasiones casuales."
  },
  {
    id: 28,
    title: "Campera de Cuero",
    price: 99999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_883878-MLA87312629035_072025-F.webp",
    stock: 7,
    category: "Moda",
    description: "Campera de cuero genuino con diseño clásico."
  },
  {
    id: 29,
    title: "Bolso de Mano",
    price: 45999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_634478-MLA84534271176_052025-F.webp",
    stock: 13,
    category: "Moda",
    description: "Bolso elegante de cuero sintético con compartimientos internos."
  },
  {
    id: 30,
    title: "Gorra Casual",
    price: 14999,
    imgURL: "https://http2.mlstatic.com/D_NQ_NP_2X_600719-MLA90428142557_082025-F.webp",
    stock: 19,
    category: "Moda",
    description: "Gorra ajustable estilo urbano para uso diario."
  }
];

export default productos;
