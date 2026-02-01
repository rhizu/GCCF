import { getNewsBySlug } from '@/lib/api/news';
import { News } from '@/types/news';
import Link from 'next/link';

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const news: News = await getNewsBySlug(slug);

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-[500px] bg-black">
        <img 
          src={news.featuredImage} 
          alt={news.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        
        <div className="relative container mx-auto px-6 max-w-7xl h-full flex items-end pb-16">
          <div className="text-white max-w-4xl">
            <Link
              href="/news"
              className="inline-flex items-center text-purple-300 hover:text-purple-200 mb-6 text-base font-medium transition-colors"
            >
              <span className="mr-2">Back</span>
            </Link>
            
            <div className="mb-4 flex flex-wrap gap-3">
              {news.category && (
                <span className="inline-block bg-purple-500 px-4 py-2 rounded-full text-sm font-bold uppercase">
                  {news.category}
                </span>
              )}
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                {formatDate(news.publishedDate)}
              </span>
            </div>
            
            <h1 className="text-6xl font-bold mb-6 leading-tight">{news.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-lg">
              {news.author && (
                <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span>By</span>
                  <span className="font-medium">{news.author}</span>
                </span>
              )}
              {news.source && (
                <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span>Source:</span>
                  <span className="font-medium">{news.source}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-12 rounded-r-lg">
          <p className="text-xl text-gray-800 leading-relaxed font-medium">
            {news.excerpt}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 whitespace-pre-line leading-relaxed text-lg">
            {news.content}
          </div>
        </div>

        {news.tags && news.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {news.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {news.sourceUrl && (
          <div className="mt-8 pt-8 border-t">
            <a
              href={news.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold"
            >
              <span>Read Original Source</span>
            </a>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/news"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-3 rounded-lg transition-colors"
          >
            Back to All News
          </Link>
        </div>
      </article>
    </div>
  );
}