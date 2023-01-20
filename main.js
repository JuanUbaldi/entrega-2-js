class Clima {
  constructor(
    nombre,
    pais,
    id,
    mar,
    temperaturaEnero,
    temperaturaAbril,
    temperaturaJulio,
    temperaturaSeptiembre,
    lluviaEnero,
    lluviaAbril,
    lluviaJulio,
    lluviaSeptiembre,
    diasSolEnero,
    diasSolJulio,
    nieve,
    huracanes,
    tornados
  ) {
    this.nombre = nombre;
    this.pais = pais;
    this.id = id;
    this.mar = mar;
    this.temperaturaEnero = temperaturaEnero;
    this.temperaturaAbril = temperaturaAbril;
    this.temperaturaJulio = temperaturaJulio;
    this.temperaturaSeptiembre = temperaturaSeptiembre;
    this.lluviaEnero = lluviaEnero;
    this.lluviaAbril = lluviaAbril;
    this.lluviaJulio = lluviaJulio;
    this.lluviaSeptiembre = lluviaSeptiembre;
    this.diasSolEnero = diasSolEnero;
    this.diasSolJulio = diasSolJulio;
    this.nieve = nieve;
    this.huracanes = huracanes;
    this.Tornados = tornados;
  }
}

const ciudades = [];
ciudades.push(
  new Clima(
    "roma",
    "italia",
    1,
    true,
    10,
    15,
    25,
    19,
    150,
    300,
    370,
    450,
    18,
    30,
    true,
    false,
    true
  )
),
  ciudades.push(
    new Clima(
      "londres",
      "Reino Unido",
      2,
      true,
      6,
      11,
      24,
      16,
      100,
      330,
      340,
      650,
      4,
      18,
      true,
      false,
      true
    )
  );
ciudades.push(
  new Clima(
    "paris",
    "Francia",
    3,
    false,
    8,
    13,
    25,
    16,
    150,
    370,
    470,
    550,
    10,
    23,
    true,
    false,
    true
  )
);
ciudades.push(
  new Clima(
    "oslo",
    "Noruega",
    4,
    true,
    0,
    3,
    20,
    10,
    250,
    360,
    370,
    550,
    0,
    26,
    true,
    false,
    false
  )
);
ciudades.push(
  new Clima(
    "reikjavik",
    "Islandia",
    5,
    true,
    0,
    2,
    7,
    3,
    150,
    200,
    470,
    850,
    0,
    28,
    true,
    false,
    false
  )
);
ciudades.push(
  new Clima(
    "casablanca",
    "Marruecos",
    6,
    false,
    14,
    15,
    25,
    19,
    150,
    100,
    70,
    50,
    24,
    30,
    false,
    false,
    false
  )
);
ciudades.push(
  new Clima(
    "Moscu",
    "Rusia",
    7,
    false,
    -1,
    5,
    15,
    9,
    150,
    200,
    170,
    150,
    10,
    18,
    true,
    false,
    false
  )
);
ciudades.push(
  new Clima(
    "El Cabo",
    "Sudafrica",
    8,
    true,
    28,
    15,
    10,
    19,
    250,
    300,
    470,
    350,
    20,
    18,
    false,
    false,
    true
  )
);
ciudades.push(
  new Clima(
    "Tripoli",
    "Libia",
    9,
    true,
    10,
    15,
    25,
    19,
    50,
    100,
    70,
    20,
    20,
    28,
    false,
    false,
    false
  )
);
ciudades.push(
  new Clima(
    "Niger",
    "Nigeria",
    10,
    true,
    30,
    25,
    25,
    30,
    350,
    500,
    470,
    450,
    25,
    25,
    false,
    false,
    false
  )
),
  ciudades.push(
    new Clima(
      "sidney",
      "Australia",
      11,
      true,
      25,
      15,
      10,
      19,
      350,
      300,
      470,
      350,
      25,
      8,
      false,
      false,
      true
    )
  ),
  ciudades.push(
    new Clima(
      "Darwin",
      "Australia",
      12,
      true,
      30,
      30,
      25,
      29,
      450,
      400,
      570,
      450,
      20,
      18,
      false,
      true,
      false
    )
  ),
  ciudades.push(
    new Clima(
      "Bangkok",
      "Tailandia",
      13,
      true,
      28,
      25,
      28,
      29,
      850,
      600,
      370,
      550,
      20,
      18,
      false,
      true,
      false
    )
  ),
  ciudades.push(
    new Clima(
      "Nueva Dheli",
      "India",
      14,
      false,
      25,
      25,
      25,
      25,
      350,
      350,
      370,
      550,
      28,
      28,
      false,
      true,
      true
    )
  ),
  ciudades.push(
    new Clima(
      "Dacca",
      "Bangladesh",
      15,
      true,
      24,
      20,
      25,
      19,
      650,
      700,
      370,
      650,
      20,
      18,
      false,
      true,
      true
    )
  ),
  ciudades.push(
    new Clima(
      "Damasco",
      "Siria",
      16,
      true,
      8,
      13,
      35,
      19,
      50,
      100,
      70,
      20,
      20,
      30,
      false,
      false,
      false
    )
  ),
  ciudades.push(
    new Clima(
      "Nueva york",
      "EE. UU.",
      17,
      true,
      2,
      15,
      29,
      19,
      350,
      400,
      470,
      200,
      10,
      22,
      true,
      true,
      true
    )
  ),
  ciudades.push(
    new Clima(
      "Mexico",
      "Mexico",
      18,
      false,
      10,
      14,
      25,
      19,
      150,
      100,
      270,
      150,
      22,
      30,
      false,
      false,
      false
    )
  ),
  ciudades.push(
    new Clima(
      "Rio de janeiro",
      "Brasil",
      19,
      true,
      32,
      25,
      25,
      29,
      350,
      400,
      270,
      350,
      25,
      20,
      false,
      false,
      false
    )
  ),
  ciudades.push(
    new Clima(
      "Lima",
      "Peru",
      20,
      true,
      10,
      15,
      25,
      28,
      10,
      4,
      15,
      25,
      4,
      4,
      false,
      false,
      false
    )
  );
ciudades.push(
  new Clima(
    "Buenos Aires",
    "Argentina",
    21,
    false,
    29,
    15,
    25,
    19,
    450,
    300,
    260,
    350,
    20,
    15,
    true,
    false,
    true
  )
);
let bienvenida = alert("bienvenidos a la app climatica");

alert("si buscas ciudades calidas en enero, estas tienen mas de 25° dicho mes");
const filtradoEnero1 = ciudades.filter((ciudad) => {
  return ciudad.temperaturaEnero > 25;
});
let lista1 = "";
for (let i = 0; i < filtradoEnero1.length; i++) {
  console.log(filtradoEnero1.length);
  lista1 = lista1 + filtradoEnero1[i].nombre + "\n";
}

alert(lista1);

alert("si buscas ciudades frias en enero, estas tienen menos de 7° dicho mes");
const filtradoEnero2 = ciudades.filter((ciudad) => {
  return ciudad.temperaturaEnero < 7;
});
let lista2 = "";
for (let i = 0; i < filtradoEnero2.length; i++) {
  console.log(filtradoEnero2.length);
  lista2 = lista2 + filtradoEnero2[i].nombre + "\n";
}

alert(lista2);

alert(
  "como elejimos ciudades de distintas partes del mundo, sus temperaturas representarian el promedio mundial"
);

const temperaturaPromedioEnero = ciudades.reduce((acc, ciudad) => {
  return acc + ciudad.temperaturaEnero;
}, 0);
alert(
  "la temperatura mundial promedio del Mes de enero es : " +
    Math.round(temperaturaPromedioEnero / 21) +
    "°"
);

//arme un array con objetos instanciados con un constructor
//use un metodo filter
//use el metodo reduce
//use Math
