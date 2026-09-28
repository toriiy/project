import dotenv from "dotenv";
import mongoose from "mongoose";

import { Book } from "../src/models/book.model";

dotenv.config();
dotenv.config({ path: "../.env" });

const books = [
  {
    name: "The Little Prince",
    price: 320,
    description: "A poetic story about friendship, loneliness and seeing what matters.",
    language: "English",
    pages: 96,
    photo: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Pride and Prejudice",
    price: 410,
    description: "A classic romance about first impressions, family and personal growth.",
    language: "English",
    pages: 432,
    photo: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "The Great Gatsby",
    price: 380,
    description: "A sharp portrait of ambition, illusion and the American dream.",
    language: "English",
    pages: 208,
    photo: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "The Hobbit",
    price: 520,
    description: "An unexpected adventure through Middle-earth with Bilbo Baggins.",
    language: "English",
    pages: 310,
    photo: "https://images.unsplash.com/photo-1511108690759-009cfd6c8a8e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Jane Eyre",
    price: 460,
    description: "A coming-of-age novel about independence, dignity and love.",
    language: "English",
    pages: 532,
    photo: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "The Alchemist",
    price: 390,
    description: "A fable about following a dream and listening to your own path.",
    language: "English",
    pages: 208,
    photo: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "1984",
    price: 430,
    description: "A dystopian novel about surveillance, language and resistance.",
    language: "English",
    pages: 328,
    photo: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "To Kill a Mockingbird",
    price: 450,
    description: "A story of justice, empathy and growing up in the American South.",
    language: "English",
    pages: 336,
    photo: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "The Catcher in the Rye",
    price: 360,
    description: "A young man's restless journey through New York and adolescence.",
    language: "English",
    pages: 234,
    photo: "https://images.unsplash.com/photo-1511108690759-009cfd6c8a8e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Fahrenheit 451",
    price: 340,
    description: "A future where books are forbidden and curiosity becomes rebellion.",
    language: "English",
    pages: 194,
    photo: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Little Women",
    price: 470,
    description: "Four sisters find their own ways through family, ambition and love.",
    language: "English",
    pages: 528,
    photo: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "The Picture of Dorian Gray",
    price: 400,
    description: "A gothic tale about beauty, desire and the cost of vanity.",
    language: "English",
    pages: 256,
    photo: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Crime and Punishment",
    price: 520,
    description: "A psychological novel about guilt, conscience and redemption.",
    language: "English",
    pages: 671,
    photo: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "The Brothers Karamazov",
    price: 590,
    description: "A powerful family drama exploring faith, freedom and responsibility.",
    language: "English",
    pages: 824,
    photo: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "The Master and Margarita",
    price: 480,
    description: "A fantastical and satirical story set between Moscow and Jerusalem.",
    language: "English",
    pages: 384,
    photo: "https://images.unsplash.com/photo-1511108690759-009cfd6c8a8e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "The Old Man and the Sea",
    price: 300,
    description: "A concise story of endurance, dignity and the struggle against nature.",
    language: "English",
    pages: 128,
    photo: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "One Hundred Years of Solitude",
    price: 560,
    description: "Several generations of one family live through a century of wonder.",
    language: "English",
    pages: 417,
    photo: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "The Book Thief",
    price: 490,
    description: "A moving story about words, courage and friendship during wartime.",
    language: "English",
    pages: 584,
    photo: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "The Kite Runner",
    price: 440,
    description: "A tale of friendship, betrayal and the possibility of forgiveness.",
    language: "English",
    pages: 371,
    photo: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "The Name of the Wind",
    price: 530,
    description: "A musician tells the extraordinary story of his life and legend.",
    language: "English",
    pages: 662,
    photo: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "The Midnight Library",
    price: 420,
    description: "A magical library offers endless possibilities and second chances.",
    language: "English",
    pages: 304,
    photo: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "The Shadow of the Wind",
    price: 510,
    description: "A mysterious book leads a young reader through old Barcelona.",
    language: "English",
    pages: 487,
    photo: "https://images.unsplash.com/photo-1511108690759-009cfd6c8a8e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "The Ocean at the End of the Lane",
    price: 370,
    description: "A dark fairytale about memory, childhood and an impossible pond.",
    language: "English",
    pages: 192,
    photo: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "A Man Called Ove",
    price: 430,
    description: "An unexpectedly warm story about grief, community and new beginnings.",
    language: "English",
    pages: 337,
    photo: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
  },
];

const additionalBookTitles = [
  "The Lord of the Rings",
  "Harry Potter and the Philosopher's Stone",
  "Harry Potter and the Chamber of Secrets",
  "Harry Potter and the Prisoner of Azkaban",
  "Harry Potter and the Goblet of Fire",
  "The Chronicles of Narnia",
  "Alice's Adventures in Wonderland",
  "The Adventures of Sherlock Holmes",
  "The Count of Monte Cristo",
  "Les Miserables",
  "The Three Musketeers",
  "The Secret Garden",
  "A Little Princess",
  "Anne of Green Gables",
  "The Wind in the Willows",
  "Treasure Island",
  "The Call of the Wild",
  "White Fang",
  "Moby-Dick",
  "The Adventures of Tom Sawyer",
  "The Adventures of Huckleberry Finn",
  "The Scarlet Letter",
  "Wuthering Heights",
  "Great Expectations",
  "Oliver Twist",
  "David Copperfield",
  "A Tale of Two Cities",
  "Dracula",
  "Frankenstein",
  "The War of the Worlds",
  "The Time Machine",
  "The Invisible Man",
  "Around the World in Eighty Days",
  "Twenty Thousand Leagues Under the Sea",
  "The Call of Cthulhu",
  "The Metamorphosis",
  "The Trial",
  "The Stranger",
  "The Plague",
  "The Little Black Fish",
  "The Unbearable Lightness of Being",
  "The Book of Disquiet",
  "The Things They Carried",
  "All the Light We Cannot See",
  "The Help",
  "The Color Purple",
  "Beloved",
  "The Handmaid's Tale",
  "Brave New World",
  "Lord of the Flies",
  "Animal Farm",
  "The Road",
  "Cloud Atlas",
  "Life of Pi",
  "The Curious Incident of the Dog in the Night-Time",
  "The Perks of Being a Wallflower",
  "The Fault in Our Stars",
  "Normal People",
  "The Secret History",
  "The Seven Husbands of Evelyn Hugo",
];

const bookPhotos = [
  "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1511108690759-009cfd6c8a8e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
];

const generatedBooks = additionalBookTitles.map((name, index) => ({
  name,
  price: 280 + (index % 9) * 35,
  description: `A memorable reading experience with themes of identity, courage and human connection.`,
  language: "English",
  pages: 180 + (index % 12) * 35,
  photo: bookPhotos[index % bookPhotos.length],
}));

const allBooks = [...books, ...generatedBooks];

const seedBooks = async (): Promise<void> => {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error("MONGO_URI is not configured");
  }

  await mongoose.connect(mongoUri);

  const results = await Promise.all(
    allBooks.map((book) =>
      Book.updateOne({ name: book.name }, { $setOnInsert: book }, { upsert: true }),
    ),
  );

  const inserted = results.filter((result) => result.upsertedCount > 0).length;
  const existing = results.length - inserted;
  console.log(`Books seed completed: ${inserted} inserted, ${existing} already existed`);
};

seedBooks()
  .catch((error) => {
    console.error("Books seed failed", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.disconnect();
  });
