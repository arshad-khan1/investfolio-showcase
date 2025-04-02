
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export const blogData: BlogPost[] = [
  {
    id: 1,
    title: "Understanding Modern Portfolio Theory",
    excerpt: "An exploration of diversification strategies and risk management techniques in today's market landscape.",
    date: "June 15, 2023",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Investment Strategy"
  },
  {
    id: 2,
    title: "ESG Investing: Beyond the Hype",
    excerpt: "Analyzing the real financial impact of environmental, social, and governance factors on long-term returns.",
    date: "August 22, 2023",
    image: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Sustainable Finance"
  },
  {
    id: 3,
    title: "Valuation Methods for Tech Startups",
    excerpt: "Comparing traditional DCF models with newer approaches to value high-growth technology companies.",
    date: "October 10, 2023",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Valuation"
  },
  {
    id: 4,
    title: "Financial Statement Analysis for Investors",
    excerpt: "A comprehensive guide to extracting valuable insights from balance sheets, income statements, and cash flow statements.",
    date: "November 5, 2023",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    category: "Fundamental Analysis"
  },
  {
    id: 5,
    title: "Behavioral Finance: Why Rational Markets Are a Myth",
    excerpt: "Exploring how psychological factors impact investment decisions and create market anomalies.",
    date: "December 18, 2023",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Behavioral Finance"
  },
  {
    id: 6,
    title: "The Art of Deal Structuring in M&A",
    excerpt: "Examining key considerations and techniques in structuring successful mergers and acquisitions.",
    date: "January 25, 2024",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    category: "Mergers & Acquisitions"
  }
];
