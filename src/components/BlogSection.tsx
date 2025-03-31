
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Modern Portfolio Theory',
      excerpt: "An exploration of diversification strategies and risk management techniques in today's market landscape.",
      date: 'June 15, 2023',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'Investment Strategy'
    },
    {
      id: 2,
      title: 'ESG Investing: Beyond the Hype',
      excerpt: 'Analyzing the real financial impact of environmental, social, and governance factors on long-term returns.',
      date: 'August 22, 2023',
      image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'Sustainable Finance'
    },
    {
      id: 3,
      title: 'Valuation Methods for Tech Startups',
      excerpt: 'Comparing traditional DCF models with newer approaches to value high-growth technology companies.',
      date: 'October 10, 2023',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'Valuation'
    },
  ];

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Blog</h2>
        <p className="section-subtitle max-w-4xl mx-auto">
          Insights on finance, markets, and investment strategies from my research and experience
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar size={14} className="mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span className="text-gold">{post.category}</span>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription className="text-base">{post.excerpt}</CardDescription>
              </CardHeader>
              
              <CardFooter>
                <a href="#" className="flex items-center text-navy hover:text-gold transition-colors group">
                  Read More 
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 border border-navy text-navy font-medium rounded hover:bg-navy hover:text-white transition-all"
          >
            View All Articles <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
