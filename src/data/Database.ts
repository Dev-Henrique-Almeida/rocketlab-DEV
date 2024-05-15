export const products = [
  {
    id: "1",
    name: "GPU RTX 3080",
    price: 699.99 * 5.5,
    description:
      "A NVIDIA GeForce RTX 3080 oferece desempenho excepcional para gamers e criadores. Equipada com 10GB GDDR6X, possui Ray Tracing em tempo real e suporte a DLSS, proporcionando gráficos realistas e desempenho superior. Especificações técnicas: Memória: 10GB GDDR6X, Núcleos CUDA: 8704, Clock base: 1.44 GHz, Clock boost: 1.71 GHz, Consumo de energia: 320W, Conectores: 2x HDMI 2.1, 3x DisplayPort 1.4a.",
    image: "/images/rtx3080.png",
    category: "Placas de Vídeo",
  },
  {
    id: "2",
    name: "Intel i9 Processor",
    price: 489.99 * 5.5,
    description:
      "O processador Intel Core i9-11900K é ideal para usuários que buscam alta performance em jogos e aplicações profissionais. Com 8 núcleos e 16 threads, ele alcança velocidades de até 5.3 GHz. Especificações técnicas: Arquitetura: Rocket Lake, Núcleos/Threads: 8/16, Frequência base: 3.5 GHz, Frequência turbo: 5.3 GHz, Cache: 16MB, TDP: 125W, Suporte a memória: DDR4-3200.",
    image: "/images/i9.jpg",
    category: "Processadores",
  },
  {
    id: "3",
    name: "32GB DDR4 RAM",
    price: 149.99 * 5.5,
    description:
      "O Kit de Memória RAM Corsair Vengeance de 32GB (2x16GB) DDR4 3200 MHz oferece desempenho excepcional para multitarefa e jogos. Com latência baixa e compatibilidade com as mais recentes plataformas Intel e AMD. Especificações técnicas: Capacidade: 32GB (2x16GB), Tipo: DDR4, Velocidade: 3200 MHz, Latência: CL16, Tensão: 1.35V, Dissipador de calor: Sim.",
    image: "/images/ram32gb.png",
    category: "Memória RAM",
  },
  {
    id: "4",
    name: "Placa Mãe ASUS X570",
    price: 299.99 * 5.5,
    description:
      "A Placa Mãe ASUS ROG Strix X570-E Gaming é compatível com processadores Ryzen 5000 e oferece múltiplos slots PCIe 4.0, suporte a overclocking e uma série de recursos avançados para gamers e entusiastas. Especificações técnicas: Chipset: AMD X570, Soquete: AM4, Memória: 4x DDR4 até 128GB, Slots PCIe: 2x PCIe 4.0 x16, Armazenamento: 2x M.2, 8x SATA 6Gb/s, Conectividade: Wi-Fi 6, Bluetooth 5.0, Portas USB: 8x USB 3.2 Gen 2, 4x USB 2.0.",
    image: "/images/asus-x570.png",
    category: "Placas Mãe",
  },
  {
    id: "5",
    name: "SSD NVMe 1TB",
    price: 129.99 * 5.5,
    description:
      "O SSD NVMe Samsung 980 PRO de 1TB oferece velocidades de leitura de até 7000MB/s, reduzindo drasticamente os tempos de carregamento. Ideal para gamers e profissionais que buscam desempenho superior. Especificações técnicas: Capacidade: 1TB, Interface: PCIe 4.0 x4, Velocidade de leitura: 7000MB/s, Velocidade de gravação: 5000MB/s, Tecnologia NAND: V-NAND 3-bit MLC, Formato: M.2 (2280).",
    image: "/images/ssd-nvme.png",
    category: "Armazenamento",
  },
  {
    id: "6",
    name: "AMD Ryzen 7 5800X",
    price: 449.99 * 5.5,
    description:
      "O processador AMD Ryzen 7 5800X com 8 núcleos e 16 threads, clock de 3.8 GHz que alcança até 4.7 GHz, é ideal para gamers e criadores de conteúdo. Especificações técnicas: Arquitetura: Zen 3, Núcleos/Threads: 8/16, Frequência base: 3.8 GHz, Frequência turbo: 4.7 GHz, Cache: 32MB, TDP: 105W, Suporte a memória: DDR4-3200.",
    image: "/images/ryzen7-5800x.png",
    category: "Processadores",
  },
  {
    id: "7",
    name: "Monitor Gamer Alienware 240Hz",
    price: 379.99 * 5.5,
    description:
      "O monitor gamer Alienware de 27 polegadas com taxa de atualização de 240Hz e tempo de resposta de 1ms oferece imagens ultra suaves. Ideal para gamers profissionais. Especificações técnicas: Tamanho: 27 polegadas, Resolução: 1920x1080 (Full HD), Taxa de atualização: 240Hz, Tempo de resposta: 1ms, Tipo de painel: IPS, Conectividade: 1x HDMI, 1x DisplayPort, Ajuste de altura, inclinação e rotação.",
    image: "/images/alienware-monitor.png",
    category: "Monitores",
  },
  {
    id: "8",
    name: "Teclado Mecânico Corsair K95",
    price: 199.99 * 5.5,
    description:
      "O teclado mecânico Corsair K95 RGB Platinum possui teclas Cherry MX Speed, retroiluminação RGB e barra de macro dedicada. Ideal para gamers e profissionais que buscam desempenho e personalização. Especificações técnicas: Tipo de tecla: Cherry MX Speed, Retroiluminação: RGB, Macro: 6 teclas dedicadas, Conectividade: USB, Material: Alumínio escovado, Descanso de pulso: Sim, removível.",
    image: "/images/corsair-k95.png",
    category: "Periféricos",
  },
  {
    id: "9",
    name: "Mouse Gamer Logitech G502",
    price: 49.99 * 5.5,
    description:
      "O mouse gamer Logitech G502 HERO com sensor de 16000 DPI, 11 botões programáveis e ajuste de peso personalizado. Especificações técnicas: Sensor: HERO 16K, DPI: 100 - 16,000, Botões: 11 programáveis, Conectividade: USB, Iluminação: RGB, Ajuste de peso: Sim.",
    image: "/images/logitech-g502.png",
    category: "Periféricos",
  },
  {
    id: "10",
    name: "Cadeira Gamer DXRacer",
    price: 299.99 * 5.5,
    description:
      "A cadeira gamer DXRacer Formula Series com design ergonômico, suporte lombar e capacidade de reclinação para conforto máximo. Especificações técnicas: Material: Couro sintético, Suporte lombar: Sim, Capacidade de reclinação: 90-135 graus, Altura ajustável: Sim, Peso máximo suportado: 120 kg.",
    image: "/images/dxracer-chair.png",
    category: "Mobiliário Gamer",
  },
  {
    id: "11",
    name: "Headset HyperX Cloud II",
    price: 99.99 * 5.5,
    description:
      "O headset HyperX Cloud II com som surround 7.1, microfone removível e conforto acolchoado, é ideal para longas sessões de jogos. Especificações técnicas: Som: Surround 7.1, Microfone: Removível, Conectividade: USB, Jack 3.5mm, Conforto: Espuma de memória, Compatibilidade: PC, PS4, Xbox One, Mobile.",
    image: "/images/hyperx-cloud2.png",
    category: "Periféricos",
  },
  {
    id: "12",
    name: "Webcam Logitech C920",
    price: 79.99 * 5.5,
    description:
      "A webcam HD Pro Logitech C920 com gravação em 1080p, foco automático e correção de luz HD, oferece chamadas e transmissões de alta qualidade. Especificações técnicas: Resolução: 1080p (Full HD), Microfone: Estéreo integrado, Conectividade: USB, Foco: Automático, Correção de luz: HD, Compatibilidade: PC, Mac.",
    image: "/images/logitech-c920.png",
    category: "Periféricos",
  },
  {
    id: "13",
    name: "Gabinete NZXT H510",
    price: 119.99 * 5.5,
    description:
      "O gabinete NZXT H510 possui painel lateral em vidro temperado, gestão simplificada de cabos e suporte para refrigeração líquida. Especificações técnicas: Tipo: Mid Tower, Compatibilidade: ATX, Micro-ATX, Mini-ITX, Slots de expansão: 7, Armazenamento: 2x 2.5”, 2x 3.5”, Painel frontal: 2x USB 3.0, 1x USB 3.1 Tipo-C, 1x Jack de áudio.",
    image: "/images/nzxt-h510.png",
    category: "Gabinetes",
  },
  {
    id: "14",
    name: "Fonte de Alimentação Corsair 750W",
    price: 129.99 * 5.5,
    description:
      "A fonte de alimentação Corsair CX750F RGB de 750 watts, com certificação 80 Plus Bronze e iluminação RGB customizável, é ideal para setups gamers. Especificações técnicas: Potência: 750W, Certificação: 80 Plus Bronze, Modularidade: Parcialmente modular, Ventoinha: 120mm RGB, Conectores: 1x ATX, 1x EPS, 6x PCIe, 8x SATA, 4x Molex.",
    image: "/images/corsair-psu-750w.png",
    category: "Fontes de Alimentação",
  },
  {
    id: "15",
    name: "Cooler para CPU Cooler Master Hyper 212",
    price: 39.99 * 5.5,
    description:
      "O Cooler para CPU Cooler Master Hyper 212 RGB Black Edition com suporte a diversos soquetes e iluminação RGB. Especificações técnicas: Tipo: Air Cooler, Ventoinha: 120mm RGB, Soquetes: Intel LGA 2066/2011-v3/2011/1200/1151/1150/1155/1156, AMD AM4/AM3+/AM3/AM2+/AM2/FM2+/FM2/FM1, Altura: 158.8mm.",
    image: "/images/cooler-master-hyper-212.png",
    category: "Coolers",
  },
  {
    id: "16",
    name: "SSD Externo Samsung T5 1TB",
    price: 139.99 * 5.5,
    description:
      "O SSD externo Samsung T5 de 1TB, com velocidades de transferência de até 540 MB/s, é resistente a choques e compacto. Especificações técnicas: Capacidade: 1TB, Interface: USB 3.1 Gen 2, Velocidade de transferência: 540 MB/s, Resistência: Choques até 2m, Peso: 51g, Dimensões: 74 x 57.3 x 10.5mm.",
    image: "/images/samsung-t5.jpeg",
    category: "Armazenamento",
  },
  {
    id: "17",
    name: "Monitor Dell Ultrasharp 4K",
    price: 499.99 * 5.5,
    description:
      "O monitor Dell Ultrasharp de 32 polegadas 4K UHD, com espaço de cores Adobe RGB e sRGB, é ideal para profissionais de design e fotografia. Especificações técnicas: Tamanho: 32 polegadas, Resolução: 3840x2160 (4K UHD), Tipo de painel: IPS, Gama de cores: 100% sRGB, 99% Adobe RGB, Conectividade: 1x HDMI, 1x DisplayPort, 1x USB-C, Ajuste de altura, inclinação e rotação.",
    image: "/images/dell-ultrasharp-4k.png",
    category: "Monitores",
  },
  {
    id: "18",
    name: "Placa de Vídeo AMD Radeon RX 6700 XT",
    price: 479.99 * 5.5,
    description:
      "A Placa de Vídeo AMD Radeon RX 6700 XT com 12GB GDDR6, Ray Tracing, e 2560 cores de streaming oferece excelente experiência em jogos em 1440p. Especificações técnicas: Memória: 12GB GDDR6, Núcleos: 2560, Clock base: 2.32 GHz, Clock boost: 2.58 GHz, Consumo de energia: 230W, Conectores: 1x HDMI 2.1, 3x DisplayPort 1.4a.",
    image: "/images/radeon-rx-6700-xt.png",
    category: "Placas de Vídeo",
  },
  {
    id: "19",
    name: "Monitor Curvo Samsung Odyssey G9",
    price: 1399.99 * 5.5,
    description:
      "O monitor curvo Samsung Odyssey G9 de 49 polegadas, com taxa de atualização de 240Hz, tempo de resposta de 1ms, e resolução Dual QHD (5120x1440), proporciona uma experiência de jogo imersiva com tecnologia QLED. Especificações técnicas: Tamanho: 49 polegadas, Resolução: 5120x1440 (Dual QHD), Taxa de atualização: 240Hz, Tempo de resposta: 1ms, Tipo de painel: QLED, Conectividade: 1x HDMI, 2x DisplayPort, 1x USB.",
    image: "/images/samsung-odyssey-g9.png",
    category: "Monitores",
  },
  {
    id: "20",
    name: "Placa de Vídeo NVIDIA GeForce RTX 3090",
    price: 1499.99 * 5.5,
    description:
      "A Placa de Vídeo NVIDIA GeForce RTX 3090 com 24GB GDDR6X, suporta Ray Tracing, DLSS AI Acceleration, e resoluções de até 8K, oferecendo a mais avançada experiência em jogos e criação de conteúdo. Especificações técnicas: Memória: 24GB GDDR6X, Núcleos CUDA: 10496, Clock base: 1.4 GHz, Clock boost: 1.7 GHz, Consumo de energia: 350W, Conectores: 1x HDMI 2.1, 3x DisplayPort 1.4a.",
    image: "/images/nvidia-rtx-3090.png",
    category: "Placas de Vídeo",
  },
];
