import champion1 from "../assets/images/champions/champion1.jpg";
import champion2 from "../assets/images/champions/champion2.jpg";
import champion3 from "../assets/images/champions/champion3.jpg";
import champion4 from "../assets/images/champions/champion4.jpg";
import champion5 from "../assets/images/champions/champion5.jpg";

export interface ChampionAward {
  id: number;
  title: string;
  description: string;
  year: string;
  location: string;
  image: string;
}

export const championAwards: ChampionAward[] = [
  {
    id: 1,
    title: "Futsal Tournament Champion",
    description:
      "First place in the Regional Futsal Tournament for Women. This competition featured teams from across the province and was a significant achievement for our squad.",
    year: "2016",
    location: "Isfahan, Iran",
    image: champion1,
  },
  {
    id: 2,
    title: "Four Nations Cup Winner",
    description:
      "Champions of the Four Nations Futsal Cup, competing against teams from neighboring countries. Our team demonstrated exceptional skill and teamwork throughout the tournament.",
    year: "2016",
    location: "Isfahan, Iran",
    image: champion2,
  },
  {
    id: 3,
    title: "Women's Day Futsal Tournament",
    description:
      "First place in the Women's Day special futsal championship. This event celebrated women in sports and featured high-level competition from across the region.",
    year: "2017",
    location: "Isfahan, Iran",
    image: champion3,
  },
  {
    id: 4,
    title: "Municipal Futsal League Champion",
    description:
      "Winner of the Municipal Employees' Futsal League, leading my team to victory through consistent performance and strategic play.",
    year: "2017",
    location: "Isfahan, Iran",
    image: champion4,
  },
  {
    id: 5,
    title: "Provincial Futsal Competition",
    description:
      "Second place in the Provincial Futsal Championship, competing against the best teams from across Isfahan Province in a highly competitive tournament.",
    year: "2018",
    location: "Isfahan, Iran",
    image: champion5,
  },
];
