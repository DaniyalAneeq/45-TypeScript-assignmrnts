//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let cricketTeam: {
    name: string;
    teamRankInTornament: number;
    totalBatsman: number; 
    totalBowlers: number;
} = {
    name: "karachiKings",
    teamRankInTornament: 1,
    totalBatsman: 6,
    totalBowlers: 5
}

console.log(`${cricketTeam.name} is the no: ${cricketTeam.teamRankInTornament} team in Psl.
${cricketTeam.name} has ${cricketTeam.totalBatsman} good batsman and ${cricketTeam.totalBowlers} fantastic bowlers.`);
