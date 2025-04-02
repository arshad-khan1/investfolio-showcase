
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogData } from '@/data/blogData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogDetail = () => {
  const { id } = useParams();
  const blogId = parseInt(id as string);
  
  // Find the blog post with the matching ID
  const post = blogData.find(post => post.id === blogId);

  // If post not found, show error message
  if (!post) {
    return (
      <>
        <Header />
        <div className="container mx-auto py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-display font-bold mb-6">Blog post not found</h1>
            <Link to="/blog">
              <Button variant="outline">
                <ArrowLeft className="mr-2" size={16} />
                Back to all articles
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto py-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back button */}
          <Link to="/blog">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="mr-2" size={16} />
              Back to all articles
            </Button>
          </Link>
          
          {/* Blog post header */}
          <div className="mb-8">
            <div className="flex items-center text-sm text-muted-foreground mb-3">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span className="text-gold">{post.category}</span>
            </div>
            <h1 className="text-4xl font-display font-bold mb-4">{post.title}</h1>
          </div>
          
          {/* Featured image */}
          <div className="mb-8 rounded-lg overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto"
            />
          </div>
          
          {/* Blog content */}
          <div className="prose max-w-none">
            <p className="text-lg mb-6">{post.excerpt}</p>
            
            {/* Extended content - in real application, this would come from a CMS or database */}
            <p className="mb-4">
              Financial markets have evolved significantly over the decades, and with them, so have investment strategies. In today's complex environment, understanding Modern Portfolio Theory (MPT) provides investors with a framework to build diversified portfolios that aim to maximize returns for a given level of risk.
            </p>
            
            <h2 className="text-2xl font-display font-medium my-6">The Principles of Modern Portfolio Theory</h2>
            
            <p className="mb-4">
              Developed by Harry Markowitz in 1952, Modern Portfolio Theory revolutionized how investors think about portfolio construction. The theory suggests that investors should focus not on the risk-return characteristics of individual assets, but rather on how assets perform together as a portfolio. By combining assets with different correlation patterns, investors can potentially reduce portfolio volatility without sacrificing returns.
            </p>
            
            <p className="mb-4">
              The key insights from MPT include:
            </p>
            
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Diversification across asset classes can reduce unsystematic risk</li>
              <li className="mb-2">The relationship between assets (correlation) is as important as the characteristics of individual assets</li>
              <li className="mb-2">For every level of risk, there exists an optimal portfolio that maximizes returns</li>
              <li className="mb-2">The efficient frontier represents the set of optimal portfolios that offer the highest expected return for a defined level of risk</li>
            </ul>
            
            <h2 className="text-2xl font-display font-medium my-6">Modern Applications and Challenges</h2>
            
            <p className="mb-4">
              While MPT has been foundational to modern investment management, it does have limitations in today's markets. The theory assumes normal distribution of returns and stable correlations between assets—assumptions that don't always hold true, especially during market crises when correlations tend to increase.
            </p>
            
            <p className="mb-4">
              Contemporary portfolio managers are incorporating advanced techniques to address these limitations, including:
            </p>
            
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Factor investing strategies that target specific return drivers</li>
              <li className="mb-2">Alternative risk metrics that better account for tail risks</li>
              <li className="mb-2">Dynamic asset allocation approaches that adapt to changing market conditions</li>
            </ul>
            
            <p>
              As markets continue to evolve, so too will portfolio construction methodologies. However, the fundamental principle of diversification established by Markowitz remains as relevant today as it was seven decades ago.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
