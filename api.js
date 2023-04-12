export default function getProducts() {
  const products = [{
    "id": "B001",
    "name": "To Kill a Mockingbird",
    "price": 10.99,
    "shortDescription": "A classic novel by Harper Lee, depicting racial inequality and injustice in the deep south.",
    "image": "https://m.media-amazon.com/images/I/51Z9p5AecCL._SX307_BO1,204,203,200_.jpg",
    "longDescription": "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature. The plot and characters are loosely based on Lee's observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was 10 years old. The novel is renowned for its warmth and humor, despite dealing with serious issues of rape and racial inequality."
  },
  {
    "id": "B002",
    "name": "1984",
    "price": 9.99,
    "shortDescription": "A dystopian novel by George Orwell, portraying a world in which government surveillance and propaganda are pervasive.",
    "image": "https://m.media-amazon.com/images/I/419T8TwaOSL._SY291_BO1,204,203,200_QL40_ML2_.jpg",
    "longDescription": "1984 is a dystopian novel by George Orwell published in 1949. The novel is set in a totalitarian society where the government exercises complete control over every aspect of citizens' lives. The protagonist, Winston Smith, works for the government rewriting historical records to fit the party line. He starts to secretly rebel against the regime, and falls in love with a woman named Julia. The novel explores themes of political repression, psychological manipulation, and the dangers of total government control."
  },

  {
    "id": "B003",
    "name": "The Great Gatsby",
    "price": 7.99,
    "shortDescription": "A novel by F. Scott Fitzgerald, capturing the excesses and disillusionment of the Roaring Twenties.",
    "image": "https://m.media-amazon.com/images/I/41Irg18HL6L._SX326_BO1,204,203,200_.jpg",
    "longDescription": "The Great Gatsby is a novel by F. Scott Fitzgerald published in 1925. The story takes place in New York during the Roaring Twenties, and explores the decadence and excess of the era. The protagonist, Jay Gatsby, is a mysterious and wealthy man who throws extravagant parties in an attempt to win back his lost love, Daisy Buchanan. The novel explores themes of love, wealth, class, and the American Dream."
  },

  {
    "id": "B004",
    "name": "The Catcher in the Rye",
    "price": 8.99,
    "shortDescription": "A novel by J.D. Salinger, following the experiences of a teenager named Holden Caulfield.",
    "image": "https://m.media-amazon.com/images/I/31LnZ3DHu9L._SX324_BO1,204,203,200_.jpg",
    "longDescription": "The Catcher in the Rye is a novel by J.D. Salinger published in 1951. The story is told from the perspective of a teenager named Holden Caulfield, who has been expelled from his boarding school and is wandering around New York City. The novel explores themes of alienation, loss, and the difficulties of growing up in a society that doesn't understand or value individuality. The book has become a classic of American literature and is widely taught in schools."
  },

  {
    "id": "B005",
    "name": "The Lord of the Rings",
    "price": 14.99,
    "shortDescription": "A fantasy novel by J.R.R. Tolkien, detailing the epic quest of a hobbit named Frodo to destroy a powerful ring.",
    "image": "https://m.media-amazon.com/images/I/51wEd2FprXL._SY346_.jpg",
    "longDescription": "The Lord of the Rings is a high fantasy novel by J.R.R. Tolkien, published in three volumes between 1954 and 1955. The story follows a hobbit named Frodo Baggins who is tasked with destroying the One Ring, an ancient artifact created by the evil Lord Sauron. Frodo is aided on his quest by a fellowship of other characters, including Gandalf the wizard and Aragorn the ranger. The novel explores themes of power, temptation, and the struggle between good and evil."
  },

  {
    "id": "B006",
    "name": "Pride and Prejudice",
    "price": 6.99,
    "shortDescription": "A novel by Jane Austen, examining the social norms and expectations of early 19th century England.",
    "image": "https://m.media-amazon.com/images/I/41TYCIYe2-L._SY346_.jpg",
    "longDescription": "Pride and Prejudice is a novel by Jane Austen published in 1813. The story follows the romantic relationship between Elizabeth Bennet and Mr. Darcy, two individuals from different social classes who are initially prejudiced against each other. The novel explores themes of class, marriage, and the role of women in society. It has become one of the most popular and beloved works of English literature."
  },

  {
    "id": "B007",
    "name": "To the Lighthouse",
    "price": 11.99,
    "shortDescription": "A novel by Virginia Woolf, examining the relationships and inner lives of a family vacationing on the Isle of Skye.",
    "image": "https://m.media-amazon.com/images/I/6133MCTwt5L.jpg",
    "longDescription": "To the Lighthouse is a novel by Virginia Woolf published in 1927. The novel is set on the Isle of Skye, and follows the Ramsay family as they vacation there. The novel explores themes of time, memory, and the inner lives of its characters. It is considered one of Woolf's most famous works and a masterpiece of modernist literature."
  },

  {
    "id": "B008",
    "name": "One Hundred Years of Solitude",
    "price": 12.99,
    "shortDescription": "A novel by Gabriel Garcia Marquez, detailing the multi-generational history of the Buendia family in the fictional town of Macondo.",
    "image": "https://m.media-amazon.com/images/I/41zHkXhZhOL._SY346_.jpg",
    "longDescription": "One Hundred Yearsof Solitude is a novel by Gabriel Garcia Marquez, published in 1967. The novel follows the history of the Buendia family over the course of seven generations in the fictional town of Macondo, which is based on Marquez's hometown of Aracataca, Colombia. The novel explores themes of solitude, memory, and the cyclical nature of time. It is considered one of the greatest works of Latin American literature and a masterpiece of magical realism."
  },

  {
    "id": "B009",
    "name": "The Catcher in the Rye",
    "price": 8.99,
    "shortDescription": "A novel by J.D. Salinger, following the experiences of Holden Caulfield, a teenage boy who has been expelled from his prep school.",
    "image": "https://m.media-amazon.com/images/I/31LnZ3DHu9L._SY291_BO1,204,203,200_QL40_ML2_.jpg",
    "longDescription": "The Catcher in the Rye is a novel by J.D. Salinger, published in 1951. The novel follows the experiences of Holden Caulfield, a teenage boy who has been expelled from his prep school and is wandering around New York City. The novel explores themes of alienation, loss, and the difficulties of growing up in a society that doesn't understand or value individuality. The book has become a classic of American literature and is widely taught in schools."
  },
  {
    "id": "B010",
    "name": "The Great Gatsby",
    "price": 9.99,
    "shortDescription": "A novel by F. Scott Fitzgerald, following the romantic entanglements and tragic downfall of Jay Gatsby, a mysterious millionaire.",
    "image": "https://m.media-amazon.com/images/I/41Irg18HL6L._SX326_BO1,204,203,200_.jpg",
    "longDescription": "The Great Gatsby is a novel by F. Scott Fitzgerald, published in 1925. The novel is set in the 1920s and follows the romantic entanglements and tragic downfall of Jay Gatsby, a mysterious millionaire. The novel explores themes of class, love, and the corrupting influence of wealth. It is considered one of the greatest works of American literature."
  },
  {
    "id": "B011",
    "name": "The Hobbit",
    "price": 7.99,
    "shortDescription": "A children's fantasy novel by J.R.R. Tolkien, following the adventures of Bilbo Baggins and a group of dwarves on a quest to reclaim a treasure from a dragon.",
    "image": "https://m.media-amazon.com/images/I/5154D-HGxXL._SX351_BO1,204,203,200_.jpg",
    "longDescription": "The Hobbit is a children's fantasy novel by J.R.R. Tolkien, published in 1937. The novel follows the adventures of Bilbo Baggins, a hobbit who is recruited by a group of dwarves to help reclaim their treasure from the dragon Smaug. The novel explores themes of adventure, heroism, and the importance of home. It is considered a classic of children's literature and a precursor to The Lord of the Rings."
  }]


  return products;
}
