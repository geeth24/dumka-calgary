interface Image {
  asset: {
    url: string;
  };
}

export interface HomeData {
  title: string;
  firstSubtitle: string;
  secondSubtitle: string;
  thirdSubtitle: string;
  description: string;
  homeImage: Image;
  enableModal: boolean;
  modalTitle: string;
  modalDescription: string;
}

export interface MenuData {
  title: string;
  type: string;
  price: number;
}

export interface MenuCollection {
  appetizerssides: MenuData[];
  bread: MenuData[];
  breakfast: MenuData[];
  desserts: MenuData[];
  drinks: MenuData[];
  entrees: MenuData[];
  kebabstandoor: MenuData[];
  kids: MenuData[];
  noodles: MenuData[];
  ricedish: MenuData[];
}
