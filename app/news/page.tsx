import { News } from "@/types/news";

const mockNews: News[] = [
  {
    id: 1,
    title: "Cybersecurity Workshop",
    content: "A new workshop is coming soon.",
    createdAt: "2026-01-20",
  },
];

export default function NewsPage() {
  return (
    <>
      <h1>Latest News</h1>
      {mockNews.map((news) => (
        <div key={news.id}>
          <h3>{news.title}</h3>
          <p>{news.content}</p>
          <small>{news.createdAt}</small>
        </div>
      ))}
    </>
  );
}
