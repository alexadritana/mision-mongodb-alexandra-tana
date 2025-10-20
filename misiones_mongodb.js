// ========================================
// FASE 2: BESTIARIO DIGITAL - MONGODB
// Alumna: Alexandra Tana
// ========================================

// Usar la base de datos 'bestiario'
use('bestiario');

// ========================================
// INSERCIÓN (CREATE)
// ========================================

// Insertar UNA criatura con insertOne()
db.criaturas.insertOne({
  nombre: "Dragón de Fuego",
  habitat: "Montañas Volcánicas",
  nivel_peligro: 10,
  dieta: ["rocas", "caballeros"],
  habilidades: ["vuelo", "aliento de fuego", "garras afiladas"],
  estadisticas: {
    ataque: 95,
    defensa: 80,
    velocidad: 70
  },
  descubierto_por: "Eldrin el Valiente",
  fecha_descubrimiento: new Date("2024-01-15")
});

// Insertar VARIAS criaturas con insertMany()
db.criaturas.insertMany([
  {
    nombre: "Fénix Estelar",
    habitat: "Bosque Encantado",
    nivel_peligro: 7,
    dieta: ["frutas mágicas", "néctar celestial"],
    habilidades: ["resurrección", "vuelo", "canto hipnótico"],
    estadisticas: {
      ataque: 60,
      defensa: 50,
      velocidad: 90
    },
    descubierto_por: "Luna la Sabia"
  },
  {
    nombre: "Leviatán de las Profundidades",
    habitat: "Océano Abismal",
    nivel_peligro: 9,
    dieta: ["peces gigantes", "barcos"],
    habilidades: ["control de agua", "torbellino", "camuflaje marino"],
    cabezas: 3,
    descubierto_por: "Capitán Nereus"
  },
  {
    nombre: "Unicornio Sombrío",
    habitat: "Bosque Encantado",
    nivel_peligro: 4,
    dieta: ["hierbas luminosas", "flores de luna"],
    habilidades: ["curación", "teletransportación", "purificación"],
    estadisticas: {
      ataque: 30,
      defensa: 40,
      velocidad: 85
    },
    descubierto_por: "Aria la Curadora"
  },
  {
    nombre: "Gólem de Cristal",
    habitat: "Cuevas de Cristal",
    nivel_peligro: 8,
    dieta: ["minerales", "gemas"],
    habilidades: ["resistencia mágica", "proyección de cristales", "regeneración"],
    estadisticas: {
      ataque: 75,
      defensa: 95,
      velocidad: 20
    },
    descubierto_por: "Thorgrim el Minero",
    inmune_a: ["fuego", "veneno"]
  }
]);

// ========================================
// LECTURA (READ)
// ========================================

// 1. Mostrar TODAS las criaturas
print("\n=== TODAS LAS CRIATURAS ===");
db.criaturas.find().forEach(printjson);

// 2. Criaturas de un habitat específico (Bosque Encantado)
print("\n=== CRIATURAS DEL BOSQUE ENCANTADO ===");
db.criaturas.find({ habitat: "Bosque Encantado" }).forEach(printjson);

// 3. Criaturas con nivel de peligro mayor a 8
print("\n=== CRIATURAS MUY PELIGROSAS (nivel > 8) ===");
db.criaturas.find({ nivel_peligro: { $gt: 8 } }).forEach(printjson);

// ========================================
// ACTUALIZACIÓN (UPDATE)
// ========================================

// 1. Añadir una nueva habilidad al Dragón de Fuego con updateOne()
print("\n=== ACTUALIZANDO DRAGÓN DE FUEGO ===");
db.criaturas.updateOne(
  { nombre: "Dragón de Fuego" },
  { $push: { habilidades: "escamas impenetrables" } }
);

// Verificar la actualización
db.criaturas.find({ nombre: "Dragón de Fuego" }).forEach(printjson);

// 2. Incrementar nivel de peligro de todas las criaturas del Bosque Encantado
print("\n=== INCREMENTANDO PELIGRO DEL BOSQUE ENCANTADO ===");
db.criaturas.updateMany(
  { habitat: "Bosque Encantado" },
  { $inc: { nivel_peligro: 1 } }
);

// Verificar la actualización
db.criaturas.find({ habitat: "Bosque Encantado" }).forEach(printjson);

print("\n=== MISIÓN COMPLETADA ===");