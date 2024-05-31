
const comics = [
        {
            "categoria": "Animado",
            "id": 0,
            "name": "GREEN LANTERN PACK 1-3 (ORIGEN) (USADO)",
            "precio": "$12.500",
            "imagen": "https://bazingacomics.cl/wp-content/uploads/2024/05/Green-Lantern-1-planeta.jpg",
            "stock": 6
        },
        {
            "categoria": "Accion",
            "id": 1,
            "name": "LOS NUEVOS VENGADORES (PACK 1-8) (USADOS)",
            "precio": "$13.000",
            "imagen": "https://bazingacomics.cl/wp-content/uploads/2024/05/The-New-Avengers-Unli-1.jpg",
            "stock": 9
        },
        {
            "categoria": "Misterio",
            "id": 2,
            "name": "THE DISCIPLINE (USADO)",
            "precio": "$9.900",
            "imagen": "https://bazingacomics.cl/wp-content/uploads/2024/05/The-Discipline.jpg",
            "stock": 12
        },
        {
            "categoria": "Historia",
            "id": 3,
            "name": "REGRESO A PERDICIÓN (USADO)",
            "precio": "$10.000",
            "imagen": "https://bazingacomics.cl/wp-content/uploads/2024/05/Regreso-a-la-perdicion.jpg",
            "stock": 21
        },
        {
            "categoria": "Ficcion",
            "id": 4,
            "name": "CRISIS OSCURAS EN TIERRNAS INFINITAS (PACK HISTORIA COMPLETA)",
            "precio": "$82.500",
            "imagen": "https://bazingacomics.cl/wp-content/uploads/2024/05/Crisis-Oscura-1.jpg",
            "stock": 2
        },
        {
            "categoria": "Ficcion",
            "id": 5,
            "name": "PACK ASTONISHING X-MEN: PELIGROSO 1-3 (USADO)",
            "precio": "$4.500",
            "imagen": "https://bazingacomics.cl/wp-content/uploads/2024/05/Astonishing-X-Men-El-Don-1.jpg",
            "stock": 10
        },
        {
            "categoria": "Aventura",
            "id": 6,
            "name": "BIBLIOTECA MICHAEL MOORCOCK #3: ELRIC LA CIUDAD DE LOS SUEÑOS",
            "precio": "$21.000",
            "imagen": "https://bazingacomics.cl/wp-content/uploads/2024/05/Elric-La-Ciudad-de-los-suenos.jpg",
            "stock": 14
        },
        {
            "categoria": "Ficcion",
            "id": 7,
            "name": "WATCHMEN (EDICIÓN PAPEL OBRA)",
            "precio": "$29.900",
            "imagen": "https://bazingacomics.cl/wp-content/uploads/2024/05/Watchmen-PO.webp",
            "stock": 2
        },
        {
            "categoria": "Ficcion",
            "id": 8,
            "name": "PACK JUPITERS CIRCLE VOL. 1 Y 2 (USADO)",
            "precio": "$24.000",
            "imagen": "https://bazingacomics.cl/wp-content/uploads/2022/05/Jupiters-Legacy-1.jpg",
            "stock": 15
        },
        {
            "categoria": "Misterio",
            "id": 9,
            "name": "MASACRE SAMURÁI #1 (USADO)",
            "precio": "$9.500",
            "imagen": "https://bazingacomics.cl/wp-content/uploads/2024/05/Masacre-Samurai-1.jpg",
            "stock": 3
        },
        {
            "categoria": "Accion",
            "id": 10,
            "name": "BATMAN: TORMENTA DE SANGRE (1-2) (USADO)",
            "precio": "$4.000",
            "imagen": "https://bazingacomics.cl/wp-content/uploads/2024/05/Batman-Tormenta-de-Sangre-1.jpg",
            "stock": 4
        },
        {
            "categoria": "Ficcion",
            "id": 11,
            "name": "DEADPOOL VS SABRETOOTH (USADO)",
            "precio": "$11.500",
            "imagen": "https://bazingacomics.cl/wp-content/uploads/2024/05/Deadpool-vs-Sabretooth-1.jpg",
            "stock": 5
        },
        {
            "categoria": "Accion",
            "id": 12,
            "name": "BATMAN HUSH DELUXE (USADO)",
            "precio": "$28.900",
            "imagen": "https://bazingacomics.cl/wp-content/uploads/2024/05/Hush-Deluxe.jpg",
            "stock": 1
        },
        {
            "categoria": "Animado",
            "id": 13,
            "name": "RUROUNI KENSHIN 01 (USADO)",
            "precio": "$16.900",
            "imagen": "https://bazingacomics.cl/wp-content/uploads/2024/05/Rurouni-Kenshin-La-epopeya-del-guerrero-samurai-1.jpg",
            "stock": 22
        },
        {
            "categoria": "Accion",
            "id": 14,
            "name": "JOKER. KILLER SMILE (DC MÉXICO) (USADO)",
            "precio": "$32.000",
            "imagen": "https://bazingacomics.cl/wp-content/uploads/2024/05/DC-Black-Label-Joker-Killer-Smile-cover.jpg",
            "stock": 17
        },
        {
            "categoria": "Ficcion",
            "id": 15,
            "name": "Superman vol. 04: La verdad sale a la luz",
            "precio": "$20.475",
            "imagen": "https://cdnx.jumpseller.com/all-star-comics/image/31726101/resize/570/765?1676006722",
            "stock": 15
        },
        {
            "categoria": "Animado",
            "id": 16,
            "name": "Pequeños Titanes núm. 21",
            "precio": "$2.600",
            "imagen": "https://cdnx.jumpseller.com/all-star-comics/image/31726092/resize/570/765?1676006721",
            "stock": 25
        },
        {
            "categoria": "Animado",
            "id": 17,
            "name": "Pequeños Titanes núm. 22",
            "precio": "$2.366",
            "imagen": "https://cdnx.jumpseller.com/all-star-comics/image/31726093/resize/570/765?1676006721",
            "stock": 19
        },
        {
            "categoria": "Accion",
            "id": 18,
            "name": "Liga de la Justicia: Rumbo a Crisis Oscura",
            "precio": "$7.091",
            "imagen": "https://cdnx.jumpseller.com/all-star-comics/image/31726082/resize/570/765?1676006720",
            "stock": 31
        },
        {
            "categoria": "Ficcion",
            "id": 19,
            "name": "Liga de la Justicia: ¡Salvar la Navidad!",
            "precio": "$9.401",
            "imagen": "https://cdnx.jumpseller.com/all-star-comics/image/31726081/resize/570/765?1676006720",
            "stock": 23
        },
        {
            "categoria": "Misterio",
            "id": 20,
            "name": "La Cosa del Pantano vol. 1 de 6 (DC Pocket)",
            "precio": "$9.200",
            "imagen": "https://cdnx.jumpseller.com/all-star-comics/image/31726067/resize/570/765?1676006717",
            "stock": 12
        },
    ];

module.exports={
    comics
}