import { Quote } from "./model/quote/quote";

// Initial array with 6 quotes
export const quotes: Quote[] = [
  new Quote(1, 'Stay hungry.Stay foolish', 'Steve Jobs', 'Lynn Nyangon', new Date(2022, 2, 10)),
  new Quote(
    2,
    'Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid',
    'Albert Einstein',
    'Lynn Nyangon',
    new Date(2022, 0, 1)
  ),
  new Quote(
    3,
    'The only limit to the height of your achievements is the reach of your dreams and your willingness to work hard for them',
    'Michelle Obama',
    'Lynn Nyangon',
    new Date(2020, 1, 12)
  ),
  new Quote(
    4,
    "Your time is limited so don't waste it living somebody else's life",
    'Steve Jobs',
    'Lynn Nyangon',
    new Date(2022, 0, 18)
  ),
  new Quote(
    5,
    'When they go low, we go high',
    'Michelle Obama',
    'Lynn Nyangon',
    new Date(2011, 3, 6)
  ),
  new Quote(
    6,
    'A person who never made a mistake never tried anything new',
    'Albert Einstein',
    'Lynn Nyangon',
    new Date(2022, 2, 28)
  )
];
