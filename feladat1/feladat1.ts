/*
TYPESCRIPT

- Keszits alprogramot, ami...
    - Eldonti, hogy a parameterul kapott szam tombben van-e negativ szam
    - Egy parametrul kapott sugarbol megallapitja a kor keruletet es teruletet
        - Tuple-t alkalmazz
        - Kerulet: 2 * sugar * PI
        - Terulet: sugar * sugar * PI
    
- Keszits interface-t Auto neven
    - Gyarto (szoveg)
    - Tipus (szoveg)
    - Hengerurtartalom (szam)
    - BenzinesE (logikai)
*/

function VanENegativ(szamok:number[]):boolean{
    var i:number = 0;

    while(i < szamok.length && !(szamok[i] < 0)){
        i++;
    }

    /*if(i < szamok.length){
        return true;
    }
    else{
        return false;
    }*/

    return i < szamok.length;
}

function KorKerTer(r:number):[number, number]{
    var ker:number = 2 * r * Math.PI;
    var ter:number = r * r * Math.PI;

    return [ker, ter];
}

console.log(VanENegativ([5, 12, 23, -5, 14]));
console.log(VanENegativ([5, 12, 23, 14]));
console.log(KorKerTer(4));

interface Auto{
    gyarto:string;
    tipus:string;
    hengerurtartalom:number;
    benzinesE:boolean;
}

/*
- Keszits publikus GitHub repositorit a sajat felhasznaloi fiokodban
- Indits Git BASH-t, es a jelenlegi TS projektedben inicializalj git-et
- A lokalis repo-t kosd ossze az online (github-os) repoddal
- Toltsd fel a jelenlegi allapotot a github-ra
*/

/*
TS!!
- Keszits alprogramot, ami kivalasztja egy auto tombbol a legkisebb hengerurtartalmu autot
- Keszits alprogramot, ami megadja a parameterul kapott auto tombbol a benzinesek darabszamat
- A valtoztatasokat toltsd fel a github repodba
*/

function MinAuto(autok:Auto[]):Auto{
    var min:Auto = autok[0];

    for(var i:number = 0; i < autok.length; i++){
        if(autok[i].hengerurtartalom < min.hengerurtartalom){
            min = autok[i];
        }
    }

    return min;
}

function BenzinesDb(autok:Auto[]):number{
    var db:number = 0;

    for(var i:number = 0; i < autok.length; i++){
        if(autok[i].benzinesE /*== true*/){
            db++;
        }
    }

    return db;
}

var a1:Auto = {
    gyarto: "Opel",
    tipus: "Astra",
    hengerurtartalom: 1600,
    benzinesE: true
};

var a2:Auto = {
    gyarto: "BMW",
    tipus: "i3",
    hengerurtartalom: 0,
    benzinesE: false
};

var a3:Auto = {
    gyarto: "Volkswagen",
    tipus: "Passat",
    hengerurtartalom: 2200,
    benzinesE: false
};

var a4:Auto = {
    gyarto: "Ford",
    tipus: "Mondeo",
    hengerurtartalom: 1700,
    benzinesE: true
};

var autok:Auto[] = [a1, a2, a3, a4];

console.log(MinAuto(autok));
console.log(BenzinesDb(autok));