export function getFlashcardData(deck) {
    const decks = [
      {
        title: "React",
        uuid: 1,
        questions: [
          {
            question: "What is React?",
            answer: "A library for managing user interfaces",
            uuid: 11
          },
          {
            question: "Where do you make Ajax requests in React?",
            answer: "The componentDidMount lifecycle event",
            uuid: 12
          }
        ]
      },
      {
        title: "JavaScript",
        uuid: 2,
        questions: [
          {
            question: "What is a closure?",
            answer:
              "The combination of a function and the lexical environment within which that function was declared.",
            uuid: 21
          }
        ]
      }
    ];
    return typeof deck === typeof undefined ? decks : decks[deck];
  }