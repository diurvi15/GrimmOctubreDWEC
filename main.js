const wesensIniciales = [
    {
        id: 1,
        name: "Willahara",
        image: "images/willahara.png",
        type: "lobo",
        peligrosidad: "peligroso",
        aspecto: "Criaturas muy pasivas, no les gusta estar frente incluso a otros Wesen",
        notas: "Se sabe que Willahara es una especie Wesen especialmente fértil, capaz de producir un gran número de crías."
    },
    {
        id: 2,
        name: "Anubis",
        image: "images/anubis.png",
        type: "cánido",
        peligrosidad: "pacífico",
        aspecto: "Pierde en su totalidad el cabello y vello facial quedando su piel de un color beige o café claro.",
        notas: "Wesen muy fuerte de raíces egipcias. Se les conoce por ser protectores de los muertos y respetuoso hacias sus artefactos."
    },
    {
        id: 3,
        name: "Höllentier",
        image: "images/höllentier.png",
        type: "cánido",
        peligrosidad: "neutral",
        aspecto: "Wesen parecido a un perro con escamas.Tiene ojos rojos, orejas grandes y puntiagudas y dientes afilados",
        notas: "No poseen una gran inteligencia y tampoco saben a que temerle debido a esto."
    },
    {
        id: 4,
        name: "Indole Gentile",
        image: "images/indole_Gentile.png",
        type: "monstruo",
        peligrosidad: "pacífico",
        aspecto: "Gana ojos grandes con pupilas oscuras y cejas largas y finas",
        notas: "No parecen poseer ninguna mejora física"
    },
    {
        id: 5,
        name: "Kitsune",
        image: "images/kitsune.png",
        type: "felino",
        peligrosidad: "peligroso",
        aspecto: "Pelaje largo y blanco, ojos azules brillantes y brillantes, dos orejas alargadas y puntiagudas",
        notas: "Sus manos, sin embargo, no se ven afectadas por su transformación"
    },
    {
        id: 6,
        name: "Lausenschlange",
        image: "images/lausenschlange.png",
        type: "reptil",
        peligrosidad: "peligroso",
        aspecto: "El cuerpo adquiere escamas amarillentas o de color gris verdoso y un patrón parecido a una boa.",
        notas: "Son naturalmente más fuertes que los humanos y capaces de dominar casualmente a los humanos"
    },
    {
        id: 7,
        name: "Mellifer",
        image: "images/mellifer.png",
        type: "insecto",
        peligrosidad: "neutral",
        aspecto: "Grandes ojos compuestos de color azul, mandíbulas articuladas externas y con antenas en sus frentes.",
        notas: "Criatura parecida a una abeja"
    },
    {
        id: 8,
        name: "Musai",
        image: "images/musai.png",
        type: "insecto",
        peligrosidad: "pacífico",
        aspecto: "Su cabello se vuelve rojo y su piel se vuelve brillante, verde azulado, con puntos por toda la piel que brillan con la luz. ",
        notas: "Los labios secretan una sustancia psicotrópica, haciendo que su beso sea tan eufórico y adictivo como cualquier narcótico"
    },
    {
        id: 9,
        name: "Pflichttreue",
        image: "images/pflichttreue.png",
        type: "felino",
        peligrosidad: "neutral",
        aspecto: "Obtienen dientes afilados y un pelaje blanco opaco crece por todo el cuerpo con marcas negras.",
        notas: "Son inteligentes, valientes y extremadamente leales."
    },
    {
        id: 10,
        name: "Reinigen",
        image: "images/reinigen.png",
        type: "monstruo",
        peligrosidad: "peligroso",
        aspecto: "Sus ojos se vuelven más oscuros, sus orejas se agrandan, sus rostros se vuelven puntiagudos",
        notas: "Tienen una fuerza sobrehumana, Reinigen es rápido y liviano"
    }
];

//Apartado para cargar los datos en el listado
function inicializar(){
    const wesenList = document.getElementById("wesen-list");
    wesenList.innerHTML = "";

    wesensIniciales.forEach(wesen => {
    
    const wesenItem = document.createElement("div");
    wesenItem.classList.add("wesen-item");
    wesenItem.setAttribute("data-wesen-id", wesen.id);

    
    wesenItem.innerHTML = `<img src="${wesen.image}" alt="${wesen.name}"><br>${wesen.name}`;

    wesenItem.addEventListener("click", () => {
        cargarWesenInfo(wesen.id);
    });

    wesenList.appendChild(wesenItem);
});
}
inicializar();


//Funcion para cargar la informacion en el formulario
function cargarWesenInfo(wesenId) {
    const wesen = wesensIniciales.find(w => w.id === wesenId);
    if (wesen) {
        
        document.getElementById("wesen-id").value = wesen.id;
        document.getElementById("name").value = wesen.name;
        document.getElementById("image").value = wesen.image;
        document.getElementById("type").value = wesen.type;
        document.getElementById("peligrosidad").value = wesen.peligrosidad;
        document.getElementById("aspecto").value = wesen.aspecto;
        document.getElementById("notas").value = wesen.notas;
    }
}



// Función para borrar un Wesen
function borrarWesenInfo() {
    const wesenId = parseInt(document.getElementById("wesen-id").value);
    const wesenIndex = wesensIniciales.findIndex(w => w.id === wesenId);

    if (wesenIndex !== -1) {
        // Elimina el Wesen del array wesensIniciales
        wesensIniciales.splice(wesenIndex, 1);
        
        document.getElementById("wesen-form").reset();

        
        inicializar();
    } else {
        alert("El Wesen no existe o ya ha sido eliminado.");
    }
}

// Función para agregar un nuevo Wesen
function anadirWesen() {
    const formulario = document.getElementById("wesen-form");
    const nombreComprobar = document.getElementById("name").value;
    if (formulario.checkValidity()) {
        if (existeWesen(nombreComprobar, wesensIniciales)) {
            const nombre = document.getElementById("name").value;
            const newWesenId = wesensIniciales.length + 1;
            const imagen = document.getElementById("image").value;
            const tipo = document.getElementById("type").value;
            const peligrosidad = document.getElementById("peligrosidad").value;
            const aspecto = document.getElementById("aspecto").value;
            const notas = document.getElementById("notas").value;

            wesensIniciales.push({
                id: newWesenId,
                name: nombre,
                image: imagen,
                type: tipo,
                peligrosidad: peligrosidad,
                aspecto: aspecto,
                notas: notas
            });

            // Limpiar el formulario después de agregar
            formulario.reset();
            inicializar();
            console.log(wesensIniciales);
        } else {
            alert("El nombre del Wesen ya existe en la lista. Por favor, elige un nombre único.");
        }
    } else {
        alert("Por favor, complete todos los campos del formulario.");
    }
}




// Función para guardar los datos editados
function guardarWesenInfoEditada() {
    const wesenId = parseInt(document.getElementById("wesen-id").value);
    const wesenIndex = wesensIniciales.findIndex(w => w.id === wesenId);

    if (wesenIndex !== -1) {
        wesensIniciales[wesenIndex].name = document.getElementById("name").value;
        wesensIniciales[wesenIndex].image = document.getElementById("image").value;
        wesensIniciales[wesenIndex].type = document.getElementById("type").value;
        wesensIniciales[wesenIndex].peligrosidad = document.getElementById("peligrosidad").value;
        wesensIniciales[wesenIndex].aspecto = document.getElementById("aspecto").value;
        wesensIniciales[wesenIndex].notas = document.getElementById("notas").value;
    }

    // Limpiar el formulario después de guardar
    document.getElementById("wesen-form").reset();
    inicializar();
}


//Función para comprobar que el wesen que introduce el usuario no exista ya en la lista
function existeWesen(nombre, wesens) {
    const nombres = [];
    for (let i = 0; i < wesens.length; i++) {
        nombres.push(wesens[i].name);
        if (nombres.includes(nombre)) {
            return false;
        }
        
    }
    return true;
}


