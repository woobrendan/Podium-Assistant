const labels = [
    "Car Series", // GT4, GTWCA
    "Championship / Class", // pro-am
    "Registered Car #",
    "team",
    "driver1",
    "driver1category",
    "driver1nationality",
    "driver2",
    "driver2category",
    "driver2nationality",
    "car",
    "Team Sponsors - Please seperate each Sponsor with a comma",
];

const convertClassif = (classif: string): string | undefined => {
    const classList: Record<string, string> = {
        sro3: "SRO3",
        gt4: "GT4",
        gt2: "GT2",
        proAm: "Pro-Am",
        proPro: "Pro",
        am: "Am",
        silver: "Silver",
        TCX: "TCX",
        TC: "TC",
        TCA: "TCA",
    };

    return classList[classif];
};

export { labels, convertClassif };
