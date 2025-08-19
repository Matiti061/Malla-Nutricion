// Diccionario de previaturas extraído del PDF
const previaturas = {
  "Microbiologia y Parasitologia": ["Biologia Celular e Histologia"],
  "Bioestadistica": ["Orientacion Profesional y Etica", "Matematica Biomedica"],
  "Quimica Organica Basica Nutricion": ["Quimica General Nutricion"],
  "Anatomia Descriptiva": ["Biologia Celular e Histologia"],
  "Evaluacion del Estado Nutricional del Adulto": ["Anatomia Descriptiva", "Bioestadistica"],
  "Nutricion Basica 1": ["Quimica Organica Basica Nutricion", "Alimentos"],
  "Quimica y Control Alimentos": ["Quimica Organica Basica Nutricion", "Alimentos"],
  "Tecnicas Dieteticas": ["Quimica Organica Basica Nutricion", "Microbiologia y Parasitologia", "Alimentos"],
  "Fisiologia Humana": ["Anatomia Descriptiva", "Biologia Celular e Histologia"],
  "Bioquimica Nutricionistas": ["Quimica Organica Basica Nutricion", "Biologia Celular e Histologia"],
  "Fisiopatologia Humana": ["Fisiologia Humana", "Nutricion Basica 1"],
  "Epidemologia": ["Fisiologia Humana", "Bioestadistica"],
  "Dietetica Adulto": ["Evaluacion del Estado Nutricional del Adulto", "Nutricion Basica 1", "Tecnicas Dieteticas", "Fisiologia Humana", "Bioquimica Nutricionistas"],
  "Nutricion Basica 2": ["Bioquimica Nutricionistas", "Nutricion Basica 1"],
  "Evaluacion del Estado Nutricional Infantil": ["Evaluacion del Estado Nutricional del Adulto", "Nutricion Basica 1", "Tecnicas Dieteticas"],
  "Administracion en Salud": ["Orientacion Profesional y Etica", "Bioestadistica"],
  "Bioquimica Clinica Elemental": ["Evaluacion del Estado Nutricional Infantil", "Dietetica Adulto"],
  "Psicologia en Salud": ["Evaluacion del Estado Nutricional Infantil", "Dietetica Adulto"],
  "Farmacologia y Nutricion": ["Dietetica Adulto", "Nutricion Basica 2"],
  "Tecnologia de los Alimentos": ["Quimica y Control Alimentos"],
  "Dietetica Infantil": ["Evaluacion del Estado Nutricional Infantil", "Dietetica Adulto", "Nutricion Basica 2"],
  "Nutricion en Atencion Primaria": ["Bioquimica Clinica Elemental", "Dietetica Adulto", "Epidemologia", "Evaluacion del Estado Nutricional Infantil"],
  "Inocuidad de los Alimentos": ["Tecnologia de los Alimentos", "Microbiologia y Parasitologia"],
  "Proyecto y Programas Alimentarios": ["Dietetica Infantil", "Administracion en Salud"],
  "Educacion Alimentaria Individual": ["Dietetica Infantil", "Psicologia en Salud"],
  "Comunicacion Profesional": ["Educacion Alimentaria Individual"],
  "Metodologia de la Investigacion": ["Nutricion en Atencion Primaria", "Bioestadistica"],
  "Alimentacion Colectiva": ["Administracion en Salud", "Dietetica Infantil", "Inocuidad de los Alimentos"],
  "Educacion Alimentaria Grupal": ["Educacion Alimentaria Individual", "Nutricion en Atencion Primaria"],
  "Nutricion Clinica Adulto": ["Bioquimica Clinica Elemental", "Farmacologia y Nutricion", "Dietetica Adulto"],
  "Seminario de Investigacion": ["Metodologia de la Investigacion"],
  "Practica en Atencion Nutricional": ["Nutricion Clinica Adulto", "Educacion Alimentaria Grupal"],
  "Practica en Servicio de Alimentacion": ["Alimentacion Colectiva"],
  "Nutricion Clinica Pediatrica": ["Nutricion Clinica Adulto"]
};

// Agregar eventos a los ramos
document.querySelectorAll("li[data-ramo]").forEach(item => {
  item.addEventListener("click", () => {
    // Quitar resaltados previos
    document.querySelectorAll("li").forEach(li => li.classList.remove("highlight", "prerequisite"));
    
    // Resaltar ramo seleccionado
    item.classList.add("highlight");
    
    // Resaltar sus previaturas
    const nombre = item.getAttribute("data-ramo");
    if (previaturas[nombre]) {
      previaturas[nombre].forEach(prev => {
        const elem = document.querySelector(`li[data-ramo='${prev}']`);
        if (elem) elem.classList.add("prerequisite");
      });
    }
  });
});

