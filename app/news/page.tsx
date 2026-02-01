import { getAllNews } from '@/lib/api/news';
import { News } from '@/types/news';
import NewsCard from '@/components/NewsCard';

export default async function NewsPage() {
  let news: News[] = [];
  
  try {
    news = await getAllNews();
  } catch (error) {
    console.error('Failed to fetch news:', error);
  }

  // Group news by category
  const categories = Array.from(new Set(news.map(n => n.category).filter(Boolean)));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Cybersecurity News
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Stay updated with the latest cybersecurity news, threats, vulnerabilities, 
              and industry developments from around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Latest News
            </h2>
            <p className="text-lg text-gray-600">
              {news.length} {news.length === 1 ? 'article' : 'articles'} published
            </p>
          </div>

          {/* News Grid */}
          {news.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((article) => (
                <NewsCard key={article.id} news={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-gray-400 text-6xl mb-4">📰</div>
              <p className="text-gray-500 text-xl">No news articles found.</p>
              <p className="text-gray-400 mt-2">Check if backend is running and seeded.</p>
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      {categories.length > 0 && (
        <section className="py-12 bg-white border-t">
          <div className="container mx-auto px-6 max-w-7xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <span
                  key={category}
                  className="inline-block bg-purple-100 text-purple-800 px-6 py-3 rounded-lg font-semibold"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}