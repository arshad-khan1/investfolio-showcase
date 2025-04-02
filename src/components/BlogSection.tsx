
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { blogData } from '@/data/blogData';

const BlogSection = () => {
  // Display only the first 3 blog posts on the homepage
  const featuredPosts = blogData.slice(0, 3);

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Blog</h2>
        <p className="section-subtitle max-w-4xl mx-auto">
          Insights on finance, markets, and investment strategies from my research and experience
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
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
                <Link 
                  to={`/blog/${post.id}`} 
                  className="flex items-center text-navy hover:text-gold transition-colors group"
                >
                  Read More 
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center px-6 py-3 border border-navy text-navy font-medium rounded hover:bg-navy hover:text-white transition-all"
          >
            View All Articles <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
