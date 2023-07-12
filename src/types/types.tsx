export interface ArticleType {
  id: number;
  category: string;
  title: string;
  date: string;
  image: string;
  alt: string;
  important: string;
  color: string;
  header: {
    title: string;
    image: string;
    caption: string;
  };
  contents: {
    title?: string;
    paragraphs: (
      | string
      | {
          image?: {
            src: string;
            caption: string;
          }
          list?: {
            title: string;
            items: string[];
          };
        }
    )[];
  }[];
}