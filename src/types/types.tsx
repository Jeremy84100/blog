export interface ArticleType {
  id: number;
  category: string;
  title: string;
  date: string;
  image: string;
  important: string;
  color: string;
  contents?: { title: string; content: string; }[];
}
