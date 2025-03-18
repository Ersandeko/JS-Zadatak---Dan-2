const studenti = [ 
    { ime: "Marko", prezime: "Petrović", godina: 3, ocjene: [9, 8, 7, 10, 9] }, 
    { ime: "Ana", prezime: "Jovanović", godina: 1, ocjene: [7, 6, 8, 6, 7] }, 
    { ime: "Luka", prezime: "Simić", godina: 2, ocjene: [10, 9, 10, 8, 9] }, 
    { ime: "Maja", prezime: "Nikolić", godina: 4, ocjene: [6, 5, 7, 6, 6] }, 
    { ime: "Ivana", prezime: "Stanković", godina: 1, ocjene: [9, 10, 9, 8, 9] } 
];

function filtrirajStudente(niz) {
    niz.forEach(student => {
        const prosjek = student.ocjene.reduce((sum, ocjena) => sum + ocjena, 0) / student.ocjene.length;

        if (prosjek > 8.5) {
            console.log(`${student.ime} ${student.prezime} - Prosjek: ${prosjek.toFixed(2)}`);
        } else {
            console.log(student.ime);
        }
    });
}

function izracunajProsjek(ocjene) {
    return ocjene.reduce((sum, ocjena) => sum + ocjena, 0) / ocjene.length;
}


function najboljiStudent(niz) {
    let najbolji = niz.reduce((max, student) => {
        let prosjek = izracunajProsjek(student.ocjene);
        return prosjek > max.prosjek ? { student, prosjek } : max;
    }, { student: null, prosjek: 0 });

    console.log(`Najbolji student: ${najbolji.student.ime} ${najbolji.student.prezime} - Prosjek: ${najbolji.prosjek.toFixed(2)}`);
}



function prosjecanProsjek(niz) {
    let ukupniProsjek = niz.reduce((sum, student) => sum + izracunajProsjek(student.ocjene), 0) / niz.length;
    console.log(`Prosječan prosjek svih studenata: ${ukupniProsjek.toFixed(2)}`);
}


function sortiraniStudenti(niz) {
    let sortirani = [...niz].sort((a, b) => izracunajProsjek(b.ocjene) - izracunajProsjek(a.ocjene));
    console.log("Studenti sortirani po prosjeku (opadajuće):");
    sortirani.forEach(student => {
        console.log(`${student.ime} ${student.prezime} - Prosjek: ${izracunajProsjek(student.ocjene).toFixed(2)}`);
    });
}


function dodajProsjek(niz) {
    let noviNiz = niz.map(student => ({
        ...student,
        prosjek: izracunajProsjek(student.ocjene).toFixed(2)
    }));

    console.log("Novi niz sa dodatim prosjekom:");
    console.log(noviNiz);
}



filtrirajStudente(studenti);
najboljiStudent(studenti);
prosjecanProsjek(studenti);
sortiraniStudenti(studenti);
dodajProsjek(studenti);

