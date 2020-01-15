const categories = [
  {
    id: "football",
    name: "Football",
    tags: ["products", "inspirations"],
    count: 147,
    image: require("../assets/icons/football.png")
  },
  {
    id: "music",
    name: "Music",
    tags: ["products", "shop"],
    count: 16,
    image: require("../assets/icons/music.png")
  },
  {
    id: "politics",
    name: "Politics",
    tags: ["products", "inspirations"],
    count: 68,
    image: require("../assets/icons/politics.png")
  },
  {
    id: "wrestling",
    name: "Wrestling",
    tags: ["products", "shop"],
    count: 17,
    image: require("../assets/icons/wwe.png")
  },
  {
    id: "movies",
    name: "Movies",
    tags: ["products", "shop"],
    count: 47,
    image: require("../assets/icons/movies.png")
  },
  {
    id: "zee",
    name: "Zee world",
    tags: ["products", "shop"],
    count: 47,
    image: require("../assets/icons/zee.png")
  }
];

const products = [
  {
    id: 1,
    name: "16 Best Plants That Thrive In Your Bedroom",
    description:
      "Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.",
    tags: ["Interior", "27 m²", "Ideas"],
    images: [
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      // showing only 3 images, show +6 for the rest
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png")
    ]
  }
];

const explore = [
  // images
  require("../assets/images/explore_1.png"),
  require("../assets/images/explore_2.png"),
  require("../assets/images/explore_3.png"),
  require("../assets/images/explore_4.png"),
  require("../assets/images/explore_5.png"),
  require("../assets/images/explore_6.png")
];

const profile = {
  username: "react-ui-kit",
  location: "Europe",
  email: "contact@react-ui-kit.com",
  avatar: require("../assets/images/avatar.png"),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false
};

export { categories, explore, products, profile };
