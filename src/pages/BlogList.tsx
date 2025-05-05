
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { blogData } from '@/data/blogData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogList = () => {
  return (
    <>
      <Header />
      <section className="section-padding bg-white pt-32"> {/* Added pt-32 for extra padding at top */}
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-display font-bold mb-3 text-center">Blog Articles</h1>
          <p className="section-subtitle max-w-4xl mx-auto text-center mb-12">
            Insights on finance, markets, and investment strategies from my research and experience
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((post) => (
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
                    to={post.link} 
                    target="_blank"
                    className="flex items-center text-navy hover:text-gold transition-colors group"
                  >
                    Read More 
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogList;
