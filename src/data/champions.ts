import champion1 from "../assets/images/champions/champion1.jpg";
import champion2 from "../assets/images/champions/champion2.jpg";
import champion3 from "../assets/images/champions/champion3.jpg";
import champion4 from "../assets/images/champions/champion4.jpg";

export interface ChampionAward {
  id: number;
  titleKey: string; // Translation key for title
  descriptionKey: string; // Translation key for description
  year: string;
  location: {
    en: string;
    de: string;
    fa: string;
  };
  image: string;
}

export const championAwards: ChampionAward[] = [
  {
    id: 1,
    titleKey: "champions.awards.thirdPlace.title",
    descriptionKey: "champions.awards.thirdPlace.description",
    year: "2014",
    location: {
      en: "Isfahan, Iran",
      de: "Isfahan, Iran",
      fa: "اصفهان، ایران"
    },
    image: champion1,
  },
  {
    id: 2,
    titleKey: "champions.awards.firstPlaceMunicipality.title",
    descriptionKey: "champions.awards.firstPlaceMunicipality.description",
    year: "2016",
    location: {
      en: "Isfahan, Iran",
      de: "Isfahan, Iran",
      fa: "اصفهان، ایران"
    },
    image: champion2,
  },
  {
    id: 3,
    titleKey: "champions.awards.womensDay.title",
    descriptionKey: "champions.awards.womensDay.description",
    year: "2017",
    location: {
      en: "Isfahan, Iran",
      de: "Isfahan, Iran",
      fa: "اصفهان، ایران"
    },
    image: champion3,
  },
  {
    id: 4,
    titleKey: "champions.awards.secondPlace.title",
    descriptionKey: "champions.awards.secondPlace.description",
    year: "2018",
    location: {
      en: "Isfahan, Iran",
      de: "Isfahan, Iran",
      fa: "اصفهان، ایران"
    },
    image: champion4,
  }
];
