const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const appendToObject = (object, key, value) => object[key] = value;
appendToObject(lesson2, 'turno', 'noite');

const keyListFromObject = (object) => Object.keys(object);
keyListFromObject(lesson3);

const sizeOfObject = (object) => Object.keys(object).length;
sizeOfObject(lesson3);

const valueListFromObject = (object) => Object.values(object);
valueListFromObject(lesson3);

const allLessons = Object.assign({lesson1}, {lesson2}, {lesson3});

const numberOfStudents = (object) => object.lesson1.numeroEstudantes + object.lesson2.numeroEstudantes + object.lesson3.numeroEstudantes;
numberOfStudents(allLessons);

const getValueByNumber = (object, number) => Object.values(object)[number];
getValueByNumber(lesson1, 0);

const verifyPair = (object, key, value) => object[key] === value;
verifyPair(lesson3, 'turno', 'noite');
verifyPair(lesson3, 'materia', 'Maria Clara');

const studentsForLessons = (object, classe) => {
  let number = 0;
  for (key in object) {
    if (object[key].materia === classe) {
      number += object[key].numeroEstudantes;
    }
  }
  return number;
};

studentsForLessons(allLessons, 'Matemática');

const createReport = (object, teacher) => {
  const classes = [];
  for (key in object) {
    if (object[key].professor === teacher) {
      classes.push(object[key].materia);
    }
  }
  return {professor: teacher, aulas: classes, estudantes: studentsForLessons(object, classes[0])};
}
createReport(allLessons, 'Maria Clara');
