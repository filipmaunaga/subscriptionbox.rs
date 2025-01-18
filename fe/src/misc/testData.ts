export const subscriptionBoxTestData = [
  {
    name: "Paket za macke",
    price: 24,
    imgUrl:
      "https://images.pexels.com/photos/29633889/pexels-photo-29633889/free-photo-of-handcrafting-a-festive-christmas-wreath.jpeg",
  },
  {
    name: "Hrana za ribice",
    price: 32.8,
    imgUrl:
      "https://images.pexels.com/photos/29642313/pexels-photo-29642313/free-photo-of-cozy-dessert-with-chocolate-and-tea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Svi psi treba da su srecni i zadovoljni",
    price: 155.9,
    imgUrl:
      "https://images.pexels.com/photos/29569149/pexels-photo-29569149/free-photo-of-elegant-dessert-in-a-jar-with-pistachios-and-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Pita sa jabukom",
    price: 15,
    imgUrl:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Stambeni kredit",
    price: 879,
    imgUrl:
      "https://images.pexels.com/photos/3628100/pexels-photo-3628100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export interface IProduct {
  produtctId: string;
  productName: string;
  productImgUrl: string;
}
export interface ISubscriptionBox {
  boxId: string;
  boxName: string;
  boxPrice: number;
  boxImgUrl: string;
  boxCategory: string;
  boxNumberOfSubscribers: number;
  boxProducts: IProduct[];
}

export interface IProvider {
  providerId: string;
  providerName: string;
  providerImgUrl: string;
  providerCategory: string;
  providerNumberOfSubscribers: number;
  providerSubscriptionboxes: ISubscriptionBox[];
}

export const mockBackendData: IProvider[] = [
  {
    providerId: "0",
    providerName: "Pet shop",
    providerImgUrl:
      "https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    providerCategory: "Pets",
    providerNumberOfSubscribers: 100,
    providerSubscriptionboxes: [
      {
        boxId: "0",
        boxName: "Dog food box",
        boxCategory: "Pets",
        boxImgUrl:
          "https://images.pexels.com/photos/3628100/pexels-photo-3628100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        boxNumberOfSubscribers: 32,
        boxPrice: 32.9,
        boxProducts: [
          {
            produtctId: "0",
            productName: "Pedigre",
            productImgUrl:
              "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          },
          {
            produtctId: "1",
            productName: "Best dog",
            productImgUrl:
              "https://images.pexels.com/photos/205923/pexels-photo-205923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          },
          {
            produtctId: "2",
            productName: "Pomeranac deluxe",
            productImgUrl:
              "https://images.pexels.com/photos/29569149/pexels-photo-29569149/free-photo-of-elegant-dessert-in-a-jar-with-pistachios-and-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          },
          {
            produtctId: "3",
            productName: "Scooby do!",
            productImgUrl:
              "https://images.pexels.com/photos/205923/pexels-photo-205923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          },
          {
            produtctId: "4",
            productName: "101 dalmatinac",
            productImgUrl:
              "https://images.pexels.com/photos/29569149/pexels-photo-29569149/free-photo-of-elegant-dessert-in-a-jar-with-pistachios-and-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          },
        ],
      },
      {
        boxId: "1",
        boxName: "Cat food box",
        boxCategory: "Pets",
        boxImgUrl:
          "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        boxNumberOfSubscribers: 68,
        boxPrice: 37.8,
        boxProducts: [
          {
            produtctId: "5",
            productName: "Whiskas",
            productImgUrl:
              "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg",
          },
          {
            produtctId: "6",
            productName: "Paws",
            productImgUrl:
              "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          },
          {
            produtctId: "7",
            productName: "Extraordinary cat food!",
            productImgUrl:
              "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg",
          },
          {
            produtctId: "8",
            productName: "Your cat",
            productImgUrl:
              "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          },
        ],
      },
    ],
  },
  {
    providerId: "1",
    providerName: "Toys for kids",
    providerImgUrl:
      "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    providerCategory: "Kids",
    providerNumberOfSubscribers: 45,
    providerSubscriptionboxes: [
      {
        boxId: "2",
        boxName: "0-2 years",
        boxCategory: "Kids",
        boxImgUrl:
          "https://images.pexels.com/photos/265987/pexels-photo-265987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        boxNumberOfSubscribers: 14,
        boxPrice: 17.5,
        boxProducts: [
          {
            produtctId: "8",
            productName: "Suprise toy",
            productImgUrl:
              "https://images.pexels.com/photos/12211/pexels-photo-12211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          },
        ],
      },
      {
        boxId: "3",
        boxName: "3-6 years",
        boxCategory: "Kids",
        boxImgUrl:
          "https://images.pexels.com/photos/1330638/pexels-photo-1330638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        boxNumberOfSubscribers: 20,
        boxPrice: 17.5,
        boxProducts: [
          {
            produtctId: "9",
            productName: "Suprise toy",
            productImgUrl:
              "https://images.pexels.com/photos/1720957/pexels-photo-1720957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          },
        ],
      },
      {
        boxId: "4",
        boxName: "7-14 years",
        boxCategory: "Kids",
        boxImgUrl:
          "https://images.pexels.com/photos/1720957/pexels-photo-1720957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        boxNumberOfSubscribers: 11,
        boxPrice: 20.0,
        boxProducts: [
          {
            produtctId: "8",
            productName: "Suprise toy",
            productImgUrl:
              "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          },
        ],
      },
    ],
  },
];
